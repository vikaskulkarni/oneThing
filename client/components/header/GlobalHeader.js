import React from "react";

const styles = {
  fixedHeader: {
    textShadow: "2px 2px 3px grey",
    boxShadow: "rgba(0, 0, 0, 0.45) 30px 5px 20px 0px",
    color: "black",
    zIndex: 10,
    top: 0,
    right: 0,
    overflow: "hidden",
    background: "#f6f1ed",
    position: "fixed",
    margin: "10px 5px",
    padding: "5px 10px",
    borderRadius: "5px",
    fontSize: "16px",
  },
  total: {
    fontSize: "14px",
    boxShadow: "none",
    textAlign: "right",
    textUnderline: true,
  },
};

const GlobalHeader = (props) => (
  <div style={styles.fixedHeader}>
    <div>
      Learnings During COVID-19 -{" "}
      <span style={styles.total}>
        Cards:{" "}
        <span>
          <b>{props.total}</b>
        </span>
      </span>
    </div>
  </div>
);
export default GlobalHeader;
