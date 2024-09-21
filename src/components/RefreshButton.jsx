export default function RefreshButton({ text }) {
	const handleRefresh = () => {
		window.location.reload();
	}

  return (
	<button className="refresh-button" onClick={handleRefresh}>
	  {text}
	</button>
  );
}