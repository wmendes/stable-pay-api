import { IsNotEmpty, IsString } from 'class-validator';

export class PaymentConfirmationDto {
  @IsNotEmpty()
  @IsString()
  payerId: string;

  @IsNotEmpty()
  @IsString()
  signedPaymentId: string;
} 