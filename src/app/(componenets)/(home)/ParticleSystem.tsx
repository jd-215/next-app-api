"use client";
import React, { useRef, useEffect } from "react";
import p5 from "p5";


interface Props {
	children: React.ReactElement | undefined;
}

const Sketch: React.FC<Props> = () => {
	const canvasRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const sketch = (p: p5) => {
			let particles: Particle[] = [];

			class Particle {
				x: number;
				y: number;
				r: number;
                svg: string;
				xSpeed: number;
				ySpeed: number;

                img: p5.Image | undefined;

				constructor(svg:string) {
					this.x = p.random(0, p.width);
					this.y = p.random(0, p.height);
					this.r = p.random(1, 30);
					this.xSpeed = p.random(-2, 2);
					this.ySpeed = p.random(-1, 1.5);

                    this.svg = svg;

                    this.img = p.loadImage(svg);
				}

				createParticle() {
					p.noStroke();
					// p.fill("rgba(255, 77, 205, 1)");
					p.fill("rgba(0, 0, 0, 0)");
					p.circle(this.x, this.y, this.r);
					// p.polygon(0, this.x, this.y, this.r);

                    if (this.img) {
                        p.image(this.img, this.x, this.y, this.img.width / 5, this.img.height / 5); // Adjust size as needed
                    }
				}


				moveParticle() {
					if (this.x < 0 || this.x > p.width) this.xSpeed *= -1;
					if (this.y < 0 || this.y > p.height) this.ySpeed *= -1;
					this.x += this.xSpeed;
					this.y += this.ySpeed;
				}

				joinParticles(particles: Particle[]) {
					particles.forEach((element) => {
						let dis = p.dist(this.x, this.y, element.x, element.y);
						if (dis < 10) {
							p.stroke("#DDE3FD");
							p.line(this.x, this.y, element.x, element.y);
						}
					});
				}
			}

			// p.setup = () => {
			// 	// p.createCanvas(window.innerWidth, window.innerHeight).parent(canvasRef.current as HTMLDivElement);
            //     const canvas = p.createCanvas(window.innerWidth, window.innerHeight).parent(
            //         canvasRef.current as HTMLDivElement
            //       );
            //       canvas.position(0, 0); // Set canvas position to top-left corner
            //       canvas.style('z-index', '-1'); // Set canvas behind other elements
          
			// 	for (let i = 0; i < p.width / 10; i++) {
			// 		particles.push(new Particle());
			// 	}
			// };
            p.setup = () => {
                p.createCanvas(720, 1000).parent(canvasRef.current as HTMLDivElement);
                for (let i = 0; i < p.width / 170; i++) {
                //   particles.push(new Particle());
                  particles.push(new Particle('./logoicon/svgFour.svg'));
                }
              };
        
			p.draw = () => {
				p.background("#FDFBFB");
				for (let i = 0; i < particles.length; i++) {
					particles[i].createParticle();
					particles[i].moveParticle();
					particles[i].joinParticles(particles.slice(i));
				}
			};
		};

		// Create a new p5 instance
		new p5(sketch);
	}, []);

	return (
		<>
			<div  className='relative w-full h-screen overflow-hidden'>
				<div ref={canvasRef} className=' inset-0 -z-9 fixed' ></div>
				<div className='flex flex-col justify-center text-center relative z-10 bg-transparent'>
					<div className='text-sm font-bold text-[#02306A]  py-6 tracking-widest '> WEB DEVELOPER</div>
					<div className='text-5xl font-bold text-[#02306A] max-w-2xl text-center tracking-wider '>
						Hello, My name is Jashabanta Das.
					</div>
					<div className='text-sm py-8 text-[#02306A] font-semibold tracking-widest max-w-2xl px-16    text-center  '>
						I love design and coding . I work as a frontend developer and UX/UI developer. Some times i also work
						in backend as MERN stack developer.
					</div>
				</div>
			</div>
		</>
	);
};

export default React.memo(Sketch);
