/* eslint-disable */
/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from "react";
import { API, Auth } from "aws-amplify";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import Dialog from "../../components/Dialog";

import {
  getIP,
  getNoteGroups,
  // editNoteGroup,
  // deleteNoteGroup,
  addNoteGroup,
} from "./actions";

import {
  selectIP,
  selectGetIPStatus,
  selectNoteGroups,
  selectNoteGroupModel,
  selectGetNoteGroupStatus,
  selectAddNoteGroupStatus,
  // selectEditNoteGroupStatus,
  // selectDeleteNoteGroupStatus,
} from "./selectors";

import Home from "../../components/Home";
import Loader from "../../components/Loader";

export class HomeContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      noUserToken: true,
      modalDisplay: true,
    };
  }

  async componentWillMount() {
    this.setState({ noUserToken: false });
    this.props.onGetNoteGroups();
    this.props.onGetIP();
  }

  render() {
    const styles = {
      content: {
        color: "#FFFFFF",
        fontSize: "20px",
      },
    };

    const {
      getIPStatus,
      getNoteGroupsStatus,
      addNoteGroupStatus,
      // editNoteGroupStatus,
      // deleteNoteGroupStatus,
    } = this.props;

    const getNoteGroupLoading = getNoteGroupsStatus.get("loading");
    const getIPLoading = getIPStatus.get("loading");
    const addNoteGroupAdding = addNoteGroupStatus.get("adding");
    // const editNoteGroupEditing = editNoteGroupStatus.get("editing");
    // const deleteNoteGroupDeleting = deleteNoteGroupStatus.get("deleting");

    if (this.state.modalDisplay) {
      return (
        <Dialog
          open={this.state.modalDisplay}
          closeDialog={() => this.setState({ modalDisplay: false })}
        >
          <div style={styles.content}>
            Oh Hello Internet!
            <br />
            Hope you guys are Safe and Secure behind the closed doors of your
            homes &#128531;
            <p>
              I got this idea of capturing what different people may have
              learnt/taught during this COVID-19 crisis and the dreadful
              L.O.C.K.D.O.W.N. &#129299;
            </p>
            <p>
              This website is just for fun and you are welcome to share your
              opinions.
              <br />
              Please be considerate and make sure your opinions does not hurt
              anybody’s sentiments. &#128567;
              <br />
              And Please don’t take out your frustration on this website
              &#129312;
            </p>
            <p>Click X and its all yours!</p>
          </div>

          {/* <div>
            Oh Hello Internet! Hope you guys are Safe and Secure behind closed
            doors of your homes :) I got this idea of capturing what different
            people may have learnt/taught during this COVID-19 crisis,
            especially the dreadful L.O.C.K.D.O.W.N. Its just for fun and you
            are welcome to share your opinions. Please be considerate and make
            sure your opinions does not hurt anybody’s sentiments. And Please
            don’t take out your frustration on this website :) Now its all
            yours!
          </div> */}
        </Dialog>
      );
    }

    if (
      this.state.noUserToken ||
      getIPLoading ||
      getNoteGroupLoading ||
      addNoteGroupAdding
      // editNoteGroupEditing ||
      // deleteNoteGroupDeleting
    )
      return <Loader />;
    return (
      <div>
        <Home
          groups={this.props.noteGroups}
          ip={this.props.ip}
          addGroup={this.props.onAddNoteGroup}
          // editGroup={this.props.onEditNoteGroup}
          // deleteGroup={this.props.onDeleteNoteGroup}
          // changeRoute={this.props.onChangeRoute}
        />
      </div>
    );
  }
}

HomeContainer.propTypes = {};

function mapDispatchToProps(dispatch) {
  return {
    onGetIP: () => dispatch(getIP()),
    onGetNoteGroups: () => dispatch(getNoteGroups()),
    onAddNoteGroup: (group) => dispatch(addNoteGroup(group)),
    // onEditNoteGroup: (group, noteId, index) =>
    //   dispatch(editNoteGroup(group, noteId, index)),
    // onDeleteNoteGroup: (slug, index) => dispatch(deleteNoteGroup(slug, index)),
    // onChangeRoute: (route) => dispatch(browserHistory.push(route)),
    // dispatch,
  };
}

const mapStateToProps = createStructuredSelector({
  ip: selectIP(),
  noteGroups: selectNoteGroups(),
  noteGroupModel: selectNoteGroupModel(),
  getIPStatus: selectGetIPStatus(),
  getNoteGroupsStatus: selectGetNoteGroupStatus(),
  addNoteGroupStatus: selectAddNoteGroupStatus(),
  // editNoteGroupStatus: selectEditNoteGroupStatus(),
  // deleteNoteGroupStatus: selectDeleteNoteGroupStatus(),
});

// Wrap the component to inject dispatch and state into it
export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
