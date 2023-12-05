import React from "react";
import { css } from "../../../styled-system/css";
import Cards from "@/components/Cards";
const Header = ({ route }: { route: string }) => {
  return (
    <header className={css({ px: "2rem", py: "1rem" })}>
      <nav>
        <ul
          className={css({
            display: "flex",
            mx: "auto",
            w: "40%",
            justifyContent: "space-between",
          })}
        >
          {[
            { id: "nav_1", text: "Home" },
            { id: "nav_2", text: "Products" },
            { id: "nav_3", text: "Blog" },
            { id: "nav_4", text: "About Us" },
          ].map((item) => (
            <li
              className={css({
                cursor: "pointer",
                // bg: { base: "#F3EEEA", _hover: "#776B5D" },
                bg:
                  item.text == route
                    ? "#776B5D"
                    : { base: "#F3EEEA", _hover: "#776B5D" },
                color:
                  item.text == route
                    ? "#F3EEEA"
                    : { base: "#181818", _hover: "#F3EEEA" },
                py: "8px",
                w: "20%",
                textAlign: "center",
                transition: "ease all 400ms",
                borderRadius: "xs",
              })}
              key={item.id}
            >
              {item.text}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
