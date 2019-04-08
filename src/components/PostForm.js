import React from 'react';
import { connect } from 'react-redux';
import { createPost } from '../actions';

class PostForm extends React.Component {
    state = {
        title: '',
        text: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value 
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        let data = {
            id: new Date(),
            title: this.state.title,
            text: this.state.text 
        };
        this.props.createPost(data);
        this.setState({
            title: '',
            text: ''
        });
    }

    render() {
        return (
            <div>
                <h1>Create Post</h1>
                <form onSubmit={this.handleSubmit}>
                    <input onChange={this.handleChange} name="title" required type="text" placeholder="Enter Post Title" value={this.state.title} /><br /><br />
                    <textarea onChange={this.handleChange} name="text" required rows="5" cols="28" placeholder="Enter Post" value={this.state.text}/><br /><br />
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
        createPost: data => dispatch(createPost(data))
    };
};

export default connect(mapStatetoProps, mapDispatchToProps)(PostForm);