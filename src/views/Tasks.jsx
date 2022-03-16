import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Tasks () {

    var list1 = ['binary-tree', 'duplicate-integers', 'linked', 'parentheses', 'parking', 'rightmost-bit',
        'roman', 'runtime', 'todo', 'web-crawler'];

    useEffect(() => {
        
    }, []);

    return (<>
        <h3>Common interview questions/tasks</h3>
        <ul>
            {list1.map(item => <li><Link to={"/tasks/" + item}>{item}</Link></li>)}
        </ul>
    </>);
}