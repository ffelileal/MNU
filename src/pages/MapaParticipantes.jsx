import React, { useState, useEffect } from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";

const geoUrl = "/features.json";


// Países con Organismos y sus Integranteses
const IntegrantesesPorPais = {
  // Países de Integrantes 7
  AFG: { Integrantes: 7, Organismos: "Consejo de Seguridad / Asamblea General / Cumbre de Embajadores" },
  DEU: { Integrantes: 7, Organismos: "Consejo de Seguridad / Asamblea General / Cumbre de Embajadores" },
  ARG: { Integrantes: 7, Organismos: "Consejo de Seguridad / Asamblea General / Cumbre de Embajadores" },
  AUS: { Integrantes: 7, Organismos: "Consejo de Seguridad / Asamblea General / Cumbre de Embajadores" },
  CAN: { Integrantes: 7, Organismos: "Consejo de Seguridad / Asamblea General / Cumbre de Embajadores" },
  CHN: { Integrantes: 7, Organismos: "Consejo de Seguridad / Asamblea General / Cumbre de Embajadores" },
  COL: { Integrantes: 7, Organismos: "Consejo de Seguridad / Asamblea General / Cumbre de Embajadores" },
  CUB: { Integrantes: 7, Organismos: "Consejo de Seguridad / Asamblea General / Cumbre de Embajadores" },
  SLV: { Integrantes: 7, Organismos: "Consejo de Seguridad / Asamblea General / Cumbre de Embajadores" },
  NIC: { Integrantes: 7, Organismos: "Consejo de Seguridad / Asamblea General / Cumbre de Embajadores" },
  ESP: { Integrantes: 7, Organismos: "Consejo de Seguridad / Asamblea General / Cumbre de Embajadores" },
  USA: { Integrantes: 7, Organismos: "Consejo de Seguridad / Asamblea General / Cumbre de Embajadores" },
  RUS: { Integrantes: 7, Organismos: "Consejo de Seguridad / Asamblea General / Cumbre de Embajadores" },
  FRA: { Integrantes: 7, Organismos: "Consejo de Seguridad / Asamblea General / Cumbre de Embajadores" },
  GTM: { Integrantes: 7, Organismos: "Consejo de Seguridad / Asamblea General / Cumbre de Embajadores" },
  IND: { Integrantes: 7, Organismos: "Consejo de Seguridad / Asamblea General / Cumbre de Embajadores" },
  IRN: { Integrantes: 7, Organismos: "Consejo de Seguridad / Asamblea General / Cumbre de Embajadores" },
  ITA: { Integrantes: 7, Organismos: "Consejo de Seguridad / Asamblea General / Cumbre de Embajadores" },
  MEX: { Integrantes: 7, Organismos: "Consejo de Seguridad / Asamblea General / Cumbre de Embajadores" },
  GBR: { Integrantes: 7, Organismos: "Consejo de Seguridad / Asamblea General / Cumbre de Embajadores" },
  SYR: { Integrantes: 7, Organismos: "Consejo de Seguridad / Asamblea General / Cumbre de Embajadores" },
  VEN: { Integrantes: 7, Organismos: "Consejo de Seguridad / Asamblea General / Cumbre de Embajadores" },
  KOR: { Integrantes: 7, Organismos: "Consejo de Seguridad / Asamblea General / Cumbre de Embajadores" },
  PRK: { Integrantes: 7, Organismos: "Consejo de Seguridad / Asamblea General / Cumbre de Embajadores" },
  UKR: { Integrantes: 7, Organismos: "Consejo de Seguridad / Asamblea General / Cumbre de Embajadores" },

  // Países de Integrantes 5
  AGO: { Integrantes: 5, Organismos: "ECOSOC / Asamblea General / Cumbre de Embajadores" },
  SAU: { Integrantes: 5, Organismos: "ECOSOC / Asamblea General / Cumbre de Embajadores" },
  AUT: { Integrantes: 5, Organismos: "ECOSOC / Asamblea General / Cumbre de Embajadores" },
  BEL: { Integrantes: 5, Organismos: "ECOSOC / Asamblea General / Cumbre de Embajadores" },
  BOL: { Integrantes: 5, Organismos: "ECOSOC / Asamblea General / Cumbre de Embajadores" },
  BRA: { Integrantes: 5, Organismos: "ECOSOC / Asamblea General / Cumbre de Embajadores" },
  BFA: { Integrantes: 5, Organismos: "ECOSOC / Asamblea General / Cumbre de Embajadores" },
  CPV: { Integrantes: 5, Organismos: "ECOSOC / Asamblea General / Cumbre de Embajadores" },
  CMR: { Integrantes: 5, Organismos: "ECOSOC / Asamblea General / Cumbre de Embajadores" },
  TCD: { Integrantes: 5, Organismos: "ECOSOC / Asamblea General / Cumbre de Embajadores" },
  CHL: { Integrantes: 5, Organismos: "ECOSOC / Asamblea General / Cumbre de Embajadores" },
  CRI: { Integrantes: 5, Organismos: "ECOSOC / Asamblea General / Cumbre de Embajadores" },
  CIV: { Integrantes: 5, Organismos: "ECOSOC / Asamblea General / Cumbre de Embajadores" },
  DJI: { Integrantes: 5, Organismos: "ECOSOC / Asamblea General / Cumbre de Embajadores" },
  EGY: { Integrantes: 5, Organismos: "ECOSOC / Asamblea General / Cumbre de Embajadores" },
  ARE: { Integrantes: 5, Organismos: "ECOSOC / Asamblea General / Cumbre de Embajadores" },
  ETH: { Integrantes: 5, Organismos: "ECOSOC / Asamblea General / Cumbre de Embajadores" },
  FJI: { Integrantes: 5, Organismos: "ECOSOC / Asamblea General / Cumbre de Embajadores" },
  IDN: { Integrantes: 5, Organismos: "ECOSOC / Asamblea General / Cumbre de Embajadores" },
  IRQ: { Integrantes: 5, Organismos: "ECOSOC / Asamblea General / Cumbre de Embajadores" },
  ISR: { Integrantes: 5, Organismos: "ECOSOC / Asamblea General / Cumbre de Embajadores" },
  JPN: { Integrantes: 5, Organismos: "ECOSOC / Asamblea General / Cumbre de Embajadores" },
  LBN: { Integrantes: 5, Organismos: "ECOSOC / Asamblea General / Cumbre de Embajadores" },
  MDG: { Integrantes: 5, Organismos: "ECOSOC / Asamblea General / Cumbre de Embajadores" },
  MLI: { Integrantes: 5, Organismos: "ECOSOC / Asamblea General / Cumbre de Embajadores" },
  MRT: { Integrantes: 5, Organismos: "ECOSOC / Asamblea General / Cumbre de Embajadores" },
  MNG: { Integrantes: 5, Organismos: "ECOSOC / Asamblea General / Cumbre de Embajadores" },
  MOZ: { Integrantes: 5, Organismos: "ECOSOC / Asamblea General / Cumbre de Embajadores" },
  MMR: { Integrantes: 5, Organismos: "ECOSOC / Asamblea General / Cumbre de Embajadores" },
  NPL: { Integrantes: 5, Organismos: "ECOSOC / Asamblea General / Cumbre de Embajadores" },
  NGA: { Integrantes: 5, Organismos: "ECOSOC / Asamblea General / Cumbre de Embajadores" },
  NOR: { Integrantes: 5, Organismos: "ECOSOC / Asamblea General / Cumbre de Embajadores" },
  NZL: { Integrantes: 5, Organismos: "ECOSOC / Asamblea General / Cumbre de Embajadores" },
  NLD: { Integrantes: 5, Organismos: "ECOSOC / Asamblea General / Cumbre de Embajadores" },
  PAK: { Integrantes: 5, Organismos: "ECOSOC / Asamblea General / Cumbre de Embajadores" },
  PSE: { Integrantes: 5, Organismos: "ECOSOC / Asamblea General / Cumbre de Embajadores" },
  PAN: { Integrantes: 5, Organismos: "ECOSOC / Asamblea General / Cumbre de Embajadores" },
  PNG: { Integrantes: 5, Organismos: "ECOSOC / Asamblea General / Cumbre de Embajadores" },
  PER: { Integrantes: 5, Organismos: "ECOSOC / Asamblea General / Cumbre de Embajadores" },
  PRT: { Integrantes: 5, Organismos: "ECOSOC / Asamblea General / Cumbre de Embajadores" },
  CAF: { Integrantes: 5, Organismos: "ECOSOC / Asamblea General / Cumbre de Embajadores" },
  COD: { Integrantes: 5, Organismos: "ECOSOC / Asamblea General / Cumbre de Embajadores" },
  DOM: { Integrantes: 5, Organismos: "ECOSOC / Asamblea General / Cumbre de Embajadores" },
  TZA: { Integrantes: 5, Organismos: "ECOSOC / Asamblea General / Cumbre de Embajadores" },
  VAT: { Integrantes: 5, Organismos: "ECOSOC / Asamblea General / Cumbre de Embajadores" },
  SLE: { Integrantes: 5, Organismos: "ECOSOC / Asamblea General / Cumbre de Embajadores" },
  SOM: { Integrantes: 5, Organismos: "ECOSOC / Asamblea General / Cumbre de Embajadores" },
  LKA: { Integrantes: 5, Organismos: "ECOSOC / Asamblea General / Cumbre de Embajadores" },
  ZAF: { Integrantes: 5, Organismos: "ECOSOC / Asamblea General / Cumbre de Embajadores" },
  SDN: { Integrantes: 5, Organismos: "ECOSOC / Asamblea General / Cumbre de Embajadores" },
  SSD: { Integrantes: 5, Organismos: "ECOSOC / Asamblea General / Cumbre de Embajadores" },
  SWE: { Integrantes: 5, Organismos: "ECOSOC / Asamblea General / Cumbre de Embajadores" },
  TTO: { Integrantes: 5, Organismos: "ECOSOC / Asamblea General / Cumbre de Embajadores" },
  TUN: { Integrantes: 5, Organismos: "ECOSOC / Asamblea General / Cumbre de Embajadores" },
  TUR: { Integrantes: 5, Organismos: "ECOSOC / Asamblea General / Cumbre de Embajadores" },
  UGA: { Integrantes: 5, Organismos: "ECOSOC / Asamblea General / Cumbre de Embajadores" },
  VNM: { Integrantes: 5, Organismos: "ECOSOC / Asamblea General / Cumbre de Embajadores" },

  // Países de Integrantes 3
  AND: { Integrantes: 3, Organismos: "Asamblea General / Cumbre de Embajadores" },
  CYP: { Integrantes: 3, Organismos: "Asamblea General / Cumbre de Embajadores" },
  HRV: { Integrantes: 3, Organismos: "Asamblea General / Cumbre de Embajadores" },
  DNK: { Integrantes: 3, Organismos: "Asamblea General / Cumbre de Embajadores" },
  EST: { Integrantes: 3, Organismos: "Asamblea General / Cumbre de Embajadores" },
  FIN: { Integrantes: 3, Organismos: "Asamblea General / Cumbre de Embajadores" },
  HUN: { Integrantes: 3, Organismos: "Asamblea General / Cumbre de Embajadores" },
  JOR: { Integrantes: 3, Organismos: "Asamblea General / Cumbre de Embajadores" },
  LUX: { Integrantes: 3, Organismos: "Asamblea General / Cumbre de Embajadores" },
  MYS: { Integrantes: 3, Organismos: "Asamblea General / Cumbre de Embajadores" },
  NER: { Integrantes: 3, Organismos: "Asamblea General / Cumbre de Embajadores" },
  SGP: { Integrantes: 3, Organismos: "Asamblea General / Cumbre de Embajadores" },
  CHE: { Integrantes: 3, Organismos: "Asamblea General / Cumbre de Embajadores" }
};
const codigosBanderas = {
  AFG: "af",
  DEU: "de",
  ARG: "ar",
  AGO: "ao",
  DZA: "dz", // Algeria
  ATG: "ag", // Antigua and Barbuda
  ARM: "am", // Armenia
  AZE: "az", // Azerbaijan
  BHR: "bh", // Bahrain
  BLR: "by", // Belarus
  BEN: "bj", // Benin
  BIH: "ba", // Bosnia and Herzegovina
  BWA: "bw", // Botswana
  BFA: "bf", // Burkina Faso
  BDI: "bi", // Burundi
  CMR: "cm", // Cameroon
  CPV: "cv", // Cape Verde
  CAF: "cf", // Central African Republic
  TCD: "td", // Chad
  COM: "km", // Comoros
  COG: "cg", // Congo
  CZE: "cz", // Czech Republic
  COD: "cd", // Democratic Republic of the Congo
  DJI: "dj", // Djibouti
  DOM: "do", // Dominican Republic
  GNQ: "gq", // Equatorial Guinea
  ERI: "er", // Eritrea
  SWZ: "sz", // Eswatini
  FRA: "fr", // France
  GAB: "ga", // Gabon
  GMB: "gm", // Gambia
  GEO: "ge", // Georgia
  GHA: "gh", // Ghana
  GNB: "gw", // Guinea-Bissau
  VAT: "va", // Holy See / Vatican City
  IRN: "ir", // Iran
  CIV: "ci", // Ivory Coast
  KAZ: "kz", // Kazakhstan
  KEN: "ke", // Kenya
  KWT: "kw", // Kuwait
  KGZ: "kg", // Kyrgyzstan
  LSO: "ls", // Lesotho
  LBR: "lr", // Liberia
  LBY: "ly", // Libya
  MKD: "mk", // North Macedonia (formerly Macedonia)
  MDG: "mg", // Madagascar
  MWI: "mw", // Malawi
  MHL: "mh", // Marshall Islands
  MRT: "mr", // Mauritania
  MUS: "mu", // Mauritius
  FSM: "fm", // Micronesia
  MDA: "md", // Moldova
  MAR: "ma", // Morocco
  MOZ: "mz", // Mozambique
  NAM: "na", // Namibia
  PRK: "kp", // North Korea
  OMN: "om", // Oman
  PLW: "pw", // Palau
  QAT: "qa", // Qatar
  RUS: "ru", // Russia
  RWA: "rw", // Rwanda
  KNA: "kn", // Saint Kitts and Nevis
  LCA: "lc", // Saint Lucia
  VCT: "vc", // Saint Vincent and the Grenadines
  STP: "st", // Sao Tome and Principe
  SYC: "sc", // Seychelles
  SLE: "sl", // Sierra Leone
  SVK: "sk", // Slovakia
  SLB: "sb", // Solomon Islands
  SOM: "so", // Somalia
  ZAF: "za", // South Africa
  KOR: "kr", // South Korea
  SSD: "ss", // South Sudan
  SYR: "sy", // Syria
  TJK: "tj", // Tajikistan
  TZA: "tz", // Tanzania
  TGO: "tg", // Togo
  TON: "to", // Tonga
  TTO: "tt", // Trinidad and Tobago
  TUN: "tn", // Tunisia
  TKM: "tm", // Turkmenistan
  TUV: "tv", // Tuvalu
  UGA: "ug", // Uganda
  ARE: "ae", // United Arab Emirates
  GBR: "gb", // United Kingdom
  USA: "us", // United States
  UZB: "uz", // Uzbekistan
  VUT: "vu", // Vanuatu
  YEM: "ye", // Yemen
  ZMB: "zm", // Zambia
  ZWE: "zw", // Zimbabwe
};
const codigosAlternativos = {
  "Algeria": "DZA",
  "Angola": "AGO",
  "Antigua and Barbuda": "ATG",
  "Armenia": "ARM",
  "Azerbaijan": "AZE",
  "Bahrain": "BHR",
  "Belarus": "BLR",
  "Benin": "BEN",
  "Bosnia and Herzegovina": "BIH",
  "Botswana": "BWA",
  "Burkina Faso": "BFA",
  "Burundi": "BDI",
  "Cameroon": "CMR",
  "Cape Verde": "CPV",
  "Central African Republic": "CAF",
  "Chad": "TCD",
  "Comoros": "COM",
  "Congo": "COG",
  "Czech Republic": "CZE",
  "Democratic Republic of the Congo": "COD",
  "Djibouti": "DJI",
  "Dominican Republic": "DOM",
  "Equatorial Guinea": "GNQ",
  "Eritrea": "ERI",
  "Eswatini": "SWZ",
  "France": "FRA",
  "Gabon": "GAB",
  "Gambia": "GMB",
  "Georgia": "GEO",
  "Ghana": "GHA",
  "Guinea-Bissau": "GNB",
  "Holy See": "VAT",
  "Iran": "IRN",
  "Ivory Coast": "CIV",
  "Kazakhstan": "KAZ",
  "Kenya": "KEN",
  "Kuwait": "KWT",
  "Kyrgyzstan": "KGZ",
  "Lesotho": "LSO",
  "Liberia": "LBR",
  "Libya": "LBY",
  "Macedonia": "MKD",
  "Madagascar": "MDG",
  "Malawi": "MWI",
  "Marshall Islands": "MHL",
  "Mauritania": "MRT",
  "Mauritius": "MUS",
  "Micronesia": "FSM",
  "Moldova": "MDA",
  "Morocco": "MAR",
  "Mozambique": "MOZ",
  "Namibia": "NAM",
  "North Korea": "PRK",
  "Oman": "OMN",
  "Palau": "PLW",
  "Qatar": "QAT",
  "Republic of the Congo": "COG",
  "Russia": "RUS",
  "Rwanda": "RWA",
  "Saint Kitts and Nevis": "KNA",
  "Saint Lucia": "LCA",
  "Saint Vincent and the Grenadines": "VCT",
  "Sao Tome and Principe": "STP",
  "Seychelles": "SYC",
  "Sierra Leone": "SLE",
  "Slovakia": "SVK",
  "Solomon Islands": "SLB",
  "Somalia": "SOM",
  "South Africa": "ZAF",
  "South Korea": "KOR",
  "South Sudan": "SSD",
  "Syria": "SYR",
  "Tajikistan": "TJK",
  "Tanzania": "TZA",
  "Togo": "TGO",
  "Tonga": "TON",
  "Trinidad and Tobago": "TTO",
  "Tunisia": "TUN",
  "Turkmenistan": "TKM",
  "Tuvalu": "TUV",
  "Uganda": "UGA",
  "United Arab Emirates": "ARE",
  "United Kingdom": "GBR",
  "United States": "USA",
  "Uzbekistan": "UZB",
  "Vanuatu": "VUT",
  "Vatican City": "VAT",
  "Yemen": "YEM",
  "Zambia": "ZMB",
  "Zimbabwe": "ZWE"
};
// Colores por Integrantes
const coloresPorIntegrantes = {
  7: "#0077b6",
  5: "#00b4d8",
  3: "#90e0ef",
  default: "#d6d6d6",
};

