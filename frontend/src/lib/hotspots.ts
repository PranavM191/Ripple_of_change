// src/lib/hotspots.ts
export type Hotspot = {
  id: string;
  name: string;
  lat: number;
  lng: number;
  severity: "low" | "medium" | "high";
  notes?: string;
};

export const delhiNCRHotspots: Hotspot[] = [
  {
    id: "wazirabad-barrage",
    name: "Wazirabad Barrage",
    lat: 28.735,
    lng: 77.239,
    severity: "high",
    notes: "Upstream intake; downstream receives drain loads",
  },
  {
    id: "najafgarh-outfall",
    name: "Najafgarh Drain Outfall",
    lat: 28.657,
    lng: 77.133,
    severity: "high",
    notes: "Large drain contributes heavy pollution/solid waste",
  },
  {
    id: "ito-barrage",
    name: "ITO Barrage",
    lat: 28.625,
    lng: 77.243,
    severity: "medium",
    notes: "Mid-city stretch with visible floatables",
  },
  {
    id: "shahdara-outfall",
    name: "Shahdara Drain Outfall",
    lat: 28.606,
    lng: 77.303,
    severity: "high",
    notes: "Major drain before Okhla; litter accumulation",
  },
  {
    id: "okhla-barrage",
    name: "Okhla Barrage",
    lat: 28.549,
    lng: 77.302,
    severity: "high",
    notes: "Downstream barrier where waste accumulates",
  },
  {
    id: "kalindi-kunj",
    name: "Kalindi Kunj Ghat",
    lat: 28.536,
    lng: 77.301,
    severity: "medium",
    notes: "Reported trash along banks",
  },
  {
    id: "yamuna-bank",
    name: "Yamuna Bank (Akshardham side)",
    lat: 28.622,
    lng: 77.275,
    severity: "medium",
    notes: "Floating debris sightings",
  },
  {
    id: "majnu-ka-tila",
    name: "Majnu-ka-Tila Ghat",
    lat: 28.721,
    lng: 77.239,
    severity: "low",
    notes: "Localized litter events",
  },
];

// For heatmap later: convert to [lat, lng, intensity]
// export const toHeatPoints = () =>
//   delhiNCRHotspots.map((h) => {
//     const intensity =
//       h.severity === "high" ? 1.0 : h.severity === "medium" ? 0.6 : 0.3;
//     return [h.lat, h.lng, intensity] as [number, number, number];
//   });

  export const toHeatPoints = () =>
  delhiNCRHotspots.map(h => {
    const intensity = h.severity === 'high' ? 1.0 : h.severity === 'medium' ? 0.6 : 0.3;
    return [h.lat, h.lng, intensity] as [number, number, number];
  });