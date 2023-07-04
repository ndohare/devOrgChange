public class ingredient {

    public ingredient() {

    }

public List<Ingredient__c> data{get;set;}

    public ingredient(ApexPages.StandardController controller) {
    data=[select id,ingredient__c.ingredient_name__c,ingredient__c.unit__c from ingredient__c where id=:ApexPages.CurrentPage().getParameters().get('id')];

    }

}