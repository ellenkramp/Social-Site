import React from 'react';
import moment from 'moment';

export const supList = [
    {
        key: "asdf",
        author: "Ellen",
        text: "Went to the store",
        time: new Date()
    },
    {
        key: "fdsa",
        author: "Tony",
        text: "posted a thing",
        time: new Date()
    },
    {
        key: "jklp",
        author: "Emily",
        text: "dinner time",
        time: new Date()
    },
    {
        key: "plkj",
        author: "Billy",
        text: "thanks!",
        time: new Date()
    }
];

let Sup = () =>
    supList.map((thing) => 
        <div>
            <h2>{thing.text}</h2>
            <li><b>{thing.author}</b></li>
            <p>{moment(thing.time).fromNow()}</p>
        </div>
        )

export default Sup;
