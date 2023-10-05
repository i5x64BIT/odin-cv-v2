/* eslint-disable react/prop-types */
import Image from "./Image";
import { Section } from "./Section";

export default function Panel({ type, content }) {
  let panelContent;
  if (type === "side") {
    panelContent = [
      <Image key="profile-image" url={content.url} />,
      <Section key="contact-section" content={content} type={"contact"} />,
      <Section key="education-section" content={content} type={"education"} />,
      <Section key="skills-section" content={content} type={"skills"} />,
    ];
  } else {
    panelContent = [
      <Section
        key="main-title-section"
        content={content.information}
        type={"main-title"}
      />,
      <Section
        key="experience-section"
        content={content}
        type={"experience"}
      />,
      <Section key="reference-section" content={content} type={"reference"} />,
    ];
  }
  return <div className={`panel ${type}-panel`}>
    {panelContent}
    </div>;
}
