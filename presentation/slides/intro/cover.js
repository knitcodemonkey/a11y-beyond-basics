// Import React
import React from "react";
import PropTypes from "prop-types";
import { Heading, Slide, Link, Fill, Layout, Text } from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";
import styles from "../styles";
const images = {
  JenDevDesk: require("../../../assets/aboutme/JensDesk.jpg")
};
preloader(images);

// Require CSS
require("normalize.css");

const Cover = ({ slideUrl }) => (
  <Slide bgColor="faded" bgImage={images.JenDevDesk} bgDarken={0.7}>
    <Layout style={styles.flexCol}>
      <Fill style={styles.spacePlease}>
        <Heading caps size={1} textColor="primary" style={{ textShadow: "1px 1px 6px #111" }}>
          Accessibility
        </Heading>
        <Heading margin="10px 0 0" textColor="dktertiary" size={3} bold style={{ textShadow: "1px 1px 6px #111" }}>
          Beyond the Basics
        </Heading>
      </Fill>
      <Fill style={styles.littleSpacePlease}>
        <Text textColor="primary" style={[styles.smallText, { display: "inline-block", marginRight: 10 }]}>
          Follow along with the slides:
        </Text>
        <Link textColor="links" style={styles.links} href={slideUrl}>
          {slideUrl}
        </Link>
      </Fill>
    </Layout>
  </Slide>
);

Cover.propTypes = {
  slideUrl: PropTypes.string
};

export default Cover;
