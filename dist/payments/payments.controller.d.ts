import { PaymentsService } from './payments.service';
import { PaymentRequestDto } from './dto/payment-request.dto';
import { PaymentConfirmationDto } from './dto/payment-confirmation.dto';
import { Payment } from './entities/payment.entity';
export declare class PaymentsController {
    private readonly paymentsService;
    constructor(paymentsService: PaymentsService);
    createPayment(paymentRequest: PaymentRequestDto): Promise<{
        paymentId: string;
        status: string;
    }>;
    getPayment(paymentId: string): Promise<Payment>;
    confirmPayment(paymentId: string, confirmationData: PaymentConfirmationDto): Promise<{
        status: string;
    }>;
}
