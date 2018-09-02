import React from "react";
import { Slide, Text, Notes } from "spectacle";
import preloader from "spectacle/lib/utils/preloader";
import styles from "../styles";
require("normalize.css");
const images = {
  wheelchair: require("../../../assets/backgrounds/access-wheelchair.jpg")
};
preloader(images);

export default class WhyBusiness extends React.Component {
  render() {
    return (
      <Slide bgImage={images.wheelchair} bgDarken={0.7}>
        <Notes>
          <p>So, what is disability?</p>
        </Notes>

        <Text textColor="primary" style={[styles.largeText, styles.littleSpacePlease]}>
          At any given time, 20% of the population qualifies as permanently, temporarily, or circumstantially disabled
        </Text>
        <Text textColor="dktertiary" style={[styles.standardText, styles.littleSpacePlease]}>
          20% more engagement ≈ 20% more money
        </Text>
      </Slide>
    );
  }
}
