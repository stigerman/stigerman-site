$(document).ready(function () {
    $.getJSON('data/product.json', function (products) {
        console.log("yolo");

        // initUI();
        // showProducts(products);

        // var dropdown =$('<div/>').addClass('dropdown');
        // var button = $('<button/>').addClass("btn btn-primary dropdown-toggle").attr('type','button').attr('data-toggle','dropdown');
        // var all = $(dropdown).append(button);
        // $(all).appendTo('<body/>')

        $('#search-button').click(function () {
            $('.productDiv').empty();
            var target = document.getElementById("user-input").value;
            var newProducts = reduceSearch(products, target);
            createProductList(newProducts);
            event.preventDefault();
        });


        $('#phone').click(function () {
            $('.productDiv').empty();
            event.preventDefault();
            var newProducts = _.filter(products, {
                'type': 'phone'
            });
            createProductList(newProducts);
        });

        $('#case').click(function () {
            $('.productDiv').empty();
            event.preventDefault();
            var newProducts = _.filter(products, {
                'type': 'case'
            });
            createProductList(newProducts);
        });

        // $('#price').click(function(){
        //     $('.productDiv').empty();
        //     var newProducts =_.filter(products, function(val){
        //       return val.price > 250;

        //     });
        //     createProductList(newProducts);
        // });

        $('#all').click(function () {
            event.preventDefault();

            $('.productDiv').empty();
            createProductList(products);

        });

        function maximo(numArray) {
            return Math.max.apply(null, numArray);
        }

        // var getPrice = _.map(products, function(product){
        //     var price  = product.price;
        //     console.log( price);
        //     });


        (function () {

            var parallax = document.querySelectorAll(".jumbotron"),
                speed = 0.2;

            window.onscroll = function () {
    [].slice.call(parallax).forEach(function (el, i) {

                    var windowYOffset = window.pageYOffset,
                        elBackgrounPos = "50% " + (windowYOffset * speed) + "px";

                    el.style.backgroundPosition = elBackgrounPos;

                });
            };

        })();




        // $('#highest').click(function(){
        //         event.preventDefault();
        //     $('.productDiv').empty();
        //   var newProd = console.log(maximo(getPrice));
        //     createProductList(newProd);

        // });
        // $('#above600').click(function(){
        //     $('.productDiv').empty();
        //     var newProducts =_.filter(products, function(val){
        //       return val.price > 600;

        //     });
        //     createProductList(newProducts);
        // });

        // $('#below100').click(function(){
        //     $('.productDiv').empty();
        //     var newProducts =_.filter(products, function(val){
        //       return val.price < 100;

        //     });
        //     createProductList(newProducts);
        // });

        function createProductList(array) {
            var meh
            var newUnorderedList = $('<ul/>').addClass('product-card');
            _.map(array, function (val) {
                var li = createProductListItem(val);
                $(li).appendTo(newUnorderedList);
                meh = $(newUnorderedList).appendTo('section').addClass('productDiv');
            })
            return meh;
        }

        function createImage(key) {
            var newImage = $('<img/>').attr('src', key).addClass('img-responsive');
            var a = $('<a>')
                .addClass('img-product')
                .append(newImage);
            return a;
            // var a = document.createElement('a');
            // $(a).attr('href', '#').attr('id', 'blah'); //WHY doesn't this event get handled and its an anchor tag?
            // return $(a).append(newImage);
        }


        function productDetails(product) {
            var largeImage = $('<img/>').attr('src', product).addClass('big-image');
            return largeImage;
        }


        function lightbox(product) {
            var imageCreation = createImage("img/product/thumbs/" + 'edge-gold.jpg');
            $('.box').append(imageCreation);
        }

        $('.close').click(function () {
            close_box();
            event.preventDefault();

        });

        function close_box() {
            $('.backdrop, .box').animate({
                'opacity': '0'
            }, 300, 'linear', function () {
                $('.backdrop, .box').css('display', 'none');
            });

        }


        function createProductListItem(product) {
            var div = $('<div/>').addClass('prodPrice');
            var priceAdd = $('<p/>').append('$' + product.price)
            var descAdd = $('<p/>').append(product.desc)

            var imageCreation = createImage("img/product/" + product.image);
            $(div).append(imageCreation).append(priceAdd);
            var newListItem = $('<li/>').addClass('list').append(div);
            return newListItem;
        }




        $(window).scroll(function () {

            /* Check the location of each desired element */
            $('.list').each(function (i) {

                var bottom_of_object = $(this).offset().top + $(this).outerHeight();
                var bottom_of_window = $(window).scrollTop() + $(window).height();

                /* If the object is completely visible in the window, fade it it */
                if (bottom_of_window > bottom_of_object) {

                    $(this).animate({
                        'opacity': '1'
                    }, 900);

                }

            });

        });





        createProductList(products);
        
        $(".img-product").click(function () {
            event.preventDefault();
            console.log('handler called');
            var imgWrapper = createImage("img/product/" + 'galaxy6-gold.jpg');

            $('.backdrop, .box').animate({
                'opacity': '.50'
            }, 50, 'linear');
            $('.box').animate({
                'opacity': '1.00'
            }, 50, 'linear');
            $('.backdrop, .box').css('display', 'block');
            $('.box').append(imgWrapper);
        });

    });
});


function reduceSearch(collection, target) {
    return _.reduce(collection, function (summary, value) { // function is the summary within redce
        if (isComplex(value)) {
            if (reduceSearch(value, target).length) {
                summary.push(value);
            }
        } else if (typeof value === 'string') {
            if (value.toLowerCase().indexOf(target.toLowerCase()) > -1) {
                summary.push(value);
            }
        }
        return summary;
    }, []);
}

function isComplex(value) {
    if (value === null) {
        return false;
    }
    if (value instanceof Date === true) return false;

    if (typeof value !== 'object') return false;

    return true;
}