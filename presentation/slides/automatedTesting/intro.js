import React from "react";
import { Heading, Slide, Text, Notes } from "spectacle";
import styles from "../styles";
const images = {
  KathySierra: require("../../../assets/automation/make-the-right-things-easy.jpg"),
  brickBg: require("../../../assets/backgrounds/brickBg.jpg")
};
// Require CSS
require("normalize.css");

export default class Intro extends React.Component {
  render() {
    return (
      <Slide bgImage={images.brickBg} bgDarken={0.7}>
        <Notes>Automation helps make the right things easy and the wrong things hard to do.</Notes>
        <Image src={images.KathySierra} style={{ border: "1px solid #333" }} />
        <Heading size={2} textColor="primary">
          Automated Testing
        </Heading>
      </Slide>
    );
  }
}
