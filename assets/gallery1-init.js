
jQuery(document).ready(function () {
    jQuery("#gallery1").unitegallery({
        gallery_width: "100%",
        theme_gallery_padding:"80",
        theme_enable_navigation: false,
        lightbox_type: "compact",
        tile_enable_border: false,
        // tiles_type:"nested",
        tiles_type:"justified",

        tile_enable_textpanel: false,
        tile_textpanel_title_text_align: "center",
        // textpanel_enable_description: true,
    });
});

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.materialboxed');
    var instances = M.Materialbox.init(elems, {});
});