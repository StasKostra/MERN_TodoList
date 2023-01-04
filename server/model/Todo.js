import mongoose from 'mongoose';
const { Schema } = mongoose;

export const ToDoSchema = new Schema({
  text: {
    type: String,
    required: true,
  },
  _id:{
    type:String,
    required:true
  }
})

const ToDo = mongoose.model('ToDoSchema', ToDoSchema)

export default ToDo