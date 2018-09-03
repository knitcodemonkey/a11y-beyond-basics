import React from "react";
import DeckWrapper from "./deck-wrapper";
import { Deck, Heading, Slide, Text } from "spectacle";
import preloader from "spectacle/lib/utils/preloader";
import createTheme from "spectacle/lib/themes/default";
import styles from "./slides/styles";
import { Cover, Dedication } from "./slides/intro";
import { AboutMe, Formidable } from "./slides/aboutme";
import {
  A11yIntro,
  WhatIsDisability,
  TypesOfDisability,
  TypesOfDisability2,
  DiversityOfDisability,
  DiversityOfDisability2,
  WhatIsA11y,
  PartsOfA11y,
  PartsOfA11y2
} from "./slides/shortA11yIntro";

import { Aria } from "./slides/intermediateA11y";

import { GettingStartedIntro, Axe, DesignTools, DevTools } from "./slides/gettingStarted";

import { WhyBusiness1, WhyBusiness2, WhyBusiness3 } from "./slides/businessConcerns";

import { DocQuote1, PastSelf, DevEvo1, DevEvo2, AccessibleExamples, DocQuote2 } from "./slides/documentation";
import {A11yForYou, BeKind } from "./slides/conclusion";
require("normalize.css");

const slideUrl = "https://a11y-beyond-basics.surge.sh";

const images = {
  JenDevDesk: require("../assets/aboutme/JensDesk.jpg")
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
  faded: "#999",
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
          <Cover slideUrl={slideUrl} />

          {/* About Me Slides */}
          <AboutMe slideUrl={slideUrl} />
          <Formidable />

          <Dedication />

          {/* short a11y intro */}
          <A11yIntro />

          <WhatIsDisability />

          <DiversityOfDisability />
          <DiversityOfDisability2 />

          <TypesOfDisability />
          <TypesOfDisability2 />

          <WhatIsA11y />
          <PartsOfA11y />
          <PartsOfA11y2 />

          <Aria />

          {/* Business Needs */}
          <WhyBusiness1 />
          <WhyBusiness2 />
          <WhyBusiness3 />

          {/* How do we get started? */}
          <GettingStartedIntro />
          <Axe />
          <DesignTools />
          <DevTools />

          <DocQuote1 />
          <PastSelf />
          <DevEvo1 />
          <DevEvo2 />
          <AccessibleExamples />
          <DocQuote2 />

          <A11yForYou />
          <BeKind />

        </Deck>
      </DeckWrapper>
    );
  }
}
