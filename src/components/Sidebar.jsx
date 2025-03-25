import React, { useState } from "react";
import { FaHeadset, FaSignOutAlt, FaClipboardList, FaTachometerAlt } from "react-icons/fa";
import { IoChevronBack } from "react-icons/io5";

function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className={`sidebar ${isOpen ? "open" : "closed"}`}>
      <button className="toggle-btn" onClick={() => setIsOpen(!isOpen)}>
        <IoChevronBack className={`toggle-icon ${isOpen ? "" : "rotate"}`} />
      </button>
      <h2 className="logo">{isOpen ? "Airrchip" : "A"}</h2>
      <ul className="menu">
        <li className="active">
          <FaClipboardList className="icon" /> {isOpen && "Claims"}
        </li>
        <li>
          <FaTachometerAlt className="icon" /> {isOpen && "Dashboard"}
        </li>
      </ul>
      <div className="bottom-menu">
        <ul>
          <li>
            <FaHeadset className="icon" /> {isOpen && "Support"}
          </li>
          <li>
            <FaSignOutAlt className="icon" /> {isOpen && "Logout"}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
