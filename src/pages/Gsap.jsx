import React, { useEffect, useState } from 'react'
import Main from '../components/section/Main'

import { gsapText } from '../data/gsap'
import VideoCard from '../components/video/VideoCard'

const Gsap = () => {

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 300);
    }, []);

    const gsapPageClass = loading ? 'isLoading' : 'isLoaded';
    
    return (
        <Main 
            title = "GSAP 사이트"
            description="GSAP 사이트 튜토리얼 강의입니다.">
            <section id='gsapPage' className={gsapPageClass}>
                <h2>😄 창의적 사이트를 만들고 싶다면!</h2>
                <div className="video__inner">
                    <VideoCard videos={gsapText} />
                </div>
            </section>
        </Main>
    )
}

export default Gsap