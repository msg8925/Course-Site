// Site Structure — per-lesson "resources" (one or more files/links per
// lesson, each with its own title + href). The lock in lessons-config.js
// still applies at the LESSON level — all resources inside a lesson share
// that one lock state.
//
// This course is a 16-session practical networking lab sequence built in
// Filius (the free hardwired-network simulator), covering the Communication
// syllabus strand of Cambridge International AS Computer Science (9618).
// Each session pairs a short theory input with a hands-on Filius build (or,
// for the concepts Filius can't model — Ethernet/CSMA-CD, transmission
// media, wireless, Internet connectivity methods, cloud computing — a
// standalone theory session).

window.SITE_STRUCTURE = {
  "sections": [
    {
      "id": "getting-started",
      "number": "1",
      "title": "Getting Started",
      "description": "Before connecting machines together, find out what your own computer is already telling you — then build the simplest possible network: one PC talking to one other PC.",
      "subsections": [
        {
          "title": null,
          "description": null,
          "lessons": [
            {
              "key": "getting-started/solo-investigation",
              "label": "1.1",
              "title": "Session 1 — Solo Investigation",
              "resources": [
                { "title": "Explainer", "href": "lessons/getting-started/solo-investigation/explainer.html" },
                { "title": "Practical Worksheet", "href": "lessons/getting-started/solo-investigation/practical.html" },
                { "title": "Practice Questions", "href": "lessons/getting-started/solo-investigation/practice.html" }
              ]
            },
            {
              "key": "getting-started/peer-to-peer-basics",
              "label": "1.2",
              "title": "Session 2 — Peer-to-Peer Basics",
              "resources": [
                { "title": "Explainer", "href": "lessons/getting-started/peer-to-peer-basics/explainer.html" },
                { "title": "Practical Worksheet", "href": "lessons/getting-started/peer-to-peer-basics/practical.html" },
                { "title": "Practice Questions", "href": "lessons/getting-started/peer-to-peer-basics/practice.html" }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "lans-switches-csma-cd",
      "number": "2",
      "title": "LANs, Switches & Client-Server",
      "description": "Scale up from two machines to a switched LAN, add a client-server application on top, and look under the hood at how Ethernet actually shares the wire.",
      "subsections": [
        {
          "title": null,
          "description": null,
          "lessons": [
            {
              "key": "lans-switches-csma-cd/basic-lan-switch",
              "label": "2.1",
              "title": "Session 3 — Basic LAN with a Switch",
              "resources": [
                { "title": "Explainer", "href": "lessons/lans-switches-csma-cd/basic-lan-switch/explainer.html" },
                { "title": "Practical Worksheet", "href": "lessons/lans-switches-csma-cd/basic-lan-switch/practical.html" },
                { "title": "Practice Questions", "href": "lessons/lans-switches-csma-cd/basic-lan-switch/practice.html" }
              ]
            },
            {
              "key": "lans-switches-csma-cd/ethernet-csma-cd",
              "label": "2.2",
              "title": "Session 4 (Theory) — Ethernet & CSMA/CD",
              "resources": [
                { "title": "Explainer", "href": "lessons/lans-switches-csma-cd/ethernet-csma-cd/explainer.html" },
                { "title": "Practice Questions", "href": "lessons/lans-switches-csma-cd/ethernet-csma-cd/practice.html" }
              ]
            },
            {
              "key": "lans-switches-csma-cd/p2p-file-sharing-scale",
              "label": "2.3",
              "title": "Session 5 — P2P File Sharing at Scale",
              "resources": [
                { "title": "Explainer", "href": "lessons/lans-switches-csma-cd/p2p-file-sharing-scale/explainer.html" },
                { "title": "Practical Worksheet", "href": "lessons/lans-switches-csma-cd/p2p-file-sharing-scale/practical.html" },
                { "title": "Practice Questions", "href": "lessons/lans-switches-csma-cd/p2p-file-sharing-scale/practice.html" }
              ]
            },
            {
              "key": "lans-switches-csma-cd/client-server-architecture",
              "label": "2.4",
              "title": "Session 6 — Client-Server Architecture",
              "resources": [
                { "title": "Explainer", "href": "lessons/lans-switches-csma-cd/client-server-architecture/explainer.html" },
                { "title": "Practical Worksheet", "href": "lessons/lans-switches-csma-cd/client-server-architecture/practical.html" },
                { "title": "Practice Questions", "href": "lessons/lans-switches-csma-cd/client-server-architecture/practice.html" }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "topologies-media",
      "number": "3",
      "title": "Topologies & Transmission Media",
      "description": "How devices are arranged (bus, star, mesh) and what they're connected with (copper, fibre, radio) — including the one topology Filius can only partly model.",
      "subsections": [
        {
          "title": null,
          "description": null,
          "lessons": [
            {
              "key": "topologies-media/network-topologies",
              "label": "3.1",
              "title": "Session 7 — Network Topologies",
              "resources": [
                { "title": "Explainer", "href": "lessons/topologies-media/network-topologies/explainer.html" },
                { "title": "Practical Worksheet", "href": "lessons/topologies-media/network-topologies/practical.html" },
                { "title": "Practice Questions", "href": "lessons/topologies-media/network-topologies/practice.html" }
              ]
            },
            {
              "key": "topologies-media/transmission-media",
              "label": "3.2",
              "title": "Session 8 (Theory) — Transmission Media",
              "resources": []
            },
            {
              "key": "topologies-media/wireless-networking-wap",
              "label": "3.3",
              "title": "Session 9 (Theory) — Wireless Networking & the WAP",
              "resources": []
            }
          ]
        }
      ]
    },
    {
      "id": "subnetting-routing",
      "number": "4",
      "title": "Subnetting & Routing",
      "description": "Split one network into subnets with a subnet mask, then introduce the router that lets separate LANs talk to each other.",
      "subsections": [
        {
          "title": null,
          "description": null,
          "lessons": [
            {
              "key": "subnetting-routing/subnetting-ipv6",
              "label": "4.1",
              "title": "Session 10 — Subnetting (+ IPv6 Add-On)",
              "resources": []
            },
            {
              "key": "subnetting-routing/introducing-router",
              "label": "4.2",
              "title": "Session 11 — Introducing the Router",
              "resources": []
            }
          ]
        }
      ]
    },
    {
      "id": "dhcp-dns",
      "number": "5",
      "title": "DHCP & DNS",
      "description": "Automatic addressing for busy networks, and the naming service that lets a browser use a domain name instead of an IP address.",
      "subsections": [
        {
          "title": null,
          "description": null,
          "lessons": [
            {
              "key": "dhcp-dns/dhcp",
              "label": "5.1",
              "title": "Session 12 — DHCP",
              "resources": []
            },
            {
              "key": "dhcp-dns/dns",
              "label": "5.2",
              "title": "Session 13 — DNS",
              "resources": []
            }
          ]
        }
      ]
    },
    {
      "id": "internet-cloud-wan",
      "number": "6",
      "title": "Internet Connectivity, Cloud & the Full WAN",
      "description": "How premises connect to the wider Internet, what cloud computing actually offers, and a final build pulling every earlier session together into one WAN.",
      "subsections": [
        {
          "title": null,
          "description": null,
          "lessons": [
            {
              "key": "internet-cloud-wan/internet-connectivity-methods",
              "label": "6.1",
              "title": "Session 14 (Theory) — Internet Connectivity Methods",
              "resources": []
            },
            {
              "key": "internet-cloud-wan/full-wan-build",
              "label": "6.2",
              "title": "Session 15 — Full WAN Build (Consolidation)",
              "resources": []
            },
            {
              "key": "internet-cloud-wan/cloud-computing",
              "label": "6.3",
              "title": "Session 16 (Theory) — Cloud Computing",
              "resources": []
            }
          ]
        }
      ]
    }
  ]
};
