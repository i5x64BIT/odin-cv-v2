/* eslint-disable react/prop-types */
import Panel from "./Panel";
export default function Page({ person }) {
  return (
    <div className="page">
      <Panel content={person} type="side" />
      <Panel content={person} type="main" />
    </div>
  );
}