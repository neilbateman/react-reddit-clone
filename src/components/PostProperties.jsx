import React from 'react';
import PropTypes from 'prop-types';
import NewLikeControl from './NewLikeControl';

function PostProperties(props){
    return (
        <div>
            <style jsx> {`
            
            .post-property-container {
                border: 1px solid blue;
                display: flex;
                margin: 5%;
                flex-direction: row;
                width: 90%;
            }

            .like-control-container {
                // border: 1px solid red;
            }

            .user-comments {
                border: 1px solid black;
                flex-grow: 1;
                // padding: 50px;
            }

            .new-post-container {
                
            }

            `}</style>
              
            <div className="post-property-container">

                {/* <div className="new-post-container"> */}
                    <div className="like-control-container">
                        <NewLikeControl />
                    </div>

                    <div className="user-comments">
                        <h4>{props.title}</h4>
                        <h5>{props.comment}</h5>
                        <h5>{props.url}</h5>
                    </div>

                {/* </div> */}

                
            </div> 
              
        </div>
    );
}

PostProperties.propTypes = {
    title: PropTypes.string,
    comment: PropTypes.string,
    url: PropTypes.string
};

export default PostProperties;