import React from 'react';
import PostForm from './PostForm';
import PostList from './PostList';

class App extends React.Component {
    render() {
        return (
            <div>
                <PostForm />
                <PostList />
            </div>
        );
    }
}

export default App;