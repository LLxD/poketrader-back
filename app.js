import Express from 'express';
import Cors from 'cors';
import router from './routes/routes.js';
import mongoose from 'mongoose';
import 'dotenv/config';
import bodyParser from 'body-parser';

const PORT = process.env.PORT || 5000;
const app = Express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({express:true, extended:true}))

mongoose.connect(process.env.MONGOURL).then(res=> console.log("Connected to Database")).catch(erros=> console.log(`Failed to connect to Database ${erros}`))
app.options('*', Cors())
app.use('/', router)

//TODO:
//ter uma rota pra página de troca e pra envio das trocas
//conexão com banco de dados pra armazenar essas trocas
//refact back to MVC model

console.log("Starting backend service at localhost:5000")
app.listen(PORT);