import React from 'react';
import "../../App.css";

export default function Mandala() {
    return (
        <>
        <h1 className="Mandala"> Mandala Creator</h1>
        <canvas 
        id="mandala" 
        width="300" 
        height="300" 
        style={{border:'0.5px solid #000000', backgroundColor:'#dedede', padding: '20px', 
        marginLeft: '600px', marginTop: '-200px'}}
        >

        </canvas>

        </>
    );
}
