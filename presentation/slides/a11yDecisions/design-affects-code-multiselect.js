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

const themeColors = {
  primary: "#FAFAFA",
  secondary: "#191919",
  tertiary: "#981804",
  dktertiary: "deepskyblue",
  quartenary: "#FAFAFA",
  faded: "#CCCCCC",
  background: "linear-gradient(#F8FAFA, #D8DADA)"
};

export default class Intro extends React.Component {
  render() {
    return (
      <Slide
        bgColor="#000000"
        style={{ width: "100%", position: "relative" }}
      >
        <Notes>

        </Notes>
        <Heading size={2} textColor="primary">

        </Heading>
        <iframe
          height="450"
          scrolling="no"
          title="Multiselect Checkboxes"
          src="//codepen.io/pramodkumarboda/embed/XJjOeW/?height=265&theme-id=0&default-tab=html,result&embed-version=2"
          frameBorder="no"
          allowTransparency="true"
          allowFullScreen="true"
          style={{ width: "100%" }}
        />

        <Text textColor="primary" style={[styles.extraSmallText, styles.littleSpacePlease]}>
        See the Pen <a style={{ color: themeColors.dktertiary }} href="https://codepen.io/pramodkumarboda/pen/XJjOeW/">Multiselect Checkboxes</a> by Pramod Kumar (<a style={{ color: themeColors.dktertiary }} href="https://codepen.io/pramodkumarboda">@pramodkumarboda</a>) on <a style={{ color: themeColors.dktertiary }} href="https://codepen.io">CodePen</a>.</Text>
      </Slide>
    );
  }
}
