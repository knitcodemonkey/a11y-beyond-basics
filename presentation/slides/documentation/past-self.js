// Import React
import React from "react";
import { Heading, Slide, Notes } from "spectacle";
import preloader from "spectacle/lib/utils/preloader";
require("normalize.css");
const images = {
  Library: require("../../../assets/documentation/library-at-trinity-college.jpg")
};
preloader(images);

const PastSelf = () => (
  <Slide fit bgImage={images.Library} bgDarken={0.8}>
    <Notes />
    <Heading textColor="primary" style={{ lineHeight: "1.2em" }}>
      What if you wrote documentation for your past self?
    </Heading>
  </Slide>
);

export default PastSelf;
