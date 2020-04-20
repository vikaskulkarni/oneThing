import styled from "styled-components";

export const NoteListWrapper = styled.ul`
  margin-left: 25px;
`;

export const NoteWrapper = styled.li`
  float: left;
  list-style: none;
`;

export const ActionButtons = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
`;

export const Sign = styled.span`
  position: absolute;
  top: 0;
  right: 3px;
`;

export const Duration = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  font-family: "Orbitron";
  font-size: 18px;
  padding: 5px;
`;

export const Pin = styled.div`
  position: absolute;
  margin-left: 10px;
  width: 18px;
  height: 18px;
  background-color: #00a300;
  border: 1px solid rgb(48, 49, 51);
  border-radius: 50%;
  box-shadow: inset 0 0 0 2px #ffff88, 0 0 0 4px #ffff88;
`;

export const Divider = styled.div`
  position: relative;
  margin-top: 90px;
  height: 1px;
  content: "";
  position: absolute;
  top: 0;
  left: 5%;
  right: 5%;
  width: 90%;
  height: 1px;
  background-image: linear-gradient(
    to right,
    transparent,
    rgb(48, 49, 51),
    transparent
  );
  content: "";
  position: absolute;
  z-index: 1;
  top: -6px;
  left: calc(50% - 7px);
  width: 14px;
  height: 12px;
  background-color: white;
  border-left: 1px solid rgb(48, 49, 51);
  border-right: 1px solid rgb(48, 49, 51);
`;

export const Note = styled.div`
  color: #337ab7;
  line-height: 1;
  text-align: center;
  width: 365px;
  margin: 10px;
  min-height: 355px;
  max-height: 355px;
  padding-top: 10px;
  position: relative;
  border: 1px solid #e8e8e8;
  font-family: "Reenie Beanie";
  font-size: 25px;
  border-bottom-right-radius: 60px 5px;
  display: inline-block;
  background: #ffff88; /* Old browsers */
  background: -moz-linear-gradient(
    -45deg,
    #ffff88 81%,
    #ffff88 82%,
    #ffff88 82%,
    #ffffc6 100%
  ); /* FF3.6+ */
  background: -webkit-gradient(
    linear,
    left top,
    right bottom,
    color-stop(81%, #ffff88),
    color-stop(82%, #ffff88),
    color-stop(82%, #ffff88),
    color-stop(100%, #ffffc6)
  ); /* Chrome,Safari4+ */
  background: -webkit-linear-gradient(
    -45deg,
    #ffff88 81%,
    #ffff88 82%,
    #ffff88 82%,
    #ffffc6 100%
  ); /* Chrome10+,Safari5.1+ */
  background: -o-linear-gradient(
    -45deg,
    #ffff88 81%,
    #ffff88 82%,
    #ffff88 82%,
    #ffffc6 100%
  ); /* Opera 11.10+ */
  background: -ms-linear-gradient(
    -45deg,
    #ffff88 81%,
    #ffff88 82%,
    #ffff88 82%,
    #ffffc6 100%
  ); /* IE10+ */
  background: linear-gradient(
    135deg,
    #ffff88 81%,
    #ffff88 82%,
    #ffff88 82%,
    #ffffc6 100%
  ); /* W3C */

  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffff88', endColorstr='#ffffc6',GradientType=1 ); /* IE6-9 fallback on horizontal gradient */

  &:after {
    content: "";
    position: absolute;
    z-index: -1;
    right: -0px;
    bottom: 20px;
    width: 200px;
    height: 25px;
    background: rgba(0, 0, 0, 0.2);
    box-shadow: 5px 25px 5px rgba(0, 0, 0, 0.4);
    -moz-transform: matrix(-1, -0.1, 0, 1, 0, 0);
    -webkit-transform: matrix(-1, -0.1, 0, 1, 0, 0);
    -o-transform: matrix(-1, -0.1, 0, 1, 0, 0);
    -ms-transform: matrix(-1, -0.1, 0, 1, 0, 0);
    transform: matrix(-1, -0.1, 0, 1, 0, 0);
  }
`;
