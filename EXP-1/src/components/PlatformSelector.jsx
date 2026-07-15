function PlatformSelector({ selectedPlatform, setSelectedPlatform }) {
  const platforms = ["Twitter", "Instagram", "LinkedIn"];

  return (
    <div>
      <h3>🌐 Select Platform</h3>

      <div
        style={{
          display: "flex",
          gap: "15px",
          flexWrap: "wrap",
          marginTop: "15px",
        }}
      >
        {platforms.map((platform) => (
          <label
            key={platform}
            style={{
              padding: "12px 20px",
              borderRadius: "30px",
              cursor: "pointer",
              background:
                selectedPlatform === platform ? "#8EC5FC" : "#EAF4FF",
              color:
                selectedPlatform === platform ? "white" : "#4B6584",
              border: "2px solid #8EC5FC",
              transition: "0.3s",
              fontWeight: "600",
            }}
          >
            <input
              type="radio"
              value={platform}
              checked={selectedPlatform === platform}
              onChange={() => setSelectedPlatform(platform)}
              style={{ display: "none" }}
            />

            {platform}
          </label>
        ))}
      </div>
    </div>
  );
}

export default PlatformSelector;