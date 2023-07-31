import React, { useState } from 'react'

const emojieData=[
    {
        id:1,
        symbol:'😁',
        name:'smile'
    },
    {
        id:2,
        symbol:'😥',
        name:'sad'
    },
    {
        id:3,
        symbol:'😶',
        name:'blank'
    },
    {
        id:4,
        symbol:'😡',
        name:'angry'
    },
    {
        id:5,
        symbol:'🥰',
        name:'blush'
    },
    {
        id:6,
        symbol:'😘',
        name:'kiss'
    },
    {
        id:7,
        symbol:'😴',
        name:'sleep'
    },
    {
        id:8,
        symbol:'😭',
        name:'cry'
    },
    {
        id:9,
        symbol:'🥴',
        name:'confusion'
    },
    {
        id:10,
        symbol:'❤',
        name:'heart'
    },{
        id:11,
        symbol:'🥳',
        name:'party'
    },{
        id:12,
        symbol:'🤒',
        name:'sick'
    },{
        id:13,
        symbol:'🤮',
        name:'vomit'
    },{
        id:14,
        symbol:'🥴',
        name:'confusion'
    },{
        id:15,
        symbol:'☠',
        name:'skull'
    }

];
function Emojiesearch() {
    const [searchEmojie,setsearchEmojie]=useState("");
    const handleChange=(e)=>{
        setsearchEmojie(e.target.value);
    }
    const showEmojie=emojieData.filter((emojie)=>{
    const emojieName=emojie.name.toLowerCase();
    return emojieName.includes(searchEmojie.toLowerCase());
});
  return (
    <div className='outer'>
        <center>
        <h1> <u>React Emojie App !!!</u></h1>
    <input type='text' placeholder='search for the emojie....                        🔎'value={searchEmojie} onChange={handleChange}/>
    <div className='in'><b>result is:</b>
        {
        showEmojie.map((emojie)=> emojie.symbol)
        }
    </div>
    </center>
    </div>
  )
}

export default Emojiesearch