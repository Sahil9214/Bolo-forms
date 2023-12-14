import React from "react";
import {Box,Button} from '@chakra-ui/react'
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div>
      <div style={{ width: "80%", margin: "auto" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            margin: "auto",
          }}
        >
          <Box>
            <h1
              style={{
                fontSize: "40px",
                color: "#7E22CE",
                textAlign: "left",
              }}
            >
              Forms
            </h1>
          </Box>
          <Box>
            <h2>👇👇👇</h2>
            <Link to='/form'>
            <Button
              fontSize="25px"
              padding={"12px 20px"}
              color={"#fff"}
              backgroundColor={"black"}
              marginTop={"20px"}
              cursor={'pointer'}
            >
              Create New From
            </Button></Link>
          </Box>
        </div>
      </div>
      <h1   
      style={{
        fontSize:"39px",
        fontFamily:"italic",
        color: "#7E22CE",
      }}
      
      >Welcome to Bolo Form</h1>
    </div>
  );
};

export default Home;
