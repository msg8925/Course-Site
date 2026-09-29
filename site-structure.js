// Programming, Robotics & Electronics Club — Site Structure
//
// This file defines every section, subsection, and lesson shown on this
// course's homepage. Edit it via the central admin page.

window.SITE_STRUCTURE = {
  "sections": [
    {
      "id": "cpp",
      "number": "1",
      "title": "C/C++ Fundamentals",
      "description": "The programming foundations behind every Arduino sketch. No hardware needed for this section — just a computer and the logic you'll reuse everywhere else.",
      "subsections": [
        {
          "title": null,
          "description": null,
          "lessons": [
            {
              "key": "cpp/structure-flow",
              "label": "1.1",
              "title": "Program Structure and Flow",
              "resources": [
                {
                  "title": "Program Structure and Flow",
                  "href": "lessons/cpp/structure-flow.html"
                }
              ]
            },
            {
              "key": "cpp/variables",
              "label": "1.2",
              "title": "Variables and Data Types",
              "resources": [
                {
                  "title": "Variables and Data Types",
                  "href": "lessons/cpp/variables.html"
                }
              ]
            },
            {
              "key": "cpp/if-statements",
              "label": "1.3",
              "title": "If Statements and Conditions",
              "resources": [
                {
                  "title": "If Statements and Conditions",
                  "href": "lessons/cpp/if-statements.html"
                }
              ]
            },
            {
              "key": "cpp/loops",
              "label": "1.4",
              "title": "Loops (for, while)",
              "resources": [
                {
                  "title": "Loops (for, while)",
                  "href": "lessons/cpp/loops.html"
                }
              ]
            },
            {
              "key": "cpp/arrays",
              "label": "1.5",
              "title": "Arrays",
              "resources": [
                {
                  "title": "Arrays",
                  "href": "lessons/cpp/arrays.html"
                }
              ]
            },
            {
              "key": "cpp/functions",
              "label": "1.6",
              "title": "Functions",
              "resources": [
                {
                  "title": "Functions",
                  "href": "lessons/cpp/functions.html"
                }
              ]
            },
            {
              "key": "cpp/classes-objects",
              "label": "1.7",
              "title": "Classes and Objects",
              "resources": [
                {
                  "title": "Classes and Objects",
                  "href": "lessons/cpp/classes-objects.html"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "electronics",
      "number": "2",
      "title": "Electronics Fundamentals",
      "description": "The physical side of the club — how the components on your breadboard actually behave, independent of any code.",
      "subsections": [
        {
          "title": null,
          "description": null,
          "lessons": [
            {
              "key": "electronics/breadboard",
              "label": "2.1",
              "title": "How a Breadboard Works",
              "resources": [
                {
                  "title": "How a Breadboard Works",
                  "href": "lessons/electronics/breadboard.html"
                }
              ]
            },
            {
              "key": "electronics/resistor-values",
              "label": "2.2",
              "title": "Reading Resistor Values",
              "resources": [
                {
                  "title": "Reading Resistor Values",
                  "href": "lessons/electronics/resistor-values.html"
                }
              ]
            },
            {
              "key": "electronics/series-parallel",
              "label": "2.3",
              "title": "Series and Parallel Resistor Circuits",
              "resources": [
                {
                  "title": "Series and Parallel Resistor Circuits",
                  "href": "lessons/electronics/series-parallel.html"
                }
              ]
            },
            {
              "key": "electronics/led-circuit",
              "label": "2.4",
              "title": "Building a Simple LED Circuit",
              "resources": [
                {
                  "title": "Building a Simple LED Circuit",
                  "href": "lessons/electronics/led-circuit.html"
                }
              ]
            },
            {
              "key": "electronics/capacitors-rc",
              "label": "2.5",
              "title": "Capacitors and RC Circuits",
              "resources": [
                {
                  "title": "Capacitors and RC Circuits",
                  "href": "lessons/electronics/capacitors-rc.html"
                }
              ]
            },
            {
              "key": "electronics/transistor-basics",
              "label": "2.6",
              "title": "How a Transistor Works",
              "resources": [
                {
                  "title": "How a Transistor Works",
                  "href": "lessons/electronics/transistor-basics.html"
                }
              ]
            },
            {
              "key": "electronics/dc-motor-basics",
              "label": "2.7",
              "title": "How a DC Motor Works",
              "resources": [
                {
                  "title": "How a DC Motor Works",
                  "href": "lessons/electronics/dc-motor-basics.html"
                }
              ]
            },
            {
              "key": "electronics/transistor-dc-motor",
              "label": "2.8",
              "title": "Driving a DC Motor with a Transistor",
              "resources": [
                {
                  "title": "Driving a DC Motor with a Transistor",
                  "href": "lessons/electronics/transistor-dc-motor.html"
                }
              ]
            },
            {
              "key": "electronics/stepper-basics",
              "label": "2.9",
              "title": "Stepper Motors — How They Work",
              "resources": [
                {
                  "title": "Stepper Motors — How They Work",
                  "href": "lessons/electronics/stepper-basics.html"
                }
              ]
            },
            {
              "key": "electronics/servo-basics",
              "label": "2.10",
              "title": "Servo Motors — How They Work",
              "resources": [
                {
                  "title": "Servo Motors — How They Work",
                  "href": "lessons/electronics/servo-basics.html"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "arduino",
      "number": "3",
      "title": "Arduino Programming",
      "description": "Putting Sections 1 and 2 together — writing real code that controls real components.",
      "subsections": [
        {
          "title": "Getting Started",
          "description": null,
          "lessons": [
            {
              "key": "arduino/installing-ide",
              "label": "3.1",
              "title": "Installing the Arduino IDE",
              "resources": [
                {
                  "title": "Installing the Arduino IDE",
                  "href": "lessons/arduino/installing-ide.html"
                }
              ]
            },
            {
              "key": "arduino/pins-explained",
              "label": "3.2",
              "title": "Input and Output Pins Explained",
              "resources": [
                {
                  "title": "Input and Output Pins Explained",
                  "href": "lessons/arduino/pins-explained.html"
                }
              ]
            },
            {
              "key": "arduino/first-program-blink",
              "label": "3.3",
              "title": "Your First Program: Blinking the Built-In LED",
              "resources": [
                {
                  "title": "Your First Program: Blinking the Built-In LED",
                  "href": "lessons/arduino/first-program-blink.html"
                }
              ]
            },
            {
              "key": "arduino/external-led",
              "label": "3.4",
              "title": "Controlling an External LED on a Breadboard",
              "resources": [
                {
                  "title": "Controlling an External LED on a Breadboard",
                  "href": "lessons/arduino/external-led.html"
                }
              ]
            },
            {
              "key": "arduino/switch-interfacing",
              "label": "3.5",
              "title": "Interfacing a Switch",
              "resources": [
                {
                  "title": "Interfacing a Switch",
                  "href": "lessons/arduino/switch-interfacing.html"
                }
              ]
            }
          ]
        },
        {
          "title": "Digital & Analog Output",
          "description": null,
          "lessons": [
            {
              "key": "arduino/7-segment-display",
              "label": "3.6",
              "title": "7-Segment Displays",
              "resources": [
                {
                  "title": "7-Segment Displays",
                  "href": "lessons/arduino/7-segment-display.html"
                }
              ]
            },
            {
              "key": "arduino/lcd1602",
              "label": "3.7",
              "title": "LCD1602 Displays",
              "resources": [
                {
                  "title": "LCD1602 Displays",
                  "href": "lessons/arduino/lcd1602.html"
                }
              ]
            },
            {
              "key": "arduino/rgb-led",
              "label": "3.8",
              "title": "Controlling an RGB LED",
              "resources": [
                {
                  "title": "Controlling an RGB LED",
                  "href": "lessons/arduino/rgb-led.html"
                }
              ]
            }
          ]
        },
        {
          "title": "Analog Input",
          "description": null,
          "lessons": [
            {
              "key": "arduino/potentiometer-led",
              "label": "3.9",
              "title": "Analog Input: Potentiometer-Controlled LED Brightness",
              "resources": [
                {
                  "title": "Analog Input: Potentiometer-Controlled LED Brightness",
                  "href": "lessons/arduino/potentiometer-led.html"
                }
              ]
            }
          ]
        },
        {
          "title": "Motors",
          "description": null,
          "lessons": [
            {
              "key": "arduino/servo",
              "label": "3.10",
              "title": "Servo Motors",
              "resources": [
                {
                  "title": "Servo Motors",
                  "href": "lessons/arduino/servo.html"
                }
              ]
            },
            {
              "key": "arduino/dc-motor-l298n",
              "label": "3.11",
              "title": "Driving a DC Motor with an Arduino (L298N)",
              "resources": [
                {
                  "title": "Driving a DC Motor with an Arduino (L298N)",
                  "href": "lessons/arduino/dc-motor-l298n.html"
                }
              ]
            },
            {
              "key": "arduino/stepper-motor",
              "label": "3.12",
              "title": "Stepper Motors",
              "resources": [
                {
                  "title": "Stepper Motors",
                  "href": "lessons/arduino/stepper-motor.html"
                }
              ]
            }
          ]
        },
        {
          "title": "Sensors",
          "description": null,
          "lessons": [
            {
              "key": "arduino/ir-transmitter-receiver",
              "label": "3.13",
              "title": "Infrared Transmitters and Receivers",
              "resources": [
                {
                  "title": "Infrared Transmitters and Receivers",
                  "href": "lessons/arduino/ir-transmitter-receiver.html"
                }
              ]
            },
            {
              "key": "arduino/hc-sr04-ultrasonic",
              "label": "3.14",
              "title": "Ultrasonic Distance Sensor (HC-SR04)",
              "resources": [
                {
                  "title": "Ultrasonic Distance Sensor (HC-SR04)",
                  "href": "lessons/arduino/hc-sr04-ultrasonic.html"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "vehicle",
      "number": "4",
      "title": "Robotic Vehicle: Building a Line-Follower",
      "description": "The Term 2 group build. These lessons assume you've completed Sections 1–3 — rather than re-explaining a concept, they point back to the relevant lesson above where needed.",
      "subsections": [
        {
          "title": "4.1  Line Sensor Subsystem",
          "description": "Detecting the black tape reliably before worrying about how the vehicle moves.",
          "lessons": [
            {
              "key": "vehicle/ir-refresher",
              "label": "4.1.1",
              "title": "IR Reflectance Sensing Refresher",
              "resources": [
                {
                  "title": "IR Reflectance Sensing Refresher",
                  "href": "lessons/vehicle/ir-refresher.html"
                }
              ]
            },
            {
              "key": "vehicle/multi-sensor-array",
              "label": "4.1.2",
              "title": "Building a Multi-Sensor Array",
              "resources": [
                {
                  "title": "Building a Multi-Sensor Array",
                  "href": "lessons/vehicle/multi-sensor-array.html"
                }
              ]
            },
            {
              "key": "vehicle/lcd-sensor-readout",
              "label": "4.1.3",
              "title": "Live Sensor Readout on an LCD",
              "resources": [
                {
                  "title": "Live Sensor Readout on an LCD",
                  "href": "lessons/vehicle/lcd-sensor-readout.html"
                }
              ]
            },
            {
              "key": "vehicle/sensor-calibration",
              "label": "4.1.4",
              "title": "Calibrating Sensors to the Competition Surface",
              "resources": [
                {
                  "title": "Calibrating Sensors to the Competition Surface",
                  "href": "lessons/vehicle/sensor-calibration.html"
                }
              ]
            }
          ]
        },
        {
          "title": "4.2  Drive & Motor Subsystem",
          "description": "Two motors, two wheels, and the code that makes them steer.",
          "lessons": [
            {
              "key": "vehicle/two-motor-drive",
              "label": "4.2.1",
              "title": "Two-Motor Differential Drive with the L298N",
              "resources": [
                {
                  "title": "Two-Motor Differential Drive with the L298N",
                  "href": "lessons/vehicle/two-motor-drive.html"
                }
              ]
            },
            {
              "key": "vehicle/movement-functions",
              "label": "4.2.2",
              "title": "Basic Movement Functions (forward, stop, turn)",
              "resources": [
                {
                  "title": "Basic Movement Functions (forward, stop, turn)",
                  "href": "lessons/vehicle/movement-functions.html"
                }
              ]
            }
          ]
        },
        {
          "title": "4.3  Control & Decision Logic",
          "description": "Where sensing and driving meet — the actual \"follow the line\" behaviour.",
          "lessons": [
            {
              "key": "vehicle/basic-line-following",
              "label": "4.3.1",
              "title": "Basic Line-Following Logic",
              "resources": [
                {
                  "title": "Basic Line-Following Logic",
                  "href": "lessons/vehicle/basic-line-following.html"
                }
              ]
            },
            {
              "key": "vehicle/rgb-status-indicator",
              "label": "4.3.2",
              "title": "RGB Status Indicator",
              "resources": [
                {
                  "title": "RGB Status Indicator",
                  "href": "lessons/vehicle/rgb-status-indicator.html"
                }
              ]
            },
            {
              "key": "vehicle/proportional-steering",
              "label": "4.3.3",
              "title": "Smoother Steering with Multiple Sensors",
              "resources": [
                {
                  "title": "Smoother Steering with Multiple Sensors",
                  "href": "lessons/vehicle/proportional-steering.html"
                }
              ]
            }
          ]
        },
        {
          "title": "4.4  Assembly & Competition Prep",
          "description": "Putting the vehicle together and getting ready for the end-of-year competition day.",
          "lessons": [
            {
              "key": "vehicle/chassis-assembly",
              "label": "4.4.1",
              "title": "Chassis Assembly and Parts List",
              "resources": [
                {
                  "title": "Chassis Assembly and Parts List",
                  "href": "lessons/vehicle/chassis-assembly.html"
                }
              ]
            },
            {
              "key": "vehicle/testing-competition",
              "label": "4.4.2",
              "title": "Testing, Calibration, and Competition Rules",
              "resources": [
                {
                  "title": "Testing, Calibration, and Competition Rules",
                  "href": "lessons/vehicle/testing-competition.html"
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};
