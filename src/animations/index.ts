export const revealAnim = {
  hidden: { opacity: 0, y: "20px" },
  show: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      delay: delay,
      // duration: 0.5,
    },
  }),
};
