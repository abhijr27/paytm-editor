import React, {useState} from 'react'
import './Editor.css'

export default function RichTextEditor() {
    let [fontSize, setFontSize] = useState(12);

    function onFontSize(e) {
        const edEl = document.getElementById('custom-editor');
        edEl.style.fontSize = `${e.target.value}px`;
        setFontSize(e.target.value);        
    }

    function onChangeColor(e) {
        const edEl = document.getElementById('custom-editor');
        edEl.style.color= e.target.value;    
    }
    
    return (
        <div className="editor-container">
            <div className="header-container">
                <div className="tool-container">
                    <button onClick={() => document.execCommand('bold',false,null)}><span className="button-bold">Bold</span></button>
                    <button onClick={() => document.execCommand('italic',false,null)}><span className="button-italic">Italic</span></button>
                    <button onClick={() => document.execCommand('underline',false,null)}><span className="button-underline">Underline</span></button>
                    <input type="number" placeholder="Font Size (px)" value={fontSize} onChange={(e) => onFontSize(e)}></input>
                    <input type="text" placeholder="Color Hex Code" onChange={(e) => onChangeColor(e)}></input>
                </div>
                
                <button onClick={() => console.log(document.getElementById('custom-editor').innerHTML)}>Print Console</button>
            </div>
            <div className="body-container" id="custom-editor" contentEditable="true"></div>
        </div>
    )
}
