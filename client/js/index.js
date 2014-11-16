$(document).ready(function() {
	var socket = io.connect(),
		T = templatizer;

	var header = $('#header'),
		toolbar = $('#toolbar'),
		search = $('#search'),
		topicbar = $('#topicbar'),
		content = $('#content');

	var articleCache = [],
		previousEntry,
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
				if (previousEntry) {
					previousEntry.removeClass('selected');
				}
				previousEntry = i.entryView.element;
				content.html(i.view.element.fadeIn(50));
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
			}
		});

	socket
		.emit('init', {

		})
		.on('response', function(data) {

		})
		.on('server.article', function(raw) {
			articleCache[raw.title] = new IArticle(raw);
			topicbar.append(articleCache[raw.title].entryView.element.hide().fadeIn(50));
		});

});
