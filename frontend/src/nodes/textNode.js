
import { useEffect, useRef, useState } from 'react';
import { Handle, Position, useUpdateNodeInternals } from 'reactflow';
import { BaseNode } from './baseNode';
import { useStore } from '../store';

const renderHighlightedText = (text) => {
  const regex = /\{\{\s*([a-zA-Z_$][a-zA-Z0-9_$]*)\s*\}\}/g;

  const parts = [];
  let lastIndex = 0;
  let match;

  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(
        <span key={lastIndex}>
          {text.slice(lastIndex, match.index)}
        </span>
      );
    }

    parts.push(
      <span
        key={match.index}
        className="
          text-blue-600
          font-medium
          cursor-pointer
        "
      >
        {match[1]}
      </span>
    );

    lastIndex = match.index + match[0].length;
  }

  if (lastIndex < text.length) {
    parts.push(
      <span key={lastIndex}>
        {text.slice(lastIndex)}
      </span>
    );
  }

  return parts;
};

/* ============================
   Text Node
============================ */
export const TextNode = ({ id, data }) => {
  const textareaRef = useRef(null);
  const measureRef = useRef(null);

  const updateNodeData = useStore((s) => s.updateNodeData);
  const updateNodeInternals = useUpdateNodeInternals();

  const text = data.text || '';
  const variables = data.variables || [];

  const [nodeWidth, setNodeWidth] = useState(220);

  /* Layout constants */
  const HEADER_HEIGHT = 40;
  const START_Y = HEADER_HEIGHT + 16;
  const GAP = 28;

  /* ============================
     Auto-resize textarea + width
  ============================ */
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height =
        textareaRef.current.scrollHeight + 'px';
    }

    if (measureRef.current) {
      setNodeWidth(
        Math.max(220, measureRef.current.clientWidth + 40)
      );
    }
  }, [text]);


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
      updateNodeInternals(id);
    }
  }, [text, id, variables, updateNodeData, updateNodeInternals]);

  return (
    <div className="relative">

      {variables.map((v, index) => (
        <div
          key={v}
          className="absolute flex items-center"
          style={{
            right: 'calc(100% + 4px)',
            top: START_Y + index * GAP,
          }}
        >
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
              text-right
              overflow-hidden
              font-semibold

            "
            title={v}
          >
            {v}
          </div>

          <Handle
            id={`${id}-${v}`}
            type="target"
            position={Position.Left}
            className="!w-2 !h-2 !bg-blue-600"
          />
        </div>
      ))}

      {/* ============================
         BASE NODE
      ============================ */}
      <BaseNode
        title="Text"
        width={nodeWidth}
        inputs={[]}
        outputs={[`${id}-output`]}
      >
        <div className="flex flex-col gap-1 relative">
          <label className="text-[10px] font-medium text-gray-500">
            Template
          </label>

          <div className="relative">
            <div
              className="
                pointer-events-none
                absolute inset-0
                whitespace-pre-wrap
                break-words
                rounded-md
                px-2 py-1
                text-xs
              "
            >
              {renderHighlightedText(text || ' ')}
            </div>

            <textarea
              ref={textareaRef}
              value={text}
              onChange={(e) =>
                updateNodeData(id, { text: e.target.value })
              }
              rows={1}
              className="
                relative z-10
                w-full resize-none rounded-md
                border border-gray-300
                bg-transparent
                px-2 py-1
                text-xs text-transparent caret-gray-700
             
              "
              placeholder="Use {{}} for variables"
            />
          </div>

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
