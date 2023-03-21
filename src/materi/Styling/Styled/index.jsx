import React from "react";
import styled from "styled-components";

const Button = styled.button`
    border: 2px solid black;
    font-size: 16px;
    padding: 10px;
    background-color: white;
    cursor: pointer;
    color: black;
    border-radius: 5px;
    margin: 100px 0 20px 600px;
    border-color: 2px solid #5fe8f1;

    &:hover {
        background-color: #5fe8f1;
        border: 2px solid #eeec7c;
        color: #fff;
    }
`;

class Styled extends React.Component {
    render() {
        return (
            <div>
                <Button>Gaskeunnn</Button>
            </div>
        );
    }
}

export default Styled;
