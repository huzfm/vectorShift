// nodes/validatorNode.js
import { BaseNode } from './baseNode';

export const ValidatorNode = ({ id }) => {
      return (
            <BaseNode
                  title="Validator"
                  inputs={[`${id}-input`]}
                  outputs={[
                        `${id}-valid`,
                        `${id}-invalid`,
                  ]}
            >
                  <div className="flex flex-col gap-1">
                        <label className="text-[10px] font-medium text-gray-500">
                              Rule
                        </label>
                        <select
                              className="
            w-full rounded-md border border-gray-300
            px-2 py-1 text-xs text-gray-700 bg-white
            focus:outline-none focus:ring-1 focus:ring-blue-500
          "
                        >
                              <option>Not Empty</option>
                              <option>Max Length</option>
                              <option>Is Number</option>
                        </select>
                  </div>
            </BaseNode>
      );
};
