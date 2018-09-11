import React from 'react';

export const Todo = ({task,removeTodo}) =>(
        <li>{task}
        <button onClick={removeTodo}>X</button>
        </li>
)