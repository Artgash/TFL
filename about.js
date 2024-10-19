// TFL.js

document.addEventListener("DOMContentLoaded", () => {
    // Add event listeners for hover effects on social stickers
    const youtubeSticker = document.getElementById("youtube-sticker");
    const tiktokSticker = document.getElementById("tiktok-sticker");
    const discordSticker = document.getElementById("discord-sticker");
  
    const stickers = [youtubeSticker, tiktokSticker, discordSticker];
  
    stickers.forEach((sticker) => {
      sticker.addEventListener("mouseenter", () => {
        sticker.style.transform = "scale(1.2)";
        sticker.style.transition = "transform 0.3s ease-in-out";
      });
  
      sticker.addEventListener("mouseleave", () => {
        sticker.style.transform = "scale(1)";
      });
    });
  });
  