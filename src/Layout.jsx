import React from "react";
import Starting from "./Starting";
import WhereItAllBegan from "./WhereItAllBegan";
import Porsche911yr from "./Porsche911yr";
import PorscheAutosport from "./PorscheAutosport";
import Formula1 from "./Formula1";
import TextOnly from "./TextOnly";
import FormulaE from "./FormulaE";
import OurTime from "./OurTime";

export default function Layout() {
  return (
    <div className="bg-[#0D1112] w-full overflow-x-clip">
      <Starting />
      <WhereItAllBegan />
      <Porsche911yr />
      <PorscheAutosport />
      <Formula1 />
      <TextOnly />
      <FormulaE />
      <OurTime />
    </div>
  );
}
