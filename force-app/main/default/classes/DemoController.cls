Public with sharing class DemoController {
Public String outValueSecond{get;set;}
  Public DemoController(){     
     outValueSecond = 'before value set in constructor';
  }   
  Public void DemoMethod(){
   outValueSecond = 'After value set in controller method. This method is called using action support added to inputtext component';
  }
}