// Import React
import React from "react";
import { Fill, Heading, Link, Slide, Text, Notes, List, ListItem, Layout } from "spectacle";
import preloader from "spectacle/lib/utils/preloader";
import styles from "../styles";
require("normalize.css");
const images = {
  brickBg: require("../../../assets/backgrounds/brickBg.jpg")
};
preloader(images);

export default class Checklists extends React.Component {
  render() {
    return (
      <Slide bgImage={images.brickBg} bgDarken={0.7}>
        <Notes />
        <Heading size={2} textColor="dktertiary" style={{ textShadow: "1px 1px 6px #222" }}>
          ARIA Sections
        </Heading>
        <hr styles={styles.hr} />
        <Layout style={{ justifyContent: "flex-start" }}>
          <Fill>
            <Text textColor="primary" style={[styles.averageText, { textAlign: "left" }]}>
              Roles
            </Text>
            <List>
              <ListItem style={styles.smallText} textColor="primary">
                Landmark Roles
              </ListItem>
              <ListItem style={styles.smallText} textColor="primary">
                Widget Roles
              </ListItem>
            </List>
          </Fill>

          <Fill>
            <Text textColor="primary" style={[styles.averageText, { textAlign: "left" }]}>
              States & Properties
            </Text>
            <List>
              <ListItem style={styles.smallText} textColor="primary">
                Widget Attributes
              </ListItem>
              <ListItem style={styles.smallText} textColor="primary">
                Live Region Attributes
              </ListItem>
              <ListItem style={styles.smallText} textColor="primary">
                Drag and Drop Attributes
              </ListItem>
              <ListItem style={styles.smallText} textColor="primary">
                Relationship Attributes
              </ListItem>
            </List>
          </Fill>
        </Layout>
        <Link
          textColor="links"
          style={[styles.links, { textAlign: "center", width: "100%" }]}
          href="http://karlgroves-sandbox.com/CheatSheets/ARIA-Cheatsheet.html"
        >
          ~ Karl Groves - ARIA Cheatsheet
        </Link>
      </Slide>
    );
  }
}
