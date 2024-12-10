import { useState } from "react";

export default function Form() {
  const [name, setname] = useState({ firstname: "", lastname: "" });
  return (
    <div>
      <input
        type="text"
        name="fname"
        onChange={(e) => {
          setname({ ...name, firstname: e.target.value });
        }}
        value={name.firstname}
      />

      <input
        type="text"
        name="lname"
        onChange={(e) => {
          setname({ ...name, lastname: e.target.value });
        }}
        value={name.lastname}
      />
    </div>
  );
}
