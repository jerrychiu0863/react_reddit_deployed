import React from 'react';
import PropTypes from 'prop-types';

const Count = ({reddit, className}) => {
    return(
        <span className={className}>
            {reddit.likeCount}
        </span>
    );
    
}

Count.propTypes = {
    reddit: PropTypes.object.isRequired,
    className: PropTypes.string
}

export default Count;