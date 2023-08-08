import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()

// dotenv.config()   // Configurando as variaveis do ambiente (.env)

const dbUser = process.env.DB_USER;
const dbPass = process.env.DB_PASS;

const connectDb = async () => {

    try {
        await mongoose.connect(`mongodb+srv://${dbUser}:${dbPass}@ageapp.a5r9unn.mongodb.net/`);

        console.log("Conexão estabelecida com o MongoDb")
    } catch (err) {
        res.status(500).send({Error: err})
    }
};

export default connectDb;