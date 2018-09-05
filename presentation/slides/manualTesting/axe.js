import React from "react";
import preloader from "spectacle/lib/utils/preloader";
import styles from "../styles";
import { Image, Slide, Notes, Link, Layout, Fill } from "spectacle";
const images = {
  axe: require("../../../assets/audits/axe-audit.png"),
  brickBg: require("../../../assets/backgrounds/brickBg.jpg")
};
preloader(images);

// Require CSS
require("normalize.css");

export default class Axe extends React.Component {
  render() {
    return (
      <Slide bgImage={images.brickBg} bgDarken={0.7}>
        <Notes>
          <p>aXe by Deque</p>
        </Notes>
        <Image src={images.axe} style={{ border: "1px solid #333" }} />

        <Layout style={{ flexDirection: "row" }}>
          <Fill style={styles.half}>
            <Link
              textColor="links"
              style={[
                styles.links,
                styles.smallText,
                styles.littleSpacePlease,
                { textAlign: "center", width: "100%", display: "block" }
              ]}
              href="https://chrome.google.com/webstore/detail/axe/lhdoppojpmngadmnindnejefpokejbdd"
              target="_blank"
            >
              aXe Chrome Extension
            </Link>
          </Fill>
          <Fill style={styles.half}>
            <Link
              textColor="links"
              style={[
                styles.links,
                styles.smallText,
                styles.littleSpacePlease,
                { textAlign: "center", width: "100%", display: "block" }
              ]}
              href="https://addons.mozilla.org/en-US/firefox/addon/axe-devtools/"
              target="_blank"
            >
              aXe Firefox Extension
            </Link>
          </Fill>
        </Layout>
      </Slide>
    );
  }
}
