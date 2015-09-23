
//
//  VIOPUtil.m
//  viapp
//
//  Created by Garrett Maring on 9/21/15.
//  Copyright © 2015 Facebook. All rights reserved.
//

#import "VIOPUtil.h"

@implementation VIOPUtil : NSObject

@synthesize words;
@synthesize name;
@synthesize err;
@synthesize lmPath;
@synthesize dicPath;

-(VIOPUtil*)init{
  
  
  //Language Model
  OELanguageModelGenerator *lmGenerator = [[OELanguageModelGenerator alloc] init];
  
  words = [NSMutableArray arrayWithObjects:@"hi", @"tim", @"how", @"are", @"you", @"john", @"hello", @"bob", @"language", @"thing", @"is", @"such", @"a", @"complicated", @"when", @"thing", @"git", @"hub", @"this", @"so", @"great", @"cool", @"what", @"was", @"my", @"last", @"commit", @"repository", @"at", @"blackjack", nil];
  name = @"ViLanguageModel";
  err = [lmGenerator generateLanguageModelFromArray:words withFilesNamed:name forAcousticModelAtPath:[OEAcousticModel pathToModel:@"AcousticModelEnglish"]];
  
  lmPath = nil;
  dicPath = nil;
  
  if(err == nil) {
    lmPath = [lmGenerator pathToSuccessfullyGeneratedLanguageModelWithRequestedName:@"ViLanguageModel"];
    dicPath = [lmGenerator pathToSuccessfullyGeneratedDictionaryWithRequestedName:@"ViLanguageModel"];
  } else {
    NSLog(@"Error: %@",[err localizedDescription]);
  }
  
  //Flite Controller
  self.fliteController = [[OEFliteController alloc] init];
  self.slt = [[Slt alloc] init];
  return self;
}

-(void)startListening {
  float secondsOfSilence = 0.4;
  float threshold = 3.0;
  
  [[OEPocketsphinxController sharedInstance] setActive:TRUE error:nil];
  if(![OEPocketsphinxController sharedInstance].isListening){
    //Might not need in simulator testing
    //[[OEPocketsphinxController sharedInstance] requestMicPermission];
    [[OEPocketsphinxController sharedInstance] startListeningWithLanguageModelAtPath:lmPath dictionaryAtPath:dicPath acousticModelAtPath:[OEAcousticModel pathToModel:@"AcousticModelEnglish"] languageModelIsJSGF:NO];
  }
  [[OEPocketsphinxController sharedInstance] setSecondsOfSilenceToDetect:secondsOfSilence];
  [[OEPocketsphinxController sharedInstance] setVadThreshold:threshold];
  [[OEPocketsphinxController sharedInstance] setAudioMode:@"VoiceChat"];
}

-(void)resumeRecognition{
  [[OEPocketsphinxController sharedInstance] resumeRecognition];
}
-(void)suspendRecognition{
  [[OEPocketsphinxController sharedInstance] suspendRecognition];
}
-(void)stopListening{
  [[OEPocketsphinxController sharedInstance] stopListening];
}

-(void)saySomething:(NSString *)message {
  [self.fliteController say:message withVoice:self.slt];
}

-(BOOL)isListening{
  return [[OEPocketsphinxController sharedInstance] isListening];
}

@end
