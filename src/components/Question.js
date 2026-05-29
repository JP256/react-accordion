import "./Question.css";
import { useState } from "react";

export default function Question({ item }) {
  const [showAnswer, setShowAnswer] = useState(false);

  function handleShowAnswer() {
    setShowAnswer((s) => !s);
  }

  return (
    <div
      className="card"
      style={{ borderTop: showAnswer === true ? "5px solid green" : "" }}
      onClick={handleShowAnswer}
    >
      <div className="card-question">
        <p
          style={{
            color: showAnswer === true ? "green" : "black",
            fontWeight: "bold",
          }}
        >
          {item.id < 10 ? "0" + item.id.toString() : item.id.toString()}
        </p>
        <div>
          <p
            style={{
              color: showAnswer === true ? "green" : "black",
              fontWeight: "bold",
            }}
          >
            {item.question}
          </p>
          <p
            className="card-anwers"
            style={{ display: showAnswer === false ? "none" : "block" }}
          >
            {item.answer}
          </p>
        </div>
        <p>{showAnswer ? "-" : "+"}</p>
      </div>
    </div>
  );
}
