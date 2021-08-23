import * as React from 'react';
import {memo, useEffect} from 'react';
import {array, bool} from 'prop-types';

const areEqual = (prevProps, nextProps) => {
    return prevProps === nextProps;
}

export function Twitter(props) {

    const {loading} = props;

    // componentDidMount
    useEffect(() => {
        const {posts, loading} = props;
        console.log('componentDidMount', posts);
        console.log('componentDidMount:loading', loading)
    }, []);

    // componenteDidUpdate
    useEffect(() => {
        console.log('componentDidUpdate:loading', loading);
    }, [loading]);

    // componentWillUnmount
    useEffect(() => {
        return () => {
            console.log('componentWillUnmount: fui removido');
        }
    }, []);

    const viewPosts = () => {
        const {posts} = props;
        return posts.map((post, key) => {
            return (
                <div key={key}>
                    Titulo: {post.title}<br/>
                    Descição: {post.description} <br/><br/>
                </div>
            );
        });
    }

    return (
        <div>
            {viewPosts()}
        </div>
    )
}

Twitter.propTypes = {
    posts: array,
    loading: bool,
    active: bool,
};

export default memo(Twitter, areEqual);