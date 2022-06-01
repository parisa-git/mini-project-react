import './intro.scss';
import { init } from 'ityped';
import { useEffect, useRef } from 'react';

export default function Intro() {

    const textRef = useRef();

    useEffect(() => {

        init(textRef.current,
            {
                showCursor:true,
                strings: ['react', 'programmer']
            });
    }, []);

    return (
        <div className='intro' id='Intro'>

            <div className='left'>
                <div className='imgContainer'>
                    <img src='asset/man.png' />
                </div>
            </div>
            <div className='right'>
                <div className='wrapper'>
                    <h2>Hi There,I am</h2>
                    <h1>Prisa Mbk</h1>
                    <h3>Freelancer <span ref={textRef}></span>
                    </h3>
                </div>
                <a href='#Portfolio'>
                    <img src='asset/down.png' />
                </a>
            </div>

        </div>
    )
}
