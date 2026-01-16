import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import type { LatLngTuple } from "leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// 🔧 Fix icons (Leaflet + React + TS)
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

const ImpactMap: React.FC = () => {
  const position: LatLngTuple = [-4.247915806700689, 122.55455510158006];

  return (
    <div className="h-full w-full overflow-hidden rounded-[20px]">
      <MapContainer center={position} zoom={10} className="h-full w-full">
        <TileLayer
          attribution="&copy; OpenStreetMap contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            <strong>Project location</strong>
            <br />
            -4.2479, 122.5546
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default ImpactMap;
