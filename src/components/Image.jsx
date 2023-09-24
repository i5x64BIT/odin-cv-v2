/* eslint-disable react/prop-types */
export default function Image({ url }) {
  return <img src={url || "public/profile.svg"} className="profile"/>;
}
