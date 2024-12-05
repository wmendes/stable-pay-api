import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity('payments')
export class Payment {
  @ApiProperty({
    description: 'Unique identifier for the payment',
    example: '123e4567-e89b-12d3-a456-426614174000',
  })
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ApiProperty({
    description: 'The amount to be paid',
    example: 100.50,
  })
  @Column({ type: 'decimal', precision: 10, scale: 2 })
  amount: number;

  @ApiProperty({
    description: 'Currency code',
    example: 'USD',
  })
  @Column({ length: 3 })
  currency: string;

  @ApiProperty({
    description: 'Unique identifier of the receiver',
    example: 'receiver123',
  })
  @Column()
  receiverId: string;

  @ApiProperty({
    description: 'Optional description of the payment',
    example: 'Payment for services',
    required: false,
  })
  @Column({ nullable: true })
  description?: string;

  @ApiProperty({
    description: 'Unique identifier of the payer',
    example: 'payer123',
    required: false,
  })
  @Column({ nullable: true })
  payerId?: string;

  @ApiProperty({
    description: 'Digital signature of the payment ID',
    example: 'a1b2c3d4e5f6...',
    required: false,
  })
  @Column({ nullable: true })
  signedPaymentId?: string;

  @ApiProperty({
    description: 'Status of the payment',
    enum: ['pending', 'confirmed', 'cancelled'],
    example: 'pending',
  })
  @Column({
    type: 'enum',
    enum: ['pending', 'confirmed', 'cancelled'],
    default: 'pending'
  })
  status: 'pending' | 'confirmed' | 'cancelled';

  @ApiProperty({
    description: 'Timestamp when the payment was created',
  })
  @CreateDateColumn()
  createdAt: Date;

  @ApiProperty({
    description: 'Timestamp when the payment was last updated',
  })
  @UpdateDateColumn()
  updatedAt: Date;
} 