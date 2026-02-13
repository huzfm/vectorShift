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
                  <select>
                        <option>Not Empty</option>
                        <option>Max Length</option>
                        <option>Is Number</option>
                  </select>
            </BaseNode>
      );
};
