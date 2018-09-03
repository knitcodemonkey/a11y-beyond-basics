import React from "react";
import { Heading, Slide, Text, Notes, Link } from "spectacle";
import preloader from "spectacle/lib/utils/preloader";
import styles from "../styles";
const images = {
  wheelchair: require("../../../assets/backgrounds/access-wheelchair.jpg")
};
preloader(images);

// Require CSS
require("normalize.css");

export default class WhyBusiness extends React.Component {
  render() {
    return (
      <Slide bgImage={images.wheelchair} bgDarken={0.7}>
        <Notes>
          <p>So, what is disability?</p>
        </Notes>
        <Heading size={3} textColor="dktertiary" style={{ textShadow: "1px 1px 6px #222" }}>
          But wait! There's more!
        </Heading>

        <hr textfont="secondary" style={{ width: "100%" }} />

        <Text textColor="primary" style={[styles.standardText, styles.littleSpacePlease]}>
          "The ramp outside of our local public library makes the building more easily accessible to those using
          wheelchairs, but also to the parent with the sleeping baby, the cyclist, or the delivery driver with a dolly
          full of packages."
        </Text>

        <Link
          textColor="links"
          style={[styles.links, { textAlign: "center", width: "100%" }]}
          href="https://blog.prototypr.io/why-i-wont-try-on-disability-to-build-empathy-in-the-design-process-and-you-should-think-twice-7086ed6202aa"
        >
          ~ Amelia Abreu
        </Link>
      </Slide>
    );
  }
}
