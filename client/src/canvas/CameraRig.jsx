import { useFrame } from "@react-three/fiber";
import { easing } from "maath";
import React, { useRef } from "react";
import { useSnapshot } from "valtio";
import state from "../store";

const CameraRig = ({ children }) => {
  const group = useRef();
  const snap = useSnapshot(state);

  useFrame((state, delta) => {
    const isBreakpoint = window.innerWidth <= 1260;
    const isMobile = window.innerWidth <= 600;

    // set the initial position of the model
    let targetPosition = [-0.4, 0, 2];
    if (snap.intro) {
      if (isBreakpoint) targetPosition = [0, 0, 2];
      if (isMobile) targetPosition = [0, 0.2, 2.5];
    } else {
      if (isMobile) targetPosition = [0, 0, 2.5];
      else targetPosition = [0, 0, 2];
    }
    switch (snap.type) {
      case "Full Shirt":
        targetPosition = [0, 1.3, 2.3];
        break;
      case "Stand Collor":
        targetPosition = [0, 1.35, 1.8];
        break;
      case "T-Shirt":
        targetPosition = [0, 0, 1.5];
        break;
      case "Hoodie":
        targetPosition = [0, 1.3, 2];
        break;
      case "Polo":
        targetPosition = [0, 1.4, 2];
        break;
      case "Full Sleeve":
        targetPosition = [0, 1.4, 2];
        break;
      case "Home Tshirt":
        targetPosition = [0, 0.3, 1.2];
        break;
      case "Coat":
        targetPosition = [0, 1.3, 2];
        break;
      case "Vest":
        targetPosition = [0, 1.3, 2];
        break;
      case "Modern Jacket":
        targetPosition = [0, 0, 4];
        break;
      case "Oversized Hoodie":
        targetPosition = [0, 1.2, 3];
        break;
    }
    // Example rotation for other clothes

    // set model camera position
    easing.damp3(state.camera.position, targetPosition, 0.25, delta);

    // set the model rotation smoothly
    easing.dampE(
      group.current.rotation,
      [state.pointer.y / 7, -state.pointer.x / 2, 0],
      0.25,
      delta
    );
  });

  return <group ref={group}>{children}</group>;
};

export default CameraRig;
