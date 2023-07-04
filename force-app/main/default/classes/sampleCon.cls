public with sharing class sampleCon {

    public PageReference test() {
        return null;
    }
    
     public List<SelectOption> getItems() {
        List<SelectOption> options = new List<SelectOption>(); 
        options.add(new SelectOption('US','US')); 
        options.add(new SelectOption('CANADA','Canada')); 
        options.add(new SelectOption('MEXICO','Mexico')); return options; 
    }


    public String items { get; set; }

    public String country { get; set; }
}