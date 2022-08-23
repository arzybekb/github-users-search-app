import { styled } from "@mui/system";
import React from "react";
import { useSelector } from "react-redux";
import UserCard from "../components/UserCard";

function Users() {
  const { users } = useSelector((state) => state.users);
  return (
    <Container>
      <CardWrapper>
        {users.map((el) => {
          return (
            <UserCard key={el.id} imageLink={el.avatar_url} login={el.login} />
          );
        })}
      </CardWrapper>
    </Container>
  );
}

export default Users;

const Container = styled("div")``;
const CardWrapper = styled("div")`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;
