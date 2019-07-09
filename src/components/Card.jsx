import React from 'react';
import NewLikeControl from './NewLikeControl';
import Posts from './Posts';

function Card() {
    return (

    <div>
        <style jsx>{`
        
        .card-container {
            border: 1px solid red;
            margin: 20%;
            margin-top: 2%;
            display: flex;
        }

        .vote-container {
            // border: 1px solid red;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
         
        }

        .like-button-container {
            // border: 1px solid blue;
            
        }

        .unlike-button-container {
            // border: 1px solid green;
            
        }

        .comment-container {
            border: 1px solid green;
            margin: 10%;
        }
        
        `}</style>

        <div className="card-container">
            <div className="vote-container">
                <div className="like-button-container">
                    <NewLikeControl />
                </div>
            </div>

            <div className="comment-container">
                <Posts />
            </div>
        </div>

        
    </div>
    );
}

export default Card;