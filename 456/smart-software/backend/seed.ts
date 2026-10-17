import 'dotenv/config';
import mongoose from 'mongoose';
import {StoryModel} from './models';
import {stories} from '../shared/content';
async function main(){if(!process.env.MONGODB_URI)throw Error('MONGODB_URI required');await mongoose.connect(process.env.MONGODB_URI,{serverSelectionTimeoutMS:5000});for(const story of stories)await StoryModel.updateOne({id:story.id},{$setOnInsert:story},{upsert:true});console.log('Example stories seeded without overwriting existing content');await mongoose.disconnect()}
main().catch(()=>{console.error('Seed failed. Check database configuration.');process.exit(1)});
