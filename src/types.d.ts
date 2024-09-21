import React from 'react';

export interface IProps {
    onChangeClickedById:React.MouseEventHandler,
    hasItem: boolean,
    clicked: boolean,
}

export interface IItem{
    hasItem: boolean,
    clicked: boolean,
    id: number,
}

