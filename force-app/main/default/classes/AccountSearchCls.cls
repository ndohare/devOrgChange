public with sharing class AccountSearchCls {
    @AuraEnabled(cacheable=true)
    public static List<Account> getAccounts(String actName){
         String keystring = '%'+actName+'%';
         List<Account> acct = new List<Account>();
         acct = [select id,name from Account where name like:keystring];
         return  acct;
    }
}