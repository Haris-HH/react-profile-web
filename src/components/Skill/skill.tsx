import IconCloud from "@/components/MagicUI/icon-cloud"
import React from 'react'

const slugs = [
  "typescript",
  "javascript",
  "java",
  "vuedotjs",
  "react",
  "c#",
  "python",
  "springboot",
  "html5",
  "css3",
  "postgresql",
  "apachecassandra",
  "microsoftsqlserver",
  "nginx",
  "docker",
  "git",
  "tortoisesvn",
  "visualstudiocode",
  "visualstudio",
  "nodejs",
  "selenium",
  "junit5",
  "eclipseide",
  "intellijidea",
];

function Skill() {
  return (
    <section id="skill" className="grid grid-cols-1">
      <div id="skill-cloud-container" className="flex w-full justify-center items-center p-[0.5rem]">
        <div id="skill-cloud" className="relative flex max-w-[32rem] items-center justify-center overflow-hidden rounded-lg border px-20 pb-20 pt-8 bg-[#f8fafc]">
          <IconCloud iconSlugs={slugs} />
        </div>
      </div>
      <div id="skill-summary-container" className="flex justify-center items-center p-[0.5rem]">
        <div id="summary-skill" className="grid grid-cols-3 p-[20px]">
          <div id="languages-framworks">
            <p className="font-medium">Skill</p>
            <ul className="list-disc list-inside">
              <li>JavaScript</li>
              <li>TypeScript (Beginner)</li>
              <li>Java</li>
              <li>C#</li>
              <li>Python</li>
              <li>HTML5</li>
              <li>CSS3</li>
            </ul>
            <br />
            <p className="font-medium">Framwork</p>
            <ul className="list-disc list-inside">
              <li>Vue.js</li>
              <li>React (Beginner)</li>
              <li>Sprintboot</li>
            </ul>
          </div>
          <div id="tools-database">
            <p className="font-medium">Tools</p>
            <ul className="list-disc list-inside">
              <li>Visual Studio Code</li>
              <li>Eclipse</li>
              <li>Intellij</li>
              <li>Docker</li>
              <li>Nginx</li>
            </ul>
            <br />
            <p className="font-medium">Database</p>
            <ul className="list-disc list-inside">
              <li>PostgresSQL</li>
              <li>Cassandra</li>
              <li>MSSQL</li>
            </ul>
          </div>
          <div id="test">
            <p className="font-medium">Testing</p>
            <ul className="list-disc list-inside">
              <li>Junit</li>
              <li>Robotframwork (selenium)</li>
            </ul>
            <br />
            <p className="font-medium">Version Control</p>
            <ul className="list-disc list-inside">
              <li>Git</li>
              <li>Tortoise SVN</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skill
