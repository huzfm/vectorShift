// nodes/passThroughNode.js
import { BaseNode } from './baseNode';

export const PassThroughNode = ({ id }) => {
      return (
            <BaseNode
                  title="Pass Through"
                  inputs={[`${id}-input`]}
                  outputs={[`${id}-output`]}
            >
                  <div className="text-xs text-gray-600 leading-snug">
                        Passes input directly to output
                  </div>
            </BaseNode>
      );
};
