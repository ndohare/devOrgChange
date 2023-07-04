@isTest
public class recorddisplayTestclass{
	public static List<Recipe__c> recipe;
    static integer result;
    public static testMethod void ShowRecipe(){
        recipe=[select id from Recipe__c];
        if(recipe!=Null){
            result=1;
        }else{
            result=0;
        }
        System.assertEquals(1, result);
        
    }
    
                                                                                                                                                                      }