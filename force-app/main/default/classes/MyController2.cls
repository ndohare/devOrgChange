public with sharing class MyController2 {
public String getName(){
        return 'Savings';
    }
public Account getAccount(){
        return [select id, name from Account where id = :ApexPages.currentPage().getParameters().get('id')]; 
    } 

}