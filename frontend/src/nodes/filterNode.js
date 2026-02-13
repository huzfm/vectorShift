// nodes/filterNode.js
import { BaseNode } from './baseNode';

export const FilterNode = ({ id }) => {
      return (
            <BaseNode
                  title="Filter"
                  inputs={[`${id}-input`]}
                  outputs={[`${id}-passed`]}
            >
                  <select>
                        <option>Not Empty</option>
                        <option>Is Number</option>
                        <option>Is Text</option>
                  </select>
            </BaseNode>
      );
};
