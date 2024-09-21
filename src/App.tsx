
import './App.css';
import {useState} from 'react';
import Counter from './components/Counter/Counter.tsx';
import ButtonReset from './components/Buttons/ButtonReset.tsx';
import {IItem} from './types';
import PlayingField from './components/PlayingField/PlayingField.tsx';



const App = () => {

    const createItems =() =>{
        const arrObj:IItem[] = [];
        for (let i = 0; i < 36; i++) {
            const obj = {hasItem: false, clicked: false, id:i,};
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
            copyItems[id] = copyItem;
            alert('You win! Press reset to play again');
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

    const tries  = (items:IItem[]) =>{

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
    };

    const reset = () =>{
        createItems();
        const copyItems = createItems();
        setItems(copyItems);
        const copyWin = false;
        setWin(copyWin);
    };

  return (
    <>
        <PlayingField items={items} changeClickedById={changeClickedById}/>
        <Counter tries={tries(items)}/>
        <ButtonReset reset={reset}/>
    </>
  );
};

export default App;
