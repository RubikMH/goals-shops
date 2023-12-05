import Header from "@/containers/Header";
import getData from "../utils/getData";
import { css } from "../../styled-system/css";
import Cards from "@/components/Cards";
const Home = async () => {
  const res = await getData("get-categories");

  return (
    <>
      <Header route="Home" />
      <div className={css({ fontSize: "2xl" })}>
        <h1
          className={css({
            textAlign: "center",
            fontSize: "48px",
            fontWeight: "bold",
          })}
        >
          Main Skills
        </h1>
        <Cards list={res.payload} />
      </div>
    </>
  );
};

export default Home;
