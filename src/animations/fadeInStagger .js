export const fadeInStagger = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.2 ,
        delay: i * 0.2, // Delay progresivo según el index
      },
    }),
    
  };