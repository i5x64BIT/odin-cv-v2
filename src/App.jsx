import { useEffect, useState } from "react";
import "./App.css";
import Page from "./components/Page";
import ContactForm from "./components/input/ContactForm";
import preset from "./preset.json";
import InformationForm from "./components/input/InformationForm";
import InputForm from "./components/input/InputForm";
import burgerIcon from './icons/burger.svg';

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

  const mobileMode = window.innerWidth < 450;
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    // Set menu position after render
    if (mobileMode) {
      const menu = document.querySelector(".forms");
      menu.style.transform = menuOpen ? "translateX(0)" : "translateX(-100%)";
    }
  }, [menuOpen]);
  return (
    <>
      {mobileMode ? (
        <button
          className="btn-burger"
          onClick={() => {
            setMenuOpen(!menuOpen);
          }}
        >
          <img src={burgerIcon} alt="" />
        </button>
      ) : (
        ""
      )}
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
          fields={["fullName", "location", "title"]}
          objectFields={["contact"]}
        />
      </div>
      <Page person={person} />
    </>
  );
}

export default App;
