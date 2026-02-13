// nodes/transformNode.js
import { BaseNode } from './baseNode';

export const TransformNode = ({ id }) => {
      return (
            <BaseNode
                  title="Transform"
                  inputs={[`${id}-input`]}
                  outputs={[`${id}-output`]}
            >
                  <select>
                        <option>Trim</option>
                        <option>Lowercase</option>
                        <option>Uppercase</option>
                  </select>
            </BaseNode>
      );
};
