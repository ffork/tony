/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/*\r\n *   Author - TonyHe\r\n *   Theme Tony - v4.37\r\n *   https://www.ouorz.com/ | Released under GPL-3.0 license\r\n */\r\n\r\n$(document).ready(function () { //避免爆代码\r\n\r\n    //获取评论参数\r\n    var site = window.site_url;\r\n    var wp_rest = window.wp_rest;\r\n\r\n    var now = 20;\r\n    var click = 0; //初始化加载次数\r\n    var paged = 1; //获取当前页数\r\n    var pre_post_id = null;\r\n    var pre_post_con = '';\r\n\r\n    /* 展现内容(避免爆代码) */\r\n    $('.article-list').css('opacity', '1');\r\n    $('.cat-real').attr('style', 'display:inline-block');\r\n    /* 展现内容(避免爆代码) */\r\n\r\n    var antd = new Vue({ //axios获取顶部信息\r\n        el: '#grid-cell',\r\n        data() {\r\n            return {\r\n                m: window.index_m,\r\n                site_url: window.site_url,\r\n\r\n                exclude_option: window.cate_exclude_option,\r\n                cate_exclude: window.cate_exclude,\r\n                exclude_params: '',\r\n\r\n                cates_exclude: window.cates_exclude,\r\n                cate_exclude_params: '',\r\n                cate_exclude_option: window.cates_exclude_option,\r\n\r\n                pages: window.index_p,\r\n\r\n                preview_comment_open: window.preview_comment_open,\r\n\r\n                posts: null,\r\n                posts_id_sticky: '0',\r\n                cates: null,\r\n                tages: null,\r\n                loading: true, //v-if判断显示占位符\r\n                loading_cates: true,\r\n                loading_tages: true,\r\n                errored: true,\r\n                loading_css: 'loading-line',\r\n                comments_html: '<div id=\"new_comments\" style=\"margin-top:40px\"></div>'\r\n            }\r\n        },\r\n        mounted() {\r\n\r\n            //分类排除参数获取\r\n            if (this.cate_exclude == 'true') {\r\n                this.exclude_params = '?exclude=' + this.exclude_option;\r\n            }\r\n\r\n            if (this.cates_exclude == 'true') {\r\n                this.cate_exclude_params = '&categories_exclude=' + this.cate_exclude_option;\r\n            }\r\n\r\n            //获取分类\r\n            axios.get(this.site_url + '/wp-json/wp/v2/categories' + this.exclude_params)\r\n                .then(response => {\r\n                    this.cates = response.data;\r\n                })\r\n                .then(() => {\r\n                    this.loading_cates = false;\r\n\r\n                    //获取标签\r\n                    axios.get(this.site_url + '/wp-json/wp/v2/tags?order=desc&per_page=15')\r\n                        .then(response => {\r\n                            this.tages = response.data;\r\n                        }).then(() => {\r\n                            this.loading_tages = false;\r\n                        });\r\n\r\n                });\r\n\r\n                \r\n            /*\r\n            * 获取文章列表\r\n            * 得到顶置文章后拼接其余文章\r\n            */\r\n\r\n            //获取顶置文章\r\n            axios.get(this.site_url + '/wp-json/wp/v2/posts?sticky=1&'+ this.cate_exclude_params)\r\n                .then(res_sticky => {\r\n                    this.posts = res_sticky.data;\r\n\r\n                    //获取顶置文章 IDs 以在获取其余文章时排除\r\n                    for(var s = 0;s< this.posts.length; ++s){\r\n                        this.posts_id_sticky += (',' + this.posts[s].id); \r\n                    }\r\n\r\n                    axios.get(this.site_url + '/wp-json/wp/v2/posts?sticky=0&exclude='+ this.posts_id_sticky +'&per_page=' + this.pages + '&page=' + paged + this.cate_exclude_params)\r\n                    .then(res_normal => {\r\n                        //拼接其余文章\r\n                        this.posts = this.posts.concat(res_normal.data);\r\n                    })\r\n                })\r\n                .catch(e => {\r\n                    this.errored = false;\r\n                    alert('文章加载失败，可能是伪静态未配置正确，请参考: https://www.wpdaxue.com/wordpress-rewriterule.html 来配置。加入 QQ 群：454846972 以获得更多支持。');\r\n                })\r\n                .then(() => {\r\n                    this.loading = false;\r\n                    paged++; //加载完1页后累加页数\r\n                    //加载完文章列表后监听滑动事件\r\n                    $(window).scroll(function () {\r\n                        var scrollTop = $(window).scrollTop();\r\n                        var scrollHeight = $('.bottom').offset().top - 800;\r\n                        if (scrollTop >= scrollHeight) {\r\n                            if (click == 0) { //接近底部加载一次新文章\r\n                                $('#scoll_new_list').click();\r\n                                click++; //加载次数计次\r\n                            }\r\n                        }\r\n                    });\r\n\r\n                    //检查是否存在下一页\r\n                    axios.get(this.site_url + '/wp-json/wp/v2/posts?per_page=' + this.pages + '&page=' + paged + this.cate_exclude_params)\r\n                    .then(response => {\r\n                        if (!response.data.length || response.data.length == 0) { //判断是否最后一页\r\n                            this.loading_css = '';\r\n                            $('#view-text').html('-&nbsp;全部文章&nbsp;-');\r\n                            $('.bottom h5').html('暂无更多文章了 O__O \"…').css({\r\n                                'background': '#fff',\r\n                                'color': '#999'\r\n                            });\r\n                        }\r\n                    }).catch(e => {\r\n                        this.loading_css = '';\r\n                        $('#view-text').html('-&nbsp;所有文章&nbsp;-');\r\n                        $('.bottom h5').html('暂无更多文章了 O__O \"…').css({\r\n                            'background': '#fff',\r\n                            'color': '#999'\r\n                        });\r\n                    })\r\n\r\n                })\r\n\r\n        },\r\n        methods: { //定义方法\r\n            new_page: function () { //加载下一页文章列表\r\n                $('#view-text').html('-&nbsp;加载中&nbsp;-');\r\n                axios.get(this.site_url + '/wp-json/wp/v2/posts?sticky=0&exclude='+ this.posts_id_sticky + '&per_page=' + this.pages + '&page=' + paged + this.cate_exclude_params)\r\n                    .then(response => {\r\n                        if (!!response.data.length && response.data.length !== 0) { //判断是否最后一页\r\n                            $('#view-text').html('-&nbsp;文章列表&nbsp;-');\r\n                            this.posts.push.apply(this.posts, response.data); //拼接在上一页之后\r\n                            click = 0;\r\n                            paged++;\r\n                        } else {\r\n                            this.loading_css = '';\r\n                            $('#view-text').html('-&nbsp;全部文章&nbsp;-');\r\n                            $('.bottom h5').html('暂无更多文章了 O__O \"…').css({\r\n                                'background': '#fff',\r\n                                'color': '#999'\r\n                            });\r\n                        }\r\n                    }).catch(e => {\r\n                        this.loading_css = '';\r\n                        $('#view-text').html('-&nbsp;所有文章&nbsp;-');\r\n                        $('.bottom h5').html('暂无更多文章了 O__O \"…').css({\r\n                            'background': '#fff',\r\n                            'color': '#999'\r\n                        });\r\n                    })\r\n            },\r\n            preview: function (postId) { //预览文章内容\r\n                var previewingPost = $('.article-list-item .preview-p');\r\n                if (!!previewingPost.length) { // 若有其它预览已打开,则自动收起\r\n                    var previewingPostItemEl = previewingPost.parent('.article-list-item');\r\n                    previewingPostItemEl.find('.list-show-btn').html('全文速览');\r\n                    previewingPostItemEl.find('.article-list-content').html(pre_post_con).removeClass('preview-p');\r\n                    pre_post_con = '';\r\n                    this.comments_html = '<div id=\"new_comments\" style=\"margin-top:40px\"></div>';\r\n                    if (postId === pre_post_id) { // 若点击当前已打开文章的按钮\r\n                        return;\r\n                    }\r\n                }\r\n\r\n                $('#' + postId).html('<div uk-spinner></div><h7 class=\"loading-text\">加载中...</h7>');\r\n                axios.get(this.site_url + '/wp-json/wp/v2/posts/' + postId)\r\n                    .then(response => {\r\n                        if (response.data.length !== 0) { //判断是否最后一页\r\n                            axios.get(this.site_url + '/wp-json/wp/v2/comments?post=' + postId)\r\n                                .then(comments => {\r\n                                    if (response.data.comment_status == 'open' && this.preview_comment_open) {\r\n                                        //处理评论格式\r\n                                        for (var c = 0; c < comments.data.length; ++c) {\r\n                                            this.comments_html += '<div class=\"quick-div\"><div><img class=\"quick-img\" src=\"' + comments.data[c].author_avatar_urls['48'] + '\"></div><div><p class=\"quick-name\">' + comments.data[c].author_name + '<em class=\"quick-date\">' + comments.data[c].date + '</em></p>' + comments.data[c].content.rendered + '</div></div>';\r\n                                        }\r\n                                        this.comments_html += '<div class=\"quick-div\" style=\"margin-top: 15px;padding-bottom: 0px;\"><div style=\"flex:1;border-right: 1px solid #eee;\"><input type=\"text\" placeholder=\"昵称\" id=\"comment_form_name\" class=\"quick-form\"></div><div style=\"flex:1;margin-left: 10px;\"><input type=\"email\" placeholder=\"邮箱\" id=\"comment_form_email\" class=\"quick-form\"></div></div><div class=\"quick-div\" style=\"padding: 4px;\"><textarea placeholder=\"说点什么...\" id=\"comment_form_content\" class=\"quick-form-textarea\"></textarea></div><button class=\"quick-btn\" onclick=\"send_comment(' + postId + ')\">发送评论</button>';\r\n                                    }\r\n\r\n\r\n                                    $('#btn' + postId).html('收起速览'); //更改按钮\r\n\r\n                                    if (!!this.m) {\r\n                                        var show_con = response.data.md_content;\r\n                                        show_con = md.render(show_con);\r\n                                        pre_post_con = md.render(response.data.post_excerpt.nine); //保存摘录\r\n                                    } else {\r\n                                        var show_con = response.data.content.rendered;\r\n                                        pre_post_con = response.data.post_excerpt.nine; //保存摘录\r\n                                    }\r\n\r\n                                    $('#' + postId).addClass('preview-p').html(\r\n                                        show_con +\r\n                                        this.comments_html\r\n                                    ); //更改内容\r\n                                    pre_post_id = postId;\r\n                                    document.querySelectorAll('pre code').forEach((block) => {\r\n                                        hljs.highlightBlock(block);\r\n                                    });\r\n                                })\r\n                        } else {\r\n                            $('#' + postId).html('Nothing Here');\r\n                        }\r\n                    });\r\n            }\r\n        }\r\n    });\r\n\r\n\r\n})\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });