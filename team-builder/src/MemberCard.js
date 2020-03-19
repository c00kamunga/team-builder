import React from "react";
import styled from 'styled-components'

const StyledMember = styled.div`
border: 3px solid black;
width: 30%;
text-align: center;
margin: 0 auto;
margin-top: 2rem;
`  


export default function MemberCard(props) {
  return (
    <StyledMember>
      <h1>Name: {props.member.name}</h1>
      <h1>Role: {props.member.role}</h1>
      <h1>Email: {props.member.email}</h1>
    </StyledMember>
  );
}
