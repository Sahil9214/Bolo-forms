import React, { useState, useEffect } from "react";

const CategorizeForm = ({ question, onFormChange }) => {
  const [options, setOptions] = useState(question ? question.data.options : []);
  const [questionText, setQuestionText] = useState(
    question ? question.data.question : ""
  );

  const handleOptionChange = (index, value) => {
    const newOptions = [...options];
    newOptions[index] = value;
    setOptions(newOptions);
    onFormChange({ question: questionText, options: newOptions });
  };

  const handleQuestionChange = (value) => {
    setQuestionText(value);
    onFormChange({ question: value });
  };

  const addOption = () => {
    setOptions([...options, ""]);
  };

  useEffect(() => {
    onFormChange({ question: questionText, options });
  }, [questionText, options, onFormChange]);

  return (
    <div>
      <h3>Categorize Question</h3>
      <br />
      <h2>Question:</h2>
      <input
        placeholder="Add Categorize Mean"
        style={{
          padding: "10px 60px",
          fontSize: "20px",
          borderRadius: "24px",
        }}
        type="text"
        value={questionText}
        onChange={(e) => handleQuestionChange(e.target.value)}
      />
      <h2>Options:</h2>
      {options.map((option, index) => (
        <div key={index}>
          <input
            style={{
              padding: "10px 60px",
              borderRadius: "24px",
            }}
            type="text"
            value={option}
            onChange={(e) => handleOptionChange(index, e.target.value)}
          />
        </div>
      ))}
      <br />
      <br />
      <br />
      <button
        style={{
          padding: "10px 30px",
          color: "#ffffff",
          backgroundColor: "#7E22CE",
          borderRadius: "20px",
        }}
        onClick={addOption}
      >
        Add Option
      </button>
    </div>
  );
};

export default CategorizeForm;

