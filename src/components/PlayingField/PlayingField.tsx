import React from 'react';
import Item from "./Item/Item.tsx";
import {IItem} from "../../types";
import "../PlayingField/PlayingField.css";

interface PlayingFieldProps {
    items: IItem[];
    changeClickedById: (id: number) => void;
}

const PlayingField:React.FC<PlayingFieldProps> = ({items, changeClickedById}) => {
    return (
        <div className="items">
            {items.map((item) =>
                <Item
                    key={item.id}
                    clicked={item.clicked}
                    hasItem={item.hasItem}
                    onChangeClickedById={() => changeClickedById(item.id)}
                />
            )}
        </div>
    );
};

export default PlayingField;