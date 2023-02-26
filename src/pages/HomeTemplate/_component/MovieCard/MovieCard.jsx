import { Button } from "../button/Button";
import "./MovieCard.css";

export const Card = ({ hinhAnh, tenPhim, ...props }) => {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img
        src="https://movienew.cybersoft.edu.vn/hinhanh/cinderella_gp06.jpg"
        className="card-img-top"
        alt="..."
      />
      <div className="card-body text-center pb-8 relative flex flex-col">
        <h5 className="card-title text-primary text-2xl my-1 h-2/3">
          Cinderellaasd fdsafasdfa sdfdsafasdfa
        </h5>
        <p className="card-text text-#707070 h-1/3">Action | 1h33m | English</p>
        <button className="card-btn btn absolute left-1/2 -translate-x-1/2 bottom-0 translate-y-1/2">
          Book
        </button>
      </div>
    </div>
  );
};
