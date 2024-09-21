
import './App.css';
import {useState} from "react";
import Item from "./components/Item/Item.tsx";

interface Iitem{
    hasItem: boolean,
    clicked: boolean,
    id: number,
}

const App = () => {

    const createItems =() =>{
        let arrObj:Iitem[] = [];
        for (let i = 0; i < 36; i++) {
            const obj = {hasItem: false, clicked: false, id:i,}
            arrObj.push(obj);
        }
        const random = Math.floor(Math.random() * 36);
        arrObj[random].hasItem = true;
        return arrObj;
    };

    const [items, setItems] = useState(createItems());
    console.log(items);
    const changeClickedById =(id:number)=>{
        const copyItems = [...items];
        const copyItem = {...items[id]};
        copyItem.clicked = true;
        copyItems[id] = copyItem ;
        setItems(copyItems);
    };



    const tries  = (items:Iitem[]) =>{

        const newArray: boolean[] = [];
        for(let i = 0; i < items.length; i++){
            newArray.push(items[i].clicked);
        }

        let counter = 0;
        for(let i = 0; i < newArray.length; i++){
            if(newArray[i]){
                counter++;
            }
        }
       return counter;
    }


  return (
    <> <div>
        <div className="items">
            {items.map((item) =>
            <Item
                key={item.id}
                clicked={item.clicked}
                hasItem={item.hasItem}
                onChangeClickedById={ () => changeClickedById(item.id)} />
        )}
        </div>
        <span>Tries: {tries(items)} </span>
    </div>


    </>
  )
};

export default App
