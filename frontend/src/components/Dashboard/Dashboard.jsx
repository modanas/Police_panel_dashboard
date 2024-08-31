// src/components/Dashboard.jsx

import "./Dashboard.css";
import DashCard from "./DashCard.jsx";
import DashboardData from "./DashboardData.js";
import { FaHome } from "react-icons/fa";
import { FaBuildingShield } from "react-icons/fa6";
import { GrUserPolice } from "react-icons/gr";
import { RiCriminalFill } from "react-icons/ri";
import { GiCrimeSceneTape } from "react-icons/gi";
import { FaDumpsterFire } from "react-icons/fa";
import { TbReportSearch } from "react-icons/tb";


const Dashboard = () => {
	return (
		<div className="dashboard-container">
			<aside className="sidebar">
        <div className="profile-Wrapper">
          <img src="https://images.pexels.com/photos/1310522/pexels-photo-1310522.jpeg?auto=compress&cs=tinysrgb&w=600"/>
          <h1 className="username">Anas</h1>
        </div>

				<ul>
					<li><FaHome className="sidebar-icons"/>Dashboard</li>
          <li><FaBuildingShield className="sidebar-icons"/>Police Station</li>
          <l1><GrUserPolice className="sidebar-icons"/>   Police</l1>
					<li><GiCrimeSceneTape className="sidebar-icons"/>Crime Category</li>
          <li><RiCriminalFill className="sidebar-icons"/>Views Criminals</li>
          <li><FaDumpsterFire className="sidebar-icons"/>View Fir</li>
          <li><TbReportSearch className="sidebar-icons"/>Reports</li>
				</ul>
			</aside>

			<main className="main-content">
				<div className="dashboard-header">Dashboard</div>
				<div className="cards-container">
					{DashboardData.map((data) => (
						<DashCard
							key={data.id}
							cardTitle={data.card_title}
							cardContent={data.card_content}
						/>
					))}
				</div>
			</main>
		</div>
	);
};

export default Dashboard;
