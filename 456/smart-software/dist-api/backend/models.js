"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StoryModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
exports.StoryModel = mongoose_1.default.model('Story', new mongoose_1.default.Schema({ id: { type: String, required: true, unique: true }, category: { type: String, required: true }, title: { type: String, required: true }, body: { type: String, required: true }, date: { type: String, required: true }, image: { type: String, required: true } }, { timestamps: true }));
