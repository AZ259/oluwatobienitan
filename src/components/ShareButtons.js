"use client";

export default function ShareButtons({ title, url }) {
  const shareUrl = url || (typeof window !== "undefined" ? window.location.href : "");
  const shareText = title || "Check this out";

  const copyLink = () => {
    navigator.clipboard.writeText(shareUrl).catch(() => {
      window.prompt("Copy this link:", shareUrl);
    });
  };

  return (
    <div className="share-links">
      <button onClick={copyLink}>Copy Link</button>
      <a href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`} target="_blank" rel="noopener noreferrer">X (Twitter)</a>
      <a href={`https://facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`} target="_blank" rel="noopener noreferrer">Facebook</a>
    </div>
  );
}
