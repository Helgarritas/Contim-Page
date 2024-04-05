const items = [
  {
    id: 1,
    image:'/src/assets/brand-clients/ares 1.png'
  },
  {
    id: 2,
    image:'/src/assets/brand-clients/brexia 1.png'
  },
  {
    id: 3,
    image:'/src/assets/brand-clients/catalina 1.png'
  },
  {
    id: 4,
    image:'/src/assets/brand-clients/compania-minera-caudalosa 1.png'
  },
  {
    id: 5,
    image:'/src/assets/brand-clients/descarga 1.png'
  },
  {
    id: 6,
    image:'/src/assets/brand-clients/great-panther 1.png'
  },
  {
    id: 7,
    image:'/src/assets/brand-clients/Hochschild 1.png'
  },
  {
    id: 8,
    image:'/src/assets/brand-clients/huallanca 1.png'
  },
  {
    id: 9,
    image:'/src/assets/brand-clients/Los-Quenuales_ 1.png'
  },
  {
    id: 10,
    image:'/src/assets/brand-clients/Minera-Bateas 1.png'
  },
  {
    id: 11,
    image:'/src/assets/brand-clients/nystar 1.png'
  },
  {
    id: 12,
    image:'/src/assets/brand-clients/santo-domingo 1.png'
  },

  {
    id: 14,
    image:'/src/assets/brand-clients/shuntur 1.png'
  },
  {
    id: 15,
    image:'/src/assets/brand-clients/stellarmining2 1.png'
  },
  {
    id: 16,
    image:'/src/assets/brand-clients/teincomin 1.png'
  },
]

export default function ClientsHome() {
  return (
    <div className="relative flex justify-center flex-col h-[30vh] sm:h-[40vh]">
      <div className="relative flex max-w-[100vw] overflow-hidden py-5">
        <div className="flex items-center w-max animate-marquee [--duration:70s] hover:[animation-play-state:paused]">
          {[...items, ...items].map((item, index) => (
            <div key={index} className=" px-2.5 ">
              <div className="relative flex justify-center w-[15rem] px-8 py-6">
                <div className="flex items-center">
                  <img src={item.image} className="w-[200px] clientHome__brand" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
    
  )
}
