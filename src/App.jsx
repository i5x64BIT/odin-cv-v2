import "./App.css";
import Page from "./components/Page";

function App() {
  const ref = {
    url: "https://i5x64bit.github.io/portfolio/assets/images/profile.png",
    information: {
      firstName: "Choksi",
      lastName: "Choks",
      title: "Marketing Manager",
    },
    contact: {
      phone: "+972543006357",
      email: "vaintomer@gmail.com",
      website: "https://choksi-choks.io",
      address: "Beer Sheva, South District",
    },
    education: [
      {
        emphasis: "Software Engineering",
        location: "Beer Sheva - Israel",
        from: "2011",
        to: "2013",
      },
      {
        emphasis: "Software Engineering",
        location: "Beer Sheva - Israel",
        from: "2011",
        to: "2013",
      },
    ],
    skills: ["UI/UX", "Visual Design", "Wireframes"],
    experience: [
      {
        position: "Tech Lead",
        company: "Google",
        location: "Silicone Valley",
        from: "2019",
        to: "2021",
        description:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur dolor numquam accusantium porro quod, dignissimos a veniam, perferendis aspernatur voluptatem iure, magnam dicta earum velit tenetur dolore. Perferendis, quasi assumenda.",
      },
      {
        position: "Tech Lead",
        company: "Google",
        location: "Silicone Valley",
        from: "2019",
        to: "2021",
        description:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur dolor numquam accusantium porro quod, dignissimos a veniam, perferendis aspernatur voluptatem iure, magnam dicta earum velit tenetur dolore. Perferendis, quasi assumenda.",
      },
      {
        position: "Tech Lead",
        company: "Google",
        location: "Silicone Valley",
        from: "2019",
        to: "2021",
        description:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur dolor numquam accusantium porro quod, dignissimos a veniam, perferendis aspernatur voluptatem iure, magnam dicta earum velit tenetur dolore. Perferendis, quasi assumenda.",
      },
    ],
    reference: [
      {
        fullName: "John Doe",
        location: "Google",
        title: "Sales Manager",
        contact: {
          email: "some@email.com",
        },
      },
      {
        fullName: "Pidor Solomons",
        location: "Facebook",
        title: "Product Manager",
        contact: {
          phone: "+972123456789",
          email: "some@email.com",
        },
      },
      {
        fullName: "Pidor Solomons",
        location: "Facebook",
        title: "Product Manager",
        contact: {
          phone: "+972123456789",
          email: "some@email.com",
        },
      },
    ],
  };
  return (
    <>
      <Page person={ref} />
    </>
  );
}

export default App;
