import { useState } from "react";

/* eslint-disable react/prop-types */
export default function InputForm({
  person,
  setPerson,
  title,
  propName,
  fields,
  objectFields,
}) {
  // fields is an array of field names
  const clickHandler = (e) => {
    e.preventDefault();
    setPerson({
      // Add a new prop to person, generate an id for it and init each field to ""
      ...person,
      [propName]: [
        ...person[propName],
        {
          id: crypto.randomUUID(),
          ...fields.reduce((obj, f) => {
            return { ...obj, [f]: "" };
          }, {}),
          ...objectFields?.reduce((obj, f) => {
            return { ...obj, [f]: {} };
          }, {}),
        },
      ],
    });
  };

  const [isCollapsed, setCollapsed] = useState(true);

  if (person[propName]) {
    if (isCollapsed) {
      return <button onClick={() => setCollapsed(false)}>{title}</button>;
    }
    let inputBlocks;
    if (person[propName] instanceof Array) {
      const changeHandler = (e) => {
        const fieldChangedID = e.target.dataset.id.split("_")[0];
        const fieldChangedName = e.target.dataset.id.split("_")[1];
        setPerson({
          ...person,
          [propName]: person[propName].map((i) => {
            if (i.id == fieldChangedID) {
              return { ...i, [fieldChangedName]: e.target.value };
            } else {
              return i;
            }
          }),
        });
      };
      const removeHandler = (e) => {
        e.preventDefault();
        const id = e.target.dataset.id;
        setPerson({
          ...person,
          [propName]: person[propName].filter((i) => i.id != id),
        });
      };

      inputBlocks = person[propName].map((block) => {
        const items = Object.keys(block).map((key) => {
          if (fields.includes(key)) {
            return (
              <label key={block.id + "_" + key}>
                {key}
                <input
                  key={block.id + "_" + key + "_input"}
                  data-id={block.id + "_" + key + "_input"}
                  type="text"
                  value={block[key]}
                  onChange={changeHandler}
                />
              </label>
            );
          }
        });
        return (
          <div
            key={block.id + "_block"}
            className={`form-item ${propName}-item`}
          >
            <div className="form-inputs">{items}</div>
            <button
              data-id={block.id}
              onClick={removeHandler}
              className="danger btn-remove-entry"
            >
              X
            </button>
          </div>
        );
      });
    } else {
      //Nested objects, currently do nothing
    }
    return (
      <>
        <button className="section-collapse" onClick={() => setCollapsed(true)}>{title}</button>
        <div className="section-form">
          <form className="input-field">
            {inputBlocks}
            <div className="section-controls">
              <button
                onClick={() => {
                  setPerson({ ...person, [propName]: undefined });
                }}
                className="danger"
              >
                Remove {title}
              </button>
              <button onClick={clickHandler}>Add Entry</button>
            </div>
          </form>
        </div>
      </>
    );
  } else {
    return (
      <button
        onClick={() => {
          setPerson({ ...person, [propName]: [] });
          setCollapsed(false);
        }}
      >
        Add {title}
      </button>
    );
  }
}
