//
//  VISpeechUtil.h
//  viapp
//
//  Created by Garrett Maring on 9/21/15.
//  Copyright © 2015 Facebook. All rights reserved.
//

#import <RCTBridge.h>
#import "VIOPUtil.h"

@interface VISpeechUtil : NSObject <RCTBridgeModule>
@property(strong, nonatomic) VIOPUtil *speech;

@end
