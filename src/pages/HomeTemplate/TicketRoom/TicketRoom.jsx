import { message, Spin, Steps, Input } from "antd";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import AvailableSeat from "../_component/Seat/Available";
import UnavailableSeat from "../_component/Seat/Unavailable";
import {
  fetchInfo,
  handleBookingTicket,
  resetTicketRoomReducer,
} from "./duck/action";
import { LoadingOutlined } from "@ant-design/icons";
import "./TicketRoom.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
  faTicket,
} from "@fortawesome/free-solid-svg-icons";

const TicketRoom = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading, info, selectingSeat, totalPrice } = useSelector(
    (state) => state.ticketRoomReducer
  );
  const { maLichChieu } = useParams();
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  const antIcon = (
    <LoadingOutlined
      style={{
        fontSize: 100,
      }}
      spin
    />
  );

  const checkIsChecked = (maGhe) => {
    let isChecked = false;
    selectingSeat.map((seat) => {
      if (seat.maGhe === maGhe) {
        isChecked = true;
      }
    });
    return isChecked;
  };

  const getDayOfWeek = (day) => {
    if (day) {
      const weekday = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ];
      const month = day.slice(3, 6);
      const dayAndYear = day.slice(0, 3) + day.slice(6);
      const date = new Date(month + dayAndYear);
      const dayOfWeek = weekday[date.getDay()];
      return dayOfWeek;
    }
  };

  const splitNgayChieu = (day) => {
    if (day) {
      return day.split("/");
    }
  };

  const getMonth = (month) => {
    const monthOfYear = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    return monthOfYear[month];
  };

  const filterPrimaryTicket = () => {
    return selectingSeat.filter((seat) => seat.loaiGhe === "Thuong");
  };

  const filterVIPTicket = () => {
    return selectingSeat.filter((seat) => seat.loaiGhe === "Vip");
  };

  const steps = [
    {
      title: "Selecting seats",
      content: (
        <>
          <div
            className="flex mt-10 justify-between"
            style={{ minHeight: "70vh" }}
          >
            <div className="selectSeat rounded-3xl xl:p-10 lg:p-5 p-5 bg-#3d3d3d">
              <div className="h-10 rounded-2xl bg-#707070 m-auto">
                <p className="text-primary text-center leading-10 text-xl">
                  Screen
                </p>
              </div>
              <div className="mt-10 grid grid-cols-10 gap-2 m-auto">
                {info?.danhSachGhe.map((seat) =>
                  seat.daDat ? (
                    <UnavailableSeat key={seat.maGhe} />
                  ) : (
                    <AvailableSeat
                      key={seat.maGhe}
                      isChecked={checkIsChecked(seat.maGhe)}
                      seat={seat}
                      type={seat.loaiGhe === "Thuong" ? "primary" : "VIP"}
                    />
                  )
                )}
              </div>
              <div className="demoSeat mt-10 mx-auto w-4/5 flex justify-evenly items-center p-5 rounded-xl">
                <div className="flex flex-col justify-between items-center">
                  <div className="availableSeat bg-transparent justify-center flex items-center">
                    <p className="text-lg text-white">01</p>
                  </div>
                  <p className="text-primary mt-2 text-base">Available</p>
                </div>
                <div className="flex flex-col justify-between items-center">
                  <div className="selectingSeat justify-center flex items-center bg-#7f66de">
                    <p className="text-lg text-white">01</p>
                  </div>
                  <p className="text-primary mt-2 text-base">Primary</p>
                </div>
                <div className="flex flex-col justify-between items-center">
                  <div className="selectingSeat justify-center flex items-center bg-#c8235d">
                    <p className="text-lg text-white">01</p>
                  </div>
                  <p className="text-primary mt-2 text-base">VIP</p>
                </div>
                <div className="flex flex-col justify-between items-center">
                  <div className="unavailableSeat bg-#707070"></div>
                  <p className="text-primary mt-2 text-base">Unavailable</p>
                </div>
              </div>
            </div>
            <div className="selecting rounded-3xl bg-#3d3d3d hidden lg:block">
              <div className="w-full p-5 border-b-2 border-#707070">
                <h6 className="text-xl text-white">Selecting</h6>
              </div>
              {selectingSeat.length === 0 ? (
                ""
              ) : (
                <div className="pt-2 px-2 border-b-2 border-#707070">
                  {selectingSeat.map((seat) => {
                    return (
                      <div
                        className="flex items-center mb-2 p-4 rounded-xl bg-#707070 relative"
                        key={seat.maGhe}
                      >
                        {seat.loaiGhe === "Thuong" ? (
                          <div className="bg-#7f66de rounded-2xl overflow-hidden w-16 h-16 flex items-center">
                            <p className="text-white text-2xl text-center w-full">
                              {seat.tenGhe}
                            </p>
                          </div>
                        ) : (
                          <div className="bg-#c8235d rounded-2xl overflow-hidden w-16 h-16 flex items-center">
                            <p className="text-white text-2xl text-center w-full">
                              {seat.tenGhe}
                            </p>
                          </div>
                        )}
                        <div className="ml-4">
                          <p className="text-primary xl:text-lg lg:text-sm">
                            {info.thongTinPhim.tenPhim}
                          </p>
                          <p className="text-white xl:text-xl lg:text-lg">
                            {seat.giaVe.toLocaleString()}VND
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
              <div className="pt-5 px-5">
                <div className="xl:flex lg:block justify-between">
                  <p className="text-primary text-lg ">
                    Selecting {selectingSeat.length} items
                  </p>
                  <p className="text-white xl:mt-0 mt-2 text-lg">
                    Total: {totalPrice.toLocaleString()}VND
                  </p>
                </div>
                <div className="mt-5">
                  <button
                    className="checkoutBtn w-full text-xl py-3"
                    onClick={() => {
                      if (selectingSeat.length === 0) {
                        return message.error(
                          "Please select seat before checkout!"
                        );
                      }
                      return next();
                    }}
                  >
                    Checkout
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="fixed bottom-0 bg-#3d3d3d md:w-1/2 w-full left-1/2 -translate-x-1/2 rounded-t-3xl px-8 py-5 lg:hidden block border-4 border-#707070 border-b-0">
            <div className="flex justify-between">
              <p className="text-primary text-lg">
                Selecting {selectingSeat.length} items
              </p>
              <h6 className="text-primary text-lg">
                Total: {totalPrice.toLocaleString()}VND
              </h6>
            </div>
            <div className="mt-5">
              <button
                className="checkoutBtn w-full text-xl py-3"
                onClick={() => {
                  if (selectingSeat.length === 0) {
                    return message.error(
                      "Please select seats before checkout!"
                    );
                  }
                  return next();
                }}
              >
                Checkout
              </button>
            </div>
          </div>
        </>
      ),
    },
    {
      title: "Payment",
      content: (
        <div
          className="flex mt-10 justify-between"
          style={{ minHeight: "70vh" }}
        >
          <div className="payment rounded-3xl bg-#3d3d3d">
            <div className="px-8 py-5 border-b border-#707070">
              <div className="flex justify-between items-center">
                <h6 className="text-white text-xl ">Payment</h6>
                <FontAwesomeIcon
                  icon={faChevronRight}
                  size="2x"
                  className="text-primary"
                />
              </div>
            </div>
            <div className="flex flex-col justify-between h-4/5">
              <div className="px-8 py-10 flex flex-col">
                <div className="md:w-2/3 w-full">
                  <Input
                    placeholder="Credit card number"
                    suffix={
                      <div className="flex">
                        <img
                          src={
                            "https://cdn.freebiesupply.com/logos/large/2x/visa-4-logo-png-transparent.png"
                          }
                          alt="visa"
                          width={30}
                        />
                        <img
                          src="https://cdn.freebiesupply.com/logos/large/2x/mastercard-6-logo-png-transparent.png"
                          alt="mastercard"
                          width={30}
                        />
                      </div>
                    }
                    className="py-2 bg-transparent border-#707070 border-2 shadow-none rounded-md"
                  />
                </div>
                <div className="mt-2 flex md:w-2/3 w-full justify-between">
                  <div className="expDate">
                    <Input
                      placeholder="EXP DATE"
                      suffix={<span className="text-#707070">MM/YY</span>}
                      className="py-2 bg-transparent border-#707070 border-2 shadow-none rounded-md"
                    />
                  </div>
                  <div className="CVV">
                    <Input
                      placeholder="CVV"
                      suffix={<span className="text-#707070"></span>}
                      className="py-2 bg-transparent border-#707070 border-2 shadow-none rounded-md"
                    />
                  </div>
                </div>
              </div>
              <div className="px-8">
                <button className="back mr-2 px-8 py-2" onClick={() => prev()}>
                  Back
                </button>
                <button
                  className="next px-8 py-2"
                  onClick={() => {
                    next();
                    dispatch(
                      handleBookingTicket(
                        {
                          maLichChieu: maLichChieu,
                          danhSachVe: selectingSeat,
                        },
                        message
                      )
                    );
                  }}
                >
                  Pay
                </button>
              </div>
            </div>
          </div>
          <div className="bookingSummary rounded-3xl bg-#3d3d3d hidden lg:flex flex-col">
            <div className="w-full p-5 border-b-2 border-#707070">
              <h6 className="text-xl text-white">Booking summary</h6>
            </div>
            <div className="flex flex-col justify-between flex-1">
              <div>
                <div className="p-5 border-b-2 border-#707070 flex justify-between items-center">
                  <div className="w-2/3">
                    {selectingSeat.map((seat, index) => {
                      if (index + 1 === selectingSeat.length) {
                        return (
                          <span className="text-white text-lg" key={index}>
                            Seat {seat.tenGhe}
                          </span>
                        );
                      }
                      return (
                        <span className="text-white text-lg" key={index}>
                          Seat {seat.tenGhe},{" "}
                        </span>
                      );
                    })}
                    <p className="text-primary text-base">
                      {info.thongTinPhim.tenRap}
                    </p>
                  </div>
                  <div className="bg-#707070 lg:w-1/3 xl:w-1/4 h-12 rounded-lg flex p-2 divide-x-2 divide-primary items-center justify-between">
                    <div className="w-1/2 text-center">
                      <FontAwesomeIcon
                        className="text-primary -rotate-45 text-xl"
                        icon={faTicket}
                      />
                    </div>
                    <div className="w-1/2 text-center">
                      <span className="text-primary text-base">
                        X{selectingSeat.length}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="pt-5 px-5">
                  <div className="flex justify-between">
                    <p className="text-primary text-base ">Primary tickets</p>
                    <p className="text-white xl:mt-0 text-base">
                      {filterPrimaryTicket()[0]?.giaVe}VND x{" "}
                      {filterPrimaryTicket()?.length}{" "}
                    </p>
                  </div>
                  {filterVIPTicket() !== [] && (
                    <div className="flex justify-between mt-2">
                      <p className="text-primary text-base ">VIP tickets</p>
                      <p className="text-white xl:mt-0 text-base">
                        {filterVIPTicket()[0]?.giaVe}VND x{" "}
                        {filterVIPTicket()?.length}{" "}
                      </p>
                    </div>
                  )}
                </div>
              </div>
              <div className="flex justify-between mt-2 p-5 border-t-2 border-#707070">
                <p className="text-primary text-base ">
                  {selectingSeat.length} items
                </p>
                <p className="text-white xl:mt-0 text-base">
                  Total: {totalPrice}
                </p>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Payment successful",
      content: (
        <div
          className="flex mt-10 justify-between"
          style={{ minHeight: "70vh" }}
        >
          <div className="paymentSuccessful hidden sm:block rounded-3xl bg-#3d3d3d">
            <div className="px-8 py-5 border-b border-#707070">
              <p className="text-white text-xl font-bold">
                Congratulations, you have completed your booking!
              </p>
            </div>
            <div className="flex flex-col justify-between h-4/5">
              <div className="px-8 py-10 flex flex-col">
                <div>
                  <p className="text-white text-lg font-bold">
                    E-tickets and invoice
                  </p>
                  <ul
                    className="text-primary text-base list-disc"
                    style={{ marginLeft: "15px" }}
                  >
                    <li>
                      Your e-tickets and invoice are sent to your provided
                      email.
                    </li>
                    <li>
                      You can also download your e-tickets with the button
                      below.
                    </li>
                    <li>Please scan it to check-in and enjoy the movie</li>
                  </ul>
                  <button className="downloadETicketsBtn font-Oxygen font-lg my-5 px-5 py-3">
                    Download e-ticket
                  </button>
                  <hr className="w-1/3" />

                  <p className="mt-5 text-primary text-base opacity-75">
                    Please contact us if ypu have not received the email or need
                    any support
                  </p>
                  <p className="text-primary text-base">
                    Email: abccinema@gmail.com
                  </p>
                  <p className="text-primary text-base">
                    Phone: +84 123 456 7890
                  </p>
                </div>
              </div>
              <div className="px-8">
                <button
                  className="back mr-2 px-8 py-2"
                  onClick={() => navigate("/home")}
                >
                  Back to home page
                </button>
              </div>
            </div>
          </div>
          <div className="eTickets flex sm:hidden rounded-3xl lg:flex flex-col overflow-hidden">
            <div className="rounded-3xl overflow-hidden">
              <div
                className="w-full px-10 py-5 border-b-2 border-#707070 text-center"
                style={{ backgroundColor: "#1a152d" }}
              >
                <p className="text-xl text-white font-bold">E-tickets</p>
                <img
                  className="mt-5 mb-2 w-full rounded-3xl"
                  style={{ height: "200px" }}
                  src={info.thongTinPhim.hinhAnh}
                  alt={info.thongTinPhim.tenPhim}
                />
                <p className="text-white text-lg">
                  {info.thongTinPhim.tenPhim}
                </p>
              </div>
              <div className="flex bg-#3d3d3d flex-col justify-between flex-1">
                <div className="px-10 py-5">
                  <div className="flex mb-2">
                    <p className="text-primary text-xs w-5/12">Time</p>
                    <p className="text-white text-xs">
                      {info && info?.thongTinPhim.gioChieu}, <br />
                      {getDayOfWeek(info?.thongTinPhim.ngayChieu)},{" "}
                      {getMonth(
                        splitNgayChieu(info?.thongTinPhim.ngayChieu)[1] - 1
                      ).slice(0, 3)}{" "}
                      {splitNgayChieu(info?.thongTinPhim.ngayChieu)[0]},{" "}
                      {splitNgayChieu(info?.thongTinPhim.ngayChieu)[2]}
                    </p>
                  </div>
                  <div className="flex mb-2">
                    <p className="text-primary text-xs w-5/12">Cinema</p>
                    <div>
                      <p className="text-white text-xs">
                        {info.thongTinPhim.tenCumRap}
                      </p>
                      <p className="text-primary opacity-75 text-xs">
                        {info.thongTinPhim.diaChi.length > 10
                          ? info.thongTinPhim.diaChi.substring(0, 10) + "..."
                          : info.thongTinPhim.diaChi}
                      </p>
                    </div>
                  </div>

                  <div className="flex mb-2">
                    <p className="text-primary text-xs w-5/12">Room</p>
                    <p className="text-white text-xs">
                      {info.thongTinPhim.tenRap}
                    </p>
                  </div>
                  <div className="flex mb-2">
                    <p className="text-primary text-xs w-5/12">Seat</p>
                    <p className="text-white text-xs">
                      {selectingSeat.map((seat, index) => {
                        if (index + 1 === selectingSeat.length) {
                          return seat.tenGhe;
                        }
                        return seat.tenGhe + ", ";
                      })}
                    </p>
                  </div>
                  <div className="flex mb-2">
                    <p className="text-primary text-xs w-5/12">Total paid</p>
                    <p className="text-white text-xs">
                      {totalPrice.toLocaleString()}VND
                    </p>
                  </div>
                </div>
                <hr className="border-2 border-#707070 border-dashed" />
                <div className="p-10 bg-#3d3d3d">
                  <img
                    src="https://static.vecteezy.com/system/resources/previews/001/199/360/original/barcode-png.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
  ];

  const items = steps.map((item) => ({
    key: item.title,
    title: item.title,
  }));

  useEffect(() => {
    dispatch(fetchInfo(maLichChieu));
    return () => {
      dispatch(resetTicketRoomReducer());
    };
  }, [maLichChieu]);

  if (loading) {
    return (
      <Spin
        className="bg-#1d1d1d"
        style={{
          width: "100%",
          position: "absolute",
          height: "100vh",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          padding: 100,
        }}
        indicator={antIcon}
        key="spin"
      />
    );
  }
  return (
    <section className="py-16 relative">
      <div className="m-auto lg:w-5/6 w-11/12">
        <div className="flex justify-between h-48">
          <div className="lg:flex hidden px-2 py-5 flexLeft bg-#3d3d3d rounded-xl overflow-hidden">
            <div>
              <button
                className="text-white text-lg hover:opacity-75 active:opacity-50 bg-#707070 w-8 h-8 rounded-full ml-2"
                onClick={() => {
                  navigate(-1);
                }}
              >
                <FontAwesomeIcon icon={faChevronLeft} />
              </button>
            </div>
            <div className="flex-1 ml-5">
              <p className="text-primary text-lg leading-8">Ticket booking</p>
              <Steps
                className="step mt-20"
                labelPlacement="vertical"
                current={current}
                items={items}
              />
            </div>
          </div>
          <div className="flex flexRight pr-2 bg-#3d3d3d rounded-xl overflow-hidden w-full">
            <div className="rounded-xl overflow-hidden lg:w-5/12 w-1/2">
              <img
                className="w-full h-full"
                src={info?.thongTinPhim.hinhAnh}
                alt={info?.thongTinPhim.tenPhim}
              />
            </div>
            <div className="ml-3 flex flex-col justify-center">
              <h3 className="text-white text-xl">
                {info?.thongTinPhim.tenPhim}
              </h3>
              <p className="text-primary text-sm mt-1">
                {info && info?.thongTinPhim.gioChieu},{" "}
                {getDayOfWeek(info?.thongTinPhim.ngayChieu)},{" "}
                {getMonth(splitNgayChieu(info?.thongTinPhim.ngayChieu)[1] - 1)}{" "}
                {splitNgayChieu(info?.thongTinPhim.ngayChieu)[0]},{" "}
                {splitNgayChieu(info?.thongTinPhim.ngayChieu)[2]}
              </p>
              <p className="text-primary text-sm mt-1">
                {info?.thongTinPhim.tenCumRap}
              </p>
            </div>
          </div>
        </div>
        <div className="">{steps[current].content}</div>
      </div>
    </section>
  );
};
export default TicketRoom;
