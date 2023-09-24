import EducationItem from "./EducationItem";

export default function EducationForm({ person, setPerson }) {
  const removeHandler = (e) => {
    e.preventDefault();
    setPerson({
      ...person,
      education: person.education.filter((i) => i.id != e.target.dataset.id),
    });
  };
  const handler = (e) => {
    const edElement = person.education.find(
      (i) => i.id == e.target.dataset.id
    );
    switch (e.target.dataset.prop) {
      case "emphasis":
        edElement.emphasis = e.target.value;
        break;
      case "location":
        edElement.location = e.target.value;
        break;
      case "from":
        edElement.from = e.target.value;
        break;
      case "to":
        edElement.to = e.target.value;
        break;
    }
    setPerson({ ...person, edElement});
  };
  const addHandler = (e) => {
    e.preventDefault();
    setPerson({
      ...person,
      education: [...person.education, { id: crypto.randomUUID() }],
    });
  };

  let educationItems = [];
  if (person.education) {
    person.education.forEach((i) =>
      educationItems.push(
        <EducationItem
          content={i}
          handler={handler}
          removeHandler={removeHandler}
        />
      )
    );
    return (
      <form className="education-form">
        <legend>Education</legend>
        {...educationItems}
        <button onClick={addHandler}>Add</button>
      </form>
    );
  } else {
    return (
      <button onClick={() => setPerson({ ...person, education: [] })}>
        Add Education
      </button>
    );
  }
}
