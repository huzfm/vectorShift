// toolbar.js
import { DraggableNode } from './draggableNode';

export const PipelineToolbar = () => {
    return (
        <div className="w-full border-b border-gray-200 bg-white px-5 py-4">

            <div className="flex flex-wrap gap-2">
                <DraggableNode type="customInput" label="Input" />
                <DraggableNode type="llm" label="LLM" />
                <DraggableNode type="customOutput" label="Output" />
                <DraggableNode type="text" label="Text" />
                <DraggableNode type="math" label="Math" />
                <DraggableNode type="passThrough" label="Pass Through" />
                <DraggableNode type="filter" label="Filter" />
                <DraggableNode type="transform" label="Transform" />
                <DraggableNode type="validate" label="Validate" />
            </div>
        </div>
    );
};
