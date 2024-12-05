import { Repository } from 'typeorm';
import { Payment } from './entities/payment.entity';
import { PaymentRequestDto } from './dto/payment-request.dto';
import { PaymentConfirmationDto } from './dto/payment-confirmation.dto';
export declare class PaymentsService {
    private paymentRepository;
    constructor(paymentRepository: Repository<Payment>);
    createPayment(paymentRequest: PaymentRequestDto): Promise<{
        paymentId: string;
        status: string;
    }>;
    getPayment(paymentId: string): Promise<Payment>;
    confirmPayment(paymentId: string, confirmationData: PaymentConfirmationDto): Promise<{
        status: string;
    }>;
    private generateSignature;
}
