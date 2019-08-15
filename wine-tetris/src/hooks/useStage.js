import { useState } from "react";
// HELPERS
import { createStage } from "../helpers/game";

export const useStage = () => {
  const [stage, setStage] = useState(createStage());

  return [stage, setStage];
};
