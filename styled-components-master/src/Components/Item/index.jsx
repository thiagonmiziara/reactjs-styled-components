import React from "react";
import styled from "styled-components";

const Item = styled.div`
  display: flex;
  flex-direction: column;

  .text{
    font-weight:bold;
      }
`;

export default ({ type, from, value }) => {
  return (
    <Item>
      <span className="text">{type}</span>
      <span className="text">{from}</span>
      <span className="text">{value}</span>
    </Item>
  );
};
