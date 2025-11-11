// src/pages/MapPage.tsx
import React, { useEffect, useState } from "react"; // Import useState
import { MapContainer, TileLayer, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet.heat";
// import { delhiNCRHotspots } from "../lib/hotspots"; // We no longer need this
import { login, getHotspots } from "../services/apiService"; // Import our new functions

// Define the Hotspot structure to match our backend API
interface Hotspot {
    id: number;
    latitude: number;
    longitude: number;
    severity: 'LOW' | 'MODERATE' | 'HIGH'; // Matches our backend Enum
    imageUrl: string;
    createdAt: string;
}

// Update this function to take hotspots as an argument
function buildHeatData(hotspots: Hotspot[]) {
    const tuples: [number, number, number][] = hotspots.map((h) => {
        // Update logic to match our backend model
        const intensity =
            h.severity === "HIGH" ? 1.0 : h.severity === "MODERATE" ? 0.6 : 0.3;
        // Use latitude and longitude from API
        return [h.latitude, h.longitude, intensity];
    });
    return tuples;
}

// Update HeatLayer to accept hotspots as a prop
function HeatLayer({ hotspots }: { hotspots: Hotspot[] }) {
    const map = useMap();

    // This effect will re-run whenever the `hotspots` prop changes
    useEffect(() => {
        if (!hotspots || hotspots.length === 0) {
            return; // Don't do anything if there's no data
        }

        // Call the updated buildHeatData function
        const points = buildHeatData(hotspots);

        const layer = (L as any)
            .heatLayer(points, {
                maxZoom: 25,
                radius: 30,
                blur: 12,
                minOpacity: 0.4,
                gradient: {
                    0.3: "#ffff00", // yellow
                    0.6: "#ffa500", // orange
                    1.0: "#ff0000", // red
                },
            })
            .addTo(map);

        return () => {
            map.removeLayer(layer);
        };
    }, [map, hotspots]); // Add `hotspots` as a dependency

    return null;
}

export default function MapPage() {
    const center: [number, number] = [30.3165, 78.0322]; // Roorkee
    
    // Create state to hold our hotspot data
    const [hotspots, setHotspots] = useState<Hotspot[]>([]);

    // This hook runs once to fetch the data
    useEffect(() => {
        const testLoginAndFetch = async () => {
            try {
                // 1. Log in (for testing)
                // !! Change this to your test user's credentials !!
                await login("test2@example.com", "another-password");

                // 2. Fetch hotspots (now that we are logged in)
                const data: Hotspot[] = await getHotspots();
                setHotspots(data); // Save the data to our state
                
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        testLoginAndFetch();
    }, []); // Empty array [] means "run once on load"

    return (
        <div style={{ height: "70vh", width: "100%" }}>
            <MapContainer
                center={center}
                zoom={11}
                style={{ height: "100%", width: "100%" }}
            >
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                {/* Pass the fetched hotspots to the HeatLayer */}
                <HeatLayer hotspots={hotspots} />
                {/* No markers */}
            </MapContainer>
        </div>
    );
}