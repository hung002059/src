import React from "react";

export default function Register() {
  return (
    <div className="modal-dialog" role="document">
      <div className="modal-content">
        {/* Modal header */}
        <div className="modal-header">
          <h5 className="modal-title">Đăng kí Khách hàng</h5>
        </div>
        {/* Modal body */}
        <div className="modal-body">
          <form>
            {/* user-name */}
            <div className="form-group">
              <label htmlFor>Tài Khoản</label>
              <input
                type="text"
                className="form-control w-75"
                name
                id
                aria-describedby="helpId"
                placeholder="User Name"
              />
              <small id="helpId" className="form-text text-danger">
                Validation
              </small>
            </div>
            {/* password */}
            <div className="form-group">
              <label htmlFor>Mật Khẩu</label>
              <input
                type="text"
                className="form-control w-75"
                name
                id
                aria-describedby="helpId"
                placeholder="Password"
              />
              <small id="helpId" className="form-text text-danger">
                Validation
              </small>
            </div>
            {/* SĐT */}
            <div className="form-group">
              <label htmlFor>SĐT</label>
              <input
                type="text"
                className="form-control w-75"
                name
                id
                aria-describedby="helpId"
                placeholder="SĐT"
              />
              <small id="helpId" className="form-text text-danger">
                Validation
              </small>
            </div>
            {/* Email */}
            <div className="form-group">
              <label htmlFor>Email</label>
              <input
                type="text"
                className="form-control w-75"
                name
                id
                aria-describedby="helpId"
                placeholder="Email"
              />
              <small id="helpId" className="form-text text-danger">
                Validation
              </small>
            </div>
            {/* Modal footer */}
            <div className="modal-footer">
              <button type="button" className="btn btn-primary">
                Đăng kí
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
