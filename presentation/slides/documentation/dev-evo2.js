// Import React
import React from "react";
import { Slide, Image, Layout, Link } from "spectacle";
import preloader from "spectacle/lib/utils/preloader";
import styles from "../styles";
require("normalize.css");
const images = {
  Library: require("../../../assets/documentation/library-at-trinity-college.jpg"),
  CPDrivenDev: require("../../../assets/documentation/copy-paste-driven-development.png"),
  CopyPaste: require("../../../assets/documentation/copying_and_pasting.jpg")
};
preloader(images);

const DevEvo1 = () => (
  <Slide fit bgImage={images.Library} bgDarken={0.7}>
    <Layout style={{ justifyContent: "space-between" }}>
      <Link
        style={styles.links}
        href="https://www.reddit.com/r/orlybooks/comments/4htnwb/copy_paste_driven_development/"
      >
        <Image style={{ height: "80vh", width: "auto" }} src={images.CPDrivenDev} />
      </Link>
      <Link style={styles.links} href="https://effectivesoftwaredesign.com/2016/05/22/copy-and-paste-programming/">
        <Image style={{ height: "80vh", width: "auto" }} src={images.CopyPaste} />
      </Link>
    </Layout>
  </Slide>
);

export default DevEvo1;
