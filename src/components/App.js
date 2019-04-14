import React from 'react';
import PostForm from './PostForm';
import PostList from './PostList';
import '../styles/index.css';

class App extends React.Component {
    render() {
        return (
            <div className="App">
                <div className="navbar">
                    <h2 className="center ">Post It</h2>
                </div>
                    <PostForm />
                    <PostList />
            </div>
        );
    }
}

export default App;