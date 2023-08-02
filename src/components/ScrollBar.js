import { useState, useEffect } from 'react'
import { motion } from "framer-motion"
import '@/Styles/ScrollBar.scss';

const handleProgressBar = () => {
    const totalScroll = document.documentElement.scrollTop;
    const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrollNum = Math.max(Math.floor(`${(totalScroll / windowHeight) * 100}`),0);
    return scrollNum;
};

export default function ScrollBar() {
    let [scroll, setScroll] = useState(0);
    useEffect(() => {
        window.addEventListener('scroll', () => {
            setScroll(handleProgressBar);
        });
        return ()=>{
            window.removeEventListener('scroll', handleProgressBar);
        }
    },[]);
    
    return (
        <motion.span
        initial={{ opacity: 0}}
        animate={{ opacity: 1}}
        transition={{
            duration: 0.8,
            delay: 0.8,
        }} className="scrollBarWrap">
            <i className="progress" style={ {width:(scroll)+'%'} }></i>
            <span className="txt">{scroll+'%'}</span>
        </motion.span>
    )
}