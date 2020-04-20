/* eslint-disable */

import { createSelector } from "reselect";
const selectHomeState = () => (state) => state.home;

const selectIP = () =>
  createSelector(selectHomeState(), (homeState) => homeState.get("ip"));

const selectNoteGroups = () =>
  createSelector(selectHomeState(), (homeState) => homeState.get("noteGroups"));

const selectNoteGroupModel = () =>
  createSelector(selectHomeState(), (homeState) =>
    homeState.get("noteGroupModel")
  );

const selectGetIPStatus = () =>
  createSelector(selectHomeState(), (homeState) =>
    homeState.get("getIPStatus")
  );

const selectGetNoteGroupStatus = () =>
  createSelector(selectHomeState(), (homeState) =>
    homeState.get("getNoteGroupsStatus")
  );

const selectAddNoteGroupStatus = () =>
  createSelector(selectHomeState(), (homeState) =>
    homeState.get("addNoteGroupStatus")
  );

const selectEditNoteGroupStatus = () =>
  createSelector(selectHomeState(), (homeState) =>
    homeState.get("editNoteGroupStatus")
  );

const selectDeleteNoteGroupStatus = () =>
  createSelector(selectHomeState(), (homeState) =>
    homeState.get("deleteNoteGroupStatus")
  );

export {
  selectNoteGroups,
  selectIP,
  selectGetIPStatus,
  selectNoteGroupModel,
  selectGetNoteGroupStatus,
  selectAddNoteGroupStatus,
  selectEditNoteGroupStatus,
  selectDeleteNoteGroupStatus,
};
