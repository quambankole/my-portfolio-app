'use client';
import { AuroraBackground } from "../../components/ui/shadcn-io/aurora";

function ContactCard({ title, description, links }) {
  return (
    <div className="fixed bottom-0 z-10 w-[100vw] h-[90vh] backdrop-blur-lg text-center text-emerald-400 shadow-xl">
      <AuroraBackground speed="0.3s"/>
      <div className="fixed top-[40%] left-1/2 -translate-x-1/2 z-10 w-[90%] max-w-xl  bg-gradient-to-b from-slate-950/80 via-slate-900 to-slate-950 p-10 border border-white rounded-2xl text-center text-white shadow-xl">
      <div className="space-y-2">
        <h2 className="text-xl md:text-4xl font-bold">{title}</h2>
        <p className="opacity-80 text-sm md:text-base">{description}</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {links.map((item, index) => (
          <a
            key={index}
            href={item.href}
            target={item.newTab ? "_blank" : "_self"}
            rel={item.newTab ? "noopener noreferrer" : ""}
            className="flex items-center justify-center gap-2 rounded-xl border border-emerald-400 bg-white/5 px-4 py-3 text-sm md:text-base font-medium hover:bg-white/10 hover:border-emerald-400 transition-all"
          >
            <span className={`w-2 h-2 rounded-full ${item.color}`} />
            {item.label}
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
      className="relative min-h-[75vh] flex justify-center items-center bg-neutral-100">

      <ContactCard
        title="Contact Me"
        description="Let's talk about your project or connect with me online."
        links={[
          { label: "Email", href: "mailto:your.email@example.com", color: "bg-emerald-400" },
          { label: "Instagram", href: "https://instagram.com/yourhandle", color: "bg-pink-500", newTab: true },
          { label: "LinkedIn", href: "https://linkedin.com/in/yourprofile", color: "bg-sky-500", newTab: true },
          { label: "GitHub", href: "https://github.com/yourusername", color: "bg-gray-200", newTab: true }
        ]}
      />
    </section>
  );
}