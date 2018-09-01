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

export default class Axe extends React.Component {
  render() {
    return (
      <Slide bgImage={images.wheelchair} bgDarken={0.7}>
        <Notes>
          <p>
            aXe by Deque
          </p>
        </Notes>
        <Heading
          size={2}
          textColor="primary"
          style={{ textShadow: '1px 1px 6px #222' }}
        >A11y Quick Start</Heading>

        <hr textfont="secondary" style={{width: '100%'}}/>

        <Link
          textColor="dktertiary"
          style={[styles.largeText, styles.littleSpacePlease, {textAlign: 'center', width: '100%', display: 'block'}]}
          href="https://chrome.google.com/webstore/detail/axe/lhdoppojpmngadmnindnejefpokejbdd"
          target="_blank"
        >aXe Chrome Extension</Link>

        <Link
          textColor="dktertiary"
          style={[styles.largeText, styles.littleSpacePlease, {textAlign: 'center', width: '100%', display: 'block'}]}
          href="https://addons.mozilla.org/en-US/firefox/addon/axe-devtools/"
          target="_blank"
        >aXe Firefox Extension</Link>
      </Slide>
    );
  }
}
