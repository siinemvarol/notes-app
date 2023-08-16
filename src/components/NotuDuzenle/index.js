import React, { useState } from "react";
import "./index.scss";

const NotuDuzenle = ({ editNote, updateNote, onCancel }) => {
    const [text, setText] = useState(editNote.text);

    const handleSubmit = (e) => {
        e.preventDefault();
        updateNote(editNote.id, text);
    }

    return <div className="notuDuzenle">
        <h2>Notu Düzenle</h2>
        <form onSubmit={handleSubmit}>
            <input type="text" className="notDuzenleBox" value={text} onChange={(e) => setText(e.target.value)}></input>
            <div className="kaydetVeIptalButonlari">
                <button type="submit">Kaydet</button>
                <button onClick={onCancel}>İptal</button>
            </div>
        </form>



    </div>
}

export default NotuDuzenle;