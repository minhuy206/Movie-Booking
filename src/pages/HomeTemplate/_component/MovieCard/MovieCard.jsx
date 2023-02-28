import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./MovieCard.css";
import { faCirclePlay } from "@fortawesome/free-regular-svg-icons";
import { useNavigate } from "react-router-dom";

export const Card = ({ movie, ...prop }) => {
  const navigate = useNavigate();
  const handleSizingCardTitle = (tenPhim) => {
    if (tenPhim.length < 15) {
      return (
        <div className="card-title flex items-center h-1/2 mt-1">
          <h5 className="text-primary lg:text-xl md:text-lg text-xl">
            {movie.tenPhim}
          </h5>
        </div>
      );
    } else if (tenPhim.length > 15) {
      return (
        <div className="card-title flex items-center h-1/2 mt-1">
          <h5 className="text-primary lg:text-lg md:text-base text-lg">
            {tenPhim}
          </h5>
        </div>
      );
    }
  };
  return (
    <div className="card mr-2">
      <div className="cardImg">
        <img
          src={movie.hinhAnh}
          className="card-img-top h-full w-full"
          alt={movie.tenPhim}
        />
        <div
          className="cardImgOverplay"
          onClick={() => {
            console.log(123);
          }}
        >
          <FontAwesomeIcon
            icon={faCirclePlay}
            size="6x"
            className="text-primary hover:opacity-50 transition duration-300 ease-in"
          />
        </div>
      </div>
      <div className="card-body text-center relative flex flex-col items-center">
        <div className="card-title flex items-center h-1/2 mt-1">
          <h5
            className="text-primary text-base"
            onClick={() => {
              navigate(`detail/${movie.maPhim}`);
            }}
          >
            {handleSizingCardTitle(movie.tenPhim)}
          </h5>
        </div>
        <p className="card-text text-#707070">Action | 1h33m | English</p>
        <button
          className="card-btn btn absolute bottom-0 translate-y-1/2"
          onClick={() => {
            navigate(`detail/${movie.maPhim}`);
          }}
        >
          Book
        </button>
      </div>
    </div>
  );
};
