import "./Question.css";

export default function Question({ item, num, onToggle }) {
  function handleToggle() {
    onToggle((n) => (item.id === num ? null : item.id));
  }

  return (
    <div
      className="card"
      style={{ borderTop: num === item.id ? "5px solid green" : "" }}
      onClick={handleToggle}
    >
      <div className="card-question">
        <p
          style={{
            color: num === item.id ? "green" : "black",
            fontWeight: "bold",
          }}
        >
          {item.id < 10 ? "0" + item.id.toString() : item.id.toString()}
        </p>
        <div>
          <p
            style={{
              color: num === item.id ? "green" : "black",
              fontWeight: "bold",
            }}
          >
            {item.question}
          </p>
          <p
            className="card-anwers"
            style={{ display: num !== item.id ? "none" : "block" }}
          >
            {item.answer}
          </p>
        </div>
        <p>{item.id === num ? "-" : "+"}</p>
      </div>
    </div>
  );
}
