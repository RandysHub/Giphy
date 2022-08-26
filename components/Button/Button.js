import { useState, useEffect } from "react";
import axios from 'axios'
const Button = () => {

    const [gif, setGif] = useState('')


    const getGif = async () => {

        try {
            const response = await axios.get('https://api.giphy.com/v1/gifs/random?api_key=vHCz92TOqEWIhSZBjGPfVGXKs7aB89S1&tag=&rating=g') //USE YOUR OWN KEY >:(
            setGif(response.data.data.images.original.url)
        } catch (error) {
            console.log(error)
        }



        // Old fetch way
        // fetch('https://api.giphy.com/v1/gifs/random?api_key=vHCz92TOqEWIhSZBjGPfVGXKs7aB89S1&tag=&rating=g')
        //     .then(res => res.json())
        //     .then(data => setGif(data.data))


    }

    return (

        <div>

            <h1>GIPHYYYY</h1>


            {<img src={gif} />}


            <br />

            {gif ? < button onClick={getGif}>Press me again, I get paid by the click</button> : < button onClick={getGif}>Press me or I'll be unemployed</button>}
        </div >
    );
}

export default Button;