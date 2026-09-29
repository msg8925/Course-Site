// Cambridge Pseudocode — Site Structure
//
// This file defines every section, subsection, and lesson shown on this
// course's homepage. Edit it via the central admin page.

window.SITE_STRUCTURE = {
  "sections": [
    {
      "id": "foundations",
      "number": "1",
      "title": "Foundations",
      "description": "Conventions, data types, input/output and operators — the building blocks every program uses.",
      "subsections": [
        {
          "title": null,
          "description": null,
          "lessons": [
            {
              "key": "foundations/p01-intro",
              "label": "1",
              "title": "Introduction to Pseudocode & Pseudocode Pro",
              "resources": [
                {
                  "title": "Explainer",
                  "href": "lessons/foundations/p01-intro/explainer.html"
                },
                {
                  "title": "Practice & Pseudocode Pro Tasks",
                  "href": "lessons/foundations/p01-intro/practice.html"
                }
              ]
            },
            {
              "key": "foundations/p02-data-types",
              "label": "2",
              "title": "Data Types, Variables & Constants",
              "resources": [
                {
                  "title": "Explainer",
                  "href": "lessons/foundations/p02-data-types/explainer.html"
                },
                {
                  "title": "Practice & Pseudocode Pro Tasks",
                  "href": "lessons/foundations/p02-data-types/practice.html"
                }
              ]
            },
            {
              "key": "foundations/p03-input-output",
              "label": "3",
              "title": "Input & Output",
              "resources": [
                {
                  "title": "Explainer",
                  "href": "lessons/foundations/p03-input-output/explainer.html"
                },
                {
                  "title": "Practice & Pseudocode Pro Tasks",
                  "href": "lessons/foundations/p03-input-output/practice.html"
                }
              ]
            },
            {
              "key": "foundations/p04-arithmetic",
              "label": "4",
              "title": "Arithmetic Operators",
              "resources": []
            },
            {
              "key": "foundations/p05-boolean",
              "label": "5",
              "title": "Relational & Boolean Operators",
              "resources": []
            }
          ]
        }
      ]
    },
    {
      "id": "control",
      "number": "2",
      "title": "Control Structures",
      "description": "Selection and iteration: making decisions and repeating steps.",
      "subsections": [
        {
          "title": null,
          "description": null,
          "lessons": [
            {
              "key": "control/p06-if",
              "label": "6",
              "title": "Selection: IF Statements",
              "resources": []
            },
            {
              "key": "control/p07-case",
              "label": "7",
              "title": "Selection: CASE Statements",
              "resources": []
            },
            {
              "key": "control/p08-for",
              "label": "8",
              "title": "Count-Controlled Loops: FOR",
              "resources": []
            },
            {
              "key": "control/p09-while",
              "label": "9",
              "title": "Pre-Condition Loops: WHILE",
              "resources": []
            },
            {
              "key": "control/p10-repeat",
              "label": "10",
              "title": "Post-Condition Loops: REPEAT…UNTIL",
              "resources": []
            },
            {
              "key": "control/p11-choosing-loops",
              "label": "11",
              "title": "Choosing the Right Loop & Nested Loops",
              "resources": []
            }
          ]
        }
      ]
    },
    {
      "id": "strings",
      "number": "3",
      "title": "Strings",
      "description": "Working with text: string handling and converting between characters and numbers.",
      "subsections": [
        {
          "title": null,
          "description": null,
          "lessons": [
            {
              "key": "strings/p12-string-handling",
              "label": "12",
              "title": "String Handling",
              "resources": []
            },
            {
              "key": "strings/p13-chars-conversion",
              "label": "13",
              "title": "Characters & Type Conversion (AS)",
              "resources": []
            }
          ]
        }
      ]
    },
    {
      "id": "algorithms",
      "number": "4",
      "title": "Standard Algorithms",
      "description": "The routines examiners expect you to write from memory.",
      "subsections": [
        {
          "title": null,
          "description": null,
          "lessons": [
            {
              "key": "algorithms/p14-totalling-counting",
              "label": "14",
              "title": "Totalling & Counting",
              "resources": []
            },
            {
              "key": "algorithms/p15-max-min-average",
              "label": "15",
              "title": "Maximum, Minimum & Average",
              "resources": []
            },
            {
              "key": "algorithms/p16-validation",
              "label": "16",
              "title": "Validation Routines (IGCSE)",
              "resources": []
            }
          ]
        }
      ]
    },
    {
      "id": "arrays",
      "number": "5",
      "title": "Arrays",
      "description": "Storing lists and tables of data, then searching and sorting them.",
      "subsections": [
        {
          "title": null,
          "description": null,
          "lessons": [
            {
              "key": "arrays/p17-arrays-1d",
              "label": "17",
              "title": "1D Arrays",
              "resources": []
            },
            {
              "key": "arrays/p18-arrays-2d",
              "label": "18",
              "title": "2D Arrays",
              "resources": []
            },
            {
              "key": "arrays/p19-linear-search",
              "label": "19",
              "title": "Linear Search",
              "resources": []
            },
            {
              "key": "arrays/p20-bubble-sort",
              "label": "20",
              "title": "Bubble Sort",
              "resources": []
            }
          ]
        }
      ]
    },
    {
      "id": "subroutines",
      "number": "6",
      "title": "Subroutines",
      "description": "Breaking programs into procedures and functions.",
      "subsections": [
        {
          "title": null,
          "description": null,
          "lessons": [
            {
              "key": "subroutines/p21-procedures",
              "label": "21",
              "title": "Procedures",
              "resources": []
            },
            {
              "key": "subroutines/p22-functions",
              "label": "22",
              "title": "Functions",
              "resources": []
            },
            {
              "key": "subroutines/p23-scope",
              "label": "23",
              "title": "Local & Global Variables",
              "resources": []
            },
            {
              "key": "subroutines/p24-byval-byref",
              "label": "24",
              "title": "BYVAL & BYREF (AS)",
              "resources": []
            }
          ]
        }
      ]
    },
    {
      "id": "data-files",
      "number": "7",
      "title": "Data Structures & Files",
      "description": "Records, text files and array-based data structures.",
      "subsections": [
        {
          "title": null,
          "description": null,
          "lessons": [
            {
              "key": "data-files/p25-records",
              "label": "25",
              "title": "Records (AS)",
              "resources": []
            },
            {
              "key": "data-files/p26-text-files",
              "label": "26",
              "title": "Text Files",
              "resources": []
            },
            {
              "key": "data-files/p27-stacks-queues",
              "label": "27",
              "title": "Stacks & Queues (AS)",
              "resources": []
            },
            {
              "key": "data-files/p28-linked-lists",
              "label": "28",
              "title": "Linked Lists (AS)",
              "resources": []
            }
          ]
        }
      ]
    },
    {
      "id": "exam",
      "number": "8",
      "title": "Design, Testing & Exam Technique",
      "description": "Tracing, debugging, testing and tackling the long programming question.",
      "subsections": [
        {
          "title": null,
          "description": null,
          "lessons": [
            {
              "key": "exam/p29-trace-tables",
              "label": "29",
              "title": "Trace Tables & Dry-Running",
              "resources": []
            },
            {
              "key": "exam/p30-fixing-errors",
              "label": "30",
              "title": "Finding & Fixing Errors",
              "resources": []
            },
            {
              "key": "exam/p31-test-data",
              "label": "31",
              "title": "Test Data",
              "resources": []
            },
            {
              "key": "exam/p32-scenario-questions",
              "label": "32",
              "title": "Tackling the Long Scenario Question",
              "resources": []
            }
          ]
        }
      ]
    },
    {
      "id": "a2",
      "number": "9",
      "title": "A2 Extension",
      "description": "A Level (Paper 4) topics — to be built later.",
      "subsections": [
        {
          "title": null,
          "description": null,
          "lessons": [
            {
              "key": "a2/p33-binary-insertion",
              "label": "33",
              "title": "Binary Search & Insertion Sort",
              "resources": []
            },
            {
              "key": "a2/p34-recursion",
              "label": "34",
              "title": "Recursion",
              "resources": []
            },
            {
              "key": "a2/p35-user-types",
              "label": "35",
              "title": "Enumerated, Pointer & Set Types",
              "resources": []
            },
            {
              "key": "a2/p36-random-files",
              "label": "36",
              "title": "Random Files",
              "resources": []
            },
            {
              "key": "a2/p37-oop",
              "label": "37",
              "title": "Object-Oriented Programming",
              "resources": []
            },
            {
              "key": "a2/p38-exceptions",
              "label": "38",
              "title": "Exception Handling",
              "resources": []
            }
          ]
        }
      ]
    }
  ]
};
