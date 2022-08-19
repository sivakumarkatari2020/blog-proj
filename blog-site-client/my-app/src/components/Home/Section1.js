import React,{useState,useLayoutEffect} from 'react';

function Section1(props) {
    const {padding} = props;

    const [ftSize,setFtSize] = useState('big');
    const [align,setAlign] = useState('left-text');

    useLayoutEffect(()=>{
        function updateSize() {
            if(window.innerWidth < 500){
                setFtSize('medium');
                setAlign('center-text');
            }else if(window.innerWidth < 1200){
                setFtSize('medium');
                setAlign('left-text');
            }else{
                setFtSize('big');
                setAlign('left-text');
            }
        }
        window.addEventListener('resize', updateSize);
        updateSize();
        return () => window.removeEventListener('resize', updateSize);
    },[]);

    return (
        <div className='box-100 flex-rc mg-tp-2 mg-bt-2' style={{overflowX:'hidden'}}>
            <div className={`box-100 pd-${padding}`}>
                <h1 className={`title ${align} ${ftSize} ft-poppins wt-300`}>
                    Let the world know about your <span>passion</span> <br/>in Writing.
                </h1>
            </div>
            <div className={`box-100 pd-${padding} flex-row`}>
                <img className='box-95 flex-row img-big' src="./media/section-1-cover-photo.webp" alt="blogging-section-1"/>
            </div>
        </div>
    )
}

export default Section1