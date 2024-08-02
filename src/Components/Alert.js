import React from 'react';
import PropTypes from 'prop-types';

export default function Alert(props) {
  return (
    props.message && (
      <div className="alert alert-warning alert-dismissible fade show" role="alert">
        {props.message}
        <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>
    )
  );
}

Alert.propTypes = {
  message: PropTypes.string.isRequired,
};
