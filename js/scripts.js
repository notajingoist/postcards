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
        var $el = $(e.currentTarget);
        $el.addClass('hide');
        var id = $el.attr('id').slice(0,2);
        $('#'+id+'b').removeClass('hide');
    },

    showFront: function(e) {
        var $el = $(e.currentTarget);
        $el.addClass('hide');
        var id = $el.attr('id').slice(0,2);
        $('#'+id+'f').removeClass('hide');
    }
};

SITE.init();
