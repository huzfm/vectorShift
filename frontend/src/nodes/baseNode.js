import { Handle, Position } from 'reactflow';

export const BaseNode = ({
      title,
      inputs = [],
      outputs = [],
      children,
      width = 220,
}) => {
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

                  {/* Input handles */}
                  {inputs.map((input, index) => (
                        <Handle
                              key={input}
                              id={input}
                              type="target"
                              position={Position.Left}
                              className="!w-2.5 !h-2.5 !bg-blue-500 !border-white"
                              style={{ top: 52 + index * 22 }}
                        />
                  ))}

                  {/* Content */}
                  <div className="p-3 space-y-2 text-xs text-gray-700">
                        {children}
                  </div>

                  {/* Output handles */}
                  {outputs.map((output, index) => (
                        <Handle
                              key={output}
                              id={output}
                              type="source"
                              position={Position.Right}
                              className="w-2.5 h-2.5 !bg-emerald-500 !border-white"
                              style={{ top: 52 + index * 22 }}
                        />
                  ))}
            </div>
      );
};
