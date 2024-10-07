import React from 'react';
import { useSnapshot } from 'valtio';
import state from '../store';
import { Decal, useTexture } from '@react-three/drei';

const DecalComponent = () => {
    const snap = useSnapshot(state);
    
    // Ensure the URLs are valid
    const logoTexture = useTexture(snap.logoDecal);
    const fullTexture = useTexture(snap.fullDecal);

    return (
        <>
            {snap.isFullTexture && fullTexture && ( // Ensure fullTexture is loaded
                <Decal 
                    position={[0, 0, 0]}
                    rotation={[0, 0, 0]}
                    scale={1}
                    map={fullTexture}
                />
            )}
            {snap.isLogoTexture && logoTexture && ( // Ensure logoTexture is loaded
                <Decal 
                    position={[0.08, 0.08, 0.1]}
                    rotation={[0, 0, 0]}
                    scale={0.07}
                    map={logoTexture}
                    // map-anisotropy={16} // Ensure this is supported in your version
                    depthTest={false}
                    depthWrite={true}
                />
            )}
        </>
    );
};

export default DecalComponent;
