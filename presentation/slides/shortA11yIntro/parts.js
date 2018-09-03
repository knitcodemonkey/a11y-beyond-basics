// Import React
import React from "react";

// Import Spectacle Core tags
import { Heading, Slide, Text, Notes } from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";
import styles from "../styles";
const images = {
  wheelchair: require("../../../assets/backgrounds/access-wheelchair.jpg")
};
preloader(images);

// Require CSS
require("normalize.css");

export default class TypesOfDisability extends React.Component {
  render() {
    return (
      <Slide bgImage={images.wheelchair} bgDarken={0.7}>
        <Notes>
          <p>Parts of Accessibility</p>
        </Notes>
        <Heading size={2} textColor="dktertiary" style={{ textShadow: "1px 1px 6px #222" }}>
          Parts of Accessibility
        </Heading>

        <hr textfont="secondary" style={{ width: "100%" }} />

        <Text textColor="primary" style={[styles.averageText, styles.tinySpacePlease]}>
          Screen Readers
        </Text>
        <Text textColor="primary" style={[styles.averageText, styles.tinySpacePlease]}>
          Keyboard Navigation
        </Text>
        <Text textColor="primary" style={[styles.averageText, styles.tinySpacePlease]}>
          Network Connection Limitations
        </Text>
        <Text textColor="primary" style={[styles.averageText, styles.tinySpacePlease]}>
          Language Complexity
        </Text>
        <Text textColor="primary" style={[styles.averageText, styles.littleSpacePlease]}>
          Globalization/Internationalization
        </Text>
      </Slide>
    );
  }
}
