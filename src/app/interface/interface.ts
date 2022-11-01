import { INotesModelCore } from "../../../express/DataBaseService/Models/NotesModel"


export enum dataLocation {
    LocalStorage = "LocalStorage",
    API = "API",
}

export enum Methods {
    getAll = "getAll",
    update = "update",
    delete = "delete",
    save = "save",
}

export interface INotesModelCorePlus extends INotesModelCore {
    edit?: boolean
  }