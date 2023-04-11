function TableLoader() {
  return (
    <tr className="animate-pulse h-[5rem] bg-neutral-700">
      <td className="px-4 py-1 whitespace-no-wrap text-sm text-neutral-100 border-b border-neutral-700"></td>
      <td className="px-4 py-1 whitespace-no-wrap text-sm text-neutral-100 border-b border-neutral-700"></td>
      <td className="px-4 py-1 text-sm text-neutral-100 border-b border-neutral-700"></td>
      <td className="px-4 py-1 text-sm text-neutral-100 border-b border-neutral-700"></td>
      <td className="px-4 py-1 text-sm text-neutral-100 border-b border-neutral-700"></td>
      <td className="px-4 py-1 text-sm text-neutral-100 border-b border-neutral-700 gap-2">
        <button className="p-2 bg-neutral-900 rounded-md m-1 hover:bg-neutral-800"></button>
        <button className="p-2 bg-neutral-900 rounded-md m-1 hover:bg-red-500"></button>
      </td>
    </tr>
  );
}

export default TableLoader;
