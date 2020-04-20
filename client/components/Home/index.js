import React, { Component } from "react";
import Dialog from "../Dialog";
import StickyNotes from "../StickyNotes";
import filter from "../../utils/filterWords";
import GlobalFooter from "../../components/footer/GlobalFooter";
import GlobalHeader from "../../components/header/GlobalHeader";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      oneThingBefore: "",
      oneThingAfter: "",
      uniqueName: "",
      selectedGroup: null,
      openAddDialog: false,
      openEditDialog: false,
      group: {
        oneThingBefore: "",
        oneThingAfter: "",
        uniqueName: "",
      },
    };
  }

  addGroup = () => {
    const { oneThingBefore, oneThingAfter, uniqueName } = this.state;
    const ip = this.props.ip.get("data").toJS();
    const location = ip.region + ip.latitude + ip.longitude + ip.postal;
    this.props.addGroup({
      oneThingBefore,
      oneThingAfter,
      uniqueName,
      location,
    });
    this.setState({
      oneThingBefore: "",
      oneThingAfter: "",
      uniqueName: "",
      openAddDialog: false,
    });
  };

  editGroup = () => {
    const { group, selectedGroup } = this.state;
    const { state } = this;
    this.props.editGroup(
      {
        oneThingBefore: group.oneThingBefore,
        oneThingAfter: group.oneThingAfter,
        uniqueName: group.uniqueName,
      },
      group.noteId,
      selectedGroup
    );
    this.setState({
      ...state,
      group: { oneThingBefore: "", oneThingAfter: "", uniqueName: "" },
      openEditDialog: false,
    });
  };

  editOption = (group, selectedGroup) => {
    this.setState({
      openEditDialog: true,
      group: group.toJS(),
      selectedGroup,
    });
  };

  render() {
    const { groups } = this.props;
    const { state } = this;
    const {
      oneThingBefore,
      oneThingAfter,
      uniqueName,
      openAddDialog,
      // openEditDialog,
      // group,
    } = this.state;

    const styles = {
      btnCircle: {
        width: "60px",
        height: "60px",
        textAlign: "center",
        padding: "6px 0",
        fontSize: "14px",
        fontWeight: "700",
        lineHeight: "1.42",
        margin: "10px",
        border: "none",
        outline: "none",
        color: "#FFFFFF",
        // backgroundColor: "transparent"
      },
      reSz: {
        resize: "none",
        margin: "1vh 0",
        background: "transparent",
        color: "ghostwhite",
      },
    };

    return (
      <div>
        <GlobalHeader total={groups.size} />
        <div className="container-fluid" style={{ marginBottom: "75px" }}>
          <div className="row">
            <div style={{ position: "fixed" }}>
              <button
                title="Add a Learning"
                style={styles.btnCircle}
                className="btn btn-primary btn-lg"
                onClick={() => this.setState({ openAddDialog: true })}
              >
                <i className="fa fa-plus fa-3x"></i>
              </button>
              <br></br>
              <a
                href="https://vikas-profile.net/"
                target="_blank"
                style={styles.btnCircle}
                className="btn btn-primary btn-lg"
                title="About Me"
              >
                <i className="fa fa-address-card fa-3x"></i>
              </a>
            </div>
            <Dialog
              open={openAddDialog}
              closeDialog={() => this.setState({ openAddDialog: false })}
            >
              <div className="container-fluid">
                <div className="col-xs-12">
                  <label style={{ color: "#fff" }}>
                    One Thing I learnt DURING COVID-19
                  </label>
                  <textarea
                    value={oneThingBefore}
                    placeholder="What Did I Learn? ..."
                    rows="2"
                    cols="30"
                    maxLength="100"
                    style={styles.reSz}
                    className="form-control"
                    onKeyDown={(e) => {
                      if (e.keyCode === 32) {
                        this.setState({
                          oneThingBefore: filter.clean(e.target.value),
                        });
                      }
                    }}
                    onBlur={(e) => {
                      this.setState({
                        oneThingBefore: filter.clean(e.target.value),
                      });
                    }}
                    onChange={(e) =>
                      this.setState({
                        oneThingBefore: e.target.value,
                      })
                    }
                  />
                  <p
                    style={{
                      float: "right",
                      color: "#d9d9d9",
                      fontSize: "12px",
                    }}
                  >
                    {100 - this.state.oneThingBefore.length} Characters Left
                  </p>
                </div>
                <div className="col-xs-12">
                  <label style={{ color: "#fff" }}>
                    One Thing I will (try to) follow AFTER COVID-19
                  </label>
                  <textarea
                    value={oneThingAfter}
                    placeholder="What Will I Follow? ..."
                    rows="2"
                    cols="30"
                    maxLength="100"
                    style={styles.reSz}
                    className="form-control"
                    onKeyDown={(e) => {
                      if (e.keyCode === 32) {
                        this.setState({
                          oneThingAfter: filter.clean(e.target.value),
                        });
                      }
                    }}
                    onBlur={(e) => {
                      this.setState({
                        oneThingAfter: filter.clean(e.target.value),
                      });
                    }}
                    onChange={(e) =>
                      this.setState({
                        oneThingAfter: e.target.value,
                      })
                    }
                  />
                  <p
                    style={{
                      float: "right",
                      color: "#d9d9d9",
                      fontSize: "12px",
                    }}
                  >
                    {100 - this.state.oneThingAfter.length} Characters Left
                  </p>
                </div>
                <div className="col-xs-12">
                  <label
                    style={{
                      color: "#d9d9d9",
                    }}
                  >
                    Name
                  </label>
                  <input
                    maxLength="10"
                    value={uniqueName}
                    type="text"
                    style={styles.reSz}
                    className="form-control"
                    placeholder="OPTIONAL"
                    onKeyDown={(e) => {
                      if (e.keyCode === 32) {
                        this.setState({
                          uniqueName: filter.clean(e.target.value),
                        });
                      }
                    }}
                    onBlur={(e) => {
                      this.setState({
                        uniqueName: filter.clean(e.target.value),
                      });
                    }}
                    onChange={(e) =>
                      this.setState({
                        uniqueName: e.target.value,
                      })
                    }
                  />
                  <p
                    style={{
                      float: "right",
                      color: "#d9d9d9",
                      fontSize: "12px",
                    }}
                  >
                    {10 - this.state.uniqueName.length} Characters Left
                  </p>
                </div>

                <div className="col-xs-12">
                  <div
                    className="delete-button"
                    onClick={() => {
                      if (
                        window.confirm(
                          "Are you sure you wish to delete this item?"
                        )
                      )
                        this.onCancel(item);
                    }}
                  />
                  <input
                    type="button"
                    disabled={
                      !(oneThingBefore !== "" && oneThingAfter !== "") &&
                      "disabled"
                    }
                    value="Add My Learning"
                    className="btn btn-primary btn-lg"
                    onClick={() => {
                      if (
                        window.confirm(
                          "Are you sure? You won't be able to EDIT or DELETE later?"
                        )
                      )
                        this.addGroup();
                    }}
                  />
                </div>
              </div>
            </Dialog>
            {
              <StickyNotes
                options={groups}
                // editOption={this.editOption}
                // deleteOption={this.props.deleteGroup}
              />
            }
          </div>
        </div>
        <GlobalFooter />
      </div>
    );
  }
}
export default Home;
