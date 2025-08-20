import {
	DoubleSide,
	Mesh,
	MeshBasicMaterial,
	PlaneGeometry,
	TextureLoader,
} from "three";
import { cols, rows, spacing, tileSize } from "./constants";
import { State } from "./type";

export const createMesh = (scene: State["scene"]) => {
	const meshes: Mesh[] = [];

	const textureLoader = new TextureLoader();

	const images: string[] = [];
	for (let i = 1; i <= 40; i += 1) images.push(`./assets/${i}.webp`);

	for (let i = 0; i < rows; i += 1) {
		for (let j = 0; j < cols; j += 1) {
			const randomImage = images[Math.floor(Math.random() * images.length)];
			textureLoader.load(
				randomImage,
				(texture) => {
					const geometry = new PlaneGeometry(tileSize, tileSize);
					const material = new MeshBasicMaterial({
						map: texture,
						side: DoubleSide,
					});

					const mesh = new Mesh(geometry, material);
					mesh.position.x = (j - (cols - 1) / 2) * spacing;
					mesh.position.y = (i - (rows - 1) / 2) * spacing;

					scene?.add(mesh);
					meshes.push(mesh);
				},
				undefined,
				(err) => {
					console.log(err);
				},
			);
		}
	}

	return {
		meshes,
	};
};
