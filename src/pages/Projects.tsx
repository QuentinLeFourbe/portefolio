import React from "react";
import Card from "../components/atoms/Card";
import { css } from "../../styled-system/css";
import amcoeurLogo from "../assets/logos/amcoeur.jpeg";
import linxoLogo from "../assets/logos/linxo.png";

function Projects() {
  return (
    <div className={maconeryGrid}>
      <Card title="Amcoeur" src={amcoeurLogo}>
        J'ai fait une app fullstack pour Amcoeur
      </Card>
      <Card title="Mes menus">
        Projet perso pour me faire la main sur des technos fullstack
      </Card>
      <Card title="Linxo AIS" src={linxoLogo}>
        Tech lead sur cette web app d'agrégation de comptes utilisant les API
        Linxo
      </Card>
      <Card title="Linxo PIS" src={linxoLogo}>
        Tech lead sur cette web app pour initier du virement Iban to Iban
      </Card>
    </div>
  );
}

export default Projects;

const maconeryGrid = css({
  display: "flex",
  flexFlow: "row nowrap",
  alignItems: "center",
  justifyContent: "space-between",
  gap: " 2rem",
  height: "100%",
  width: "100%",
  padding: "64px",
});
