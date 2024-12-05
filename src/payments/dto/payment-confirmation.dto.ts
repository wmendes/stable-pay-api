import { IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class PaymentConfirmationDto {
  @ApiProperty({
    description: 'Unique identifier of the payer',
    example: 'payer123',
  })
  @IsNotEmpty()
  @IsString()
  payerId: string;

  @ApiProperty({
    description: 'Digital signature of the payment ID',
    example: 'a1b2c3d4e5f6...',
  })
  @IsNotEmpty()
  @IsString()
  signedPaymentId: string;
} 