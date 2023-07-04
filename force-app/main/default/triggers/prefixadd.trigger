trigger prefixadd on Lead (before insert,before update) {
List<Lead> leadList=trigger.new;
    for(lead l:leadList)
    {
        l.FirstName='Dr ' + l.FirstName;
    }
}