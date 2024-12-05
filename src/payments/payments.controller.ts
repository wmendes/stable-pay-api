import { Controller, Post, Get, Body, Param, HttpCode, HttpStatus } from '@nestjs/common';
import { PaymentsService } from './payments.service';
import { PaymentRequestDto } from './dto/payment-request.dto';
import { PaymentConfirmationDto } from './dto/payment-confirmation.dto';

@Controller('payments')
export class PaymentsController {
  constructor(private readonly paymentsService: PaymentsService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  createPayment(@Body() paymentRequest: PaymentRequestDto) {
    return this.paymentsService.createPayment(paymentRequest);
  }

  @Get(':paymentId')
  getPayment(@Param('paymentId') paymentId: string) {
    return this.paymentsService.getPayment(paymentId);
  }

  @Post(':paymentId/confirm')
  @HttpCode(HttpStatus.OK)
  confirmPayment(
    @Param('paymentId') paymentId: string,
    @Body() confirmationData: PaymentConfirmationDto,
  ) {
    return this.paymentsService.confirmPayment(paymentId, confirmationData);
  }
} 