import { PaymentsService } from './payments.service';
import { PaymentRequestDto } from './dto/payment-request.dto';
import { PaymentConfirmationDto } from './dto/payment-confirmation.dto';
export declare class PaymentsController {
    private readonly paymentsService;
    constructor(paymentsService: PaymentsService);
    createPayment(paymentRequest: PaymentRequestDto): Promise<{
        paymentId: string;
        status: string;
    }>;
    getPayment(paymentId: string): Promise<import("./entities/payment.entity").Payment>;
    confirmPayment(paymentId: string, confirmationData: PaymentConfirmationDto): Promise<{
        status: string;
    }>;
}
