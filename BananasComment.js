var log = function() {
    console.log.apply(console, arguments)
}

var init = function(img, name) {
    window.userProfilePic = img
    window.username = name
}

var templateOfComment = function(name, img, data, time) {
    var t = `
        <div class="comment-i">
            <img class="comment-img-head" src=${img} alt=${name}head/>
            <div class="comment-content">
                <span>${name} :</span>
                <span>${data}</span>
                <span class="comment-time">${time}</span>
            </div>
        </div>
    `
    return t
}

var timeOfNow = function() {
    var d = new Date()
    var mon = d.getMonth() + 1
    var day = d.getDate()
    var min = d.getHours() + ':' + d.getMinutes()
    var time = mon + '月' + day + '日 ' + min
    return time
}

var addComment = function(data, name, img) {
    var time = timeOfNow()
    var t = templateOfComment(name, img, data, time)
    $('.allComments').prepend(t)
}

var bindEventNumbers = function() {
    $('#id-input-comment').on('keyup', function(){
        var data = $(this).val()
        var len = 140 - data.length
        $('#id-span-font').text(len)
    })
}

var bindEventAdd = function() {
    $('#id-button-add').on('click', function(){
        var data = $('#id-input-comment').val()
        var name = window.username
        var img = window.userProfilePic
        addComment(data, name, img)
    })
}

var bindEvents = function() {

    bindEventNumbers()

    bindEventAdd()
}

var __main = function(img='profilePic/bananas.jpg', name='BigBananas') {
    init(img, name)
    bindEvents()
}

var addUser = __main
