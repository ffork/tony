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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/single.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/single.js":
/*!***********************!*\
  !*** ./src/single.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("$(document).ready(function() { //避免爆代码\r\n\r\n\r\n    var post_info = new Vue({ //axios获取顶部信息\r\n        el: 'main',\r\n        data() {\r\n            return {\r\n                site_url: window.site_url,\r\n                post_id: window.post_id,\r\n                m: window.index_m,\r\n                pwd: window.pwd,\r\n                color: window.color,\r\n                display_author: window.display_author,\r\n                author_div: '',\r\n\r\n                posts: null,\r\n                loading: true, //v-if判断显示占位符\r\n                errored: true,\r\n                cate: '分类目录',\r\n                cate_url: '',\r\n                post_tags: [],\r\n                post_prenext: [],\r\n                exist_index: true,\r\n                reading_p: 0\r\n            }\r\n        },\r\n        mounted() {\r\n\r\n            //获取文章\r\n            axios.get(this.site_url + '/wp-json/wp/v2/posts/' + this.post_id)\r\n                .then(response => {\r\n                    this.posts = response.data;\r\n                })\r\n                .catch(e => {\r\n                    this.errored = false\r\n                })\r\n                .then(() => {\r\n                    this.loading = false;\r\n                    this.cate = this.posts.post_categories[0].name;\r\n                    this.cate_url = this.posts.post_categories[0].link;\r\n                    this.post_tags = this.posts.post_tags;\r\n                    this.post_prenext = this.posts.post_prenext;\r\n\r\n                    $('.real').css('display', 'block');\r\n\r\n                    if (!!this.pwd) {\r\n                        $('.article-content').attr('style', '');\r\n                    } else if (!!this.m) {\r\n                        // 初始化 markdown 插件\r\n                        tm = texmath.use(katex);\r\n                        var md = window.markdownit({\r\n                            html: true,\r\n                            xhtmlOut: false,\r\n                            breaks: true,\r\n                            linkify: true\r\n                        }).use(tm,{delimiters:'dollars',macros:{\"\\\\RR\": \"\\\\mathbb{R}\"}});\r\n                        var md_result = md.render(this.posts.md_content);\r\n                        $('.article-content').html(md_result).attr('style', '');\r\n                    } else {\r\n                        $('.article-content').html(this.posts.content.rendered).attr('style', '');\r\n                    }\r\n\r\n                    $('.single-h2').html(this.posts.post_metas.title.replace('密码保护：', '')).attr('style',\r\n                        '');\r\n\r\n                    //展示文章作者名称\r\n                    if(this.display_author){\r\n                        this.author_div = '<span class=\"article-list-date\">' + this.posts.post_metas.author +\r\n                        '</span><span class=\"article-list-divider\">&nbsp;&nbsp;/&nbsp;&nbsp;</span>';\r\n                    }\r\n\r\n                    $('.article-list-footer').html(this.author_div + '<span class=\"article-list-date\">' + this.posts\r\n                        .post_date +\r\n                        '</span><span class=\"article-list-divider\">&nbsp;&nbsp;/&nbsp;&nbsp;</span><span class=\"article-list-minutes\">' +\r\n                        this.posts.post_metas.views + '&nbsp;Views</span>').attr('style', '');\r\n\r\n                    if (!!this.color) {\r\n                        //文章阅读进度条\r\n                        var content_offtop = $('.article-content').offset().top;\r\n                        var content_height = $('.article-content').innerHeight();\r\n                        $(window).scroll(function() {\r\n                            if (($(this).scrollTop() > content_offtop)) { //滑动到内容部分\r\n                                if (($(this).scrollTop() - content_offtop) <= content_height) { //在内容部分内滑动\r\n                                    this.reading_p = Math.round(($(this).scrollTop() - content_offtop) / content_height * 100);\r\n                                } else { //滑出内容部分\r\n                                    this.reading_p = 100;\r\n                                }\r\n                            } else { //未滑到内容部分\r\n                                this.reading_p = 0;\r\n                            }\r\n                            $('.reading-bar').css('width', this.reading_p + '%');\r\n                        });\r\n                    }\r\n\r\n\r\n                    /* 文章目录 */\r\n\r\n                    var h = 0;\r\n                    var pf = 23;\r\n                    var i = 0;\r\n                    $('#article-index').html('');\r\n                    var count_ti = count_in = count_ar = count_sc = count_hr = count_e = 1;\r\n                    var offset = new Array;\r\n                    var min = 0;\r\n                    var c = 0;\r\n                    var icon = '';\r\n\r\n                    //获取最高级别h标签\r\n                    $(\".article-content>:header\").each(function() {\r\n                        h = $(this).eq(0).prop(\"tagName\").replace('H', '');\r\n                        if (c == 0) {\r\n                            min = h;\r\n                            c++;\r\n                        } else {\r\n                            if (h <= min) {\r\n                                min = h;\r\n                            }\r\n                        }\r\n                    });\r\n\r\n                    //获取h标签内容\r\n                    $(\".article-content>:header\").each(function() {\r\n                        h = $(this).eq(0).prop(\"tagName\").replace('H', ''); //标签级别\r\n                        for (i = 0; i < Math.abs(h - min); ++i) { //偏移程度\r\n                            pf += 10;\r\n                        }\r\n                        if (pf !== 23) { //图标\r\n                            icon = 'czs-square-l';\r\n                        } else {\r\n                            icon = 'czs-circle-l';\r\n                        }\r\n\r\n                        $('#article-index').html($('#article-index').html() + '<li id=\"ti' + (\r\n                                count_ti++) +\r\n                            '\" style=\"padding-left:' + pf + 'px\"><a><i class=\"' + icon +\r\n                            '\"></i>  ' + $(this).eq(\r\n                                0).text().replace(/[ ]/g, \"\") + '</a></li>'); //创建目录\r\n                        $(this).eq(0).attr('id', 'in' + (count_in++)); //添加id\r\n                        offset[0] = 0;\r\n                        offset[count_ar++] = $(this).eq(0).offset().top; //位置存入数组\r\n                        count_e++;\r\n                        pf = 23; //设置初始偏移值\r\n                        i = 0; //设置循环开始\r\n                    })\r\n\r\n                    //跳转对应位置事件\r\n                    $('#article-index li').click(function() {\r\n                        $('html,body').animate({\r\n                            scrollTop: ($('#in' + $(this).eq(0).attr('id').replace('ti',\r\n                                '')).offset().top - 100)\r\n                        }, 500);\r\n                    });\r\n\r\n                    if (count_e !== 1) { //若存在标签\r\n\r\n                        $(window).scroll(function() { //滑动窗口时\r\n                            var scroH = $(this).scrollTop() + 130;\r\n                            var navH = offset[count_sc]; //从1开始获取当前位置\r\n                            var navH_prev = offset[count_sc - 1]; //获取上一个位置(以备回滑)\r\n                            if (scroH >= navH) { //滑过当前位置\r\n                                $('#ti' + (count_sc - 1)).attr('class', '');\r\n                                $('#ti' + count_sc).attr('class', 'active');\r\n                                count_sc++; //调至下一个位置\r\n                            }\r\n                            if (scroH <= navH_prev) { //滑回上一个h3位置,调至上一个位置\r\n                                $('#ti' + (count_sc - 2)).attr('class', 'active');\r\n                                count_sc--;\r\n                                $('#ti' + count_sc).attr('class', '');\r\n                            }\r\n                        });\r\n\r\n                    } else {\r\n                        $('.index-div').css('display', 'none');\r\n                        this.exist_index = false;\r\n                    }\r\n                    /* 文章目录 */\r\n\r\n                    //代码高亮\r\n                    document.querySelectorAll('pre code').forEach((block) => {\r\n                        hljs.highlightBlock(block);\r\n                    });\r\n                })\r\n        }\r\n    });\r\n\r\n\r\n});\n\n//# sourceURL=webpack:///./src/single.js?");

/***/ })

/******/ });