import { Box, OrbitControls } from '@react-three/drei';

import { Canvas } from '@react-three/fiber';

const Scene: React.FC = () => {
  return (
    <div className="w-full h-screen">
      <Canvas>
        <OrbitControls />
        <ambientLight />
        <pointLight position={[2, 3, 1]} />
        <Box>
          <meshStandardMaterial color={'hotpink'} />
        </Box>
      </Canvas>
    </div>
  );
};

export default Scene;
