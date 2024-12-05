import { IsNotEmpty, IsNumber, IsString, IsOptional } from 'class-validator';

export class PaymentRequestDto {
  @IsNotEmpty()
  @IsNumber()
  amount: number;

  @IsNotEmpty()
  @IsString()
  currency: string;

  @IsNotEmpty()
  @IsString()
  receiverId: string;

  @IsOptional()
  @IsString()
  description?: string;
} 