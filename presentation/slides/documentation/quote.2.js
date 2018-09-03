// Import React
import React, { Fragment } from "react";
import { Heading, Slide, Link, Fill, Layout, Image, BlockQuote, Quote, Cite, Notes } from "spectacle";

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
  <Fragment>
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
            <Cite textColor="dktertiary">Damian Conway</Cite>
          </BlockQuote>
        </Fill>
      </Layout>
    </Slide>

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

    <Slide fit bgImage={images.Library} bgDarken={0.7}>
      <Notes>
        You wrote it and you can't remember all the details. You can't expect your users to intuitively know it. If you
        don't tell your users how to use your component, they'll think it's bad, regardless of its actual quality.
      </Notes>
      <Heading size="3" textColor="primary" style={{ lineHeight: "1.2em" }}>
        What if every available parameter, marked with `required` or `optional` was in your example?
      </Heading>
    </Slide>

    <Slide fit bgImage={images.Library} bgDarken={0.7}>
      <Notes>
        If you write in best practices, including accessibility, into every example you put online, into documentation,
        and into your live code, we will all spend less time fixing what others (including ourselves) have forgotten, or
        failed to realize they needed to include. By helping others, we help ourselves, and our future tech debt.
      </Notes>
      <Heading size="3" textColor="dktertiary">
        What if every code example was accessible?
      </Heading>
      <hr />
      <Heading size="4" textColor="primary">
        Accessibility would be standard because "that's how it works."
      </Heading>
    </Slide>

    <Slide fit bgImage={images.Library} bgDarken={0.7}>
      <Notes>
        <p>Damian Conway said, "Documentation is a love letter you write to your future self."</p>
        <p>
          Now that you've written the documentation you wish you'd had: it's both accessible, and easy to identify all
          the possible parameters, Let's look at this quote again. Imagine all the tech debt you won't have in the
          future because everyone that came after you copied and pasted those code examples.
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
            <Cite textColor="links" style={styles.links}>
              Damian Conway
            </Cite>
          </BlockQuote>
        </Fill>
      </Layout>
    </Slide>
  </Fragment>
);

export default DocumentationQuote;
