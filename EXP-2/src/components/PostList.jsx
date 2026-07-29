import { useDispatch, useSelector } from "react-redux";
import { deletePost } from "../features/postsSlice";

function PostList() {

  const dispatch = useDispatch();

  const posts = useSelector(
    (state)=>state.posts.posts
  );

  return (

    <div className="card">

      <h2>Published Posts</h2>

      {

        posts.length===0 ?

        (

          <div className="empty">

            <h3>No Posts Available</h3>

            <p>Create your first social media post.</p>

          </div>

        )

        :

        posts.map((post)=>(

          <div
            className="post-card"
            key={post.id}
          >

            <h3>{post.title}</h3>

            <p>{post.content}</p>

            <span className="badge">

              {post.platform}

            </span>

            <button
              className="delete-btn"
              onClick={()=>dispatch(deletePost(post.id))}
            >

              Delete

            </button>

          </div>

        ))

      }

    </div>

  );

}

export default PostList;