import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';// Import the CSS file
import image1 from '../images/assembly-project-writeval-procedure.PNG';
import image2 from '../images/assembly-random-num-gen-code.PNG';
import image3 from '../images/client-survey-matching-app-output2.png';
import image4 from '../images/client-survey-website-screenshot.PNG';
import image5 from '../images/matching-app-python-logic.PNG';
import image6 from '../images/origami-box-with-ricola.png';
import image7 from '../images/origami-boxes-on-shelf.jpg';
import image8 from '../images/random-number-gen-output.PNG';
import image9 from '../images/streamblend-prototype.PNG';
import image10 from '../images/submit-routes-matching-app.PNG';

const images = [
  { id: 1, src: image1, alt: 'Assembly Project Writeval Procedure' },
  { id: 2, src: image2, alt: 'Assembly Random Number Generator Code' },
  { id: 3, src: image3, alt: 'Client Survey Matching App Output 2' },
  { id: 4, src: image4, alt: 'Client Survey Website Screenshot' },
  { id: 5, src: image5, alt: 'Matching App Python Logic' },
  { id: 6, src: image6, alt: 'Origami Box with Ricola' },
  { id: 7, src: image7, alt: 'Origami Boxes on Shelf' },
  { id: 8, src: image8, alt: 'Random Number Generator Output' },
  { id: 9, src: image9, alt: 'Streamblend Prototype' },
  { id: 10, src: image10, alt: 'Submit Routes Matching App' },
];

const ImageGallery = () => {
  return (
    <div>
      <h1>Image Gallery</h1>
      <Carousel>
        {images.map((image) => (
          <div key={image.id}>
            <img src={image.src} alt={image.alt} />
            <p className="legend">{image.alt}</p>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default ImageGallery;
