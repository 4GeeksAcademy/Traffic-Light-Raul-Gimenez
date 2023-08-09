import React from "react";
import Light from "./Light";
import TraficLightBG from "./TraficLightBG";

//create your first component
const Home = () => {
	return (
		<TraficLightBG>
			<Light color="red"/>
			<Light color="yellow"/>
			<Light color="green"/>
		</TraficLightBG>
	);
};

export default Home;
