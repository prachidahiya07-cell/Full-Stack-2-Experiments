function StatusCard({ status }) {
  if (!status) return null;

  return (
    <div className={status.success ? "card success" : "card failure"}>
      <h3>📢 Publishing Status</h3>

      <p>{status.message}</p>

      {status.time && (
        <p
          style={{
            marginTop: "10px",
            fontSize: "13px",
            color: "#555",
          }}
        >
          {status.time}
        </p>
      )}
    </div>
  );
}

export default StatusCard;