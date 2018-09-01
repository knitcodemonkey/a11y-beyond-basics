import React from "react";
import PropTypes from "prop-types";

const DeckWrapper = ({ topContent, bottomContent, children }) => {
  const contentPositionStyles = {
    position: "absolute",
    padding: "5px",
    zIndex: 999999
  };

  return (
    <div>
      <div style={{ ...contentPositionStyles, top: 0 }}>{topContent}</div>
      {children}
      <div style={{ ...contentPositionStyles, bottom: 0 }}>{bottomContent}</div>
    </div>
  );
};

DeckWrapper.propTypes = {
  bottomContent: PropTypes.any,
  children: PropTypes.any,
  topContent: PropTypes.any
};

export default DeckWrapper;
