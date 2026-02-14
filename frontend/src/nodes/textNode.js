import { useEffect, useRef, useState } from 'react';
import { Handle, Position, useUpdateNodeInternals } from 'reactflow';
import { BaseNode } from './baseNode';
import { useStore } from '../store';

export const TextNode = ({ id, data }) => {
  const textareaRef = useRef(null);
  const measureRef = useRef(null);
  const updateNodeData = useStore((s) => s.updateNodeData);
  const updateNodeInternals = useUpdateNodeInternals();

  const text = data.text || '';
  const variables = data.variables || [];
  const [nodeWidth, setNodeWidth] = useState(220);

  // Layout constants (match BaseNode)
  const HEADER_HEIGHT = 40;
  const START_Y = HEADER_HEIGHT + 16;
  const GAP = 28;

  // Auto-resize textarea + node width
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height =
        textareaRef.current.scrollHeight + 'px';
    }

    if (measureRef.current) {
      setNodeWidth(Math.max(220, measureRef.current.clientWidth + 40));
    }
  }, [text]);

  // Parse {{variables}} — ONLY place this logic exists
  useEffect(() => {
    const regex = /\{\{\s*([a-zA-Z_$][a-zA-Z0-9_$]*)\s*\}\}/g;
    const found = new Set();
    let match;

    while ((match = regex.exec(text)) !== null) {
      found.add(match[1]);
    }

    const newVars = Array.from(found);

    if (
      newVars.length !== variables.length ||
      !newVars.every((v, i) => v === variables[i])
    ) {
      updateNodeData(id, { variables: newVars });
      updateNodeInternals(id); // 🔑 required for dynamic handles
    }
  }, [text, id, variables, updateNodeData, updateNodeInternals]);

  return (
    <div className="relative">
      {/* VARIABLE INPUT HANDLES — TEXT NODE ONLY */}
      {variables.map((v, index) => (
        <div
          key={v}
          className="absolute flex items-center"
          style={{
            right: 'calc(100% + 4px)', // 🔹 very close to node
            top: START_Y + index * GAP,
          }}
        >
          {/* Variable label — grows LEFT only */}
          <div
            className="
              mr-1
              max-w-[160px]
              whitespace-nowrap
              rounded-md
              border border-blue-200
              bg-blue-50
              px-2 py-[2px]
              text-[10px] font-semibold text-blue-700
              shadow-sm
              text-right
              overflow-hidden
              text-ellipsis
            "
            title={v}
          >
            {v}
          </div>

          {/* Handle anchored at node edge */}
          <Handle
            id={`${id}-${v}`}
            type="target"
            position={Position.Left}
            className="!w-2 !h-2 !bg-blue-600"
          />
        </div>
      ))}

      {/* BASE NODE (NO VARIABLE LOGIC HERE) */}
      <BaseNode
        title="Text"
        width={nodeWidth}
        inputs={[]}                 // 👈 BaseNode knows NOTHING about variables
        outputs={[`${id}-output`]}
      >
        <div className="flex flex-col gap-1">
          <label className="text-[10px] font-medium text-gray-500">
            Template
          </label>

          <textarea
            ref={textareaRef}
            value={text}
            onChange={(e) =>
              updateNodeData(id, { text: e.target.value })
            }
            rows={1}
            className="
              w-full resize-none rounded-md
              border border-gray-300
              px-2 py-1
              text-xs text-gray-700
              focus:outline-none focus:ring-1 focus:ring-blue-500
            "
            placeholder="Use {{variables}}"
          />

          {/* Width measurement */}
          <div
            ref={measureRef}
            className="absolute invisible whitespace-pre text-xs px-2"
          >
            {text || ' '}
          </div>
        </div>
      </BaseNode>
    </div>
  );
};
