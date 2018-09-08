// Import React
import React from "react";
import { Heading, Slide, Notes } from "spectacle";
import preloader from "spectacle/lib/utils/preloader";
require("normalize.css");
const images = {
  Library: require("../../../assets/documentation/library-at-trinity-college.jpg")
};
preloader(images);

const DevEvo1 = () => (
  <Slide fit bgImage={images.Library} bgDarken={0.8}>
    <Heading textColor="primary" style={{ lineHeight: "1.2em" }}>
      How most of us evolved as programmers:
    </Heading>
  </Slide>
);

export default DevEvo1;
