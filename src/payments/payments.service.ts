import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Payment } from './entities/payment.entity';
import { PaymentRequestDto } from './dto/payment-request.dto';
import { PaymentConfirmationDto } from './dto/payment-confirmation.dto';
import * as crypto from 'crypto';

@Injectable()
export class PaymentsService {
  constructor(
    @InjectRepository(Payment)
    private paymentRepository: Repository<Payment>,
  ) {}

  async createPayment(paymentRequest: PaymentRequestDto): Promise<{ paymentId: string; status: string }> {
    const payment = this.paymentRepository.create({
      ...paymentRequest,
      status: 'pending',
    });

    const savedPayment = await this.paymentRepository.save(payment);
    return {
      paymentId: savedPayment.id,
      status: savedPayment.status,
    };
  }

  async getPayment(paymentId: string): Promise<Payment> {
    const payment = await this.paymentRepository.findOne({ where: { id: paymentId } });
    if (!payment) {
      throw new NotFoundException('Payment not found');
    }
    return payment;
  }

  async confirmPayment(paymentId: string, confirmationData: PaymentConfirmationDto): Promise<{ status: string }> {
    const payment = await this.getPayment(paymentId);
    
    if (payment.status !== 'pending') {
      throw new BadRequestException('Payment cannot be confirmed - invalid status');
    }

    // In a real implementation, you would verify the signature here
    // This is a simple example using SHA-256
    const expectedSignature = this.generateSignature(paymentId, confirmationData.payerId);
    // if (confirmationData.signedPaymentId !== expectedSignature) {
    //   throw new BadRequestException('Invalid signature');
    // }

    payment.status = 'confirmed';
    payment.payerId = confirmationData.payerId;
    payment.signedPaymentId = confirmationData.signedPaymentId;

    await this.paymentRepository.save(payment);
    return { status: 'confirmed' };
  }

  private generateSignature(paymentId: string, payerId: string): string {
    // This is a simplified example. In a real implementation,
    // you would use proper cryptographic signing
    return crypto
      .createHash('sha256')
      .update(`${paymentId}:${payerId}`)
      .digest('hex');
  }
} 