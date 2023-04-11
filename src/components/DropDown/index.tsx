import globalState from '@/store/globalStore';
import { AiFillCaretDown } from 'react-icons/ai';

function DropComponent(props: any) {
  const { categories, id, selectWhat } = props;
  console.log(categories, selectWhat, 'asd');

  const { dropDown, dropDownId } = globalState();
  return (
    <div className="w-full relative">
      <button
        onClick={() =>
          globalState.setState({
            dropDown: !dropDown,
            dropDownId: id,
          })
        }
        className="text-white w-full mb-2 bg-[#111111] hover:bg-neutral-900 focus:ring-4 focus:outline-none rounded-md text-sm px-4 py-2.5 text-center inline-flex items-center justify-between"
        type="button"
      >
        Select {selectWhat}
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
                onClick={() =>
                  globalState.setState({
                    dropDown: !dropDown,
                    [selectWhat]: cat,
                  })
                }
                key={cat?.id}
              >
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                  {cat?.name}
                </a>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}

export default DropComponent;
