//
//  VISpeechUtil.m
//  viapp
//
//  Created by Garrett Maring on 9/21/15.
//  Copyright © 2015 Facebook. All rights reserved.
//

#import "VISpeechUtil.h"


@implementation VISpeechUtil

@synthesize speech;
  // Exposing this module
  RCT_EXPORT_MODULE()

  // Building methods
  RCT_EXPORT_METHOD(speak: (NSString *)message
                    errorCallback: (RCTResponseSenderBlock)failureCallback
                    callback: (RCTResponseSenderBlock)successCallback){
    
    speech = [[VIOPUtil alloc] init];
    
    [speech saySomething:message];
    NSLog(@"%@ %@", NSStringFromClass([self class]), NSStringFromSelector(_cmd));

    
    //Passing an array back to the Javascript side function
    successCallback(@[message]);
    
    //Construct so that successCallback is invoked with the string translated from the voice recognition
    
    return;
  }

@end
