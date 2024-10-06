import SortingItem from './SortingItem';

export default function SortingGameInitialContainer({ img, items }) {
    return (
        <div className="initial-container" style={{position: "relative"}}>
            {img && <img src={img} alt="initial" />}
            {items &&
                items.map((item, index) => (
                    <SortingItem
                        key={`${item.identity}`}
                        identity={`${item.identity}`}
                        img={item.img}
                        style={{
                            top: `${item.y}%`,
                            left: `${item.x}%`,
                            position: 'absolute',
                        }}
                    />
                ))}
        </div>
    );
}