import mongoose from 'mongoose'

const connectDb = async () => {

    try {
        await mongoose.connect(process.env.MONGODB_URI);

        console.log("Conexão estabelecida com o MongoDb")
    } catch (err) {
        console.log(err)
    }
};

export default connectDb;