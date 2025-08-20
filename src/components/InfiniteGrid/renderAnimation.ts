import { Mesh } from "three";
import { animateGrid } from "./animateGrid";
import { State } from "./type";

type Args = {
	meshes: Mesh[];
} & State;

export const renderAnimation = ({ renderer, scene, camera, meshes }: Args) => {
	const animate = () => {
		if (!renderer || !scene || !camera) return;

		animateGrid(meshes);
		renderer.render(scene, camera);
	};

	return {
		animate,
	};
};
