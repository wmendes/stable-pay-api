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
exports.PaymentConfirmationDto = void 0;
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
class PaymentConfirmationDto {
}
exports.PaymentConfirmationDto = PaymentConfirmationDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Unique identifier of the payer',
        example: 'payer123',
    }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], PaymentConfirmationDto.prototype, "payerId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Digital signature of the payment ID',
        example: 'a1b2c3d4e5f6...',
    }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], PaymentConfirmationDto.prototype, "signedPaymentId", void 0);
//# sourceMappingURL=payment-confirmation.dto.js.map