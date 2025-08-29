import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faAngular,
  faHtml5,
  faCss3Alt,
  faSass,
  faJs,
  faMicrosoft,
  faNodeJs,
} from "@fortawesome/free-brands-svg-icons";
import { faDatabase, faCode } from "@fortawesome/free-solid-svg-icons";

const skillIcons: { [key: string]: any } = {
  React: faReact,
  Angular: faAngular,
  HTML: faHtml5,
  CSS: faCss3Alt,
  Sass: faSass,
  TypeScript: faCode,
  JavaScript: faJs,
  ".NET": faMicrosoft,
  "C#": faCode,
  SQL: faDatabase,
  "Node.js": faNodeJs
};


const skills = [
  "React", "Angular", "HTML", "CSS", "Sass", "Node.js",
  "TypeScript", "JavaScript", ".NET", "C#", "SQL"
];

const About = () => (
  <section className="bg-slate-200 dark:bg-slate-900 py-20 px-6 max-w-4xl mx-auto text-center">
    <h2 className="text-slate-700 dark:text-slate-200 text-3xl font-bold mb-6">Skills</h2>
    <div className="flex flex-wrap justify-center gap-3 mb-12">
      {skills.map(skill => (
        <span
          key={skill}
          className="flex items-center gap-2 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 dark:hover:text-slate-700 dark:hover:bg-slate-400 hover:text-slate-200 hover:bg-slate-400 px-4 py-2 rounded-full text-sm shadow"
        >
          <FontAwesomeIcon icon={skillIcons[skill]} />
          {skill}
        </span>
      ))}
    </div>
    <h2 className="text-slate-700 dark:text-slate-200 text-3xl font-bold mb-6">About</h2>
    <p className="text-slate-700 dark:text-slate-200 text-lg mb-12">I’m a Lead Software Engineer with over a decade of experience building and modernizing enterprise-scale applications. My background spans full-stack development with C#, .NET (Framework/Core/6), SQL Server/PostgreSQL/MySQL, and modern front-end frameworks like React and Angular with TypeScript.</p>
    <p className="text-slate-700 dark:text-slate-200 text-lg mb-12">
    I specialize in taking complex, legacy systems and transforming them into scalable, maintainable, and future-ready solutions. From migrating .NET Framework projects to .NET 6, re-architecting CI/CD pipelines, and designing message-driven workflows with MassTransit and RabbitMQ, to crafting interactive React dashboards and intuitive UIs, I thrive at the intersection of modernization and innovation.</p>
    <p className="text-slate-700 dark:text-slate-200 text-lg mb-6">
    Beyond the technical, I enjoy mentoring teams, refining processes, and bridging gaps between technology and business goals. My approach blends technical depth with creativity, ensuring not only robust systems but also solutions that empower users and deliver real value.</p>
  </section>
);

export default About;
