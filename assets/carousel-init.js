function getWidth() {
    return Math.max(
        document.body.scrollWidth,
        document.documentElement.scrollWidth,
        document.body.offsetWidth,
        document.documentElement.offsetWidth,
        document.documentElement.clientWidth
    );
}

jQuery(document).ready(function () {
    let count = Math.floor(getWidth() / 200);
    if (count < 3) {
        count = 3;
    }
    let carousel_space_between_tiles = 4;
    let tileSize = Math.floor((getWidth() - 10 - (carousel_space_between_tiles * count)) / count);
    // console.log("width", getWidth(), "tileSize", tileSize, "count", count, "calcTotal", count * tileSize)
    jQuery("#carousel").unitegallery({
        carousel_padding: 0, // top and bottom padding
        carousel_space_between_tiles: carousel_space_between_tiles,
        theme_enable_navigation: false,
        theme_carousel_offset: 0,
        lightbox_type: "compact",
        tile_enable_border: false,
        tile_width: tileSize,
        tile_height: 0.7 * tileSize,

        tile_enable_textpanel: true,
        tile_textpanel_title_text_align: "center",
        // textpanel_enable_description: true,
    });
});

