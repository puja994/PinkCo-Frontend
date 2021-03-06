import React from "react";
import { Col, Container, Jumbotron, Row } from "react-bootstrap";
import Footer from "./partials/Footer";
import {Header} from "./partials/Header";
import "./defaultLayout.style.css";

const DefaultLayout = ({ children }) => {
	return (
		<>
		<div className="default-layout">
			<Header/>

			</div>

			<div className="main">
				<div className="child">
				{children}
				</div>

				<Footer />
			</div>
		
		</>
	);
};

export default DefaultLayout;
