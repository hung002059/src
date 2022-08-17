import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { USER_INFO_KEY } from "../../constants/common";
import { setUserInfoAction } from "../../store/actions/userAction";

export default function Header() {
  const dispatch = useDispatch();
  const userState = useSelector((state) => state.userReducer);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem(USER_INFO_KEY);
    dispatch(setUserInfoAction(null));
    navigate("/");
  };

  return (
    <div id="header_nav">
      <div className="container pb-3">
        <div className="Login_layout row">
          {/* Admin */}
          <div className="Admin_login col-6">
            <button
              className="btn btn-success"
              onClick={() => navigate("/login")}
            >
              Kênh người quản lý
            </button>
          </div>

          {/* Client */}
          <div className="Client_login col-6 row justify-content-end">
            <div className="header_Login">
              {!userState.userInfo ? (
                <>
                  <button
                    onClick={() => navigate("/register")}
                    className="btn btn-outline-info my-2 my-sm-0 mr-2"
                    type="submit"
                  >
                    Register
                  </button>

                  <button
                    onClick={() => navigate("/login")}
                    type="button"
                    id="btnLogin"
                    className="btn btn-secondary"
                  >
                    Login
                  </button>
                </>
              ) : (
                <>
                  <span>Welcome {userState.userInfo.hoTen}!!!</span>
                  <button onClick={handleLogout} className="btn btn-info ml-3">
                    Log out
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
        <div className="navbar_content container">
          {/* Logo */}
          <NavLink className="navbar-brand" to="/">
            <h1>Captone</h1>
          </NavLink>

          {/* Cart */}
          <div className="cart ml-auto">
            <div className="cart_layout">
              <div className="cart_content dropdown">
                <button
                  class="btn dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i className="fas fa-shopping-cart" />
                  <span className="quantities">(123456)</span>
                </button>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <div class="modal-body">
                    <form>
                      <table class="table text-center">
                        <thead>
                          <tr>
                            <th>Tên Phim</th>
                            <th>Ghế</th>
                            <th>Tổng tiền</th>
                          </tr>
                        </thead>
                        <tbody id="cartBody"></tbody>
                      </table>
                      <div class="modal-footer">
                        <button
                          onClick={() => navigate("/cart")}
                          type="button"
                          class="btn btn-primary"
                        >
                          Thanh toán
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
