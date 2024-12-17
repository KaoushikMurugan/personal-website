"use client";

import { motion, useScroll, useTransform } from 'framer-motion';

const ScrollDownIndicator: React.FC = () => {
    const { scrollYProgress } = useScroll();
    
    const opacity = useTransform(scrollYProgress, [0, 0.05], [1, 0]);
    const blur = useTransform(scrollYProgress, [0, 0.05], ["blur(0px)", "blur(5px)"]);

    return (
        <motion.div 
            className="absolute bottom-[2rem] w-full text-center" 
            style={{ opacity, filter: blur }}
            animate={{
                y: [10, 0, 10],
            }}
            transition={{
                duration: 1.5,
                ease: 'easeInOut',
                loop: Infinity,
                repeat: Infinity,
                repeatDelay: 0.5,
            }}
        >
            <p className="text-white text-lg">
                Scroll Down
                <br />
                <span className="text-3xl">▾</span>
            </p>
        </motion.div>
    );
};

export default ScrollDownIndicator;