'use client';
import { AuroraBackground } from "../../components/ui/shadcn-io/aurora";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

function ContactCard({ title, links }) {
  return (
    <div className="fixed bottom-20 z-10 w-[100vw] h-[80vh] backdrop-blur-lg text-center text-emerald-400 shadow-xl sm:h-[70vh]">
      <AuroraBackground />
      <div className="  fixed top-[40%] left-1/2 -translate-x-1/2 z-10 w-[90%] max-w-xl bg-gradient-to-b from-slate-950/80 via-slate-900 to-slate-950 p-10 border border-white rounded-2xl text-center text-white shadow-2xl shadow-emerald-400/40 drop-shadow-2xl sm:fixed top-[10%]">
        <h2 className="text-2xl md:text-4xl my-2 py-2 uppercase font-bold">{title}</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {links.map((item, index) => (
          <a
            key={index}
            href={item.href}
            target={item.newTab ? "_blank" : "_self"}
            rel={item.newTab ? "noopener noreferrer" : ""}
            className="flex items-center justify-between w-full min-w-[180px] gap-4 rounded-xl border border-emerald-400 bg-white/5 px-4 py-3 text-sm md:text-base font-medium hover:bg-white/10 hover:border-emerald-400 transition-all"
          >
            <span className="text-left flex-1">{item.label}</span>
            <FontAwesomeIcon
              icon={
                  item.label === 'Email' ? faEnvelope :
                  item.label === 'GitHub' ? faGithub :
                  item.label === 'LinkedIn' ? faLinkedin :
                  item.label === 'Instagram' ? faInstagram :
                  faEnvelope
              }
              className="text-2xl"
          />
          </a>

        ))}
        </div>
      </div>
    </div>
  );
}

export default function Contact() {

  return (
    <section
      className="relative min-h-[70vh] flex justify-center items-center bg-neutral-100">

      <ContactCard
        title="Contact Me"
        links={[
          { label: "Email", href: "mailto:your.quambankole9@gmail.com", },
          { label: "Instagram", href: "https://instagram.com/quamldn", newTab: true },
          { label: "LinkedIn", href: "https://www.linkedin.com/in/quam-bankole/", newTab: true },
          { label: "GitHub", href: "https://github.com/quambankole",  newTab: true }
        ]}

      />
    </section>
  );
}