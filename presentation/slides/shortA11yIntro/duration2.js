// Import React
import React from "react";

// Import Spectacle Core tags
import { Link, Heading, Slide, Text, Notes, Layout, Fill } from "spectacle";

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
          <p>Diversity of abilities</p>
        </Notes>
        <Heading size={2} textColor="dktertiary" style={{ textShadow: "1px 1px 6px #222" }}>
          Diversity of Abilities
        </Heading>

        <hr textfont="secondary" style={{ width: "100%" }} />

        <Layout style={[styles.verticalAlignment]}>
          <Fill>
            <Text textColor="faded" style={[styles.averageText, styles.littleSpacePlease]}>
              Permanent disabilities
            </Text>
            <Text textColor="faded" style={[styles.averageText, styles.littleSpacePlease]}>
              Temporary impairments
            </Text>
            <Text textColor="faded" style={[styles.averageText, styles.littleSpacePlease]}>
              Situational limitations
            </Text>
          </Fill>
          <Fill>
            <Text textColor="primary" style={[styles.averageText, styles.littleSpacePlease]}>
              Age-related impairments
            </Text>
            <Text textColor="primary" style={[styles.averageText, styles.littleSpacePlease]}>
              Multiple disabilities
            </Text>
            <Text textColor="primary" style={[styles.averageText, styles.littleSpacePlease]}>
              Health conditions
            </Text>
            <Text textColor="primary" style={[styles.averageText, styles.littleSpacePlease]}>
              Changing abilities
            </Text>
          </Fill>
        </Layout>

        <Layout style={[styles.horizontalAlignment]}>
          <Link
            textColor="links"
            style={[styles.links, styles.littleSpacePlease, { zIndex: 10, position: "relative", fontSize: "1.4rem" }]}
            href="https://www.w3.org/WAI/people-use-web/abilities-barriers/#diversity"
          >
            W3C - Diverse Abilities and Barriers
          </Link>
        </Layout>
      </Slide>
    );
  }
}
