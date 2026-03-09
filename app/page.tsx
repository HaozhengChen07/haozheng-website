export default function Home() {
  const experiences = [
    {
      title: "Research Assistant / Independent Researcher",
      org: "The University of Sydney",
      period: "2023.02 – 2025.02",
      points: [
        "Built quantitative models for sequential decision-making, information cascades, and voting-rule design.",
        "Developed Mathematica-based equilibrium-solving algorithms and simulation workflows.",
        "Translated academic research into practical strengths in strategic analysis, mechanism design, and structured problem-solving.",
      ],
    },
    {
      title: "Fund Data Research Analyst",
      org: "Morningstar, Shenzhen",
      period: "2021.12 – 2022.02",
      points: [
        "Supported global fund database maintenance and data-quality control across teams.",
        "Worked with brokers and internal stakeholders to verify, complete, and improve financial data processes.",
        "Strengthened cross-functional communication and analytical thinking in real business workflows.",
      ],
    },
    {
      title: "Policy Research Intern",
      org: "Shenzhen Investment Fund Association",
      period: "2021.06 – 2021.07",
      points: [
        "Drafted industry development reports, private-fund review materials, and policy analysis notes.",
        "Participated in compliance-related visits and financial sector research.",
        "Helped organize financial news and improve content classification logic for public-facing materials.",
      ],
    },
  ];

  const projects = [
    {
      title: "Information Cascades in Group Decision-Making",
      subtitle: "Research / Strategy Modeling",
      description:
        "Designed a computational framework to study how different voting rules affect collective learning, decision quality, and cascade risk in sequential group settings.",
      tags: ["Quantitative Modeling", "Game Theory", "Simulation", "Mathematica"],
    },
    {
      title: "Economic & Policy Analysis Toolkit",
      subtitle: "Applied Analytics",
      description:
        "Built a practical skill set across econometrics, causal inference, and policy-oriented analysis, including OLS, DID, 2SLS, and structured evaluation frameworks.",
      tags: ["Econometrics", "Policy Analysis", "Causal Inference", "Data Analysis"],
    },
    {
      title: "Business-Facing Research Translation",
      subtitle: "Commercial Communication",
      description:
        "Converted academic and analytical work into business-relevant narratives, helping frame research outputs in ways that are useful for consulting, strategy, and decision support.",
      tags: ["Storytelling", "Strategy", "Research", "Problem Solving"],
    },
  ];

  const skills = [
    "Strategic Analysis",
    "Economic Research",
    "Quantitative Modeling",
    "Econometrics",
    "Policy Analysis",
    "Data Analysis",
    "Mathematica",
    "Stata",
    "Python",
    "R",
    "Excel",
    "Presentation Design",
  ];

  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      <header className="sticky top-0 z-20 border-b border-white/10 bg-neutral-950/85 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div>
            <div className="text-lg font-semibold tracking-wide">Haozheng Chen</div>
            <div className="text-xs text-white/60">Business / Consulting Personal Website</div>
          </div>
          <nav className="hidden gap-6 text-sm text-white/70 md:flex">
            <a href="#about" className="hover:text-white">About</a>
            <a href="#experience" className="hover:text-white">Experience</a>
            <a href="#projects" className="hover:text-white">Projects</a>
            <a href="#skills" className="hover:text-white">Skills</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        <section className="mx-auto grid max-w-6xl gap-10 px-6 pb-16 pt-20 md:grid-cols-[1.2fr_0.8fr] md:pb-24 md:pt-28">
          <div>
            <div className="mb-4 inline-flex rounded-full border border-white/15 px-3 py-1 text-xs text-white/70">
              Economics • Strategy • Quantitative Analysis
            </div>
            <h1 className="max-w-4xl text-4xl font-semibold leading-tight md:text-6xl">
              I solve complex problems with analysis, structure, and clarity.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-white/70 md:text-lg">
              Economics graduate with a background in quantitative modeling, strategic research,
              and data analysis. I focus on turning complex ideas into structured insights that
              support business and policy decisions.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="rounded-2xl bg-white px-5 py-3 text-sm font-medium text-neutral-950 shadow-lg shadow-white/10 transition hover:-translate-y-0.5"
              >
                View My Work
              </a>

              <a
                href="/resume.pdf"
                className="rounded-2xl border border-white/15 px-5 py-3 text-sm font-medium text-white transition hover:bg-white/5"
              >
                Download Resume
              </a>

              <a
                href="#contact"
                className="rounded-2xl border border-white/15 px-5 py-3 text-sm font-medium text-white transition hover:bg-white/5"
              >
                Get In Touch
              </a>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl shadow-black/30">
            <div className="text-sm text-white/50">Profile Snapshot</div>
            <div className="mt-6 space-y-5">
              <div>
                <div className="text-xs uppercase tracking-[0.2em] text-white/40">Focus</div>
                <div className="mt-1 text-lg font-medium">
                  Strategy, analysis, and business communication
                </div>
              </div>
              <div>
                <div className="text-xs uppercase tracking-[0.2em] text-white/40">Education</div>
                <div className="mt-1 text-white/80">
                  M.A. in Economic Analysis, The University of Sydney
                </div>
              </div>
              <div>
                <div className="text-xs uppercase tracking-[0.2em] text-white/40">Strengths</div>
                <div className="mt-2 flex flex-wrap gap-2">
                  {["Structured Thinking", "Quantitative Reasoning", "Research Translation", "Business Writing"].map(
                    (item) => (
                      <span
                        key={item}
                        className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/75"
                      >
                        {item}
                      </span>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="mx-auto max-w-6xl px-6 py-16 md:py-24">
          <div className="grid gap-8 md:grid-cols-[0.8fr_1.2fr]">
            <div>
              <div className="text-sm uppercase tracking-[0.25em] text-white/40">About</div>
              <h2 className="mt-3 text-3xl font-semibold md:text-4xl">
                A profile built for problem solving.
              </h2>
            </div>
            <div className="space-y-5 text-base leading-8 text-white/70">
              <p>
                My background is in economics, quantitative analysis, and strategic problem solving.
                I studied economics at the University of Miami and completed graduate studies at the
                University of Sydney, focusing on advanced microeconomics, game theory, and mathematical modeling.
              </p>
              <p>
                During my research work at the University of Sydney, I developed computational models
                to study information cascades and sequential decision-making. The project involved Bayesian
                updating, equilibrium computation, and large-scale simulations.
              </p>
              <p>
                Beyond academic research, I have also worked in financial data research and policy analysis
                environments. These experiences helped me develop a practical mindset: translating complex
                analysis into insights that are useful for organizations, teams, and decision-makers.
              </p>
            </div>
          </div>
        </section>

        <section id="experience" className="mx-auto max-w-6xl px-6 py-16 md:py-24">
          <div className="mb-10">
            <div className="text-sm uppercase tracking-[0.25em] text-white/40">Experience</div>
            <h2 className="mt-3 text-3xl font-semibold md:text-4xl">
              Experience that connects rigor with execution.
            </h2>
          </div>
          <div className="space-y-6">
            {experiences.map((item) => (
              <div key={item.title} className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 md:p-8">
                <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                  <div>
                    <h3 className="text-xl font-semibold">{item.title}</h3>
                    <div className="mt-1 text-white/60">{item.org}</div>
                  </div>
                  <div className="text-sm text-white/45">{item.period}</div>
                </div>
                <ul className="mt-5 space-y-3 text-sm leading-7 text-white/70">
                  {item.points.map((point) => (
                    <li key={point} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-white/50" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section id="projects" className="mx-auto max-w-6xl px-6 py-16 md:py-24">
          <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="text-sm uppercase tracking-[0.25em] text-white/40">Selected Work</div>
              <h2 className="mt-3 text-3xl font-semibold md:text-4xl">
                Projects and capabilities worth showing.
              </h2>
            </div>
            <div className="max-w-xl text-sm leading-7 text-white/60">
              This section is framed for commercial audiences: clear, concise, and focused on transferable value.
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {projects.map((project) => (
              <div key={project.title} className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
                <div className="text-xs uppercase tracking-[0.2em] text-white/40">{project.subtitle}</div>
                <h3 className="mt-3 text-xl font-semibold leading-snug">{project.title}</h3>
                <p className="mt-4 text-sm leading-7 text-white/70">{project.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/65">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="skills" className="mx-auto max-w-6xl px-6 py-16 md:py-24">
          <div className="grid gap-8 md:grid-cols-[0.8fr_1.2fr]">
            <div>
              <div className="text-sm uppercase tracking-[0.25em] text-white/40">Capabilities</div>
              <h2 className="mt-3 text-3xl font-semibold md:text-4xl">
                A skill set that fits strategy and consulting environments.
              </h2>
            </div>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white/75"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-6xl px-6 py-16 md:py-24">
          <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/8 to-white/[0.03] p-8 md:p-12">
            <div className="max-w-3xl">
              <div className="text-sm uppercase tracking-[0.25em] text-white/40">Contact</div>
              <h2 className="mt-3 text-3xl font-semibold md:text-5xl">Let’s connect.</h2>
              <p className="mt-5 text-base leading-8 text-white/70">
                I am building opportunities at the intersection of economics, analysis, and business problem solving.
                For roles, collaborations, or conversations, feel free to reach out.
              </p>
              <div className="mt-8 grid gap-4 text-sm text-white/80 md:grid-cols-3">
                <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                  <div className="text-white/45">Email</div>
                  <div className="mt-2">645057293@qq.com</div>
                </div>
                <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                  <div className="text-white/45">Location</div>
                  <div className="mt-2">Shenzhen, China</div>
                </div>
                <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                  <div className="text-white/45">Languages</div>
                  <div className="mt-2">Chinese / English</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
