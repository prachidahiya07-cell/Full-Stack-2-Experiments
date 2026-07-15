function DraftCard({ draft, onEdit, onDelete }) {
  return (
    <div className="card">
      <h3>📱 {draft.platform}</h3>

      <p>
        <strong>📝 Post</strong>
      </p>

      <p>{draft.post}</p>

      {draft.image && (
        <p>
          <strong>🖼 Image:</strong> {draft.image}
        </p>
      )}

      <div
        style={{
          display: "flex",
          gap: "10px",
          marginTop: "15px",
        }}
      >
        <button onClick={onEdit}>✏️ Edit</button>

        <button onClick={onDelete}>🗑 Delete</button>
      </div>
    </div>
  );
}

export default DraftCard;