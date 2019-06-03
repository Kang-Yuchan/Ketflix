import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div`
    width: 100vw;
    display: flex;
    justify-content: center;
`;



const Text = styled.span`
    color: ${props => props.color};
`;


const ErrorMessage = ({text, color}) => (
    <Container>
        <Text color={color}>{text}</Text>
    </Container>
);

ErrorMessage.propTypes = {
    text: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired
};

export default ErrorMessage;