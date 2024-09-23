import SortingItem from './SortingItem';

export default function SortingGameInitialContainer({ img, items }) {
    return (
        <div className="initial-container">
            {img && <img src={img} alt="initial" />}
            {items &&
                items.map((item, index) => (
                    <SortingItem
                        key={`${item.identity}`}
                        identity={`${item.identity}`}
                        img={item.img}
                        style={{
                            top: `${item.y}px`,
                            left: `${item.x}px`,
                            position: 'absolute',
                        }}
                    />
                ))}
        </div>
    );
}