import adminStore from '@/store/adminStore';
import { AiFillCaretDown } from 'react-icons/ai';

function DropComponent(props: any) {
  const { categories, id, selectWhat } = props;

  const { dropDown, dropDownId } = adminStore();
  const selectedValue =
    adminStore((state) => state[selectWhat]?.name) ||
    `Select ${selectWhat.replace('selected', '')}`;

  return (
    <div className="w-full relative">
      <button
        onClick={() =>
          adminStore.setState({
            dropDown: !dropDown,
            dropDownId: id,
          })
        }
        className="text-white w-full mb-2 bg-[#111111] hover:bg-neutral-900 focus:ring-4 focus:outline-none rounded-md text-sm px-4 py-2.5 text-center inline-flex items-center justify-between"
        type="button"
      >
        {selectedValue}
        {!categories ? (
          <div className="sm-loader h-10 w-10" />
        ) : (
          <AiFillCaretDown />
        )}
      </button>
      <div
        id="dropdown"
        className={`z-10 ${
          dropDown && dropDownId === id && categories ? 'visible' : 'hidden'
        } absolute w-full bg-white border-2 border-neutral-300 divide-gray-100 rounded-lg shadow`}
      >
        <ul
          className="py-2 text-sm text-black"
          aria-labelledby="dropdownDefaultButton"
        >
          {categories &&
            categories?.map((cat: any) => (
              <li
                className="p-2 hover:bg-gray-200 cursor-pointer"
                onClick={() =>
                  adminStore.setState((state) => ({
                    dropDown: !dropDown,
                    [selectWhat]: cat,
                  }))
                }
                key={cat?.id}
              >
                {cat?.name}
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}

export default DropComponent;
