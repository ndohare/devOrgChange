public class TRiggerHandlerAccountRelated {
    public static void updatePhone(List<Account> newList,Map<Id,Account> oldMap){
        Map<Id,Account> accIdMap = New Map<Id,Account>();
        List<Opportunity> oppList = New List<Opportunity>();
        
        for(Account acc : newList){
            if(oldMap != null && acc.Phone != null){
                accIdMap.put(acc.Id,acc);
            }
        }
        
        List<Opportunity> reltedOpp = [select Id,Name,AccountId from Opportunity where AccountId in:accIdMap.keyset()];
        for(Opportunity opp : reltedOpp){
            Opportunity oppr = New Opportunity();
            if(accIdMap.containsKey(opp.AccountId)){
                oppr.Id = opp.id;
                oppr.Name = 'Anish';
                oppList.add(oppr);
            }
        }
        update oppList;
    }
    
    public static void updateDescrip(List<Account> accList, Map<Id,Account> mapIdAcc){
        for(Account acc : accList){
            if(acc.phone != null && acc.Phone == '67548'){
                acc.Description = 'Account updated with RElated records';
            }
        }
    }
    

}