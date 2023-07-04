public class AccountBatchJob implements Database.Batchable<sObject>{

public Database.QueryLocator start(Database.BatchableContext BC) {

String query = 'select id,name,AccountNumber from account';

return Database.getQueryLocator(query);

}
    
public void execute(Database.BatchableContext BC, List<Account> scope) {

for(Account a : scope)

{

a.Name = a.Name + 'Updated';
a.AccountNumber = '12345678';    

}

update scope;

}

public void finish(Database.BatchableContext BC) {

}

}