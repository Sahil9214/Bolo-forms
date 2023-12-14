import React from "react";
import { Text, Box, Button } from "@chakra-ui/react";

const Navbar = () => {
  return (
    <div>
      <nav style={{ padding: "15px 10px", boxShadow: "0 2px 8px 0 #63636333" }}>
        <h1
          style={{
            color: "#7E22CE",
            fontSize: "40px",
            fontWeight: "700",
            lineHeight: "150%",
            textAlign: "left",
          }}
        >
          BOLO Forms
        </h1>
      </nav>
   
    </div>
  );
};

export default Navbar;
