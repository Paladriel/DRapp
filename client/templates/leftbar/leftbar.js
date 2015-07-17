/*****************************************************************************/
/* Leftbar: Event Handlers */
/*****************************************************************************/
Template.Leftbar.events({
});

/*****************************************************************************/
/* Leftbar: Helpers */
/*****************************************************************************/
Template.Leftbar.helpers({
	state:function(){
		return Session.get("estado");
	},
	 equals:function(v1, v2) {
        return (v1 === v2);
    }
});

/*****************************************************************************/
/* Leftbar: Lifecycle Hooks */
/*****************************************************************************/
Template.Leftbar.created = function () {
};

Template.Leftbar.rendered = function () {
};

Template.Leftbar.destroyed = function () {
};
