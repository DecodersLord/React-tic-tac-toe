


export default function GameBoard( { onSelectSquare, board } ){

    
    // const [ gameBoard, setGameBoard] = useState(initialGameBoard);
    

    // function handleSelectSquare(rowIndex, colIndex){
    //     setGameBoard((prevGameBoard) =>{
    //         // We are strongly recomended that we copy the original array/Object as they are passed by reference and should not be edited in memory
    //         // Here I am creating a copy of the initial array then I am iterating over the innerArray and creating a copy of that too using the spread operator
    //         const updatedBoard = [ ...prevGameBoard.map((innerArray) => [...innerArray]) ];
    //         updatedBoard[rowIndex][colIndex] = activePlayerSymbol;
    //         return updatedBoard;
    //     });

    //     onSelectSquare();
    // }


    return(
        <ol id="game-board">
            {board.map((row, rowIndex) => (
                <li key={rowIndex}>
                    <ol>
                        {row.map((playerSymbol, colIndex) => (
                            <li key={colIndex}>
                                <button onClick={() => onSelectSquare(rowIndex, colIndex)} disabled={playerSymbol != null}>{playerSymbol}</button>
                            </li>
                        ))}
                    </ol>            
            
                </li>
            ))}
        </ol>
    )

}