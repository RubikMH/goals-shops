import React from "react";
import { css } from "../../../styled-system/css";

const Card = ({ item }: { item: any }) => {
  return (
    <div className={css({ w: "1/2", px: "2rem", py: "1rem" })}>
      <div
        className={css({
          bg: { base: "#F3EEEA", _hover: "#776B5D" },
          color: { base: "#181818", _hover: "#F3EEEA" },
          // h: "300px",
          transition: "ease all 400ms",
          borderRadius: "sm",
          cursor: "pointer",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        })}
      >
        <div className={css({ w: "500px" })}>
          <img
            className={css({
              w: "full",
              h: "250px",
              objectFit: "cover",
            })}
            src={`http://127.0.0.1:8000${item.image}`}
            alt={item.title}
          />
        </div>
        <h4
          className={css({
            fontSize: "26px",
            fontWeight: "medium",
          })}
        >
          {item.title}
        </h4>
      </div>
    </div>
  );
};

export default Card;
