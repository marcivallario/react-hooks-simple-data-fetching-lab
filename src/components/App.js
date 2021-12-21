import React, { useState, useEffect } from "react";

function App() {
    const [ imgSrc, setImgSrc ] = useState('');
    
    useEffect(() => {
        fetch('https://dog.ceo/api/breeds/image/random')
        .then(resp => resp.json())
        .then(data => {
            setImgSrc(data.message);
        })
    }, [])
    
    if (!imgSrc) {
        return <p>Loading...</p>
    } 
    else {
        return <img src={imgSrc} alt="A Random Dog" />
    }
}

export default App;