import React from 'react';
import PostProperties from './PostProperties';
import Paper from '@material-ui/core/Paper';

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
           
            {userPosts.map((post, index) =><Paper>
            <PostProperties title={post.title}
            comment={post.comment}
            url={post.url}
            key={index} /></Paper>
            )}
            
           
          
        </div>
    );
}

export default Posts;