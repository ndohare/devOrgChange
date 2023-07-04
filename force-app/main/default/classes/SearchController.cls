public with sharing class SearchController {

    public String posresult { get; set; }

    public String getResults() {
        return null;
    }


 public List<Ingredient__c> result { get; set; }
public String searchKey { get; set; }
public String searchQuery;

    public void docancel() {
    if(result!=null)
    result.clear();
    }


    public void dosearch() {
    ApexPages.Message myMsg;
    if(searchKey==' '){
    myMsg=new ApexPages.Message(ApexPages.Severity.ERROR,'Enter key to search');
    ApexPages.addMessage(myMsg);
    }
    else{
    searchQuery = 'select id,Ingredient_Name__c,unit__c from Ingredient__c where Ingredient_Name__c like \'%'+searchKey+'%\' Limit 10';
     result=Database.query(searchQuery);
     
     if(result.size()==0){
     myMsg=new ApexPages.Message(ApexPages.Severity.ERROR,'No records found');
     ApexPages.addMessage(myMsg);
    }

}
}
}