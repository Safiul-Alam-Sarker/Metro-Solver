import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import logo from "../../assets/Frame_1.gif";

const markerIcon = new L.Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/684/684908.png",
  iconSize: [30, 30],
});

const Map = () => {
  const center = [23.780887, 90.279238];

  return (
    <section className="mapbox w-full flex justify-center">
      <div className="w-full max-w-4xl h-[450px]">
        <MapContainer
          center={center}
          zoom={13}
          style={{ height: "100%", width: "100%" }}
        >
          <TileLayer
            url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          />

          <Marker position={center} icon={markerIcon}>
            <Popup>
              <div
                style={{
                  background: "lightblue",
                  borderRadius: "10px",
                  padding: "10px",
                }}
                className="flex flex-col items-start gap-2 p-2"
              >
                <div className="flex items-center gap-2">
                  <img
                    src={logo}
                    alt="Logo"
                    className="w-12 h-12 object-contain rounded-full"
                  />
                  <strong style={{ color: "black" }}>Metro Solver</strong>
                </div>
                <div className="flex items-center gap-2">
                  <span>📍</span>
                  <span style={{ color: "black" }}>Dhaka, Bangladesh</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>📞</span>
                  <span style={{ color: "black" }}>+880 123456789</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>✉️</span>
                  <span style={{ color: "black" }}>info@metrosolver.com</span>
                </div>
              </div>
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </section>
  );
};

export default Map;
