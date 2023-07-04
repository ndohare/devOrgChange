@IsTest
public class AccountProcessorTest {
    @IsTest
    private static void testCountContacts() {
        List<ID> accountIDs = new List<ID> {'0032w00000WRoKz', '0032w00000WRoKk'};
        Test.startTest();
        AccountProcessor.countContacts(accountIDs);
        Test.stopTest();
        for (ID acctID : accountIDs){
        Integer count = [SELECT COUNT() FROM Contact, Contact.Account where Account.ID = :acctID];
            system.debug('Count: ' + count);
            if (acctID == '0032w00000WRoKz'){
                System.assertEquals(0, count);
            }
        }

    }
}