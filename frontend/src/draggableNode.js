// draggableNode.js
export const DraggableNode = ({ type, label }) => {
  const onDragStart = (event, nodeType) => {
    const appData = { nodeType };
    event.dataTransfer.setData(
      'application/reactflow',
      JSON.stringify(appData)
    );
    event.dataTransfer.effectAllowed = 'move';
  };

  return (
    <div
      draggable
      onDragStart={(event) => onDragStart(event, type)}
      className="
        group cursor-grab select-none
        min-w-[100px] h-[55px]
        rounded-2xl border border-gray-300
        bg-blue-950
        flex items-center justify-center
        text-xs font-medium text-white
      "
    >
      {label}
    </div>
  );
};
