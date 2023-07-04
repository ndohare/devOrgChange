trigger fieldUpdateOnAccountRElated on Account (before update,after update) {
    if(Trigger.isAfter && Trigger.isUpdate){
        TRiggerHandlerAccountRelated.updatePhone(Trigger.New,Trigger.oldMap);
    }
    if(Trigger.isBefore && Trigger.isUpdate){
        TRiggerHandlerAccountRelated.updateDescrip(Trigger.New, Trigger.oldMap);
    }

}