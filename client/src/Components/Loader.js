import React, { useEffect } from "react";
import "./Styles.css";

const Loader = () => {

    useEffect(()=> {
        const doc = document.getElementById("box");

        for (let i = 0; i < 200; i++) {
            let p = document.createElement('p');
            let n = document.createTextNode('');
            
            setTimeout(() => {
                p.style.position = 'relative';
                p.style.left = i + 'px';
                p.appendChild(n);
                doc.appendChild(p);
    
                document.getElementById('conter').innerHTML = Math.floor(i/2+0.5);
            },i * 25)
        }
    
        for (let i = 0; i < 200; i++) {
            let p = document.createElement('p');
            let n = document.createTextNode('');
            
            setTimeout(() => {
                p.style.position = 'relative';
                p.style.left = -i + 'px';
                p.appendChild(n);
                doc.appendChild(p);
            },i * 25)
        }
    }, [])


    return (
        <div id="loader">
            <span id="conter"></span>
            <div id="box"></div>
        </div>
    )
}

export default Loader;