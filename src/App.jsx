import { useState } from "react";
import { UserContext } from "./Context/UserContext";
import Home from "./Home";
import Adduser from "./Adduser";

function App() {
  const datalist = [
    { id: 1, name: "Rasel" },
    { id: 2, name: "Raihan" },
  ];
  const [data, setData] = useState(datalist);
  return (
    <UserContext.Provider value={{ data, setData }}>
      <main className="p-5 min-h-screen bg-gray-950 text-white">
        <Adduser />
        <Home />
      </main>
    </UserContext.Provider>
  );
}

export default App;
