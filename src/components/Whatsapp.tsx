import { FloatingWhatsApp } from "react-floating-whatsapp";
import logo from "../assets/img/logodigi.jpg";

const Whatsapp = () => {
	const logoUrl = logo.src;
	return (
		<FloatingWhatsApp
			accountName="Digiimpact Ernakulam"
			phoneNumber="+919747745544"
			avatar={logoUrl}
			statusMessage="Live chat now"
			chatMessage="Welcome to Educational Equipment Supply 🤝. How can we help?"
		/>
	);
};

export default Whatsapp;
