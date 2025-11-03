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
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.4, 0.0, 0.2, 1] },
  },
};

const LeadershipGrid: FC<Props> = ({ leaders, className = "" }) => {
  return (
    <motion.div
      className={`grid gap-6 sm:gap-8 justify-items-center sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ${className}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
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
            <article className="flex h-full w-full max-w-sm flex-col items-center gap-4 rounded-3xl bg-white border border-gray-200 p-6 text-center transition-all hover:shadow-xl hover:scale-[1.02]">
              <div className="relative aspect-square w-full max-w-[9rem] overflow-hidden rounded-full bg-gray-100 shadow-md">
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
              <div className="space-y-1">
                <h3 className="text-xl font-bold text-gray-900">
                  {name}
                </h3>
                {rank && (
                  <p className="text-sm font-medium text-gray-500 uppercase tracking-wide">
                    {rank}
                  </p>
                )}
                {portfolio && (
                  <p className="text-sm font-medium text-[#0071e3]">
                    {portfolio}
                  </p>
                )}
              </div>
            </article>
          </motion.div>
        )
      )}
    </motion.div>
  );
};

export default LeadershipGrid;
