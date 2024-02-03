import React, { useContext } from "react";
import { UserContext } from "./Context/UserContext";

function Card({ item }) {
  const { id, name } = item;
  const { data, setData } = useContext(UserContext);
  return (
    <article className=" w-[350px] bg-cyan-600 h-[300px] gap-2 flex justify-center items-center flex-col text-2xl ">
      <p>{id}</p>
      <p>{name}</p>

      <button
        onClick={() => {
          const filteruser = data.filter((item) => {
            return item.id != id;
          });
          setData(filteruser);
        }}
        className="bg-gray-950 px-6 py-2 rounded-lg hover:bg-yellow-500"
      >
        {" "}
        Delete
      </button>
    </article>
  );
}

export default Card;
