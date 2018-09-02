// Import React
import React from "react";

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
  Notes,
  Layout,
  Fill,
  Link,
  Image
} from "spectacle";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";
import styles from "../styles";
const images = {
  accessibilityGif: require("../../assets/AccessibilityGif.gif")
};
preloader(images);

// Require CSS
require("normalize.css");

export default class Intro extends React.Component {
  render() {
    return (
      <Slide
        bgColor="#000000"
        style={{ width: "100%", position: "relative" }}
      >
        <Notes>
        Okay. you're convinced. But how do you get started?
        </Notes>
        <Text textColor="dktertiary" style={[styles.largeText, styles.littleSpacePlease]}>
          We've talked a lot today.
        </Text>
        <Heading size={2} textColor="primary">
          Lets see it in action!
        </Heading>
      </Slide>
    );
  }
}
