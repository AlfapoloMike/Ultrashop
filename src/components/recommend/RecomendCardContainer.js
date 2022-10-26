import React from "react";
import { useSelector } from "react-redux";
import { lowStockGenerator, recomendGenerator } from "../../utility/recommendedGenerator";
import RecomendCard from "./RecomendCard";
import { RecomendContainer } from "./RecomenderStyle";

const RecomendCardContainer = () => {
  const digimons = useSelector((state) => state.digimons.digimons);
  const recomend = recomendGenerator(digimons);
  lowStockGenerator(digimons)

  return (
    <>
    <RecomendContainer>
     <h2>Productos recomendados</h2>
      {recomend.map(digimon=>(
        <RecomendCard {...digimon} key={digimon.id} />
      ))}
    </RecomendContainer>
    </>
  );
};

export default RecomendCardContainer;
