//React
#import <RCTBridge.h>
#import "RCTEventDispatcher.h"

//Text-To-Speech
#import <AVFoundation/AVFoundation.h>

@interface VITalkUtil : NSObject <RCTBridgeModule>

@property (strong, nonatomic) AVSpeechSynthesizer *synthesizer;

@end
