public with sharing class OfferCreation {

   @AuraEnabled
  public static void getOpportunity(String selectedOption,Id recordId){                                                                                                             
      system.debug('selectedOption'+selectedOption);
      system.debug('****RecordID*****'+recordId);
     List <Opportunity> oppList = new List <Opportunity>();
     if(selectedOption == 'Lumpsum one Time'){
      oppList = [select Id,	Name, AccountId,StageName,Type from Opportunity where Id =: recordId limit 1 ];
      offer__c off1 = new offer__c();
      off1.Offer_Name__c = oppList[0].Name;
      Database.insert(off1);
     
     }
         
    }
  
}