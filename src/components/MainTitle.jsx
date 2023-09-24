/* eslint-disable react/prop-types */
export default function MainTitle({ content }) {
  return (
    <h1 className="title main-title">
      <strong>{content.firstName}</strong>
      <strong>{content.lastName}</strong>
      {content.title ? <p>{content.title}</p> : ""}
    </h1>
  );
}
