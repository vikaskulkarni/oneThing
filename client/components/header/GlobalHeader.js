import React from "react";

const styles = {
  fixedHeader: {
    textShadow: "2px 2px 3px grey",
    boxShadow: "20px 20px 20px 20px rgba(0,0,0,0.75)",
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
    <div>Learnings During COVID-19</div>
    <div style={styles.total}>
      Total Cards:{" "}
      <span>
        <b>{props.total}</b>
      </span>
    </div>
  </div>
);
export default GlobalHeader;
