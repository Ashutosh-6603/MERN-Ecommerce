import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <div className="top-strip py-2 border border-gray-250 border-solid border-t-1 border-b-1">
        <div className="container">
          <div className="flex items-center justify-between">
            <div className="col1 w-[50%]">
              <p className="text-[12px] font-[500]">
                Get up to 50% off new season styles, limited time only
              </p>
            </div>
            <div className="col2 flex items-center justify-end">
              <ul className="flex items-center gap-3">
                <li className="list-none">
                  <Link
                    to="help-center"
                    className="text-[12px] link font-[500] transition"
                  >
                    Help Center
                  </Link>
                </li>
                <li className="list-none">
                  <Link
                    to="order-tracking"
                    className="text-[12px] link font-[500] transition"
                  >
                    Order Tracking
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div></div>
    </header>
  );
}
