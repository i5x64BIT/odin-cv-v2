/* eslint-disable react/prop-types */
export default function EducationItem({ content, handler, removeHandler }) {
  return (
    <div className="education-item">
      <label>
        Emphasis
        <input
          type="text"
          data-prop="emphasis"
          data-id={content.id}
          placeholder="Computer Science"
          onChange={handler}
          value={content.emphasis}
        />
      </label>
      <label>
        Location
        <input
          type="text"
          data-prop="location"
          data-id={content.id}
          placeholder="MIT"
          onChange={handler}
          value={content.location}
        />
      </label>
      <label>
        From
        <input
          type="number"
          data-prop="from"
          data-id={content.id}
          placeholder="1992"
          onChange={handler}
          value={content.from}
        />
      </label>
      <label>
        To
        <input
          type="number"
          data-prop="to"
          data-id={content.id}
          placeholder="2019"
          onChange={handler}
          value={content.to}
        />
      </label>
      <button onClick={removeHandler} data-id={content.id}>
        Remove
      </button>
    </div>
  );
}
