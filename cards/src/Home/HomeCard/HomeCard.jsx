import React from 'react'
import { useNavigate } from "react-router-dom";
import "./homeCard.css"

const HomeCard = () => {
    const navigate = useNavigate();
	const goToCard = (card) => {
		navigate(`/${card}`);
	};
	return (
		<div className="home-card-container" onClick={() => goToCard("card1")}>
			<div className="home-card">
				<div className="home-card-box">
					<div className="home-card-content">
						<h2>01</h2>
						<h3>Card One</h3>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
							rem esse aperiam eum placeat sed debitis unde sit cupiditate
							maxime hic sapiente iure enim pariatur reiciendis beatae veritatis
							neque repellendus dolorum, consectetur harum totam modi! Fugit
							sint aliquam amet eaque!
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default HomeCard