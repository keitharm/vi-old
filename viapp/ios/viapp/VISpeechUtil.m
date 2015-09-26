#import "VISpeechUtil.h"


@implementation VISpeechUtil

@synthesize stt;
@synthesize result;
@synthesize bridge = _bridge;

  RCT_EXPORT_MODULE()

  //Initializes Watson with credentials, called from React
  RCT_EXPORT_METHOD(initSpeech){
    NSLog(@"Initializing Speech");
    
    //Watson Create Instance
    STTConfiguration *conf = [[STTConfiguration alloc] init];
    
    //Set Tokens for IBM Bluemix
    [conf setBasicAuthUsername:@"0a5eaece-7aab-4dcb-b5b3-b79de5457aae"];
    [conf setBasicAuthPassword:@"wu3ngdyhywim"];
    
    self.stt = [SpeechToText initWithConfig:conf];
  }

  //Takes in string and uses Native AVSpeech to speck
  RCT_EXPORT_METHOD(speak: (NSString *)message
                    errorCallback: (RCTResponseSenderBlock)failureCallback
                    callback: (RCTResponseSenderBlock)successCallback){
    
    AVSpeechUtterance* utterance = [[AVSpeechUtterance alloc] initWithString:message];
    [self.synthesizer speakUtterance:utterance];

    successCallback(@[@"Sent message: %@", message]);
    
    
    return;
  }

  //Listen method to start up Watson Speech-To-Text
  RCT_EXPORT_METHOD(listen:(BOOL *)shouldListen
                  errorCallback:(RCTResponseSenderBlock)failureCallback
                  callback: (RCTResponseSenderBlock)successCallback){
    
    if (shouldListen) {
      NSLog(@"Starting Voice recognition!");
      // start recognize
      [stt recognize:^(NSDictionary* res, NSError* err){
        
        if(err == nil) {
          
          
          if([self.stt isFinalTranscript:res]) {
            
            NSLog(@"this is the final transcript");
            [stt endRecognize];
            
            NSLog(@"confidence score is %@",[stt getConfidenceScore:res]);
          }
          
          self.result = [stt getTranscript:res];
          
          
        } else {
          NSLog(@"received error from the SDK %@",[err localizedDescription]);
          [stt endRecognize];
        }
      }];
    } else {
      NSLog(@"Ending Recognition!");
      [self.bridge.eventDispatcher sendAppEventWithName:@"HeardPhrase"
                                    body:@{@"message": self.result}];
      NSLog(@[@"@Result: %@", self.result]);
      [stt endRecognize];
    }

    return;
    
  }

@end
