public class NewCaseListController{
    public List<Case> getNewCases(){
        List<Case> results=DataBase.query(
            'Select Id, caseNumber from case where status=\'New\'');
         return results;
}
}