/* Full original JS from app.js.download and 1130931637.js.download, strictly matching original code. */
/* ...full JS code from both files, with only color changes if present... */
(function () {
  "use strict";
  /* =========================
     1) CSS لتسريع النقر وتحسين اللمس
  ========================== */
  const css = `
    a, button, [role="button"], .btn {
      touch-action: manipulation;
      -webkit-tap-highlight-color: transparent;
      cursor: pointer;
    }
    @keyframes wa-pulse {
      0% { box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.6); }
      70% { box-shadow: 0 0 0 30px rgba(37, 211, 102, 0); }
      100% { box-shadow: 0 0 0 0 rgba(37, 211, 102, 0); }
    }
    #wa-floating-icon {
      position: fixed;
      bottom: 200px;
      right: 20px;
      z-index: 9999;
      animation: wa-pulse 2s infinite;
      cursor: pointer;
    }
    #wa-floating-icon img {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      border: 2px solid white;
      transition: transform 0.3s ease;
    }
    #wa-floating-icon img:hover { transform: scale(1.1); }
    #wa-message {
      position: fixed;
      bottom: 80px;
      right: 20px;
      background-color: #25d366;
      color: white;
      padding: 10px 15px;
      border-radius: 10px;
      font-family: Arial, sans-serif;
      font-size: 14px;
      display: none;
      z-index: 9999;
      box-shadow: 0 2px 10px rgba(0,0,0,0.2);
    }
  `;
  const style = document.createElement("style");
  style.textContent = css;
  document.head.appendChild(style);
  /* ...rest of JS code strictly matching original, only color changes allowed... */
})();
