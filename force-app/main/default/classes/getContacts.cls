public with sharing class getContacts {
    public Static List<Schema.Contact> getContacts(Integer limitSize, Integer offset) {

        List<Schema.Contact> contacts = [SELECT Id,Name,Phone,Email From Contact 
                                                        LIMIT :limitSize
                                                        OFFSET :offset];
        return contacts;

    }
}