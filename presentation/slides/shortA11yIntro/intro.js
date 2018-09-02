// Import React
import React from "react";
import { Heading, Slide, Link, Image } from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";
import styles from "../styles";
const images = {
  accessibilityGif: require("../../../assets/AccessibilityGif.gif")
};
preloader(images);

// Require CSS
require("normalize.css");

export default class A11yIntro extends React.Component {
  render() {
    return (
      <Slide bgColor="#000000" style={{ width: "100%", position: "relative" }}>
        <Heading
          textColor="quartenary"
          style={{
            marginBottom: -100,
            zIndex: 10,
            position: "relative"
          }}
        >
          Accessibility
        </Heading>
        <Image
          src={images.accessibilityGif}
          style={{
            width: "100%",
            marginBottom: -90,
            zIndex: 0,
            position: "relative"
          }}
        />
        <Link
          textColor="dktertiary"
          style={[{ zIndex: 10, position: "relative" }, styles.smallText]}
          href="https://www.microsoft.com/en-us/design/inclusive"
        >
          Image Credit: Inclusive Design at Microsoft
        </Link>
      </Slide>
    );
  }
}
