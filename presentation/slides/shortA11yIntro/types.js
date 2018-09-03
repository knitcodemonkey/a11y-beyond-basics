// Import React
import React from "react";

// Import Spectacle Core tags
import { Fill, Heading, Layout, Notes, Slide, Text } from "spectacle";

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
          Types of Impairment
        </Heading>

        <hr textfont="secondary" style={{ width: "100%" }} />

        <Layout>
          <Fill>
            <Text textColor="primary" style={[styles.standardText, styles.littleSpacePlease]}>
              Visual
            </Text>
            <Text textColor="primary" style={[styles.standardText, styles.littleSpacePlease]}>
              Auditory
            </Text>
            <Text textColor="primary" style={[styles.standardText, styles.littleSpacePlease]}>
              Physical
            </Text>
          </Fill>
          <Fill>
            <Text textColor="primary" style={[styles.standardText, styles.littleSpacePlease]}>
              Speech
            </Text>
            <Text textColor="primary" style={[styles.standardText, styles.littleSpacePlease]}>
              Cognitive
            </Text>
            <Text textColor="primary" style={[styles.standardText, styles.littleSpacePlease]}>
              Neurological
            </Text>
          </Fill>
        </Layout>
      </Slide>
    );
  }
}
