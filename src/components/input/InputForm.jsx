/* eslint-disable react/prop-types */
export default function InputForm({
  person,
  setPerson,
  title,
  propName,
  fields,
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
        },
      ],
    });
  };

  if (person[propName]) {
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
        setPerson({...person, [propName]: person[propName].filter(i => i.id != id)});
      }

      inputBlocks = person[propName].map((block) => {
        const items = Object.keys(block)
          .filter((key) => fields.includes(key))
          .map((key) => (
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
          ));
        return <div key={block.id + "_block"}>
          {items}
          <button data-id={block.id} onClick={removeHandler}>X</button>
        </div>;
      });
    } else {
      // Type object
      inputBlocks = Object.keys(person[propName])
        .filter((key) => fields.includes(key))
        .map((key) => <h1 key={key + "-title"}>{key}</h1>);
    }
    return (
      <form className="input-field">
        <legend>{title}</legend>
        <button onClick={() => {setPerson({...person, [propName]:undefined})}}>Remove {title}</button>
        {inputBlocks}
        <button onClick={clickHandler}>Add Entry</button>
      </form>
    );
  } else {
    return (
      <button onClick={() => setPerson({ ...person, [propName]: [] })}>
        Add {title}
      </button>
    );
  }
}
