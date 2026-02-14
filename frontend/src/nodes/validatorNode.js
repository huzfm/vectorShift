// nodes/validatorNode.js
import { BaseNode } from './baseNode';

export const ValidatorNode = ({ id }) => {
      return (
            <BaseNode
                  title="Validator"
                  inputs={[`${id}-input`]}
                  outputs={[
                        `${id}-valid`,
                  ]}
            >
                  <div className="flex flex-col gap-1">
                        <label className="text-[12px] font-medium text-gray-500">
                              Rule
                        </label>



                        <div className="text-[11px] px-2 py-1 rounded border border-gray-300 bg-gray-50 text-gray-700">
                              Is Number
                        </div>



                  </div>
            </BaseNode>
      );
};
