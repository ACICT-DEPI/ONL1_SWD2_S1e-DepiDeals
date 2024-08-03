import { useParams } from "react-router-dom";
import { TechApi } from "../../Context/TechApi";
import { useContext } from "react";
import Cardd from "../Common/Card";

export default function TechDetails() {
  const { id } = useParams();
  const TechApii = useContext(TechApi);
  const tech = TechApii.find((card) => card.id === id);
  return (
    <>
      <h1>{id}</h1>
      {/* <h1>{tech[0].id}</h1> */}
      <Cardd ApiCard={tech} />
    </>
  );
}
