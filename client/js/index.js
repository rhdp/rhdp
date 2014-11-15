$(document).ready(function() {
	var socket = io.connect(),
		T = templatizer;

	var header = $('#header'),
		toolbar = $('#toolbar'),
		search = $('#search'),
		topicbar = $('#topicbar'),
		content = $('#content');

	var articleCache = [],
		previous,
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
				IArticle.setArticle(this.parent);
			}
		});
		IArticle = can.Construct.extend({
			setArticle: function(i) {
				if (previous) {
					previous.removeClass('selected');
				}
				previous = i.entryView.element;
				content.html(i.view.element);
				previous.addClass('selected');
			}
		}, {
			init: function(article) {
				article.html = marked(article.md);
				this.article = article;
				this.view = new ArticleView($(T.article(article)), {
					parent: this
				});
				this.entryView = new ArticleEntryView($(T.topicnode(article)), {
					parent: this
				});
			}
		});

	socket
		.emit('init', {

		})
		.on('response', function(data) {

		})
		.on('server.articles', function(raws) {
			for (var a in raws) {
				articleCache.push(new IArticle(raws[a]));
			}
			for (var a in articleCache) {
				topicbar.append(articleCache[a].entryView.element);
			}
		});

});
