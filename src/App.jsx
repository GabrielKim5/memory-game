import { useEffect, useState } from "react";
import MemoryCard from "./components/MemoryCard";
import "./App.css";

function App() {
	const [deck, setDeck] = useState([]);
	const [pickedCards, setPickedCards] = useState([]);

	function generateDeck() {
		const symbols = ["∆", "ß", "£", "§", "•", "$", "+", "ø"];
		const deck = [];
		//create 16 cards
		for (let i = 0; i < 16; i++) {
			//create object "cards"
			const card = {
				//set value to false (turning it around)
				isFlipped: "false",
				//give each card a symbol
				symbol: symbols[i % 8],
			};
			//We have an empty array, (.push) method to fill array
			deck.push(card);
		}

		return shuffle(deck);
	}
	//accepts parameters (any)
	//this shuffles cards themselves, on refresh
	function shuffle(a) {
		var j, x, i;
		for (i = a.length - 1; i > 0; i--) {
			j = Math.floor(Math.random() * (i + 1));
			x = a[i];
			a[i] = a[j];
			a[j] = x;
		}
		return a;
	}

	//makes another copy of the generateDeck, setting the value of deck to array i just shuffled
	// 1 step after another to get this method working
	useEffect(() => {
		setDeck(generateDeck());
	}, [setDeck]);

	//maps through everything, while making new array
	//setting all these variables in app.jsx, instead of calling from MemoryCard.jsx
	//MemoryCard is providing a template, that app.jsx can pull from
	//IS THE SKELETON
	let cardsJSX = deck.map((card, index) => {
		return (
			<MemoryCard symbol={card.symbol} isFlipped={card.isFlipped} key={index} />
		);
	});

	const pickCard = (cardIndex) => {};

	return (
		<>
			<div>
				<h2> Memory Game</h2>
				<header style={{ color: "#666666" }}>March Cards To Win</header>
				<div>{cardsJSX.slice(0, 4)}</div>
				<div>{cardsJSX.slice(4, 8)}</div>
				<div>{cardsJSX.slice(8, 12)}</div>
				<div>{cardsJSX.slice(12, 16)}</div>
			</div>
		</>
	);
}

export default App;
