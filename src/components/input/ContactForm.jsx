/* eslint-disable react/prop-types */
export default function ContactForm({ person, setPerson }) {
  let contact = {};
  person.contact && (contact = { ...person.contact });
  const contactHandler = (e) => {
    switch (e.target.attributes.prop.value) {
      case "phone":
        contact.phone = e.target.value;
        break;
      case "email":
        contact.email = e.target.value;
        break;
      case "website":
        contact.website = e.target.value;
        break;
      case "address":
        contact.address = e.target.value;
        break;
    }
    setPerson({ ...person, contact });
  };
  return (
    <form className="contact-form">
      <legend>Contact</legend>
      <label>
        Phone Number
        <input
          type="text"
          prop="phone"
          placeholder="+97212345678"
          onChange={contactHandler}
          value={person.contact.phone}
        />
      </label>
      <label>
        Email
        <input
          type="text"
          prop="email"
          placeholder="name@example.com"
          onChange={contactHandler}
          value={person.contact.email}
        />
      </label>
      <label>
        Website
        <input
          type="text"
          prop="website"
          placeholder="www.website.com"
          onChange={contactHandler}
          value={person.contact.website}
        />
      </label>
      <label>
        Location
        <input
          type="text"
          prop="address"
          placeholder="Silicone Valley, California, USA"
          onChange={contactHandler}
          value={person.contact.address}
        />
      </label>
    </form>
  );
}
