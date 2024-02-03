import React, { useContext, useState } from "react";
import { UserContext } from "./Context/UserContext";

function Adduser() {
  const [username, setUsername] = useState("");
  const { data, setData } = useContext(UserContext);
  return (
    <div>
      <h2> User Registration</h2>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          const newUser = {
            id: new Date().getTime().toString(),
            name: username,
          };

          setData((prev) => {
            return [...prev, newUser];
          });
        }}
      >
        <input
          className="text-black"
          required
          type="text"
          name="username"
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <button className="bg-orange-600 px-6">Add user</button>
      </form>
    </div>
  );
}

export default Adduser;
