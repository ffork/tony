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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/tag.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/tag.js":
/*!********************!*\
  !*** ./src/tag.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("window.onload = function() { //避免爆代码\r\n\r\n    var click = 0; //初始化加载次数\r\n    var paged = 1; //获取当前页数\r\n    var incate = window.cate_id;\r\n    var tag_name = window.tag_name;\r\n    var post_count = window.post_count;\r\n\r\n    /* 展现内容(避免爆代码) */\r\n    $('.article-list').css('opacity', '1');\r\n    $('.top1').html(tag_name);\r\n    $('.top2').html('标签文章数 : '+ post_count);\r\n    $('.cat-real').attr('style', 'display:inline-block');\r\n    /* 展现内容(避免爆代码) */\r\n\r\n    new Vue({ //axios获取顶部信息\r\n        el: '#grid-cell',\r\n        data() {\r\n            return {\r\n                site_url: window.site_url,\r\n\r\n                exclude_option: window.cate_exclude_option,\r\n                cate_exclude: window.cate_exclude,\r\n                exclude_params: '',\r\n\r\n                pages: window.index_p,\r\n                cate_fre: window.cate_fre,\r\n                cate_wor: window.cate_fre,\r\n\r\n\r\n                posts: null,\r\n                posts_id_sticky: '0',\r\n                cates: null,\r\n                des: null,\r\n                loading: true, //v-if判断显示占位符\r\n                loading_des: true,\r\n                errored: true,\r\n                loading_css: 'loading-line'\r\n            }\r\n        },\r\n        mounted() {\r\n\r\n            //分类排除参数获取\r\n            if(this.cate_exclude == 'true'){\r\n                this.exclude_params = '?exclude=' + this.exclude_option;\r\n            }\r\n\r\n            //获取分类\r\n            axios.get(this.site_url + '/wp-json/wp/v2/categories' + this.exclude_params)\r\n                .then(response => {\r\n                    this.des = response.data;\r\n                }).then(() => {\r\n                    this.loading_des = false;\r\n                });\r\n\r\n            /*\r\n            * 获取文章列表\r\n            * 得到顶置文章后拼接其余文章\r\n            */\r\n\r\n            //获取顶置文章\r\n            axios.get(this.site_url + '/wp-json/wp/v2/posts?sticky=1&tags=' + incate)\r\n                .then(res_sticky => {\r\n                    this.posts = res_sticky.data;\r\n\r\n                    //获取顶置文章 IDs 以在获取其余文章时排除\r\n                    for(var s = 0;s< this.posts.length; ++s){\r\n                        this.posts_id_sticky += (',' + this.posts[s].id); \r\n                    }\r\n\r\n                    axios.get(this.site_url + '/wp-json/wp/v2/posts?sticky=0&tags=' + incate + '&exclude='+ this.posts_id_sticky + '&per_page=' + this.pages + '&page=' + paged)\r\n                    .then(res_normal => {\r\n                        //拼接其余文章\r\n                        this.posts = this.posts.concat(res_normal.data);\r\n                    })\r\n                })\r\n                .catch(e => {\r\n                    this.errored = false\r\n                })\r\n                .then(() => {\r\n                    this.loading = false;\r\n                    paged++; //加载完1页后累加页数\r\n                    //加载完文章列表后监听滑动事件\r\n                    $(window).scroll(function() {\r\n                        var scrollTop = $(window).scrollTop();\r\n                        var scrollHeight = $('.bottom').offset().top - 500;\r\n                        if (scrollTop >= scrollHeight) {\r\n                            if (click == 0) { //接近底部加载一次新文章\r\n                                $('#scoll_new_list').click();\r\n                                click++; //加载次数计次\r\n                            }\r\n                        }\r\n                    });\r\n\r\n                })\r\n        },\r\n        methods: { //定义方法\r\n            new_page: function() { //加载下一页文章列表\r\n                axios.get(this.site_url + '/wp-json/wp/v2/posts?sticky=0&exclude='+ this.posts_id_sticky + 'per_page='+ this.pages +'&page=' + paged + '&tags=' + incate)\r\n                    .then(response => {\r\n                        if (!!response.data.length && response.data.length !== 0) { //判断是否最后一页\r\n                            $('#view-text').html('-&nbsp;文章列表&nbsp;-');\r\n                            this.posts.push.apply(this.posts, response.data); //拼接在上一页之后\r\n                            click = 0;\r\n                            paged++;\r\n                        } else {\r\n                            this.loading_css = '';\r\n                            $('#view-text').html('-&nbsp;全部文章&nbsp;-');\r\n                            $('.bottom h5').html('暂无更多文章了 O__O \"…').css({\r\n                                'background': '#fff',\r\n                                'color': '#999'\r\n                            });\r\n                        }\r\n                    }).catch(e => {\r\n                        this.loading_css = '';\r\n                        $('#view-text').html('-&nbsp;所有文章&nbsp;-');\r\n                        $('.bottom h5').html('暂无更多文章了 O__O \"…').css({\r\n                            'background': '#fff',\r\n                            'color': '#999'\r\n                        });\r\n                    })\r\n            }\r\n        },\r\n        filters: {\r\n            link_page: function(cate_id) {\r\n                if (cate_id == this.cate_fre) {\r\n                    return '添加于 ';\r\n                } else if (cate_id == this.cate_wor) {\r\n                    return '创造于 ';\r\n                } else {\r\n                    return '';\r\n                }\r\n            },\r\n            link_style: function(cate_id) {\r\n                if (cate_id == this.cate_fre || cate_id == this.cate_wor){\r\n                    return 'display: flex';\r\n                } else {\r\n                    return '';\r\n                }\r\n            }\r\n        }\r\n    });\r\n\r\n\r\n}\n\n//# sourceURL=webpack:///./src/tag.js?");

/***/ })

/******/ });