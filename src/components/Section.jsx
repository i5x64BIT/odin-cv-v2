import MainTitle from "./MainTitle";
import Heading from "./Heading";
import List from "./List";

/* eslint-disable react/prop-types */
export function Section({ type, content }) {
  let sectionContent;
  if (type === "main-title") {
    sectionContent = [<MainTitle key={`${type}-title`} content={content} />];
  } else {
    if (
      // Check for un-required properties
      content[type]
    ) {
      sectionContent = [
        <Heading key={`${type}-title`} type={type} />,
        <List key={`${type}-list`} type={type} items={content[type]} />,
      ];
    }
  }
  return <section className={type}>{sectionContent}</section>;
}
