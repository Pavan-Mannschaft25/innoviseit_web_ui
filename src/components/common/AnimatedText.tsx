import { motion } from "framer-motion";

interface AnimatedTextProps {
  text: string;
  className?: string;
  style?: React.CSSProperties;
}

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.05, // Delay between letters
    },
  },
};

const letter = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.35,
      ease: "easeOut",
    },
  },
};

const AnimatedText = ({ text, className = "", style }: AnimatedTextProps) => {
  return (
    <motion.span
      variants={container}
      initial="hidden"
      animate="visible"
      className={className}
      style={{
        display: "inline-block",
        ...style,
      }}
    >
      {text.split("").map((char, index) => (
        <motion.span
          key={index}
          variants={letter}
          style={{
            display: "inline-block",
            whiteSpace: char === " " ? "pre" : "normal",
          }}
        >
          {char}
        </motion.span>
      ))}
    </motion.span>
  );
};

export default AnimatedText;
