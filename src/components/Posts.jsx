import React from 'react';
import PostProperties from './PostProperties';


const userPosts = [ 
    {
        title: 'First Post',
        comment: 'Hello',
        url: 'hello.com'
    },
    {
        title: 'First Post',
        comment: 'Hello',
        url: 'hello.com'
    },
    
    {
        title: 'First Post',
        comment: 'Hello',
        url: 'hello.com'
    }
    
];

function Posts() {
    return (
        <div>
            {userPosts.map((post, index) =>
                <PostProperties title={post.title}
                comment={post.comment}
                url={post.url}
                key={index} />
            )}
        </div>
    );
}

export default Posts;