import React from "react";
import {
  MDBCarousel,
  MDBCarouselItem,
} from "mdb-react-ui-kit";

export default function CabinCarousel(props) {
  const images = props.images

  return (
    <MDBCarousel showControls showIndicators dealy={10}>
      {images.map((image) => {
        return (
          <MDBCarouselItem
            className="w-100 d-block"
            itemId={images.indexOf(image) + 1}
            src={image}
            key={images.indexOf(image)}
            alt="Images of Cabin"
          />
        );
      })}
    </MDBCarousel>
  );
}
