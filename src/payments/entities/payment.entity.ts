import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('payments')
export class Payment {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  amount: number;

  @Column({ length: 3 })
  currency: string;

  @Column()
  receiverId: string;

  @Column({ nullable: true })
  description?: string;

  @Column({ nullable: true })
  payerId?: string;

  @Column({ nullable: true })
  signedPaymentId?: string;

  @Column({
    type: 'enum',
    enum: ['pending', 'confirmed', 'cancelled'],
    default: 'pending'
  })
  status: 'pending' | 'confirmed' | 'cancelled';

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
} 