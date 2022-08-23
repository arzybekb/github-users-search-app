import { Avatar, styled } from "@mui/material";
import React from "react";

function UserCard({ login, imageLink }) {
  return (
    <Card>
      <AvatarWrapper>
        <Avatar src={imageLink} alt="profile-picture" />
        <Login>{login}</Login>
      </AvatarWrapper>
    </Card>
  );
}

export default UserCard;

const Card = styled("div")`
  width: 40vw;
  height: 75px;
  background-color: #0d1117;
  border: 1px solid #30363d;
  margin-top: 8px;
  border-radius: 6px;
  padding: 16px;
  color: #c9d1d9;
`;
const AvatarWrapper = styled("div")`
  display: flex;
  align-items: center;
`;
const Login = styled("p")`
  margin-left: 5px;
`;
