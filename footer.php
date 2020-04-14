<?php if (get_option('king_icp_display') && !!is_home()) { ?>
    <div class="icp-div"><a href="http://www.beian.miit.gov.cn/" target="_blank"><?php echo get_option('king_icp_display') ?></a>
    </div>
<?php } ?>
<footer class="footer reveal" style="<?php if (wp_is_mobile()) echo 'display:none;' ?>">
    <p>Copyright © <?php echo date('Y'); ?> <?php echo get_bloginfo('name'); ?> · Theme Tony | Made with <i class="czs-heart" style="color: rgb(228, 16, 0);font-size: 12px;"></i> by <a href="https://www.ouorz.com" target="_blank">TonyHe</a></p>
</footer>
<script type="text/javascript">
    $(document).ready(function() {
        $.goup({
            trigger: 100,
            bottomOffset: 30, //距底部偏移量 
            locationOffset: 30, //距右部偏移量
        });
    });
</script>
<script type='module' src="https://cdn.jsdelivr.net/combine/npm/jquery@3.5.0,npm/uikit@3.4.0,npm/bootstrap@4.4.1/dist/js/bootstrap.min.js,npm/vue@2.6.11,npm/axios@0.19.2,npm/highlight.js@9.18.1/lib/highlight.min.js,npm/popper.js@1.16.1,npm/instant.page@3.0.0"></script></div>
</main>
</body>

</html>