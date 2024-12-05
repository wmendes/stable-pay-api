import { IsNotEmpty, IsNumber, IsString, IsOptional } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class PaymentRequestDto {
  @ApiProperty({
    description: 'The amount to be paid',
    example: 100.50,
  })
  @IsNotEmpty()
  @IsNumber()
  amount: number;

  @ApiProperty({
    description: 'Currency code (e.g., USD, EUR)',
    example: 'USD',
  })
  @IsNotEmpty()
  @IsString()
  currency: string;

  @ApiProperty({
    description: 'Unique identifier of the receiver',
    example: 'receiver123',
  })
  @IsNotEmpty()
  @IsString()
  receiverId: string;

  @ApiPropertyOptional({
    description: 'Optional description of the payment',
    example: 'Payment for services',
  })
  @IsOptional()
  @IsString()
  description?: string;
} 