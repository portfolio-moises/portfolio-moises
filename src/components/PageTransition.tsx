import { motion } from "framer-motion";
import type { PropsWithChildren } from "react";

const PageTransition = ({ children }: PropsWithChildren) => (
  <motion.main
    initial={{ opacity: 0, y: 16 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -12 }}
    transition={{ duration: 0.35, ease: "easeOut" }}
  >
    {children}
  </motion.main>
);

export default PageTransition;
