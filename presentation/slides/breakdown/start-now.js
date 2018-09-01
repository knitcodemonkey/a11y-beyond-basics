// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
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
  brickBg: require('../../assets/backgrounds/brickBg.jpg'),
}
preloader(images);

// Require CSS
require("normalize.css");
import styles from '../styles';

export default class Checklists extends React.Component {
  render() {
    return (
      <Slide bgImage={images.brickBg} bgDarken={0.7}>
        <Notes>
          <p>
            So the checklists are cool, but if I break it up by bulletpoint, there is still a lot of ground to cover, and a lot of files to touch. I need a better idea of where to start.
          </p>
        </Notes>

        <Heading
          size={4}
          textColor="dktertiary"
          style={{ textShadow: '1px 1px 6px #222' }}
        >Start with your Definition of Done</Heading>
        
        <hr textfont="secondary" style={{width: '100%'}}/>

        <Text textColor="primary" style={[styles.standardText, styles.littleSpacePlease]}>
          Devs: implement the linters
        </Text>
        <Text textColor="primary" style={[styles.standardText, styles.littleSpacePlease]}>
          QA: Incorporate the aXe tools into testing
        </Text>
        <Text textColor="primary" style={[styles.standardText, styles.littleSpacePlease]}>
          Design: Check color contrasts, and font sizes
        </Text>
      </Slide>
    );
  }
}
