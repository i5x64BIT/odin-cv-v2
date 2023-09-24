export default function ListItem({ type, content }) {
  let liContent;
  if (type === "contact") {
    liContent = [content];
  } else if (type === "experience") {
    liContent = [
      <div className="experience-header">
        <p>{content.position}</p>
        <strong>
          {content.from} - {content.to || "present"}
        </strong>
      </div>,
      <strong>
        {content.company} | {content.location}
      </strong>,
      <p>{content.description || ""}</p>,
    ];
  } else if (type === "education") {
    liContent = [
      <h2>{content.emphasis}</h2>,
      <h3>{content.location}</h3>,
      <p>{content.from + (" - " + content.to) || ""}</p>, // from - to
    ];
  } else if (type === "reference") {
    const contactItems = [];
    for (let c in content.contact) {
      contactItems.push(
        <div className="reference-contact-item">
          <strong>{c.slice(0,1).toUpperCase() + c.slice(1).toLowerCase()}:</strong>
          <span>{content.contact[c]}</span>
        </div>
      );
    }
    liContent = [
      <h2>{content.fullName}</h2>,
      <p>
        {content.location} / {content.title}
      </p>,
      <div className="reference-contact">{...contactItems}</div>,
    ];
  } else {
    liContent = [content];
  }
  return <li className={type + "-item"}>{...liContent}</li>;
}
