import React from 'react';
import NewLikeControl from './NewLikeControl';
import Posts from './Posts';

function Card() {
    return (

    <div>
        <style jsx>{`
        
        .card-container {
            margin-top: 2%;
            display: flex;
            width: 50%;
        }
   
    
        
        `}</style>

        <div className="card-container">
            <div className="comment-container">
                <Posts />
            </div>
        </div>

        
    </div>
    );
}

export default Card;