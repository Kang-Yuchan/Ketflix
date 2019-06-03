import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Section from "Components/Section";
import Loader from "../../Components/Loader";
import ErrorMessage from "../../Components/ErrorMessage";
import Poster from "../../Components/Poster";

const Container = styled.div`
    padding: 0px 20px;
`;

const HomePresenter = ({ nowPlaying, upcoming, popular, error, loading }) => 
    loading ? (
        <Loader />
    ) : (
    <Container>
        {nowPlaying && nowPlaying.length > 0 &&  (
            <Section title="Now Playing">
                {nowPlaying.map(movie => (
                    <Poster />
                ))}
            </Section>
        )}
        {upcoming && upcoming.length > 0 &&  (
            <Section title="Upcoming Movies">
                {nowPlaying.map(movie => (
                    <Poster />
                ))}
            </Section>
        )}
        {popular && popular.length > 0 &&  (
            <Section title="Popular Movies">
                {nowPlaying.map(movie => (
                    <Poster />
                ))}
            </Section>
        )}
        {error && <ErrorMessage color="#e74c3c" text={error} />}
    </Container>
);

HomePresenter.propTypes = {
    nowPlaying: PropTypes.array, 
    upcoming: PropTypes.array, 
    popular: PropTypes.array, 
    error: PropTypes.string, 
    loading: PropTypes.bool.isRequired,
};

export default HomePresenter;