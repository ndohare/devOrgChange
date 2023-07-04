trigger addproduct on Product__c (before insert,before update){
    list<Product__c> plis=Trigger.new;
    for(Product__c pro:plis){
        if(pro.Category__c!='industry'){
           pro.Category__c='industry';
        }
    }
}