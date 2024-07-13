"use client";
import { type AssistantToolProps, useAssistantTool } from "./useAssistantTool";

export const makeAssistantTool = <
  TArgs extends Record<string | number, unknown>,
  TResult,
>(
  tool: AssistantToolProps<TArgs, TResult>,
) => {
  const Tool = () => {
    useAssistantTool(tool);
    return null;
  };
  return Tool;
};
