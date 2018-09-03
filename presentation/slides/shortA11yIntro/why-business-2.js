import React from "react";
import { Slide, Text, Notes, Link, Cite, BlockQuote, Quote, Layout } from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";
import styles from "../styles";
const images = {
  wheelchair: require("../../../assets/backgrounds/access-wheelchair.jpg")
};
preloader(images);

// Require CSS
require("normalize.css");

export default class WhyBusiness extends React.Component {
  render() {
    return (
      <Slide bgImage={images.wheelchair} bgDarken={0.8}>
        <Layout>
          <BlockQuote>
            <Quote textColor="primary" style={styles.standardText}>
              About 15% of the world's population lives with some form of disability.
            </Quote>
            <Cite>
              <Link
                textColor="links"
                style={styles.links}
                href="http://www.who.int/disabilities/world_report/2011/report/en/"
              >
                World Health Organization
              </Link>
            </Cite>
          </BlockQuote>

          <BlockQuote>
            <Quote textColor="primary" style={styles.standardText}>
              Nearly 1 in 5 People Have a Disability in the U.S.
            </Quote>
            <Cite>
              <Link
                textColor="links"
                style={styles.links}
                href="https://www.census.gov/newsroom/releases/archives/miscellaneous/cb12-134.html"
              >
                U.S. Census Bureau
              </Link>
            </Cite>
          </BlockQuote>
        </Layout>
        <Text textColor="green" style={[styles.standardText, styles.littleSpacePlease]}>
          15% more engagement ≈ 15% more money
        </Text>

        <Text textColor="green" style={[styles.standardText, styles.littleSpacePlease]} />
      </Slide>
    );
  }
}
