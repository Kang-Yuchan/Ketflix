import PropTypes from "prop-types";

const DetailPresenter = ({ rusult, error, loading }) => null;

DetailPresenter.propTypes = {
    result: PropTypes.object, 
    error: PropTypes.string, 
    loading: PropTypes.bool.isRequired,
};

export default DetailPresenter;