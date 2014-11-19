// function visibleArea(node) {
// 	var o = {
// 			height: node.offsetHeight,
// 			width: node.offsetWidth
// 		}, // size
// 		d = {
// 			y: (node.offsetTop || 0),
// 			x: (node.offsetLeft || 0),
// 			node: node.offsetParent
// 		}, // position
// 		css, y, x;
// 	while (null !== (node = node.parentNode)) { // loop up through DOM
// 		css = window.getComputedStyle(node);
// 		if (css && css.overflow === 'hidden') { // if has style && overflow
// 			y = node.offsetHeight - d.y; // calculate visible y
// 			x = node.offsetWidth - d.x; // and x
// 			if (node !== d.node) {
// 				y = y + (node.offsetTop || 0); // using || 0 in case it doesn't have an offsetParent
// 				x = x + (node.offsetLeft || 0);
// 			}
// 			if (y < o.height) {
// 				if (y < 0) o.height = 0;
// 				else o.height = y;
// 			}
// 			if (x < o.width) {
// 				if (x < 0) o.width = 0;
// 				else o.width = x;
// 			}
// 			return o; // return (modify if you want to loop up again)
// 		}
// 		if (node === d.node) { // update offsets
// 			d.y = d.y + (node.offsetTop || 0);
// 			d.x = d.x + (node.offsetLeft || 0);
// 			d.node = node.offsetParent;
// 		}
// 	}
// 	return o; // return if no hidden
// };
//

(function($) {

	var ss,
		scrollbarSize = function() {
		if (ss === undefined) {
			var child = $('<div style="height:1px;"/>'),
				parent = $('<div style="width:50px;height:0;overflow-y:scroll;position:fixed;left:-100px;"></div>').append(child);
			$('body').append(parent);
			ss = parent.innerWidth() - child.innerWidth();
			parent.remove();
		}
		return ss;
	};

	//
	// var metric = function(el) {
	// 	var content = el.children(),
	// 		escrow = $('<div>', {
	// 			class: 'escrow'
	// 		}),
	// 		bar = $('<div>', {
	// 			class: 'esbar'
	// 		});
	//
	// 	escrow.css({
	// 		position: 'absolute',
	// 		top: 0,
	// 		right: 0,
	// 		bottom: 0,
	// 		width: 5,
	// 		'z-index': '999'
	// 	});
	//
	// 	bar.css({
	// 		position: 'absolute',
	// 		right: 0,
	// 		height: 5,
	// 		width: 5,
	// 		background: '#404040'
	// 	});
	//
	// 	content.on('change', function() {
	// 		console.log(3);
	// 	});
	//
	// 	console.log(visibleArea(el[0]));
	//
	// 	return {
	// 		escrow: escrow,
	// 		bar: bar
	// 	};
	// }

	$.fn.escrow = function(options) {
		// return this.each(function() {
		// 	var self = $(this),
		// 		m = metric(self),
		// 		escrow = m.escrow,
		// 		bar = m.bar;
		//
		// 	self.prepend(escrow.html(bar));
		// 	self.on('mousewheel', function(e) {
		// 		// console.log(e.deltaFactor * e.deltaY);
		// 		console.log(e);
		// 	});
		//
		// 	console.log(self);
		// });

		return this.each(function() {
			var self = $(this);
			self.css({
				width: '+=' + scrollbarSize()
			});
		})
	};
})(jQuery);
