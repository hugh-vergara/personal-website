import { h } from 'preact';
import { useState, useEffect } from 'preact/hooks';

const titles = [
    "Programmer",
    "Developer",
    "Front-end Developer",
    "Backend Developer",
    "Artist"
];

const Carousel = () => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % titles.length);
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div style={{
            // background: 'black',
             color: 'white',
            // padding: '20px',
            // textAlign: 'center',
            // borderRadius: '12px',
            // display: 'inline-block',
            // minWidth: '250px',
            // maxWidth: '400px'
        }}>
            <h2 key={index} style={{
                fontSize: '2.5rem',

                padding: '10px 20px',
                borderRadius: '8px',
                background: 'black',
                display: 'inline-block',
                transition: 'opacity 0.5s ease-in-out'
            }}>
                {titles[index]}
            </h2>
        </div>
    );
};

export default Carousel;
