import React, { useEffect, useState } from 'react'
import Main from '../components/section/Main'

import { portfolioText } from '../data/portfolio'
import VideoCard from '../components/video/VideoCard'

const Port = () => {

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 300);
    }, []);

    const portfolioPageClass = loading ? 'isLoading' : 'isLoaded';
    
    return (
        <Main 
            title = "포트폴리오 사이트"
            description="포트폴리오 사이트 튜토리얼 강의입니다.">
            
            <section id='portfolioPage' className={portfolioPageClass}>
                <div className="video__inner">
                    <VideoCard videos={portfolioText} />
                </div>
            </section>
            
        </Main>
    )
}

export default Port