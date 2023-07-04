trigger deletechildrecord on Recipe__c (before delete){
    set<ID> sid=new set<ID>();
    List<Recipe__c> ri=[select id from Recipe__c where id IN:Trigger.OldMap.keyset()];
    for(Recipe__c r:ri){
        sid.add(r.id);
    }
    List<Recipe_Ingredient__c> riv=[select id,recipe_name__r.id from recipe_ingredient__c where recipe_name__r.id in:sid];
    System.debug(ri);
    delete riv;

}