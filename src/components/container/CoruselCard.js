import React from "react";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import Corusel1 from '../../img/image_12.jpeg'
import Corusel2 from '../../img/image_13.jpeg'
import "./container.css";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export default function CoruselCard() {

    const kreditCorusel = [
        {img: Corusel1, name: 'Ortiqcha hujjatlarsiz', text: 'Faqat pasport, rasmiy daromad va ijobiy kredit tarixi talab etiladi.'},
        {img: Corusel2, name: 'Vaqt sarflab, bankka bormaysiz', text: 'Pullar TBC UZ kartangizga yoki hisob raqamingizga kelib tushadi.'}
       ]
      
    return (
        <CarouselProvider
          naturalSlideWidth={100}
          naturalSlideHeight={50}
          totalSlides={2}
          visibleSlides={1}
        >
          <Slider>{kreditCorusel.map((item, i) => {return <Slide index={i}>
              <div className="kreit-corusel">
                <img alt="Corusel1" src={item.img} />
                <div>
              <div className="back-next">
              <ButtonBack className="back"><ArrowBackIosIcon/></ButtonBack>
              <ButtonNext className="next"><ArrowForwardIosIcon/></ButtonNext>
              </div>
              <div className="kreit-corusel-card">
              <h1>{item.name}</h1>
              <p>{item.text}</p>
              <button>Ilovada ariza qoldirish</button>
              </div>
                </div>
              </div>
            </Slide>
          })}
            </Slider>
        </CarouselProvider>
      );
}
