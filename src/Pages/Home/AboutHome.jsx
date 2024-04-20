import { NavLink,useNavigate } from "react-router-dom"

import clsx from "clsx"
import { TextReveal } from "./Components/TextRevealContext"

export default function AboutHome() {
  const text =
    "Percibimos cada proyecto como una oportunidad para demostrar que somos innovadores y eficientes"

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
          </div>
        )}
      </TextReveal>
    </div>
  )
}