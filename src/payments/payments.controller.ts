import { Controller, Post, Get, Body, Param, HttpCode, HttpStatus } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiParam } from '@nestjs/swagger';
import { PaymentsService } from './payments.service';
import { PaymentRequestDto } from './dto/payment-request.dto';
import { PaymentConfirmationDto } from './dto/payment-confirmation.dto';
import { Payment } from './entities/payment.entity';

@ApiTags('payments')
@Controller('payments')
export class PaymentsController {
  constructor(private readonly paymentsService: PaymentsService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({ summary: 'Create a payment request' })
  @ApiResponse({ status: 201, description: 'Payment request created successfully.' })
  @ApiResponse({ status: 400, description: 'Invalid input.' })
  createPayment(@Body() paymentRequest: PaymentRequestDto) {
    return this.paymentsService.createPayment(paymentRequest);
  }

  @Get(':paymentId')
  @ApiOperation({ summary: 'Get payment details' })
  @ApiParam({ name: 'paymentId', description: 'ID of the payment request' })
  @ApiResponse({ status: 200, description: 'Payment details retrieved successfully.', type: Payment })
  @ApiResponse({ status: 404, description: 'Payment request not found.' })
  getPayment(@Param('paymentId') paymentId: string) {
    return this.paymentsService.getPayment(paymentId);
  }

  @Post(':paymentId/confirm')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Confirm payment' })
  @ApiParam({ name: 'paymentId', description: 'ID of the payment request' })
  @ApiResponse({ status: 200, description: 'Payment confirmed successfully.' })
  @ApiResponse({ status: 400, description: 'Invalid signature or input.' })
  @ApiResponse({ status: 404, description: 'Payment request not found.' })
  confirmPayment(
    @Param('paymentId') paymentId: string,
    @Body() confirmationData: PaymentConfirmationDto,
  ) {
    return this.paymentsService.confirmPayment(paymentId, confirmationData);
  }
} 