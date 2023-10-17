import React from 'react';
import "../Mandala.css";


export default function Mandala() {
    return (
        <>
            <div className="mandala-container">
                <h1> Mandala Creator</h1>

                <div className="mandala-canvas">
                    <canvas
                        id="mandala"
                        width="300"
                        height="300"
                        style={{
                            border: '0.5px solid #000000', backgroundColor: '#dedede', padding: '20px'
                        }}
                    ></canvas>
                </div>

            </div>

        </>
    );
}
