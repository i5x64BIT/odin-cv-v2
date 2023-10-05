import profileIcon from "../icons/profile.svg";
/* eslint-disable react/prop-types */
export default function Image({ url }) {
  return <img src={url || profileIcon} className="profile"/>;
}
