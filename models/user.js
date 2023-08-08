import mongoose from 'mongoose'
import bcrypt from 'bcrypt'

const userSchema = new mongoose.Schema({

    username: {type:String, require: true, trim: true},
    email: {type:String, require:true, unique:true, lowercase: true, trim: true},
    password:{type:String, require:true, select:false},
    created:{type:Date, default:Date.now},

});

userSchema.pre('save', async function (next) {
    this.password = await bcrypt.hash(this.password, 10)
    next() 
});

export default mongoose.model('User', userSchema);