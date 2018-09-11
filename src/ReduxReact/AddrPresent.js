import React from 'react';

export const AddrPresent = ({addr,removeAddr}) =>(
        <li>
            <span>name : {addr.name}</span> <button onClick={removeAddr}>X</button><br/>
            <span>id : {addr.id}</span><br/>
            <span>city : {addr.city}</span><br/>
        </li>
)