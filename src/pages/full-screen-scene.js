// src/pages/full-screen-scene.js

import React, { useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { Box, PerspectiveCamera, OrbitControls } from '@react-three/drei';
import Layout from '../components/layout';
import Seo from '../components/seo';
import { Plane, useTexture } from '@react-three/drei';
import SUSImage from '../images/SUS.webp';


const ImagePlane = ({ image }) => {
    const texture = useTexture(image, null, (err) => {
        console.error(err);
    });
    if (!texture) return null;
    texture.minFilter = texture.magFilter = THREE.LinearFilter;
    texture.generateMipmaps = false;

    return (
        <Plane args={[1, 1]} position={[0, 0, 0]}>
            <meshBasicMaterial map={texture} transparent />
        </Plane>
    );
};


const FullScreenScene = ({ serverData }) => {
    const [dimensions, setDimensions] = useState({
        width: typeof window !== 'undefined' ? window.innerWidth : 0,
        height: typeof window !== 'undefined' ? window.innerHeight : 0,
    });

    useEffect(() => {
        if (typeof window === 'undefined') {
            return;
        }

        const handleResize = () => {
            setDimensions({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <Layout>
            <Seo title="Full-Screen Three.js Scene" />
            <Canvas style={{ width: dimensions.width, height: dimensions.height }}>
                <PerspectiveCamera makeDefault position={[0, 0, 5]} />
                <OrbitControls />
                <ambientLight />
                <pointLight position={[10, 10, 10]} />
                <ImagePlane image={SUSImage} />
            </Canvas>
        </Layout>
    );
};

export async function getServerData() {
    // Fetch data if needed
    return {
        status: 200,
        props: {},
        headers: {},
    };
}

export default FullScreenScene;
