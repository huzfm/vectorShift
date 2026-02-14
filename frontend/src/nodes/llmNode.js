// llmNode.js
import { BaseNode } from './baseNode';

export const LLMNode = ({ id }) => {
  return (
    <BaseNode
      title="LLM"
      inputs={[`${id}-system`, `${id}-prompt`]}
      outputs={[`${id}-response`]}
    >
      <div className="flex flex-col gap-2 text-xs text-gray-600">


        <p className="  text-[10px] font-medium text-gray-500">
          Large Language Model
        </p>

        <div className="flex flex-col gap-1">
          <label className="text-[10px] font-medium text-gray-500">
            Model
          </label>
          <select

            className="
            w-full rounded-md border border-gray-300
            px-2 py-1 text-xs text-gray-700
            bg-white
            focus:outline-none focus:ring-1 focus:ring-blue-500
          "
          >
            <option value="Text">Gemini</option>
            <option value="Text">Claude</option>
            <option value="Text">GPT-OSS</option>
          </select>
        </div>

      </div>
    </BaseNode>
  );
};
