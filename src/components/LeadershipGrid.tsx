import type { FC } from "react";
import { motion } from "framer-motion";

type Leader = {
  name: string;
  rank?: string;
  portfolio?: string;
  photoSrc: string;
  photoAlt?: string;
  photoPosition?: string;
  photoScale?: string;
  photoRotate?: string;
};

type Props = {
  leaders: Leader[];
  className?: string;
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.4, 0.0, 0.2, 1] },
  },
};

const LeadershipGrid: FC<Props> = ({ leaders, className = "" }) => {
  return (
    <motion.div
      className={`grid gap-8 justify-items-center sm:grid-cols-2 lg:grid-cols-3 ${className}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      {leaders.map(
        (
          {
            name,
            rank,
            portfolio,
            photoSrc,
            photoAlt,
            photoPosition,
            photoScale,
            photoRotate,
          },
          index
        ) => (
          <motion.div
            key={`${name}-${index}`}
            className="flex w-full justify-center"
            variants={itemVariants}
          >
            <article className="flex h-full w-full max-w-xs flex-col items-center gap-4 rounded-2xl border border-white/10 bg-slate-900/60 p-6 text-center shadow-lg shadow-black/30 backdrop-blur-md">
              <div className="relative aspect-square w-full max-w-[8rem] overflow-hidden rounded-full border border-white/20 bg-slate-800/60 shadow-inner">
                <img
                  src={photoSrc}
                  alt={photoAlt ?? `${name}'s portrait`}
                  className={[
                    "h-full w-full object-cover",
                    photoPosition ?? "object-center",
                    photoScale ?? "",
                    photoRotate ?? "",
                  ]
                    .filter(Boolean)
                    .join(" ")}
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <h3 className="text-xl uppercase font-extrabold text-white">
                {name}
              </h3>
              {rank && (
                <p className="text-sm uppercase font-bold text-slate-300">
                  {rank}
                </p>
              )}
              {portfolio && (
                <p className="text-sm uppercase font-semibold text-blue-500">
                  {portfolio}
                </p>
              )}
            </article>
          </motion.div>
        )
      )}
    </motion.div>
  );
};

export default LeadershipGrid;
