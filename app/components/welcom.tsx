import React from "react";

type Props = { source: "codedoozak.ir" };

export default function Welcom({ source }: Props) {
  console.log(source);

  return (
    <h1 className="bg-sky-500 py-4 text-center">
      welcome to {source} huskey tutorial
    </h1>
  );
}
