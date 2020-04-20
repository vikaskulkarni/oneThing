import React, { Component } from "react";
import {
  NoteListWrapper,
  NoteWrapper,
  Note,
  ActionButtons,
  Duration,
  Pin,
  Sign,
} from "./styles";
import moment from "moment/moment";

class StickyNotes extends Component {
  getNoteWrapper = (option, index) => {
    const { options } = this.props;
    const nonEnglishChars = /[^\x00-\x7F]+/;
    const emojiRegx = /([0-9A-Za-z'\&\-\.\/\(\)=:;]+)|((?::|;|=)(?:-)?(?:\)|D|P))/;

    return (
      <NoteWrapper key={`note_${index}`}>
        <Note rotate={index % 2 === 0 ? -2 : 4}>
          <Pin />
          <h5
            style={{
              fontFamily: "'Trebuchet MS', Helvetica, sans-serif",
              color: "#173e43",
              textAlign: "left",
              marginLeft: "30px",
            }}
          >
            1 Thing I Learnt
          </h5>
          {/* <Sign>
            {(!option.uniqueName || option.uniqueName === "NA") &&
              `- Anonymous`}

            {option.uniqueName &&
              option.uniqueName !== "NA" &&
              nonEnglishChars.test(option.uniqueName) && (
                <span style={{ fontSize: "18px" }}>- {option.uniqueName}</span>
              )}

            {option.uniqueName &&
              option.uniqueName !== "NA" &&
              !nonEnglishChars.test(option.uniqueName) && (
                <span>- {option.uniqueName}</span>
              )}
          </Sign> */}
          <Sign>
            {(!option.uniqueName || option.uniqueName === "NA") &&
              `- Anonymous`}

            {option.uniqueName && option.uniqueName !== "NA" && (
              <span>- {option.uniqueName}</span>
            )}
          </Sign>

          {/* {nonEnglishChars.test(option.oneThingBefore) && (
            <p style={{ fontSize: "18px" }}>{option.oneThingBefore}</p>
          )} */}
          {<p>{option.oneThingBefore}</p>}
          <div style={{ padding: "0 50px" }}>
            <hr style={{ borderTop: "1px solid #d9d9d9" }} />
          </div>
          <h5
            style={{
              fontFamily: "'Trebuchet MS', Helvetica, sans-serif",
              color: "#173e43",
              textAlign: "left",
              marginLeft: "30px",
            }}
          >
            1 Thing I will follow
          </h5>
          {/* {nonEnglishChars.test(option.oneThingAfter) && (
            <p style={{ fontSize: "18px" }}>{option.oneThingAfter}</p>
          )} */}
          {<p>{option.oneThingAfter}</p>}
          <Duration>
            <small>{moment(option.createdAt).fromNow()}</small>
          </Duration>
          {/* <ActionButtons>
            <a
              onClick={() =>
                this.props.deleteOption(option.toJS(), index)
              }
              className="pull-right"
            >
              <i className="fa fa-trash-o"></i>
            </a>
            <a
              onClick={() => this.props.editOption(option, index)}
              style={{ marginRight: "1vw" }}
              className="pull-right"
            >
              <i className="fa fa-pencil"></i>
            </a>
          </ActionButtons> */}
        </Note>
      </NoteWrapper>
    );
  };

  render() {
    const { options } = this.props;
    let notes = (options && options.toJS()) || [];
    notes = notes.sort((a, b) => b.createdAt - a.createdAt);
    return (
      <NoteListWrapper>
        {notes.length > 0 &&
          notes.map((option, index) => {
            return this.getNoteWrapper(option, index);
          })}
      </NoteListWrapper>
    );
  }
}
export default StickyNotes;
