import { hover } from "@testing-library/user-event/dist/hover";
import {
  selectSeat,
  unselectSeat,
} from "pages/HomeTemplate/TicketRoom/duck/action";
import React from "react";
import { useDispatch } from "react-redux";
import "./Available.css";
export default function AvailableSeat({ seat, type, isChecked }) {
  const dispatch = useDispatch();
  const handleOnSelect = (e) => {
    e.target.checked
      ? dispatch(selectSeat(seat))
      : dispatch(unselectSeat(seat));
  };
  return (
    <div
      className="relative inline-block justify-self-stretch"
      key={seat.maGhe}
    >
      <input
        className={`input text-primary border border-primary rounded-lg w-16 h-16 flex items-center justify-center`}
        type="checkbox"
        defaultChecked={isChecked}
        onChange={handleOnSelect}
      />
      <label
        className={`${type} checkmark block text-white text-center text-lg`}
      >
        {seat.tenGhe}
      </label>
    </div>
  );
}
