import React from "react";
import "./Form.css";

export default function Form() {
  return (
    <div className="Form">
      <form>
        <div className="row">
          <div className="col-9">
            <div className="input-group mb-3 mt-2">
              <input
                type="search"
                placeholder="Enter a city"
                className="form-control"
              />

              <div className="col-3">
                <button
                  type="submit"
                  value="Search"
                  className="btn btn-outline-secondary"
                >
                  Search
                </button>{" "}
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
