/*****************************************************************************/
/* Contents: Event Handlers */
/*****************************************************************************/
Template.Contents.events({
});

/*****************************************************************************/
/* Contents: Helpers */
/*****************************************************************************/
Template.Contents.helpers({
	state:function(){
		return Session.get("estado");
	},
	 equals:function(v1, v2) {
        return (v1 === v2);
    }
});

/*****************************************************************************/
/* Contents: Lifecycle Hooks */
/*****************************************************************************/
Template.Contents.created = function () {
};

Template.Contents.rendered = function () {
};

Template.Contents.destroyed = function () {
};
