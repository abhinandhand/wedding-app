import { Component, OnInit, Input } from '@angular/core';
import { WeddingOverviewService } from '../../data-access/wedding-overview/wedding-overview.service';
declare var $: any;
declare var anime: any;
declare var TiltFx: any;


@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
	wedddingOverviewData: any;
	isCollapsed: boolean;
	playMusic: boolean;
	isSetBoolean = true;
	lgScreen: boolean;
	@Input() weddingObj: any;
	constructor(public wedOverviewService: WeddingOverviewService) { }

	ngOnInit() {
		this.playMusic = true;
		this.isCollapsed = true;
		localStorage.setItem('isPausedByUser', 'false');
		this.fetchWedOverview();
		$(window).scroll(function () {
			// if((window.innerHeight + window.scrollY) >= (document.body.offsetHeight -50)) {
			// 	setTimeout(()=> {
			// 		$(".brand-action").removeClass("brand-pop");
			// 	},7000);
			// 	$(".brand-action").addClass("brand-pop");
			// }
			var height = $('.key-bg').height();
			var scrollTop = $(window).scrollTop();
			if (scrollTop >= height - 210) {
				$('.header-cont').addClass('solid-nav');
			} else {
				$('.header-cont').removeClass('solid-nav');
			}
			setTimeout(() => {
				$('.target').each(function () {
					if ($(window).scrollTop() >= $(this).offset().top) {
						var id = $(this).attr('id');
						var currentId = $('.nav-active').attr('i');
						if (id !== currentId) {
							$('.nav-scroll a').removeClass('nav-active');
						}
						$('.nav-scroll a[href=#' + id + ']').addClass('nav-active');
					}
				});
			}, 900);

			

		});
		$(window).resize(() => {
			this.reSizeImgCont();
		});

		this.reSizeImgCont();
		$('#wish-wel-button').on('click',()=>{
			document.getElementById('splash').style.display = 'none';
			$('#player').get(0).play();
			$('body').removeClass('modal-open');
			document.getElementById('window-app').classList.add('window-load');
			document.getElementById('window-app').style.visibility = 'visible';

		this.reSizeImgCont();
		});


	}

	checkBgLoaded() {
		setTimeout(() => {
			document.getElementById('splash-loading').style.display = 'none';
			document.getElementById('splash-continue').style.display = 'block';
		}, 2000);
		//console.log($('.hidden-img').height())
	}

	

	


	reSizeImgCont() {
		this.lgScreen = window.innerWidth > 980 ? true : false;
		if (window.innerWidth < 480) {
			$('.key-bg').css('height', $('.hidden-img').height());
		} else {
			$('.key-bg').css('height', 'unset');
			$('.hidden-img').css('position', 'relative');
		}
	}

	onMusicChange(value) {
		this.playMusic = value;
	}




	fetchWedOverview() {
		this.wedOverviewService.getWeddingOverview().subscribe((data: any) => {
			this.wedddingOverviewData = data;
			if(this.lgScreen){
				setTimeout(() => {
					this.initialiseAnime();
				}, 3000);
			}

		});
	};



	initialiseAnime() {
		var tiltSettings = [{},
		{
			movement: {
				imgWrapper: {
					translation: { x: 10, y: 10, z: 30 },
					rotation: { x: 0, y: -10, z: 0 },
					reverseAnimation: { duration: 200, easing: 'easeOutQuad' }
				},
				lines: {
					translation: { x: 10, y: 10, z: [0, 70] },
					rotation: { x: 0, y: 0, z: -2 },
					reverseAnimation: { duration: 2000, easing: 'easeOutExpo' }
				},
				caption: {
					rotation: { x: 0, y: 0, z: 2 },
					reverseAnimation: { duration: 200, easing: 'easeOutQuad' }
				},
				overlay: {
					translation: { x: 10, y: -10, z: 0 },
					rotation: { x: 0, y: 0, z: 2 },
					reverseAnimation: { duration: 2000, easing: 'easeOutExpo' }
				},
				shine: {
					translation: { x: 100, y: 100, z: 0 },
					reverseAnimation: { duration: 200, easing: 'easeOutQuad' }
				}
			}
		},
		{
			movement: {
				imgWrapper: {
					rotation: { x: -5, y: 10, z: 0 },
					reverseAnimation: { duration: 900, easing: 'easeOutCubic' }
				},
				caption: {
					translation: { x: 30, y: 30, z: [0, 40] },
					rotation: { x: [0, 15], y: 0, z: 0 },
					reverseAnimation: { duration: 1200, easing: 'easeOutExpo' }
				},
				overlay: {
					translation: { x: 10, y: 10, z: [0, 20] },
					reverseAnimation: { duration: 1000, easing: 'easeOutExpo' }
				},
				shine: {
					translation: { x: 100, y: 100, z: 0 },
					reverseAnimation: { duration: 900, easing: 'easeOutCubic' }
				}
			}
		},
		{
			movement: {
				imgWrapper: {
					rotation: { x: -5, y: 10, z: 0 },
					reverseAnimation: { duration: 50, easing: 'easeOutQuad' }
				},
				caption: {
					translation: { x: 20, y: 20, z: 0 },
					reverseAnimation: { duration: 200, easing: 'easeOutQuad' }
				},
				overlay: {
					translation: { x: 5, y: -5, z: 0 },
					rotation: { x: 0, y: 0, z: 6 },
					reverseAnimation: { duration: 1000, easing: 'easeOutQuad' }
				},
				shine: {
					translation: { x: 50, y: 50, z: 0 },
					reverseAnimation: { duration: 50, easing: 'easeOutQuad' }
				}
			}
		},
		{
			movement: {
				imgWrapper: {
					translation: { x: 0, y: -8, z: 0 },
					rotation: { x: 3, y: 3, z: 0 },
					reverseAnimation: { duration: 1200, easing: 'easeOutExpo' }
				},
				lines: {
					translation: { x: 15, y: 15, z: [0, 15] },
					reverseAnimation: { duration: 1200, easing: 'easeOutExpo' }
				},
				overlay: {
					translation: { x: 0, y: 8, z: 0 },
					reverseAnimation: { duration: 600, easing: 'easeOutExpo' }
				},
				caption: {
					translation: { x: 10, y: -15, z: 0 },
					reverseAnimation: { duration: 900, easing: 'easeOutExpo' }
				},
				shine: {
					translation: { x: 50, y: 50, z: 0 },
					reverseAnimation: { duration: 1200, easing: 'easeOutExpo' }
				}
			}
		},
		{
			movement: {
				lines: {
					translation: { x: -5, y: 5, z: 0 },
					reverseAnimation: { duration: 1000, easing: 'easeOutExpo' }
				},
				caption: {
					translation: { x: 15, y: 15, z: 0 },
					rotation: { x: 0, y: 0, z: 3 },
					reverseAnimation: { duration: 1500, easing: 'easeOutElastic', elasticity: 700 }
				},
				overlay: {
					translation: { x: 15, y: -15, z: 0 },
					reverseAnimation: { duration: 500, easing: 'easeOutExpo' }
				},
				shine: {
					translation: { x: 50, y: 50, z: 0 },
					reverseAnimation: { duration: 500, easing: 'easeOutExpo' }
				}
			}
		},
		{
			movement: {
				imgWrapper: {
					translation: { x: 5, y: 5, z: 0 },
					reverseAnimation: { duration: 800, easing: 'easeOutQuart' }
				},
				caption: {
					translation: { x: 10, y: 10, z: [0, 50] },
					reverseAnimation: { duration: 1000, easing: 'easeOutQuart' }
				},
				shine: {
					translation: { x: 50, y: 50, z: 0 },
					reverseAnimation: { duration: 800, easing: 'easeOutQuart' }
				}
			}
		},
		{
			movement: {
				lines: {
					translation: { x: 40, y: 40, z: 0 },
					reverseAnimation: { duration: 1500, easing: 'easeOutElastic' }
				},
				caption: {
					translation: { x: 20, y: 20, z: 0 },
					rotation: { x: 0, y: 0, z: -5 },
					reverseAnimation: { duration: 1000, easing: 'easeOutExpo' }
				},
				overlay: {
					translation: { x: -30, y: -30, z: 0 },
					rotation: { x: 0, y: 0, z: 3 },
					reverseAnimation: { duration: 750, easing: 'easeOutExpo' }
				},
				shine: {
					translation: { x: 100, y: 100, z: 0 },
					reverseAnimation: { duration: 750, easing: 'easeOutExpo' }
				}
			}
		}];


		var idx = 0;
		[].slice.call(document.querySelectorAll('a.tilter')).forEach(function (el, pos) {
			idx = pos % 2 === 0 ? idx + 1 : idx;
			new TiltFx(el, tiltSettings[idx - 1]);
		});


	}



}
