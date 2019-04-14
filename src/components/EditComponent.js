import React from 'react';
import { connect } from 'react-redux';
import { updatePost } from '../actions';

class EditComponent extends React.Component {
    state = {
        newTitle: this.props.post.title,
        newMessage: this.props.post.text
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value 
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        let data = {
            newTitle: this.state.newTitle,
            newMessage: this.state.newMessage
        };
        this.props.updatePost(this.props.post.id, data);
    }

    render() {
        return (
            <div className="post">
                <h1>Edit Post</h1>
                <form className="form" onSubmit={this.handleSubmit}>
                    <input onChange={this.handleChange} 
                    name="newTitle" 
                    required 
                    type="text" 
                    value={this.state.newTitle} 
                    placeholder="Enter Post Title" 
                     /><br /><br />
                    <textarea onChange={this.handleChange} 
                    name="newMessage" 
                    required 
                    rows="5" 
                    cols="28" 
                    value={this.state.newMessage} 
                    placeholder="Enter Post" 
                    /><br /><br />
                    <button>Post</button>
                </form>
            </div>
        );
    }
}

const mapStatetoProps = state => {
    return {
        posts: state.posts
    };
};

const mapDispatchToProps = dispatch => {
    return {
        updatePost: (post, data) => dispatch(updatePost(post, data))
    };
};

export default connect(mapStatetoProps, mapDispatchToProps)(EditComponent);