import React from "react";
import { Heading, Slide, Text, Notes } from "spectacle";
import preloader from "spectacle/lib/utils/preloader";
import styles from "../../styles";
require("normalize.css");
const images = {
  accessibilityGif: require("../../assets/AccessibilityGif.gif")
};
preloader(images);

export default class Intro extends React.Component {
  render() {
    return (
      <Slide bgColor="#000000" style={{ width: "100%", position: "relative" }}>
        <Notes>Oh wow. There is a lot to fix.</Notes>

        <Heading size={2} textColor="primary" style={styles.littleSpacePlease}>
          Oh wow
        </Heading>
        <Text textColor="dktertiary" style={[styles.largeText, styles.littleSpacePlease]}>
          That is overwhelming
        </Text>
        <Heading size={2} textColor="primary" style={styles.littleSpacePlease}>
          How do I realistically break it down?
        </Heading>
      </Slide>
    );
  }
}
