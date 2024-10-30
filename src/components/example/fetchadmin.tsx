"use client"
import { useEffect, useState } from "react";
import axios from "axios";
import Map, { Marker, NavigationControl, GeolocateControl, useMap } from "react-map-gl";
import { Button } from "./button";
import { SearchPlace } from "../map/searchplaces";
import "@/components/map/map.css";

interface Hospital {
  id: string;
  name: string;
  lat: number;
  lng: number;
  address: string;
}

export const HospitalMap = () => {
  const [hospitals, setHospitals] = useState<Hospital[]>([]);
  const [error, setError] = useState("");
  const { current: map } = useMap();

  let email: string | null;
  if (typeof window !== "undefined") {
    email = window.localStorage.getItem("user");
  }

  useEffect(() => {
    const fetchHospitals = async () => {
      try {
        if (email != null) {
          const response = await axios.get(`/api/hos?email=${email}`);
          setHospitals(response.data.admin);
          console.log(response.data);
        }
      } catch (error) {
        setError("Failed to fetch hospital data. Please try again later.");
      }
    };
    fetchHospitals();
  }, [email]);

  const handleLocationChange = ({ lat, lng }: { lat: number; lng: number }) => {
    map?.flyTo({
      center: { lat, lng },
      essential: true,
    });
  };

  return (
    <div style={{ position: "relative", width: "100vw", height: "100vh" }}>
      <Map
        initialViewState={{
          latitude: 37.7749, // Default latitude
          longitude: -122.4194, // Default longitude
          zoom: 10,
        }}
        style={{ width: "50vw", height: "100vh" }}
        mapStyle="mapbox://styles/mapbox/streets-v11"
        mapboxAccessToken="pk.eyJ1IjoiaWFta2FydGhpY2siLCJhIjoiY2t4b3AwNjZ0MGtkczJub2VqMDZ6OWNrYSJ9.-FMKkHQHvHUeDEvxz2RJWQ"
      >
        {hospitals.map((hospital) => (
          <Marker
            key={hospital.id}
            latitude={hospital.lat}
            longitude={hospital.lng}
            anchor="bottom"
          >
            {/* <img src="vaccination.png" alt="Hospital marker" className="h-8 w-8" /> */}
          </Marker>
        ))}
        
        <NavigationControl position="top-left" />
        <GeolocateControl position="top-left" />

        <div className="absolute top-10 left-10">
          <SearchBox onChange={handleLocationChange} />
        </div>
      </Map>
      <Button
        onClick={() => window.open("https://www.google.com/maps", "_blank")}
        type="button"
        className="absolute top-4 right-4 mt-3"
      >
        Open in Google Maps
      </Button>
      {error && <p className="text-red-500 absolute bottom-4 left-4">{error}</p>}
    </div>
  );
};

export const SearchBox = ({
  onChange,
}: {
  onChange: ({ lat, lng }: { lat: number; lng: number }) => void;
}) => {
  const { current: map } = useMap();
  return (
    <div className="mid">
      <SearchPlace
        onLocationChange={(locationInfo) => {
          const lat = locationInfo.latitude;
          const lng = locationInfo.longitude;
          onChange({ lat, lng });

          map?.flyTo({
            center: { lat, lng },
            essential: true,
          });
        }}
      />
    </div>
  );
};
