trigger Helloworldtrigger on Account (before insert) {
    for(Account a : trigger.new){
        a.Description = 'New data';
    }
    

}