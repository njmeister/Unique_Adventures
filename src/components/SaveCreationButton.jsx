import React, { useState } from "react";
import html2canvas from "html2canvas";

export default function SaveCreationButton({ saveDiv, gameTitle }) {

	const [creationName, setCreationName] = useState("");
	const [nameError, setNameError] = useState(false);

	const handleSaveImage = () => {
		if (!creationName.trim()) {
			setNameError(true);
            return;
        }

		const saveArea = document.querySelector(saveDiv);

		html2canvas(saveArea, { backgroundColor: null }).then((canvas) => {
			const link = document.createElement("a");
			const fileName = creationName ? `${creationName}-${gameTitle}.png` : `${gameTitle}.png`;
			link.download = fileName;
			link.href = canvas.toDataURL("image/png");
			link.click();
		});
	};


	return (
		<div className="save-creation-container">
			<label>Name your creation:</label>
			<input
				type="text"
				placeholder={nameError ? "Please enter a name!" : "Enter a name"}
				value={creationName}
				onChange={(e) => setCreationName(e.target.value)} // Update state on input change
				className={nameError ? "save-creation-input error" : "save-creation-input"}
			/>
			<div className="buttonsContainer">
				<button
					onClick={handleSaveImage}
					className="save-creation-button"
				>
					Save Image
				</button>
				<button
					onClick={() => window.location.reload()}
					className="start-over-button"
				>
					Start Over
				</button>
			</div>
		</div>
	);
}