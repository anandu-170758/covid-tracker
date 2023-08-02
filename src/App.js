import "./App.css";
import {
  FormControl,
  Select,
  MenuItem,
  CardContent,
  Card,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import InfoBox from "./InfoBox";
import Map from "./map";
import Table from "./table";
import { sortData } from "./util";
import Linegraph from "./linegraph";
import "leaflet/dist/leaflet.css";

function App() {
  const [Countries, setCountries] = useState([]);
  const [country, setCountry] = useState("worldwide");
  const [countryInfo, setCountryInfo] = useState({});
  const [tableData, setTableData] = useState([]);
  const [mapCenter, setMapCenter] = useState({ lat: 34.80746, lng: -40.4796 });
  const [mapZoom, setMapZoom] = useState(3);

  useEffect(() => {
    fetch("https://disease.sh/v3/covid-19/all")
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((data) => {
        setCountryInfo(data);
      });
  }, []);

  useEffect(() => {
    const getCountriesData = async () => {
      await fetch("https://disease.sh/v3/covid-19/countries")
        .then((response) => {
          console.log(response.data);
          return response.json();
        })
        .then((countryResponse) => {
          const sortedData = sortData(countryResponse);
          setTableData(sortedData);
          setCountries(
            countryResponse.map((country) => ({
              name: country.country,
              value: country.countryInfo.iso2,
            }))
          );
        });
    };
    getCountriesData();
  }, []);
  console.log(Countries);
  const onCountryChange = async (event) => {
    const countryCode = event.target.value;
    console.log("hello", countryCode);
    setCountry(countryCode);
    const url =
      countryCode === "worldwide"
        ? "https://disease.sh/v3/covid-19/all"
        : `https://disease.sh/v3/covid-19/countries/${countryCode}`;

    await fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setCountry(countryCode);
        setCountryInfo(data);
      });
  };
  console.log("CountryInfo >>>", countryInfo);
  return (
    <div className="App">
      <div className="app_left">
        <div className="app_header">
          <h1>COVID-19 TRACKER</h1>
          <FormControl className="app_dropdown">
            <Select
              variant="outlined"
              onChange={onCountryChange}
              value={country}
            >
              <MenuItem value="worldwide">Worldwide</MenuItem>
              {Countries.map((country) => (
                <MenuItem value={country.value}>{country.name}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>

        <div className="app_stats">
          <InfoBox
            title="Coronavirus cases"
            cases={countryInfo.todayCases}
            total={countryInfo.todayCases}
          />
          <InfoBox
            title="Recovered"
            cases={countryInfo.todayRecovered}
            total={countryInfo.todayRecovered}
          />
          <InfoBox
            title="Deaths"
            cases={countryInfo.todayDeaths}
            total={countryInfo.todayDeaths}
          />
        </div>
        <Map
        center={mapCenter}
        zoom={mapZoom}/>
      </div>
      <div>
        <Card className="app_right" >
          <CardContent>
            <h3> Live Cases by Country</h3>
            <Table countries={tableData} />
            <h3>WorldWide new cases</h3>
            <Linegraph/>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default App;
