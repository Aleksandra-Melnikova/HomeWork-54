
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
    const[win,setWin] = useState(false);



    const changeClickedById =(id:number)=>{
        const copyItems = [...items];
        const copyItem = {...items[id]};
        if(win){
            copyItem.clicked = false;
            copyItems[id] = copyItem ;
            setItems(copyItems);
        } else{
            if(copyItem.hasItem){
                copyItem.clicked = true;
                copyItems[id] = copyItem ;
                setItems(copyItems);
                setWin((prevState) => !prevState);
            }
            else{
                copyItem.clicked = true;
                copyItems[id] = copyItem ;
                setItems(copyItems);
            }
        }

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

    const reset = () =>{
        createItems();
        const copyItems = createItems();
        setItems(copyItems);
    };

  return (
    <> <div>
        <div className="items">
            {items.map((item) =>
            <Item
                key={item.id}
                clicked={item.clicked}
                hasItem={item.hasItem}
                onChangeClickedById={ () => changeClickedById(item.id)}
            />
        )}
        </div>
        <span>Tries: {tries(items)} </span>
        <button className='btn' type='button' onClick={reset}>Reset</button>
    </div>


    </>
  )
};

export default App
