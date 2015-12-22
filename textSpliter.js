jQuery(document).ready(function ($) {

    (function ($) {
        $.fn.splitText = function (options) {

            var settings = $.extend({
                wordWrap: '<span class="word" />', // Wrap around splitted words
                charWrap: '<span class="char" />', // Wrap around splitted characters
                splitChars: true // Split characters in words
            }, options || {});

            return this.each(function () {
                var node = this.firstChild,
                    remove = [];

                // Only continue if firstChild exists.
                if (node) {

                    // Loop over all childNodes.
                    do {

                        // Only process text nodes.
                        if (node.nodeType === 3) {

                            var val = node.nodeValue, // The original node value.
                                wrapSpaces = val.match(/(^\s*).+?(\s*$)/i), // save begin and end spacing if present
                                vals = val.trim().split(/\s+/i), // Words in node
                                last = vals.length - 1; // Number of words - 1, since loop starts at 0

                            $.each(vals, function (wordIndex, word) {

                                if (!word.trim()) return true; // Continue loop

                                var newNode = []; // collection of nodes to insert

                                if (wordIndex === 0) {
                                    newNode.push(wrapSpaces[1]); // Add begin spacing
                                }

                                var wordWrap = $(settings.wordWrap); // Wrapping for words

                                if (settings.splitChars) {
                                    var chars = word.match(/./ig),
                                        tempNode = [];
                                    $.each(chars, function (charIndex, char) {
                                        var charWrap = $(settings.charWrap); // Wrapping for chars
                                        tempNode.push(charWrap.append(char)); // Wrapped char and add to temp node
                                    });
                                    wordWrap.append(tempNode); // Add wrapped chars inside wrapped word node
                                } else {
                                    wordWrap.append(word); // Wrap word
                                }
                                newNode.push(wordWrap); // Add wrapped word to new node

                                newNode.push((wordIndex == last) ? wrapSpaces[2] : ' '); // Add end spacing

                                $(node).before(newNode); // Insert new node

                                // Don't remove the node yet, or the loop will lose its place.
                                remove.push(node);

                            });
                        }
                    } while (
                        node = node.nextSibling
                    );
                }

                // Time to remove those elements!
                remove.length && $(remove).remove();
            });
        };
    })(jQuery);



    /* Demo functions to demonstrate usage of splitted text */

    var interval1, interval2;

    var starttime = new Date().getTime(),
        width = $(window).width() - 4;

    function sinewave() {
        var elapsed = new Date().getTime() - starttime;
        var pos = elapsed * 0.1;
        $('.test3 .char').each(function (index, letter) {
            var posx = (pos + 1 * index) % width;
            var posy = 20 + Math.sin(posx / 5) * 5;
            $(letter).css('top', posy + 'px');
        });
    }


    var count = 0,
        words, wcount;

    function highlightWord() {
        console.log(count);
        var word = words[count];
        var wordwidth = $(word).width();
        var pos = $(word).position();
        count++;
        if (count >= wcount) count = 0;
        $('.test4 .word').removeClass('highlightWord');
        $(word).addClass('highlightWord');
    }


    $('#split').on('click', function (e) {
        e.preventDefault();
        $(".wrap *").splitText();
        $(this).css('visibility', 'hidden');
        $('.click').css('visibility', 'hidden');
        $('#sinus, #highlight').css('display', 'inline-block');
    })

    $('#sinus').on('click', function (e) {
        e.preventDefault();
        $(this).css('display', 'none');
        clearInterval(interval1);
        interval1 = setInterval(sinewave, 250);
    })

    $('#highlight').on('click', function (e) {
        e.preventDefault();
        $(this).css('display', 'none');
        words = $('.test4 .word'), wcount = words.length;
        clearInterval(interval2);
        interval2 = setInterval(highlightWord, 500);
    })
});