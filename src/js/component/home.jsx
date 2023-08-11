import React, { useEffect, useState } from "react";
import Light from "./Light";
import TraficLightBG from "./TraficLightBG";

//create your first component
const Home = () => {
	const [turnRedOn, setTurnRedOn] = useState("off");
	const [turnYellowOn, setTurnYellowOn] = useState("off");
	const [turnGreenOn, setTurnGreenOn] = useState("off");

	return (
		<TraficLightBG>
			<Light color={turnRedOn} onClick = {() => {
				turnRedOn == "red" ? setTurnRedOn("off") : setTurnRedOn("red");
				setTurnYellowOn("off");
				setTurnGreenOn("off")
				}
			}/>
			<Light color={turnYellowOn} onClick = {() => {
				setTurnRedOn("off")
				turnYellowOn == "yellow" ? setTurnYellowOn("off") : setTurnYellowOn("yellow");
				setTurnGreenOn("off")
				}
			}/>
			<Light color={turnGreenOn} onClick = {() => {
				setTurnRedOn("off")
				setTurnYellowOn("off")
				turnGreenOn == "green" ? setTurnGreenOn("off") : setTurnGreenOn("green")
				}
			}/>
		</TraficLightBG>
	);
};

export default Home;
