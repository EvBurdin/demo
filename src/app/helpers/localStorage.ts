import { INotesModelCore } from "../../../express/DataBaseService/Models/NotesModel";

class LocalStorageClass {
  key = "Notes";
  constructor() {}

  lsGet(): INotesModelCore[] {
    const ls = localStorage.getItem(this.key);
    if (ls) return JSON.parse(ls);
    return [] as INotesModelCore[];
  }

  lsUpdate(data: INotesModelCore[]) {
    localStorage.setItem(this.key, JSON.stringify(data));
    return this.lsGet();
  }

  async getAll() {
    return await this.lsGet();
  }

  async update(note: INotesModelCore) {
    this.lsUpdate(this.lsGet().map((e) => (e.id === note.id ? note : e)));
    return this.lsGet();
  }

  async save(note: INotesModelCore) {
    this.lsUpdate([note, ...this.lsGet()]);
    return this.lsGet();
  }

  async delete(note: INotesModelCore) {
    this.lsUpdate([...this.lsGet()!.filter((e) => e.id !== note.id)]);
    return this.lsGet();
  }
}

export const LocalStorage = new LocalStorageClass();
