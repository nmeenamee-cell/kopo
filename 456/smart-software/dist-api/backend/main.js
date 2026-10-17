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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
require("dotenv/config");
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const mongoose_1 = __importDefault(require("mongoose"));
const models_1 = require("./models");
let ContentController = class ContentController {
    health() { return { status: mongoose_1.default.connection.readyState === 1 ? 'ok' : 'unavailable', database: mongoose_1.default.connection.readyState === 1 ? 'connected' : 'disconnected' }; }
    async stories(category) { if (mongoose_1.default.connection.readyState !== 1)
        throw new common_1.ServiceUnavailableException('Database unavailable'); const filter = category ? { category } : {}; return models_1.StoryModel.find(filter).select('-_id -__v -createdAt -updatedAt').sort({ createdAt: -1 }).limit(100).lean(); }
    async story(id) { if (mongoose_1.default.connection.readyState !== 1)
        throw new common_1.ServiceUnavailableException('Database unavailable'); const story = await models_1.StoryModel.findOne({ id }).select('-_id -__v -createdAt -updatedAt').lean(); if (!story)
        throw new common_1.NotFoundException('Story not found'); return story; }
};
__decorate([
    (0, common_1.Get)('health'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ContentController.prototype, "health", null);
__decorate([
    (0, common_1.Get)('stories'),
    __param(0, (0, common_1.Query)('category')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ContentController.prototype, "stories", null);
__decorate([
    (0, common_1.Get)('stories/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ContentController.prototype, "story", null);
ContentController = __decorate([
    (0, common_1.Controller)('api')
], ContentController);
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({ controllers: [ContentController] })
], AppModule);
async function main() { const uri = process.env.MONGODB_URI; if (!uri)
    throw Error('Set MONGODB_URI before starting the API'); await mongoose_1.default.connect(uri, { serverSelectionTimeoutMS: 5000 }); const app = await core_1.NestFactory.create(AppModule); app.enableCors({ origin: (process.env.FRONTEND_ORIGIN || 'http://127.0.0.1:3000').split(',') }); app.enableShutdownHooks(); await app.listen(Number(process.env.PORT || 4000), '0.0.0.0'); }
main().catch(() => { console.error('API startup failed. Check MONGODB_URI and database availability.'); process.exit(1); });
