export default function SortingGameInitialContainer({ img }) {
  return (
	<div className="initial-container">
		{img && <img src={img} alt="initial" />}
	</div>
  );
}