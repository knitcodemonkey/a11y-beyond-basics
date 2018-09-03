// Import React
import React, { Component } from "react";
import PropTypes from "prop-types";

// Import Spectacle Core tags
import { Heading, Slide, Text, Notes, Layout, Fill, Link, Image } from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";
import styles from "../styles";
const images = {
  me: require("../../../assets/aboutme/JenLuker.jpg"),
  JenDevDesk: require("../../../assets/aboutme/JensDesk.jpg"),
  twitter: require("../../../assets/aboutme/twitter.svg"),
  podcast: require("../../../assets/aboutme/podcast.svg"),
  link: require("../../../assets/aboutme/Link.svg")
};
preloader(images);

// Require CSS
require("normalize.css");
const meStyles = {
  ...styles,
  myFace: {
    minWidth: "230px",
    maxWidth: "80%",
    borderRadius: "50%",
    margin: "0 auto",
    padding: "10px",
    boxSpacing: "border-box"
  }
};

export default class AboutMe extends Component {
  render() {
    return (
      <Slide bgColor="faded" bgImage={images.JenDevDesk} bgDarken={0.8}>
        <Notes>Software engineer, professionally, for over 10 years</Notes>
        <Layout style={{ flexWrap: "wrap" }}>
          <Fill style={{ minWidth: "230px" }}>
            <Image margin="0" src={images.me} style={meStyles.myFace} />
          </Fill>
          <Fill
            style={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column"
            }}
          >
            <Heading size={2} textColor="dktertiary" style={{ textShadow: "1px 1px 6px #222" }}>
              Jen Luker
            </Heading>

            <hr style={styles.hr} />
            <Text
              style={[meStyles.standardText, { fontSize: "2.6rem", lineHeight: "2.0rem", padding: 0, margin: 0 }]}
              textColor="primary"
            >
              Software Engineer
            </Text>
            <hr style={styles.hr} />

            <Fill style={styles.verticalAlignment}>
              <Image style={styles.icons} src={images.link} />
              <Link textColor="links" href="https://jenluker.com" style={styles.links}>
                jenluker.com
              </Link>
            </Fill>

            <Fill style={styles.verticalAlignment}>
              <Image style={styles.icons} src={images.twitter} />
              <Link textColor="links" href="https://twitter.com/knitcodemonkey" style={styles.links}>
                knitcodemonkey
              </Link>
            </Fill>
            <Fill style={styles.verticalAlignment}>
              <Image style={styles.icons} src={images.podcast} />
              <Link textColor="links" href="https://twitter.com/bookbytesFM" style={styles.links}>
                bookbytesFM
              </Link>
            </Fill>
          </Fill>
        </Layout>

        <Fill style={styles.spacePlease}>
          <Text textColor="primary" style={[styles.smallText, { display: "inline-block", marginRight: 10 }]}>
            Follow along with the slides:
          </Text>
          <Link textColor="links" style={styles.links} href={this.props.slideUrl}>
            {this.props.slideUrl}
          </Link>
        </Fill>
      </Slide>
    );
  }
}

AboutMe.propTypes = {
  slideUrl: PropTypes.string
};
