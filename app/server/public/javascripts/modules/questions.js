define(['can', 'domReady!'], function(can) {
    return can.Control.extend({
        defaults : {
            view : '/javascripts/templates/questions.mustache',
            questions : null
        }
    }, {
        init : function(el, op) {
            op.questions = new can.List([{
                question : 'What weighs more, a ton of bricks or a ton of feathers?',
                votes : 123,
                answered : false
            }, {
                question : "What color is George Washington's white horse?",
                votes : 2,
                answered : false
            }]);

            el.html(can.view(op.view, {
                questions : op.questions
            }));
        },
        'form submit' : function(el, ev) {
            ev.preventDefault();

            this.options.questions.push({
                question : $(el).find('[name=question]').val(),
                votes : 0,
                answered : false
            });
        }
    });
});
