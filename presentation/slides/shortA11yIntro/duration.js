// Import React
import React from "react";

// Import Spectacle Core tags
import { Heading, Slide, Text, Notes, Layout, Fill } from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";
import styles from "../styles";
const images = {
  wheelchair: require("../../../assets/backgrounds/access-wheelchair.jpg")
};
preloader(images);

// Require CSS
require("normalize.css");

export default class TypesOfDisability extends React.Component {
  render() {
    return (
      <Slide bgImage={images.wheelchair} bgDarken={0.7}>
        <Notes>
          <p>So, what is disability?</p>
        </Notes>
        <Heading size={2} textColor="dktertiary" style={{ textShadow: "1px 1px 6px #222" }}>
          Types of Disability
        </Heading>

        <hr textfont="secondary" style={{ width: "100%" }} />

        <Layout>
          <Fill>
            <Text textColor="primary" style={[styles.standardText, styles.littleSpacePlease]}>
              Health conditions
            </Text>
            <Text textColor="primary" style={[styles.standardText, styles.littleSpacePlease]}>
              Temporary impairments
            </Text>
            <Text textColor="primary" style={[styles.standardText, styles.littleSpacePlease]}>
              Situational limitations
            </Text>
          </Fill>
          <Fill>
            <Text textColor="primary" style={[styles.standardText, styles.littleSpacePlease]}>
              Multiple disabilities
            </Text>
            <Text textColor="primary" style={[styles.standardText, styles.littleSpacePlease]}>
              Age-related impairments
            </Text>
            <Text textColor="primary" style={[styles.standardText, styles.littleSpacePlease]}>
              Changing abilities
            </Text>
          </Fill>
        </Layout>
      </Slide>
    );
  }
}
