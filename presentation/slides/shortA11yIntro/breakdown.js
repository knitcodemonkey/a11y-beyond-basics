// Import React
import React from "react";
import { Appear, Slide, Text, Notes } from "spectacle";
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
        <Appear>
          <Text style={styles.smallText}>Definition of Done</Text>
        </Appear>

        <Appear>
          <Text style={styles.smallText}>Reusable components</Text>
        </Appear>

        <Appear>
          <Text style={styles.smallText}>Individual pages</Text>
        </Appear>

        <Appear>
          <Text style={styles.smallText}>Content and Flow</Text>
        </Appear>
      </Slide>
    );
  }
}
