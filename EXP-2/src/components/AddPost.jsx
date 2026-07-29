import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPost } from "../features/postsSlice";

function AddPost() {

  const dispatch = useDispatch();

  const platforms = useSelector(
    (state) => state.platforms.platforms
  );

  const [title, setTitle] = useState("");

  const [content, setContent] = useState("");

  const [platform, setPlatform] = useState(platforms[0]);

  const handleSubmit = () => {

    if (!title || !content) return;

    dispatch(
      addPost({
        id: Date.now(),
        title,
        content,
        platform,
      })
    );

    setTitle("");
    setContent("");
    setPlatform(platforms[0]);

  };

  return (

    <div className="card">

      <h2>Create New Post</h2>

      <label>Title</label>

      <input
        type="text"
        placeholder="Enter post title..."
        value={title}
        onChange={(e)=>setTitle(e.target.value)}
      />

      <label>Description</label>

      <textarea
        placeholder="Write your content..."
        value={content}
        onChange={(e)=>setContent(e.target.value)}
      />

      <label>Select Platform</label>

      <select
        value={platform}
        onChange={(e)=>setPlatform(e.target.value)}
      >

        {platforms.map((item,index)=>(

          <option key={index}>
            {item}
          </option>

        ))}

      </select>

      <button onClick={handleSubmit}>

        Publish

      </button>

    </div>

  );

}

export default AddPost;