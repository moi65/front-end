'use strict';

function w(msg) {
    console.log(msg);
}

function _alert(msg) {
    w(msg);
}

//w("************************");

// ====================================

$(document).ready(function () {

    $("#autocomplete").addClear();

    if (typeof jQuery == 'undefined') {
        // jQuery is not loaded
        w("jQuery is not loaded");
    } else {
        // jQuery is loaded
        console.log("La version de JQuery est la " + $.fn.jquery);
    }

    // ====================================

    // ====================================

    // Load 3

    console.log("__Load 3________");

    var tagsEn = new Array();
    var tagsFr = new Array();
    var cnt = 0;

    $.getJSON("js/Phrases-EnFr.min.json", {}).done(function (phrases) {
            /* loop through array */
            $.each(phrases, function (key, val) {
                //$("#resultJson").append('<li>' +key+ ' | ' + val + '</li>');

                //$("#resultJson").append('<li>' + key + '</li>');

                var fr = val.toString().replace(/\s/g, '&#160;');
                $("#resultJson").append("<li><a data-toggle='tooltip' title=" + fr + ">" + key + "</a></li>");

                tagsFr.push(phrases[key][0]);
                // tags français
                //console.log(cnt);
                cnt += 1;
                //console.log(key); // anglais
                tagsEn.push(key);
                // tags anglais
                //console.log(val);
            })

            console.log(phrases['Non c\'est la première fois.']);
            // undefined
            console.log(phrases['I\'m sorry we\'re sold out.']);

            $("#taFr").val(tagsFr.join(' \n'));
            $("#taEn").val(tagsEn.join('\n'));

            $("#info").html("Il y à " + cnt + " phrases en tout!");

        })
        //== Autocomplete ============================================

    $("#autocomplete").autocomplete({
        open: function (e, ui) {
            //  create the scrollbar each time autocomplete menu opens/updates
            $(".ui-autocomplete").mCustomScrollbar({
                setHeight: 300,
                theme: "dark-thick",
                autoExpandScrollbar: true,
                autoFocus: true
            });
        },
        response: function (e, ui) {
            $('#result').html(ui.content.length);

            // destroy the scrollbar after each search completes,  	before the menu is shown
            $(".ui-autocomplete").mCustomScrollbar("destroy");
        },
        select: function (event, ui) {
            var msg = ui.item ? "Selected: " + ui.item.value : "Nothing selected, input was " + this.value;
            $('#wrap').html(msg);
            $(".chat").append("<li>" + msg + "</li>");
            $(".panel-body").animate({
                scrollTop: $(".chat").height()
            }, 1000);

        },
        close: function (e, ui) {
            // destroy the scrollbar each time autocomplete menu closes
            $(".ui-autocomplete").mCustomScrollbar("destroy");
            $("#state").html("closed.");
            $('#result').html(0);
        },
        focus: function (evt, ui) {
            var txtbx = $(this).parent().prev().text();
            $("#state").html("focused:" + txtbx);

        },
        source: function (request, response) {
            //_log("source:" + request.term);
            var matcher = new RegExp("^" + $.ui.autocomplete.escapeRegex(request.term), "i");

            // TAGS ....
            response($.grep(tagsEn, function (item) {
                //w(">"+matcher.test(item));
                return matcher.test(item);
            }));
        }
    });

    $("#autocomplete").focus(function () {
        $("#autocomplete").val("");
    });

    //========================================

    var currentDate = new Date();
    currentDate = JSON.stringify(currentDate);
    w(currentDate);

    //Now currentDate is in a different format... oh gosh what do we do...

    currentDate = new Date(JSON.parse(currentDate));
    w(currentDate);

    //Now currentDate is back to its original form :)

});