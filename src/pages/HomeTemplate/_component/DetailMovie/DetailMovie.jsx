import "./DetailMovie.css";
import React from "react";
import Fresh from "../../../../assets/Certified_Fresh_2018.svg.png";
import Popcorn from "../../../../assets/212px-Rotten_Tomatoes_positive_audience.svg.png";
import imdb from "../../../../assets/imdb@._V1_.png";
import movieBanner from "../../../../assets/movieBanner.jpeg";
import { useNavigate } from "react-router-dom";

const actors = [
  {
    name: "Actor 1",
    character: "character 1",
    image: "https://i.pravatar.cc/?u=0",
  },
  {
    name: "Actor 2",
    character: "character 2",
    image: "https://i.pravatar.cc/?u=1",
  },
  {
    name: "Actor 3",
    character: "character 3",
    image: "https://i.pravatar.cc/?u=2",
  },
  {
    name: "Actor 4",
    character: "character 4",
    image: "https://i.pravatar.cc/?u=3",
  },
  {
    name: "Actor 5",
    character: "character 5",
    image: "https://i.pravatar.cc/?u=4",
  },
  {
    name: "Actor 6",
    character: "character 6",
    image: "https://i.pravatar.cc/?u=5",
  },
];

const renderCast = () => {
  return actors.map((actor) => {
    return (
      <div
        className="castCard mt-3 lg:justify-between xl:mr-2 xl:w-auto"
        key={actor.name}
      >
        <div className="castImg rounded-2xl overflow-hidden">
          <img
            src={actor.image}
            alt={actor.image}
            className="card-img-top h-full w-full object-center object-cover"
          />
        </div>
        <div className="castCardBody text-center relative flex flex-col items-center">
          <div className="castCardTitle flex items-center h-1/2 mt-1">
            <h5 className="text-white xl:text-lg text-sm ">{actor.name}</h5>
          </div>
          <p className="castCardText text-primary xl:text-sm text-xs font-light whitespace-nowrap">
            as {actor.character}
          </p>
        </div>
      </div>
    );
  });
};

