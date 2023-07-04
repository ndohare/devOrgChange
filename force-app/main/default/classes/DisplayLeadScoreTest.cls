@isTest
public class DisplayLeadScoreTest {
    @isTest
    Public static Void TestMethod1(){
        List<Lead> lstLead= new List<Lead>();
       lstLead = TestDataFactory.createLeadData(5);
        
        Test.StartTest();
        DisplayLeadScore.DisplayLeadScoreMethod();
        Test.StopTest();
    }
    

}