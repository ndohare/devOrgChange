public class AccountUtility {
    public static void viewAnnualRevenue(){
        List<Account> accountsList = [Select Name,AnnualRevenue From Account];
        for(Account acc : accountsList){
            String acctRev = acc.Name + ':' + acc.AnnualRevenue;
            System.debug(acctRev);
       }
   }
}