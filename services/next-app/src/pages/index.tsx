import React from "react";
import { hello } from "@common/utils";
import { Button } from "@common/component";

export default function Home() {
  return (
    <div>
      {hello()}
      <Button />
    </div>
  );
}
