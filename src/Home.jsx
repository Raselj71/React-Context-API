import React, { useContext } from "react";
import Card from "./Card";
import { UserContext } from "./Context/UserContext";

function Home() {
  const { data, setData } = useContext(UserContext);
  return (
    <section className="flex gap-2 flex-wrap flex-grow">
      {data.map((item) => {
        return <Card key={item.id} item={item} />;
      })}
    </section>
  );
}

export default Home;
