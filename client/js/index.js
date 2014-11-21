$(document).ready(function() {
	var socket = io.connect(),
		T = templatizer,
		articleCache = [];

	var body = $(document.body),
		header = $('#header'),
		toolbar = $('#toolbar'),
		search = $('#search'),
		topicbar = $('#topicbar'),
		topicport = $('#topicport'),
		content = $('#content'),
		contentport = $('#contentport'),
		create = $('#create'),
		modal = $('#modal'),
		edit = $('#edit');

	topicport.escrow();
	contentport.escrow();

	var previousEntry,
		previousArticle;

	var mirror = CodeMirror.fromTextArea(edit.find('.editor')[0], {
			lineNumbers: true,
			lineWrapping: true,
			mode: 'markdown',
			theme: 'base16-dark'
		}),
		render = edit.find('.render');

	body.append(edit);
	edit.find('.editwrap').escrow();
	render.escrow();
	mirror.refresh();

	modal.hide();
	edit.hide();

	var editclose = function() {
			if (!edit.is(':hover')) {
				body.off('click.edit');
				modal.fadeOut(200);
				edit.fadeOut(200);
			}
		},
		editopencurrent = function(e) {
			e.stopPropagation();
			mirror.setValue(previousArticle.md);
			mirror.clearHistory();
			edit.find('.title').val(previousArticle.title);
			editopenwork(e);
		},
		editopenwork = function(e) {
			e.stopPropagation();
			modal.fadeIn(200);
			edit.fadeIn(200).keyup();
			mirror.refresh();
			mirror.focus();
			body.on('click.edit', editclose);
		};

	create.click(editopenwork);

	edit.keyup(function() {
		render.html(marked('#' + edit.find('.title').val() + '\n' + mirror.getValue()));
	});

	contentport.on('click', '.change', editopencurrent);

	var ArticleView = can.Control.extend({
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
				previousArticle = i.article;
				contentport.html(i.view.element.fadeIn(50));
				previousEntry.addClass('selected');
			}
		}, {
			init: function(article) {
				article.html = marked('#' + article.title + '\n' + article.md);
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
