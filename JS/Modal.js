// Modal
$(document).ready(function () {
    $('#show-modal').on('click', function () {
        $('.modal').css({ 'visibility': 'visible', 'opacity': '1' });
    });
    $('.modal .modal-box .icon i').on('click', function () {
        $('.modal').css({ 'visibility': 'hidden', 'opacity': '0' });
    });
});
// Modal Ends here