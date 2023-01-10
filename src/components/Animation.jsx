import * as React from "react";
import { useState } from "react";
import { book, phone, mobile/* , contact */ } from "../utils/paths";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { getIndex, useFlubber } from "../hooks/useFlubber.ts";

const paths = [ phone, /* contact, */ mobile, book, phone];
const colors = [
  "#0099ff",
  "#8855ff",
  "#ff0055",
  /* "#ee4444", */
  "#00cc88"
];

export function Animation() {
    const [pathIndex, setPathIndex] = useState(0);
    const progress = useMotionValue(pathIndex);
    const fill = useTransform(progress, paths.map(getIndex), colors);
    const path = useFlubber(progress, paths);
  
    React.useEffect(() => {
      const animation = animate(progress, pathIndex, {
          duration: 0.8,
          delay: 1,
        ease: "easeInOut",
        onComplete: () => {
          if (pathIndex === paths.length - 1) {
            progress.set(0);
            setPathIndex(1);
          } else {
            setPathIndex(pathIndex + 1);
          }
        }
      });
      return () => animation.stop();
    }, [pathIndex, progress]);
  
    return (
        <svg width="350" height="350" viewBox="0 0 500 500" style={{paddingTop: '60px'}} >
        <g transform="translate(10 10) scale(17 17)">
                <motion.path transition= {{ delay: 0, }} fill={fill} d={path} />
        </g>
      </svg>
    );
  }