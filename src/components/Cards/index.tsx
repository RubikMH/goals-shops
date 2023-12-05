import React from "react";
import { css } from "../../../styled-system/css";
import Card from "../Card";

const Cards = ({ list }: { list: any }) => {
  return (
    <div
      className={css({
        w: "9/12",
        mx: "auto",
        display: "flex",
        justifyContent: "space-around",
        justifyItems: "start",
        p: "20px",
        flexWrap: "wrap",
      })}
    >
      {list ? (
        <>
          {list.map((item: any) => (
            <Card item={item} key={`Card_${item.uuid}`} />
          ))}
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Cards;
