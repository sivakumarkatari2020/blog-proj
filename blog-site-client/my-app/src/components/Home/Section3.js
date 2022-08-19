import React from 'react';

import './style.css';

function Section3(props) {
    const {padding} = props;

    return (
        <div className={`section3 box-100 bg-secondary flex-rc`}>
            <div className={`box-100 flex-column flex-start pd-${padding}`}>
                <h4 className='title medium'>Spark Your Creativity</h4>
                <p className='para-md'>Follow the latest trends, improve your skills with how-tos and get inspired by other bloggers on the Spudg.</p>
                <a href="/main" className='link model2'>Explore Now</a>
            </div>
            <div className='section3-img box-100 flex-row mob-hide'>
                <img className='fox-100 img-full' src="./media/creativity-img.webp" alt="final-img"></img>
            </div>
        </div>
    )
}

export default Section3;