
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

manageResize();

ScrollTrigger.batch('.home-reveal', {
	interval: 0.1, // time window (in seconds) for batching to occur. 
	onEnter: batch => gsap.to(batch, { autoAlpha: 1, stagger: 0.5 }),
	onLeave: batch => gsap.to(batch, { autoAlpha: 1, stagger: 0.5 }),
	onLeaveBack: batch => gsap.to(batch, { autoAlpha: 1, stagger: 0.5 })
});

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

function manageResize() {
	let screenWidth = document.documentElement.clientWidth;
	let screenHeight = document.documentElement.clientHeight;
	ScrollTrigger.refresh();

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

	if (screenWidth > 1200) {
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
	} else {
		$(".content-250").addClass("active");
		$(".content-350").addClass("active");
		let exp1ElHeight = $("#exp-1").css("height");
		let exp1Idx = exp1ElHeight.indexOf('px');
		exp1ElHeight = parseInt(exp1ElHeight.substr(0, exp1Idx) );
		let exp2ElHeight = $("#exp-2").css("height");
		let exp2Idx = exp2ElHeight.indexOf('px');
		exp2ElHeight = parseInt(exp2ElHeight.substr(0, exp2Idx));
		let exp3ElHeight = $("#exp-3").css("height");
		let exp3Idx = exp3ElHeight.indexOf('px');
		exp3ElHeight = parseInt(exp3ElHeight.substr(0, exp3Idx));
		let exp4ElHeight = $("#exp-4").css("height");
		let exp4Idx = exp4ElHeight.indexOf('px');
		exp4ElHeight = parseInt(exp4ElHeight.substr(0, exp4Idx));
		let expHeightSum = exp1ElHeight + exp2ElHeight + exp3ElHeight + exp4ElHeight;
		$(".timeline").css("height", `${expHeightSum}`);
		$("#about-img-wrapper").removeClass("pl-3");
	}
}
