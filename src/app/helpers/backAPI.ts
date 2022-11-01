import axios from "axios"
import { INotesModelCore } from "../../../express/DataBaseService/Models/NotesModel"

class BackAPIClass {

    axios = axios.create({baseURL: 'http://localhost:8080'})

    async axiosReq(type: 'get'|'post', url: string,  body?: any): Promise<INotesModelCore[] | boolean>{
        try {
           return (await (this.axios[type](url, body))).data
        } catch (error) {
            console.error(error)
            return false
        }
    }

    async getAll(){
        return await this.axiosReq('get', '/notes')
    }
    async update(note: INotesModelCore){
        return await this.axiosReq('post', '/update', note)
    }
    async save(note: INotesModelCore){
        return await this.axiosReq('post', '/save', note)
    }
    async delete(note: INotesModelCore){
        return await this.axiosReq('post', '/delete', note)
    }
}

export const BackAPI = new BackAPIClass()