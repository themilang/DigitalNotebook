'use client';

import Head from 'next/head';
import { motion } from 'framer-motion';
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaAws,
  FaDocker,
  FaGitAlt,
  FaGithub,
  FaTrophy,
} from 'react-icons/fa';
import {
  SiMongodb,
  SiTensorflow,
  SiNextdotjs,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiMui,
  SiAxios,
  SiFirebase,
  SiPostgresql,
  SiExpress,
  SiVercel,
  SiNetlify,
  SiJupyter,
  SiNumpy,
  SiChartdotjs,
} from 'react-icons/si';

export default function Achievements() {
  const skills = [
    { name: 'Next.js', icon: <SiNextdotjs /> },
    { name: 'React.js', icon: <FaReact /> },
    { name: 'Node.js', icon: <FaNodeJs /> },
    { name: 'MongoDB', icon: <SiMongodb /> },
    { name: 'Python', icon: <FaPython /> },
    { name: 'Machine Learning', icon: <SiTensorflow /> },
    { name: 'JavaScript', icon: <SiJavascript /> },
    { name: 'HTML5', icon: <SiHtml5 /> },
    { name: 'CSS3', icon: <SiCss3 /> },
    { name: 'Tailwind CSS', icon: <SiTailwindcss /> },
    { name: 'Material UI', icon: <SiMui /> },
    { name: 'Axios', icon: <SiAxios /> },
    { name: 'Firebase', icon: <SiFirebase /> },
    { name: 'PostgreSQL', icon: <SiPostgresql /> },
    { name: 'Express.js', icon: <SiExpress /> },
    { name: 'Vercel', icon: <SiVercel /> },
    { name: 'Netlify', icon: <SiNetlify /> },
    { name: 'AWS', icon: <FaAws /> },
    { name: 'Docker', icon: <FaDocker /> },
    { name: 'Git', icon: <FaGitAlt /> },
    { name: 'GitHub', icon: <FaGithub /> },
    { name: 'Jupyter Notebook', icon: <SiJupyter /> },
    { name: 'NumPy', icon: <SiNumpy /> },
    { name: 'Matplotlib', icon: <SiChartdotjs /> },
  ];

  const achievements = [
    {
      title: 'BE Computer Engineering',
      year: '2020 - 2024',
      description: 'Pursuing a Computer Engineering degree with specialization in Artificial Intelligence, Web Development, and cutting-edge engineering technologies, aiming to bridge theory with practical solutions.',
    },
    {
      title: 'Full Stack Developer Certification',
      year: '2024',
      description: 'Completed a rigorous Full Stack Development program focusing on MERN stack technologies from VIRIT TECHNOLOGIES.',
    },
    {
      title: 'AI/ML Online Learning',
      year: 'Current',
      description: 'Gained in-depth knowledge of Machine Learning algorithms and AI principles.',
    },
  ];

  return (
    <>
      <Head>
        <title>Achievements | Full Stack Developer Portfolio</title>
        <meta
          name="description"
          content="Explore my achievements in Full Stack Development, including skills in MERN, Next.js, Python, Machine Learning, and certifications."
        />
      </Head>

      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <section className="pb-24 pt-32">
          <div className="container max-w-4xl mx-auto px-6">
            {/* Header */}
            <motion.h1
              className="text-5xl font-bold  mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              Achievements
            </motion.h1>
            <motion.p
              className=" text-gray-700 dark:text-gray-500 mb-12"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              A glimpse into my journey as a developer, showcasing skills and milestones that reflect my growth and expertise.
            </motion.p>

            {/* Skills Section */}
            <section className="mb-16">
              <motion.h2
                className="text-3xl font-bold  mb-8 text-gray-800 dark:text-gray-100"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                Skills
              </motion.h2>
              <motion.p
              className=" mb-16 text-gray-700 dark:text-gray-500 "
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              My skills reflect not just what I’ve learned, but how I’ve grown as a developer. From crafting seamless user experiences with Tailwind CSS and Material UI to designing robust backend architectures, I’ve focused on building solutions that work and scale. Whether it’s deploying with Docker or diving into machine learning, I thrive on learning and applying tools that make a difference.
              </motion.p>
           
              <motion.div
                className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4"
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.1 } },
                }}
              >
                {skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    className="flex flex-col items-center bg-neutral-100 dark:bg-neutral-800 p-3 rounded-lg shadow hover:scale-105 hover:shadow-lg transition-transform border border-transparent hover:border-gradient-to-r hover:from-purple-400 hover:to-pink-600"
                    variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
                  >
                    <div className="text-3xl mb-2 text-purple-500">{skill.icon}</div>
                    <h3 className="text-sm font-medium text-gray-800 dark:text-gray-200">{skill.name}</h3>
                  </motion.div>
                ))}
              </motion.div>
            </section>
            <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <section className="pb-24 pt-32">
          <div className="container max-w-4xl mx-auto px-6">
            <motion.h1
              className="text-3xl font-bold  mb-8 text-gray-800 dark:text-gray-100"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              Academic Qualifications & Certifications
            </motion.h1>
            <motion.p
              className=" mb-16 text-gray-600 dark:text-gray-500 "
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 1 }}
            >
I didn’t just study computer engineering—I lived it. From the first time I wrote a line of code to getting certified in cutting-edge technologies, it’s been a journey fueled by passion and curiosity. For me, learning isn’t just about degrees and courses; it’s about staying relevant and finding smarter ways to build.            </motion.p>
            {/* Timeline Section */}
            <div className="relative">
              {/* Vertical Line */}
              <div className="absolute left-8 w-1 h-full bg-gradient-to-b from-purple-400 to-pink-600"></div>

              {/* Achievements */}
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  className="flex items-center mb-12"
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  {/* Circle Indicator */}
                  <div className="w-4 h-4 bg-gradient-to-r from-purple-400 to-pink-600 rounded-full border-4 border-gray-50 dark:border-gray-900 relative left-8"></div>

                  {/* Content Box */}
                  <div className="relative bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg w-3/4 ml-12">
                    <div className="flex items-center gap-4 mb-2">
                      <FaTrophy className="text-yellow-500 text-xl" />
                      <h3 className="text-lg font-bold text-gray-800 dark:text-gray-200">
                        {achievement.title}
                      </h3>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {achievement.description}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-300 mt-2">
                      {achievement.year}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
          </div>
        </section>
      </div>
    </>
  );
}