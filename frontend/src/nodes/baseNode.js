import { Handle, Position } from 'reactflow';

export const BaseNode = ({
      title,
      inputs = [],
      outputs = [],
      children,
      width = 200,
}) => {
      return (
            <div
                  style={{
                        width,
                        padding: 10,
                        border: '1px solid black',
                        borderRadius: 4,
                        background: 'white',
                  }}
            >
                  <div style={{ fontWeight: 'bold', marginBottom: 8 }}>
                        {title}
                  </div>

                  {inputs.map((input, index) => (
                        <Handle
                              key={input}
                              id={input}
                              type="target"
                              position={Position.Left}
                              style={{ top: 40 + index * 20 }}
                        />
                  ))}

                  <div>{children}</div>

                  {outputs.map((output, index) => (
                        <Handle
                              key={output}
                              id={output}
                              type="source"
                              position={Position.Right}
                              style={{ top: 40 + index * 20 }}
                        />
                  ))}
            </div>
      );
};
