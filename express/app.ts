import { Express } from "express";
import * as cors from 'cors';
import * as express from 'express';
import { router } from "./router";

export const app: Express = express();

//Base options

app.use(cors({ origin:'*', credentials:true,  optionsSuccessStatus: 200 }))
app.use(express.urlencoded({ extended: true }));
app.use(express.json())
app.use('/', router)