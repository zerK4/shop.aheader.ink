import globalState from '@/store/globalStore';
import { Category } from '@/types/defaultTypes';
import { motion } from 'framer-motion';
import Link from 'next/link';

function Header() {
  const { categories, loading } = globalState();

  const renderCategories = () => {
    return (
      <motion.div className="flex gap-2 items-center">
        {categories &&
          categories?.map((cat: Category) => {
            return (
              <div
                key={cat.id}
                className={`w-20 h-3 rounded-full ${
                  loading ? 'animate-pulse' : ''
                } flex items-center justify-center p-3  ease-in-out duration-300`}
              >
                <span className="flex items-center">
                  <Link
                    onClick={() => globalState.setState({ loading: true })}
                    className="opacity-70 hover:opacity-100 font-medium"
                    href={`/categories/${cat.name.toLowerCase()}`}
                  >
                    {cat.name}
                  </Link>
                </span>
              </div>
            );
          })}
      </motion.div>
    );
  };

  return (
    <motion.div className={`h-[5rem] flex items-center px-2 justify-between`}>
      <div className="text-xl">aheader</div>
      <div>{renderCategories()}</div>
      <div>Userspace</div>
    </motion.div>
  );
}

export default Header;
