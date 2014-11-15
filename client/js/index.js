var cachedArticles = [],
	Article = can.Model.extend({
		render: marked
	}, {
		init: function(md) {
			this.html = Article.render(md);
		},
		html: ''
	}),
	ArticleView = can.Control.extend({
		init: function(article) {
			this.article = article;
		},
		article: {}
	});

$(document).ready(function() {
	var socket = io.connect(),
		T = templatizer;

	var header = $('#header'),
		toolbar = $('#toolbar'),
		search = $('#search'),
		topicbar = $('#topicbar'),
		content = $('#content');

	var loadArticle = function(md) {
		var a = new Article(md),
			v = $(T.article(a)).appendTo(content),
			c = new ArticleView(v, a);
	};

	loadArticle('# Hello\n## Hello\n ### Hello\n#### Hello\n##### Hello\n###### Hello');

	socket
		.emit('init', {

		})
		.on('response', function(data) {

		});
});
