public class DisplayLeadScore {
    
    public static List<Lead> DisplayLeadScoreMethod(){
        List<Lead> lstlead = new List<Lead>();
            lstlead=[select Id,Name from Lead Limit 49999];
         return lstlead;
    }

}