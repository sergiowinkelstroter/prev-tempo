import { MagnifyingGlass } from "phosphor-react";

export const Input = (props) => {
  return (
    <div className="p-2 rounded-md flex justify-center items-center bg-white  md:w-[400px] mb-12 shadow-lg">
      <input
        type="text"
        placeholder="Digite o nome da cidade "
        value={props.input}
        onChange={(e) => props.setInput(e.target.value)}
        className=" bg-transparent focus:outline-none pl-2 text-gray-500 w-full"
      />
      <button onClick={props.HandlePrevisao}>
        <MagnifyingGlass size={24} />
      </button>
    </div>
  );
};
