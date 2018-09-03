// Import React
import React from "react";
import { Heading, Slide, Fill, Layout, Image, BlockQuote, Quote, Cite, Notes } from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";
import styles from "../styles";
const images = {
  JenDevDesk: require("../../../assets/aboutme/JensDesk.jpg"),
  DamianConway: require("../../../assets/documentation/DamianConway.jpg"),
  GoodQuestions: require("../../../assets/documentation/good-questions.jpg"),
  Library: require("../../../assets/documentation/library-at-trinity-college.jpg")
};
preloader(images);

// Require CSS
require("normalize.css");

const DocumentationQuote = () => (
    <Slide fit bgImage={images.Library} bgDarken={0.7}>
      <Notes>
        <p>Damian Conway said, "Documentation is a love letter you write to your future self."</p>
        <p>
          In a month, or even a week from now, you'll have moved onto other projects. You'll barely remember what this
          component does.
        </p>
      </Notes>
      <Layout style={{ marginTop: -80 }}>
        <Fill
          style={{
            flex: "1 1 38%",
            display: "flex",
            alignItems: "center"
          }}
        >
          <Image
            src={images.DamianConway}
            style={{
              width: 340,
              height: 350,
              borderRadius: "50%",
              marginTop: -50,
              marginRight: 20,
              boxShadow: "0px 0px 20px #222"
            }}
          />
        </Fill>
        <Fill
          style={{
            flex: "1 1 62%",
            display: "flex",
            alignItems: "center"
          }}
        >
          <BlockQuote>
            <Quote style={{ fontSize: "4.4rem" }}>Documentation is a love letter you write to your future self.</Quote>
            <Cite textColor="links">Damian Conway</Cite>
          </BlockQuote>
        </Fill>
      </Layout>
    </Slide>
);

export default DocumentationQuote;
