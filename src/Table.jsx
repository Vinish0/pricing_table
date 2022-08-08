import React from "react";
import { GoCheck } from "react-icons/go";
import { ImCross } from "react-icons/im";

function Table({ member }) {
  return (
    <>
      <div className="col-lg-4">
        <div className="card mb-5 mb-lg-0">
          <div className="card-body">
            <h5 className="card-title text-muted text-uppercase text-center">
              {member.member}
            </h5>
            <h6 className="card-price text-center">
              ${member.price}
              <span className="period">/month</span>
            </h6>
            <hr />
            <ul className="fa-ul list-inline">
              <li className={`${member.highlight ? "fw-bold" : null}`}>
                <span className="me-2">
                  {member.member ? (
                    <span>
                      <GoCheck />
                    </span>
                  ) : (
                    <ImCross size={10} />
                  )}
                </span>
                {member.user}
              </li>
              <li>
                <span className="me-2">
                  {member.member ? (
                    <span>
                      <GoCheck />
                    </span>
                  ) : (
                    <ImCross size={10} />
                  )}
                </span>
                {member.storage}
              </li>
              <li>
                <span className="me-2">
                  {member.member ? (
                    <span>
                      <GoCheck />
                    </span>
                  ) : (
                    <ImCross size={10} />
                  )}
                </span>
                {member.publicProjects}
              </li>
              <li>
                <span className="me-2">
                  {member.member ? (
                    <span>
                      <GoCheck />
                    </span>
                  ) : (
                    <ImCross size={10} />
                  )}
                </span>
                {member.access}
              </li>
              <li className={member.member === "FREE" ? "text-muted" : ""}>
                <span className="me-2">
                  {member.member !== "FREE" ? (
                    <span>
                      <GoCheck />
                    </span>
                  ) : (
                    <ImCross size={10} />
                  )}
                </span>
                {member.privateProjects}
              </li>
              <li className={member.member === "FREE" ? "text-muted" : ""}>
                <span className="me-2">
                  {member.member !== "FREE" ? (
                    <span>
                      <GoCheck />
                    </span>
                  ) : (
                    <ImCross size={10} />
                  )}
                </span>
                {member.support}
              </li>
              <li className={member.member === "FREE" ? "text-muted" : ""}>
                <span className="me-2">
                  {member.member !== "FREE" ? (
                    <span>
                      <GoCheck />
                    </span>
                  ) : (
                    <ImCross size={10} />
                  )}
                </span>
                {member.domain}
              </li>
              <li
                className={member.member !== "PRO" ? "text-muted" : "text-dark"}
              >
                <span className="me-2">
                  {member.member === "PRO" ? (
                    <span>
                      <GoCheck />
                    </span>
                  ) : (
                    <ImCross size={10} />
                  )}
                </span>
                {member.statusReport}
              </li>
            </ul>
            <div className="d-grid">
              <button className="btn btn-primary text-uppercase">
                Button
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Table;
