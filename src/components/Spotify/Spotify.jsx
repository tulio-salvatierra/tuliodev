/* eslint-disable jsx-a11y/iframe-has-title */
export default function Spotify() {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <iframe
        src="https://open.spotify.com/embed/playlist/37i9dQZF1E37nK6BdQrBh3"
        width="75%"
        height="auto"
        frameBorder="0"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        allowTransparency="true"
      ></iframe>
    </div>
  );
}
