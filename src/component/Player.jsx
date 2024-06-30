import { useState } from "react";



export default function Player({isActive, initialName, symbol, onChangeName}){
    
    const[ isEdit, setIsEdit ] = useState(false);
    const[ playerName, setPlayerName ] = useState(initialName);

    function handleEdit(){
        setIsEdit((editing) => !editing);
        if(isEdit){

            onChangeName(symbol, playerName);
        }
    } 

    function handleChange(e){
        setPlayerName(e.target.value);
    }

    let editableplayerName =  <span className="player-name">{ playerName } </span>
    let buttonValue = 'Edit';

    if(isEdit){
        editableplayerName =  <input type="text" value={playerName} required onChange={handleChange}/>
        buttonValue="Save";
    }

    return(
            <li className={ isActive ? 'active' : undefined}>
                <span className="player">
                    <span className="player-name">
                        { editableplayerName }
                    </span>
                    <span className="player-symbol">{ symbol }</span>
                </span>
                <button onClick={handleEdit}>
                    { buttonValue }
                </button>
            
            </li>

    );
}