public with sharing class AccountController1 {

    @AuraEnabled(cacheable=true)
    public static List<Account> getAccounts(){
        List<Account> acc = new List<Account>();
        acc = [select id,name,phone,industry from Account limit 10];
        return acc;
  }
}