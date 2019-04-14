import React from 'react';
import { connect } from 'react-redux';
import { deletePost, editPost } from '../actions';

class Post extends React.Component {
    handleDeleteClick = () => {
        this.props.deletePost(this.props.post.id);
    }
    handleEditClick = () => {
        this.props.editPost(this.props.post.id);
    }

    render() {
        return (
            <div className="post">
                <h2 className="post_title">{this.props.post.title}</h2>
                <p className="post_message">{this.props.post.text}</p>
                <div className="control-buttons">
                    <button className="edit" onClick={this.handleEditClick}>Edit</button>
                    <button className="delete" onClick={this.handleDeleteClick}>Delete</button>
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        deletePost: id => dispatch(deletePost(id)),
        editPost: id => dispatch(editPost(id))
    };
}

export default connect(null, mapDispatchToProps)(Post);