// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
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
  brickBg: require("../../assets/backgrounds/brickBg.jpg")
};
preloader(images);

// Require CSS
require("normalize.css");

export default class Checklists extends React.Component {
  render() {
    return (
      <Slide bgImage={images.brickBg} bgDarken={0.7}>
        <Notes>
          <p>
            I propose that in order to say a component is reusable, it must also be accessible. In this day and age, we
            know to add these features, and the last thing we want to do is perpetuate code that doesn't have
            accessibility features built in.
          </p>
        </Notes>

        <Heading size={4} textColor="dktertiary" style={{ textShadow: "1px 1px 6px #222" }}>
          Existing Reusable Components
        </Heading>

        <hr textfont="secondary" style={{ width: "100%" }} />

        <Text textColor="primary" style={[styles.standardText, styles.littleSpacePlease]}>
          If it is not accessible, it is not reusable.
        </Text>

        <Text textColor="primary" style={[styles.standardText, styles.littleSpacePlease]}>
          Fixing the component fixes it everywhere.
        </Text>
      </Slide>
    );
  }
}
