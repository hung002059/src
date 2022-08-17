import React from "react";

export default function Cart() {
  return (
    <div class="modal-body">
      <form>
        <table class="table text-center">
          <thead>
            <tr>
              <th>Tên KH</th>
              <th>Tên Phim</th>
              <th>Ghế</th>
              <th>Tổng tiền</th>
            </tr>
          </thead>
          <tbody id="cartBody"></tbody>
        </table>
        <div class="modal-footer">
          <button type="button" class="btn btn-primary">
            Đặt vé
          </button>
        </div>
      </form>
    </div>
  );
}
