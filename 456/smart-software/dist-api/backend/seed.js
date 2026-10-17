"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const mongoose_1 = __importDefault(require("mongoose"));
const models_1 = require("./models");
const content_1 = require("../shared/content");
async function main() { if (!process.env.MONGODB_URI)
    throw Error('MONGODB_URI required'); await mongoose_1.default.connect(process.env.MONGODB_URI, { serverSelectionTimeoutMS: 5000 }); for (const story of content_1.stories)
    await models_1.StoryModel.updateOne({ id: story.id }, { $setOnInsert: story }, { upsert: true }); console.log('Example stories seeded without overwriting existing content'); await mongoose_1.default.disconnect(); }
main().catch(() => { console.error('Seed failed. Check database configuration.'); process.exit(1); });
