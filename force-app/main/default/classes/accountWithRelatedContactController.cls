public with sharing class accountWithRelatedContactController {
    
    @AuraEnabled(cacheable=true)
    public static List<Account> getAccountWithRelatedContact(){
       return[Select Id,Name,Phone,AccountNumber from Account limit 10 ];
    }
}