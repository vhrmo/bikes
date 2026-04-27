function getWidth() {
    return Math.max(
        document.body.scrollWidth,
        document.documentElement.scrollWidth,
        document.body.offsetWidth,
        document.documentElement.offsetWidth,
        document.documentElement.clientWidth
    );
}

$(document).ready(function () {
    let count = Math.floor(getWidth() / 200);
    if (count < 3) {
        count = 3;
    }
    let carousel_space_between_tiles = 4;
    let tileSize = Math.floor((getWidth() - 10 - (carousel_space_between_tiles * count)) / count);
    // console.log("width", getWidth(), "tileSize", tileSize, "count", count, "calcTotal", count * tileSize)
    $(".carousel").each(function () {
        $(this).unitegallery({
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
    })
});


$(document).ready(function () {
    $(".gallery").each(function () {
        $(this).unitegallery({
            // gallery_width: "100%",
            //theme_gallery_padding:"80",
            theme_enable_navigation: false,
            lightbox_type: "compact",
            tile_enable_border: false,
            // tiles_type:"nested",
            tiles_type: "justified",

            tile_enable_textpanel: false,
            tile_textpanel_title_text_align: "center",
            // textpanel_enable_description: true,
        })
    });
});

$(document).ready(function () {
    $(".video-gallery").each(function () {
        $(this).unitegallery({
            gallery_theme: "video"
            // //theme_gallery_padding:"80",
            // theme_enable_navigation: false,
            // lightbox_type: "compact",
            // tile_enable_border: false,
            // // tiles_type:"nested",
            // tiles_type: "justified",
            //
            // tile_enable_textpanel: false,
            // tile_textpanel_title_text_align: "center",
            // textpanel_enable_description: true,
        })
    });
});


document.addEventListener('DOMContentLoaded', function () {
    if (!window.M || !M.Materialbox) {
        return;
    }

    var elems = document.querySelectorAll('.materialboxed');
    M.Materialbox.init(elems, {});
});

document.addEventListener('DOMContentLoaded', function () {
    if (window.M && M.Collapsible) {
        var collapsibles = document.querySelectorAll('.collapsible.expandable');
        M.Collapsible.init(collapsibles, {
            accordion: false
        });

        collapsibles.forEach(function (element) {
            var instance = M.Collapsible.getInstance(element);
            Array.from(element.children).forEach(function (_, index) {
                instance.open(index);
            });
        });

        function expandHashTarget(hash) {
            if (!hash || !hash.startsWith('#year-')) {
                return;
            }

            var target = document.querySelector(hash);
            if (!target) {
                return;
            }

            var parent = target.closest('.collapsible');
            if (!parent) {
                return;
            }

            var instance = M.Collapsible.getInstance(parent);
            var items = Array.from(parent.children);
            var index = items.indexOf(target);
            if (instance && index >= 0) {
                instance.open(index);
            }
        }

        document.querySelectorAll('a[href^="#year-"]').forEach(function (link) {
            link.addEventListener('click', function () {
                expandHashTarget(link.getAttribute('href'));
            });
        });

        expandHashTarget(window.location.hash);
    }

    document.querySelectorAll('.race-table tbody tr').forEach(function (row) {
        var resultCell = row.querySelector('td:last-child');
        if (!resultCell) {
            return;
        }

        var text = resultCell.textContent.trim().toLowerCase();
        resultCell.classList.add('result-cell');

        if (!text) {
            resultCell.classList.add('status-future');
            resultCell.innerHTML = '<span class="status-pill">Plánované</span>';
            return;
        }

        if (text.includes('zrušen')) {
            resultCell.classList.add('status-cancelled');
            return;
        }

        if (text.includes('vynechan') || text.includes('nedokončen') || text.includes('absolvovaný len tréning')) {
            resultCell.classList.add('status-skipped');
            return;
        }

        resultCell.classList.add('status-completed');
    });
});
