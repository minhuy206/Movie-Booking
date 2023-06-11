import { useNavigate } from "react-router-dom";
import "./Top5.css";

export const Top5 = ({ top5Movies }) => {
  const navigate = useNavigate();
  const handleResponsive = (movie) => {
    const { innerWidth: width } = window;
    if (width > 1023 || (width > 540 && width <= 768)) {
      return movie.tenPhim.length > 20
        ? movie.tenPhim.substring(0, 20) + "..."
        : movie.tenPhim;
    } else if (width > 768) {
      return movie.tenPhim.length > 35
        ? movie.tenPhim.substring(0, 35) + "..."
        : movie.tenPhim;
    }
    return movie.tenPhim.length > 15
      ? movie.tenPhim.substring(0, 15) + "..."
      : movie.tenPhim;
  };
  return (
    <div className="top5">
      <div className="top5Title">
        <h1 className="uppercase text-white text-4xl mb-5 hidden lg:block">
          Chart
        </h1>
        <h1 className="uppercase text-white text-3xl mb-5 lg:hidden block">
          Movies Chart
        </h1>
      </div>
      <div
        className="top5Content flex flex-col justify-between h-full"
        style={{ fontFamily: "'Oxygen', sans-serif" }}
      >
        {top5Movies.map((movie, index) => (
          <div
            key={index}
            className="top5Item rounded-lg p-2 flex w-full justify-between items-center"
            onClick={() => {
              navigate(`detail/${movie.maPhim}`);
            }}
          >
            <div className="flex items-center flex-1 w-3/4">
              <div className="w-1/4">
                <p
                  className="index w-full relative text-center text-5xl text-white"
                  style={{ fontFamily: "'Viga', sans-serif" }}
                >
                  {index + 1}
                </p>
              </div>
              <div className="ml-4 w-3/4 flex-1">
                <p className="text-white text-xl font-bold">
                  {handleResponsive(movie)}
                </p>
                <p className="text-primary text-sm">123456 views</p>
              </div>
            </div>
            <div className="w-1/4 h-full overflow-hidden rounded-lg">
              <img
                src={movie.hinhAnh}
                alt={movie.tenPhim}
                className="h-full w-full"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
