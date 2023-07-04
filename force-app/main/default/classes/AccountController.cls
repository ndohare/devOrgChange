public with sharing class AccountController {
private  Id accountId=null;
private Account accountObj=null;
public AccountController(){
accountId=ApexPages.currentPage().getParameters().get('id');
accountObj=(accountId==null)?new Account():[select name,accountnumber,industry,billingstreet from account where Id=: accountId];
}


    public Account getAccountObj(){
    if(accountObj!=null){
    return accountObj;
    }
        return null;
    }
    
    public PageReference save(){
    /*try{
    upsert(accountObj);
    }
    catch(System.DMLException e){
    ApexPages.addMessages(e);
    return null;
    }*/
    PageReference page = new
    PageReference('/apex/contactviewpage?id=' +accountId);
    return page;
    }
    
    public PageReference cancel(){
    PageReference page = new
    PageReference('/apex/accountviewpage?id=' +accountId);
    return page;
    }

}