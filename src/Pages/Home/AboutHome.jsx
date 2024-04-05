import { NavLink } from "react-router-dom"

import clsx from "clsx"
import { TextReveal } from "./Components/TextRevealContext"

export default function AboutHome() {
  const text =
    "Percibimos cada proyecto como una oportunidad para demostrar que somos innovadores y eficientes"

  return (
    <div className="min-h-screen px-[32px]  lg:px-[130px] py-12 relative">
      <TextReveal body={text} className="relative  h-[200vh]  w-[100%]">
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
                <NavLink to={'/solution'} className="aboutHome__button--texts">
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