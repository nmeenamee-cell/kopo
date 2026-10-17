import mongoose from 'mongoose';
export const StoryModel=mongoose.model('Story',new mongoose.Schema({id:{type:String,required:true,unique:true},category:{type:String,required:true},title:{type:String,required:true},body:{type:String,required:true},date:{type:String,required:true},image:{type:String,required:true}},{timestamps:true}));
