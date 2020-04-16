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
    var links = document.links;
for (var i = 0, linksLength = links.length; i < linksLength; i++) {
  if (links[i].hostname != window.location.hostname) {
    links[i].target = '_blank';
  } 
}
</script>
<style>
.akismet_comment_form_privacy_notice {
	line-height: 10!important
}
</style>
</main>
</body>

</html>