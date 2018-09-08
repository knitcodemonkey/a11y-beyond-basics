import React from "react";
import { Heading, Slide, Layout, List, ListItem } from "spectacle";
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
      <Slide
        bgImage={images.wheelchair}
        bgDarken={0.7}
        notes="This is all well and good for a greenfield app, but what I do about my existing app?"
      >
        <Heading fit textColor="dktertiary" style={{ textShadow: "1px 1px 6px #222" }}>
          When to add accessibility
        </Heading>

        <hr textfont="secondary" style={{ width: "100%" }} />

        <Layout style={[styles.horizontalAlignment, { flexDirection: "column" }]}>
          <List>
            <ListItem textColor="primary" style={[styles.averageText, styles.littleSpacePlease]}>
              From the very beginning, before the design phase.
            </ListItem>
            <ListItem textColor="primary" style={[styles.averageText, styles.littleSpacePlease]}>
              Accessibility issues are bugs.
            </ListItem>
          </List>
        </Layout>
      </Slide>
    );
  }
}
