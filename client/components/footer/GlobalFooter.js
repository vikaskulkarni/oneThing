import React from "react";

const styles = {
  fixedFooter: {
    color: "#FFFFFF",
    boxShadow: "2px 0px 5px 0px rgba(0, 0, 0, 0.5)",
    zIndex: 10,
    bottom: 20,
    right: 0,
    overflow: "hidden",
    background: "#337ab7",
    position: "fixed",
    margin: "0px 10px 0px 75px",
    padding: "5px 10px",
    opacity: 0.8,
    borderTopLeftRadius: "5px",
    borderTopRightRadius: "5px",
  },
};

const GlobalFooter = () => (
  <div style={styles.fixedFooter}>
    <div style={{ textAlign: "right" }}>
      <strong>©2020.</strong> All rights reserved
      <i className="fa fa-envelope" style={{ marginLeft: "10px" }}></i>
      <span style={{ marginLeft: "2px" }}>kulkarni.vikasdk@gmail.com</span>
    </div>
    <div>
      <b>I AGREE THAT, </b>
      <span>
        WHILE ADDING A NOTE, the opinions expressed solely belong to me, and the
        website or its owner holds no responsibility. I will be respectful to
        others about my opinions. I understand that offensive content will be
        immediately taken off.{" "}
        <small style={{ float: "right" }}>
          Icons made by{" "}
          <a
            style={{ color: "#FFF" }}
            href="https://www.flaticon.com/authors/freepik"
            title="Freepik"
          >
            Freepik
          </a>{" "}
          from{" "}
          <a
            style={{ color: "#FFF" }}
            href="https://www.flaticon.com/"
            title="Flaticon"
          >
            {" "}
            www.flaticon.com
          </a>
        </small>
      </span>
    </div>
  </div>
);
export default GlobalFooter;
