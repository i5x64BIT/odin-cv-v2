/* eslint-disable react/prop-types */
export default function Heading({ type }) {
  const title = type.toUpperCase();

  if (type === "experience" || type === "reference") {
    return (
      <div className={`heading ${type}-heading`}>
        <h2>{title}</h2>
        <hr />
      </div>
    );
  } else {
    return <h2 className={`heading ${type}-heading button-heading`}>{title}</h2>;
  }
}
