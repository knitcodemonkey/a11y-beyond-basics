import React from "react";
import { Heading, Slide, Notes, Link } from "spectacle";
import preloader from "spectacle/lib/utils/preloader";
import styles from "../styles";
const images = {
  brickBg: require("../../../assets/backgrounds/brickBg.jpg")
};
preloader(images);

// Require CSS
require("normalize.css");

export default class OtherTools extends React.Component {
  render() {
    return (
      <Slide bgImage={images.brickBg} bgDarken={0.7}>
        <Notes>
          <p>Development-specific Tools</p>
        </Notes>

        <Heading size={2} textColor="primary" style={{ textShadow: "1px 1px 6px #222" }}>
          Development Tools
        </Heading>

        <hr textfont="secondary" style={{ width: "100%" }} />

        <Link
          textColor="links"
          style={[styles.largeText, styles.littleSpacePlease, { textAlign: "center", width: "100%", display: "block" }]}
          href="https://www.npmjs.com/package/eslint-plugin-jsx-a11y"
        >
          eslint-plugin-jsx-a11y
        </Link>

        <Link
          textColor="links"
          style={[styles.largeText, styles.littleSpacePlease, { textAlign: "center", width: "100%", display: "block" }]}
          href="https://www.youtube.com/watch?v=jC_7NnRdYb0"
        >
          axe-core for automated testing
        </Link>
      </Slide>
    );
  }
}
