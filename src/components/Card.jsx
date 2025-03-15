import { FaRegFileLines } from "react-icons/fa6";
import { MdOutlineFileDownload } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion";

const Card = ({ data, refrence }) => {
  return (
    <motion.div
      drag
      dragConstraints={refrence}
      whileDrag={{ scale: 0.9 }}
      dragElastic={0.1}
      dragTransition={{ bounceDamping: 10, bounceStiffness: 100 }}
      className="relative shrink-0 w-[45vw] sm:w-[35vw] md:w-[18vw] h-[30vh] sm:h-[35vh] md:h-[45vh] bg-zinc-900/90 rounded-[45px] py-10 px-8 text-white overflow-hidden"
    >
      <FaRegFileLines />
      <p className="text-sm leading-tight font-semibold mt-5">{data.text}</p>
      <div className="absolute footer w-full bottom-0 left-0">
        <div className="flex items-center justify-between mb-3 py-4 px-8">
          <h1>{data.filesize}</h1>
          <span className="flex justify-center items-center w-7 h-7 bg-zinc-800 rounded-full">
            {data.close ? (
              <IoClose />
            ) : (
              <MdOutlineFileDownload size=".8em" color="#fff" />
            )}
          </span>
        </div>
        {data.tag.isOpen && (
          <div
            className={`tag w-full ${
              data.tag.tagColor === "blue" ? "bg-blue-600" : "bg-green-600"
            } py-4 flex items-center justify-center`}
          >
            <h1 className="text-sm font-semibold">{data.tag.tagTitle}</h1>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default Card;


