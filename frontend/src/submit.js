import { useReactFlow } from 'reactflow';

const SubmitButton = () => {
    const { getNodes, getEdges } = useReactFlow();

    const handleSubmit = async () => {
        try {
            const nodes = getNodes();
            const edges = getEdges();

            const response = await fetch(
                'http://localhost:8000/pipelines/parse',
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        nodes,
                        edges,
                    }),
                }
            );

            if (!response.ok) {
                throw new Error('Failed to submit pipeline');
            }

            const data = await response.json();

            alert(
                `Pipeline Analysis\n\n` +
                `Nodes: ${data.num_nodes}\n` +
                `Edges: ${data.num_edges}\n` +
                `Is DAG: ${data.is_dag ? 'Yes' : 'No'}`
            );
        } catch (err) {
            alert(`Error: ${err.message}`);
        }
    };

    return (
        <div className="flex items-center justify-center py-4 border-t border-gray-200 bg-white">
            <button
                type="button"
                className="
                  rounded-lg bg-blue-950 px-6 py-2
                  text-sm font-semibold text-white
                "
                onClick={handleSubmit}
            >
                Submit
            </button>
        </div>
    );
};

export default SubmitButton;
