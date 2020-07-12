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
exports.AppController = exports.CreateUserDto = void 0;
const common_1 = require("@nestjs/common");
const class_validator_1 = require("class-validator");
const app_service_1 = require("./app.service");
const register_exception_filter_1 = require("./register-exception.filter");
const packageJSON = require('../package.json');
const timezones_1 = require("./data/timezones");
class CreateUserDto {
}
__decorate([
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], CreateUserDto.prototype, "publicBadgeName", void 0);
__decorate([
    class_validator_1.IsEmail(),
    __metadata("design:type", String)
], CreateUserDto.prototype, "privateEmail", void 0);
__decorate([
    class_validator_1.IsIn(timezones_1.default),
    __metadata("design:type", String)
], CreateUserDto.prototype, "timezone", void 0);
__decorate([
    class_validator_1.MaxLength(7),
    __metadata("design:type", String)
], CreateUserDto.prototype, "availableFrom", void 0);
__decorate([
    class_validator_1.MaxLength(7),
    __metadata("design:type", String)
], CreateUserDto.prototype, "availableTo", void 0);
__decorate([
    class_validator_1.MaxLength(200),
    __metadata("design:type", String)
], CreateUserDto.prototype, "BofProposal", void 0);
__decorate([
    class_validator_1.MaxLength(1600),
    __metadata("design:type", String)
], CreateUserDto.prototype, "BofProposalSummary", void 0);
__decorate([
    class_validator_1.MaxLength(800),
    __metadata("design:type", String)
], CreateUserDto.prototype, "publicBadgeByline", void 0);
__decorate([
    class_validator_1.MaxLength(400),
    __metadata("design:type", String)
], CreateUserDto.prototype, "privateName", void 0);
__decorate([
    class_validator_1.MaxLength(800),
    __metadata("design:type", String)
], CreateUserDto.prototype, "org", void 0);
__decorate([
    class_validator_1.MaxLength(400),
    __metadata("design:type", String)
], CreateUserDto.prototype, "website", void 0);
__decorate([
    class_validator_1.MaxLength(800),
    __metadata("design:type", String)
], CreateUserDto.prototype, "ActivityPub", void 0);
__decorate([
    class_validator_1.Equals('agreed'),
    __metadata("design:type", String)
], CreateUserDto.prototype, "codeOfConduct", void 0);
exports.CreateUserDto = CreateUserDto;
let AppController = class AppController {
    constructor(appService) {
        this.appService = appService;
    }
    getHello() { return this.appService.getHello(); }
    async getConfirm(id) {
        await this.appService.getConfirm(id);
    }
    async create(createUserDto) {
        await this.appService.postRegistration(createUserDto);
    }
};
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], AppController.prototype, "getHello", null);
__decorate([
    common_1.Get('confirm/:id'),
    common_1.Redirect(`${packageJSON.redaktor.base || 'http://localhost'}/#register/confirmed`),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "getConfirm", null);
__decorate([
    common_1.Post(),
    common_1.UseFilters(new register_exception_filter_1.RegisterExceptionFilter()),
    common_1.Redirect(`${packageJSON.redaktor.base || 'http://localhost'}/#register/sent`),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CreateUserDto]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "create", null);
AppController = __decorate([
    common_1.Controller(),
    __metadata("design:paramtypes", [app_service_1.AppService])
], AppController);
exports.AppController = AppController;
//# sourceMappingURL=app.controller.js.map