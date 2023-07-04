({
    
    
    getParameterByName: function(component, event, name) {
        name = name.replace(/[\[\]]/g, "\\$&");
        var url = window.location.href;
        var regex = new RegExp("[?&]" + name + "(=1\.([^&#]*)|&|#|$)");
        var results = regex.exec(url);
        if (!results) return null;
        if (!results[2]) return '';
        return decodeURIComponent(results[2].replace(/\+/g, " "));
    },
    
    createObjectData: function(component, event) {
        // get the mdfList from component and add(push) New Object to List  
        var RowItemList = component.get("v.mdfList");
        RowItemList.push({
            'sobjectType': 'MDF_Investment__c',
            'MDF_Amount__c': '',
            'Name': '',
            'Planning_Level__c':'',
            'Opportunity__c': ''
        });
        
        // set the updated list to attribute (mdfList) again    
        component.set("v.mdfList", RowItemList);
        
    },
    // helper function for check if MDF_Amount__c is not null/blank on save  
    validateRequired: function(component, event) {
        var isValid = true;
        var allMdfRows = component.get("v.mdfList");
        for (var indexVar = 0; indexVar < allMdfRows.length; indexVar++) {
            if (allMdfRows[indexVar].MDF_Amount__c == '') {
                isValid = false;
                alert('MDF_Amount__c Can\'t be Blank on Row Number ' + (indexVar + 1));
            }
        }
        console.log(component.get("v.mdfList"));
        return isValid;
    },
})