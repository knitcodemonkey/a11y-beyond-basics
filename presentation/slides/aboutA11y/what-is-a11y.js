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
  wheelchair: require('../../assets/backgrounds/access-wheelchair.jpg'),
  JenniferVan: require('../../assets/JenniferVan.jpg'),
}
preloader(images);

// Require CSS
require("normalize.css");
import styles from '../styles';

export default class What extends React.Component {
  render() {
    return (
      <Slide bgImage={images.wheelchair} bgDarken={0.7}>
        <Notes>
          <p>
            What is A11y, anyway?
          </p>
          <p>
            When we think of Accessibility features, we focus
            too much on those whose experiences are permanent.
            Though it is important to remember them, they aren't
            the only ones who need those features.
          </p>
        </Notes>
        <Heading
          size={2}
          textColor="dktertiary"
          style={{ textShadow: '1px 1px 6px #222' }}
        >What is Accessibility?</Heading>

        <hr textfont="secondary" style={{width: '100%'}}/>

        <Text textColor="primary" style={styles.spacePlease}>People with disabilities can
        perceive, understand, navigate, and interact with websites and tools,
        and they can contribute equally without barriers.</Text>
        <Link
              textColor="dktertiary"
              style={[styles.smallText, , {textAlign: 'center', width: '100%'}]}
              href="https://www.w3.org/WAI/intro/usable"
            >~ W3C - Web Accessibility Initiative</Link>

      </Slide>
    );
  }
}
