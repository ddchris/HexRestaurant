let main = new Vue({
    el: '#content',
    data: {
        aside: [{ name: '全部', count: 23 },
        { name: '只愛吃薯條', count: 18 },
        { name: '加熱就可食', count: 1 },
        { name: '不敗漢堡系列', count: 5 },
        ],
        foods: [{
            url: './imgs/product_1.png', title: '經典漢堡大餐',
            en_title: 'Classic Package', price: '$120'
        }, {
            url: './imgs/product_2.png', title: '英俊香腸',
            en_title: 'Handsome Sausage', price: '$1024'
        }, {
            url: './imgs/product_3.png', title: '漢堡兄弟',
            en_title: 'Hamberger Brothers', price: '$792'
        }, {
            url: './imgs/product_4.png', title: '完美願望',
            en_title: 'Dargon Ball Package', price: '$999,999'
        },
        ],
    },

});

$(document).ready(function () {
    $('.main li').mouseenter(function (e) {
        $(this).addClass('animated infinite pulse');
    })
    $('.main li').mouseleave(function (e) {
        $(this).removeClass('animated infinite pulse');
    })
});