import React from "react";

import "./index.scss";

const Notlarim = ({ notes, deleteNote, startEditing }) => {

    return <div className="notlarim">
        <h2>Notlarım</h2>
        {notes.map(note => 
            <div key={note.id}>
                <p>{note.text}</p>
                <button onClick={() => startEditing(note)}>Düzenle</button>                
                <button onClick={() => deleteNote(note.id)}>Sil</button>
            </div>          
            
        )}
            </div>
        }

export default Notlarim;