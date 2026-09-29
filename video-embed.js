/* =========================================================================
   video-embed.js — shared tutorial-video player for every course site
   -------------------------------------------------------------------------
   HOW TO USE IN A LESSON PAGE
   1. Put a placeholder where the video should appear:
        <div class="lesson-video" data-lesson="foundations/p01-intro"></div>
      (data-lesson = the lesson's key, the same key used in lessons-config.js)
   2. Before </body>, load this course's video list, then this script:
        <script src="../../../videos-config.js"></script>
        <script src="../../../../video-embed.js"></script>

   WHERE THE VIDEO DETAILS LIVE
   Each course folder has its own videos-config.js (window.VIDEO_CONFIG),
   edited via the admin page. If a lesson has no entry, the placeholder stays
   invisible — so pages can be published before their video exists.

   PROVIDERS
   - "youtube": id = the 11-character video ID (e.g. "dQw4w9WgXcQ").
   - "bunny":   id = "<libraryId>/<videoId>" from the Bunny Stream dashboard.
   Switching a lesson from YouTube to Bunny = change provider + id in
   videos-config.js. No lesson pages need editing.

   Written in plain ES5 so it runs in older school browsers.
   ========================================================================= */
(function () {
  var CONFIG = window.VIDEO_CONFIG || {};

  /* ---------- helpers ---------- */
  function toSeconds(t) {
    if (typeof t === "number") { return t; }
    var parts = String(t || "0").split(":"), s = 0;
    for (var i = 0; i < parts.length; i++) { s = s * 60 + (parseInt(parts[i], 10) || 0); }
    return s;
  }
  function esc(s) {
    return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  }
  function hasClass(el, c) { return (" " + el.className + " ").indexOf(" " + c + " ") !== -1; }

  var PROVIDERS = {
    youtube: {
      embed: function (id, start) {
        return "https://www.youtube-nocookie.com/embed/" + encodeURIComponent(id) +
          "?autoplay=1&rel=0&playsinline=1" + (start > 0 ? "&start=" + start : "");
      },
      thumb: function (id) { return "https://i.ytimg.com/vi/" + encodeURIComponent(id) + "/hqdefault.jpg"; },
      external: function (id, start) {
        return { label: "Watch on YouTube", href: "https://www.youtube.com/watch?v=" + encodeURIComponent(id) + (start > 0 ? "&t=" + start + "s" : "") };
      }
    },
    bunny: {
      /* Bunny Stream embed player. The start-time parameter (t) should be
         checked once a real Bunny video exists. */
      embed: function (id, start) {
        return "https://iframe.mediadelivery.net/embed/" + id +
          "?autoplay=true&responsive=true" + (start > 0 ? "&t=" + start : "");
      },
      thumb: function () { return null; },
      external: function () { return null; }
    }
  };

  /* ---------- styles (house colours) ---------- */
  var css =
    ".lv-card{background:#101a3a;border-radius:12px;padding:14px;margin:0 0 30px;color:#e8ecf8;font-family:'Source Sans 3',Arial,sans-serif}" +
    ".lv-head{display:flex;justify-content:space-between;align-items:baseline;gap:10px;margin:0 2px 10px;flex-wrap:wrap}" +
    ".lv-kicker{font-size:12px;letter-spacing:.08em;text-transform:uppercase;color:#5eead4;font-weight:700}" +
    ".lv-title{font-family:'Source Serif 4',Georgia,serif;font-size:18px;color:#fff;font-weight:600}" +
    ".lv-frame{position:relative;width:100%;height:0;padding-top:56.25%;border-radius:8px;overflow:hidden;background:#0b1330}" +
    ".lv-frame iframe,.lv-facade{position:absolute;left:0;top:0;width:100%;height:100%;border:0}" +
    ".lv-facade{cursor:pointer;background:#1B2B5E center/cover no-repeat;padding:0;display:block}" +
    ".lv-facade:before{content:'';position:absolute;left:0;top:0;right:0;bottom:0;background:rgba(16,26,58,.35)}" +
    ".lv-play{position:absolute;left:50%;top:50%;width:76px;height:54px;margin:-27px 0 0 -38px;background:#0D9488;border-radius:14px;box-shadow:0 6px 18px rgba(0,0,0,.35)}" +
    ".lv-play:after{content:'';position:absolute;left:31px;top:15px;border-style:solid;border-width:12px 0 12px 20px;border-color:transparent transparent transparent #fff}" +
    ".lv-facade:hover .lv-play{background:#0b7b71}" +
    ".lv-note{position:absolute;left:0;right:0;bottom:12px;text-align:center;font-size:13px;color:#dfe4f3}" +
    ".lv-chapters{margin:12px 0 0;padding:0;list-style:none;display:flex;flex-wrap:wrap;gap:6px}" +
    ".lv-chapters button{background:#1f2c55;color:#dfe4f3;border:1px solid #33447a;border-radius:18px;padding:4px 11px;font-size:13.5px;cursor:pointer;font-family:inherit}" +
    ".lv-chapters button:hover{border-color:#5eead4}" +
    ".lv-chapters .lv-t{font-family:'JetBrains Mono',monospace;color:#5eead4;margin-right:6px;font-size:12.5px}" +
    ".lv-foot{margin-top:10px;font-size:13.5px}" +
    ".lv-foot a{color:#5eead4}" +
    ".lv-part{display:inline-block;margin:0 0 12px;background:#e6f5f3;color:#0D9488;border:1px solid #0D9488;border-radius:16px;padding:2px 11px;font-size:13.5px;font-weight:600;cursor:pointer;font-family:inherit}" +
    ".lv-part:hover{background:#0D9488;color:#fff}";

  function injectStyles() {
    var st = document.createElement("style");
    st.type = "text/css";
    if (st.styleSheet) { st.styleSheet.cssText = css; } else { st.appendChild(document.createTextNode(css)); }
    document.getElementsByTagName("head")[0].appendChild(st);
  }

  /* ---------- one player ---------- */
  function buildPlayer(host, key, v) {
    var provider = PROVIDERS[v.provider || "youtube"];
    if (!provider || !v.id) { return null; }

    var chapters = v.chapters || [];
    var thumb = provider.thumb(v.id);
    var ext = provider.external(v.id, 0);

    var html = '<div class="lv-card">' +
      '<div class="lv-head"><span><span class="lv-kicker">&#9654; Video tutorial</span><br><span class="lv-title">' + esc(v.title || "Watch this lesson") + '</span></span>' +
      (v.duration ? '<span class="lv-kicker" style="color:#9fb0dd">' + esc(v.duration) + '</span>' : '') + '</div>' +
      '<div class="lv-frame"><button type="button" class="lv-facade" aria-label="Play video"' +
      (thumb ? ' style="background-image:url(\'' + thumb + '\')"' : '') + '>' +
      '<span class="lv-play"></span><span class="lv-note">Click to play</span></button></div>';

    if (chapters.length) {
      html += '<ul class="lv-chapters">';
      for (var i = 0; i < chapters.length; i++) {
        html += '<li><button type="button" data-start="' + toSeconds(chapters[i].t) + '"><span class="lv-t">' +
          esc(chapters[i].t) + '</span>' + esc(chapters[i].label || "") + '</button></li>';
      }
      html += '</ul>';
    }
    if (ext) {
      html += '<div class="lv-foot">Video not loading? <a href="' + ext.href + '" target="_blank" rel="noopener">' + ext.label + ' &#8599;</a></div>';
    }
    html += '</div>';
    host.innerHTML = html;
    host.style.display = "block";

    var frame = null, innerDivs = host.getElementsByTagName("div");
    for (var d = 0; d < innerDivs.length; d++) {
      if (hasClass(innerDivs[d], "lv-frame")) { frame = innerDivs[d]; break; }
    }

    function play(start) {
      frame.innerHTML = '<iframe src="' + provider.embed(v.id, start || 0) + '" title="' + esc(v.title || "Video tutorial") +
        '" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
    }

    var buttons = host.getElementsByTagName("button");
    for (var b = 0; b < buttons.length; b++) {
      if (hasClass(buttons[b], "lv-facade")) {
        buttons[b].onclick = function () { play(0); };
      } else if (buttons[b].getAttribute("data-start") !== null) {
        buttons[b].onclick = function () { play(parseInt(this.getAttribute("data-start"), 10)); };
      }
    }

    /* "Watch this part" buttons on the matching page sections */
    for (var c = 0; c < chapters.length; c++) {
      if (!chapters[c].section) { continue; }
      var sec = document.getElementById(chapters[c].section);
      if (!sec) { continue; }
      var h2s = sec.getElementsByTagName("h2");
      var btn = document.createElement("button");
      btn.type = "button";
      btn.className = "lv-part";
      btn.setAttribute("data-start", toSeconds(chapters[c].t));
      btn.innerHTML = "&#9654; Watch this part (" + esc(chapters[c].t) + ")";
      btn.onclick = function () {
        play(parseInt(this.getAttribute("data-start"), 10));
        if (host.scrollIntoView) { host.scrollIntoView(true); }
      };
      if (h2s.length && h2s[0].parentNode === sec) {
        if (h2s[0].nextSibling) { sec.insertBefore(btn, h2s[0].nextSibling); } else { sec.appendChild(btn); }
      } else {
        sec.insertBefore(btn, sec.firstChild);
      }
    }
    return true;
  }

  /* ---------- init ---------- */
  var hosts = [], divs = document.getElementsByTagName("div");
  for (var i = 0; i < divs.length; i++) { if (hasClass(divs[i], "lesson-video")) { hosts.push(divs[i]); } }
  if (!hosts.length) { return; }

  var styled = false;
  for (var h = 0; h < hosts.length; h++) {
    var key = hosts[h].getAttribute("data-lesson");
    var v = CONFIG[key];
    if (v && v.id) {
      if (!styled) { injectStyles(); styled = true; }
      buildPlayer(hosts[h], key, v);
    } else {
      hosts[h].style.display = "none";
    }
  }
})();
