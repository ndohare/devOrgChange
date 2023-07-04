trigger ClosedOpportunityTrigger on Opportunity (after insert,after update){
    list<Task> tasklist=new list<Task>();
    for(Opportunity opp:trigger.new){
        if(opp.StageName== 'Closed Won'){
        if(Trigger.isInsert || Trigger.isUpdate)
            tasklist.add(new Task(Subject='Follow Up Test Task',
                                 WhatId=opp.Id));
        }
        
    }
    
    if(tasklist.size()>0){
        insert tasklist;
    }
}