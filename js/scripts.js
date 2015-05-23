var SITE = {
    init: function() {
        this.setVars();
        this.bindEvents();
    },

    setVars: function() {
        this.$window = $(window);
        this.$document = $(document);
        this.$body = $('body');
        this.$postcardFront = $('.postcard-front');
        this.$postcardBack = $('.postcard-back');
    },

    bindEvents: function() {
        this.$postcardFront.on('mouseenter', this.showBack.bind(this));
        this.$postcardBack.on('mouseleave', this.showFront.bind(this));
    },

    showBack: function(e) {
        $el = $(e.currentTarget);
        $el.addClass('hide');
        var id = $el.attr('id')[0];
        $('#'+id+'b').removeClass('hide');
    },

    showFront: function(e) {
        $el = $(e.currentTarget);
        $el.addClass('hide');
        var id = $el.attr('id')[0];
        $('#'+id+'f').removeClass('hide');
    }
};

SITE.init();
