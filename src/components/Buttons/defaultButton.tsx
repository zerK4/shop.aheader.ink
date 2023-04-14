function DefaultButton(props: any) {
  const { action } = props;
  return (
    <>
      <button
        onClick={(e) => action(e)}
        className="p-2 bg-blue-500 rounded-md text-black border-2 border-blue-500 hover:border-blue-200 ease-in-out duration-300"
      >
        Submit
      </button>
    </>
  );
}

export default DefaultButton;
