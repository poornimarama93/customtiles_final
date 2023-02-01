sap.ui.define(["tutorial/launchpage/controller/BaseController"], function (Controller) {
    "use strict";
    /* global , hasher */
    return Controller.extend("tutorial.launchpage.controller.MainView", {
        onInit: function() {
            const self=this;
            const oComponentData=self.getOwnerComponent().getComponentData();
            self._oProperties=(oComponentData && oComponentData.properties)
            ?oComponentData.properties
            :
            {
                targetURL:"#"
            };
        },
        onPress: function(){
            const sTargetUrl='#uimodule-display?sap-ui-app-id-hint=saas_approuter_tutorial.newproducts';
            if (sTargetUrl) {
                if (sTargetUrl[0] === "#") {
                   hasher.setHash(sTargetUrl);
                } else {
                    window.open(sTargetUrl,"_blank");
                }
            }
        },
    });
});
