import { NavLink,useNavigate } from "react-router-dom"

import clsx from "clsx"
import { TextReveal } from "./Components/TextRevealContext"

export default function AboutHome({changeLoading}) {
  const text =
    "Percibimos cada proyecto como una oportunidad para demostrar que somos innovadores y eficientes"

  //* Function for Change Loader
  let navigate = useNavigate();
  const tiempoRestante = 1000; 

  const delayLink = (e, path) => {
    e.preventDefault();
    changeLoading(true)
    setTimeout(() => {
      navigate(path)
    }, tiempoRestante);
  };

  return (
    <div className="min-h-screen px-[32px]  lg:px-[130px]  relative z-10">
      <TextReveal body={text} className="relative  h-[190vh]  w-[100%]">
        {(tokens) => (
          <div className="sticky left-0 top-0 flex h-1/2 items-center text-[60px] font-light leading-tight text-black uppercase ">
            {/* text */}
            <div className="w-[32rem]">
              {tokens.map((token, index) => (
                <TextReveal.Token key={index} index={index}>
                  {(isActive) => (
                    <span
                      className={clsx(
                        {
                          "opacity-10": !isActive,
                        },
                        "transition",
                      )}>
                      {token}
                    </span>
                  )}
                </TextReveal.Token>
              ))}
            </div>
            {/* Button */}
            <div className="aboutHome___container--button">
              <div div className='aboutHome__button'>
                <NavLink to={'/solution'} onClick={(e) => { delayLink(e, '/solution')}} className="aboutHome__button--texts">
                  <p className="aboutHome__button--text">Saber mas</p>
                  <svg xmlns="http://www.w3.org/2000/svg" width="35" height="28" viewBox="0 0 35 28" fill="none">
                    <path d="M30.625 14L4.375 14" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M21.875 21L30.625 14L21.875 7" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </NavLink>
                <div className="aboutHome__circle1 aboutHome__circle"></div>
                <div className="aboutHome__circle2 aboutHome__circle"></div>
                <div className="aboutHome__circle3 aboutHome__circle"></div>
                <div className="aboutHome__circle4 aboutHome__circle"></div>                        
              </div>  
            </div>            
          </div>
        )}
      </TextReveal>
    </div>
  )
}