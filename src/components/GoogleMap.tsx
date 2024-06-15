import { GoogleMap, LoadScriptNext, InfoWindow } from "@react-google-maps/api";

const MapContainer = ({ APIKEY }: { APIKEY: string }) => {
	const mapStyles = {
		height: "100%",
		width: "100%",
	};
	const placeCoordinates = {
		lat: 10.116661366236023,
		lng: 76.35333960731609,
	};
	const getDirectionsLink = () => {
		return `https://www.google.com/maps/dir/?api=1&destination=${placeCoordinates.lat},${placeCoordinates.lng}`;
	};

	const handleDirectionsClick = () => {
		const directionsLink = getDirectionsLink();
		window.open(directionsLink, "_blank");
	};

	return (
		<LoadScriptNext
			googleMapsApiKey={APIKEY}
			onLoad={() => console.log("Google Maps API loaded")}
			loadingElement={<div>Loading...</div>}
		>
			<GoogleMap
				mapContainerStyle={mapStyles}
				zoom={15}
				center={placeCoordinates}
			>
				<InfoWindow position={placeCoordinates}>
					<div>
						<h4
							style={{ color: "black", fontWeight: "bold", fontSize: "18px" }}
						>
							Digiimpact
						</h4>
						<p style={{ color: "black", fontWeight: "bold" }}>
							Educational Equipment Distributor, Aluva
						</p>
						<p style={{ color: "black" }}>Mobile: +919747745544 </p>
						<button
							className="bg-green-500 rounded-2xl p-2"
							onClick={handleDirectionsClick}
						>
							Get Directions
						</button>
					</div>
				</InfoWindow>
			</GoogleMap>
		</LoadScriptNext>
	);
};

export default MapContainer;
