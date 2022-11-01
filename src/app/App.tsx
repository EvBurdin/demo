import { useEffect, useState } from 'react';
import './App.scss';
import Button from '@mui/material/Button';
import { ColorToggleButton } from './components/ColorToggleButton/ColorToggleButton';
import { Note } from './components/Note/Note';
import { BackAPI } from './helpers/backAPI';
import { INotesModelCorePlus } from './interface/interface';


function App() {
  const [notes, notesUpdate] = useState([] as INotesModelCorePlus[])

  useEffect(() => {
    BackAPI.getAll().then(
      (e) => e && e !== true && notesUpdate(e)
    )
  },[])

  const createNew = () => {
    notesUpdate([{tittle: '', body: '', edit: true} as INotesModelCorePlus, ...notes])
    console.log(notes)
  }
  const updateNotes = (notes: INotesModelCorePlus[]) => {
    notesUpdate(notes)
  }

  return (
    <div className="App">
      <div className='AppHeaderButtons'>
        <Button className="App_ButtonAdd" variant="outlined" onClick={() => {createNew()}}>{'add new note'}</Button>
        <ColorToggleButton update={updateNotes}/>
      </div>
      {notes.map((e) => <Note key={e.id} note={e} update={updateNotes}/>)}
      {/* <Note tittle='TITTLE' body={mdtest}/> */}
    </div>
  );
}

export default App;