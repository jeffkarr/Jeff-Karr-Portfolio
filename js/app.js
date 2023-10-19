
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

manageResize();

ScrollTrigger.batch('.home-reveal', {
	interval: 0.1, // time window (in seconds) for batching to occur. 
	onEnter: batch => gsap.to(batch, { autoAlpha: 1, stagger: 0.5 }),
	onLeave: batch => gsap.to(batch, { autoAlpha: 1, stagger: 0.5 }),
	onLeaveBack: batch => gsap.to(batch, { autoAlpha: 1, stagger: 0.5 })
});

function setupLinks() {
	let container = document.getElementById("scroll-container");
	let linkElements = gsap.utils.toArray('.navbar a'), linkTargets = linkElements.map(e => document.querySelector(e.getAttribute("href"))),
		linkPositions = [],
		calculatePositions = () => {
			linkTargets.forEach((e, i) => linkPositions[i] = e.getBoundingClientRect().top);
		};
	linkElements.forEach((element, i) => {
		element.addEventListener("click", e => {
			e.preventDefault();
			gsap.to(window, { scrollTo: linkPositions[i], ease: "power3", duration: 2, overwrite: true });
		});
	});
	ScrollTrigger.addEventListener("refresh", calculatePositions);
}

function goToSection(i, anim) {
	gsap.to(window, {
		scrollTo: {
			y: i * innerHeight,
			autoKill: true
		},
		duration: 1
	});
	if (anim) {
		anim.restart();
	}
}

function buildSmoothScroll() {
	gsap.utils.toArray(".panel").forEach((panel, i) => {
		ScrollTrigger.create({
			trigger: panel,
			onEnter: () => goToSection(i)
		});
		ScrollTrigger.create({
			trigger: panel,
			start: "bottom bottom",
			onEnterBack: () => goToSection(i),
		});
	});
}

