import React from 'react';
import '../Buttons/ButtonReset.css';

interface Props {
    reset: () => void;
}

const ButtonReset:React.FC<Props> = ({reset}) => {
    return (
        <button className='btn' type='button' onClick={reset}>Reset</button>
    );
};

export default ButtonReset;