import React from 'react'
import { useNavigate } from "react-router-dom";
import "./homeCard.css"

const HomeCard = ({cardNumber,cardTitle,cardDetails,cardLink}) => {
    const navigate = useNavigate();
	const goToCard = (card) => {
		navigate(`/${card}`);
	};
	return (
		<div className="home-card-container" >
			<div className="home-card">
				<div className="home-card-box">
					<div className="home-card-content">
						<h2>{cardNumber<10?"0"+cardNumber:cardNumber}</h2>
						<h3>{cardTitle}</h3>
						<p>
							{cardDetails}
						</p>
						<span onClick={() => goToCard(cardLink)} >See Card Design</span>
					</div>
				</div>
			</div>
		</div>
	);
}

export default HomeCard