
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
  //Model
  OELanguageModelGenerator *lmGenerator = [[OELanguageModelGenerator alloc] init];
  
  words = [NSMutableArray arrayWithObjects:@"hi", @"jim", @"hello", @"bob", nil];
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
  
  //Observer Controller
  self.openEarsEventsObserver = [[OEEventsObserver alloc] init];
  [self.openEarsEventsObserver setDelegate:self];
  
  //Flite Controller
  self.fliteController = [[OEFliteController alloc] init];
  self.slt = [[Slt alloc] init];
  return self;
}

-(void)startListening {
  
  //This is an instance already. Cannot instantiate
  [[OEPocketsphinxController sharedInstance] setActive:TRUE error:nil];
  if(![OEPocketsphinxController sharedInstance].isListening){
    [[OEPocketsphinxController sharedInstance] startListeningWithLanguageModelAtPath:lmPath dictionaryAtPath:dicPath acousticModelAtPath:[OEAcousticModel pathToModel:@"AcousticModelEnglish"] languageModelIsJSGF:NO];
  }
}

- (void) pocketsphinxDidReceiveHypothesis:(NSString *)hypothesis recognitionScore:(NSString *)recognitionScore utteranceID:(NSString *)utteranceID {
  NSLog(@"The received hypothesis is %@ with a score of %@ and an ID of %@", hypothesis, recognitionScore, utteranceID);
}

- (void) pocketsphinxDidStartListening {
  NSLog(@"Pocketsphinx is now listening.");
}

- (void) pocketsphinxDidDetectSpeech {
  NSLog(@"Pocketsphinx has detected speech.");
}

- (void) pocketsphinxDidDetectFinishedSpeech {
  NSLog(@"Pocketsphinx has detected a period of silence, concluding an utterance.");
}

- (void) pocketsphinxDidStopListening {
  NSLog(@"Pocketsphinx has stopped listening.");
}

- (void) pocketsphinxDidSuspendRecognition {
  NSLog(@"Pocketsphinx has suspended recognition.");
}

- (void) pocketsphinxDidResumeRecognition {
  NSLog(@"Pocketsphinx has resumed recognition.");
}

- (void) pocketsphinxDidChangeLanguageModelToFile:(NSString *)newLanguageModelPathAsString andDictionary:(NSString *)newDictionaryPathAsString {
  NSLog(@"Pocketsphinx is now using the following language model: \n%@ and the following dictionary: %@",newLanguageModelPathAsString,newDictionaryPathAsString);
}

- (void) pocketSphinxContinuousSetupDidFailWithReason:(NSString *)reasonForFailure {
  NSLog(@"Listening setup wasn't successful and returned the failure reason: %@", reasonForFailure);
}

- (void) pocketSphinxContinuousTeardownDidFailWithReason:(NSString *)reasonForFailure {
  NSLog(@"Listening teardown wasn't successful and returned the failure reason: %@", reasonForFailure);
}

- (void) testRecognitionCompleted {
  NSLog(@"A test file that was submitted for recognition is now complete.");
}

-(void)saySomething:(NSString *)message {
  [self.fliteController say:message withVoice:self.slt];
}


@end
