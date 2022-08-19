import React, { useLayoutEffect, useState } from 'react';

import './style.css';

function Section2(props) {
    const {padding} = props;

    const [screen,setScreen] = useState('lg');

    useLayoutEffect(()=>{
        function updateScreen(){
            if(window.innerWidth < 500){
                setScreen('sm');
            }else{
                setScreen('lg');
            }
        }
        window.addEventListener('resize', updateScreen);
        updateScreen();
        return () => window.removeEventListener('resize', updateScreen);
    },[]);

    return (
        <div className={`box-100 flex-column hide-flow pd-${padding}`}>
            <h2 className={`title medium ft-poppins wt-300 center-text mg-tp-2 pd-${padding}`}>Publish your own articles using interactive editor & grow your <span>community.</span></h2>
            <div className={`box-100 ${screen === 'lg' ? `pd-${padding}` : ''} post-container`}>

                <div className='post post-1 flex-column mg-1 pd-1'>
                    <div className='flex-column flex-start-jc flex-start'>
                        <div className='box-90 flex-row'>
                            <img className='box-100 flex-row img-small' src="./media/professional-blog-img.webp" alt="post-1"></img>
                        </div>
                        <h4 className='title small mg-tp-1 left-text'>Professional Blog</h4>
                        <p style={{maxWidth:'350px'}}>Create a blog with built-in features to grow your reach and build a community.</p>
                        <a className="link model" href="/main">Start Blogging</a>
                    </div>
                </div>

                <div className='post post-2 flex-column mg-1 br-10 pd-1'>
                    <div className='flex-column flex-start-jc flex-start'>
                        <div className='box-90 flex-row'>
                            <img className='box-100 flex-row img-small' src="./media/branding-blog-img.webp" alt="post-2"></img>
                        </div>
                        <h4 className='title small mg-tp-1 left-text'>Create a brand</h4>
                        <p style={{maxWidth:'350px'}}>Make a curated posts to help your branding improves.</p>
                        <a className="link model" href="/main">Get Started</a>
                    </div>
                </div>

                <div className='post post-3 flex-column mg-1 br-10 pd-1'>
                    <div className='flex-column flex-start-jc flex-start'>
                        <div className='box-90 flex-row'>
                            <img className='box-100 flex-row img-small' src="./media/Organizational-blog-img.webp" alt="post-2"></img>
                        </div>
                        <h4 style={{maxWidth:'350px'}} className='title small mg-tp-1 left-text'>Organisation Fame</h4>
                        <p style={{maxWidth:'350px'}}>Be a world wide organisation with your community articles.</p>
                        <a className="link model" href="/main">View Organisations</a>
                    </div>
                </div>

                <div className='post post-4 flex-column mg-1 br-10 pd-1'>
                    <div className='flex-column flex-start-jc flex-start'>
                        <div className='box-90 flex-row'>
                            <img className='box-100 flex-row img-small' src="./media/ideas-blog-img.webp" alt="post-2"></img>
                        </div>
                        <h4 className='title small mg-tp-1 left-text'>Follow your Ideas</h4>
                        <p style={{maxWidth:'350px'}}>Create a new paths with your curated ideas and let the world know where your passion leads.</p>
                        <a className="link model" href="/main">Login here</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section2