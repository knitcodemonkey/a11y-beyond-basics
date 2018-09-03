// Import React
import React from "react";
import PropTypes from "prop-types";
import { Heading, Slide, Link, Fill, Layout, Text } from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";
import styles from "../styles";
const images = {
  brickBg: require("../../../assets/backgrounds/brickBg.jpg")
};
preloader(images);

// Require CSS
require("normalize.css");

const Dedication = () => (
  <Slide bgColor="faded" bgImage={images.brickBg} bgDarken={0.7}>
    <Heading fit textColor="dktertiary" style={{ textShadow: "1px 1px 6px #222" }}>
      Resources and Influences
    </Heading>
    <hr style={styles.hr} />
    <Layout style={styles.flexCol}>
      <Fill style={styles.tinySpacePlease}>
        <Text textColor="primary" style={[styles.smallText, { display: "inline-block", marginRight: 10 }]}>
          Liz Certa -
        </Text>
        <Link textColor="links" style={[styles.links]} href="https://www.youtube.com/watch?v=gE8S4cUJFUo">
          Why We Never Get to Web Accessibility 102
        </Link>
      </Fill>
      <Fill style={styles.tinySpacePlease}>
        <Text textColor="primary" style={[styles.smallText, { display: "inline-block", marginRight: 10 }]}>
          Graeme Fulton -
        </Text>
        <Link
          textColor="links"
          style={[styles.links, { display: "inline-block" }]}
          href="https://webdesign.tutsplus.com/articles/accessibility-basics-designing-for-visual-impairment--cms-27634"
        >
          Accessibility Basics: Designing for Visual Impairment
        </Link>
      </Fill>
      <Fill style={styles.tinySpacePlease}>
        <Text textColor="primary" style={[styles.smallText, { display: "inline-block", marginRight: 10 }]}>
          Jennifer Van -
        </Text>
        <Link
          textColor="links"
          style={[styles.links, { display: "inline-block" }]}
          href="https://www.youtube.com/watch?v=sL4D_zRUVw4"
        >
          Scaling My First Enterprise React App
        </Link>
      </Fill>

      <Fill style={styles.tinySpacePlease}>
        <Text textColor="primary" style={[styles.smallText, { display: "inline-block", marginRight: 10 }]}>
          Jen Luker -
        </Text>
        <Link
          textColor="links"
          style={[styles.links, { display: "inline-block" }]}
          href="https://www.youtube.com/watch?v=Uf4HaOZCfVQ"
        >
          Accessibility: The Sprint-Filler Way
        </Link>
      </Fill>
    </Layout>
  </Slide>
);

export default Dedication;
