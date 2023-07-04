public with sharing class getAccountController {

    @AuraEnabled(cacheable=true)
    public static LIst<Account> getAccounts(){
        return [select Id,Name, Phone from Account limit 10];
    }

}