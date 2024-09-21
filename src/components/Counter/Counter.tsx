import React from 'react';
interface ICounterProps {
    tries: number;
}

const Counter:React.FC<ICounterProps> = ({tries}) => {
    return (
            <span>Tries: {tries} </span>
    );
};

export default Counter;