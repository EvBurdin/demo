import { Sequelize } from "sequelize";
import { DATABASE_CLIENT, DATABASE_HOST, DATABASE_NAME, DATABASE_PASSWORD, DATABASE_PORT, DATABASE_USERNAME } from "../config";
import { NotesModel } from "./Models/NotesModel";

class DataBaseServiceClass{
    private sequelize: Sequelize

    NotesModel: NotesModel

    constructor(){
        try {
            this.sequelize = new Sequelize(`${DATABASE_CLIENT}://${DATABASE_USERNAME}:${DATABASE_PASSWORD}@${DATABASE_HOST}:${DATABASE_PORT}/${DATABASE_NAME}`)

            this.NotesModel = new NotesModel(this.sequelize)

        } catch (error) {
            console.error(`DataBaseServiceClass: not init with: ${error}` )
        }
    }
}

export const DataBaseService = new DataBaseServiceClass()