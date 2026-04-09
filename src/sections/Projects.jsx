import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const ProjectsShowcase = () => {
  const [repos, setRepos] = useState([]);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    fetch("https://api.github.com/users/Vignesh130703/repos")
      .then((res) => res.json())
      .then((data) => {
        const filtered = data
          .filter((repo) => !repo.fork)
          .sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at));

        setRepos(filtered);
      });
  }, []);

  useEffect(() => {
    if (!repos.length) return;

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % repos.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [repos]);

  const activeRepo = repos[current];

  return (
    <section className="section-spacing px-2 md:px-6">
      <h2 className="text-heading mb-8">Project Showcase</h2>

      <div className="w-full">
        
        {/* 🔥 HERO CARD */}
        <div className="relative h-[65vh] md:h-[75vh] w-full rounded-3xl overflow-hidden border border-white/10 shadow-xl">

          {/* Background Image */}
          {activeRepo && (
            <img
              src={`https://picsum.photos/1600/900?random=${activeRepo.id}`}
              alt="background"
              className="absolute inset-0 w-full h-full object-cover"
            />
          )}

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />

          <AnimatePresence mode="wait">
            {activeRepo && (
              <motion.div
                key={activeRepo.id}
                initial={{ opacity: 0, scale: 1.08 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="absolute inset-0 flex flex-col justify-end p-6 md:p-10"
              >
                <div className="relative z-10 max-w-3xl">
                  <h3 className="text-3xl md:text-5xl font-bold text-white mb-3">
                    {activeRepo.name}
                  </h3>

                  <p className="text-neutral-300 text-sm md:text-base mb-4">
                    {activeRepo.description || "No description available"}
                  </p>
                </div>

                <a
                  href={activeRepo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0"
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* 🔁 RUNNING TILES */}
        <div className="relative mt-8 overflow-hidden">

          {/* Fade edges */}
          <div className="pointer-events-none absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-[#030412] to-transparent z-10" />
          <div className="pointer-events-none absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-[#030412] to-transparent z-10" />

          <motion.div
            className="flex gap-4"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              duration: 15,
              ease: "linear",
            }}
          >
            {[...repos, ...repos].map((repo, index) => (
              <div
                key={index}
                onClick={() => setCurrent(index % repos.length)}
                className={`min-w-[180px] h-[150px] flex items-center justify-center text-center px-4
                cursor-pointer rounded-xl border transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]
                ${
                  current === index % repos.length
                    ? "border-white bg-white/10 shadow-lg"
                    : "border-white/10 bg-white/5 hover:bg-white/10 hover:scale-[1.03]"
                }
              `}
              >
                <p className="text-sm font-semibold text-white line-clamp-2">
                  {repo.name}
                </p>
              </div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default ProjectsShowcase;