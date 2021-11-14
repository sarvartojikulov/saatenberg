// animate: defines animation
// initial: defines initial state of animation or stating point.
// exit: defines animation when component exits

// Custom variant
const fadeInUp = {
  exit: { opacity: 0, y: 60 },
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 }
};

export {fadeInUp}