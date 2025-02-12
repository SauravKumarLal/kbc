import { useEffect, useMemo, useState } from "react";
import "./app.css";
import Trivia from "./components/Trivia";
import Timer from "./components/Timer";
import Start from "./components/Start";
import data from "./data";

function App() {
  const [username, setUsername] = useState(null);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [timeOut, setTimeOut] = useState(false);
  const [earned, setEarned] = useState("₹ 0");

  // const data = [
  //   {
  //     id: 1,
  //     question: "Rolex is a company that specializes in what type of product?",
  //     answers: [
  //       {
  //         text: "Phone",
  //         correct: false,
  //       },
  //       {
  //         text: "Watches",
  //         correct: true,
  //       },
  //       {
  //         text: "Food",
  //         correct: false,
  //       },
  //       {
  //         text: "Cosmetic",
  //         correct: false,
  //       },
  //     ],
  //   },
  //   {
  //     id: 2,
  //     question: "When did the website `Facebook` launch?",
  //     answers: [
  //       {
  //         text: "2004",
  //         correct: true,
  //       },
  //       {
  //         text: "2005",
  //         correct: false,
  //       },
  //       {
  //         text: "2006",
  //         correct: false,
  //       },
  //       {
  //         text: "2007",
  //         correct: false,
  //       },
  //     ],
  //   },
  //   {
  //     id: 3,
  //     question: "Who played the character of harry potter in movie?",
  //     answers: [
  //       {
  //         text: "Johnny Deep",
  //         correct: false,
  //       },
  //       {
  //         text: "Leonardo Di Caprio",
  //         correct: false,
  //       },
  //       {
  //         text: "Denzel Washington",
  //         correct: false,
  //       },
  //       {
  //         text: "Daniel Red Cliff",
  //         correct: true,
  //       },
  //     ],
  //   },
  // ];

  const moneyPyramid = useMemo(
    () =>
      [
        { id: 1, amount: "₹ 5,000" },
        { id: 2, amount: "₹ 10,000" },
        { id: 3, amount: "₹ 20,000" },
        { id: 4, amount: "₹ 40,000" },
        { id: 5, amount: "₹ 80,000" },
        { id: 6, amount: "₹ 1,60,000" },
        { id: 7, amount: "₹ 3,20,000" },
        { id: 8, amount: "₹ 6,40,000" },
        { id: 9, amount: "₹ 12,50,000" },
        { id: 10, amount: "₹ 25,00,000" },
        { id: 11, amount: "₹ 50,00,000" },
        { id: 12, amount: "₹ 1 Crore" },
        { id: 13, amount: "₹ 3 Crore" },
        { id: 14, amount: "₹ 7 Crore" },
      ].reverse(),
    []
  );

  useEffect(() => {
    questionNumber > 1 &&
      setEarned(moneyPyramid.find((m) => m.id === questionNumber - 1).amount);
  }, [moneyPyramid, questionNumber]);

  return (
    <div className="app">
      {!username ? (
        <Start setUsername={setUsername} />
      ) : (
        <>
          <div className="main">
            {timeOut ? (
              <h1 className="endText">You Earned: {earned}</h1>
            ) : (
              <>
                <div className="top">
                  <div className="timer">
                    <Timer
                      setTimeOut={setTimeOut}
                      questionNumber={questionNumber}
                    />
                  </div>
                </div>
                <div className="bottom">
                  <Trivia
                    data={data}
                    setTimeOut={setTimeOut}
                    questionNumber={questionNumber}
                    setQuestionNumber={setQuestionNumber}
                  />
                </div>
              </>
            )}
          </div>

          <div className="pyramid">
            <ul className="moneyList">
              {moneyPyramid.map((m) => (
                <li
                  className={
                    questionNumber === m.id
                      ? "moneyListItem active"
                      : "moneyListItem"
                  }
                >
                  <span className="moneyListItemNum">{m.id}</span>
                  <span className="moneyListItemAmt">{m.amount}</span>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
