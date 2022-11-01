import { Router } from "express";
import * as express from 'express';
import * as path from 'path';
import { DataBaseService } from "./DataBaseService/DataBaseService";


export const router = Router()

router.use(`/`, express.static(path.join(__dirname, "../")));
router.get('/notes', async (req, res) => {
    res.send(await DataBaseService.NotesModel.getAll())
})
router.post(`/update`, async (req, res) => {
    res.send(await DataBaseService.NotesModel.update(req.body))
});
router.post(`/save`, async (req, res) => {
    res.send(await DataBaseService.NotesModel.save(req.body))
});
router.post(`/delete`, async (req, res) => {
    res.send(await DataBaseService.NotesModel.delete(req.body))
});