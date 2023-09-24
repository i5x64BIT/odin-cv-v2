import { useState } from "react";
import "./App.css";
import Page from "./components/Page";
import ContactForm from "./components/input/ContactForm";
import preset from './preset.json';
import InformationForm from "./components/input/InformationForm";
import EducationForm from "./components/input/EducationForm";
import SkillForm from "./components/input/SkillForm";


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
        <EducationForm person={person} setPerson={setPerson} />
      </div>
      <Page person={person} />
    </>
  );
}

export default App;
