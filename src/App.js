
import './App.css';

import React from 'react';
import {comments} from './commentData';
import Card from './Card';



function App() {
    return (
    <>
    {
        comments.map(comment=>
            <div><Card commentObject = {comment} /></div>
        )
    }
    </>
    ) 
}


export default App;
