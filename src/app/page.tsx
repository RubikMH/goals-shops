import Header from "@/containers/Header";
import getData from "../utils/getData";
import { css } from "../../styled-system/css";
import Cards from "@/components/Cards";
const Home = async () => {
  const res = await getData("get_categories");

  return (
    <>
      <Header />
      <div className={css({ fontSize: "2xl" })}>
        <Cards list={res.payload} />
      </div>
    </>
  );
};

export default Home;
