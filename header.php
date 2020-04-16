<!DOCTYPE HTML>
<html <?php language_attributes(); ?>>

<head>
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <meta charset="utf-8">
    <title><?php site_page_title(); ?></title>
    <meta http-equiv="x-dns-prefetch-control" content="on" />
    <link rel="dns-prefetch" href="https://cdn.jsdelivr.net" />
    <meta name="keywords" content="<?php echo get_option('king_gjc'); ?>" />
    <meta name="description" content="<?php echo get_option('king_ms'); ?>">
    <link rel="Shortcut Icon" href="<?php echo get_option('king_ico') ?>" type="image/x-icon" />
    <meta name="viewport" content="width=device-width, initial-scale=1">
<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.3.3/dist/umd/popper.min.js" integrity="sha256-c1uSn1f61GqTIIVhdV3jCb9sO38lvhpsIAJC2kLp1MY=" crossorigin="anonymous"></script>    <script src="https://cdn.jsdelivr.net/npm/instant.page@3.0.0/instantpage.js" integrity="sha256-YpdLLevHetwErswvtZ0svK+oQeKc5aLXGvP0aAnNa0Y=" crossorigin="anonymous" type="module"></script>
    <link type="text/css" rel="stylesheet" href="https://cdn.jsdelivr.net/gh/ffork/tony@5.0.1/css/caomei-cion.min.css">
    <script src="https://cdn.jsdelivr.net/npm/jquery@3.5.0/dist/jquery.min.js" integrity="sha256-xNzN2a4ltkB44Mc/Jz3pT4iU1cmeR0FkXs4pru/JxaQ=" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/axios@0.19.2/dist/axios.min.js" integrity="sha256-T/f7Sju1ZfNNfBh7skWn0idlCBcI3RwdLSS4/I7NQKQ=" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/combine/gh/ffork/tony@5.0.0/js/header.min.js,gh/ffork/tony@5.0.0/js/jquery.goup.min.js"></script>
    <?php echo stripslashes(get_option('king_zztj')); ?>
    <script src="https://cdn.jsdelivr.net/npm/vue@2.6.11/dist/vue.min.js" integrity="sha256-ngFW3UnAN0Tnm76mDuu7uUtYEcG3G5H1+zioJw3t+68=" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/gh/highlightjs/cdn-release@9.18.1/build/highlight.min.js" integrity="sha256-eOgo0OtLL4cdq7RdwRUiGKLX9XsIJ7nGhWEKbohmVAQ=" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/combine/npm/bootstrap@4.4.1/dist/css/bootstrap.min.css,npm/uikit@3.4.0/dist/css/uikit.min.css,gh/highlightjs/cdn-release@9.18.1/build/styles/a11y-dark.min.css,gh/ffork/tony@5.0.2/dist/css/style.min.css"></head>

