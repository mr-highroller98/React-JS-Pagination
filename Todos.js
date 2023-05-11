import { useState, useEffect } from "react";
import {useParams } from 'react-router-dom';

function Todos() {
    const [todos, setTodos] = useState([]);
    const params = useParams();
    console.log(params);
    const id = params.id ?? 1;

    useEffect(() => {
        const start = id*5 - 5;
        console.log(start, 'start');
        fetch(`https://jsonplaceholder.typicode.com/todos?_start=${start}&_limit=5`)
        .then(data => data.json())
        .then(response => {
            setTodos(response);
        })
        .catch(err => {
            console.error(err);
            setTodos([]);
        })
    }, [params]);

    if (todos.length === 0) {
        return (<h2>No Todos found</h2>);
    }

    return (
        <section>
            <h2>Page {id}</h2>
            {todos.map(todo => {
                return (
                    <div key={todo.id}>
                        <p>ID: {todo.id}</p>
                        <p>Title: {todo.title}</p>
                        <p>Completed: {todo.completed === true ? "yes" : "no"}</p>
                    </div>
                );
            })}
        </section>
    )
}

export default Todos;