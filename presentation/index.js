import React from "react";
import DeckWrapper from "./deck-wrapper";
import { Deck, Fill, Heading, Layout, Link, Notes, Slide, Text } from "spectacle";
import preloader from "spectacle/lib/utils/preloader";
import createTheme from "spectacle/lib/themes/default";
import styles from "./slides/styles";

import { AboutMe, Formidable } from "./slides/aboutme";
import {
  A11yIntro,
  WhatIsDisability,
  TypesOfDisability,
  DurationOfDisability,
  WhatIsA11y,
  PartsOfA11y,
  WhyBusiness1,
  WhyBusiness2,
  WhyBusiness3
} from "./slides/shortA11yIntro";
require("normalize.css");

const slideUrl = "https://be-a-react-native-a11y.surge.sh";

const images = {
  JenDevDesk: require("../assets/aboutme/JensDesk.jpg"),
  JenDeskColor: require("../assets/aboutme/JensDeskColor.jpg")
};
preloader(images);

const themeColors = {
  primary: "#fff",
  secondary: "#191919",
  red: "#FF4E33",
  green: "#2FC12F",
  links: "deepskyblue",
  dktertiary: "#FF4E33",
  quartenary: "#FAFAFA",
  faded: "#bbb",
  background: "linear-gradient(#F8FAFA, #D8DADA)"
};
const theme = createTheme(themeColors, {
  primary: "Raleway"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <DeckWrapper
        topContent={<span style={{ color: themeColors.faded }}>{slideUrl}</span>}
        bottomContent={<span style={{ color: themeColors.faded }}>@knitcodemonkey</span>}
      >
        <Deck theme={theme} progress="pacman">
          {/* Title Screen */}
          <Slide bgColor="faded" bgImage={images.JenDevDesk} bgDarken={0.7}>
            <Notes>
              As speakers, we do our best, but sometimes slides are just too difficult to read. You can follow along at
              a11y-beyond-basics.surge.sh
            </Notes>
            <Layout style={styles.flexCol}>
              <Fill style={styles.spacePlease}>
                <Heading caps size={1} textColor="primary" style={{ textShadow: "1px 1px" + " 6px #111" }}>
                  Accessibility
                </Heading>
                <Heading
                  margin="10px 0 0"
                  textColor="dktertiary"
                  size={3}
                  bold
                  style={{ textShadow: "1px 1px" + " 6px #111" }}
                >
                  Beyond the Basics
                </Heading>
              </Fill>
              <Fill style={styles.littleSpacePlease}>
                <Text textColor="primary" style={[styles.smallText, { display: "inline-block", marginRight: 10 }]}>
                  Follow along with the slides:
                </Text>
                <Link textColor="links" style={styles.links} href={slideUrl}>
                  {slideUrl}
                </Link>
              </Fill>
            </Layout>
          </Slide>

          {/* About Me Slides */}
          <AboutMe slideUrl={slideUrl} />
          <Formidable />

          {/* short a11y intro */}
          <A11yIntro />

          <WhatIsDisability />
          <TypesOfDisability />
          <DurationOfDisability />

          <WhatIsA11y />
          <PartsOfA11y />

          <WhyBusiness1 />
          <WhyBusiness2 />
          <WhyBusiness3 />

          {/* Conclusion */}
          <Slide bgColor="#000000" style={{ width: "100%", position: "relative" }}>
            <Text textColor="dktertiary" style={[styles.largeText, styles.littleSpacePlease]}>
              Accessibility isn't for just a select few. It's for everybody. It's for you.
            </Text>
            <Heading size={2} textColor="primary" style={styles.littleSpacePlease}>
              Thank you
            </Heading>
          </Slide>
        </Deck>
      </DeckWrapper>
    );
  }
}
