import React, { useState } from "react";

import { Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import CartAlert from "../Layouts/CartAlert";
import LoginAlert from "../Layouts/LoginAlert";

export default function LatestCard({ item }) {
  const [signAlert, setSignAlert] = useState(null);
  return (
    <>
      {localStorage.getItem("usertoken") ? (
        <CartAlert show={signAlert} setshow={setSignAlert} />
      ) : (
        <LoginAlert show={signAlert} setshow={setSignAlert} />
      )}

      <div className="latestCard">
        <Link style={{ height: "80%", width: "100%" }} to={`/item/${item._id}`}>
          <img src={item.Pic} width={"100%"} height={"100%"} alt="" />
        </Link>
        <Typography sx={{ height: "30px" }}> {item.Name}</Typography>
        <Button
          sx={{ width: "100%", borderRadius: "0px 0px 10px 10px" }}
          type="button"
          onClick={() => setSignAlert(true)}
          variant="contained">
          Add to Cart
        </Button>
        {item.Sale ? (
          <Typography
            sx={{
              color: "white",
              backgroundColor: "red",
              padding: "1px 10px",
              borderRadius: "20px",
              position: "absolute",
              top: "5px",
              right: "5px",
              fontSize: "12px",
            }}>
            Sale
          </Typography>
        ) : (
          ""
        )}
      </div>
    </>
  );
}
