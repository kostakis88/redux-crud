import React from 'react';

class Post extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.post.title}</h1>
                <p>{this.props.post.text}</p>
            </div>
        );
    }
}

export default Post;