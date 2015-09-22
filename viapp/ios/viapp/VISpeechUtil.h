//
//  VISpeechUtil.h
//  viapp
//
//  Created by Garrett Maring on 9/21/15.
//  Copyright © 2015 Facebook. All rights reserved.
//

#import <RCTBridge.h>
#import "VIOPUtil.h"
#import "RCTEventDispatcher.h"

@interface VISpeechUtil : NSObject <RCTBridgeModule, OEEventsObserverDelegate>

@property(strong, nonatomic) VIOPUtil *speechController;
@property (strong, nonatomic) OEEventsObserver *openEarsEventsObserver;

@end