export default function Detail({ movie }) {
  const navigate = useNavigate();
  const convertTrailerLink = (trailer) => {
    const index = trailer.indexOf("=");
    if (index !== -1) {
      const id = trailer.slice(index + 1);
      return "https://www.youtube.com/embed/" + id;
    }
    return movie.trailer.replace(
      "https://youtu.be/",
      "https://www.youtube.com/embed/"
    );
  };

  const handleResizeIframe = (trailer) => {
    const { innerWidth: width } = window;
    console.log(width);
    if (width > 1536) {
      return (
        <iframe
          className="rounded-lg"
          width="100%"
          height={275}
          src={convertTrailerLink(trailer)}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      );
    } else if (width > 1280) {
      return (
        <iframe
          className="rounded-lg"
          width="100%"
          height={225}
          src={convertTrailerLink(trailer)}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      );
    } else if (width > 1024) {
      return (
        <iframe
          className="rounded-lg"
          width="100%"
          height={200}
          src={convertTrailerLink(trailer)}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      );
    }

    return (
      <iframe
        className="rounded-lg mt-5"
        width="100%"
        height={450}
        src={convertTrailerLink(trailer)}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    );
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
      <section className="movieBanner hidden lg:block">
        <div style={sliderStyle}></div>
      </section>
      <section className="DetailMovie">
        <div className="mx-auto w-11/12 rounded-xl bg-#3d3d3d lg:p-12 lg:w-5/6 lg:z-20 lg:relative lg:mt-96">
          <div
            className="lg:flex hidden overflow-hidden"
            style={{ height: "30vh" }}
          >
            <div className="w-1/3 overflow-hidden rounded-lg">
              <img
                className="w-full h-full"
                src={movie.hinhAnh}
                alt={movie.tenPhim}
              />
            </div>
            <div className="flex w-2/3 pl-12 flex-col">
              <div className="flex items-end">
                <h2 className="text-white text-4xl uppercase">
                  {movie.tenPhim}
                </h2>
              </div>
              <div className="pt-5">
                <p className="text-white text-base font-thin">{movie.moTa}</p>
              </div>
            </div>
          </div>
          <div
            className="lg:hidden block lg:overflow-hidden rounded-lg mt-5"
            style={{ height: "40vh" }}
          >
            <img
              className="movieImg w-full bg-cover h-full"
              src={movie.hinhAnh}
              alt={movie.tenPhim}
            />
          </div>
          <div className="p-5 lg:p-0">
            <div className="flex lg:hidden flex-col">
              <div className="h-1/3 flex items-end">
                <h2 className="text-white text-4xl uppercase">
                  {movie.tenPhim}
                </h2>
              </div>
              <div className="h-2/3 pt-5">
                <p className="text-white text-base font-thin">{movie.moTa}</p>
              </div>
            </div>
            <div className="flex lg:flex-row flex-col lg:mt-10 mt-5">
              <div className="justify-between md:flex lg:block lg:w-1/2 xl:w-7/12">
                <div className="detailMovie text-white divide-y font-thin md:w-1/2 lg:w-auto">
                  <p className="py-4">Directed by: ABCDEF GHIK</p>
                  <p className="py-4">Duration: 2 hours 11 minutes</p>
                  <p className="py-4">
                    Language: English | Subtitle: Vietnamese
                  </p>
                  <p className="py-4">
                    Production Company: Submit Entertainment
                  </p>
                  <div className="py-4 hidden lg:block">
                    <h3 className="text-white text-4xl font-thin font-Oxygen">
                      Staring
                    </h3>
                    <div className="flex justify-between lg:flex-wrap xl:flex-nowrap">
                      {renderCast()}
                    </div>
                  </div>
                </div>
                <div className="w-1/2 hidden lg:hidden md:flex flex-col justify-between items-end">
                  <div className="w-full flex flex-col items-end justify-between">
                    <div className="imbdScore rounded-lg flex items-center p-2 justify-center">
                      <div className="flex items-center">
                        <img
                          className="rounded-sm"
                          src={imdb}
                          alt="imdb"
                          width={30}
                        />
                        <div className="ml-1">
                          <p className="text-white text-sm font-thin">
                            <span className="text-white font-bold">
                              {movie.danhGia}
                            </span>
                            <span className="text-primary whitespace-nowrap">
                              /10⭐️
                            </span>
                          </p>
                          <p className="text-primary text-xs font-thin whitespace-nowrap">
                            88k reviews
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="tomatoesReview flex rounded-lg justify-between p-2 items-center mt-2">
                      <div className="w-1/2 flex items-center">
                        <img src={Fresh} alt="Fresh" width={30} />
                        <div className="ml-1">
                          <p className="text-white text-sm font-thin">87%</p>
                          <p className="text-primary text-xs font-thin">
                            888 ratings
                          </p>
                        </div>
                      </div>
                      <div className="w-1/2 flex items-center">
                        <img src={Popcorn} alt="popcorn" width={30} />
                        <div className="ml-1">
                          <p className="text-white text-sm font-thin">89%</p>
                          <p className="text-primary text-xs font-thin whitespace-nowrap">
                            888 reviews
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <button className="bookNowBtn text-2xl">Book now</button>
                </div>
              </div>

              <div className="flex flex-col xl:justify-between xl:pl-16 lg:pl-10 lg:w-1/2 xl:w-5/12">
                <div className="overflow-hidden w-full order-1 lg:order-first">
                  <h1 className="block lg:hidden uppercase text-4xl mt-5 text-white">
                    Watch trailer
                  </h1>
                  {handleResizeIframe(movie.trailer)}
                  <div className="hidden lg:flex mt-3 justify-between">
                    <div className="tomatoesReview flex rounded-lg justify-between p-2 items-center">
                      <div className="w-1/2 flex items-center">
                        <img src={Fresh} alt="Fresh" width={30} />
                        <div className="ml-1">
                          <p className="text-white text-sm font-thin">87%</p>
                          <p className="text-primary text-xs font-thin">
                            888 ratings
                          </p>
                        </div>
                      </div>
                      <div className="w-1/2 flex items-center">
                        <img src={Popcorn} alt="popcorn" width={30} />
                        <div className="ml-1">
                          <p className="text-white text-sm font-thin">89%</p>
                          <p className="text-primary text-xs font-thin">
                            888 reviews
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="imbdScore rounded-lg flex items-center p-2 justify-center">
                      <div className="flex items-center">
                        <img
                          className="rounded-sm"
                          src={imdb}
                          alt="imdb"
                          width={30}
                        />
                        <div className="ml-1">
                          <p className="text-white text-sm font-thin">
                            <span className="text-white font-bold">
                              {movie.danhGia}
                            </span>
                            <span className="text-primary">/10⭐️</span>
                          </p>
                          <p className="text-primary text-xs font-thin whitespace-nowrap">
                            88k reviews
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-right lg:mt-10 xl:mt-0">
                  <p className="text-white mt-2 hidden lg:block">
                    Interested in this movie?
                  </p>
                  <div className="flex mt-3 justify-between md:hidden">
                    <div className="tomatoesReview flex rounded-lg justify-evenly p-2 items-center">
                      <div className="flex items-center">
                        <img src={Fresh} alt="Fresh" width={40} />
                        <div className="ml-1 text-left">
                          <p className="text-white text-lg font-thin">87%</p>
                          <p className="text-primary text-xs font-thin">
                            888 ratings
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <img src={Popcorn} alt="popcorn" width={30} />
                        <div className="ml-1 text-left">
                          <p className="text-white text-lg font-thin">89%</p>
                          <p className="text-primary text-xs font-thin">
                            888 reviews
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="imbdScore rounded-lg flex items-center py-2 justify-center">
                      <div className="flex items-center text-left">
                        <img
                          className="rounded-sm"
                          src={imdb}
                          alt="imdb"
                          width={40}
                        />
                        <div className="ml-1 text-left">
                          <p className="text-white text-lg font-thin">
                            <span className="text-white font-bold">
                              {movie.danhGia}
                            </span>
                            <span className="text-primary">/10 ⭐️</span>
                          </p>
                          <p className="text-primary text-xs font-thin">
                            88k reviews
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <button className="bookNowBtn text-2xl mt-3 w-full lg:mt-2 lg:w-auto lg:inline-block md:hidden">
                    Book now
                  </button>
                </div>
              </div>
            </div>
            <div className="photoGallery">
              <h1 className="text-white text-4xl mt-10">Photo gallery</h1>
              <div className="photoContainer"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
