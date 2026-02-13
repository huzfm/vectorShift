// nodes/filterNode.js
import { BaseNode } from './baseNode';

export const FilterNode = ({ id }) => {
      return (
            <BaseNode
                  title="Filter"
                  inputs={[`${id}-input`]}
                  outputs={[`${id}-passed`]}
            >
                  <div className="flex flex-col gap-1">
                        <label className="text-[10px] font-medium text-gray-500">
                              Condition
                        </label>
                        <select
                              className="
            w-full rounded-md border border-gray-300
            px-2 py-1 text-xs text-gray-700 bg-white
            focus:outline-none focus:ring-1 focus:ring-blue-500
          "
                        >
                              <option>Not Empty</option>
                              <option>Is Number</option>
                              <option>Is Text</option>
                        </select>
                  </div>
            </BaseNode>
      );
};
