// Import React
import React from "react";
import { Heading, Slide, Text, Notes, Link } from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";
import styles from "../styles";
const images = {
  wheelchair: require("../../../assets/backgrounds/access-wheelchair.jpg")
};
preloader(images);

// Require CSS
require("normalize.css");

export default class What extends React.Component {
  render() {
    return (
      <Slide bgImage={images.wheelchair} bgDarken={0.7}>
        <Notes>
          <p>What is A11y, anyway?</p>
          <p>
            When we think of Accessibility features, we focus too much on those whose experiences are permanent. Though
            it is important to remember them, they aren't the only ones who need those features.
          </p>
        </Notes>
        <Heading size={2} textColor="dktertiary" style={{ textShadow: "1px 1px 6px #222" }}>
          What is Accessibility?
        </Heading>

        <hr textfont="secondary" style={{ width: "100%" }} />
        <Text textColor="primary" style={styles.littleSpacePlease}>
          “Accessibility ensures people with disabilities can access the same information from a system as everyone
          else, and also gain the same benefits”
        </Text>
        <Link
          textColor="links"
          style={[styles.links, { textAlign: "center", width: "100%" }]}
          href="https://webdesign.tutsplus.com/articles/accessibility-basics-designing-for-visual-impairment--cms-27634"
        >
          ~ Graeme Fulton
        </Link>
      </Slide>
    );
  }
}
