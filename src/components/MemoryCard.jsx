import { useState } from "react";
import React from "react";
import "./MemoryCard.css";
const isFlipped = false;

let MemoryCard = (props) => {
	const [isFlipped, setIsFlipped] = useState("false");

	function clickHandler() {
		setIsFlipped(!isFlipped);
		console.log(isFlipped);
	}
// let flipped = false;

	return (
		<div className="MemoryCard" onClick={clickHandler}>
			<div
				className={
					props.isFlipped ? "MemoryCardInner " : "MemoryCardInner flipped"
				}
			>
				<div className="MemoryCardBack">
					<img src="images/dc-logo.svg" />
				</div>
				<div className="MemoryCardFront">{props.symbol}</div>
			</div>
		</div>
	);
};




export default MemoryCard;
