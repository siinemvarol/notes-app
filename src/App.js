//import logo from './logo.svg';
import './App.css';
import YeniNotEkle from './components/YeniNotEkle';
import Notlarim from './components/Notlarim';
import NotuDuzenle from './components/NotuDuzenle';
import { useState } from 'react';

function App() {

  const [notes, setNotes] = useState([]);

  const [editNote, setEditNote] = useState("");

  const addNote = (text) => {    
    setNotes([...notes, {id: Date.now(), text}]);
  }

  const deleteNote = (id) => {
    const updatedNotes = notes.filter((note) => note.id !== id);
    setNotes(updatedNotes);
  }

  const startEditing = (note) => {
    setEditNote(note);
  }

  const updateNote = (id, text) => {
    const updatedNote = notes.map((note) => note.id === id ? {...note, text} : note );
    setNotes(updatedNote);
    setEditNote("");

  }

  return (
    <div className="App">    
      <h1>Notes App</h1>
      <div className="notlarimVeYeniNotEkle">
        <Notlarim notes={notes} deleteNote={deleteNote} startEditing={startEditing}/>
        <YeniNotEkle addNote={addNote}/>
      </div>

      {
        editNote && <NotuDuzenle editNote={editNote} updateNote={updateNote} onCancel={() => setEditNote("")} />
      }
        
    </div>
  );
}

export default App;
