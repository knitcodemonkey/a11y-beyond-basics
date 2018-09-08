// Import React
import React from "react";

// Import Spectacle Core tags
import { CodePane, Text, Slide, Notes, Link, Layout, Fill } from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";
import styles from "../styles";
const images = {
  Integrations: require("../../../assets/automation/axe-integrations.png"),
  brickBg: require("../../../assets/backgrounds/brickBg.jpg")
};
preloader(images);

// Require CSS
require("normalize.css");

export default class Axe extends React.Component {
  render() {
    return (
      <Slide bgImage={images.brickBg} bgDarken={0.7}>
        <Notes>Make it harder to do the wrong thing than to do the right thing.</Notes>

        <Layout style={{ flexDirection: "row" }}>
          <Fill style={{ display: "inline", flexGrow: "12" }}>
            <CodePane
              style={styles.codeText}
              lang="markup"
              source={require("raw-loader!../../../assets/code/npminstall.example")}
              margin="0px 10px 30px 0px"
            />
            <CodePane
              style={styles.codeText}
              lang="jsx"
              source={require("raw-loader!../../../assets/code/eslintrc.example")}
              margin="35px 10px 0 0px"
            />
          </Fill>
          <Fill style={{ display: "inline", flexGrow: "8" }}>
            <CodePane
              style={styles.codeText}
              lang="jsx"
              source={require("raw-loader!../../../assets/code/package.example")}
              margin="0 0 0 10px"
            />
          </Fill>
        </Layout>
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
              href="https://www.npmjs.com/package/eslint-plugin-jsx-a11y"
              target="_blank"
            >
              eslint-plugin-jsx-a11y
            </Link>
          </Fill>
        </Layout>
      </Slide>
    );
  }
}
