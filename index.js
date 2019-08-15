function handleThumbnailClick() {

    $('.thumbnail').on('click', function(event) {

        const imgSrc = $(this).find('img').attr('src');
        const imgAlt = $(this).find('img').attr('alt');

        console.log(imgSrc, imgAlt);

        $('.hero img').attr('src', imgSrc).attr('alt', imgAlt);

        // $('.hero img').attr('src', $(e.target).attr('src'));
        //$('.hero img').attr('alt', $(e.target).attr('alt'));
    });
}

/*$('.thumbnail').on('keypress', e => {
    if (e.which === 13) {
        $('.hero img').attr('src', $(e.target).attr('src'));
        $('.hero img').attr('alt', $(e.target).attr('alt'));
    }

})*/
$(handleThumbnailClick)