function manageResize() {
	buildSmoothScroll();
	setupLinks();
	let screenWidth = document.documentElement.clientWidth;
	let screenHeight = document.documentElement.clientHeight;
	ScrollTrigger.refresh();

	// if (screenWidth > 1200) {
		const homeReveal = gsap.utils.toArray('.home-reveal')
		homeReveal.forEach((text, i) => {
			ScrollTrigger.create({
				trigger: text,
				toggleClass: 'active',
				start: "top 90%",
				end: "top 60%",
				// markers: true
			})
		})

		const reveal250s = gsap.utils.toArray('.content-250')
		reveal250s.forEach((card, i) => {
			ScrollTrigger.create({
				trigger: card,
				toggleClass: 'active',
				start: "top 80%",
				end: "top 5%",
				id: "card250",
				// markers: true
			})
		})

		const reveal350s = gsap.utils.toArray('.content-350')
		reveal350s.forEach((card, i) => {
			ScrollTrigger.create({
				trigger: card,
				toggleClass: 'active',
				start: "top 80%",
				end: "top 5%",
				id: "card350",
				// markers: true
			})
		})
		const tL01 = gsap.timeline({
			scrollTrigger: {
				trigger: '.exp-content1',
				start: "top 75%",
				end: "top 5%",
				id: "exp1",
				toggleActions: "restart reverse restart reverse",
				// markers: true
			}
		})
		tL01.from("#exp-1", { x: -400, opacity: 0, duration: 1 })

		const tL02 = gsap.timeline({
			scrollTrigger: {
				trigger: '.exp-content2',
				start: "top 70%",
				end: "top 20%",
				id: "exp2",
				toggleActions: "restart reverse restart reverse",
				// markers: true
			}
		})
		tL02.from("#exp-2", { x: 400, opacity: 0, delay: .5, duration: 1 });

		const tL03 = gsap.timeline({
			scrollTrigger: {
				trigger: '.exp-content3',
				start: "top 80%",
				end: "top 25%",
				id: "exp3",
				toggleActions: "restart reverse restart reverse",
				// markers: true
			}
		})
		tL03.from("#exp-3", { x: -400, opacity: 0, delay: 1, duration: 1 });

		const tL04 = gsap.timeline({
			scrollTrigger: {
				trigger: '.exp-content4',
				start: "top 90%",
				end: "top 30%",
				id: "exp4",
				toggleActions: "restart reverse restart reverse",
				// markers: true
			}
		})
		tL04.from("#exp-4", { x: 400, opacity: 0, delay: 1.5, duration: 1 });

		const tL05 = gsap.timeline({
			scrollTrigger: {
				trigger: '#tech-used',
				start: "top 85%",
				end: "top 10%",
				id: "tech-header-1",
				toggleActions: "restart reverse restart reverse",
				// markers: true
			}
		})
		tL05.from("#tech-used", { opacity: 0, duration: 1 });

		const tL06 = gsap.timeline({
			scrollTrigger: {
				trigger: '#tech-learning',
				start: "top 85%",
				end: "top 10%",
				id: "tech-header-2",
				toggleActions: "restart reverse restart reverse",
				// markers: true
			}
		})
		tL06.from("#tech-learning", { opacity: 0, duration: 1 });

		let tL07 = gsap.timeline({
			scrollTrigger: {
				trigger: '.row1',
				start: 'top 85%',
				end: 'top 10%',
				id: 'row1',
				toggleActions: 'restart reverse restart reverse',
				// markers: true
			}
		});
		tL07.from('.row1', {
			opacity: 0,
			delay: 0.25,
			duration: 1.25
		});

		let tL08 = gsap.timeline({
			scrollTrigger: {
				trigger: '.row2',
				start: 'top 85%',
				end: 'top 15%',
				id: 'row2',
				toggleActions: 'restart reverse restart reverse',
				// markers: true
			}
		});
		tL08.from('.row2', {
			opacity: 0,
			delay: 0.5,
			duration: 1.25
		});

		let tL09 = gsap.timeline({
			scrollTrigger: {
				trigger: '.row3',
				start: 'top 85%',
				end: 'top 15%',
				id: 'row3',
				toggleActions: 'restart reverse restart reverse',
				// markers: true
			}
		});
		tL09.from('.row3', {
			opacity: 0,
			delay: 0.75,
			duration: 1.25
		});

		let tL10 = gsap.timeline({
			scrollTrigger: {
				trigger: '.row4',
				start: 'top 85%',
				end: 'top 15%',
				id: 'row4',
				toggleActions: 'restart reverse restart reverse',
				// markers: true
			}
		});
		tL10.from('.row4', {
			opacity: 0,
			delay: 1,
			duration: 1.25
		});

		let tL11 = gsap.timeline({
			scrollTrigger: {
				trigger: '.row5',
				start: 'top 85%',
				end: 'top 15%',
				id: 'row5',
				toggleActions: 'restart reverse restart reverse',
				// markers: true
			}
		});
		tL11.from('.row5', {
			opacity: 0,
			delay: 1,
			duration: 1.25
		});

		let tL12 = gsap.timeline({
			scrollTrigger: {
				trigger: '.row6',
				start: 'top 85%',
				end: 'top 15%',
				id: 'row6',
				toggleActions: 'restart reverse restart reverse',
				// markers: true
			}
		});
		tL12.from('.row6', {
			opacity: 0,
			delay: 1.25,
			duration: 1.25
		});

		let tL13 = gsap.timeline({
			scrollTrigger: {
				trigger: '.row7',
				start: 'top 85%',
				end: 'top 15%',
				id: 'row7',
				toggleActions: 'restart reverse restart reverse',
				// markers: true
			}
		});
		tL13.from('.row7', {
			opacity: 0,
			delay: 1.5,
			duration: 1.25
		});

		let tL14 = gsap.timeline({
			scrollTrigger: {
				trigger: '.row8',
				start: 'top 85%',
				end: 'top 15%',
				id: 'row8',
				toggleActions: 'restart reverse restart reverse',
				// markers: true
			}
		});
		tL14.from('.row8', {
			opacity: 0,
			delay: 1.75,
			duration: 1.25
		});

		let tL15 = gsap.timeline({
			scrollTrigger: {
				trigger: '.row9',
				start: 'top 85%',
				end: 'top 15%',
				id: 'row9',
				toggleActions: 'restart reverse restart reverse',
				// markers: true
			}
		});
		tL15.from('.row9', {
			opacity: 0,
			delay: 2,
			duration: 1.25
		});

		const tL16 = gsap.timeline({
			scrollTrigger: {
				trigger: '#scroll-icon',
				start: "top 110%",
				end: "top 90%",
				id: "scrollIcon",
				toggleActions: "restart reverse restart reverse",
				// markers: true
			}
		})
		tL16.from("#scroll-icon", {
			y: 100,
			opacity: 0,
			delay: 5,
			duration: 1,
			yoyo: true,
			repeat: -1,
			repeatDelay: 5
		})

		let tL17 = gsap.timeline({
			scrollTrigger: {
				trigger: '#about-line-1',
				start: 'top 85%',
				end: 'top 15%',
				id: 'about1',
				toggleActions: 'restart reverse restart reverse',
				// markers: true
			}
		});
		tL17.from('#about-line-1', {
			opacity: 0,
			delay: 0.25,
			duration: 1.25
		});

		let tL18 = gsap.timeline({
			scrollTrigger: {
				trigger: '#about-line-2',
				start: 'top 85%',
				end: 'top 18%',
				id: 'about2',
				toggleActions: 'play reverse restart reverse',
				// markers: true
			}
		});
		tL18.from('#about-line-2', {
			opacity: 0,
			delay: 0.5,
			duration: 1.25
		});

		let tL19 = gsap.timeline({
			scrollTrigger: {
				trigger: '#about-line-3',
				start: 'top 85%',
				end: 'top 20%',
				id: 'about3',
				toggleActions: 'play reverse restart reverse',
				// markers: true
			}
		});
		tL19.from('#about-line-3', {
			opacity: 0,
			delay: 0.75,
			duration: 1.25
		});

		let tL20 = gsap.timeline({
			scrollTrigger: {
				trigger: '#about-line-4',
				start: 'top 85%',
				end: 'top 22%',
				id: 'about4',
				toggleActions: 'play reverse restart reverse',
				// markers: true
			}
		});
		tL20.from('#about-line-4', {
			opacity: 0,
			delay: 1,
			duration: 1.25
		});

		let tL21 = gsap.timeline({
			scrollTrigger: {
				trigger: '#about-line-5',
				start: 'top 85%',
				end: 'top 25%',
				id: 'about5',
				toggleActions: 'play reverse restart reverse',
				// markers: true
			}
		});
		tL21.from('#about-line-5', {
			opacity: 0,
			delay: 1.25,
			duration: 1.25
		});

		let tL22 = gsap.timeline({
			scrollTrigger: {
				trigger: '#about-line-6',
				start: 'top 85%',
				end: 'top 28%',
				id: 'about6',
				toggleActions: 'play reverse restart reverse',
				// markers: true
			}
		});
		tL22.from('#about-line-6', {
			opacity: 0,
			delay: 1.5,
			duration: 1.25
		});
	// } else {
	// 	$(".content-250").addClass("active");
	// 	$(".content-350").addClass("active");
	// 	let exp1ElHeight = $("#exp-1").css("height");
	// 	let exp1Idx = exp1ElHeight.indexOf('px');
	// 	exp1ElHeight = parseInt(exp1ElHeight.substr(0, exp1Idx) );
	// 	let exp2ElHeight = $("#exp-2").css("height");
	// 	let exp2Idx = exp2ElHeight.indexOf('px');
	// 	exp2ElHeight = parseInt(exp2ElHeight.substr(0, exp2Idx));
	// 	let exp3ElHeight = $("#exp-3").css("height");
	// 	let exp3Idx = exp3ElHeight.indexOf('px');
	// 	exp3ElHeight = parseInt(exp3ElHeight.substr(0, exp3Idx));
	// 	let exp4ElHeight = $("#exp-4").css("height");
	// 	let exp4Idx = exp4ElHeight.indexOf('px');
	// 	exp4ElHeight = parseInt(exp4ElHeight.substr(0, exp4Idx));
	// 	let expHeightSum = exp1ElHeight + exp2ElHeight + exp3ElHeight + exp4ElHeight;
	// 	$(".timeline").css("height", `${expHeightSum}`);
	// 	$("#about-img-wrapper").removeClass("pl-3");
	// }
}
