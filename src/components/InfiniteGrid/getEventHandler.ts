import { Mesh } from "three";
import { State } from "./type";

const dragSpeed = 0.5;
const wheelSpeed = 0.5;

type Args = {
	meshes: Mesh[];
} & State;

export const getEventHandler = ({ meshes, camera, renderer }: Args) => {
	const previousMousePosition = { x: 0, y: 0 };
	let isDragging = false;

	const handleMouseDown = (event: MouseEvent) => {
		isDragging = true;
		previousMousePosition.x = event.clientX;
		previousMousePosition.y = event.clientY;
	};

	const handleMouseUp = () => {
		isDragging = false;
	};

	const handleMouseMove = (event: MouseEvent) => {
		if (!isDragging) return;

		const deltaX = event.clientX - previousMousePosition.x;
		const deltaY = event.clientY - previousMousePosition.y;

		meshes.forEach((mesh) => {
			mesh.position.x += deltaX * dragSpeed;
			mesh.position.y -= deltaY * dragSpeed;
		});

		previousMousePosition.x = event.clientX;
		previousMousePosition.y = event.clientY;
	};

	const handleMouseWheel = (event: WheelEvent) => {
		meshes.forEach((mesh) => {
			mesh.position.x -= event.deltaX * wheelSpeed;
			mesh.position.y += event.deltaY * wheelSpeed;
		});
	};

	const handleResize = () => {
		const { innerWidth, innerHeight } = window;
		camera?.updateProjectionMatrix();
		renderer?.setSize(innerWidth, innerHeight);
	};

	return {
		handleMouseDown,
		handleMouseUp,
		handleMouseMove,
		handleMouseWheel,
		handleResize,
	};
};
