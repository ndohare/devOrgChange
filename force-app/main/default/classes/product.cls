public with sharing class product {
public string product{get;set;}

    public product(ApexPages.StandardController controller) {

    }
    public  PageReference save(){
    PageReference pgref=new PageReference('/apex/page12');
    product=Apexpages.currentpage().getParameters().get('id');
    pgref.setRedirect(true);
    return pgref;
    }

}