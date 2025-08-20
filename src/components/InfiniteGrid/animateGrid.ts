import { Mesh } from "three";
import { cols, rows, spacing } from "./constants";

const minX = -(cols / 2) * spacing;
const maxX = (cols / 2) * spacing;
const minY = -(rows / 2) * spacing;
const maxY = (rows / 2) * spacing;

const scrollX = (mesh: Mesh) => {
	if (mesh.position.x > maxX) {
		mesh.position.x -= cols * spacing;
		return;
	}

	if (mesh.position.x < minX) mesh.position.x += cols * spacing;
};

const scrollY = (mesh: Mesh) => {
	if (mesh.position.y > maxY) {
		mesh.position.y -= rows * spacing;
		return;
	}

	if (mesh.position.y < minY) mesh.position.y += cols * spacing;
};

export const animateGrid = (meshes: Mesh[]) => {
	meshes.forEach((mesh) => {
		scrollX(mesh);
		scrollY(mesh);
	});
};
