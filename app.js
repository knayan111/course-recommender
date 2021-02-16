const express = require('express');
const app = express();
const port = 3000;


app.get("/subjects", (req, res) => {
  res.json([
    "Algorithms",
    "Compiler Design",
    "Computer Architecture",
    "Computer Network",
    "Database",
    "Digital Logic",
    "Data Structures",
    "Mathematics",
    "Operating System",
    "Theory of Computation"
  ]);
});

app.get("/algorithms", (req, res) => {
  res.json([
    "Asymptotic Notation",
    "Divide and Conquer",
    "Dynamic Programming",
    "Greedy Algorithm",
    "P & NP Concepts"
  ]);
});

app.get("/compiler_design", (req, res) => {
  res.json([
    "Code Generation and Optimization",
    "Lexical Analysis",
    "Parsing Techniques",
    "Syntax and Parsing",
    "Syntax Directed Translation"
  ]);
});

app.get("/computer_architecture", (req, res) => {
  res.json([
    "Cache and Main Memory",
    "Combinational Circuits",
    "CPU Control Design and Interface",
    "Digital Logic and Number Representation",
    "Instructions : Pipelining and Addressing Modes",
    "Logic Functions and Minimization",
    "Secondary Memory & DMA"
  ]);
});

app.get("/computer_network", (req, res) => {
  res.json([
    "Application Layer Protocol",
    "ISO/OSI Stack and SWP",
    "Lan Technologies and Wifi",
    "Network Layer(IPv4,IPv6)",
    "Routing, Application Layer and Network Security",
    "TCP, UDP and IP"
  ]);
});

app.get("/database", (req, res) => {
  res.json([
    "ER-Model",
    "File Structures",
    "Functional Dependencies and Normalisation",
    "Relational Algebra and Relational Calculus",
    "Structural Query Language",
    "Transactions and Concurrency Control"
  ]);
});

app.get("/digital_logic", (req, res) => {
  res.json([
    "Combinational Circuits",
    "Logic Functions and Minimization",
    "Number Systems",
    "Sequential Circuits"
  ]);
});

app.get("/data_structures", (req, res) => {
  res.json([
    "Arrays",
    "Graphs",
    "Hashing",
    "Linked List",
    "Stacks & Queues",
    "Trees"
  ]);
});

app.get("/mathematics", (req, res) => {
  res.json([
    "Calculus",
    "Combinatorics",
    "Graph Theory",
    "Linear Algebra",
    "Probability",
    "Set Theory and Algebra",
    "Set Theory and Algebra"
  ]);
});

app.get("/operating_system", (req, res) => {
  res.json([
    "Deadlocks",
    "File System And Device Management",
    "Memory Management and Virtual Memory",
    "Process Management-1",
    "Process Management-2"
  ]);
});

app.get("/theory_of_computation", (req, res) => {
  res.json([
    "Finite Automata : Regular Languages",
    "Push Down Automata : CFL & DCFL",
    "Turing Machine : RE, REC and Undecidability"
  ]);
});

app.listen(port, () => console.log(`App listening on port ${port}!`));