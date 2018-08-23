import React from 'react';
import Time from './time';
import PropTypes from 'prop-types';

const commentCondition = (comment) => {
    if(comment > 1 ) {
        return <span>{comment} comments</span>;
    } else if (comment === 1) {
        return <span>{comment} comment</span>;
    } else {
        return <span>comment</span>;
    }
}

const Content = ({reddit ,comment}) => {
   
         return(
            <div className="reddit-content">
                <div>
                    <a href={reddit.url} className="reddit-content-title-main">{reddit.title.main}
                    </a>
                    {' '}
                    <span className="reddit-content-title-sub">{reddit.title.sub}</span>
                </div>
                <div className="reddit-content-info">
                    Submitted <Time time={reddit.time} /> by <span className="reddit-content-author">{reddit.author}</span>
                </div>
                <div className="reddit-label">
                    <p>{commentCondition(comment)}</p>
                    <p>share</p>
                    <p>save</p>
                    <p>hide</p>
                    <p>report</p>
                    <p>pocket</p>
                </div>
            </div>        
      );

}

Content.propTypes = {
    reddit: PropTypes.object,
    comment: PropTypes.number.isRequired
}

export default Content;