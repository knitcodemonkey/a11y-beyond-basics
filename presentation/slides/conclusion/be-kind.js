// Import React
import React from "react";
import { Heading, Slide, Notes, Layout, Fill, Image } from "spectacle";
import preloader from "spectacle/lib/utils/preloader";
require("normalize.css");
const images = {
  Library: require("../../../assets/documentation/library-at-trinity-college.jpg"),
  beKind: require("../../../assets/beKind.png")
};
preloader(images);

const BeKind = () => (
  <Slide>
    <Notes>
      Above all, remember that everyone you know is fighting Javascript. Let's do what we can to make it a little easier
      for everyone. Thank you.
    </Notes>
    <Layout style={{ display: "block" }}>
      <Fill
        style={{
          width: "100%",
          height: "100%",
          position: "relative"
        }}
      >
        <Image
          src={images.beKind}
          style={{
            maxWidth: "60vw",
            maxHeight: "60vh",
            width: "auto",
            margin: "0 auto"
          }}
        />
      </Fill>
    </Layout>
  </Slide>
);

export default BeKind;
