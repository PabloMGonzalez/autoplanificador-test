/*
  Agregad códigos de OPERADOR
  2756
  4149
  3730
*/

import GoogleMapReact from "google-map-react";
import Marker from "./Marker";
import ArrayAbastecedoras from "../db/ArrayAbastecedoras";
import Header from "./Header.js";
import Footer from "./Footer.js";

const Map = () => {
  const abastecedoras = ArrayAbastecedoras;

  return (
    <div style={{ height: "100vh", width: "100%", position: "relative" }}>
      <Header />
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyAszKz1twEqqLHxPKh5g_qFJ7RSRyo_Ag8" }}
        defaultCenter={{
          lat: -34.55884338552234,
          lng: -58.41211645073693
        }}
        defaultZoom={17}
        options={{
          disableDefaultUI: true,
          zoomControl: false,
          scrollwheel: true,
          disableDoubleClickZoom: true,
          draggable: true,
          mapTypeId: "satellite"
        }}
      >
        {abastecedoras.map((abastecedora) => (
          <Marker
            key={abastecedora.operadorID}
            lat={abastecedora.lat}
            lng={abastecedora.lng}
            unidad={abastecedora.unidad}
            operadorID={abastecedora.operadorID}
            operadorNombre={abastecedora.operadorNombre}
            estado={abastecedora.estado}
            litros={abastecedora.litros}
          />
        ))}
      </GoogleMapReact>
      <Footer />
    </div>
  );
};

export default Map;
