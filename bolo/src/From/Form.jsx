import React from "react";

const Form = () => {
  return (
    <div>
      <h1
        style={{
          fontSize: "39px",
          color: "#7E22CE",
        }}
      >
        New Form
      </h1>
      <input
        style={{
          padding: "20px 150px",
          borderRadius: "30px",
          fontSize: "23px",
        }}
        placeholder="Enter Your Name"
      />
      <br />
      <br />
      <div
        style={{
          height: "3px",
          width: "80%",
          margin: "auto",
          backgroundColor: "grey",
        }}
      ></div>
      <br />
      <br />
      <div
        style={{
          width: "80%",
          margin: "auto",
          border: "1px solid grey",
          borderBottom: "2px solid #7E22CE ",
          padding: "10px ",
        }}
      >
        <h1>Cloze</h1>
        <br />
        <br />
        <div style={{ padding: "0px 12px" }}>
          <h2>Sentence</h2>
          <br />
          <input
            placeholder="Enter description for the questions"
            type="text"
            style={{
              padding: "20px 10px",
              borderRadius: "30px",
              fontSize: "23px",
              justifyContent: "left",
            }}
          />
        </div>
      </div>
      <br />
      <div
        style={{
          width: "80%",
          margin: "auto",
          border: "1px solid grey",
          borderBottom: "2px solid #7E22CE ",
        }}
      >
        <h1>Comprehession</h1>
        <br />
        <br />
        <div style={{ padding: "0px 12px" }}>
          <h4>Question 1</h4>
          <br />
          <textarea
            placeholder="Enter description for the questions"
            type="text"
            style={{
              padding: "20px 10px",
              borderRadius: "30px",
              fontSize: "23px",
              justifyContent: "left",
            }}
          ></textarea>
        </div>
      </div>
      <br />
      <div
        style={{
          width: "80%",
          margin: "auto",
          border: "1px solid grey",
          borderBottom: "2px solid #7E22CE ",
        }}
      >
        <h4>Categorize</h4>
        <br />
        <br />
        <div style={{ padding: "0px 12px" }}>
          <h4>Question 1</h4>
          <br />
          <input
            placeholder="Enter description for the questions"
            type="text"
            style={{
              padding: "20px 10px",
              borderRadius: "30px",
              fontSize: "23px",
              justifyContent: "left",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Form;
