// ==UserScript==
// @name         scrolller.com tweak
// @namespace    http://abby0666.xyz/usc
// @version      0.33
// @description  tweaks scrolller.com/
// @author       Abnormal666
// @match        *://scrolller.com/*
// @match        *://www.scrolller.com/*
// @run-at       document-start
// @icon         https://scrolller.com/assets/favicon-16x16.png
// @grant        unsafeWindow
// @grant        GM_registerMenuCommand
// @require      https://code.jquery.com/jquery-3.6.0.min.js
// ==/UserScript==


//old // @author       abn & absolute
(function () {
	'use strict';
// 	var css = document.createElement('style');
// 	var head = document.head;
// 	yoinked from  = https://greasyfork.org/en/scripts/23772-absolute-enable-right-click-copy
// 	css.type = 'text/css';
// 	css.innerText = `* {
//        -webkit-user-select: text !important;
//        -moz-user-select: text !important;
//       -ms-user-select: text !important;
//         user-select: text !important;
//     }`;

// 	function waitForJQuery(callback) {
// 		if (typeof window.jQuery === 'undefined') {
// 			setTimeout(function () {
// 				waitForJQuery(callback);
// 			}, 100);
// 		}
// 		else {
// 			callback(window.jQuery);
// 		}
// 	}

// 	function main($) {
//		var doc = document;
// 		var body = document.body;
// 		var docEvents = [
// 			doc.oncontextmenu = null,
// 			doc.onselectstart = null,
// 			doc.ondragstart = null,
// 			doc.onmousedown = null
// 		];
// 		var bodyEvents = [
// 			body.oncontextmenu = null,
// 			body.onselectstart = null,
// 			body.ondragstart = null,
// 			body.onmousedown = null,
// 			body.oncut = null,
// 			body.oncopy = null,
// 			body.onpaste = null
// 		];
// 		[].forEach.call(
// 			['copy', 'cut', 'paste', 'select', 'selectstart'],
// 			function (event) {
// 				document.addEventListener(event, function (e) {
// 					e.stopPropagation();
// 				}, true);
// 			});
// 		alwaysAbsoluteMode();
// 		enableCommandMenu();
// 		head.appendChild(css);
// 		document.addEventListener('keydown', keyPress);
// 	}

// 	function keyPress(event) {
// 		if (event.ctrlKey && event.keyCode == 192) {
// 			return confirm('Enabled Right Click') == true ? absoluteMode() :
// 				null;
// 		}
// 	}

// 	function absoluteMode() {
// 		[].forEach.call(
// 			['contextmenu', 'copy', 'cut', 'paste', 'mouseup',
// 				'mousedown', 'keyup', 'keydown', 'drag', 'dragstart',
// 				'select', 'selectstart'
// 			],
// 			function (event) {
// 				document.addEventListener(event, function (e) {
// 					e.stopPropagation();
// 				}, true);
// 			});
// 	}

// 	function alwaysAbsoluteMode() {
// 		let sites = ['example.com', 'www.example.com'];
// 		const list = RegExp(sites.join('|'))
// 			.exec(location.hostname);
// 		return list ? absoluteMode() : null;
// 	}

// 	function enableCommandMenu() {
// 		var commandMenu = true;
// 		try {
// 			if (typeof (GM_registerMenuCommand) == undefined) {
// 				return;
// 			}
// 			else {
// 				if (commandMenu == true) {
// 					GM_registerMenuCommand('Enable Right Click',
// 						function () {
// 							return confirm('Success') == true ?
// 								absoluteMode() : null;
// 						});
// 				}
// 			}
// 		}
// 		catch (err) {
// 			console.log(err);
// 		}
// 	}
// 	var enabled = true
// 	var url = window.location.hostname;
// 	if (window && typeof window != undefined && head != undefined) {
// 		if (enabled != true) {
// 			main();
// 			enabled = true
// 			//console.log(location.hostname);
// 			window.addEventListener('contextmenu', function contextmenu(
// 				event) {
// 				event.stopPropagation();
// 				event.stopImmediatePropagation();
// 				var handler = new eventHandler(event);
// 				window.removeEventListener(event.type, contextmenu,
// 					true);
// 				var eventsCallBack = new eventsCall(function () {});
// 				handler.fire();
// 				window.addEventListener(event.type, contextmenu,
// 					true);
// 				if (handler.isCanceled && (eventsCallBack
// 						.isCalled)) {
// 					event.preventDefault();
// 				}
// 			}, true);
// 		}

// 		function eventsCall() {
// 			this.events = ['DOMAttrModified', 'DOMNodeInserted',
// 				'DOMNodeRemoved', 'DOMCharacterDataModified',
// 				'DOMSubtreeModified'
// 			];
// 			this.bind();
// 		}
// 		eventsCall.prototype.bind = function () {
// 			this.events.forEach(function (event) {
// 				document.addEventListener(event, this, true);
// 			}.bind(this));
// 		};
// 		eventsCall.prototype.handleEvent = function () {
// 			this.isCalled = true;
// 		};
// 		eventsCall.prototype.unbind = function () {
// 			this.events.forEach(function (event) {}.bind(this));
// 		};

// 		function eventHandler(event) {
// 			this.event = event;
// 			this.contextmenuEvent = this.createEvent(this.event.type);
// 		}
// 		eventHandler.prototype.createEvent = function (type) {
// 			var target = this.event.target;
// 			var event = target.ownerDocument.createEvent('MouseEvents');
// 			event.initMouseEvent(type, this.event.bubbles, this.event
// 				.cancelable, target.ownerDocument.defaultView, this
// 				.event.detail, this.event.screenX, this.event
// 				.screenY, this.event.clientX, this.event.clientY,
// 				this.event.ctrlKey, this.event.altKey, this.event
// 				.shiftKey, this.event.metaKey, this.event.button,
// 				this.event.relatedTarget);
// 			return event;
// 		};
// 		eventHandler.prototype.fire = function () {
// 			var target = this.event.target;
// 			var contextmenuHandler = function (event) {
// 				event.preventDefault();
// 			}.bind(this);
// 			target.dispatchEvent(this.contextmenuEvent);
// 			this.isCanceled = this.contextmenuEvent.defaultPrevented;
// 		};

// 		function removeElement(element) {
// 			if (element && element.parentNode) {
// 				element.parentNode.removeChild(element);
// 			}
// 		}
// 		$(document)
// 			.on('contextmenu', function () {
// 				return true;
// 			});
		var style = document.createElement('style');
		style.innerHTML =
			'@media (min-width: 768px) { .jtpevT { background-color: black !important; } }';
		document.head.appendChild(style);

		function handleRemovals() {
			function removeElementsByClass(className) {
				$('.' + className)
					.each(function () {
						removeElement(this);
					});
			}
			var classesToRemove = ['iWVCnz', 'bILdxK', 'sc-dGCmGc',
				'sc-bJBgwP', 'gkoUVD', 'sc-fAGzit', 'sc-dNsVcS',
				'sc-fulCBj', 'sc-dNsVcS', 'loHeFL', 'sc-empnci',
				'ifSzyh', 'sc-imwsjW', 'bkUeJd', 'sc-hYmls', 'imrPPc',
				'sc-fulCBj', 'cKvTyE'
			];
			classesToRemove.forEach(function (className) {
				removeElementsByClass(className);
			});
			// Remove specific div element
			$('.sc-dNsVcS.loHeFL')
				.remove();
			var topDiv = $('.sc-dNsVcS.loHeFL')
				.first();
			if (topDiv.length > 0) {
				var svgCode =
					'<path d="M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8Z"></path><path d="M192 474h672q8 0 8 8v60q0 8-8 8H160q-8 0-8-8v-60q0-8 8-8Z"></path>';
				var svgHTML = topDiv.find('svg')
					.prop('outerHTML');
				if (svgHTML.includes(svgCode)) {
					topDiv.css('visibility', 'hidden');
					removeElement(topDiv[0]);
				}
			}
		}
		var customCSS1 = `
            .sc-fsvrbR.gKmvFl .sc-kFWlue,
            .sc-fsvrbR.gKmvFl .sc-leSDtu.dtoPos div {
                color: gray !important;
            }
        `;
		$('head')
			.append('<style>' + customCSS1 + '</style>');

		function hideElementsByClass(classNames) {
			classNames.forEach(function (className) {
				$('.' + className)
					.css('display', 'none');
			});
		}

		function addCustomCSS() {
			var customCSS = `
                .fullscreen-view__media {
                    position: absolute !important;
                    top: 0 !important;
                    width: 100% !important;
                    height: 115% !important;
                    object-fit: contain !important;
                    display: block !important;
                    -webkit-tap-highlight-color: transparent !important;
                    -webkit-user-drag: none !important;
                }
            `;
			$('head')
				.append('<style>' + customCSS + '</style>');
		}
		handleRemovals();
		addCustomCSS();
		hideElementsByClass(['loHeFL', 'sc-empnci', 'ifSzyh', 'sc-imwsjW',
			'bkUeJd'
		]);

		function removeImageInFrames(frames) {
			for (var i = 0; i < frames.length; i++) {
				try {
					var frameDocument = frames[i].document;
					var imagesToRemove = $(frameDocument)
						.find(
							'img[src="/assets/ads/live-circle-image.png"]');
					imagesToRemove.each(function () {
						var parentButton = $(this)
							.closest('button');
						if (parentButton.length > 0) {
							var parentDiv = parentButton.closest(
								'div');
							if (parentDiv.length > 0) {
								parentDiv.remove();
							}
							parentButton.remove();
						}
					});
					if (frames[i].frames.length > 0) {
						removeImageInFrames(frames[i].frames);
					}
				}
				catch (error) {
					console.error('Error accessing iframe:', error);
				}
			}
		}
		removeImageInFrames(window.frames);
		var observer = new MutationObserver(function (mutations) {
			mutations.forEach(function (mutation) {
				if (mutation.addedNodes.length > 0) {
					handleRemovals();
					hideElementsByClass(['loHeFL',
						'sc-empnci', 'ifSzyh',
						'sc-imwsjW', 'bkUeJd'
					]);
				}
			});
		});
		observer.observe(document.body, {
			childList: true,
			subtree: true
		});
		$(document)
			.on('click', '.sc-dQEtJz.iCyYmi', function () {
				if (navigator.share) {
					var title = $(document)
						.attr('title')
						.trim(); // Query window title
					var description = $(
							'.sc-fsvrbR.gKmvFl > .sc-jOnpCo > .dtoPos > div'
						)
						.text()
						.trim(); // Query description
					navigator.share({
							title: title,
							text: description,
							url: window.location.href
						})
						.then(
							() => {
								console.log('Shared successfully');
							})
						.catch((error) => {
							console.error('Error sharing:', error);
						});
				}
				else {
					console.log('Share API is not supported');
				}
			});
	}
	waitForJQuery(main);
})();
