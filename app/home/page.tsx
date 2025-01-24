import React from "react";

type Props = {
  source: "codedoozak.ir";
};

export default function Home({ source }: Props) {
  console.log(source);

  return (
    <div>
      <h1 className="bg-sky-500 py-4 text-center">
        welcome to codedoozak.ir huskey tutorial
      </h1>
      ;
    </div>
  );
}
