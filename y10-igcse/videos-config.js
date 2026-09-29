// Y10 — IGCSE Computer Science — Tutorial Video Configuration
//
// Maps a lesson KEY (same keys as lessons-config.js) to its tutorial video.
// Edit it via the central admin page. Lessons with no entry simply show no
// video, so explainer pages can go live before their video is recorded.
//
// Shape of one entry:
//   "section/lesson-key": {
//     provider: "youtube",           // or "bunny"
//     id: "VIDEO_ID",                // YouTube: 11-char ID. Bunny: "libraryId/videoId"
//     title: "Shown above the player",
//     duration: "12:40",             // optional, display only
//     chapters: [                    // optional
//       { t: "0:00", label: "What is pseudocode?", section: "what" }
//     ]                              // "section" = id of a section on the explainer
//   }                                // page; adds a "Watch this part" button there

window.VIDEO_CONFIG = {};
