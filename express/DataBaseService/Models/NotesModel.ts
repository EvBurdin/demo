import { Sequelize, Model, DataTypes, InferAttributes, InferCreationAttributes, ModelStatic } from "sequelize";

export interface INotesModelCore {
    id: string,
    tittle: string,
    body: string,
}
// export type INotesModelCore_U = {[key in keyof INotesModelCore]: INotesModelCore[key] }

interface INotesModel extends INotesModelCore, Model<InferAttributes<INotesModel>, InferCreationAttributes<INotesModel>> {}

export class NotesModel {
    NotesModel: ModelStatic<INotesModel>

    constructor(sequelize: Sequelize){
        this.NotesModel = sequelize.define<INotesModel>('Notes', {
            id: {
                type: DataTypes.STRING,
                field: 'id',
                primaryKey: true
            },
            tittle: {
                type: DataTypes.STRING,
                field: 'tittle'
            },
            body: {
                type: DataTypes.STRING,
                field: 'body'
            }
        }, {
            freezeTableName: true
        })
        this.NotesModel.sync()
    }

    async getAll(){
        try {
            return await this.NotesModel.findAll({order: [["createdAt" , "DESC"]]})
        } catch (error) {
            console.error(error)
            return false
        }
    }

    async save(entry: INotesModelCore){
        try {
            await this.NotesModel.create(entry)
        } catch (error) {
            console.error(error)
            return false
        }
        return true
    }

    async update(note: INotesModelCore){
        try {
            await this.NotesModel.update(note, {where: {id: note.id}})
        } catch (error) {
            console.error(error)
            return false
        }
        return true
    }

    async delete(note: INotesModelCore){
        try {
            await this.NotesModel.destroy({where: {id: note.id}})
        } catch (error) {
            console.error(error)
            return false
        }
        return true
    }
}