<body id="body">

    <?php if (!wp_is_mobile()) { ?>
        <header class="tony-header-fixed" id="header-div">
            <?php if (is_single()) { ?>
                <div class="header-div1">
                    <a href="<?php echo site_url() ?>" style="display: inline-block;"><img src="<?php if(get_option('king_logo')) echo get_option('king_logo'); else echo 'https://static.ouorz.com/t.jpg' ?>"></a>
                    <a href="<?php echo site_url() ?>" style="display: inline-block;margin-top: 12px;margin-left: 15px;"><button type="button" class="btn btn-light" style="letter-spacing: 1px;font-weight: 500;">返回首页</button></a>
                    <a style="margin-top: 12px;margin-left: 12px;"><button onclick="open_search();" type="button" class="btn btn-light" style="letter-spacing: 1px;font-weight: 500;">全局搜索</button></a>
                </div>
            <?php } else { ?>
                <div class="header-div1-1">
                    <a href="<?php echo site_url() ?>"><img src="<?php if(get_option('king_logo')) echo get_option('king_logo'); else echo 'https://static.ouorz.com/t.jpg' ?>"></a>
                    <a style="margin-top: 12px;margin-left: 12px;"><button onclick="open_search();" type="button" class="btn btn-light" style="letter-spacing: 1px;font-weight: 500;">全局搜索</button></a>
                </div>
            <?php } ?>
            <!-- 菜单部分 -->
            <div class="header-div2">
                <?php if (get_option('king_nav_pu') !== '') { ?>
                    <a href="<?php echo get_option('king_nav_pu'); ?>"><button type="button" class="btn btn-light" style="letter-spacing: 1px;font-weight: 500;"><?php echo get_option('king_nav_pn'); ?></button></a>
                <?php } ?>

                <!-- 系统菜单部分 -->
                <?php
                    if (get_option('king_nav_display')) {
                        $array_menu = wp_get_nav_menu_items(get_option('king_nav_display'));
                        $menu = array();
                        foreach ($array_menu as $m) {
                            if (empty($m->menu_item_parent)) {
                                ?>
                            <a href="<?php echo $m->url ?>"><button type="button" class="btn btn-light" style="letter-spacing: 1px;font-weight: 500;"><?php echo $m->title ?></button></a>
                <?php }
                        }
                    } ?>
                <!-- 系统菜单部分 -->

                <button type="button" class="btn btn-primary" style="letter-spacing: 1px;font-weight: 600;padding-right: 15px;"><a href="<?php echo get_option('king_abt_url'); ?>" style="text-decoration:none;color:white"><i class="czs-user-l" style="margin-right:5px"></i><?php echo get_option('king_about_text') ? get_option('king_about_text') : '关于我'; ?></a></button>
            </div>
            <!-- 菜单部分 -->
        </header>

    <?php } else { ?>
        <header class="tony-header-fixed" id="header-div">
            <div class="header-div1-1">
                <a href="<?php echo site_url() ?>" class="mob-header-text"><?php echo get_bloginfo('name'); ?></a>
            </div>
            <div class="header-div2" style="padding-top: 12px;">
                <a style="font-size: 1.6rem;color:#333;text-decoration:none" href="<?php echo get_option('king_abt_url'); ?>"><i class="czs-label-info-l"></i></a>
            </div>
        </header>
    <?php } ?>

    <div id="jv-loadingbar"></div>
    <script type="text/javascript">
        $("#jv-loadingbar").show();
        $("#jv-loadingbar").animate({
            width: "20%"
        }, 100);
        $("#jv-loadingbar").animate({
            width: "100%"
        }, 100, function() {
            $("#jv-loadingbar").fadeOut(1000, function() {
                $("#jv-loadingbar").css("width", "0");
            });
        });
    </script>

    <div id="search_form" class="search_form_dis">
        <div class="search-bg-b"></div>
        <div class="search-bg" id="search-div">
            <div class="search-div1">
                <h3>搜索内容<button type="button" class="btn btn-primary" style="font-weight: 600;padding: 4px 14px;font-size: .9rem;margin-top: 6px;margin-left: 10px;float: right;" onclick="close_search();">关闭</button></h3>
                <p>从本站全部内容中搜索所需</p>
                <input class="uk-input" type="text" placeholder="请输入搜索内容后回车Enter..." v-on:keyup.enter="search_query" v-model.trim="search_key">
            </div>
            <div class="search-div2">
                <ul v-if="search_loading">
                    <template v-if="search_content.length !== 0">
                        <li v-for="search in search_content">
                            <a :href="search.link">
                                <h4 v-html="search.title.rendered"></h4>
                                <p v-html="search.post_excerpt.four"></p>
                            </a>
                        </li>
                    </template>
                    <template v-else>
                        <li>
                            <h4 style="color:#777">无匹配文章</h4>
                            <p>请尝试更换搜索词再试试吧...</p>
                        </li>
                    </template>
                </ul>
                <ul v-if="loading_ph">
                    <ul>
                        <li class="search-line" style="padding: 30px;background: #f1f2f3;border: none;"></li>
                        <li class="search-line" style="padding: 30px;background: #f1f2f3;border: none;"></li>
                        <li class="search-line" style="padding: 30px;background: #f1f2f3;border: none;"></li>
                    </ul>
                </ul>
            </div>
        </div>
    </div>

    <script>
        var search_vue = new Vue({
            el: '#search-div',
            data() {
                return {
                    search_content: null,
                    search_key: null,
                    search_loading: false,
                    loading_ph: true,
                    search_open: false
                }
            },
            methods: {
                search_query: function() {
                    this.search_loading = false;
                    this.loading_ph = true;

                    var s = this.search_key;
                    axios.get('<?php echo site_url() ?>/wp-json/wp/v2/posts?search=' + s + '<?php if (get_option('king_index_exclude')) echo '&categories_exclude=' . get_option('king_index_exclude'); ?>')
                        .then(response => {
                            this.search_content = response.data;
                            this.loading_ph = false;
                            this.search_loading = true;
                        })
                }
            }
        })
    </script>
    <main role="main">
        <div class="grid grid-centered" style="<?php if (!is_single() && !is_page()) echo 'padding: 0px 20px;margin-top: 80px;'; ?>">
            <div class="grid-cell" id="grid-cell">