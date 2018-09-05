// Import React
import React from "react";

// Import Spectacle Core tags
import { Heading, Image, Slide, Notes, Link, Layout, Fill } from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";
import styles from "../styles";
const images = {
  lighthouse: require("../../../assets/audits/lighthouse-audit.png"),
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
        <Image src={images.lighthouse} style={{ border: "1px solid #333" }} />

        <Layout style={{ flexDirection: "row" }}>
          <Fill>
            <Link
              textColor="links"
              style={[
                styles.links,
                styles.smallText,
                styles.littleSpacePlease,
                { textAlign: "center", width: "100%", display: "block" }
              ]}
              href="https://developers.google.com/web/tools/lighthouse/"
              target="_blank"
            >
              Chrome Lighthouse Audit
            </Link>
          </Fill>
        </Layout>
      </Slide>
    );
  }
}
