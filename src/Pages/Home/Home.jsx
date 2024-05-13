import React,{useCallback,useEffect,useState} from 'react'

import BannerHome from './BannerHome';
import AboutHome from './AboutHome';
import SolutionsHome from './SolutionsHome';
import ProjectsHome from './ProjectsHome';
import ClientsHome from './ClientsHome';
import CommmentsHome from './CommmentsHome';
import NoticeHome from './NoticeHome';
// Components
import MouseTracker from '../../Components/MouseCursor/MuseTracker';


function Home() {
  const [sliderWidth, setsliderWidth] = useState(0)

  const handleScroll = useCallback(() => {
    const cards = document.querySelectorAll('.solutionHome__animation--card');
    const windowHeight = window.innerHeight * 0.7;
    
    cards.forEach((element,index)=>{
      const cardsTop = element.getBoundingClientRect().top; 
      if (cardsTop <= windowHeight && !element.classList.contains('solutionsHome__animation')) {
        element.classList.add('solutionsHome__animation');
      }   
    });
  },[])

  useEffect(() => {
    const handleScrollEvent = () => {
      handleScroll();
    };

    window.addEventListener('scroll', handleScrollEvent);
    handleScrollEvent();
  
    return () => {
      window.removeEventListener('scroll', handleScrollEvent);
    };
  }, []);

  return (
    <>
      <MouseTracker sliderWidth={sliderWidth}>
        {(animationMouse) => (
          <>
            <BannerHome handleScroll={handleScroll}></BannerHome>
            <AboutHome></AboutHome>
            <SolutionsHome handleScroll={handleScroll}></SolutionsHome>
            <ProjectsHome></ProjectsHome>
            <ClientsHome></ClientsHome>
            <CommmentsHome setsliderWidth={setsliderWidth} animationMouse={animationMouse}></CommmentsHome>
            <NoticeHome></NoticeHome>          
          </>
        )}
      </MouseTracker>
    </>
  )
}

Home.propTypes = {}

export default Home
