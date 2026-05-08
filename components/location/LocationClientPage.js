"use client";

import { useState } from "react";

import LocationHero from "./LocationHero";
import LocationFilters from "./LocationFilters";
import LocationMapListSection from "./LocationMapListSection";
import LocationCards from "./LocationCards";

export default function LocationClientPage() {
  const [mapView, setMapView] = useState(false);

  return (
    <>
      <LocationHero />
      <LocationFilters
        mapView={mapView}
        onMapViewChange={setMapView}
      />
      {mapView ? <LocationMapListSection city="mumbai" /> : <LocationCards />}
    </>
  );
}

