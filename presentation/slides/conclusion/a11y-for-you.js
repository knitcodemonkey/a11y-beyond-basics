// Import React
import React from "react";
import { Heading, Slide } from "spectacle";
import preloader from "spectacle/lib/utils/preloader";
import styles from "../styles";
require("normalize.css");
const images = {
  Library: require("../../../assets/documentation/library-at-trinity-college.jpg")
};
preloader(images);

const A11yForYou = () => (
  <Slide bgColor="#070707" style={{ width: "100%", position: "relative" }}>
    <Heading size={2} textColor="dktertiary" style={styles.littleSpacePlease}>
      Accessibility isn't for just a select few.
    </Heading>
    <Heading size={2} textColor="dktertiary" style={styles.littleSpacePlease}>
      It's for everybody.
    </Heading>
    <Heading size={2} textColor="green" style={[styles.littleSpacePlease, { fontStyle: "italic" }]}>
      It's for you.
    </Heading>
  </Slide>
);

export default A11yForYou;
