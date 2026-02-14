// outputNode.js
import { useState } from 'react';
import { BaseNode } from './baseNode';

export const OutputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(
    data?.outputName || id.replace('customOutput-', 'output_')
  );
  const [outputType, setOutputType] = useState(
    data?.outputType || 'Text'
  );

  return (
    <BaseNode
      title="Output"
      inputs={[`${id}-value`]}
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
          placeholder="output_name"
        />
      </div>

      <div className="flex flex-col gap-1">
        <label className="text-[10px] font-medium text-gray-500">
          Type
        </label>
        <select
          value={outputType}
          onChange={(e) => setOutputType(e.target.value)}
          className="
            w-full rounded-md border border-gray-300
            px-2 py-1 text-xs text-gray-700 bg-white
            focus:outline-none focus:ring-1 focus:ring-blue-500
          "
        >
          <option value="Text">Text</option>
          <option value="File">Image</option>
        </select>
      </div>
    </BaseNode>
  );
};
