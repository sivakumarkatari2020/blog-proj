import React from 'react';
import {IoLogoFacebook,IoLogoInstagram,IoLogoTwitter} from 'react-icons/io5';

import './style.css';

function Footer(props) {
    const {padding} = props;

    return (
        <div className={`footer box-100 flex-rc bg-dark space-around`}>
            <div className={`box-100 flex-column flex-start-center pd-${padding}`}>
                <h3 className='title'><span>Spudg</span> Blog</h3>
                <p className='para-sm wt-300 mob-hide' style={{maxWidth:'400px',color:'#999999'}}>We are providing a service to promote your articles/blogs worldwide through out our network. We are a non profit organisation and we don't charge you for creating blogs instead we rely on other sources of revenue. Your data privacy is our concern.</p>
                <div className='flex-row flex-start-center mg-tp-1 mg-bt-1' style={{width:'300px'}}>
                    <IoLogoFacebook className='icon'/>
                    <IoLogoInstagram className='icon'/>
                    <IoLogoTwitter className='icon'/>
                </div>
            </div>
            <div className={`box-100 flex-column pd-${padding}`}>
                <h4 className='title small wt-300 center-text'>Subscribe to our Newsletter</h4>
                <input type='email' placeholder='Enter your mail address' className='input input-email-sub mg-tp-2 mg-bt-1'></input>
                <button className='button-full-sub'>Subscribe</button>
            </div>
        </div>
    )
}

export default Footer