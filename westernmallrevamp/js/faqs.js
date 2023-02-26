"use strict";

jQuery.noConflict();

jQuery(document).ready(() => {
    // On mouseover show hidden css element
    jQuery("#faq_rollovers li h2").mouseover(function () {
        jQuery(this).next(".hidden").show();
    });

    // On mouseout rehide it
    jQuery("#faq_rollovers li h2").mouseout(function () {
        jQuery(this).next(".hidden").hide();
    });
});
