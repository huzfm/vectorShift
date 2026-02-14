// inputNode.js
import { useState } from 'react';
import { BaseNode } from './baseNode';

export const InputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(
    data?.inputName || id.replace('customInput-', 'input_')
  );
  const [inputType, setInputType] = useState(data?.inputType || 'Text');

  return (
    <BaseNode
      title="Input"
      outputs={[`${id}-value`]}
    >

      <div className="flex flex-col gap-1">
        <label className="text-[10px] font-medium text-gray-500">
          Name
        </label>
        <input
          value={currName}
          onChange={(e) => setCurrName(e.target.value)}
          className="
            w-full rounded-md border border-gray-300
            px-2 py-1 text-xs text-gray-700
            focus:outline-none focus:ring-1 focus:ring-blue-500
          "
          placeholder="input_name"
        />
      </div>

      {/* Type selector */}
      <div className="flex flex-col gap-1">
        <label className="text-[10px] font-medium text-gray-500">
          Type
        </label>
        <select
          value={inputType}
          onChange={(e) => setInputType(e.target.value)}
          className="
            w-full rounded-md border border-gray-300
            px-2 py-1 text-xs text-gray-700
            bg-white
            focus:outline-none focus:ring-1 focus:ring-blue-500
          "
        >
          <option value="Text">Text</option>
          <option value="File">File</option>
        </select>
      </div>
    </BaseNode>
  );
};
