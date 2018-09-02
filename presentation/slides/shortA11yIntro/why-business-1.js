import React from "react";
import { Heading, Slide, Notes } from "spectacle";
import preloader from "spectacle/lib/utils/preloader";
require("normalize.css");

const images = {
  wheelchair: require("../../../assets/backgrounds/access-wheelchair.jpg")
};
preloader(images);

export default class WhyBusiness extends React.Component {
  render() {
    return (
      <Slide bgImage={images.wheelchair} bgDarken={0.7}>
        <Notes>
          <p>So, what is disability?</p>
        </Notes>
        <Heading size={2} textColor="dktertiary" style={{ textShadow: "1px 1px 6px #222" }}>
          Why should the business care?
        </Heading>
      </Slide>
    );
  }
}
