import React, { useState } from "react";

function App() {
  const [teamList, setTeamList] = useState([
    { name: "Barinder", role: "backend engineer", email: "haha@yahoo.com" },
    { name: "Joseph", role: "frontend engineer", email: "wowow@yahoo.com" },
    { name: "David", role: "UX Designer", email: "awesome@yahoo.com" }
  ]);

  const addMember = member => {
    console.log(member)
    setTeamList([...teamList, member])
  }



  return (
    <div className="App">
      <h1>Member List</h1>
    </div>
  );
}

export default App;
