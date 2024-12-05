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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const payment_entity_1 = require("./entities/payment.entity");
const crypto = require("crypto");
let PaymentsService = class PaymentsService {
    constructor(paymentRepository) {
        this.paymentRepository = paymentRepository;
    }
    async createPayment(paymentRequest) {
        const payment = this.paymentRepository.create({
            ...paymentRequest,
            status: 'pending',
        });
        const savedPayment = await this.paymentRepository.save(payment);
        return {
            paymentId: savedPayment.id,
            status: savedPayment.status,
        };
    }
    async getPayment(paymentId) {
        const payment = await this.paymentRepository.findOne({ where: { id: paymentId } });
        if (!payment) {
            throw new common_1.NotFoundException('Payment not found');
        }
        return payment;
    }
    async confirmPayment(paymentId, confirmationData) {
        const payment = await this.getPayment(paymentId);
        if (payment.status !== 'pending') {
            throw new common_1.BadRequestException('Payment cannot be confirmed - invalid status');
        }
        const expectedSignature = this.generateSignature(paymentId, confirmationData.payerId);
        payment.status = 'confirmed';
        payment.payerId = confirmationData.payerId;
        payment.signedPaymentId = confirmationData.signedPaymentId;
        await this.paymentRepository.save(payment);
        return { status: 'confirmed' };
    }
    generateSignature(paymentId, payerId) {
        return crypto
            .createHash('sha256')
            .update(`${paymentId}:${payerId}`)
            .digest('hex');
    }
};
exports.PaymentsService = PaymentsService;
exports.PaymentsService = PaymentsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(payment_entity_1.Payment)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], PaymentsService);
//# sourceMappingURL=payments.service.js.map