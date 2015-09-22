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

@end
