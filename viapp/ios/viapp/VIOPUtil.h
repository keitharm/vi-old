//
//  VIOPUtil.h
//  viapp
//
//  Created by Garrett Maring on 9/21/15.
//  Copyright © 2015 Facebook. All rights reserved.
//

#import <Foundation/Foundation.h>
#import <UIKit/UIKit.h>

#import <Slt/Slt.h>
#import <OpenEars/OEPocketsphinxController.h>

#import <OpenEars/OELanguageModelGenerator.h>
#import <OpenEars/OEAcousticModel.h>
#import <OpenEars/OEFliteController.h>


@interface VIOPUtil : NSObject

@property (strong, nonatomic) OEFliteController *fliteController;
@property (strong, nonatomic) Slt *slt;
@property (strong, nonatomic) NSMutableArray *words;
@property (strong, nonatomic) NSString *name;
@property (strong, nonatomic) NSError *err;
@property (strong, nonatomic) NSString *lmPath;
@property (strong, nonatomic) NSString *dicPath;

-(VIOPUtil*)init;
-(void)saySomething:(NSString *)message;
-(void)startListening;
-(void)suspendRecognition;
-(void)resumeRecognition;
-(BOOL)isListening;
-(void)stopListening;

@end