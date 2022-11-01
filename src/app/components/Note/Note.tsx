import React, { useEffect, useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import Markdown from "markdown-to-jsx";
import "./Note.scss";
import { INotesModelCorePlus, Methods } from "../../interface/interface";
import { CombineApi } from "../../helpers/CombineApi";

export const Note: React.FC<{note: INotesModelCorePlus, update: (notes: INotesModelCorePlus[]) => void}> = ({
  note,
  update
}) => {
  const {tittle: _tittle, edit, body, id} = note
  const [load, loadToggle] = useState(false);
  const [editMode, editModeToggle] = useState(edit);
  const [tittle, tittleChange] = useState(_tittle);
  const [textArea, textAreaToggle] = useState(body);

  const saveNote = async () => {
    let req
    if (!id) {
      let id = uuidv4();
      req = await CombineApi.construct(Methods.save, {tittle: tittle, body: textArea, id: id})
    } else if ( _tittle !== tittle || body !== textArea ) {
      req = await CombineApi.construct(Methods.update, {tittle: tittle, body: textArea, id: id})
    }
    if(req && req !== true) update(req)
  };

  const changeEditMode = async () => {
    if(editMode) {
      loadToggle(true)
      await saveNote()
      loadToggle(false)
    }
    editModeToggle(!editMode)
  }

  return (
    <div className="Note">
      <div className="Note_HeadBox">
        {editMode ? (
          <TextField
            className="Note_TittleText"
            variant="filled"
            value={tittle}
            onChange={(event) => tittleChange(event.target.value)}
          />
        ) : (
          <div className="Note_Tittle">{tittle}</div>
        )}
        <div>
          <Button
            className="Note_Button"
            variant="outlined"
            onClick={() => changeEditMode()}
          >
            {editMode ? "Save" : "Edit"}
          </Button>
          <Button
            className="Note_Button"
            variant="outlined"
            onClick={() => editModeToggle(!editMode)}
            color="error"
          >
            {"Delete"}
          </Button>
        </div>
      </div>

      {editMode ? (
        <TextField
          id="filled-multiline-flexible"
          multiline
          maxRows={999}
          value={textArea}
          onChange={(event) => textAreaToggle(event.target.value)}
          variant="filled"
          style={{ padding: "0px" }}
          className="Note_BodyTextArea"
        />
      ) : (
        // ? <textarea style={{height: `${textAreaHeight}px`}} ref={textAreaRef} className="Note_Body" value={textArea} onChange={(event) => textAreaToggle(event.target.value)} />
        <Markdown className="Note_Body">{textArea}</Markdown>
      )}
    </div>
  );
};
