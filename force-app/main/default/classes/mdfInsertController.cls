public class mdfInsertController {
    @AuraEnabled
    public static void saveMdf(List<MDF_Investment__c> mdfList){
        
        Insert mdfList;
    }
    
    @AuraEnabled(cacheable=true)
    public static Opportunity saveMdf1(Id ParAttValue){
        List<Opportunity> oppList = new List<Opportunity>();
        oppList = [select id,Name,stageName,AccountId,CurrencyIsoCode from Opportunity 
                   where id =:ParAttValue limit 1];
        
        return oppList[0];
        
        
    }
    
}