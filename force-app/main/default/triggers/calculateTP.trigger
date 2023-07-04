trigger calculateTP on Order_details__c (after insert){
    set<ID> sids=new set<ID>();
    list<Product__c> olist=[select id from Product__c where Offer__c != null];

}