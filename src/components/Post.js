import React from 'react';
import { connect } from 'react-redux';
import { deletePost } from '../actions';

class Post extends React.Component {
    handleClick = () => {
        this.props.deletePost(this.props.post.id);
    }

    render() {
        return (
            <div>
                <h1>{this.props.post.title}</h1>
                <p>{this.props.post.text}</p>
                <button>Edit</button>
                <button onClick={this.handleClick}>Delete</button>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        deletePost: id => dispatch(deletePost(id))
    };
}

export default connect(null, mapDispatchToProps)(Post);