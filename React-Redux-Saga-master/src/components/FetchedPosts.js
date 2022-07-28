import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../redux/action'
import Post from './Post'

export default () => {
    const dispatch = useDispatch()
    const posts = useSelector(state => state.posts.fetchedPosts)  // c помошью useSelect указываем что именно нам нужно достать из store
    const loading = useSelector(state => state.app.loading)

    if (loading) {
        return (
            <div className="spinner-border text-primary" role="status">
                <span className="sr-only">Loading...</span>
            </div>
        )
    }

    if (!posts.length) {
        return <button
            className="btn btn-primary"
            onClick={() => dispatch(fetchPosts())}> Загрузить </button >
    }
    return posts.map(post => <Post post={post} key={post.id} />)
}
