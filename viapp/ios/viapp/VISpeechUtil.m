//
//  VISpeechUtil.m
//  viapp
//
//  Created by Garrett Maring on 9/21/15.
//  Copyright © 2015 Facebook. All rights reserved.
//

#import "VISpeechUtil.h"


@implementation VISpeechUtil

@synthesize speechController;
  // Exposing this module
  RCT_EXPORT_MODULE()

  RCT_EXPORT_METHOD(initSpeech){
    //Initializing speech instance. To be called from React application once. MUST be called before speak or listen methods are called.
    NSLog(@"Initializing speechController");
    
    //Init speechController from Vi OpenEars Utility Class. Start up listening engine (will suspend)
    speechController = [[VIOPUtil alloc] init];
    
    
    //Initialize Observer
    self.openEarsEventsObserver = [[OEEventsObserver alloc] init]; [self.openEarsEventsObserver setDelegate:self];
  }

  // Speaks out passed in message from React component
  RCT_EXPORT_METHOD(speak: (NSString *)message
                    errorCallback: (RCTResponseSenderBlock)failureCallback
                    callback: (RCTResponseSenderBlock)successCallback){
    
    
    //Call methoed to say aloud in UI
    [speechController saySomething:message];
    
    //Logging for debugging
    NSLog(@"%@ %@", NSStringFromClass([self class]), NSStringFromSelector(_cmd));

    
    //Passing an array back to the Javascript side function
    successCallback(@[message]);
    
    
    return;
  }

  //Listen for user input from iOS
  RCT_EXPORT_METHOD(listen:(BOOL *)shouldListen
                  errorCallback:(RCTResponseSenderBlock)failureCallback
                  callback: (RCTResponseSenderBlock)successCallback){
    
    if (![speechController isListening]) {
      NSLog(@"Starting Listener! Should only happend once in app");
      [speechController startListening];
    } else if (shouldListen) {
      [speechController resumeRecognition];
      NSLog(@"Resume listening!");
    } else {
      [speechController suspendRecognition];
      NSLog(@"Suspend listening!");
    }
    
    //Log
   //NSLog(@"Heard %@", result);
    
    //Execute callback with returned result from listener as a string
    successCallback(@[@"listened in O-C"]);

    return;
    
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

- (void) pocketsphinxFailedNoMicPermissions{
  NSLog(@"Failed mic permission");
}

-(void) micPermissionCheckCompleted{
  NSLog(@"Mic Permission Check complete");
}

@end
