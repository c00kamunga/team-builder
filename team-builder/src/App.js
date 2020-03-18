import React, { useState } from "react";
import Form from './Form';
import MemberCard from './MemberCard'; 
import styled from 'styled-components';

const StyledApp = styled.div`
text-align: center;
`





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
    <StyledApp>
      <h1>Member List</h1>
      <Form addMember={addMember}/>
      {teamList.map((member, id) =>
      <MemberCard member={member}/>
      )}
    </StyledApp>
  );
}

export default App;
