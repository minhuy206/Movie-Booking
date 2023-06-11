import Slider from "react-slick";
import BlockbusterCard from "./BlockbusterCard/BlockbusterCard";
import "./Blockbuster.css";
import settings from "./slideSettings.json";

const Blockbuster = ({ hotMovies }) => {
  const renderBlockBuster = () => {
    return hotMovies?.map((movie) => {
      return <BlockbusterCard key={movie?.maPhim} movie={movie} />;
    });
  };
  return (
    <>
      <section className="blockbuster pt-10 lg:pt-28">
        <div className="m-auto sm:w-5/6 w-11/12">
          <h1 className="text-4xl font-bold text-white mb-5 uppercase">
            Blockbusters
          </h1>
          <Slider className="mt-6" {...settings}>
            {renderBlockBuster()}
          </Slider>
        </div>
      </section>
    </>
  );
};
export default Blockbuster;
