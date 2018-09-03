// Import React
import React from "react";
import { Heading, Slide, Notes } from "spectacle";
import preloader from "spectacle/lib/utils/preloader";
require("normalize.css");
const images = {
  Library: require("../../../assets/documentation/library-at-trinity-college.jpg")
};
preloader(images);

const AccessibleExamples = () => (
  <Slide fit bgImage={images.Library} bgDarken={0.7}>
    <Notes>
      <p>PYou wrote it and you can't remember all the details. You can't expect your users to intuitively know it. If you don't tell your users how to use your component, they'll think it's bad, regardless of its actual quality.</p>
      <p>If you write in best practices, including accessibility, into every example you put online, into documentation, and into your live code, we will all spend less time fixing what others (including ourselves) have forgotten, or failed to realize they needed to include. By helping others, we help ourselves, and our future tech debt.</p>
    </Notes>
    <Heading size="3" textColor="dktertiary">
      What if every code example was accessible?
    </Heading>
    <hr />
    <Heading size="4" textColor="primary">
      Accessibility would be standard because "that's how it works."
    </Heading>
  </Slide>
);

export default AccessibleExamples;
