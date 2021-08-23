import React, {Component, Fragment} from 'react';

class Twitter extends Component {

    state = {
        tweet: false,
    };

    componentDidMount() {
        const {posts, loading} = this.props;
        console.log('componentDidMount', posts);
        console.log('componentDidMount : loading', loading);
    }

    componentDidUpdate(prevProps) {
        const {loading} = this.props;
        if (loading !== prevProps.loading) {
            console.log('componentDidUpdate', loading);
        }
    }

    componentWillUnmount() {
        console.log('componentWillUnmount fui removido ☺');
    }

    shouldComponentUpdate(nextProps, nextState){
        console.log('render shouldComponentUpdate');
        return this.state.tweet !== nextProps.tweet;
    }

    viewPosts = () => {
        const {posts} = this.props;
        return posts.map((post, key) => {
            return (
                <Fragment key={'post' + key}>
                    Titulo: {post.title}<br/>
                    Descição: {post.description} <br/><br/>
                </Fragment>
            );
        });
    }

    setTweet = () => {
        this.setState(
            {
                tweet:true,
            }
        );
    }

    render() {
        return (
            <div>
                {this.viewPosts()}
                <button onClick={this.setTweet}>Carregar</button>
            </div>
        )
    }

}

export default Twitter;

