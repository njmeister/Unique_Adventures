import React, { useEffect, useState, useMemo } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadFull } from 'tsparticles';

export default function Confetti() {
	const [init, setInit] = useState(false);

	useEffect(() => {
		initParticlesEngine(async (engine) => {
			await loadFull(engine);
		}).then(() => setInit(true));
	}, []);

	const particlesLoaded = (container) => {
		console.log(container);
	};

	const options = useMemo(
		() => ({
			fullScreen: {
				zIndex: 1,
			},
			particles: {
				number: {
					value: 1000,
				},
				color: {
					value: ['#00FFFC', '#FC00FF', '#FFFC00'],
				},
				shape: {
					type: ['circle', 'square'],
					options: {},
				},
				opacity: {
					value: {
						min: 0,
						max: 1,
					},
					animation: {
						enable: true,
						speed: 2,
						startValue: 'max',
						destroy: 'min',
					}
				},
				size: {
					value: {
						min: 2,
						max: 4,
					}
				},
				links: {
					enable: false,
				},
				life: {
					duration: {
						sync: true,
						value: 5,
					},
					count: 1,
				},
				move: {
					enable: true,
					gravity: {
						enable: true,
						acceleration: 10,
					},
					speed: {
						min: 10,
						max: 20,
					},
					decay: 0.1,
					direction: 'none',
					straight: false,
					outModes: {
						default: 'destroy',
						top: 'none',
					}
				},
				rotate: {
					value: {
						min: 0,
						max: 360,
					},
					direction: 'random',
					move: true,
					animation: {
						enable: true,
						speed: 60,
					}
				},
				tilt: {
					direction: 'random',
					enable: true,
					move: true,
					value: {
						min: 0,
						max: 360,
					},
					animation: {
						enable: true,
						speed: 60,
					}
				},
				roll: {
					darken: {
						enable: true,
						value: 25,
					},
					enable: true,
					speed: {
						min: 15,
						max: 25,
					}
				},
				wobble: {
					distance: 30,
					enable: true,
					move: true,
					speed: {
						min: -15,
						max: 15,
					}
				}
			},
			emitters: {
				position: {
					x: 50,
					y: 50,
				},
				life: {
					count: 1,
					duration: 0.1,
					delay: 0.4,
				},
				rate: {
					delay: 0.1,
					quantity: 150,
				},
				size: {
					width: 0,
					height: 0,
				},
			}
		}),
		[]
	);

	return (
		<Particles
			id="tsparticles"
			particlesLoaded={particlesLoaded}
			options={options}
		/>
	);
}
