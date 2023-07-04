@isTest
public class TestVerifyDate {
   @isTest
    static void TestMethod1(){
        VerifyDate.CheckDates(System.today(),System.today());
        VerifyDate.CheckDates(System.today(),System.today().addDays(78));
    }
}