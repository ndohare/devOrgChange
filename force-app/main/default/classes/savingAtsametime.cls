public with sharing class savingAtsametime {
 

    public savingAtsametime(ApexPages.StandardController controller) {

    }
    public PageReference next(){
    PageReference pg=new PageReference('/apex/contact');
    pg.setRedirect(true);
    return pg;
    }
    public PageReference save(){
    PageReference pg=new PageReference('/apex/opportuniti');
    pg.setRedirect(true);
    return pg;
    }
   
}