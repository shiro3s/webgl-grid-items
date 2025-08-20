import { useEffect, useRef } from "react";
import { createMesh } from "./createMesh";
import { getEventHandler } from "./getEventHandler";
import { getViewerState } from "./getViewerState";
import { renderAnimation } from "./renderAnimation";

import { State } from "./type";

const initialState = {
	renderer: null,
	camera: null,
	scene: null,
};

export const useCanvas = () => {
	const canvasRef = useRef<HTMLCanvasElement>(null);
	const stateRef = useRef<State>({
		renderer: null,
		camera: null,
		scene: null,
	});

	useEffect(() => {
		const el = canvasRef.current;
		if (el) {
			stateRef.current = getViewerState(el);
			const { meshes } = createMesh(stateRef.current.scene);
			const {
				handleMouseDown,
				handleMouseMove,
				handleMouseUp,
				handleMouseWheel,
				handleResize,
			} = getEventHandler({
				...stateRef.current,
				meshes,
			});

			const { animate } = renderAnimation({
				...stateRef.current,
				meshes,
			});

			stateRef.current.renderer?.setAnimationLoop(animate);
			document.addEventListener("mousedown", handleMouseDown);
			document.addEventListener("mouseup", handleMouseUp);
			document.addEventListener("mousemove", handleMouseMove);
			document.addEventListener("wheel", handleMouseWheel);
			window.addEventListener("resize", handleResize);

			return () => {
				stateRef.current = initialState;
				document.removeEventListener("mousedown", handleMouseDown);
				document.removeEventListener("mouseup", handleMouseUp);
				document.removeEventListener("mouseup", handleMouseMove);
				document.removeEventListener("wheel", handleMouseWheel);
				window.removeEventListener("resize", handleResize);
			};
		}
	}, []);

	return {
		canvasRef,
	};
};
