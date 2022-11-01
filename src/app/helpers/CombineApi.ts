import { dataLocation, INotesModelCorePlus, Methods } from "../interface/interface"
import { BackAPI } from "./backAPI"
import { LocalStorage } from "./localStorage"

class CombineApiClass {
    togle = dataLocation.API
    LocalStorage: typeof LocalStorage
    BackAPI: typeof BackAPI

    constructor() {
        this.LocalStorage = LocalStorage
        this.BackAPI = BackAPI
    }

    async construct(methods:  Methods, note?: INotesModelCorePlus) {
        switch (this.togle) {
            case dataLocation.API: return await this.BackAPI[methods](note!)
            default: return await this.LocalStorage[methods](note!)
        }
    }
}

export const CombineApi = new CombineApiClass()