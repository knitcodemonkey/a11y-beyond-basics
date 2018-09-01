import React, { Fragment } from "react";
import PropTypes from "prop-types";

const DeckWrapper = ({ topContent, bottomContent, children }) => {
  const contentPositionStyles = {
    position: "absolute",
    padding: "5px 8px",
    zIndex: 999999,
    fontSize: "1.4rem"
  };

  return (
    <Fragment>
      <div style={{ ...contentPositionStyles, top: 0 }}>{topContent}</div>
      {children}
      <div style={{ ...contentPositionStyles, bottom: 0, right: 0 }}>{bottomContent}</div>
    </Fragment>
  );
};

DeckWrapper.propTypes = {
  bottomContent: PropTypes.any,
  children: PropTypes.any,
  topContent: PropTypes.any
};

export default DeckWrapper;
