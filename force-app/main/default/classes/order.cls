public with sharing class order {
public String Order_Details{get;set;}

    public order(ApexPages.StandardController controller) {

    }
    public PageReference save(){
    PageReference pgref=new PageReference('/apex/orderdetails1');
    Order_Details=Apexpages.currentpage().getParameters().get('id');
    pgref.setRedirect(true);
    return pgref;
    }

}