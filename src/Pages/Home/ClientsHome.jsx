import image1 from '/src/assets/brand-clients/ares 1.png'
import image2 from '/src/assets/brand-clients/brexia 1.png'
import image3 from '/src/assets/brand-clients/catalina 1.png'
import image4 from '/src/assets/brand-clients/compania-minera-caudalosa 1.png'
import image5 from '/src/assets/brand-clients/descarga 1.png'
import image6 from '/src/assets/brand-clients/great-panther 1.png'
import image7 from '/src/assets/brand-clients/Hochschild 1.png'
import image8 from '/src/assets/brand-clients/huallanca 1.png'
import image9 from '/src/assets/brand-clients/Los-Quenuales_ 1.png'
import image10 from '/src/assets/brand-clients/Minera-Bateas 1.png'
import image11 from '/src/assets/brand-clients/nystar 1.png'
import image12 from '/src/assets/brand-clients/santo-domingo 1.png'
import image13 from '/src/assets/brand-clients/shuntur 1.png'
import image14 from '/src/assets/brand-clients/stellarmining2 1.png'
import image15 from '/src/assets/brand-clients/teincomin 1.png'

const items = [
  {
    id: 1,
    image: image1
  },
  {
    id: 2,
    image: image2
  },
  {
    id: 3,
    image: image3
  },
  {
    id: 4,
    image: image4
  },
  {
    id: 5,
    image: image5
  },
  {
    id: 6,
    image: image6
  },
  {
    id: 7,
    image: image7
  },
  {
    id: 8,
    image: image8
  },
  {
    id: 9,
    image: image9
  },
  {
    id: 10,
    image: image10
  },
  {
    id: 11,
    image: image11
  },
  {
    id: 12,
    image: image12
  },
  {
    id: 13,
    image: image13
  },
  {
    id: 14,
    image: image14 
  },
  {
    id: 15,
    image: image15
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
