//
//  VIOPUtil.h
//  viapp
//
//  Created by Garrett Maring on 9/21/15.
//  Copyright © 2015 Facebook. All rights reserved.
//

#import <Foundation/Foundation.h>
#import <OpenEars/OEEventsObserver.h>
#import <OpenEars/OELanguageModelGenerator.h>
#import <OpenEars/OEAcousticModel.h>
#import <OpenEars/OEPocketsphinxController.h>
#import <Slt/Slt.h>
#import <OpenEars/OEFliteController.h>
#import <UIKit/UIKit.h>

@interface VIOPUtil : NSObject <OEEventsObserverDelegate>

@property (strong, nonatomic) OEEventsObserver *openEarsEventsObserver;
@property (strong, nonatomic) NSMutableArray *words;
@property (strong, nonatomic) NSString *name;
@property (strong, nonatomic) NSError *err;
@property (strong, nonatomic) NSString *lmPath;
@property (strong, nonatomic) NSString *dicPath;
@property (strong, nonatomic) OEFliteController *fliteController;
@property (strong, nonatomic) Slt *slt;

-(VIOPUtil*)init;
-(void)saySomething:(NSString *)message;
-(void)makeObserver;
-(void)pocketsphinxDidReceiveHypothesis:(NSString *)hypothesis recognitionScore:(NSString *)recognitionScore utteranceID:(NSString *)utteranceID;

@end