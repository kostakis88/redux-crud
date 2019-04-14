import React from 'react';
import { connect } from 'react-redux';
import Post from './Post';
import EditComponent from './EditComponent';

class PostList extends React.Component {
    render() {
        return (
            <div>
                <h1 className="post_heading">All Posts</h1>
                {this.props.posts.map( post => (
                    <div key={post.id}>
                        {post.editing ? <EditComponent key={post.id} post={post} /> : <Post key={post.id} post={post}/>}
                    </div>
                ))}
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