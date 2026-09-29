// Practical Networking with Filius — Lesson Lock Configuration
//
// This file controls which lessons students can access. Every lesson page
// and the homepage read from this file.
//
// HOW TO UPDATE:
//   Easiest: open admin-7f3q2k9x.html, toggle the switches, then click
//   "Download updated config" and replace this file on your web host with
//   the downloaded one. That's the only file that needs re-uploading.
//
//   Manual alternative: change "locked" to "unlocked" (or back) below for
//   any lesson, save this file, and re-upload it. Keys must stay exactly
//   as they are — they match each lesson's file path under lessons/.
//
// Valid values: "unlocked" or "locked"

window.LESSON_STATUS = {
  "getting-started/solo-investigation": "unlocked",
  "getting-started/peer-to-peer-basics": "unlocked",

  "lans-switches-csma-cd/basic-lan-switch": "unlocked",
  "lans-switches-csma-cd/ethernet-csma-cd": "unlocked",
  "lans-switches-csma-cd/p2p-file-sharing-scale": "unlocked",
  "lans-switches-csma-cd/client-server-architecture": "unlocked",

  "topologies-media/network-topologies": "unlocked",
  "topologies-media/transmission-media": "locked",
  "topologies-media/wireless-networking-wap": "locked",

  "subnetting-routing/subnetting-ipv6": "locked",
  "subnetting-routing/introducing-router": "locked",

  "dhcp-dns/dhcp": "locked",
  "dhcp-dns/dns": "locked",

  "internet-cloud-wan/internet-connectivity-methods": "locked",
  "internet-cloud-wan/full-wan-build": "locked",
  "internet-cloud-wan/cloud-computing": "locked"
};
