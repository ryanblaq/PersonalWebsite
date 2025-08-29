

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

const Contact = () => (
  <section className="bg-slate-200 dark:bg-slate-900 py-20 px-6 max-w-4xl mx-auto text-center">
    <h2 className="text-slate-700 dark:text-slate-200 text-3xl font-bold mb-6">Contact</h2>
    <p className="text-slate-700 dark:text-slate-200 text-lg mb-12">
      Please reach out to me via email or connect with me on LinkedIn or GitHub.
    </p>
    <div className="flex justify-center gap-10">
      <a
        href="mailto:ryan@ryanblaq.dev"
        className="text-slate-700 dark:text-slate-200 hover:text-slate-400 dark:hover:text-slate-400 text-3xl"
        aria-label="Email"
      >
        <FontAwesomeIcon icon={faEnvelope} />
      </a>      
      <a
        href="https://github.com/ryanblaq"
        target="_blank"
        rel="noopener noreferrer"
        className="text-slate-700 dark:text-slate-200 hover:text-slate-400 dark:hover:text-slate-400 text-3xl"
        aria-label="GitHub"
      >
        <FontAwesomeIcon icon={faGithub} />
      </a>
      <a
        href="https://www.linkedin.com/in/ryan-blaquiere"
        target="_blank"
        rel="noopener noreferrer"
        className="text-slate-700 dark:text-slate-200 hover:text-slate-400 dark:hover:text-slate-400 text-3xl"
        aria-label="LinkedIn"
      >
        <FontAwesomeIcon icon={faLinkedin} />
      </a>
    </div>
  </section>
);

export default Contact;
