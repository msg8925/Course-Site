// Meritton British International School — Course Site Directory
//
// This file lists every course "branch" shown on the top-level homepage.
// Edit it via admin-7f3q2k9x.html (recommended), or by hand.
//
// Each course's "path" must be a folder at the site root containing its own
// index.html, site-structure.js, lessons-config.js, locked.html, lessons/,
// and pdfs/ — the same structure as robotics-club/.
//
// "status" is just a display label on the homepage ("active" shows a teal
// badge, anything else shows a grey "coming soon"-style badge) — it does not
// lock or hide the course.

window.COURSES_CONFIG = [
  {
    id: "robotics-club",
    title: "Programming, Robotics & Electronics Club",
    description: "After-school club building toward an end-of-year black-tape-following robotic vehicle competition.",
    path: "robotics-club/",
    status: "active"
  },
  {
    id: "y13-a2",
    title: "Y13 — A2 Level Computer Science",
    description: "Not currently taught — will begin next year. Content will be added once the course starts.",
    path: "y13-a2/",
    status: "coming-soon"
  },
  {
    id: "y12-as",
    title: "Y12 — AS Level Computer Science",
    description: "AS Level Computer Science lessons.",
    path: "y12-as/",
    status: "active"
  },
  {
    id: "y11-igcse",
    title: "Y11 — IGCSE Computer Science",
    description: "Y11 IGCSE Computer Science lessons.",
    path: "y11-igcse/",
    status: "active"
  },
  {
    id: "y10-igcse",
    title: "Y10 — IGCSE Computer Science",
    description: "Y10 IGCSE Computer Science lessons.",
    path: "y10-igcse/",
    status: "active"
  },
  {
    id: "y9-computing",
    title: "Y9 — Computing (Cambridge Lower Secondary)",
    description: "Y9 Cambridge Lower Secondary Computing lessons.",
    path: "y9-computing/",
    status: "active"
  },
  {
    id: "y8-computing",
    title: "Y8 — Computing (Cambridge Lower Secondary)",
    description: "Y8 Cambridge Lower Secondary Computing lessons.",
    path: "y8-computing/",
    status: "active"
  },
  {
    id: "y7-computing",
    title: "Y7 — Computing (Cambridge Lower Secondary)",
    description: "Y7 Cambridge Lower Secondary Computing lessons.",
    path: "y7-computing/",
    status: "active"
  }
];
