// src/components/Dashboard.jsx

import "./Dashboard.css";
import DashCard from "./DashCard.jsx";
import DashboardData from "./DashboardData.js";
import { useState } from "react";
import { FaHome } from "react-icons/fa";
import { FaBuildingShield } from "react-icons/fa6";
import { GrUserPolice } from "react-icons/gr";
import { RiCriminalFill } from "react-icons/ri";
import { GiCrimeSceneTape } from "react-icons/gi";
import { FaDumpsterFire } from "react-icons/fa";
import { TbReportSearch } from "react-icons/tb";
import { IoIosArrowDown } from "react-icons/io";

const Dashboard = () => {
  const [dropdowns, setDropdowns] = useState({
    dashboard: false,
    policeStation: false,
    police: false,
    crimeCategory: false,
    viewsCriminals: false,
    viewFir: false,
    reports: false,
  });

  const toggleDropdown = (key) => {
    setDropdowns((prevState) => ({
      ...prevState,
      [key]: !prevState[key],
    }));
  };

  return (
    <div className="dashboard-container">
      <aside className="sidebar">
        <div className="profile-Wrapper">
          <img src="https://images.pexels.com/photos/1310522/pexels-photo-1310522.jpeg?auto=compress&cs=tinysrgb&w=600" />
          <h1 className="username">Anas</h1>
        </div>

        <ul>
          <li>
            <button onClick={() => toggleDropdown("")} className="dropdown-btn">
              <FaHome className="sidebar-icons" />
              Dashboard
            </button>
            {/* {dropdowns.dashboard && (
              <ul className="dropdown-content">
                <li>Subitem 1</li>
                <li>Subitem 2</li>
              </ul>
            )} */}
          </li>
          <li>
            <button onClick={() => toggleDropdown("policeStation")} className="dropdown-btn">
              <FaBuildingShield className="sidebar-icons" />
              Police Station <IoIosArrowDown />

            </button>
            {dropdowns.policeStation && (
              <ul className="dropdown-content">
                <li>Add Police Station</li>
                <li>Manage Police Station</li>
              </ul>
            )}
          </li>
          <li>
            <button onClick={() => toggleDropdown("police")} className="dropdown-btn">
              <GrUserPolice className="sidebar-icons" />
              Police   <IoIosArrowDown />

            </button>
            {dropdowns.police && (
              <ul className="dropdown-content">
                <li>Add Police</li>
                <li>Manage</li>
              </ul>
            )}
          </li>
          <li>
            <button onClick={() => toggleDropdown("crimeCategory")} className="dropdown-btn">
              <GiCrimeSceneTape className="sidebar-icons" />
             Crime Category<IoIosArrowDown />

            </button>
            {dropdowns.crimeCategory && (
              <ul className="dropdown-content">
                <li>Subitem 1</li>
                <li>Subitem 2</li>
              </ul>
            )}
          </li>
          <li>
            <button onClick={() => toggleDropdown("")} className="dropdown-btn">
              <RiCriminalFill className="sidebar-icons" />
              Views Criminals
            </button>
            {/* {dropdowns.viewsCriminals && (
              <ul className="dropdown-content">
                <li>Subitem 1</li>
                <li>Subitem 2</li>
              </ul>
            )} */}
          </li>
          <li>
            <button onClick={() => toggleDropdown("")} className="dropdown-btn">
              <FaDumpsterFire className="sidebar-icons" />
              View Fir 
            </button>
            {/* {dropdowns.viewFir && (
              <ul className="dropdown-content">
                <li>Subitem 1</li>
                <li>Subitem 2</li>
              </ul>
            )} */}
          </li>
          <li>
            <button onClick={() => toggleDropdown("reports")} className="dropdown-btn">
              <TbReportSearch className="sidebar-icons" />
              Reports <IoIosArrowDown />
            </button>
            {dropdowns.reports && (
              <ul className="dropdown-content">
                <li>Subitem 1</li>
                <li>Subitem 2</li>
              </ul>
            )}
          </li>
        </ul>
      </aside>

      <main className="main-content">
        <div className="dashboard-header">Dashboard</div>
        <div className="cards-container">
          {DashboardData.map((data) => (
            <DashCard key={data.id} cardTitle={data.card_title} cardContent={data.card_content} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
