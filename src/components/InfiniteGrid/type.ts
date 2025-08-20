import { PerspectiveCamera, Scene, WebGLRenderer } from "three";

export type State = {
	renderer: WebGLRenderer | null;
	camera: PerspectiveCamera | null;
	scene: Scene | null;
};

