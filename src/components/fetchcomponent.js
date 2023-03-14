import { Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import './fetch.css';
import svg1 from './images/pattern-divider-desktop.svg';
import svg2 from './images/pattern-divider-mobile.svg';
import svgButton from './images/icon-dice.svg';

export default function FetchComponent() {
    const [apiAdvice, setApiAdvice] = useState('');
    const [apiID, setApiID] = useState('');

    async function AdviceFetch(randomnumber) {
        const promise = await fetch(`https://api.adviceslip.com/advice/${randomnumber}`);
        const response = await promise.json();
        setApiAdvice(response.slip.advice);
        setApiID("ADVICE # " + response.slip.id);
    }


    useEffect(() => {
        let randomnumber = Math.floor(Math.random() * 224); 
        AdviceFetch(randomnumber);
      }, []);


    function HandleClick() {
        let ranNum = Math.floor(Math.random() * 224);
        AdviceFetch(ranNum);
    }

    return (
        <body className='container-fluid'>
            <Row className='rowPadding'>
                <div className='col-12 d-flex justify-content-center'>
                    <div className='container-color'>
                        <p className='text-center idText'>{apiID}</p>
                        <p className='quoteText text-center'>{apiAdvice}</p>
                    </div>
                </div>
            </Row>

            <div className='d-flex justify-content-center divPadding'> <img className='imgPosition imgdesktop' src={svg1} /> </div>
            <div className='d-flex justify-content-center divPadding'> <img className='imgPosition imgmobile' src={svg2} /> </div>

            <div className='d-flex justify-content-center divPadding'> <button className='diceButton' onClick={HandleClick}> <img src={svgButton} /> </button> </div>
        </body>
    )
}