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
  Image,
  CodePane
} from "spectacle";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";
import styles from "../styles";
const images = {
  accessibilityGif: require("../../assets/AccessibilityGif.gif")
};
preloader(images);

// Require CSS
require("normalize.css");

export default class Intro extends React.Component {
  render() {
    return (
      <Slide
        bgColor="#000000"
        style={{ width: "100%", position: "relative" }}
      >
        <Layout style={{ display: "block", marginBottom: 20 }}>
          <Fill>
            <CodePane
              lang="html"
              source={require("raw-loader!../../assets/code/accessibility.example")}
              margin="0px auto"
              textSize="0.79em"
            />
          </Fill>
        </Layout>
      </Slide>
    );
  }
}
