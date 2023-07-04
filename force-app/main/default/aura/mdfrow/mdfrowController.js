({
   
    doInit : function(component, event, helper) {
        var value = helper.getParameterByName(component , event, 'inContextOfRef');
        var context = JSON.parse(window.atob(value));
        component.set("v.parentRecordId", context.attributes.recordId);
        helper.createObjectData(component, event);
        var action = component.get("c.saveMdf1");
        var ParAttValue = component.get('v.parentRecordId');
        
        action.setParams({
            ParAttValue: ParAttValue
        });
        action.setCallback(this, function(response) {
            
            var state = response.getState();
            
            if (state === "SUCCESS") {
                component.set('v.opptyId',response.getReturnValue());
                console.log(component.get("v.opptyId"));
            }
            else{
                console.log('error');
            }
        });
        $A.enqueueAction(action);
    },
    
    Save: function(component, event, helper) {
        // first call the helper function in if block which will return true or false.
        // this helper function check the "Mdf Amount" will not be blank on each row.
       
        var mdfdata = component.get("v.mdfList");
        
        console.log(JSON.stringify(mdfdata));
        var mdfdata = component.get("v.mdfList");
        for(var i = 0; i < mdfdata.length; i++){
            mdfdata[i].Opportunity__c = component.get('v.parentRecordId');
        }
        console.log(JSON.stringify(mdfdata));
        if (helper.validateRequired(component, event)) {
            // call the apex class method for save the mdf List
            // with pass the mdf List attribute to method param.  
            var action = component.get("c.saveMdf");
            action.setParams({
                "mdfList": mdfdata
            });
            // set call back 
            action.setCallback(this, function(response) {
                var state = response.getState();
                if (state === "SUCCESS") {
                    // if response if success then reset/blank the 'mdfList' Attribute 
                    // and call the common helper method for create a default Object Data to MDF List 
                    component.set("v.mdfList", []);
                    helper.createObjectData(component, event);
                   // alert('record Save');
                }
                else{
                    var errors = response.getError();
                    Console.log(JSON.stringify(errors));
                }
            });
            // enqueue the server side action  
            $A.enqueueAction(action);
            
         var toastEvent = $A.get("e.force:showToast");
          toastEvent.setParams({
          "title": "Success!",
          "message": "The records are saved successfully.",
          "type": 'success'
        });
        toastEvent.fire();

        var parentId = component.get('v.parentRecordId');
        var urlEvent = $A.get("e.force:navigateToURL");       
        urlEvent.setParams({
            "url":"/lightning/r/Opportunity/"+parentId+"/related/MDF_Investments__r/view"
            //"url":"/lightning/r/Opportunity/0061D00000EPWTcQAP/related/MDF_Categorys__r/view?ws=%2Flightning%2Fr%2FOpportunity%2F0061D00000EPWTcQAP%2Fview"
        });
        urlEvent.fire();
        };
       
   
 },
  
    Cancel: function(component, event, helper){
        var parentId = component.get('v.parentRecordId');
        console.log(parentId);
        var urlEvent = $A.get("e.force:navigateToURL");
        urlEvent.setParams({
              "url":"/lightning/r/Opportunity/"+parentId+"/related/MDF_Investments__r/view"
            //"url":"/lightning/r/Opportunity/0061D00000EPWTcQAP/related/MDF_Categorys__r/view?ws=%2Flightning%2Fr%2FOpportunity%2F0061D00000EPWTcQAP%2Fview"
        });
        urlEvent.fire();
        
    },
    
    
    
    
    addNewRow: function(component, event, helper) {
        
        helper.createObjectData(component, event);
    },
    
    // function for delete the row 
    removeDeletedRow: function(component, event, helper) {
        // get the selected row Index for delete, from Lightning Event Attribute  
        var index = event.getParam("indexVar");
        // get the all List (mdfList attribute) and remove the Object Element Using splice method    
        var AllRowsList = component.get("v.mdfList");
        AllRowsList.splice(index, 1);
        // set the contactList after remove selected row element  
        component.set("v.mdfList", AllRowsList);
    },
})