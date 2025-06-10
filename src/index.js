import mocksRouter from './routes/mocks.router.js';
import express from "express";
import 'dotenv/config';
import connectDB from './config/database.js';

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());

connectDB();



app.use('/api/mocks', mocksRouter);

app.listen(PORT, ()=>{
    console.log("Servidor en Funcionando en el Puerto: ", PORT)
})


export default app;