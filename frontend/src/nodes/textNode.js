// textNode.js
import { useState } from 'react';
import { BaseNode } from './baseNode';

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || '{{input}}');

  return (
    <BaseNode
      title="Text"
      outputs={[`${id}-output`]}
    >
      <div className="flex flex-col gap-1">
        <label className="text-[10px] font-medium text-gray-500">
          Template
        </label>

        <textarea
          value={currText}
          onChange={(e) => setCurrText(e.target.value)}
          rows={3}
          className="
            w-full resize-none rounded-md border border-gray-300
            px-2 py-1 text-xs text-gray-700
            focus:outline-none focus:ring-1 focus:ring-blue-500
          "
          placeholder="Enter text or use {{variables}}"
        />
      </div>
    </BaseNode>
  );
};
