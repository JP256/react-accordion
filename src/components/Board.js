import Question from "./Question";
import { useState } from "react";
import "./Board.css";

const reactQuestions = [
  {
    id: 1,
    question: "What is React?",
    answer:
      "React is a JavaScript library for building user interfaces, especially single-page applications. It uses a component-based architecture and a virtual DOM to improve performance.",
  },
  {
    id: 2,
    question: "What is the Virtual DOM in React?",
    answer:
      "The Virtual DOM is a lightweight copy of the real DOM. React updates the Virtual DOM first, compares changes using a diffing algorithm, and only updates the necessary parts of the real DOM for better performance.",
  },
  {
    id: 3,
    question: "What is a React component?",
    answer:
      "A React component is a reusable piece of UI. Components can be functional components or class components.",
  },
  {
    id: 4,
    question: "What is JSX?",
    answer:
      "JSX stands for JavaScript XML. It allows developers to write HTML-like syntax inside JavaScript. React converts JSX into regular JavaScript behind the scenes.",
  },
  {
    id: 5,
    question: "What are props in React?",
    answer:
      "Props are short for properties. They are used to pass data from a parent component to a child component.",
  },
  {
    id: 6,
    question: "What is state in React?",
    answer:
      "State is data managed inside a component that can change over time and trigger re-renders when updated.",
  },
  {
    id: 7,
    question: "What is the difference between props and state?",
    answer:
      "Props are passed from parent components and are immutable, while state is managed inside the component and can be changed.",
  },
  {
    id: 8,
    question: "What is the useEffect hook?",
    answer:
      "The useEffect hook is used to handle side effects such as API calls, timers, subscriptions, and event listeners in functional components.",
  },
  {
    id: 9,
    question: "What is conditional rendering in React?",
    answer:
      "Conditional rendering allows components to display different UI elements based on conditions or application state.",
  },
  {
    id: 10,
    question:
      "What is the difference between controlled and uncontrolled components?",
    answer:
      "Controlled components are managed by React state, while uncontrolled components store their own state internally using the DOM and refs.",
  },
];

export default function Board() {
  const [isOpen, setIsOpen] = useState(null);

  return (
    <div className="container">
      <h1>Questionary</h1>
      {reactQuestions.map((item) => (
        <Question item={item} key={item.id} num={isOpen} onToggle={setIsOpen} />
      ))}
    </div>
  );
}
