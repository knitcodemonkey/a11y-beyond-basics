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
            Once you've cleaned up the components, all you have left is the one-off customizations on each page or template.
          </p>
        </Notes>

        <Heading
          size={4}
          textColor="dktertiary"
          style={{ textShadow: "1px 1px 6px #222" }}
        >Cleanup By Page/Template</Heading>

        <hr textfont="secondary" style={{ width: "100%" }}/>

        <Text textColor="primary" style={[styles.standardText, styles.littleSpacePlease]}>
          One-off customizations unique to the page.
        </Text>

        <Text textColor="primary" style={[styles.standardText, styles.littleSpacePlease]}>
          Content that needs to be re-written for clarity.
        </Text>

      </Slide>
    );
  }
}
