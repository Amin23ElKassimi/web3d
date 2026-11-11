import * as THREE from "three";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { setCharTimeline } from "../../utils/GsapScroll";

export default function handleResize(
  renderer: THREE.WebGLRenderer,
  camera: THREE.PerspectiveCamera,
  canvasDiv: React.RefObject<HTMLDivElement>,
  character: THREE.Object3D
) {
  if (!canvasDiv.current) return;
  let canvas3d = canvasDiv.current.getBoundingClientRect();
  const width = canvas3d.width;
  const height = canvas3d.height;
  renderer.setSize(width, height);
  camera.aspect = width / height;
  camera.updateProjectionMatrix();
  // "work" e "career" sono gestiti dai rispettivi componenti
  const keep = [ScrollTrigger.getById("work"), ScrollTrigger.getById("career")];
  ScrollTrigger.getAll().forEach((trigger) => {
    if (!keep.includes(trigger)) {
      trigger.kill();
    }
  });
  setCharTimeline(character, camera);
}
