#import "VITalkUtil.h"


@implementation VITalkUtil

@synthesize bridge = _bridge;

  RCT_EXPORT_MODULE()

  //Takes in string and uses Native AVSpeech to speck
  RCT_EXPORT_METHOD(speak: (NSString *)message
                    errorCallback: (RCTResponseSenderBlock)failureCallback
                    callback: (RCTResponseSenderBlock)successCallback){
    
    AVSpeechUtterance* utterance = [[AVSpeechUtterance alloc] initWithString:message];
    [self.synthesizer speakUtterance:utterance];

    successCallback(@[@"Sent message: %@", message]);
    
    return;
  }

@end
