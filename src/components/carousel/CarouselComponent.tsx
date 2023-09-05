import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from 'react-responsive-carousel'
import Foto1 from "../../../public/assets/foto2.jpg"
import Image from "next/image"
import styled from "./CarouselComponent.module.sass"

export default function CarouselComponent() {
  return (
    <>
      <Carousel className={styled.mainSlide}>
        <div>
          <img src="../../../public/assets/foto2.jpg" alt="fohgjto1" width="500px" height="500px"   />
          <p className="legend">Legend 1</p>
        </div>
        <div>
          <img src="../../../public/assets/foto2.jpg" alt="foto1" width={200} height={200}   />
          <p className="legend">Legend 1</p>
        </div>
        <div>
          <img src="../../../public/assets/foto2.jpg" alt="foto1" width={200} height={200}   />
          <p className="legend">Legend 1</p>
        </div>
        <div>
          <img src="../../../public/assets/foto2.jpg" alt="foto1" width={200} height={200}   />
          <p className="legend">Legend 1</p>
        </div>
        <div>
          <img src="../../../public/assets/foto2.jpg" alt="foto1" width={200} height={200}   />
          <p className="legend">Legend 1</p>
        </div>
        <div>
          <img src="../../../public/assets/foto2.jpg" alt="foto1" width={200} height={200}   />
          <p className="legend">Legend 1</p>
        </div>

      </Carousel>
    </>
  )
}

