$(document).ready(function() {
	var socket = io.connect(),
		T = templatizer,
		articleCache = [];

	var header = $('#header'),
		toolbar = $('#toolbar'),
		search = $('#search'),
		topicbar = $('#topicbar'),
		topicport = $('#topicport'),
		content = $('#content'),
		contentport = $('#contentport');

		topicport.escrow();
		contentport.escrow();

	var previousEntry,
		ArticleView = can.Control.extend({
			init: function(el, opt) {
				this.parent = opt.parent;
			},
			destroy: function() {

			}
		}),
		ArticleEntryView = can.Control.extend({
			init: function(el, opt) {
				this.parent = opt.parent;
			},
			'click': function() {
				can.route.attr('article', this.parent.article.title);
			}
		});
		IArticle = can.Construct.extend({
			setArticle: function(i) {
				if (previousEntry) {
					previousEntry.removeClass('selected');
				}
				previousEntry = i.entryView.element;
				contentport.html(i.view.element.fadeIn(50));
				previousEntry.addClass('selected');
			}
		}, {
			init: function(article) {
				article.html = marked(article.md);
				this.article = article;
				this.view = new ArticleView(T.article(article), {
					parent: this
				});
				this.entryView = new ArticleEntryView(T.topicnode(article), {
					parent: this
				});
				topicport.append(this.entryView.element.hide().fadeIn(50));
			}
		});

	var router = new (can.Control({
		':article route': function(data) {
			var a = articleCache[data.article];
			if (a) {
				IArticle.setArticle(a);
			}
		}
	}))(window);
	window.location.hash = '';
	can.route.ready();

	socket
		.emit('init', {

		})
		.on('response', function(data) {

		})
		.on('server.article', function(raw) {
			articleCache[raw.title] = new IArticle(raw);
		});

});
