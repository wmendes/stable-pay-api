export declare class Payment {
    id: string;
    amount: number;
    currency: string;
    receiverId: string;
    description?: string;
    payerId?: string;
    signedPaymentId?: string;
    status: 'pending' | 'confirmed' | 'cancelled';
    createdAt: Date;
    updatedAt: Date;
}
