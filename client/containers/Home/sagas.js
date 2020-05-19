/* eslint-disable */

import { takeLatest } from "redux-saga";
import { call, put, fork } from "redux-saga/effects";
import request from "../../utils/request";
import { API, Auth } from "aws-amplify";
import { selectIP } from "./selectors";

const IP_LOOKUP = "https://ipapi.co/json/";

import {
  GET_IP,
  GET_NOTE_GROUPS,
  ADD_NOTE_GROUP,
  EDIT_NOTE_GROUP,
  DELETE_NOTE_GROUP,
} from "./constants";

import {
  getIPSuccess,
  getIPFail,
  getNoteGroupsSuccess,
  getNoteGroupsFail,
  addNoteGroupSuccess,
  addNoteGroupFail,
  editNoteGroupSuccess,
  editNoteGroupFail,
  deleteNoteGroupSuccess,
  deleteNoteGroupFail,
} from "./actions";

const notes = [
  {
    oneThingAfter: "asdj asdkj askdjn asd",
    createdAt: 1587239862176,
    lastUpdated: "now",
    noteId: "dd169a00-81ae-11ea-b5c0-cd249ac512d1",
    oneThingBefore: "dkjh dsfkjb sdfkjbsdf dsfkjhdskjfh",
    uniqueName: "ew22",
  },
  {
    oneThingAfter: "jhg",
    lastUpdated: "now",
    location: "UT40.6596-111.919584123",
    noteId: "bfa84820-81b2-11ea-b799-f11afd8a113c",
    oneThingBefore: "lkjlkgfjh asjhdgtyfe slkdjlk askjhkhasd",
    createdAt: 1587241530786,
    uniqueName: "",
  },
  {
    oneThingAfter: "jhg",
    lastUpdated: "now",
    location: "UT40.6596-111.919584123",
    noteId: "bfa84820-81b2-11ea-b799-f11afd8a113c",
    oneThingBefore: "poiweoiu 832746 jfgbr32iu fe",
    createdAt: 1587241530786,
    uniqueName: "",
  },
  {
    oneThingAfter: "jhg",
    lastUpdated: "now",
    location: "UT40.6596-111.919584123",
    noteId: "bfa84820-81b2-11ea-b799-f11afd8a113c",
    oneThingBefore: "skdjghf wuyetwqu smnvbmcxvb ewuyrtuyewtr",
    createdAt: 1587241530786,
    uniqueName: "",
  },
  {
    oneThingAfter: "jhg",
    lastUpdated: "now",
    location: "UT40.6596-111.919584123",
    noteId: "bfa84820-81b2-11ea-b799-f11afd8a113c",
    oneThingBefore: "dfkjgh dv,mnmiuer uydfguywer",
    createdAt: 1587241530786,
    uniqueName: "",
  },
];

export function* getNoteGroups() {
  try {
    const notes = yield API.get("notes19", "/notes19");
    yield put(getNoteGroupsSuccess(notes || []));
  } catch (e) {
    yield put(getNoteGroupsFail(groups.err));
  }
}

export function* getIP() {
  try {
    const ip = yield call(request, IP_LOOKUP);
    yield put(getIPSuccess(ip || ""));
  } catch (err) {
    yield put(getIPFail(ip.err));
  }
}

export function* addNoteGroup(action) {
  const group = yield API.post("notes19", "/notes19", {
    body: {
      lastUpdated: "now",
      oneThingBefore: action.group.oneThingBefore,
      oneThingAfter: action.group.oneThingAfter,
      uniqueName: action.group.uniqueName,
      location: action.group.location,
    },
  });

  if (group) {
    yield put(addNoteGroupSuccess(group));
  } else {
    yield put(addNoteGroupFail("ERROR"));
  }
}

export function* editNoteGroup(action) {
  const group = yield API.put("notes19", `/notes19/${action.noteId}`, {
    body: {
      lastUpdated: "now",
      oneThingBefore: action.group.oneThingBefore,
      oneThingAfter: action.group.oneThingAfter,
      uniqueName: action.group.uniqueName,
    },
  });

  if (group.status) {
    yield put(editNoteGroupSuccess(action.group, action.index));
  } else {
    yield put(editNoteGroupFail("ERROR!"));
  }
}

export function* deleteNoteGroup(action) {
  console.log();
  const group = yield API.del("notes19", `/notes19/${action.group.noteId}`);

  if (group.status) {
    yield put(deleteNoteGroupSuccess(action.index));
  } else {
    yield put(deleteNoteGroupFail("ERROR!"));
  }
}

/**
 * Watches for LOAD_REPOS actions and calls getRepos when one comes in.
 * By using `takeLatest` only the result of the latest API call is applied.
 */
export function* homeSagas() {
  yield fork(takeLatest, GET_NOTE_GROUPS, getNoteGroups);
  yield fork(takeLatest, GET_IP, getIP);
  yield fork(takeLatest, ADD_NOTE_GROUP, addNoteGroup);
  yield fork(takeLatest, EDIT_NOTE_GROUP, editNoteGroup);
  yield fork(takeLatest, DELETE_NOTE_GROUP, deleteNoteGroup);
}

// Bootstrap sagas
export default homeSagas;
