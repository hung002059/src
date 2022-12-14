import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import MovieChair from "../../modules/Movie-seat/movie-chair";
import { fetchRoomListApi } from "../../services/booking";
import { useDispatch } from "react-redux/";
import "./booking.scss";
import { addToCartAction } from "../../store/actions/userAction";

export default function Booking() {
  const [danhSachGhe, setDanhSachGhe] = useState([]);

  const [roomList, setRoomList] = useState();

  const param = useParams();

  const navigate = useNavigate();

  const dispatch = useDispatch();

  useEffect(() => {
    fetchRoomList();
  }, []);

  const fetchRoomList = async () => {
    const result = await fetchRoomListApi(param.maLichChieu);

    setRoomList(result.data.content);
  };

  const handleSelect = (selectedSeat) => {
    const data = [...danhSachGhe];

    const idx = danhSachGhe.findIndex(
      (ele) => ele.tenGhe === selectedSeat.tenGhe
    );

    if (idx !== -1) {
      data.splice(idx, 1);
    } else {
      data.push(selectedSeat);
    }

    setDanhSachGhe(data);
  };

  const handleBookingTicket = async () => {
    const danhSachVe = danhSachGhe.map((ele) => {
      return {
        // tenGhe: ele.tenGhe,
        maGhe: ele.maGhe,
        giaVe: ele.giaVe,
      };
    });
    const tenGhe = danhSachGhe.map((ele) => {
      return ele.tenGhe;
    });

    const submitData = {
      tenGhe,
      gioChieu: roomList.thongTinPhim.gioChieu,
      ngayChieu: roomList.thongTinPhim.ngayChieu,
      tenPhim: roomList.thongTinPhim.tenPhim,
      maLichChieu: param.maLichChieu,
      danhSachVe,
    };

    dispatch(addToCartAction(submitData));
  };

  return roomList ? (
    <div id="movies_booking">
      <div className="w-75 mx-auto py-5">
        <div className="booking_content row">
          <div className="border_chair col-sm-12 col-md-12 col-lg-8 col-xl-8">
            <div className="screen">
              <div className="screen_content py-3">
                <h6 className="text-center">M??n h??nh</h6>
              </div>
            </div>
            <div className="chair ml-0 py-3">
              <div className="chair_layout">
                {roomList.danhSachGhe.map((ele, idx) => {
                  return (
                    <React.Fragment key={ele.tenGhe}>
                      <MovieChair handleSelect={handleSelect} item={ele} />
                      {(idx + 1) % 16 === 0 && <br />}
                    </React.Fragment>
                  );
                })}
              </div>
            </div>
            <div className="chair_decript row container">
              <div className="row">
                <button className="ghe gheVip"></button>
                <h5>Gh??? Vip</h5>
              </div>
              <div className="row">
                <button className="ghe dangDat"></button>
                <h5>Gh??? ??ang Ch???n</h5>
              </div>
              <div className="row">
                <button className="ghe daDat"></button>
                <h5>Gh??? ???? ch???n</h5>
              </div>
              <div className="row">
                <button className="ghe"></button>
                <h5>Gh??? C??n Tr???ng</h5>
              </div>
            </div>
          </div>
          <div className="border_detail col-sm-12 col-md-12 col-lg-4 col-xl-4">
            <div className="detail_img">
              <img className="img-fluid" src={roomList.thongTinPhim.hinhAnh} />
            </div>
            <div className="detail_content py-2">
              <div className="content_title">
                <h1>{roomList.thongTinPhim.tenPhim}</h1>
                <div className="gioChieu">
                  <span className="title">Gi??? chi???u : </span>
                  <span className="content">
                    {roomList.thongTinPhim.gioChieu}
                  </span>
                </div>
                <div className="ngayChieu">
                  <span className="title">Ng??y chi???u : </span>
                  <span className="content">
                    {roomList.thongTinPhim.ngayChieu}
                  </span>
                </div>
                <div className="diaChi">
                  <span className="title">?????a Ch??? : </span>
                  <span className="content">
                    {roomList.thongTinPhim.diaChi}
                  </span>
                </div>
                <div className="rap">
                  <span className="content">
                    {roomList.thongTinPhim.tenRap}
                  </span>
                </div>
                <p>
                  Gh???:
                  {danhSachGhe.map((ele, idx) =>
                    ele.loaiGhe === "Thuong" ? (
                      <span key={idx} className="mr-2 badge badge-success">
                        {ele.tenGhe}
                      </span>
                    ) : (
                      <span key={idx} className="mr-2 badge badge-danger">
                        {ele.tenGhe}
                      </span>
                    )
                  )}
                </p>
                <p>
                  T???ng ti???n:
                  <span className="ml-2">
                    {danhSachGhe
                      .reduce((previousValue, currentValue) => {
                        previousValue += currentValue.giaVe;
                        return previousValue;
                      }, 0)
                      .toLocaleString()}
                  </span>
                  vn??
                </p>
                <button
                  onClick={() => {
                    // navigate("/");
                    handleBookingTicket();
                  }}
                >
                  Th??m v??o gi??? h??ng
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className="loading vh-100">
      <div className="fancy-spinner">
        <div className="ring" />
        <div className="ring" />
        <div className="dot" />
      </div>
    </div>
  );
}
