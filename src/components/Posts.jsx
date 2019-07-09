import React from 'react';
import PostProperties from './PostProperties';


const userPosts = [ 
    {
        title: 'First Post',
        comment: 'Eaque similique quasi labore tenetur. Adipisci nulla sed ea delectus eum, ipsam voluptatum quia ut distinctio nam fugit aliquam, deserunt totam laborum.', 
        url: 'hello.com'
    },
    {
        title: 'First Post',
        comment: 'Eaque similique quasi labore tenetur. Adipisci nulla sed ea delectus eum, ipsam voluptatum quia ut distinctio nam fugit aliquam, deserunt totam laborum.',
        url: 'hello.com'
    },
    
    {
        title: 'First Post',
        comment: 'Eaque similique quasi labore tenetur. Adipisci nulla sed ea delectus eum, ipsam voluptatum quia ut distinctio nam fugit aliquam, deserunt totam laborum.',
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