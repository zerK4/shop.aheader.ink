import adminStore from '@/store/adminStore';
import { Attribute } from '@/types/defaultTypes';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { AiOutlineClose, AiOutlinePlus } from 'react-icons/ai';
import { v4 } from 'uuid';

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
  const { attributes } = adminStore();
  const [attribute, setAttribute] = useState<Attribute>({
    id: '',
    name: '',
    value: '',
  });

  const addAttribute = () => {
    adminStore.setState((state) => ({
      attributes: [...state.attributes, { ...attribute, id: v4() }],
    }));

    setAttribute({
      name: '',
      value: '',
    });
  };

  const removeAttribute = (id: any) => {
    adminStore.setState((state) => ({
      attributes: state.attributes.filter((attr) => attr.id !== id),
    }));
  };

  return (
    <motion.div
      variants={attrSidebarVariants}
      animate={attrSidebar ? 'visible' : 'hidden'}
      className={`bg-black text-gray-300 absolute w-60 h-screen  md:relative right-0 overflow-hidden`}
      onClick={(e) => e.stopPropagation()}
    >
      <div className="flex justify-between items-center w-full p-2">
        <button
          className="p-2 border rounded-full left-2 top-2 border-neutral-700 hover:border-neutral-400 ease-in-out duration-300"
          onClick={() => adminStore.setState({ attrSidebar: false })}
        >
          <AiOutlineClose className="text-white font-medium text-xl" />
        </button>
        <h2 className="text-md font-medium px-2 select-none">Attributes</h2>
      </div>
      <div className="px-2">
        <div className="py-2 flex flex-col gap-2">
          <div className="flex gap-2 w-full">
            <input
              type="text"
              value={attribute.name}
              onChange={(e) =>
                setAttribute({ ...attribute, name: e.target.value })
              }
              className="w-full p-2 outline-none bg-neutral-800 border border-neutral-700 focus:bg-neutral-600 ease-in-out duration-300  rounded-sm"
              placeholder="Color"
            />
            <input
              type="text"
              value={attribute.value}
              onChange={(e) =>
                setAttribute({ ...attribute, value: e.target.value })
              }
              className="w-full p-2 outline-none bg-neutral-800 border border-neutral-700 focus:bg-neutral-600 ease-in-out duration-300 rounded-sm"
              placeholder="Red"
            />
          </div>
          <button
            onClick={addAttribute}
            className="bg-gray-300 text-black rounded-sm shadow shadow-white p-2 hover:bg-gray-400 ease-in-out duration-300 flex items-center justify-center gap-2"
          >
            <AiOutlinePlus className="text-xl" />
            <span>Add</span>
          </button>
        </div>
        <div className="border-t-2 py-2 border-neutral-800">
          {attributes.length === 0 ? (
            <span className="text-sm">
              No attributes yet for this product, add some.
            </span>
          ) : (
            adminStore?.getState()?.attributes?.map((attribute, i) => (
              <div
                key={i}
                className="flex gap-2 items-center p-1 border-b border-neutral-700 justify-between"
              >
                <div className="flex gap-4">
                  <span>{attribute.name}</span>
                  <span>{attribute.value}</span>
                </div>
                <button onClick={() => removeAttribute(attribute.id)}>
                  <AiOutlineClose className="text-white font-medium hover:text-red-500 ease-in-out duration-300" />
                </button>
              </div>
            ))
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default SidebarRight;
