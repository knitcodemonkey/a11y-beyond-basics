// Import React
import React from "react";
import styles from "../styles";

// Import Spectacle Core tags
import { Heading, Slide, Text, Link, Image, Layout, Fill } from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Require CSS
require("normalize.css");
const images = {
  formidable: require("../../../assets/aboutme/formidable-logo.svg"),
  formidableHero: require("../../../assets/aboutme/formidableHero.jpg"),
  twitter: require("../../../assets/aboutme/twitter.svg"),
  link: require("../../../assets/aboutme/Link.svg")
};
preloader(images);

export default class AboutMe extends React.Component {
  render() {
    return (
      <Slide
        bgImage={images.formidableHero}
        bgColor="#070707"
        bgDarken={0.1}
        style={{ width: "100%", position: "relative" }}
      >
        <Image src={images.formidable} style={{ width: "100%" }} />
        <Heading textColor="red" style={{ textAlign: "right", fontSize: "0.78em", marginTop: "-20px" }}>
          THE JAVASCRIPT CONSULTANCY TRUSTED BY ENGINEERS
        </Heading>

        <Text textColor="primary" style={[styles.spacePlease, styles.smallText]}>
          Seattle, Denver and London-based engineering consultancy.
          <br /> Open source software organization, specializing in React.js, React Native, GraphQL, Node.js, and the
          extended JavaScript ecosystem.
        </Text>

        <Layout
          style={[
            styles.verticalAlignment,
            { flexDirection: "row", maxWidth: "450px", margin: "0 auto", flexWrap: "wrap" }
          ]}
        >
          <Fill style={styles.verticalAlignment}>
            <Image
              style={{
                display: "inline",
                width: "1.4rem",
                height: "1.4rem",
                margin: "0 5px"
              }}
              src={images.link}
            />
            <Link
              textColor="links"
              style={[{ zIndex: 10, position: "relative", textDecoration: "underline" }, styles.links]}
              href="https://formidable.com"
            >
              Formidable.com
            </Link>
          </Fill>
          <Fill>
            <Text textColor="faded" style={{ padding: 0, margin: "0 15px 0 20px" }}>
              |
            </Text>
          </Fill>
          <Fill style={styles.verticalAlignment}>
            <Image
              style={{
                display: "inline",
                width: "1.4rem",
                height: "1.4rem",
                margin: "0 5px"
              }}
              src={images.twitter}
            />
            <Link
              textColor="links"
              style={[{ zIndex: 10, position: "relative", textDecoration: "underline", margin: "0 5px" }, styles.links]}
              href="https://twitter.com/FormidableLabs"
            >
              FormidableLabs
            </Link>
          </Fill>
        </Layout>
      </Slide>
    );
  }
}
