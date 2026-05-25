import Container from "@/components/Container";
import { useEffect, useRef, useState } from "react";
import styles from "@/styles/Home.module.css";
import { Button } from "@/components/ui/button";
import {
  ChevronRight,
  Code2,
  SearchCheck,
  MonitorSmartphone,
  Database,
  Palette,
  FileCode,
  Workflow,
  Mail,
  Linkedin,
  Instagram,
  Phone,
  Github,
  GraduationCap,
  Briefcase,
  Trophy,
} from "lucide-react";
import { TriangleDownIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { cn, scrollTo } from "@/lib/utils";
import Image from "next/image";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { type CarouselApi } from "@/components/ui/carousel";
import VanillaTilt from "vanilla-tilt";
import { motion } from "framer-motion";
import { useLanguage } from "@/lib/i18n";

// Static asset metadata that doesn't change per language
const projectAssets = [
  // Pharmacy Academy Library — ongoing freelance (YARSI)
  {
    image: "/assets/Web-yarsi.png",
    href: "#",
    technologies: [
      "SLiMS",
      "Laravel",
      "PHP",
      "MySQL",
      "Google OAuth (Socialite)",
      "SweetAlert",
      "JavaScript",
      "Figma",
    ],
  },
  // Akunaja.id — premium digital account marketplace
  {
    image: "/assets/Web-akunaja.png",
    href: "https://akunaja.id/",
    technologies: ["Laravel", "Tailwind CSS", "MySQL", "JavaScript", "Payment Gateway"],
  },
  { image: "/assets/Web-sisfota.png", href: "https://sisfota.fmipa-untan.id/login", technologies: ["Laravel", "OAuth 2.0", "MySQL", "Bootstrap"] },
  { image: "/assets/Web-kimia.png", href: "https://biology.fmipa.untan.ac.id/", technologies: ["WordPress", "MySQL", "Figma", "CSS"] },
  { image: "/assets/Web-arcia.png", href: "#", technologies: ["Laravel", "MySQL", "Bootstrap", "Figma", "Safety Stock"] },
  { image: "/assets/Web-cheve.png", href: "#", technologies: ["Laravel", "MySQL", "Tailwind CSS", "Figma"] },
];

const serviceIcons = [Code2, SearchCheck, Palette, Database, Workflow, MonitorSmartphone];

export default function Home() {
  const refScrollContainer = useRef(null);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [carouselApi, setCarouselApi] = useState<CarouselApi | null>(null);
  const [current, setCurrent] = useState<number>(0);
  const [count, setCount] = useState<number>(0);
  const { t } = useLanguage();

  // handle scroll
  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-link");

    async function getLocomotive() {
      const Locomotive = (await import("locomotive-scroll")).default;
      new Locomotive({
        el: refScrollContainer.current ?? new HTMLElement(),
        smooth: true,
      });
    }

    function handleScroll() {
      let current = "";
      setIsScrolled(window.scrollY > 0);

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 250) {
          current = section.getAttribute("id") ?? "";
        }
      });

      navLinks.forEach((li) => {
        li.classList.remove("nav-active");

        if (li.getAttribute("href") === `#${current}`) {
          li.classList.add("nav-active");
        }
      });
    }

    void getLocomotive();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (!carouselApi) return;

    setCount(carouselApi.scrollSnapList().length);
    setCurrent(carouselApi.selectedScrollSnap() + 1);

    carouselApi.on("select", () => {
      setCurrent(carouselApi.selectedScrollSnap() + 1);
    });
  }, [carouselApi]);

  // card hover effect
  useEffect(() => {
    const tilt: HTMLElement[] = Array.from(document.querySelectorAll("#tilt"));
    VanillaTilt.init(tilt, {
      speed: 300,
      glare: true,
      "max-glare": 0.1,
      gyroscope: true,
      perspective: 900,
      scale: 0.9,
    });
  }, []);

  // Merge per-language project copy with static asset metadata
  const projects = t.projects.items.map((p, i) => ({
    ...p,
    image: projectAssets[i]?.image ?? "/assets/Web-cheve.png",
    href: projectAssets[i]?.href ?? "#",
    technologies: projectAssets[i]?.technologies ?? [],
  }));

  return (
    <Container>
      <div ref={refScrollContainer}>
        <Gradient />

        {/* Intro */}
        <section
          id="home"
          data-scroll-section
          className="mt-40 flex w-full flex-col items-center xl:mt-0 xl:min-h-screen xl:flex-row xl:justify-between"
        >
          <div className={styles.intro}>
            <div
              data-scroll
              data-scroll-direction="horizontal"
              data-scroll-speed=".09"
              className="flex flex-row items-center space-x-1.5"
            >
              {t.hero.pills.map((pill) => (
                <span key={pill} className={styles.pill}>
                  {pill}
                </span>
              ))}
            </div>
            <div>
              <h1
                data-scroll
                data-scroll-enable-touch-speed
                data-scroll-speed=".06"
                data-scroll-direction="horizontal"
              >
                <span className="text-6xl tracking-tighter text-foreground 2xl:text-8xl">
                  {t.hero.greeting}
                  <br />
                </span>
                <span className="clash-grotesk text-gradient text-6xl 2xl:text-8xl">
                  {t.hero.name}
                </span>
              </h1>
              <p
                data-scroll
                data-scroll-enable-touch-speed
                data-scroll-speed=".06"
                className="mt-1 max-w-lg tracking-tight text-muted-foreground 2xl:text-xl"
              >
                {t.hero.tagline}
              </p>
            </div>
            <span
              data-scroll
              data-scroll-enable-touch-speed
              data-scroll-speed=".06"
              className="flex flex-row items-center space-x-1.5 pt-6"
            >
              <Link href="mailto:permanajacly@gmail.com" passHref>
                <Button>
                  {t.hero.cta} <ChevronRight className="ml-1 h-4 w-4" />
                </Button>
              </Link>
              <Button
                variant="outline"
                onClick={() => scrollTo(document.querySelector("#about"))}
              >
                {t.hero.learnMore}
              </Button>
            </span>

            <div
              className={cn(
                styles.scroll,
                isScrolled && styles["scroll--hidden"],
              )}
            >
              {t.hero.scroll}{" "}
              <TriangleDownIcon className="mt-1 animate-bounce" />
            </div>
          </div>

          {/* Glow placeholder (kept for layout symmetry) */}
          <div
            data-scroll
            data-scroll-speed="-.01"
            className="mt-14 flex h-full w-full items-center justify-center xl:mt-0"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.8,
                ease: [0, 0.71, 0.2, 1.01],
              }}
              className="relative"
            >
              <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-primary via-purple-500 to-secondary opacity-75 blur-2xl"></div>
            </motion.div>
          </div>
        </section>

        {/* About */}
        <section id="about" data-scroll-section>
          <div
            data-scroll
            data-scroll-speed=".4"
            data-scroll-position="top"
            className="my-14 flex max-w-6xl flex-col justify-start space-y-10"
          >
            <h2 className="py-16 pb-2 text-3xl font-light leading-normal tracking-tighter text-foreground xl:text-[40px]">
              {t.about.paragraph}
            </h2>

            <div className="grid grid-cols-2 gap-8 xl:grid-cols-3">
              {t.about.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="flex flex-col items-center text-center xl:items-start xl:text-start"
                >
                  <span className="clash-grotesk text-gradient text-4xl font-semibold tracking-tight xl:text-6xl">
                    {stat.value}
                  </span>
                  <span className="tracking-tight text-muted-foreground xl:text-lg">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Education & Experience */}
            <div className="mt-16 grid gap-8 md:grid-cols-2">
              {/* Education */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="rounded-lg bg-white/5 p-6 backdrop-blur"
              >
                <div className="flex items-center gap-2">
                  <GraduationCap className="h-5 w-5 text-primary" />
                  <h3 className="text-gradient clash-grotesk text-2xl font-semibold">
                    {t.about.educationTitle}
                  </h3>
                </div>
                <div className="mt-4 space-y-4">
                  <div>
                    <p className="font-semibold text-foreground">
                      {t.about.university}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {t.about.degree}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {t.about.period}
                    </p>
                  </div>

                  <div className="border-t border-white/10 pt-3">
                    <p className="text-sm font-medium text-foreground">
                      {t.about.additionalLabel}
                    </p>
                    <ul className="mt-2 space-y-2 text-sm text-muted-foreground">
                      {t.about.additionalItems.map((item) => (
                        <li key={item}>• {item}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="border-t border-white/10 pt-3">
                    <p className="text-sm font-medium text-foreground">
                      {t.about.thesisLabel}
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {t.about.thesis}
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Experience */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="rounded-lg bg-white/5 p-6 backdrop-blur"
              >
                <div className="flex items-center gap-2">
                  <Briefcase className="h-5 w-5 text-primary" />
                  <h3 className="text-gradient clash-grotesk text-2xl font-semibold">
                    {t.about.experienceTitle}
                  </h3>
                </div>
                <div className="mt-4 space-y-4">
                  {t.about.experiences.map((exp) => (
                    <div
                      key={`${exp.role}-${exp.org}`}
                      className="border-l-2 border-primary/30 pl-3"
                    >
                      <p className="font-semibold text-foreground">{exp.role}</p>
                      <p className="text-sm text-muted-foreground">{exp.org}</p>
                      <p className="text-xs text-muted-foreground/70">
                        {exp.period}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Achievements & Certifications */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="rounded-lg bg-white/5 p-6 backdrop-blur"
            >
              <div className="flex items-center gap-2">
                <Trophy className="h-5 w-5 text-primary" />
                <h3 className="text-gradient clash-grotesk text-xl font-semibold">
                  {t.about.achievementsTitle}
                </h3>
              </div>
              <div className="mt-4 grid gap-3 md:grid-cols-2">
                {t.about.achievements.map((ach) => (
                  <div
                    key={ach.title}
                    className="rounded-md bg-white/[3%] p-3 transition hover:bg-white/[6%]"
                  >
                    <p className="font-semibold text-foreground">{ach.title}</p>
                    <p className="text-sm text-muted-foreground">{ach.sub}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" data-scroll-section>
          <div data-scroll data-scroll-speed=".4" className="my-24">
            <span className="text-gradient clash-grotesk text-sm font-semibold tracking-tighter">
              {t.skills.eyebrow}
            </span>
            <h2 className="mt-3 text-4xl font-semibold tracking-tight xl:text-6xl">
              {t.skills.title}
            </h2>

            <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {t.skills.groups.map((skill, index) => (
                <motion.div
                  key={skill.category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="rounded-lg bg-white/5 p-6 backdrop-blur"
                >
                  <h3 className="text-gradient clash-grotesk mb-3 text-lg font-semibold">
                    {skill.category}
                  </h3>
                  <ul className="space-y-2">
                    {skill.items.map((item) => (
                      <li key={item} className="text-sm text-muted-foreground">
                        • {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" data-scroll-section>
          {/* Gradient */}
          <div className="relative isolate -z-10">
            <div
              className="absolute inset-x-0 -top-40 transform-gpu overflow-hidden blur-[100px] sm:-top-80 lg:-top-60"
              aria-hidden="true"
            >
              <div
                className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-primary via-primary to-secondary opacity-10 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                style={{
                  clipPath:
                    "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                }}
              />
            </div>
          </div>
          <div data-scroll data-scroll-speed=".4" className="my-64">
            <span className="text-gradient clash-grotesk text-sm font-semibold tracking-tighter">
              {t.projects.eyebrow}
            </span>
            <h2 className="mt-3 text-4xl font-semibold tracking-tight xl:text-6xl">
              {t.projects.title}
            </h2>
            <p className="mt-1.5 text-base tracking-tight text-muted-foreground xl:text-lg">
              {t.projects.subtitle}
            </p>

            {/* Grid Layout */}
            <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-2">
              {projects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="group h-full overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-primary/20">
                    <Link
                      href={project.href}
                      target={project.href !== "#" ? "_blank" : undefined}
                      rel={
                        project.href !== "#" ? "noopener noreferrer" : undefined
                      }
                      aria-label={`Open ${project.title}`}
                      className={cn(
                        "block focus:outline-none focus-visible:ring-2 focus-visible:ring-primary",
                        project.href === "#" && "pointer-events-none cursor-default",
                      )}
                      passHref
                    >
                      <CardHeader className="p-0">
                        <div className="relative overflow-hidden">
                          {project.image.endsWith(".webm") ? (
                            <video
                              src={project.image}
                              autoPlay
                              loop
                              muted
                              className="aspect-video h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                          ) : (
                            <Image
                              src={project.image}
                              alt={project.title}
                              width={600}
                              height={300}
                              quality={100}
                              className="aspect-video h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                          )}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                        </div>
                      </CardHeader>
                      <CardContent className="p-6">
                        <h3 className="text-xl font-semibold tracking-tight text-foreground transition-colors group-hover:text-primary">
                          {project.title}
                        </h3>

                        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                          {project.fullDescription}
                        </p>

                        <div className="mt-4">
                          <p className="mb-2 text-xs font-medium text-muted-foreground">
                            {t.projects.techLabel}
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech) => (
                              <span key={tech} className={styles.pill}>
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div className="mt-4 flex items-center justify-between border-t border-white/5 pt-4">
                          <span className="text-xs text-muted-foreground">
                            {project.period}
                          </span>
                          {project.href !== "#" ? (
                            <span className="flex items-center gap-1 text-xs font-medium text-primary opacity-80 transition-all duration-300 group-hover:translate-x-0.5 group-hover:opacity-100">
                              {t.projects.visit}
                              <ChevronRight className="h-4 w-4" />
                            </span>
                          ) : (
                            <span className="text-xs text-muted-foreground/60">
                              {t.projects.private}
                            </span>
                          )}
                        </div>
                      </CardContent>
                    </Link>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="services" data-scroll-section>
          <div
            data-scroll
            data-scroll-speed=".4"
            data-scroll-position="top"
            className="my-24 flex flex-col justify-start space-y-10"
          >
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 1,
                staggerChildren: 0.5,
              }}
              viewport={{ once: true }}
              className="grid items-center gap-1.5 md:grid-cols-2 xl:grid-cols-3"
            >
              <div className="flex flex-col py-6 xl:p-6">
                <h2 className="text-4xl font-medium tracking-tight">
                  {t.services.title}
                  <br />
                  <span className="text-gradient clash-grotesk tracking-normal">
                    {t.services.titleAccent}
                  </span>
                </h2>
                <p className="mt-2 tracking-tighter text-secondary-foreground">
                  {t.services.subtitle}
                </p>
              </div>
              {t.services.items.map((service, idx) => {
                const Icon = serviceIcons[idx] ?? FileCode;
                return (
                  <div
                    key={service.service}
                    className="flex flex-col items-start rounded-md bg-white/5 p-14 shadow-md backdrop-blur transition duration-300 hover:-translate-y-0.5 hover:bg-white/10 hover:shadow-md"
                  >
                    <Icon className="my-6 text-primary" size={20} />
                    <span className="text-lg tracking-tight text-foreground">
                      {service.service}
                    </span>
                    <span className="mt-2 tracking-tighter text-muted-foreground">
                      {service.description}
                    </span>
                  </div>
                );
              })}
            </motion.div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" data-scroll-section className="my-64">
          <div
            data-scroll
            data-scroll-speed=".4"
            data-scroll-position="top"
            className="flex flex-col items-center justify-center rounded-lg bg-gradient-to-br from-primary/[6.5%] to-white/5 px-8 py-16 text-center xl:py-24"
          >
            <h2 className="text-4xl font-medium tracking-tighter xl:text-6xl">
              {t.contact.title}{" "}
              <span className="text-gradient clash-grotesk">
                {t.contact.titleAccent}
              </span>
            </h2>
            <p className="mt-1.5 text-base tracking-tight text-muted-foreground xl:text-lg">
              {t.contact.subtitle}
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              {t.contact.location}
            </p>

            {/* Contact Buttons Grid */}
            <div className="mt-10 grid w-full max-w-3xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <Link href="mailto:permanajacly@gmail.com" className="w-full">
                <Button
                  size="lg"
                  className="w-full gap-2 bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600"
                >
                  <Mail className="h-5 w-5" />
                  {t.contact.email}
                </Button>
              </Link>

              <Link
                href="https://www.linkedin.com/in/jacly-permana/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full"
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full gap-2 border-blue-500/50 hover:bg-blue-500/10"
                >
                  <Linkedin className="h-5 w-5 text-blue-500" />
                  LinkedIn
                </Button>
              </Link>

              <Link
                href="https://github.com/Jacly1"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full"
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full gap-2 border-gray-500/50 hover:bg-gray-500/10"
                >
                  <Github className="h-5 w-5 text-gray-400" />
                  GitHub
                </Button>
              </Link>

              <Link
                href="https://instagram.com/jacly_p"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full"
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full gap-2 border-pink-500/50 hover:bg-pink-500/10"
                >
                  <Instagram className="h-5 w-5 text-pink-500" />
                  Instagram
                </Button>
              </Link>

              <Link
                href="https://wa.me/6285828325550"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full"
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full gap-2 border-green-500/50 hover:bg-green-500/10"
                >
                  <Phone className="h-5 w-5 text-green-500" />
                  {t.contact.whatsapp}
                </Button>
              </Link>
            </div>

            {/* Alternative Contact Info */}
            <div className="mt-8 flex flex-col gap-2 text-sm text-muted-foreground">
              <p>📧 permanajacly@gmail.com</p>
              <p>📱 +62 858 2832 5550</p>
              <p>💻 github.com/Jacly1</p>
            </div>
          </div>
        </section>
      </div>
    </Container>
  );
}

function Gradient() {
  return (
    <>
      {/* Upper gradient */}
      <div className="absolute -top-40 right-0 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
        <svg
          className="relative left-[calc(50%-11rem)] -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem]"
          viewBox="0 0 1155 678"
        >
          <path
            fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)"
            fillOpacity=".1"
            d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
          />
          <defs>
            <linearGradient
              id="45de2b6b-92d5-4d68-a6a0-9b9b2abad533"
              x1="1155.49"
              x2="-78.208"
              y1=".177"
              y2="474.645"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#7980fe" />
              <stop offset={1} stopColor="#f0fff7" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Lower gradient */}
      <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
        <svg
          className="relative left-[calc(50%+3rem)] h-[21.1875rem] max-w-none -translate-x-1/2 sm:left-[calc(50%+36rem)] sm:h-[42.375rem]"
          viewBox="0 0 1155 678"
        >
          <path
            fill="url(#ecb5b0c9-546c-4772-8c71-4d3f06d544bc)"
            fillOpacity=".1"
            d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
          />
          <defs>
            <linearGradient
              id="ecb5b0c9-546c-4772-8c71-4d3f06d544bc"
              x1="1155.49"
              x2="-78.208"
              y1=".177"
              y2="474.645"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#9A70FF" />
              <stop offset={1} stopColor="#838aff" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </>
  );
}
