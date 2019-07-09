import React from 'react';
import PropTypes from 'prop-types';

function PostProperties(props){
    return (
        <div>
            <h4>{props.title}</h4>
            <h5>{props.comment}</h5>
            <h5>{props.url}</h5>
        </div>
    );
}

PostProperties.propTypes = {
    title: PropTypes.string,
    comment: PropTypes.string,
    url: PropTypes.string
};

export default PostProperties;