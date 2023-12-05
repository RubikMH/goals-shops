import React from "react";
import { css } from "../../../styled-system/css";
import { FaRust, FaReact, FaLinux, FaDocker } from "react-icons/fa6";

const Card = ({ item }: { item: any }) => {
  const handelIcons = (names_icon: string) => {
    switch (names_icon) {
      case "FaReact":
        return <FaReact className={css({ fontWeight: "bold" })} size={100} />;
      case "FaRust":
        return <FaRust className={css({ fontWeight: "bold" })} size={100} />;
      case "FaLinux":
        return <FaLinux className={css({ fontWeight: "bold" })} size={100} />;
      case "FaDocker":
        return <FaDocker className={css({ fontWeight: "bold" })} size={100} />;
      default:
        break;
    }
  };
  return (
    <div className={css({ w: "1/4", px: "1rem", py: "1rem" })}>
      <div
        className={css({
          // bg: { base: "#F3EEEA", _hover: "#776B5D" },
          // color: { base: "#181818", _hover: "#F3EEEA" },
          bg: "#F3EEEA",
          scale: { base: 1, _hover: 1.1 },
          h: "200px",
          minW: "200px",
          transition: "ease all 400ms",
          borderRadius: "sm",
          cursor: "pointer",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          _hover: { "&>div": { opacity: 1 } },
          _active: { "&>div": { opacity: 1 } },
        })}
      >
        <div
          className={css({
            bg: "#776B5D",
            h: "200px",
            color: "#F3EEEA",
            borderRadius: "sm",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            w: "full",
            px: "8px",
            textAlign: "justify",
            transition: "ease all 400ms",
            position: "absolute",
            opacity: 0,
          })}
        >
          <h4 className={css({ fontSize: "24px" })}>{item.title}</h4>
          <p className={css({ fontSize: "10px" })}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia
            placeat ipsa eaque cumque rerum voluptatum corporis perspiciatis
            sunt non voluptatibus, odio illo minus odit autem porro consequatur
            ipsum, iusto nostrum.
          </p>
        </div>

        <div
          className={css({
            w: "full",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          })}
        >
          {handelIcons(item["names-icon"])}
        </div>
      </div>
    </div>
  );
};

export default Card;
