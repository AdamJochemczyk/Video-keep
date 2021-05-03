import styled from "styled-components";

type AwesomeButtonIn = "column" | "row";

const AwesomeButton = styled("button")<{ in: AwesomeButtonIn }>`
  cursor: pointer;
  border: none;
  margin: ${(props) => (props.in === "row" ? "0 1.5rem" : "1.5rem 0")};
  padding: ${(props) => (props.in === "row" ? "0 .5rem" : ".5rem 0")};
  background-color: transparent;
  &:hover {
    border: 1px solid #4caf50;
  }
`;
export default AwesomeButton;
