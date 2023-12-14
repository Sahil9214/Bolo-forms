import React, { useState, useEffect } from "react";

import axios from "axios";

import FormCategorize from "./FormCategorize";
const Form = () => {
  const [questions, setQuestionAnswer] = useState([]);
  const [newQuestion, setNewQuestionAnswer] = useState({ type: "", data: {} });

  const addQuestion = () => {
    axios
      .post(
        "https://uptight-pear-stockings.cyclic.app/questions/add",
        newQuestion
      )
      .then((response) => {
        setQuestionAnswer([...questions, response.data]);
        setNewQuestionAnswer({ type: "", data: {} });
      })
      .catch((error) => console.error("Error adding question:", error));
  };
  return (
    <div>
      <h1
        style={{
          color: "#7E22CE",
          fontSize: "40px",
          fontWeight: "700",
          lineHeight: "150%",
        }}
      >
        BOLO FORM
      </h1>
      <div>
        <h3>Select Question Type:</h3>
        <select
          style={{
            padding: "15px 120px",
            fontSize: "22px",
            borderRadius: "20px",
          }}
          onChange={(e) =>
            setNewQuestionAnswer({ ...newQuestion, type: e.target.value })
          }
          value={newQuestion.type}
        >
          <option value="">Select</option>
          <option value="categorize">Categorize</option>
        </select>
      </div>
      <br />
      <br />
      <br />
      <br />
      {newQuestion.type === "categorize" && (
        <FormCategorize
          onChange={(data) => setNewQuestionAnswer({ ...newQuestion, data })}
        />
      )}
<br/>
<br/>
      <button
        style={{
          color: "#7E22CE",
          fontSize: "20px",
          fontWeight: "700",
          lineHeight: "150%",
          padding: "10px 12px",
          backgroundColor: "#fff",
          borderRadius: "20px",
          borderColor: "3px solid grey",
        }}
        onClick={addQuestion}
      >
        Add Question
      </button>
    </div>
  );
};

export default Form;
