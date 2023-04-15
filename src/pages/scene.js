import React from "react";
import { Canvas } from "@react-three/fiber";
import { Box, PerspectiveCamera, OrbitControls } from "@react-three/drei";

import Layout from "../components/layout";
import Seo from "../components/seo";

const Scene = () => {
    const containerStyle = {
        width: "100vw",
        height: "100vh",
        position: "fixed",
        top: 0,
        left: 0,
    };

    return (
        <Layout>
            <Seo title="Three.js Scene" />
            <div style={containerStyle}>
                <Canvas>
                    <PerspectiveCamera makeDefault position={[0, 0, 5]} />
                    <OrbitControls />
                    <ambientLight />
                    <pointLight position={[10, 10, 10]} />
                    <Box args={[1, 1, 1]} position={[0, 0, 0]}>
                        <meshStandardMaterial color={"orange"} />
                    </Box>
                </Canvas>
            </div>
        </Layout>
    );
};

export default Scene;
