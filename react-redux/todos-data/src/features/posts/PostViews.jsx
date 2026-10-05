import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchPost } from './postSlice'

const PostViews = () => {

    const { isLoading, error, posts } = useSelector(state => state.posts)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchPost())
    }, [])
    return (
        <div className="posts-container">
            {isLoading && <h2 className="loading">Loading posts...</h2>}

            {error && <h3 className="error">{error}</h3>}

            <div className="posts-grid">
                {posts && posts.map(post => (
                    <div className="post-card" key={post.id}>
                        <div className="post-number">#{post.id}</div>

                        <h4>{post.title}</h4>

                        <p>{post.body}</p>

                        <div className="read-more">
                            Read post <span>→</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default PostViews