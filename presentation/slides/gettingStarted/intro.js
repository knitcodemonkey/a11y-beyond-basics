import React from "react";
import { Heading, Slide, Text, Notes } from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";
import styles from "../styles";
const images = {
  accessibilityGif: require("../../../assets/AccessibilityGif.gif")
};
preloader(images);

// Require CSS
require("normalize.css");

export default class Intro extends React.Component {
  render() {
    return (
      <Slide bgColor="#000000" style={{ width: "100%", position: "relative" }}>
        <Notes>Okay. you're convinced. But how do you get started?</Notes>
        <Text textColor="dktertiary" style={[styles.standardText, styles.littleSpacePlease]}>
          Okay, fine. I'm convinced.
        </Text>
        <Heading size={2} textColor="primary">
          How do I get started?
        </Heading>
      </Slide>
    );
  }
}
