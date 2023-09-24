export default function InformationForm({ person, setPerson }) {
  let information = {};
  person.information && (information = { ...person.information });
  const handler = (e) => {
    switch (e.target.attributes.prop.value) {
      case "first":
        information.firstName = e.target.value;
        break;
      case "last":
        information.lastName = e.target.value;
        break;
      case "title":
        information.title = e.target.value;
        break;
    }
    setPerson({ ...person, information });
  };
  return (
    <form className="information-form">
      <legend>Information</legend>
      <label>
        First Name
        <input
          type="text"
          prop="first"
          placeholder="John"
          onChange={handler}
          value={person.information.firstName}
        />
      </label>
      <label>
        Last Name
        <input
          type="text"
          prop="last"
          placeholder="Doe"
          onChange={handler}
          value={person.information.lastName}
        />
      </label>
      <label>
        Website
        <input
          type="text"
          prop="title"
          placeholder="Marketing Manager"
          onChange={handler}
          value={person.information.title}
        />
      </label>
    </form>
  );
}
