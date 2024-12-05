"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Payment = void 0;
const typeorm_1 = require("typeorm");
const swagger_1 = require("@nestjs/swagger");
let Payment = class Payment {
};
exports.Payment = Payment;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Unique identifier for the payment',
        example: '123e4567-e89b-12d3-a456-426614174000',
    }),
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], Payment.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The amount to be paid',
        example: 100.50,
    }),
    (0, typeorm_1.Column)({ type: 'decimal', precision: 10, scale: 2 }),
    __metadata("design:type", Number)
], Payment.prototype, "amount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Currency code',
        example: 'USD',
    }),
    (0, typeorm_1.Column)({ length: 3 }),
    __metadata("design:type", String)
], Payment.prototype, "currency", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Unique identifier of the receiver',
        example: 'receiver123',
    }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Payment.prototype, "receiverId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Optional description of the payment',
        example: 'Payment for services',
        required: false,
    }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Payment.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Unique identifier of the payer',
        example: 'payer123',
        required: false,
    }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Payment.prototype, "payerId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Digital signature of the payment ID',
        example: 'a1b2c3d4e5f6...',
        required: false,
    }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Payment.prototype, "signedPaymentId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Status of the payment',
        enum: ['pending', 'confirmed', 'cancelled'],
        example: 'pending',
    }),
    (0, typeorm_1.Column)({
        type: 'enum',
        enum: ['pending', 'confirmed', 'cancelled'],
        default: 'pending'
    }),
    __metadata("design:type", String)
], Payment.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Timestamp when the payment was created',
    }),
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Payment.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Timestamp when the payment was last updated',
    }),
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], Payment.prototype, "updatedAt", void 0);
exports.Payment = Payment = __decorate([
    (0, typeorm_1.Entity)('payments')
], Payment);
//# sourceMappingURL=payment.entity.js.map