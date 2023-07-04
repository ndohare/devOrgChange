public class AccountProcessor {
    @future
    public static void countContacts (List<ID> accountIDs ){
        List<Account> accounts = [select account.name, account.Number_of_Contacts__c from account where ID IN :accountIDs];
        for (Account acct : accounts){
            Integer count = [SELECT COUNT() FROM Contact, Contact.Account where Account.ID = :acct.ID];
            acct.Number_of_Contacts__c = count;
            System.debug('Count of Contact: ' + count + ' for accountID ' + acct.ID);    
        }
        update accounts;
        System.debug('Accounts: ' + accounts);
    }
}