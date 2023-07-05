public with sharing class ContactController {
    //method is to retrieve all the contacts
    @AuraEnabled
    public Static List<Schema.Contact> getContacts(Integer limitSize, Integer offset) {

        List<Schema.Contact> contacts = [SELECT Id,Name,Phone,Email,Mailingcity From Contact 
                                                        LIMIT :limitSize
                                                        OFFSET :offset];
        return contacts;

    }
}