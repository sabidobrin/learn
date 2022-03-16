
import { useState, useEffect, useCallback } from 'react';
import '../App.css';

export default function Todo () {

    let [tasks, setTasks] = useState(['ena', 'dve']);
    const calc_remaining = () => {
        //document.getElementById("element").classList.contains("is-done");
        return tasks.length;
    };
    let [remaining, setRemaining] = useState(calc_remaining());

    const update_element = (index) => {

    }
    const clear_field = () => document.getElementById("input_field").value = '';

    //let new_task = document.getElementById("input_field") ? document.getElementById("input_field").value : '';
    /*const add_element = async () => {
        let text_input = document.getElementById("input_field").value;
        document.getElementById("input_field").value = '';
        if (text_input !== '') {
            let all_tasks = tasks;
            let new_tasks = all_tasks.push(text_input);
            setRemaining(remaining++);
            return new_tasks;
        }        
    }*/

    const list = useCallback(() => {
        return tasks.map((task, index) => <li id={"element" + index} key={index} onClick={update_element(index)}>{task}</li>);
    }, [tasks]);

    useEffect(() => {       
        list();
        calc_remaining();
    }, []);

    return (
      <>
      <div id="app">
          <h3>Todo list</h3>

          <input type="text" id="input_field" />
          {/*<button onClick={add_element}>Add</button>*/}
          <button onClick={clear_field}>Clear</button>

          <br/><span>{calc_remaining()} remaining out of {tasks.length} tasks</span>
          <br/>My items:
          <ul>{list()}</ul>
      </div>
      
      </>
    );
}