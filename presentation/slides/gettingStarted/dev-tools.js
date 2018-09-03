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
  wheelchair: require("../../../assets/backgrounds/access-wheelchair.jpg"),
  JenniferVan: require("../../../assets/JenniferVan.jpg")
};
preloader(images);

// Require CSS
require("normalize.css");

export default class OtherTools extends React.Component {
  render() {
    return (
      <Slide bgImage={images.wheelchair} bgDarken={0.7}>
        <Notes>
          <p>Development-specific Tools</p>
        </Notes>

        <Heading size={2} textColor="primary" style={{ textShadow: "1px 1px 6px #222" }}>
          Development Tools
        </Heading>

        <hr textfont="secondary" style={{ width: "100%" }} />

        <Link
          textColor="dktertiary"
          style={[styles.largeText, styles.littleSpacePlease, { textAlign: "center", width: "100%", display: "block" }]}
          href="https://github.com/reactjs/react-a11y"
        >
          react-a11y
        </Link>

        <Link
          textColor="dktertiary"
          style={[styles.largeText, styles.littleSpacePlease, { textAlign: "center", width: "100%", display: "block" }]}
          href="https://www.npmjs.com/package/eslint-plugin-jsx-a11y"
        >
          eslint-plugin-jsx-a11y
        </Link>

        <Link
          textColor="dktertiary"
          style={[styles.largeText, styles.littleSpacePlease, { textAlign: "center", width: "100%", display: "block" }]}
          href="https://www.youtube.com/watch?v=jC_7NnRdYb0"
        >
          axe-core
        </Link>
      </Slide>
    );
  }
}