// Función helper para obtener código ISO (ahora fuera del componente)
const getIsoCode = (geo) => {
  const isoCode = geo.properties.ISO_A3 || 
                 geo.properties["ISO3166-1-Alpha-3"] || 
                 geo.properties.ISO3;
  
  if (isoCode) return isoCode;
  
  const countryName = geo.properties.NAME || geo.properties.name;
  return codigosAlternativos[countryName] || null;
};

// Función helper para obtener URL de bandera
const getBanderaUrl = (isoCode) => {
  if (!isoCode) return null;
  const codigo = codigosBanderas[isoCode] || isoCode.toLowerCase();
  return `/flags/${codigo}.png`;
};

const MapaOrganismos = () => {
  const [geographies, setGeographies] = useState([]);
  const [hoverInfo, setHoverInfo] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(geoUrl)
      .then((res) => res.json())
      .then((data) => {
        setGeographies(data.features);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error al cargar el mapa:", err);
        setLoading(false);
      });
  }, []);

  const getColor = (isoCode) => {
    if (!isoCode) return coloresPorIntegrantes.default;
    const data = IntegrantesesPorPais[isoCode];
    return data ? coloresPorIntegrantes[data.Integrantes] : coloresPorIntegrantes.default;
  };

  const handleMouseEnter = (geo) => {
    const isoCode = getIsoCode(geo);
    const nombre = geo.properties.NAME || geo.properties.name;
    const data = isoCode ? IntegrantesesPorPais[isoCode] : null;

    setHoverInfo({
      nombre,
      isoCode,
      Organismos: data?.Organismos || "No participa",
      Integrantes: data?.Integrantes,
    });
  };

  if (loading) return <div style={{ textAlign: "center", padding: "20px" }}>Cargando mapa...</div>;

  return (
    <div style={{ maxWidth: "800px", margin: "0 auto", position: "relative" }}>
      <ComposableMap projectionConfig={{ scale: 140 }}>
        <Geographies geography={geographies}>
          {({ geographies }) =>
            geographies.map((geo) => {
              const isoCode = getIsoCode(geo);
              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  onMouseEnter={() => handleMouseEnter(geo)}
                  onMouseLeave={() => setHoverInfo(null)}
                  fill={getColor(isoCode)}
                  style={{
                    default: { outline: "none", cursor: "pointer" },
                    hover: { fill: "#f72585", outline: "none" },
                    pressed: { fill: "#7209b7", outline: "none" },
                  }}
                />
              );
            })
          }
        </Geographies>
      </ComposableMap>

      {hoverInfo && (
        <div style={{ 
          position: "absolute",
          bottom: "20px",
          left: "50%",
          transform: "translateX(-50%)",
          background: "white",
          padding: "15px",
          borderRadius: "8px",
          boxShadow: "0 2px 10px rgba(0,0,0,0.2)",
          display: "flex",
          alignItems: "center",
          gap: "15px",
          minWidth: "300px",
          zIndex: 100
        }}>
          {hoverInfo.isoCode && (
            <img
              src={getBanderaUrl(hoverInfo.isoCode)}
              alt={`Bandera de ${hoverInfo.nombre}`}
              style={{ 
                width: "40px",
                height: "30px",
                objectFit: "cover",
                border: "1px solid #eee"
              }}
              onError={(e) => {
                e.target.style.display = "none";
              }}
            />
          )}
          <div>
            <h4 style={{ margin: "0 0 8px 0", color: "#333" }}>{hoverInfo.nombre}</h4>
            <p style={{ margin: "4px 0", color: "#555" }}>
              <strong>Organismos:</strong> {hoverInfo.Organismos}
            </p>
            {hoverInfo.Integrantes && (
              <p style={{ margin: "4px 0", color: "#555" }}>
                <strong>Integrantes:</strong> {hoverInfo.Integrantes}
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default MapaOrganismos;