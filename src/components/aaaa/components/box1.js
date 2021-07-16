import React, { Component , useState , useEffect} from 'react';
import './css.css';
import {SwatchesPicker } from 'react-color';
import Tippy from '@tippyjs/react'

const getLS = () =>
{
    let color = localStorage.getItem('color');

    if (color)
    {
        return JSON.parse(localStorage.getItem('color'));
    }else {
        return [];
    }
}



function Box1 () {
    
    const [selectedColor, setSelectedColor] = useState(getLS());
    useEffect(() => {
        localStorage.setItem('color' , JSON.stringify(selectedColor))
    }, [selectedColor ])

        return (
            <div className="box">
              <div className="div1" style={{ backgroundColor: selectedColor}}>
              
              </div>
              
              <Tippy interactive={true} placeholder={'bottom'} content={
                  <SwatchesPicker
                  color={selectedColor}
                  onChangeComplete={color=> setSelectedColor(color.hex)}
                />
              }>
                   <button className="color">color</button>
              </Tippy>
              </div>
        )
       
}

export default Box1