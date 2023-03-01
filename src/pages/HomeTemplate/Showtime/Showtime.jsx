import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import movieBanner from "../../../assets/movieBanner.jpeg";
import { fetchShowtime } from "./duck/action";
import "./Showtime.css";

function Showtime() {
  const dispatch = useDispatch();
  const { showtime } = useSelector((state) => state.showtimeReducer);
  const [activeCinemaIndex, setActiveCinemaIndex] = useState(-1);
  const [cinemas, setCinema] = useState(
    showtime.heThongRapChieu[0].cumRapChieu
  );
  const { id } = useParams();
  const showtimeRef = useRef(null);
  const showtimeResponsiveRef = useRef(null);
  const notiRef = useRef(null);
  const notiResponsiveRef = useRef(null);

  useEffect(() => {
    dispatch(fetchShowtime(id));
    setCinema(showtime.heThongRapChieu[0].cumRapChieu);
  }, []);

  const getStartDay = (day) => {
    const startDay = day.split("-");
    startDay[2] = startDay[2].split("T")[0];
    return startDay.reverse().join("/");
  };

  const getStartTime = (day) => {
    const startDay = day.split("-");
    const time = startDay[2].split("T")[1].split(":").slice(0, 2).join(":");
    return time;
  };

  const getDayOfWeek = (day) => {
    const weekday = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const startDay = day.split("-");
    startDay[2] = startDay[2].split("T")[0];
    const date = new Date(startDay.join("-"));
    const dayOfWeek = weekday[date.getDay()];
    return dayOfWeek;
  };

  const sliderStyle = {
    height: "60vh",
    backgroundImage: `url(${movieBanner})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    position: "absolute",
    width: "100%",
  };
  return (
    <>
      <section className="movieBanner hidden md:block">
        <div style={sliderStyle}></div>
      </section>
      <section className="movieInfo">
        <div className="mx-auto md:w-11/12 md:rounded-xl bg-#3d3d3d lg:p-12 lg:w-5/6 md:z-20 md:relative md:mt-96">
          <div
            className="lg:flex hidden overflow-hidden"
            style={{ height: "30vh" }}
          >
            <div className="w-1/3 overflow-hidden md:rounded-lg">
              <img
                className="w-full h-full"
                src={showtime.hinhAnh}
                alt={showtime.tenPhim}
              />
            </div>
            <div className="flex w-2/3 pl-12 flex-col">
              <div className="flex items-end">
                <h2 className="text-white text-4xl uppercase">
                  {showtime.tenPhim}
                </h2>
              </div>
              <div className="pt-5">
                <p className="text-white text-base font-thin">
                  {showtime.moTa}
                </p>
              </div>
            </div>
          </div>
          <div
            className="lg:hidden block lg:overflow-hidden rounded-lg mt-5"
            style={{ height: "40vh" }}
          >
            <img
              className="movieImg w-full bg-cover h-full"
              src={showtime.hinhAnh}
              alt={showtime.tenPhim}
            />
          </div>{" "}
          <div className="p-5 lg:p-0 lg:hidden">
            <h2 className="text-white text-4xl uppercase">
              {showtime.tenPhim}
            </h2>
            <p className="text-white text-base font-thin">{showtime?.moTa}</p>
          </div>
          <div className="mx-auto w-11/12 block border-t-2 border-#c4c4c480 md:hidden py-8">
            <div className="border-b-2 border-#c4c4c480 pb-8">
              <h2 className="text-white text-3xl">Select Cinema</h2>
              <div className="flex space-x-3 mt-5">
                {showtime?.heThongRapChieu.map((heThongRapChieu, index) => {
                  return (
                    <div
                      className="cinemaTab mr-5"
                      onClick={() => {
                        setActiveCinemaIndex(index);
                        setCinema(heThongRapChieu.cumRapChieu);
                        notiRef.current.className = "hidden";
                        showtimeRef.current.classList.remove("hidden");
                        showtimeResponsiveRef.current.classList.remove(
                          "hidden"
                        );
                        notiResponsiveRef.current.className = "hidden";
                      }}
                      key={index}
                    >
                      <img
                        className="m-auto"
                        width={100}
                        src={heThongRapChieu.logo}
                        alt={heThongRapChieu.tenHeThongRap}
                      />
                      <h1
                        className={`cinema mt-5 text-white text-xl text-center ${
                          index === activeCinemaIndex && "textActive"
                        }`}
                      >
                        {heThongRapChieu.tenHeThongRap}
                      </h1>
                    </div>
                  );
                })}
              </div>
            </div>
            <div
              ref={showtimeResponsiveRef}
              className="py-8 border-#c4c4c480 hidden"
            >
              <h2 className="text-white text-3xl">Select showtime</h2>
              <div className="mt-5">
                {cinemas.map((cinema) => {
                  return (
                    <div
                      className="showtime rounded-2xl overflow-hidden mt-10"
                      key={cinema.maCumRap}
                    >
                      <div className="bg-#7f66de p-8 text-center">
                        <h2 className="text-white text-2xl">
                          {cinema.tenCumRap}
                        </h2>
                        <p className="text-primary text-lg">{cinema.diaChi}</p>
                      </div>
                      <div className="showtimeSelector p-8">
                        <h2 className="uppercase text-2xl text-white">
                          2d standard
                        </h2>
                        <div className="grid mt-5 sm:grid-cols-4 grid-cols-2 gap-5 justify-between">
                          {cinema.lichChieuPhim.map((lichChieuPhim) => {
                            return (
                              <div
                                key={lichChieuPhim.maLichChieu}
                                className="border border-#707070 p-5 transition ease-in-out duration-300 text-center text-white rounded-xl hover:bg-#7f66de"
                              >
                                <p className="uppercase text-primary">
                                  {getDayOfWeek(
                                    lichChieuPhim.ngayChieuGioChieu
                                  )}
                                </p>
                                <h6 className="text-white text-3xl">
                                  {getStartTime(
                                    lichChieuPhim.ngayChieuGioChieu
                                  )}
                                </h6>
                                <p className="text-primary">
                                  {getStartDay(lichChieuPhim.ngayChieuGioChieu)}
                                </p>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div
              ref={notiResponsiveRef}
              className="text-center text-white mt-8 text-2xl"
            >
              Select cinemas to show showtime
            </div>
          </div>
        </div>
      </section>
      <section className="showtime">
        <div className="mx-auto w-11/12 hidden md:block rounded-xl bg-#3d3d3d p-12 mt-10 lg:w-5/6">
          <div className="border-b-2 border-#c4c4c480 pb-8">
            <h2 className="text-white text-3xl">Select Cinema</h2>
            <div className="flex space-x-3 mt-5">
              {showtime.heThongRapChieu.map((heThongRapChieu, index) => {
                return (
                  <div
                    className="cinemaTab mr-5"
                    onClick={() => {
                      setActiveCinemaIndex(index);
                      setCinema(heThongRapChieu.cumRapChieu);
                      notiRef.current.className = "hidden";
                      showtimeRef.current.classList.remove("hidden");
                      showtimeResponsiveRef.current.classList.remove("hidden");
                      notiResponsiveRef.current.className = "hidden";
                    }}
                    key={heThongRapChieu.maHeThongRap}
                  >
                    <img
                      className="m-auto"
                      width={100}
                      src={heThongRapChieu.logo}
                      alt={heThongRapChieu.tenHeThongRap}
                    />
                    <h1
                      className={`cinemaName mt-5 text-white text-xl text-center ${
                        index === activeCinemaIndex && "textActive"
                      }`}
                    >
                      {heThongRapChieu.tenHeThongRap}
                    </h1>
                  </div>
                );
              })}
            </div>
          </div>
          <div ref={showtimeRef} className="py-8 border-#c4c4c480 hidden">
            <h2 className="text-white text-3xl">Select showtime</h2>
            <div className="mt-5">
              {cinemas.map((cinema) => {
                return (
                  <div
                    className="rounded-2xl overflow-hidden mt-10"
                    key={cinema.maCumRap}
                  >
                    <div className="bg-#7f66de p-8 text-center">
                      <h2 className="text-white text-2xl">
                        {cinema.tenCumRap}
                      </h2>
                      <p className="text-primary text-lg">{cinema.diaChi}</p>
                    </div>
                    <div className="showtimeSelector p-8">
                      <h2 className="uppercase text-2xl text-white">
                        2d standard
                      </h2>
                      <div className="grid mt-5 2xl:grid-cols-6 xl:grid-cols-5 md:grid-cols-4 gap-5">
                        {cinema?.lichChieuPhim.map((lichChieuPhim) => {
                          return (
                            <div
                              key={lichChieuPhim.maLichChieu}
                              className="p-5 border border-#707070 transition ease-in-out duration-300 text-center text-white rounded-xl hover:bg-#7f66de hover:border-transparent"
                            >
                              <p className="dayOfWeek uppercase text-primary">
                                {getDayOfWeek(lichChieuPhim.ngayChieuGioChieu)}
                              </p>
                              <h6 className="text-white text-3xl">
                                {getStartTime(lichChieuPhim.ngayChieuGioChieu)}
                              </h6>
                              <p className="text-primary">
                                {getStartDay(lichChieuPhim.ngayChieuGioChieu)}
                              </p>
                              <p className="text-primary pt-2 mt-2 text-sm border-t-2 border-#c4c4c480">
                                14/40 seats
                              </p>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div ref={notiRef} className="text-center text-white mt-8 text-2xl">
            Select cinemas to show showtime
          </div>
        </div>
      </section>
    </>
  );
}

export default Showtime;
