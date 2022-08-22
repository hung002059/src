import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { bookingTicketApi } from "../../services/booking";

export default function CartDetail() {
  const selector = useSelector((state) => state.userReducer);
  const { cartList } = selector;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const renderTableBody = () => {
    return cartList.map((ele) => {
      return (
        <tr key={ele.maLichChieu}>
          <td>{ele.tenPhim}</td>
          <td>
            {ele.tenGhe.map((ele, idx) => {
              return (
                <button key={idx} className="badge badge-warning m-1">
                  {ele}
                </button>
              );
            })}
          </td>
          <td>{ele.gioChieu}</td>
          <td>{ele.ngayChieu}</td>
          <td>
            {ele.danhSachVe &&
              ele.danhSachVe
                .reduce((previousValue, currentValue) => {
                  previousValue += currentValue.giaVe;
                  return previousValue;
                }, 0)
                .toLocaleString()}
          </td>
        </tr>
      );
    });
  };

  const bookingTicket = async () => {
    if (cartList) {
      const dataTicket = cartList.map((element) => {
        return {
          maLichChieu: element.maLichChieu,
          danhSachVe: element.danhSachVe,
        };
      });

      await dataTicket.map((data) => {
        bookingTicketApi(data);
      });

      alert("Bạn đặt thành công");

      dispatch();

      navigate("/");
    }
  };

  return (
    <div className="modal-body">
      <form>
        <table className="table text-center">
          <thead>
            <tr>
              <th>Tên Phim</th>
              <th>Ghế</th>
              <th>Giờ chiếu</th>
              <th>Ngày chiếu</th>
              <th>Tổng tiền</th>
            </tr>
          </thead>
          <tbody id="cartBody">{renderTableBody()}</tbody>
        </table>
        <div className="modal-footer">
          <button
            onClick={() => {
              bookingTicket();
            }}
            type="button"
            className="btn btn-primary"
          >
            Đặt vé
          </button>
        </div>
      </form>
    </div>
  );
}
