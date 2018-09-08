import React from "react";
import preloader from "spectacle/lib/utils/preloader";
import createTheme from "spectacle/lib/themes/default";

import { Deck, Notes } from "spectacle";
import DeckWrapper from "./deck-wrapper";

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
import { DefinitionOfDone } from "./slides/gettingStarted";
import { GettingStartedIntro, Axe, Lighthouse } from "./slides/manualTesting";
import { AutoIntro, EslintPlugin, Integrations } from "./slides/automatedTesting";
import { WhyBusiness1, WhyBusiness2, WhyBusiness3 } from "./slides/businessConcerns";
import { DocQuote1, PastSelf, DevEvo1, DevEvo2, AccessibleExamples, DocQuote2 } from "./slides/documentation";
import { A11yForYou, BeKind } from "./slides/conclusion";
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
    const slideNotes = (
      <Notes>
        Accessibility in React has been a hot topic in the last few years, but in this talk, we'll be going beyond the
        basics.
        <ul>
          <li>Intro, but more</li>
          <li>We'll explore a data-driven perspective to convince the business to invest in accessibility</li>
          <li>
            Manual testing
            <ul>
              <li>We'll use lighthouse to audit applications</li>
              <li>educate ourselves with the axe browser extensions</li>
            </ul>
          </li>
          <li>
            Automated testing
            <ul>
              <li>incorporate eslint-plugin-jsx-a11y into our lint process</li>
              <li>add axe-core to our automated testing suite</li>
            </ul>
          </li>
          <li>Documentation</li>
        </ul>
      </Notes>
    );
    return (
      <DeckWrapper
        topContent={<span style={{ color: themeColors.quartenary }}>{slideUrl}</span>}
        bottomContent={<span style={{ color: themeColors.faded }}>@knitcodemonkey</span>}
      >
        <Deck theme={theme} progress="pacman">
          <Cover slideUrl={slideUrl} slideNotes={slideNotes} />

          {/* About Me Slides */}
          <AboutMe slideUrl={slideUrl} />
          <Formidable />

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

          {/* Documentation */}
          <DocQuote1 />
          <PastSelf />
          <DevEvo1 />
          <DevEvo2 />
          <AccessibleExamples />
          <DocQuote1 />

          <A11yForYou />

          {/* How to get started */}
          <DefinitionOfDone />

          {/* Business Needs */}
          <WhyBusiness1 />
          <WhyBusiness2 />
          <WhyBusiness3 />

          {/* Manual Testing */}
          <GettingStartedIntro />
          <Axe />
          <Lighthouse />

          {/* Automated Testing */}
          <AutoIntro />
          <EslintPlugin />
          <Integrations />

          {/* Conclusion */}
          <BeKind />
          <Dedication />
        </Deck>
      </DeckWrapper>
    );
  }
}
