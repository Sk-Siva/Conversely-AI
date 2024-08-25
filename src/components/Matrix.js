import React, { useState } from 'react';
import './Matrix.css';

const Matrix = () => {
    const [matrix, setMatrix] = useState(Array(9).fill(''));
    const [clickedBoxes, setClickedBoxes] = useState([]);

    const handleClick = (index) => {
        const newMatrix = [...matrix];
        if (matrix[index] === 'green') {
            newMatrix[index] = 'lightgray';
        } else {
            newMatrix[index] = 'green';
        }
        setMatrix(newMatrix);

        const newClickedBoxes = newMatrix.map((color, id) => color === 'green' ? id : null).filter(id => id !== null);
        setClickedBoxes(newClickedBoxes);

        if (newClickedBoxes.length === 9) {
            changeAllToOrange();
        }
    };

    const changeAllToOrange = () => {
        const newMatrix = matrix.map(() => 'orange');
        setMatrix(newMatrix);
    };

    return (
        <div className="matrix">
            {matrix.map((color, index) => (
                <div
                    key={index}
                    className="box"
                    style={{ backgroundColor: color }}
                    onClick={() => handleClick(index)}
                ></div>
            ))}
        </div>
    );
};

export default Matrix;
