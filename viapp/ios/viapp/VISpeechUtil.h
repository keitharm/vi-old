//React
#import <RCTBridge.h>
#import "RCTEventDispatcher.h"

//Text-To-Speech
#import <AVFoundation/AVFoundation.h>

//Watson
#import <watsonsdk/SpeechToText.h>
#import <watsonsdk/STTConfiguration.h>
#import <watsonsdk/TextToSpeech.h>
#import <watsonsdk/TTSConfiguration.h>

@interface VISpeechUtil : NSObject <RCTBridgeModule>

@property (strong, nonatomic) AVSpeechSynthesizer *synthesizer;
@property (strong, nonatomic) SpeechToText *stt;
@property (strong, nonatomic) NSString *result;

@end
