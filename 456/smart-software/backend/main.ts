import 'reflect-metadata';
import 'dotenv/config';
import {Controller,Get,Module,Query,ServiceUnavailableException,NotFoundException,Param} from '@nestjs/common';
import {NestFactory} from '@nestjs/core';
import mongoose from 'mongoose';
import {StoryModel} from './models';
@Controller('api')
class ContentController {
 @Get('health') health(){return {status:mongoose.connection.readyState===1?'ok':'unavailable',database:mongoose.connection.readyState===1?'connected':'disconnected'};}
 @Get('stories') async stories(@Query('category') category?:string){if(mongoose.connection.readyState!==1)throw new ServiceUnavailableException('Database unavailable');const filter=category?{category}:{};return StoryModel.find(filter).select('-_id -__v -createdAt -updatedAt').sort({createdAt:-1}).limit(100).lean();}
 @Get('stories/:id') async story(@Param('id') id:string){if(mongoose.connection.readyState!==1)throw new ServiceUnavailableException('Database unavailable');const story=await StoryModel.findOne({id}).select('-_id -__v -createdAt -updatedAt').lean();if(!story)throw new NotFoundException('Story not found');return story;}
}
@Module({controllers:[ContentController]}) class AppModule{}
async function main(){const uri=process.env.MONGODB_URI;if(!uri)throw Error('Set MONGODB_URI before starting the API');await mongoose.connect(uri,{serverSelectionTimeoutMS:5000});const app=await NestFactory.create(AppModule);app.enableCors({origin:(process.env.FRONTEND_ORIGIN||'http://127.0.0.1:3000').split(',')});app.enableShutdownHooks();await app.listen(Number(process.env.PORT||4000),'0.0.0.0');}
main().catch(()=>{console.error('API startup failed. Check MONGODB_URI and database availability.');process.exit(1)});
