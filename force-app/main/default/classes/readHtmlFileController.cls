public with sharing class readHtmlFileController {
    @AuraEnabled
    public static Blob getHtmlData(){
        String data;
        Blob htmlFileBody;
        List<ContentVersion> versions = [SELECT VersionData,FileExtension	
                                         FROM ContentVersion where FileExtension = 'html'];
        system.debug('versions'+versions);
        for(ContentVersion cv : versions){
         htmlFileBody = cv.VersionData;
         //system.debug('htmlFileBody'+readAsText(htmlFileBody));  
         data = EncodingUtil.base64Encode(htmlFileBody); 
         system.debug('cv.VersionData  '+EncodingUtil.base64Encode(htmlFileBody));
        }
        return htmlFileBody;
    }
     
}