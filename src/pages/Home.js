import { useContext } from "react";
import sampleContext from "./Data";

export default function Home() {
  const { user, setUser } = useContext(sampleContext);

  const changeUserName = () => {
    const fname = document.getElementById("fname").value;
    const lname = document.getElementById("lname").value;

    let fullName = fname + " " + lname;

    setUser(fullName);
  };

  return (
    <div>
      <h1>Hello! {user}</h1>
      <input type="text" placeholder="First Name" id="fname" /> <br /> <br />
      <input type="text" placeholder="Last name" id="lname" /> <br />
      <button
        className="btn btn-success rounded-1 mt-3"
        onClick={changeUserName}
      >
        Change name
      </button>
    </div>
  );
}
