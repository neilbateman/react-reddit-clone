import React from 'react';

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
            border: 1px solid red;
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
                    <button>Like</button>
                </div>

                <div className="unlike-button-container">
                    <button>Unlike</button>
                </div>
            </div>

            <div className="comment-container">
                <p>text text text text text text text</p>
            </div>
        </div>

        
    </div>
    );
}

export default Card;