function handleThumbnailClick() {

    $('.thumbnail').on('click', function(event) {

        const imgSrc = $(this).find('img').attr('src');
        const imgAlt = $(this).find('img').attr('alt');
        $('.hero img').attr('src', imgSrc).attr('alt', imgAlt);


        //original code - worked for mouse clicks, did not work with tab/enter
        // $('.hero img').attr('src', $(e.target).attr('src'));
        //$('.hero img').attr('alt', $(e.target).attr('alt'));
    });
}

$(handleThumbnailClick)