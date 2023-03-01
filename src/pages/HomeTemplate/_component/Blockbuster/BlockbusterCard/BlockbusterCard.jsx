import { PlayCircleOutlined } from "@ant-design/icons";
import { useState } from "react";
import "./BlockbusterCard.css";
import TrailerModal from "../../trailerModal/TrailerModal";
import { useNavigate } from "react-router-dom";

function BlockbusterCard({ movie }) {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const setIsOpen = () => {
    setOpen(false);
  };
  return (
    <>
      <div
        key={movie.maPhim}
        className="blockbusterCard mr-2 rounded-lg overflow-hidden"
      >
        <div className="blockbusterCardInner">
          <div className="blockbusterImg rounded-lg">
            <img
              className="h-full w-full m-auto rounded-lg object-cover object-center"
              src={movie.hinhAnh}
              alt="Avatar"
            />
          </div>
          <div className="blockbusterOverplay flex flex-col justify-center">
            <div>
              <PlayCircleOutlined
                className="sm:text-6xl font-bold text-primary hover:opacity-75 text-4xl transition ease-in-out duration-300"
                onClick={() => {
                  setOpen(true);
                }}
              />
              <p className="text-xl text-primary mt-5">{movie.tenPhim}</p>
            </div>
            <button
              className="blockbusterCardBtn"
              onClick={() => {
                navigate(`detail/${movie.maPhim}`);
              }}
            >
              Book
            </button>
          </div>
        </div>
      </div>
      <TrailerModal open={open} trailer={movie.trailer} setIsOpen={setIsOpen} />
    </>
  );
}

export default BlockbusterCard;
