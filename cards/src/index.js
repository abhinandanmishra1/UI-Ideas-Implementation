import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Card1 from "./cards/card1/Card";
import CardHome from "./cards/Home/CardHome";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<BrowserRouter>
		<Routes>
			<Route path="/" element={<App />} />
			<Route path="/cards" element={<CardHome />} />
			<Route path="/card1" element={<Card1 />} />
		</Routes>
	</BrowserRouter>
);
