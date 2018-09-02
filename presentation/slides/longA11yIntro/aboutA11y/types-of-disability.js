// Import React
import React from "react";

// Import Spectacle Core tags
import { Heading, Slide, Text, Notes } from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";
import styles from "../../styles";
const images = {
  wheelchair: require("../../assets/backgrounds/access-wheelchair.jpg"),
  JenniferVan: require("../../assets/JenniferVan.jpg")
};
preloader(images);

// Require CSS
require("normalize.css");

export default class TypesOfDisability extends React.Component {
  render() {
    return (
      <Slide bgImage={images.wheelchair} bgDarken={0.7}>
        <Notes>
          <p>So, what is disability?</p>
        </Notes>
        <Heading size={2} textColor="dktertiary" style={{ textShadow: "1px 1px 6px #222" }}>
          Types of Disability
        </Heading>

        <hr textfont="secondary" style={{ width: "100%" }} />

        <Text textColor="primary" style={[styles.largeText, styles.littleSpacePlease]}>
          Permanent Disability
        </Text>
        <Text textColor="primary" style={[styles.largeText, styles.littleSpacePlease]}>
          Temporary Disability
        </Text>
        <Text textColor="primary" style={[styles.largeText, styles.littleSpacePlease]}>
          Circumstantial Disability
        </Text>
      </Slide>
    );
  }
}
