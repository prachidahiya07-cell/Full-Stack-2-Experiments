import { useState, useEffect } from "react";
import PlatformSelector from "./components/PlatformSelector";
import PostComposer from "./components/PostComposer";
import DraftCard from "./components/DraftCard";
import StatusCard from "./components/StatusCard";

function App() {
  const [selectedPlatform, setSelectedPlatform] = useState("");
  const [post, setPost] = useState("");
  const [image, setImage] = useState(null);

  const [drafts, setDrafts] = useState(() => {
    const savedDrafts = localStorage.getItem("drafts");
    return savedDrafts ? JSON.parse(savedDrafts) : [];
  });

  const [status, setStatus] = useState(null);

  useEffect(() => {
    localStorage.setItem("drafts", JSON.stringify(drafts));
  }, [drafts]);

  const deleteDraft = (index) => {
    const updatedDrafts = drafts.filter((_, i) => i !== index);
    setDrafts(updatedDrafts);
  };

  const editDraft = (index) => {
    const draft = drafts[index];

    setSelectedPlatform(draft.platform);
    setPost(draft.post);

    if (draft.image) {
      setImage({ name: draft.image });
    } else {
      setImage(null);
    }

    deleteDraft(index);
  };

  return (
    <div className="container">
      <h1>📱 Social Media Post Composer</h1>
      <p>Experiment 1.1.1</p>

      <hr />

      <PlatformSelector
        selectedPlatform={selectedPlatform}
        setSelectedPlatform={setSelectedPlatform}
      />

      <hr />

      <h3>Selected Platform</h3>

      <p>{selectedPlatform || "No Platform Selected"}</p>

      <hr />

      <PostComposer
        post={post}
        setPost={setPost}
        selectedPlatform={selectedPlatform}
        image={image}
        setImage={setImage}
        drafts={drafts}
        setDrafts={setDrafts}
        setStatus={setStatus}
      />

      <StatusCard status={status} />

      <hr />

      <h2>Saved Drafts</h2>

      {drafts.length === 0 ? (
        <p>No Drafts Saved</p>
      ) : (
        drafts.map((draft, index) => (
          <DraftCard
            key={index}
            draft={draft}
            onEdit={() => editDraft(index)}
            onDelete={() => deleteDraft(index)}
          />
        ))
      )}
    </div>
  );
}

export default App;