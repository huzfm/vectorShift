// nodes/baseNode.jsx
import { Handle, Position } from 'reactflow';

export const BaseNode = ({
      title,
      inputs = [],
      outputs = [],
      children,
      width = 220,
}) => {
      const HEADER_HEIGHT = 40;
      const START_Y = HEADER_HEIGHT + 16;
      const GAP = 28;

      return (
            <div
                  className="relative rounded-xl border border-gray-200 bg-white shadow-sm"
                  style={{ width }}
            >
                  {/* Header */}
                  <div className="px-3 py-2 border-b border-gray-100 bg-gray-50 rounded-t-xl">
                        <span className="text-xs font-semibold text-gray-700 uppercase tracking-wide">
                              {title}
                        </span>
                  </div>

                  {/* NORMAL INPUT HANDLES ONLY */}
                  {inputs.map((id, index) => (
                        <Handle
                              key={id}
                              id={id}
                              type="target"
                              position={Position.Left}
                              className="!w-2.5 !h-2.5 !bg-blue-500"
                              style={{ top: START_Y + index * GAP }}
                        />
                  ))}

                  {/* CONTENT */}
                  <div className="p-3 space-y-2 text-xs text-gray-700">
                        {children}
                  </div>

                  {/* OUTPUT HANDLES */}
                  {outputs.map((id, index) => (
                        <Handle
                              key={id}
                              id={id}
                              type="source"
                              position={Position.Right}
                              className="!w-2.5 !h-2.5 !bg-emerald-500"
                              style={{ top: START_Y + index * GAP }}
                        />
                  ))}
            </div>
      );
};
