import {
  faCss3,
  faHtml5,
  faJs,
  faReact,
  faTypo3,
} from "@fortawesome/free-brands-svg-icons";
import { motion, useAnimationControls } from "framer-motion";
import { useEffect } from "react";

const brands = [
  {
    id: 1,
    name: "HTML",
    icon: faHtml5,
    color: "#E34F26",
  },
  {
    id: 2,
    name: "CSS",
    icon: faCss3,
    color: "#1572B6",
  },
  {
    id: 3,
    name: "Tailwind",
    icon: faJs,
    color: "#38B2AC",
  },
  {
    id: 4,
    name: "MUI",
    icon: faJs,
    color: "#1976D2",
  },
  {
    id: 5,
    name: "JavaScript",
    icon: faJs,
    color: "#F7DF1E",
  },
  {
    id: 6,
    name: "TypeScript",
    icon: faTypo3,
    color: "#007ACC",
  },
  {
    id: 7,
    name: "React",
    icon: faReact,
    color: "#61DAFB",
  },
  {
    id: 8,
    name: "Next.js",
    icon: faReact,
    color: "#61DAFB",
  },
  {
    id: 9,
    name: "Redux",
    icon: faReact,
    color: "#764ABC",
  },
  {
    id: 10,
    name: "Node.js",
    icon: faJs,
    color: "#339933",
  },
  {
    id: 11,
    name: "Express",
    icon: faJs,
    color: "#61DAFB",
  },
  {
    id: 12,
    name: "MongoDB",
    icon: faJs,
    color: "#47A248",
  },
  {
    id: 13,
    name: "PostgreSQL",
    icon: faJs,
    color: "#336791",
  },
  {
    id: 14,
    name: "Firebase",
    icon: faJs,
    color: "#FFCA28",
  },
  {
    id: 15,
    name: "Prisma",
    icon: faJs,
    color: "#61DAFB",
  },
  {
    id: 16,
    name: "Mongoose",
    icon: faJs,
    color: "#880000",
  },
  {
    id: 17,
    name: "EJS",
    icon: faJs,
    color: "#61DAFB",
  },
  {
    id: 18,
    name: "GIT&GitHub",
  },
  {
    id: 19,
    name: "Next Auth",
    color: "#61DAFB",
  },
  {
    id: 20,
    name: "JWT",
    color: "#61DAFB",
  },
  {
    id: 21,
    name: "Clerk",
    color: "#61DAFB",
  },
  {
    id: 22,
    name: "Vercel",
    color: "#61DAFB",
  },
  {
    id: 23,
    name: "Cpanel",
    color: "#61DAFB",
  },
];

export default function BrandSlider() {
  const controls = useAnimationControls();

  useEffect(() => {
    controls.start({
      x: [0, -1920],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 30,
          ease: "linear",
        },
      },
    });
  }, [controls]);

  return (
    <div className="w-full py-8 sm:py-12 md:py-16 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-gray-50 to-transparent dark:from-gray-800/50 z-10" />
        <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-gray-50 to-transparent dark:from-gray-800/50 z-10" />

        <motion.div animate={controls} className="flex gap-16 items-center">
          {[...brands, ...brands, ...brands].map((brand, index) => (
            <motion.div
              key={`${brand.id}-${index}`}
              className="flex flex-col items-center"
            >
              <motion.div
                className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 flex items-center justify-center opacity-60 hover:opacity-100 transition-all duration-300"
                whileHover={{
                  scale: 1.2,
                  rotateX: 10,
                  rotateY: -10,
                  transition: {
                    duration: 0.2,
                    ease: "easeOut",
                  },
                }}
                style={{ color: brand.color }}
              >
                <div className="text-lg flex items-center w-full h-full">
                  {brand.name}
                </div>
                {/* <FontAwesomeIcon icon={brand.name} className="w-full h-full" /> */}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
