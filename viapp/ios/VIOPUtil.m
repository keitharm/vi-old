
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
  
  //Request Permission
  [[OEPocketsphinxController sharedInstance] requestMicPermission];
  
  //Flite Controller
  self.fliteController = [[OEFliteController alloc] init];
  self.slt = [[Slt alloc] init];
  return self;
}

-(void)startListening {
  
  [[OEPocketsphinxController sharedInstance] setActive:TRUE error:nil];
  if(![OEPocketsphinxController sharedInstance].isListening){
    [[OEPocketsphinxController sharedInstance] startListeningWithLanguageModelAtPath:lmPath dictionaryAtPath:dicPath acousticModelAtPath:[OEAcousticModel pathToModel:@"AcousticModelEnglish"] languageModelIsJSGF:NO];
  }

}

-(void)resumeRecognition{
  [[OEPocketsphinxController sharedInstance] resumeRecognition];
}
-(void)suspendRecognition{
  [[OEPocketsphinxController sharedInstance] suspendRecognition];
}

-(void)saySomething:(NSString *)message {
  [self.fliteController say:message withVoice:self.slt];
}

-(BOOL)isListening{
  return [[OEPocketsphinxController sharedInstance] isListening];
}

@end
