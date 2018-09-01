// Import React
import React from "react";

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
  Notes,
  Layout,
  Fill,
  Link,
  Image
} from "spectacle";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Import image preloader util
import preloader from 'spectacle/lib/utils/preloader';
const images = {
  accessibilityGif: require('../../assets/AccessibilityGif.gif'),
}
preloader(images);

// Require CSS
require("normalize.css");
import styles from '../styles';

export default class Intro extends React.Component {
  render() {
    return (
      <Slide
      bgColor="#000000"
      style={{ width: '100%', position: 'relative' }}
    >
      <Notes>
        Oh wow. There is a lot to fix.
      </Notes>

      <Heading size={2} textColor="primary" style={styles.littleSpacePlease}>
        Oh wow
      </Heading>
      <Text textColor="dktertiary" style={[styles.largeText, styles.littleSpacePlease]}>
        That is overwhelming
      </Text>
      <Heading size={2} textColor="primary" style={styles.littleSpacePlease}>
        How do I realistically break it down?
      </Heading>
    </Slide>
    );
  }
}
