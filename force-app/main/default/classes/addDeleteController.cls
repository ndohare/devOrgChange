public with sharing class addDeleteController{
   @AuraEnabled
    public static void saveContacts(List<SObject> ListContact){
      Insert ListContact;
     // Database.insert(ListContact);
    }
      
}