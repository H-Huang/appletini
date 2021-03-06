var color_thief = new ColorThief();

var recolorBackground = function($album_cover) {
    var rgb = color_thief.getColor($album_cover),
        color_string = 'rgb(' + rgb[0] + ',' + rgb[1] + ',' + rgb[2] + ')';

    $($album_cover).parents('.album').css('background-color', color_string);
};

$('.albums').imagesLoaded(function() {
    Array.prototype.forEach.call($('.album-artwork'), function($a) {
        recolorBackground($a);
    });
});

// AJAX review loading:
$('.album').click(function() {
    var $this = $(this),
        $review_loaded = $this.attr('data-review-loaded');

    if ($review_loaded === 'false') {
        $.ajax({
            url: 'reviews?url=' + $this.attr('data-review-url'),
            success: function(response) {
                $this.attr('data-review-loaded', 'true')
                $this.children('.album-review').append(response.content)
                toggleAlbumReview($this);
            }
        });

        return;
    }

    toggleAlbumReview($this);
});

function toggleAlbumReview($album) {
    $review = $album.children('.album-review');

    // If about to show the review, hide all other open reviews:
    if ($review.is(':hidden')) {
        $('.album-review').hide();
    }

    $review.toggle();
}
