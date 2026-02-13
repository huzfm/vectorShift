// nodes/passThroughNode.js
import { BaseNode } from './baseNode';

export const PassThroughNode = ({ id }) => {
      return (
            <BaseNode
                  title="Pass Through"
                  inputs={[`${id}-input`]}
                  outputs={[`${id}-output`]}
            >
                  <span>Passes data forward</span>
            </BaseNode>
      );
};
