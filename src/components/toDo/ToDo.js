import {useState} from "react";
import InProgress from "../inProgress/InProgress";

export default function ToDo() {

    let [inputValue, setInputValue] = useState('');
    let [task, setTask] = useState(null);
    const [state, setState] = useState([]);


    function saveInputValue(e) {
        setInputValue(e.target.value);
        if(task){
            setTask(...task, e.target.value);
        }
        setTask(e.target.value);
    }

    const saveTask = () => {
        let copy = [...state]
        copy.push({
            name: task
        })
        setState(copy);
    }


    return (
        <div>
            <div>
                <input type="text" value={inputValue} onChange={saveInputValue}/>
                <input type="submit" onClick={saveTask}/>
            </div>
            <InProgress state={state}/>
        </div>
    );
}