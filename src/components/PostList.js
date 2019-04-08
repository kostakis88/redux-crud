import React from 'react';
import { connect } from 'react-redux';
import Post from './Post';

class PostList extends React.Component {
    render() {
        return (
            <div>
                <h1>All Posts</h1>
                {this.props.posts.map( post => <Post key={post.id} post={post}/>)}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        posts: state.posts
    };
};

export default connect(mapStateToProps)(PostList);