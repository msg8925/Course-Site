// Programming, Robotics & Electronics Club — Lesson Lock Configuration
//
// This file controls which lessons students can access. Every lesson page
// and the homepage read from this file.
//
// HOW TO UPDATE FOR THE WEEK:
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
  "cpp/structure-flow": "unlocked",
  "cpp/variables": "locked",
  "cpp/if-statements": "locked",
  "cpp/loops": "locked",
  "cpp/arrays": "locked",
  "cpp/functions": "locked",
  "cpp/classes-objects": "locked",

  "electronics/breadboard": "locked",
  "electronics/resistor-values": "locked",
  "electronics/series-parallel": "locked",
  "electronics/led-circuit": "locked",
  "electronics/capacitors-rc": "locked",
  "electronics/transistor-basics": "locked",
  "electronics/dc-motor-basics": "locked",
  "electronics/transistor-dc-motor": "locked",
  "electronics/stepper-basics": "locked",
  "electronics/servo-basics": "locked",

  "arduino/installing-ide": "locked",
  "arduino/pins-explained": "locked",
  "arduino/first-program-blink": "locked",
  "arduino/external-led": "locked",
  "arduino/switch-interfacing": "locked",
  "arduino/7-segment-display": "locked",
  "arduino/lcd1602": "locked",
  "arduino/rgb-led": "locked",
  "arduino/potentiometer-led": "locked",
  "arduino/servo": "locked",
  "arduino/dc-motor-l298n": "locked",
  "arduino/stepper-motor": "locked",
  "arduino/ir-transmitter-receiver": "locked",
  "arduino/hc-sr04-ultrasonic": "locked",

  "vehicle/ir-refresher": "locked",
  "vehicle/multi-sensor-array": "locked",
  "vehicle/lcd-sensor-readout": "locked",
  "vehicle/sensor-calibration": "locked",
  "vehicle/two-motor-drive": "locked",
  "vehicle/movement-functions": "locked",
  "vehicle/basic-line-following": "locked",
  "vehicle/rgb-status-indicator": "locked",
  "vehicle/proportional-steering": "locked",
  "vehicle/chassis-assembly": "locked",
  "vehicle/testing-competition": "locked"
};
