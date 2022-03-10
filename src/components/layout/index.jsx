import React, { useEffect, useState } from "react";
import Sidebar from "./sidebar";
import Header from "./header";
import { useLocation, useNavigate, useParams } from "react-router-dom";

const Layout = (props) => {
	const [headerProps, setHeaderProps] = useState({
		text: "",
		button: false,
	});
	let location = useLocation();
	const textReturnHandler = () => {
		switch (window.location.pathname) {
			case "/":
				return "some check";

			case "/residental-wash-&-flod":
				return "some other flod";
		}
	};
	let params = useParams();
	useEffect(() => {
		switch (location.pathname) {
			case "/residental-wash-&-flod":
				setHeaderProps({
					text: "changed text",
					button: false,
				});
				break;
			default:
				setHeaderProps({
					text: "home text",
					button: false,
				});
		}
	
	}, [location]);

	return (
		<div className="px-[34px]">
			<div className="flex flex-row my-[30px]">
				<Sidebar />
				<div className="w-full ml-[104px]">
					<Header headerText={headerProps.text} />
					{props?.children}
				</div>
			</div>
		</div>
	);
};
export default Layout;
