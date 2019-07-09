import React from 'react';
import NewLikeControl from './NewLikeControl';
import Posts from './Posts';

function Card() {
    return (

    <div>
        <style jsx>{`
        
        .card-container {
            border: 1px solid red;
            margin: 0;
            margin-top: 2%;
            display: flex;
            width: 90%;
        }
   
    
        
        `}</style>

        <div className="card-container">
            <div className="vote-container">
                <div className="like-button-container">
                  
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