import React from "react";
import { Col, Container, Jumbotron, Row } from "react-bootstrap";
import Footer from "./partials/Footer";
import Header from "./partials/Header";

//import SideBarNav from "../sidebar/SideBarNav";
import "./defaultLayout.style.css";

const DefaultLayout = ({ children }) => {
	return (
		<>
		<div className="default-layout">
			i wrap everyone with my layout or may be navbar
			</div>

			<div className="main">
				<Header />
				<Jumbotron>{children}</Jumbotron>

				<Footer />
			</div>
		
		</>
	);
};

export default DefaultLayout;
