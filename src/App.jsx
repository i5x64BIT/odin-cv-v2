import { useState } from "react";
import "./App.css";
import Page from "./components/Page";
import ContactForm from "./components/input/ContactForm";
import preset from "./preset.json";
import InformationForm from "./components/input/InformationForm";
import InputForm from "./components/input/InputForm";

function App() {
  const ref = {
    information: {
      firstName: "",
      lastName: "",
    },
    contact: {
      phone: "",
      email: "",
      website: "",
      address: "",
    },
  };
  const [person, setPerson] = useState(ref);
  return (
    <>
      <div className="controls">
        <button onClick={() => setPerson(preset)}>Load Preset</button>
      </div>
      <div className="forms">
        <InformationForm person={person} setPerson={setPerson} />
        <ContactForm person={person} setPerson={setPerson} />
        <InputForm
          person={person}
          setPerson={setPerson}
          title="Education"
          propName="education"
          fields={["emphasis", "from", "to", "description"]}
        />
        <InputForm
          person={person}
          setPerson={setPerson}
          title={"Experience"}
          propName={"experience"}
          fields={[
            "position",
            "company",
            "location",
            "description",
            "from",
            "to",
          ]}
        />
        <InputForm
          person={person}
          setPerson={setPerson}
          title="Skills"
          propName={"skills"}
          fields={["value"]}
        />
        <InputForm
          person={person}
          setPerson={setPerson}
          title="References"
          propName={"reference"}
          fields={["fullName", 'location', 'title', 'contact']}
        />
      </div>
      <Page person={person} />
    </>
  );
}

export default App;
