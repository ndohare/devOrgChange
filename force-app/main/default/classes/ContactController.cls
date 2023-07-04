public with sharing class ContactController {
    
    @AuraEnabled
    public Static List<Schema.Contact> getContacts(Integer limitSize, Integer offset) {

        List<Schema.Contact> contacts = [SELECT Id,Name,Phone,Email,Mailingcity From Contact 
                                                        LIMIT :limitSize
                                                        OFFSET :offset];
        return contacts;

    }
}