import React from "react";
import styles from "./style.module.css";
import { useCanvas } from "./useCanvas";

export const InfiniteGrid: React.FC = () => {
	const { canvasRef } = useCanvas();

	return <canvas ref={canvasRef} className={styles.canvas} />;
};
