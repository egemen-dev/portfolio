import { useEffect } from "react";
import JavascriptIcn from "./icons/JavaScriptIcn";
import ReactIcn from "./icons/ReactIcn";
import HTML from "./icons/HTML";
import CSS from "./icons/CSS";
import Ruby from "./icons/Ruby";
import RoR from "./icons/RoR";
import SQL from "./icons/SQL";
import Git from "./icons/Git";
import Tailwind from "./icons/Tailwind";
import Elasticsearch from "./icons/Elasticsearch";
import Jest from "./icons/Jest";
import Webpack from "./icons/Webpack";
import SkillContainer from "./SkillContainer";

export default function Skills() {
  return (
    <div className="flex flex-col justify-center items-center">
      <h2 className="text-3xl font-bold text-center mt-24">Skills</h2>
      <div className="divider mb-24"></div>

      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-3 gap-14">
        <SkillContainer icon={<JavascriptIcn />} name="JavaScript" />
        <SkillContainer icon={<HTML />} name="HTML" />
        <SkillContainer icon={<CSS />} name="CSS" />
        <SkillContainer icon={<ReactIcn />} name="React" />
        <SkillContainer icon={<Ruby />} name="Ruby" />
        <SkillContainer icon={<RoR />} name="Rails" />
        <SkillContainer icon={<SQL />} name="SQL" />
        <SkillContainer icon={<Git />} name="Git" />
        <SkillContainer icon={<Tailwind />} name="Tailwind" />
        <SkillContainer icon={<Elasticsearch />} name="Elasticsearch" />
        <SkillContainer icon={<Jest />} name="Jest" />
        <SkillContainer icon={<Webpack />} name="Webpack" />
      </div>
    </div>
  );
}
