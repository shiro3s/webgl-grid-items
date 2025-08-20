import {
	AmbientLight,
	DirectionalLight,
	PerspectiveCamera,
	Scene,
	WebGLRenderer,
} from "three";

export const getViewerState = (el: HTMLCanvasElement) => {
	const { innerWidth, innerHeight } = window;
	const aspect = innerWidth / innerHeight;

	// camera
	const camera = new PerspectiveCamera(75, aspect, 0.1, 1000);
	camera.position.set(0, 0, 100);
	camera.lookAt(0, 0, 0);

	// renderer
	const renderer = new WebGLRenderer({ antialias: true, canvas: el });
	renderer.setSize(innerWidth, innerHeight);
	renderer.setPixelRatio(2);

	// scene
	const scene = new Scene();

	// AmbientLight
	const ambientLight = new AmbientLight(0x404040, 2);
	scene.add(ambientLight);

	// DirectionalLight
	const directionalLight = new DirectionalLight(0xffffff, 1);
	directionalLight.position.set(10, 10, 5);
	scene.add(directionalLight);

	return {
		camera,
		renderer,
		scene,
	};
};
