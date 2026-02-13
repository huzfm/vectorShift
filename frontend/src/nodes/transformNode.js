// nodes/transformNode.js
import { BaseNode } from './baseNode';

export const TransformNode = ({ id }) => {
      return (
            <BaseNode
                  title="Transform"
                  inputs={[`${id}-input`]}
                  outputs={[`${id}-output`]}
            >
                  <div className="flex flex-col gap-1">
                        <label className="text-[10px] font-medium text-gray-500">
                              Operation
                        </label>
                        <select
                              className="
            w-full rounded-md border border-gray-300
            px-2 py-1 text-xs text-gray-700 bg-white
            focus:outline-none focus:ring-1 focus:ring-blue-500
          "
                        >
                              <option>Trim</option>
                              <option>Lowercase</option>
                              <option>Uppercase</option>
                        </select>
                  </div>
            </BaseNode>
      );
};
