import './works.scss';
import { PhoneIphone } from '@mui/icons-material';
import { useState } from 'react';

export default function Works() {

    const [currentSlider, setCurrentSlider] = useState(0);

    const data = [
        {
            id: 1,
            icon: 'asset/mobile.png',
            title: "featured one",
            desc: 'It is important to ensure that the contrast ratio low vision conditions will be able to read the content of the page.',
            img: 'https://cdn.dribbble.com/users/1362913/screenshots/4641855/media/db167dc6d8a50d9365a0308016f6c820.png?compress=1&resize=800x600&vertical=top',
        },
        {
            id: 2,
            icon: 'asset/mobile.png',
            title: "featured two",
            desc: 'It is important to ensure that the contrast ratio low vision conditions will be able to read the content of the page.',
            img: 'https://cdn.dribbble.com/users/1362913/screenshots/4606447/media/781df62e1f36d160f60d855938b1e41d.png?compress=1&resize=320x240&vertical=top',
        },
        {
            id: 3,
            icon: 'asset/mobile.png',
            title: "featured three",
            desc: 'It is important to ensure that the contrast ratio low vision conditions will be able to read the content of the page.',
            img: 'https://cdn.dribbble.com/users/997070/screenshots/3495507/media/e094829e4a43d102b0c191e7eeacd027.gif',
        },
        {
            id: 4,
            icon: 'asset/mobile.png',
            title: "featured four",
            desc: 'It is important to ensure that the contrast ratio low vision conditions will be able to read the content of the page.',
            img: 'https://cdn.dribbble.com/users/1054440/screenshots/6303061/6.jpg?compress=1&resize=320x240&vertical=top',
        },
        {
            id: 5,
            icon: 'asset/mobile.png',
            title: "featured five",
            desc: 'It is important to ensure that the contrast ratio low vision conditions will be able to read the content of the page.',
            img: 'https://cdn.dribbble.com/users/997070/screenshots/3495507/media/e094829e4a43d102b0c191e7eeacd027.gif',
        },
    ];

    const handleClick = (way) => {

        way === 'left' ? setCurrentSlider(currentSlider > 0 ? currentSlider - 1 : 0)
        : setCurrentSlider(currentSlider < data.length - 1 ? currentSlider + 1 : 0)
    }

    return (
        <div className='works' id='Works'>
            <div className='slider' style={{transform:`translateX(-${currentSlider * 100}vw)`}}>
                {data.map((d) => (

                    <div className='container'>
                        <div className='item'>
                            <div className='left'>
                                <div className='leftContainer'>
                                    <div className='imgContainer'>

                                        <img src={d.icon} />
                                    </div>
                                    <h2>{d.title}</h2>
                                    <p>
                                        {d.desc}
                                    </p>
                                    <span>Project</span>
                                </div>
                            </div>
                            <div className='right'>
                                <img src={d.img} />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <img src='asset/arrow.png' className='arrow left' onClick={()=>handleClick('left')} />
            <img src='asset/arrow.png' className='arrow right'onClick={()=>handleClick()}  />
        </div>
    )
}
