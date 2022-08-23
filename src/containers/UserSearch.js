import styled from "@emotion/styled";
import { TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDebounce } from "../utils/helpers/useDebaunce";
import { useDispatch } from "react-redux";
import { searchUsers } from "../store/users/usersActions";

function UserSearch() {
  const [params, setParams] = useState({ q: "" });

  const dispatch = useDispatch();
  const debaunce = useDebounce(params, 1000);

  const onChangeParams = ({ target: { name, value } }) => {
    return setParams({ ...params, [name]: value });
  };

  useEffect(() => {
    dispatch(searchUsers({ option: { ...params } }));
  }, [debaunce]);

  return (
    <Container>
      <Input
        name="q"
        onChange={onChangeParams}
        fullWidth
        placeholder="Search users from Github..."
      />
    </Container>
  );
}

export default UserSearch;

const Container = styled("div")`
  padding: 10px;
  width: 400px;
  margin: auto;
`;
const Input = styled(TextField)`
  & .MuiFormControl-root fieldset {
    border: 1px solid #30363d;
  }
  & .MuiOutlinedInput-root {
    &.Mui-focused {
      color: white;
      & ::placeholder {
        color: transparent;
      }
    }
    color: white;
    & ::placeholder {
      color: #9c9b9b;
    }

    &.Mui-focused fieldset,
    :hover fieldset {
      border-color: #707070;
      border-width: 2px;
      color: #9c9b9b;
    }
    legend {
      span {
        font-family: inherit;
        font-weight: inherit;
        font-size: 15px;
        line-height: inherit;
      }
    }
  }
`;
