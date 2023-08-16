import React, { useState } from "react";

import "./index.scss";

const YeniNotEkle = ({addNote}) => {
    const [text, setText] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        addNote(text);
        setText("");
    }

    return <div className="yeniNotEkle">
        <h2>Yeni Not Ekle</h2>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Notunuzu buraya girin..." value={text} onChange={(element) => {setText(element.target.value)}} />
            <br></br>
            <button type="submit">Ekle</button>
        </form>

    </div>
}

export default YeniNotEkle;