import React from "react";

type TileProps = {
  icon: React.ReactNode;
  title: string;
};

const Tile: React.FC<TileProps> = ({ icon, title }) => {
  return (
    <div className="flex flex-col items-center justify-center w-40 h-40 border border-gradient-to-tr from-pink-300 to-blue-300 p-1 shadow-lg dark:border-gradient-to-tr dark:from-sky-400 dark:to-yellow-500 p-1 rounded-lg  bg-transparent">
      <div className="text-blue-500 text-4xl mb-4">{icon}</div>
      <h3 className="text-lg font-bold bg-gradient-to-tr from-neutral-400 to-zinc-800 dark:from-neutral-400 dark:to-cyan-500 bg-clip-text text-transparent">
        {title}
      </h3>
    </div>
  );
};

export { Tile };
