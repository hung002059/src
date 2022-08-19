import React from "react";
import { useSelector } from "react-redux";

export default function CartDetail() {
  const selector = useSelector((state) => state.userReducer);

  const handleBookingTicket = () => {
    const { userInfo, cartList } = selector;
    console.log(userInfo, cartList);
  };
  handleBookingTicket();

  const renderTableBody = () => {
    return;
  };

  return (
    <div className="modal-body">
      <form>
        <table className="table text-center">
          <thead>
            <tr>
              <th>Tên KH</th>
              <th>Tên Phim</th>
              <th>Ghế</th>
              <th>Tổng tiền</th>
            </tr>
          </thead>
          <tbody id="cartBody" />
        </table>
        <div className="modal-footer">
          <button type="button" className="btn btn-primary">
            Đặt vé
          </button>
        </div>
      </form>
    </div>
  );
}
