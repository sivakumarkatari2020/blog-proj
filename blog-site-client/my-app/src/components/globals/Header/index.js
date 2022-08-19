import React, { useState } from 'react';
import './style.css';

function Header() {

    const [padding,setPadding] = useState(3);
    const [isFixed,setFixed] = useState(false);

    React.useLayoutEffect(()=>{
        function updateSize() {
            if(window.innerWidth < 500){
                setPadding(1);
            }else if(window.innerWidth < 800){
                setPadding(2);
            }else{
                setPadding(3);
            }
        }
        window.addEventListener('resize', updateSize);
        updateSize();
        return () => window.removeEventListener('resize', updateSize);
    },[]);

    React.useLayoutEffect(()=>{
        function updateScroll() {
            if(window.scrollY > 0){
                setFixed(true);
                setPadding(1);
            }else{
                setFixed(false);

                if(window.innerWidth < 500){
                    setPadding(1);
                }else if(window.innerWidth < 800){
                    setPadding(2);
                }else{
                    setPadding(3);
                }    
            }
        }
        window.addEventListener('scroll', updateScroll);
        updateScroll();
        return () => window.removeEventListener('scroll', updateScroll);
    },[]);

    return (
        <div className={`header flex-row space-between box-100 pd-${padding} ${isFixed ? 'pos-fixed z-top bg-light line-shadow' : 'bg-dark'}`}>
            <h3 className='title'><span>Spudg</span> Blog</h3>
            <button className='button-100 round bg-primary'>Login</button>
        </div>
    )
}

export default Header