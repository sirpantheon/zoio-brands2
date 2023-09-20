import React from 'react';
import styles from "./CarouselComponent.module.sass"
import { Carousel, ConfigProvider } from 'antd';
import Image from 'next/image';
import Foto1 from "../../../public/fxhub/outdoor333.png"
import Foto2 from "../../../public/fxhub/Container.png"
import Foto3 from "../../../public/fxhub/Composição 1_1.gif"
import Foto4 from "../../../public/fxhub/Cores2.gif"
import Foto5 from "../../../public/fxhub/cartao.png"
import Foto6 from "../../../public/fxhub/cartaproposta.png"
import Foto7 from "../../../public/fxhub/iphone.png"
import Foto8 from "../../../public/fxhub/outdooROK.gif"
import Foto9 from "../../../public/fxhub/standfeira.png"

const slides = [
  {
    Foto1: Foto1,
    Foto2: Foto2,
    Foto3: Foto3,
    Foto4: Foto4,
    Foto5: Foto5,
    Foto6: Foto6,
    Foto7: Foto7,
    Foto8: Foto8,
    Foto9: Foto9,
    Title: "FxHub",
    Texto:"textotextotextotextotexto",
    id: 0
  },
  {
    Foto1: Foto1,
    Foto2: Foto2,
    Foto3: Foto3,
    Foto4: Foto4,
    Foto5: Foto5,
    Foto6: Foto6,
    Foto7: Foto7,
    Foto8: Foto8,
    Foto9: Foto9,
    Title: "FxHub",
    Texto:"textotextotextotextotexto",
    id: 1
  }
]

const App: React.FC = () => (
  <ConfigProvider theme={{
    token: {
      colorBgContainer: "rgb(117, 251, 76)"
    },
    components: {
      Carousel: {
        dotHeight: 8,
        dotWidth: 30
      },
    },
  }}>

    <Carousel autoplay >
      {slides.map((slide) => (
        <div className={styles.slide} key={slide.id}  >
          <Image src={slide.Foto1} alt="foto" className={styles.Image} />
          <h3 className={styles.titulo}>{slide.Title}</h3>
          <p className={styles.texto}>{slide.Texto}</p>
        </div>
      ))}
    </Carousel>
  </ConfigProvider>
);

export default App;