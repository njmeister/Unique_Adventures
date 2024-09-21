import React from 'react';
import DragNDropDraw from '../components/DragNDropDraw'; // Correct import

export default function DragNDropJack() {
    const droppableBackground = '/assets/img/jack-o-lantern/pumpkin1.png';
    const stickers = [
        {
            id: 'jack-left-eye1',
            src: '/assets/img/jack-o-lantern/jack-left-eye1.png',
            alt: 'left eye',
        },
        {
            id: 'jack-right-eye1',
            src: '/assets/img/jack-o-lantern/jack-right-eye1.png',
            alt: 'right eye',
        },
		{
			id: 'jack-left-eye2',
			src: '/assets/img/jack-o-lantern/jack-left-eye2.png',
			alt: 'left eye',
		},
		{
			id: 'jack-right-eye2',
			src: '/assets/img/jack-o-lantern/jack-right-eye2.png',
			alt: 'right eye',
		},
		{
			id: 'jack-left-eye3',
			src: '/assets/img/jack-o-lantern/jack-left-eye3.png',
			alt: 'left eye',
		},
		{
			id: 'jack-right-eye3',
			src: '/assets/img/jack-o-lantern/jack-right-eye3.png',
			alt: 'right eye',
		},
		{
			id: 'jack-left-eye4',
			src: '/assets/img/jack-o-lantern/jack-left-eye4.png',
			alt: 'left eye',
		},
		{
			id: 'jack-right-eye4',
			src: '/assets/img/jack-o-lantern/jack-right-eye4.png',
			alt: 'right eye',
		},
		{
			id: 'jack-left-eye5',
			src: '/assets/img/jack-o-lantern/jack-left-eye5.png',
			alt: 'left eye',
		},
		{
			id: 'jack-right-eye5',
			src: '/assets/img/jack-o-lantern/jack-right-eye5.png',
			alt: 'right eye',
		},
        {
            id: 'jack-nose1',
            src: '/assets/img/jack-o-lantern/jack-nose1.png',
            alt: 'nose',
        },
		{
			id: 'jack-nose2',
			src: '/assets/img/jack-o-lantern/jack-nose2.png',
			alt: 'nose',
		},
		{
			id: 'jack-nose3',
			src: '/assets/img/jack-o-lantern/jack-nose3.png',
			alt: 'nose',
		},
        {
            id: 'jack-mouth1',
            src: '/assets/img/jack-o-lantern/jack-mouth1.png',
            alt: 'mouth',
        },
		{
			id: 'jack-mouth2',
			src: '/assets/img/jack-o-lantern/jack-mouth2.png',
			alt: 'mouth',
		},
		{
			id: 'jack-mouth3',
			src: '/assets/img/jack-o-lantern/jack-mouth3.png',
			alt: 'mouth',
		},
		{
			id: 'jack-mouth4',
			src: '/assets/img/jack-o-lantern/jack-mouth4.png',
			alt: 'mouth',
		}
    ];

    return (
        <div className="drag-n-drop-jack-container">
            <DragNDropDraw
                droppableBackground={droppableBackground}
                stickerList={stickers}
				gameTitle="Jack-O-Lantern"
            />
        </div>
    );
}