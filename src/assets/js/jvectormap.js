!function($) {
    "use strict";
	
	$('#world_map').vectorMap({
		map: 'world_mill',
		scaleColors : ['#03a9f4', '#03a9f4'],
		normalizeFunction : 'polynomial',
		hoverOpacity : 0.7,
		hoverColor : false,
		regionStyle : {
			initial : {
				fill : '#E30613'
			}
		},
		backgroundColor : 'transparent'
	});
	
	$('#usa').vectorMap({
		map: 'us_aea',
		backgroundColor: 'transparent',
		regionStyle: {
			initial: {
				fill: '#E30613'
			}
		}
	});
	$('#india').vectorMap({
		map : 'in_mill',
		backgroundColor : 'transparent',
		regionStyle : {
			initial : {
				fill : '#E30613'
			}
		}
	});
	$('#uk').vectorMap({map: 'uk_countries_mill',backgroundColor: 'transparent',
			  regionStyle: {
				initial: {
				  fill: '#E30613'
				}
			  }});
	$('#russia').vectorMap({
		map: 'ru_mill',
		backgroundColor: 'transparent',
			  regionStyle: {
				initial: {
				  fill: '#E30613'
				}
			  }});

}(window.jQuery)
