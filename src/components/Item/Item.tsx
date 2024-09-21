import React from 'react';

interface IProps {
    onChangeClickedById:React.MouseEventHandler,
    hasItem: boolean,
    clicked: boolean,
}

const Item:React.FC<IProps> = ({hasItem,  clicked, onChangeClickedById}) => {
    const itemStyle = {
        width: '20px',
        height: '20px',
        background: 'lightskyblue',
        border: '1px solid black',
    }

    if (clicked) {
        itemStyle.background = 'transparent' ;
    } else {
        itemStyle.background = 'lightskyblue'
    }


    return (
        <div style={itemStyle} onClick={onChangeClickedById} >
            {hasItem && clicked ? <span>o</span>: null}
        </div>
    );
};

export default Item;