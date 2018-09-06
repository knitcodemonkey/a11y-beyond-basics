import React from "react";
import { Heading, Slide, Text, Notes } from "spectacle";
import styles from "../styles";
const images = {
  brickBg: require("../../../assets/backgrounds/brickBg.jpg")
};
// Require CSS
require("normalize.css");

export default class Intro extends React.Component {
  render() {
    return (
      <Slide bgImage={images.brickBg} bgDarken={0.7}>
        <Notes>Okay. you're convinced. But how do you get started?</Notes>
        <Heading size={2} textColor="primary">
          Automated Testing
        </Heading>
      </Slide>
    );
  }
}
