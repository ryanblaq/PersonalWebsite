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
    <h2 className="text-slate-700 dark:text-slate-200 text-3xl font-bold mb-6">About Me</h2>
    <p className="text-slate-700 dark:text-slate-200 text-lg mb-12">Hi! I'm a Lead Software Engineer with 10+ years of full-stack development experience across enterprise SaaS platforms and agile teams. 
                                                                    I have a proven track record in modernizing legacy systems, leading front-end and back-end development. 
                                                                    I am adept at mentoring teams, optimizing system performance, and delivering secure, scalable solutions.</p>
    
    <h2 className="text-slate-700 dark:text-slate-200 text-3xl font-bold mb-6">Skills</h2>
    <div className="flex flex-wrap justify-center gap-3">
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
  </section>
);

export default About;
