import styled from "styled-components";

const RoundedButton=styled.button`
    cursor: pointer;
    border: none;
    background-color: #0275d8;
    color: #FFF;
    font-weight: 800;
    height: 30px;
    width: 30px;
    border-radius: 50%;
    &:hover{
        opacity: 0.75;
    }
`;

export default RoundedButton;