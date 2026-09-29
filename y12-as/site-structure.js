// Site Structure — now with per-lesson "resources" (one or more files/links
// per lesson, each with its own title + href). The lock in lessons-config.js
// still applies at the LESSON level — all resources inside a lesson share
// that one lock state.

window.SITE_STRUCTURE = {
  "sections": [
    {
      "id": "getting-started",
      "number": "1",
      "title": "Getting Started",
      "description": "Course introduction and a baseline check before Topic 1 begins.",
      "subsections": [
        {
          "title": null,
          "description": null,
          "lessons": [
            {
              "key": "getting-started/course-overview",
              "label": "1.1",
              "title": "Course Overview and Assessment Structure",
              "resources": [
                {
                  "title": "Course Overview and Assessment Structure",
                  "href": "lessons/getting-started/course-overview.html"
                }
              ]
            },
            {
              "key": "getting-started/diagnostic-python-recap",
              "label": "1.2",
              "title": "Diagnostic: Python Recap",
              "resources": [
                {
                  "title": "Diagnostic: Python Recap",
                  "href": "lessons/getting-started/diagnostic-python-recap.html"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "strand-a",
      "number": "2",
      "title": "Strand A — Paper 1: Theory Fundamentals",
      "description": "Topics 1–8. Each topic is taught as one coherent block, ending with a topic test.",
      "subsections": [
        {
          "title": "Topic 1 — Information Representation",
          "description": null,
          "lessons": [
            {
              "key": "strand-a/t1-binary-arithmetic",
              "label": "1.1",
              "title": "Binary Arithmetic: Addition, Overflow, Two's Complement",
              "resources": [
                {
                  "title": "Explainer: Binary Arithmetic",
                  "href": "lessons/strand-a/t1-binary-arithmetic/explainer.html"
                },
                {
                  "title": "Practice Questions",
                  "href": "lessons/strand-a/t1-binary-arithmetic/practice.html"
                }
              ]
            },
            {
              "key": "strand-a/t1-number-systems",
              "label": "1.2",
              "title": "Number Systems: Denary, Binary and Hexadecimal Conversions",
              "resources": [
                {
                  "title": "Explainer",
                  "href": "lessons/strand-a/t1-number-systems/explainer.html"
                },
                {
                  "title": "Practice Questions",
                  "href": "lessons/strand-a/t1-number-systems/practice.html"
                }
              ]
            },
            {
              "key": "strand-a/t1-binary-prefixes-ascii",
              "label": "1.3",
              "title": "Binary Prefixes and Introducing ASCII",
              "resources": [
                {
                  "title": "Explainer",
                  "href": "lessons/strand-a/t1-binary-prefixes-ascii/explainer.html"
                },
                {
                  "title": "Practice Questions",
                  "href": "lessons/strand-a/t1-binary-prefixes-ascii/practice.html"
                }
              ]
            },
            {
              "key": "strand-a/t1-extended-ascii-unicode",
              "label": "1.4",
              "title": "Extended ASCII and Unicode",
              "resources": [
                {
                  "title": "Explainer",
                  "href": "lessons/strand-a/t1-extended-ascii-unicode/explainer.html"
                },
                {
                  "title": "Practice Questions",
                  "href": "lessons/strand-a/t1-extended-ascii-unicode/practice.html"
                }
              ]
            },
            {
              "key": "strand-a/t1-sound-representation",
              "label": "1.5",
              "title": "Sound Representation",
              "resources": [
                {
                  "title": "Explainer",
                  "href": "lessons/strand-a/t1-sound-representation/explainer.html"
                },
                {
                  "title": "Practice Questions",
                  "href": "lessons/strand-a/t1-sound-representation/practice.html"
                }
              ]
            },
            {
              "key": "strand-a/t1-data-compression",
              "label": "1.6",
              "title": "Data Compression: Lossy vs Lossless, RLE",
              "resources": [
                {
                  "title": "Explainer",
                  "href": "lessons/strand-a/t1-data-compression/explainer.html"
                },
                {
                  "title": "Practice Questions",
                  "href": "lessons/strand-a/t1-data-compression/practice.html"
                }
              ]
            },
            {
              "key": "strand-a/t1-image-representation",
              "label": "1.7",
              "title": "Image Representation",
              "resources": [
                {
                  "title": "Explainer",
                  "href": "lessons/strand-a/t1-image-representation/explainer.html"
                },
                {
                  "title": "Practice Questions",
                  "href": "lessons/strand-a/t1-image-representation/practice.html"
                }
              ]
            },
            {
              "key": "strand-a/t1-bcd",
              "label": "1.8",
              "title": "Binary Coded Decimal (BCD)",
              "resources": [
                {
                  "title": "Explainer",
                  "href": "lessons/strand-a/t1-bcd/explainer.html"
                },
                {
                  "title": "Practice Questions",
                  "href": "lessons/strand-a/t1-bcd/practice.html"
                }
              ]
            },
            {
              "key": "strand-a/t1-vector-graphics",
              "label": "1.9",
              "title": "Vector Graphics",
              "resources": [
                {
                  "title": "Explainer",
                  "href": "lessons/strand-a/t1-vector-graphics/explainer.html"
                },
                {
                  "title": "Practice Questions",
                  "href": "lessons/strand-a/t1-vector-graphics/practice.html"
                }
              ]
            },
            {
              "key": "strand-a/t1-compression-consolidation",
              "label": "1.10",
              "title": "Compression: Exam-Style Practice",
              "resources": [
                {
                  "title": "Explainer",
                  "href": "lessons/strand-a/t1-compression-consolidation/explainer.html"
                },
                {
                  "title": "Practice Questions",
                  "href": "lessons/strand-a/t1-compression-consolidation/practice.html"
                }
              ]
            },
            {
              "key": "strand-a/t1-test",
              "label": "1.11",
              "title": "Topic 1 Test",
              "resources": [
                {
                  "title": "Explainer",
                  "href": "lessons/strand-a/t1-test/explainer.html"
                },
                {
                  "title": "Practice Questions",
                  "href": "lessons/strand-a/t1-test/practice.html"
                }
              ]
            }
          ]
        },
        {
          "title": "Topic 2 — Communication and Internet Technologies",
          "description": null,
          "lessons": [
            {
              "key": "strand-a/t2-network-hardware",
              "label": "2.1",
              "title": "Network Hardware: NIC, MAC/IP Addressing, Routers",
              "resources": [
                {
                  "title": "Explainer",
                  "href": "lessons/strand-a/t2-network-hardware/explainer.html"
                },
                {
                  "title": "Practice Questions",
                  "href": "lessons/strand-a/t2-network-hardware/practice.html"
                }
              ]
            },
            {
              "key": "strand-a/t2-protocols-packet-switching",
              "label": "2.2",
              "title": "Network Protocols and Packet Switching",
              "resources": [
                {
                  "title": "Explainer",
                  "href": "lessons/strand-a/t2-protocols-packet-switching/explainer.html"
                },
                {
                  "title": "Practice Questions",
                  "href": "lessons/strand-a/t2-protocols-packet-switching/practice.html"
                }
              ]
            },
            {
              "key": "strand-a/t2-network-types-topologies",
              "label": "2.3",
              "title": "Network Types and Topologies",
              "resources": [
                {
                  "title": "Explainer",
                  "href": "lessons/strand-a/t2-network-types-topologies/explainer.html"
                },
                {
                  "title": "Practice Questions",
                  "href": "lessons/strand-a/t2-network-types-topologies/practice.html"
                }
              ]
            },
            {
              "key": "strand-a/t2-cloud-transmission-media",
              "label": "2.4",
              "title": "Cloud Computing and Transmission Media",
              "resources": [
                {
                  "title": "Explainer",
                  "href": "lessons/strand-a/t2-cloud-transmission-media/explainer.html"
                },
                {
                  "title": "Practice Questions",
                  "href": "lessons/strand-a/t2-cloud-transmission-media/practice.html"
                }
              ]
            },
            {
              "key": "strand-a/t2-client-server-p2p",
              "label": "2.5",
              "title": "Client-Server, Peer-to-Peer, and Thin/Thick Client Models",
              "resources": [
                {
                  "title": "Explainer",
                  "href": "lessons/strand-a/t2-client-server-p2p/explainer.html"
                },
                {
                  "title": "Practice Questions",
                  "href": "lessons/strand-a/t2-client-server-p2p/practice.html"
                }
              ]
            },
            {
              "key": "strand-a/t2-lan-ethernet-www",
              "label": "2.6",
              "title": "LAN/Internet Hardware, Ethernet, and the WWW",
              "resources": [
                {
                  "title": "LAN/Internet Hardware, Ethernet, and the WWW",
                  "href": "lessons/strand-a/t2-lan-ethernet-www.html"
                }
              ]
            },
            {
              "key": "strand-a/t2-test",
              "label": "2.7",
              "title": "Topic 2 Test",
              "resources": [
                {
                  "title": "Topic 2 Test",
                  "href": "lessons/strand-a/t2-test.html"
                }
              ]
            }
          ]
        },
        {
          "title": "Topic 3 — Hardware",
          "description": null,
          "lessons": [
            {
              "key": "strand-a/t3-truth-tables-logic-circuits",
              "label": "3.1",
              "title": "Truth Tables and Logic Circuits",
              "resources": [
                {
                  "title": "Explainer",
                  "href": "lessons/strand-a/t3-truth-tables-logic-circuits/explainer.html"
                },
                {
                  "title": "Practice Questions",
                  "href": "lessons/strand-a/t3-truth-tables-logic-circuits/practice.html"
                }
              ]
            },
            {
              "key": "strand-a/t3-output-devices",
              "label": "3.2",
              "title": "Output Devices",
              "resources": [
                {
                  "title": "Output Devices",
                  "href": "lessons/strand-a/t3-output-devices.html"
                }
              ]
            },
            {
              "key": "strand-a/t3-secondary-cloud-storage",
              "label": "3.3",
              "title": "Secondary and Cloud Storage",
              "resources": [
                {
                  "title": "Secondary and Cloud Storage",
                  "href": "lessons/strand-a/t3-secondary-cloud-storage.html"
                }
              ]
            },
            {
              "key": "strand-a/t3-embedded-systems",
              "label": "3.4",
              "title": "Embedded Systems, Monitoring and Control",
              "resources": [
                {
                  "title": "Embedded Systems, Monitoring and Control",
                  "href": "lessons/strand-a/t3-embedded-systems.html"
                }
              ]
            },
            {
              "key": "strand-a/t3-input-devices-sensors",
              "label": "3.5",
              "title": "Input Devices and Sensors",
              "resources": [
                {
                  "title": "Input Devices and Sensors",
                  "href": "lessons/strand-a/t3-input-devices-sensors.html"
                }
              ]
            },
            {
              "key": "strand-a/t3-primary-storage",
              "label": "3.6",
              "title": "Primary Storage: RAM, ROM and Cache",
              "resources": [
                {
                  "title": "Primary Storage: RAM, ROM and Cache",
                  "href": "lessons/strand-a/t3-primary-storage.html"
                }
              ]
            },
            {
              "key": "strand-a/t3-memory-types-os-utility",
              "label": "3.7",
              "title": "Memory Types and OS Utility Software",
              "resources": [
                {
                  "title": "Memory Types and OS Utility Software",
                  "href": "lessons/strand-a/t3-memory-types-os-utility.html"
                }
              ]
            },
            {
              "key": "strand-a/t3-test",
              "label": "3.8",
              "title": "Topic 3 Test",
              "resources": [
                {
                  "title": "Topic 3 Test",
                  "href": "lessons/strand-a/t3-test.html"
                }
              ]
            }
          ]
        },
        {
          "title": "Topic 4 — Processor Fundamentals",
          "description": null,
          "lessons": [
            {
              "key": "strand-a/t4-systems-overview-logic-gates",
              "label": "4.1",
              "title": "Computer Systems Overview and Logic Gates (Recap)",
              "resources": [
                {
                  "title": "Computer Systems Overview and Logic Gates (Recap)",
                  "href": "lessons/strand-a/t4-systems-overview-logic-gates.html"
                }
              ]
            },
            {
              "key": "strand-a/t4-cpu-registers-buses",
              "label": "4.2",
              "title": "CPU Architecture: Registers and Buses",
              "resources": [
                {
                  "title": "CPU Architecture: Registers and Buses",
                  "href": "lessons/strand-a/t4-cpu-registers-buses.html"
                }
              ]
            },
            {
              "key": "strand-a/t4-cpu-performance",
              "label": "4.3",
              "title": "Factors Affecting CPU Performance",
              "resources": [
                {
                  "title": "Factors Affecting CPU Performance",
                  "href": "lessons/strand-a/t4-cpu-performance.html"
                }
              ]
            },
            {
              "key": "strand-a/t4-assembly-writing-programs",
              "label": "4.4",
              "title": "Assembly Language: Writing Simple Programs",
              "resources": [
                {
                  "title": "Assembly Language: Writing Simple Programs",
                  "href": "lessons/strand-a/t4-assembly-writing-programs.html"
                }
              ]
            },
            {
              "key": "strand-a/t4-bit-manipulation",
              "label": "4.5",
              "title": "Bit Manipulation",
              "resources": [
                {
                  "title": "Bit Manipulation",
                  "href": "lessons/strand-a/t4-bit-manipulation.html"
                }
              ]
            },
            {
              "key": "strand-a/t4-fde-cycle",
              "label": "4.6",
              "title": "The Fetch-Decode-Execute Cycle",
              "resources": [
                {
                  "title": "The Fetch-Decode-Execute Cycle",
                  "href": "lessons/strand-a/t4-fde-cycle.html"
                }
              ]
            },
            {
              "key": "strand-a/t4-assembly-instruction-sets",
              "label": "4.7",
              "title": "Assembly Language: Instruction Sets and Addressing Modes",
              "resources": [
                {
                  "title": "Assembly Language: Instruction Sets and Addressing Modes",
                  "href": "lessons/strand-a/t4-assembly-instruction-sets.html"
                }
              ]
            },
            {
              "key": "strand-a/t4-assembly-loops-conditionals",
              "label": "4.8",
              "title": "Assembly Language: Loops and Conditionals",
              "resources": [
                {
                  "title": "Assembly Language: Loops and Conditionals",
                  "href": "lessons/strand-a/t4-assembly-loops-conditionals.html"
                }
              ]
            },
            {
              "key": "strand-a/t4-interrupts",
              "label": "4.9",
              "title": "Interrupts and Interrupt Handling",
              "resources": [
                {
                  "title": "Interrupts and Interrupt Handling",
                  "href": "lessons/strand-a/t4-interrupts.html"
                }
              ]
            },
            {
              "key": "strand-a/t4-test",
              "label": "4.10",
              "title": "Topic 4 Test",
              "resources": [
                {
                  "title": "Topic 4 Test",
                  "href": "lessons/strand-a/t4-test.html"
                }
              ]
            }
          ]
        },
        {
          "title": "Topic 5 — System Software",
          "description": null,
          "lessons": [
            {
              "key": "strand-a/t5-os-memory-scheduling",
              "label": "5.1",
              "title": "Operating System Functions: Memory and Scheduling",
              "resources": [
                {
                  "title": "Operating System Functions: Memory and Scheduling",
                  "href": "lessons/strand-a/t5-os-memory-scheduling.html"
                }
              ]
            },
            {
              "key": "strand-a/t5-language-translators",
              "label": "5.2",
              "title": "Language Translators: Compiler vs Interpreter vs Assembler",
              "resources": [
                {
                  "title": "Language Translators: Compiler vs Interpreter vs Assembler",
                  "href": "lessons/strand-a/t5-language-translators.html"
                }
              ]
            },
            {
              "key": "strand-a/t5-stages-of-compilation",
              "label": "5.3",
              "title": "Stages of Compilation",
              "resources": [
                {
                  "title": "Stages of Compilation",
                  "href": "lessons/strand-a/t5-stages-of-compilation.html"
                }
              ]
            },
            {
              "key": "strand-a/t5-test",
              "label": "5.4",
              "title": "Topic 5 Test",
              "resources": [
                {
                  "title": "Topic 5 Test",
                  "href": "lessons/strand-a/t5-test.html"
                }
              ]
            }
          ]
        },
        {
          "title": "Topic 6 — Security, Privacy and Data Integrity",
          "description": null,
          "lessons": [
            {
              "key": "strand-a/t6-encryption",
              "label": "6.1",
              "title": "Encryption",
              "resources": [
                {
                  "title": "Encryption",
                  "href": "lessons/strand-a/t6-encryption.html"
                }
              ]
            },
            {
              "key": "strand-a/t6-security-countermeasures",
              "label": "6.2",
              "title": "Security Countermeasures",
              "resources": [
                {
                  "title": "Security Countermeasures",
                  "href": "lessons/strand-a/t6-security-countermeasures.html"
                }
              ]
            },
            {
              "key": "strand-a/t6-privacy-data-protection",
              "label": "6.3",
              "title": "Privacy and Data Protection",
              "resources": [
                {
                  "title": "Privacy and Data Protection",
                  "href": "lessons/strand-a/t6-privacy-data-protection.html"
                }
              ]
            },
            {
              "key": "strand-a/t6-error-detection",
              "label": "6.4",
              "title": "Error Detection: Parity and Checksums",
              "resources": [
                {
                  "title": "Error Detection: Parity and Checksums",
                  "href": "lessons/strand-a/t6-error-detection.html"
                }
              ]
            },
            {
              "key": "strand-a/t6-data-security-threats",
              "label": "6.5",
              "title": "Data Security Threats",
              "resources": [
                {
                  "title": "Data Security Threats",
                  "href": "lessons/strand-a/t6-data-security-threats.html"
                }
              ]
            },
            {
              "key": "strand-a/t6-validation-verification",
              "label": "6.6",
              "title": "Data Integrity: Validation vs Verification",
              "resources": [
                {
                  "title": "Data Integrity: Validation vs Verification",
                  "href": "lessons/strand-a/t6-validation-verification.html"
                }
              ]
            },
            {
              "key": "strand-a/t6-test",
              "label": "6.7",
              "title": "Topic 6 Test",
              "resources": [
                {
                  "title": "Topic 6 Test",
                  "href": "lessons/strand-a/t6-test.html"
                }
              ]
            }
          ]
        },
        {
          "title": "Topic 7 — Ethics and Ownership",
          "description": null,
          "lessons": [
            {
              "key": "strand-a/t7-ethics-in-computing",
              "label": "7.1",
              "title": "Ethics in Computing",
              "resources": [
                {
                  "title": "Ethics in Computing",
                  "href": "lessons/strand-a/t7-ethics-in-computing.html"
                }
              ]
            },
            {
              "key": "strand-a/t7-artificial-intelligence",
              "label": "7.2",
              "title": "Artificial Intelligence",
              "resources": [
                {
                  "title": "Artificial Intelligence",
                  "href": "lessons/strand-a/t7-artificial-intelligence.html"
                }
              ]
            },
            {
              "key": "strand-a/t7-ownership-copyright-licensing",
              "label": "7.3",
              "title": "Ownership: Copyright, IP and Licensing",
              "resources": [
                {
                  "title": "Ownership: Copyright, IP and Licensing",
                  "href": "lessons/strand-a/t7-ownership-copyright-licensing.html"
                }
              ]
            },
            {
              "key": "strand-a/t7-test",
              "label": "7.4",
              "title": "Topic 7 Test",
              "resources": [
                {
                  "title": "Topic 7 Test",
                  "href": "lessons/strand-a/t7-test.html"
                }
              ]
            }
          ]
        },
        {
          "title": "Topic 8 — Databases",
          "description": null,
          "lessons": [
            {
              "key": "strand-a/t8-er-modelling",
              "label": "8.1",
              "title": "Entity-Relationship Modelling",
              "resources": [
                {
                  "title": "Entity-Relationship Modelling",
                  "href": "lessons/strand-a/t8-er-modelling.html"
                }
              ]
            },
            {
              "key": "strand-a/t8-normalisation-3nf",
              "label": "8.2",
              "title": "Normalisation: Third Normal Form",
              "resources": [
                {
                  "title": "Normalisation: Third Normal Form",
                  "href": "lessons/strand-a/t8-normalisation-3nf.html"
                }
              ]
            },
            {
              "key": "strand-a/t8-sql-join",
              "label": "8.3",
              "title": "SQL: JOIN Across Tables",
              "resources": [
                {
                  "title": "SQL: JOIN Across Tables",
                  "href": "lessons/strand-a/t8-sql-join.html"
                }
              ]
            },
            {
              "key": "strand-a/t8-sql-aggregate-groupby",
              "label": "8.4",
              "title": "SQL: Aggregate Functions and GROUP BY",
              "resources": [
                {
                  "title": "SQL: Aggregate Functions and GROUP BY",
                  "href": "lessons/strand-a/t8-sql-aggregate-groupby.html"
                }
              ]
            },
            {
              "key": "strand-a/t8-database-concepts",
              "label": "8.5",
              "title": "Database Concepts: Entities, Attributes and Keys",
              "resources": [
                {
                  "title": "Database Concepts: Entities, Attributes and Keys",
                  "href": "lessons/strand-a/t8-database-concepts.html"
                }
              ]
            },
            {
              "key": "strand-a/t8-ddl-create",
              "label": "8.6",
              "title": "DDL Part 1: CREATE DATABASE and CREATE TABLE",
              "resources": [
                {
                  "title": "DDL Part 1: CREATE DATABASE and CREATE TABLE",
                  "href": "lessons/strand-a/t8-ddl-create.html"
                }
              ]
            },
            {
              "key": "strand-a/t8-normalisation-1nf-2nf",
              "label": "8.7",
              "title": "Normalisation: First and Second Normal Form",
              "resources": [
                {
                  "title": "Normalisation: First and Second Normal Form",
                  "href": "lessons/strand-a/t8-normalisation-1nf-2nf.html"
                }
              ]
            },
            {
              "key": "strand-a/t8-sql-select-where",
              "label": "8.8",
              "title": "SQL: SELECT and WHERE",
              "resources": [
                {
                  "title": "SQL: SELECT and WHERE",
                  "href": "lessons/strand-a/t8-sql-select-where.html"
                }
              ]
            },
            {
              "key": "strand-a/t8-sql-insert-update-delete",
              "label": "8.9",
              "title": "SQL: INSERT, UPDATE, DELETE",
              "resources": [
                {
                  "title": "SQL: INSERT, UPDATE, DELETE",
                  "href": "lessons/strand-a/t8-sql-insert-update-delete.html"
                }
              ]
            },
            {
              "key": "strand-a/t8-dbms-role-integrity",
              "label": "8.10",
              "title": "DBMS Role and Data Integrity in Databases",
              "resources": [
                {
                  "title": "DBMS Role and Data Integrity in Databases",
                  "href": "lessons/strand-a/t8-dbms-role-integrity.html"
                }
              ]
            },
            {
              "key": "strand-a/t8-ddl-alter-keys",
              "label": "8.11",
              "title": "DDL Part 2: ALTER TABLE and Keys",
              "resources": [
                {
                  "title": "DDL Part 2: ALTER TABLE and Keys",
                  "href": "lessons/strand-a/t8-ddl-alter-keys.html"
                }
              ]
            },
            {
              "key": "strand-a/t8-test",
              "label": "8.12",
              "title": "Topic 8 Test",
              "resources": [
                {
                  "title": "Topic 8 Test",
                  "href": "lessons/strand-a/t8-test.html"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "strand-b",
      "number": "3",
      "title": "Strand B — Paper 2: Problem-Solving and Programming",
      "description": "Topics 9–12. Delivered alongside Strand A throughout the year — grouped here by topic for coherent reference, rather than by the week each session happened to fall in.",
      "subsections": [
        {
          "title": "Topic 9 — Computational Thinking and Algorithm Design",
          "description": null,
          "lessons": [
            {
              "key": "strand-b/t9-computational-thinking",
              "label": "9.1",
              "title": "Computational Thinking Skills",
              "resources": [
                {
                  "title": "Explainer",
                  "href": "lessons/strand-b/t9-computational-thinking/explainer.html"
                },
                {
                  "title": "Practice Questions",
                  "href": "lessons/strand-b/t9-computational-thinking/practice.html"
                }
              ]
            },
            {
              "key": "strand-b/t9-pseudocode-conventions",
              "label": "9.2",
              "title": "Algorithm Design: Pseudocode Conventions",
              "resources": [
                {
                  "title": "Explainer",
                  "href": "lessons/strand-b/t9-pseudocode-conventions/explainer.html"
                },
                {
                  "title": "Practice Questions",
                  "href": "lessons/strand-b/t9-pseudocode-conventions/practice.html"
                }
              ]
            },
            {
              "key": "strand-b/t9-flowcharts-structure-diagrams",
              "label": "9.3",
              "title": "Algorithm Design: Flowcharts and Structure Diagrams",
              "resources": [
                {
                  "title": "Explainer",
                  "href": "lessons/strand-b/t9-flowcharts-structure-diagrams/explainer.html"
                },
                {
                  "title": "Practice Questions",
                  "href": "lessons/strand-b/t9-flowcharts-structure-diagrams/practice.html"
                }
              ]
            }
          ]
        },
        {
          "title": "Topic 10 — Data Types and Structures",
          "description": null,
          "lessons": [
            {
              "key": "strand-b/t10-records",
              "label": "10.1",
              "title": "Records and User-Defined Data Types",
              "resources": [
                {
                  "title": "Explainer",
                  "href": "lessons/strand-b/t10-records/explainer.html"
                },
                {
                  "title": "Practice Questions",
                  "href": "lessons/strand-b/t10-records/practice.html"
                }
              ]
            },
            {
              "key": "strand-b/t10-file-handling-read-write",
              "label": "10.2",
              "title": "File Handling: Reading and Writing Text Files",
              "resources": [
                {
                  "title": "Explainer",
                  "href": "lessons/strand-b/t10-file-handling-read-write/explainer.html"
                },
                {
                  "title": "Practice Questions",
                  "href": "lessons/strand-b/t10-file-handling-read-write/practice.html"
                }
              ]
            },
            {
              "key": "strand-b/t10-file-handling-structured",
              "label": "10.3",
              "title": "File Handling: Structured File Data",
              "resources": [
                {
                  "title": "File Handling: Structured File Data",
                  "href": "lessons/strand-b/t10-file-handling-structured.html"
                }
              ]
            },
            {
              "key": "strand-b/t10-stacks-queues",
              "label": "10.4",
              "title": "Stacks and Queues",
              "resources": [
                {
                  "title": "Stacks and Queues",
                  "href": "lessons/strand-b/t10-stacks-queues.html"
                }
              ]
            },
            {
              "key": "strand-b/t10-adt-arrays",
              "label": "10.5",
              "title": "Implementing Abstract Data Types Using Arrays",
              "resources": [
                {
                  "title": "Implementing Abstract Data Types Using Arrays",
                  "href": "lessons/strand-b/t10-adt-arrays.html"
                }
              ]
            },
            {
              "key": "strand-b/t10-linked-lists",
              "label": "10.6",
              "title": "Linked Lists",
              "resources": [
                {
                  "title": "Linked Lists",
                  "href": "lessons/strand-b/t10-linked-lists.html"
                }
              ]
            }
          ]
        },
        {
          "title": "Topic 11 — Programming",
          "description": null,
          "lessons": [
            {
              "key": "strand-b/t11-selection",
              "label": "11.1",
              "title": "Selection: Pseudocode and Python",
              "resources": [
                {
                  "title": "Explainer",
                  "href": "lessons/strand-b/t11-selection/explainer.html"
                },
                {
                  "title": "Practice Questions",
                  "href": "lessons/strand-b/t11-selection/practice.html"
                }
              ]
            },
            {
              "key": "strand-b/t11-iteration",
              "label": "11.2",
              "title": "Iteration: Pseudocode and Python",
              "resources": [
                {
                  "title": "Explainer",
                  "href": "lessons/strand-b/t11-iteration/explainer.html"
                },
                {
                  "title": "Practice Questions",
                  "href": "lessons/strand-b/t11-iteration/practice.html"
                }
              ]
            },
            {
              "key": "strand-b/t11-subroutines-procedures",
              "label": "11.3",
              "title": "Subroutines: Procedures with Parameters",
              "resources": [
                {
                  "title": "Explainer",
                  "href": "lessons/strand-b/t11-subroutines-procedures/explainer.html"
                },
                {
                  "title": "Practice Questions",
                  "href": "lessons/strand-b/t11-subroutines-procedures/practice.html"
                }
              ]
            },
            {
              "key": "strand-b/t11-subroutines-functions",
              "label": "11.4",
              "title": "Subroutines: Functions with Parameters",
              "resources": [
                {
                  "title": "Explainer",
                  "href": "lessons/strand-b/t11-subroutines-functions/explainer.html"
                },
                {
                  "title": "Practice Questions",
                  "href": "lessons/strand-b/t11-subroutines-functions/practice.html"
                }
              ]
            },
            {
              "key": "strand-b/t11-arrays-1d",
              "label": "11.5",
              "title": "Arrays: 1D Declaration and Use",
              "resources": [
                {
                  "title": "Explainer",
                  "href": "lessons/strand-b/t11-arrays-1d/explainer.html"
                },
                {
                  "title": "Practice Questions",
                  "href": "lessons/strand-b/t11-arrays-1d/practice.html"
                }
              ]
            },
            {
              "key": "strand-b/t11-arrays-2d",
              "label": "11.6",
              "title": "Arrays: 2D Declaration and Use",
              "resources": [
                {
                  "title": "Explainer",
                  "href": "lessons/strand-b/t11-arrays-2d/explainer.html"
                },
                {
                  "title": "Practice Questions",
                  "href": "lessons/strand-b/t11-arrays-2d/practice.html"
                }
              ]
            },
            {
              "key": "strand-b/t11-structured-modularity",
              "label": "11.7",
              "title": "Structured Programming: Modularity",
              "resources": [
                {
                  "title": "Structured Programming: Modularity",
                  "href": "lessons/strand-b/t11-structured-modularity.html"
                }
              ]
            },
            {
              "key": "strand-b/t11-structured-maintainable",
              "label": "11.8",
              "title": "Structured Programming: Maintainable Code",
              "resources": [
                {
                  "title": "Structured Programming: Maintainable Code",
                  "href": "lessons/strand-b/t11-structured-maintainable.html"
                }
              ]
            },
            {
              "key": "strand-b/t11-string-handling",
              "label": "11.9",
              "title": "String Handling Routines",
              "resources": [
                {
                  "title": "String Handling Routines",
                  "href": "lessons/strand-b/t11-string-handling.html"
                }
              ]
            },
            {
              "key": "strand-b/t11-operators",
              "label": "11.10",
              "title": "Operators and Further String Handling",
              "resources": [
                {
                  "title": "Operators and Further String Handling",
                  "href": "lessons/strand-b/t11-operators.html"
                }
              ]
            }
          ]
        },
        {
          "title": "Topic 12 — Program Development",
          "description": null,
          "lessons": [
            {
              "key": "strand-b/t12-trace-tables",
              "label": "12.1",
              "title": "Trace Tables and Dry Runs",
              "resources": [
                {
                  "title": "Trace Tables and Dry Runs",
                  "href": "lessons/strand-b/t12-trace-tables.html"
                }
              ]
            },
            {
              "key": "strand-b/t12-validation-verification",
              "label": "12.2",
              "title": "Testing: Validation vs Verification",
              "resources": [
                {
                  "title": "Testing: Validation vs Verification",
                  "href": "lessons/strand-b/t12-validation-verification.html"
                }
              ]
            },
            {
              "key": "strand-b/t12-whitebox-blackbox",
              "label": "12.3",
              "title": "Testing: White-Box vs Black-Box",
              "resources": [
                {
                  "title": "Testing: White-Box vs Black-Box",
                  "href": "lessons/strand-b/t12-whitebox-blackbox.html"
                }
              ]
            },
            {
              "key": "strand-b/t12-lifecycle-models",
              "label": "12.4",
              "title": "Program Development Lifecycle Models",
              "resources": [
                {
                  "title": "Program Development Lifecycle Models",
                  "href": "lessons/strand-b/t12-lifecycle-models.html"
                }
              ]
            },
            {
              "key": "strand-b/t12-waterfall-agile",
              "label": "12.5",
              "title": "Waterfall vs Agile Methodologies",
              "resources": [
                {
                  "title": "Waterfall vs Agile Methodologies",
                  "href": "lessons/strand-b/t12-waterfall-agile.html"
                }
              ]
            },
            {
              "key": "strand-b/t12-design-tools",
              "label": "12.6",
              "title": "Program Design Tools: State-Transition Diagrams",
              "resources": [
                {
                  "title": "Program Design Tools: State-Transition Diagrams",
                  "href": "lessons/strand-b/t12-design-tools.html"
                }
              ]
            },
            {
              "key": "strand-b/t12-prototyping-rad",
              "label": "12.7",
              "title": "Prototyping and Rapid Application Development (RAD)",
              "resources": [
                {
                  "title": "Prototyping and Rapid Application Development (RAD)",
                  "href": "lessons/strand-b/t12-prototyping-rad.html"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "exam-prep",
      "number": "4",
      "title": "Exam Preparation and A2 Transition",
      "description": "Bridging from AS content to exam technique, and previewing what's ahead in the A2 year.",
      "subsections": [
        {
          "title": null,
          "description": null,
          "lessons": [
            {
              "key": "exam-prep/paper2-exam-technique",
              "label": "4.1",
              "title": "Exam Technique: Paper 2 Mark Allocation and Pseudocode Conventions",
              "resources": [
                {
                  "title": "Exam Technique: Paper 2 Mark Allocation and Pseudocode Conventions",
                  "href": "lessons/exam-prep/paper2-exam-technique.html"
                }
              ]
            },
            {
              "key": "exam-prep/a2-transition-overview",
              "label": "4.2",
              "title": "A2 Transition: Course Structure and Expectations",
              "resources": [
                {
                  "title": "A2 Transition: Course Structure and Expectations",
                  "href": "lessons/exam-prep/a2-transition-overview.html"
                }
              ]
            },
            {
              "key": "exam-prep/a2-preview-oop-recursion",
              "label": "4.3",
              "title": "A2 Preview: Introduction to OOP and Recursion",
              "resources": [
                {
                  "title": "A2 Preview: Introduction to OOP and Recursion",
                  "href": "lessons/exam-prep/a2-preview-oop-recursion.html"
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};
