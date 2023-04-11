import adminStore from '@/store/adminStore';
import { motion } from 'framer-motion';
import { AiOutlineClose } from 'react-icons/ai';

export const attrSidebarVariants = {
  visible: () => ({
    opacity: 1,
    x: 0,
    width: 250,
    transition: {
      duration: 0.4,
      ease: 'easeOut',
    },
  }),
  hidden: { opacity: 0, x: 300, width: 0 },
};

function SidebarRight() {
  const { attrSidebar } = adminStore();
  return (
    <motion.div
      variants={attrSidebarVariants}
      animate={attrSidebar ? 'visible' : 'hidden'}
      className={`bg-black w-60 h-screen absolute md:relative right-0 overflow-hidden`}
      onClick={(e) => e.stopPropagation()}
    >
      <div className="flex justify-start w-full p-2">
        <button
          className="p-2"
          onClick={() => adminStore.setState({ attrSidebar: false })}
        >
          <AiOutlineClose className="text-white font-medium text-xl" />
        </button>
      </div>
      SidebarRight
    </motion.div>
  );
}

export default SidebarRight;
