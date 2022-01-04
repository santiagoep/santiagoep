export const Header = () => {
  return (
    <header className="flex justify-between items-center w-full md:max-w-5xl mx-auto p-5">
      <div className="text-lg font-bold text-blue-500">@SantiagoEP</div>
      <a className="border-2 border-blue-500 py-2 px-4 rounded-full text-blue-500 cursor-pointer hover:bg-blue-500 hover:text-white active:scale-105">
        Say Hello
      </a>
    </header>
  );
};
