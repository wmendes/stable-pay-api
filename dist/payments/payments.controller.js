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
exports.PaymentsController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const payments_service_1 = require("./payments.service");
const payment_request_dto_1 = require("./dto/payment-request.dto");
const payment_confirmation_dto_1 = require("./dto/payment-confirmation.dto");
const payment_entity_1 = require("./entities/payment.entity");
let PaymentsController = class PaymentsController {
    constructor(paymentsService) {
        this.paymentsService = paymentsService;
    }
    createPayment(paymentRequest) {
        return this.paymentsService.createPayment(paymentRequest);
    }
    getPayment(paymentId) {
        return this.paymentsService.getPayment(paymentId);
    }
    confirmPayment(paymentId, confirmationData) {
        return this.paymentsService.confirmPayment(paymentId, confirmationData);
    }
};
exports.PaymentsController = PaymentsController;
__decorate([
    (0, common_1.Post)(),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    (0, swagger_1.ApiOperation)({ summary: 'Create a payment request' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Payment request created successfully.' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Invalid input.' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [payment_request_dto_1.PaymentRequestDto]),
    __metadata("design:returntype", void 0)
], PaymentsController.prototype, "createPayment", null);
__decorate([
    (0, common_1.Get)(':paymentId'),
    (0, swagger_1.ApiOperation)({ summary: 'Get payment details' }),
    (0, swagger_1.ApiParam)({ name: 'paymentId', description: 'ID of the payment request' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Payment details retrieved successfully.', type: payment_entity_1.Payment }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Payment request not found.' }),
    __param(0, (0, common_1.Param)('paymentId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PaymentsController.prototype, "getPayment", null);
__decorate([
    (0, common_1.Post)(':paymentId/confirm'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiOperation)({ summary: 'Confirm payment' }),
    (0, swagger_1.ApiParam)({ name: 'paymentId', description: 'ID of the payment request' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Payment confirmed successfully.' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Invalid signature or input.' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Payment request not found.' }),
    __param(0, (0, common_1.Param)('paymentId')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, payment_confirmation_dto_1.PaymentConfirmationDto]),
    __metadata("design:returntype", void 0)
], PaymentsController.prototype, "confirmPayment", null);
exports.PaymentsController = PaymentsController = __decorate([
    (0, swagger_1.ApiTags)('payments'),
    (0, common_1.Controller)('payments'),
    __metadata("design:paramtypes", [payments_service_1.PaymentsService])
], PaymentsController);
//# sourceMappingURL=payments.controller.js.map