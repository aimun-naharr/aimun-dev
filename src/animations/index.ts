export const revealAnim = {
  hidden: { opacity: 0, y: "20px" },
  show: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      ease: [0.68, -0.6, 0.32, 1.6],
      delay: delay,
      // type: "spring",
      duration: 1,
      staggerChildren: 0.5,
    },
  }),
};

// export const revea = {
//   hidden: { opacity: 0, y: "20px" },
//   show: (delay: number) => ({
//     opacity: 1,
//     y: 0,
//     transition: {
//       ease: [0.68, -0.6, 0.32, 1.6],
//       delay: delay,
//       // type: "spring",
//       duration: 1,
//     },
//   }),
// };
