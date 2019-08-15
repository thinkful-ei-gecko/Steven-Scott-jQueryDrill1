$('.thumbnail').on('click', e => {

    $('.hero img').attr('src', $(e.target).attr('src'));
    $('.hero img').attr('alt', $(e.target).attr('alt'));
});

$('.thumbnail').on('keydown', e => {
    if (e.key === 'Enter') {
        $('.hero img').attr('src', $(e.target).attr('src'));
        $('.hero img').attr('alt', $(e.target).attr('alt'));
    }

})