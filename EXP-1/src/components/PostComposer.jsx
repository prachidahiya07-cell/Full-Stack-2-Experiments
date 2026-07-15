import { useRef } from "react";

function PostComposer({
  post,
  setPost,
  selectedPlatform,
  image,
  setImage,
  drafts,
  setDrafts,
  setStatus,
}) {
  const fileInputRef = useRef(null);

  const limits = {
    Twitter: 280,
    Instagram: 2200,
    LinkedIn: 3000,
  };

  const limit = limits[selectedPlatform] || 0;
  const exceeded = selectedPlatform && post.length > limit;

  const removeImage = () => {
    setImage(null);

    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const saveDraft = () => {
    if (!selectedPlatform) {
      alert("Please select a platform.");
      return;
    }

    if (!post.trim()) {
      alert("Please write a post.");
      return;
    }

    if (exceeded) {
      alert("Character limit exceeded.");
      return;
    }

    if (selectedPlatform === "Instagram" && !image) {
      alert("Instagram requires an image.");
      return;
    }

    const newDraft = {
      platform: selectedPlatform,
      post,
      image: image ? image.name : "",
    };

    setDrafts([...drafts, newDraft]);

    alert("Draft Saved Successfully!");

    setPost("");
    setImage(null);

    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const publishPost = () => {
    if (!selectedPlatform) {
      alert("Please select a platform.");
      return;
    }

    if (!post.trim()) {
      alert("Please write a post.");
      return;
    }

    if (exceeded) {
      alert("Character limit exceeded.");
      return;
    }

    if (selectedPlatform === "Instagram" && !image) {
      alert("Instagram requires an image.");
      return;
    }

    const success = Math.random() < 0.5;

    setStatus({
      success,
      message: success
        ? "🎉 Post Published Successfully!"
        : "❌ Publishing Failed! Please Try Again.",
      time: new Date().toLocaleString(),
    });
  };

  return (
    <div>
      <h3>📝 Create Post</h3>

      <textarea
        rows="6"
        placeholder="Write your post here..."
        value={post}
        onChange={(e) => setPost(e.target.value)}
      />

      <br />
      <br />

      <label>🖼 Upload Image</label>

      <br />

      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={(e) => setImage(e.target.files[0])}
      />

      {image && (
        <div style={{ marginTop: "10px" }}>
          <p style={{ color: "green" }}>
            Selected: {image.name}
          </p>

          <button onClick={removeImage}>Remove Image</button>
        </div>
      )}

      {selectedPlatform === "Instagram" && !image && (
        <p style={{ color: "red", fontWeight: "bold" }}>
          Instagram requires an image.
        </p>
      )}

      {selectedPlatform && (
        <>
          <p
            style={{
              color: exceeded ? "red" : "green",
              fontWeight: "bold",
            }}
          >
            Characters: {post.length}/{limit}
          </p>

          {exceeded && (
            <p style={{ color: "red" }}>
              Character limit exceeded!
            </p>
          )}

          <div style={{ marginTop: "15px" }}>
            <button onClick={saveDraft}>
              💾 Save Draft
            </button>

            <button
              onClick={publishPost}
              style={{
                background: "#7CB9E8",
                color: "white",
              }}
            >
              🚀 Publish
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default PostComposer;