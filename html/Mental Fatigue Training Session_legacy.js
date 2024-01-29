/*********************************************** 
 * Mental Fatigue Training Session_Legacy Test *
 ***********************************************/

import { core, data, sound, util, visual, hardware } from './lib/psychojs-2022.2.1.js';
const { PsychoJS } = core;
const { TrialHandler, MultiStairHandler } = data;
const { Scheduler } = util;
//some handy aliases as in the psychopy scripts;
const { abs, sin, cos, PI: pi, sqrt } = Math;
const { round } = util;


// store info about the experiment session:
let expName = 'Mental Fatigue Training Session_legacy';  // from the Builder filename that created this script
let expInfo = {
    'participant': '',
};

// Start code blocks for 'Before Experiment'
// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([0, 0, 0]),
  units: 'norm',
  waitBlanking: true
});
// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); }, flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
const instrLoopLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(instrLoopLoopBegin(instrLoopLoopScheduler));
flowScheduler.add(instrLoopLoopScheduler);
flowScheduler.add(instrLoopLoopEnd);
const instrAXCPTLoopLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(instrAXCPTLoopLoopBegin(instrAXCPTLoopLoopScheduler));
flowScheduler.add(instrAXCPTLoopLoopScheduler);
flowScheduler.add(instrAXCPTLoopLoopEnd);
flowScheduler.add(createLoopTimerRoutineBegin());
flowScheduler.add(createLoopTimerRoutineEachFrame());
flowScheduler.add(createLoopTimerRoutineEnd());
const AXCPTtrialsLoopLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(AXCPTtrialsLoopLoopBegin(AXCPTtrialsLoopLoopScheduler));
flowScheduler.add(AXCPTtrialsLoopLoopScheduler);
flowScheduler.add(AXCPTtrialsLoopLoopEnd);
flowScheduler.add(restBreak1RoutineBegin());
flowScheduler.add(restBreak1RoutineEachFrame());
flowScheduler.add(restBreak1RoutineEnd());
flowScheduler.add(createLoopTimerRoutineBegin());
flowScheduler.add(createLoopTimerRoutineEachFrame());
flowScheduler.add(createLoopTimerRoutineEnd());
const instrNBackLoopLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(instrNBackLoopLoopBegin(instrNBackLoopLoopScheduler));
flowScheduler.add(instrNBackLoopLoopScheduler);
flowScheduler.add(instrNBackLoopLoopEnd);
const NBackTargetLoopLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(NBackTargetLoopLoopBegin(NBackTargetLoopLoopScheduler));
flowScheduler.add(NBackTargetLoopLoopScheduler);
flowScheduler.add(NBackTargetLoopLoopEnd);
const NBackTrialsLoopLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(NBackTrialsLoopLoopBegin(NBackTrialsLoopLoopScheduler));
flowScheduler.add(NBackTrialsLoopLoopScheduler);
flowScheduler.add(NBackTrialsLoopLoopEnd);
flowScheduler.add(restBreak2RoutineBegin());
flowScheduler.add(restBreak2RoutineEachFrame());
flowScheduler.add(restBreak2RoutineEnd());
const instrSearchLoopLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(instrSearchLoopLoopBegin(instrSearchLoopLoopScheduler));
flowScheduler.add(instrSearchLoopLoopScheduler);
flowScheduler.add(instrSearchLoopLoopEnd);
flowScheduler.add(createLoopTimerRoutineBegin());
flowScheduler.add(createLoopTimerRoutineEachFrame());
flowScheduler.add(createLoopTimerRoutineEnd());
const searchLoopLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(searchLoopLoopBegin(searchLoopLoopScheduler));
flowScheduler.add(searchLoopLoopScheduler);
flowScheduler.add(searchLoopLoopEnd);
flowScheduler.add(restBreak3RoutineBegin());
flowScheduler.add(restBreak3RoutineEachFrame());
flowScheduler.add(restBreak3RoutineEnd());
const instrMentRotaLoopLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(instrMentRotaLoopLoopBegin(instrMentRotaLoopLoopScheduler));
flowScheduler.add(instrMentRotaLoopLoopScheduler);
flowScheduler.add(instrMentRotaLoopLoopEnd);
flowScheduler.add(createLoopTimerRoutineBegin());
flowScheduler.add(createLoopTimerRoutineEachFrame());
flowScheduler.add(createLoopTimerRoutineEnd());
const mentRotTrialsLooopLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(mentRotTrialsLooopLoopBegin(mentRotTrialsLooopLoopScheduler));
flowScheduler.add(mentRotTrialsLooopLoopScheduler);
flowScheduler.add(mentRotTrialsLooopLoopEnd);
flowScheduler.add(endRoutineBegin());
flowScheduler.add(endRoutineEachFrame());
flowScheduler.add(endRoutineEnd());
flowScheduler.add(quitPsychoJS, '', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, '', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  });

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.EXP);


var currentLoop;
var frameDur;
async function updateInfo() {
  currentLoop = psychoJS.experiment;  // right now there are no loops
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2022.2.1';
  expInfo['OS'] = window.navigator.platform;

  psychoJS.experiment.dataFileName = (("." + "/") + `data/${expInfo["participant"]}_${expName}_${expInfo["date"]}`);

  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  
  return Scheduler.Event.NEXT;
}


var instrClock;
var thisExp;
var win;
var event;
var randint;
var elapsedTime;
var instrDict;
var currentInstr;
var key_resp;
var instrHeaderText;
var text;
var instrAXCPTClock;
var key_resp_2;
var instrHeaderText_2;
var text_2;
var createLoopTimerClock;
var timerClock;
var probeVal;
var timer_text;
var AXCPTtrialClock;
var Bletters;
var Yletters;
var distractors;
var cue_text;
var break1;
var distractor1;
var break2;
var distractor2;
var break3;
var AXCPTprobeClock;
var probe_text;
var AXCPT_resp;
var AXCPTfeedbackClock;
var msg;
var AXCPTfeedback_text;
var restBreak1Clock;
var restBreak1Text;
var restBreak1_key_resp;
var instrNBackClock;
var key_resp_3;
var instrHeaderText_3;
var text_3;
var NBackFirst3TrialsClock;
var Back2minus1;
var Back2minus2;
var Back2minus3;
var NBackText_1;
var NBack_resp_1;
var NBackRemainderTrialsClock;
var NBackText_2;
var NBack_resp_2;
var NBackFeedbackClock;
var AXCPTfeedback_text_2;
var restBreak2Clock;
var restBreak2Text;
var restBreak2_key_resp;
var instrSearchClock;
var key_resp_4;
var instrHeaderText_4;
var text_4;
var searchTrialClock;
var orientList;
var PosList;
var key_resp_6;
var targetStim;
var searchStim2;
var searchStim3;
var searchStim4;
var searchStim5;
var searchStim6;
var searchStim7;
var searchStim8;
var searchStim9;
var searchStim10;
var searchStim11;
var searchFeedbackClock;
var searchFeedbackText;
var restBreak3Clock;
var restBreak3Text;
var restBreak3_key_resp;
var instrMentRotClock;
var matchOpac;
var flipOpac;
var notpOpac;
var key_resp_5;
var instrHeaderText_5;
var text_5;
var MentRotMatching;
var MentRotMatchFlip;
var MentRotNot;
var mentRotTrialClock;
var mentRotStimulus;
var MROT_resp;
var mentRotFeedbackClock;
var NBackfeedback_text_2;
var endClock;
var end_text;
var end_resp;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "instr"
  instrClock = new util.Clock();
  // Run 'Begin Experiment' code from js_math_fix_code
  //use strict
  
  // Code to fix reference errors in JS
  thisExp = psychoJS.experiment;
  win = psychoJS.window;
  event = psychoJS.eventManager;
  Array.prototype.append = [].push;
  document.documentElement.style.cursor = 'none';
  
  // Math related fixes
  //pi = Math.PI;
  //sin = Math.sin;
  //cos = Math.cos;
  //sqrt = Math.sqrt;
  randint = function(min, maxplusone) {
    return Math.floor(Math.random() * (maxplusone - min) ) + min;
  }
  // Run 'Begin Experiment' code from elapsed_time
  elapsedTime = new util.Clock();
  
  // Run 'Begin Experiment' code from instructions_code
  instrDict = {"1": "Welcome to the session and thank you for volunteering to take part in this study \n\nThis session is a training session where you will learn about the different tasks that you will need to complete in the testing session.\n\n Press the right arrow on your keyboard to continue", "2": "If you want to quit at any point, press the escape key. If you quit your data will not be saved and you will be asked to repeat the session \n\nPlease make sure that you are sitting comfortably in a quiet environment where you will not be interrupted. There will be multiple chances for you to take rest breaks if you need to. Please also ensure that your computer is connected to a power source and will not enter sleep mode\n\n Press the right arrow to continue, or the left arrow to go back to the previous screen", "3": "Today you will learn four different tasks: \n\n1. AX-CPT \n2. n-back \n3. visual search \n4. mental rotation \n\n Press the right arrow to continue to the AX-CPT task instructions", "4": "In this task you will see a series of letters one after another \n\nFor example:\n A - W - N - X \n (where - is a blank screen)\n\n The first letter will be red \n Then there will be two white letters \n The final letter will also be red \n\n Press the right arrow to continue, or the left arrow to go back to the previous screen", "5": "If the first red letter is an A and the second red letter is an X, press 'k' on your keyboard. For any other combinations of letters, press 'd' \n\n For example: \n if you see A - U - N - X you should press 'k' \n if you see B - O - J - X you should press 'd' \n if you see F - D - Z - I you should press 'd' \n if you see A - L - C - Z you should press 'd' \n\n Press the right arrow to continue, or the left arrow to go back to the previous screen", "6": "When you respond correctly, 'correct' will appear \n\n When you respond incorrectly, 'incorrect' will appear \n\n You must respond as quickly and accurately as possible \n\n Press 'k' to begin the five minute practice session, or press the left arrow to go back to the previous screen", "7": "In this task, you will see a series of letters one after another. Your task is to decide whether the letter on the screen is the same as the one 3 letters ago \n\n If it is the same, press 'k' \n If if is not the same, press 'd' \n\n Press the right arrow to continue", "8": "For example, in the sequence: \n B - F - G - B - P - B - F \n you would press \n d - d - d - k - d - d - d \n\n Press the right arrow to continue, or the left arrow to go back to the previous screen", "9": "When you respond correctly, 'correct' will appear \n\n When you respond incorrectly, 'incorrect' will appear \n\n You must respond as quickly and accurately as possible \n\n Press 'k' to begin the five minute practice session, or press the left arrow to go back to the previous screen", "10": "In this task you will be presented with lots of letters on a page \n\n The letters will be in different places and at different angles\n\n Press the right arrow to continue", "11": "Your task is to press 'k' if the letter T is on the screen\n\n If the letter T is not on the screen, press 'd'\n\n Press the right arrow to continue, or the left arrow to go back to the previous screen", "12": "You must complete this task as quickly and accurately as possible \n\n Press 'k' to begin the five minute practice session, or press the left arrow to go back to the previous screen", "13": "In this task, you will see a series of pictures\n\n Each picture has two shapes in it \n\n Your task is to decide if the two shapes are the same \n\nIf the two shapes are the same, press 'k'. If the two shapes are different, press 'd' \n\nPress the right arrow to continue", "14": "The way the shapes are oriented will change. Here are two matching shapes that are oriented the same way:\n\n\n\n\n\n\n\n\n\nPress the right arrow to continue, or the left arrow to go back to the previous screen", "15": "Here are two matching shapes that are oriented differently:\n\n\n\n\n\n\n\n\n\nPress the right arrow to continue, or the left arrow to go back to the previous screen", "16": "Here are two shapes that do not match:\n\n\n\n\n\n\n\n\n\nPress the right arrow to continue, or the left arrow to go back to the previous screen", "17": "When you respond correctly, 'correct' will appear \n\n When you respond incorrectly, 'incorrect' will appear \n\n You must respond as quickly and accurately as possible \n\n Press 'k' to begin the five minute practice session, or press the left arrow to go back to the previous screen \n\n Please note there may be a delay while this task loads"};
  currentInstr = 1;
  
  key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  instrHeaderText = new visual.TextStim({
    win: psychoJS.window,
    name: 'instrHeaderText',
    text: 'Introduction',
    font: 'Arial',
    units: 'norm', 
    pos: [0, 0.8], height: 0.1,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1,
    depth: -5.0 
  });
  
  text = new visual.TextStim({
    win: psychoJS.window,
    name: 'text',
    text: '',
    font: 'Arial',
    units: 'norm', 
    pos: [0, 0], height: 0.075,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1,
    depth: -6.0 
  });
  
  // Initialize components for Routine "instrAXCPT"
  instrAXCPTClock = new util.Clock();
  key_resp_2 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  instrHeaderText_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'instrHeaderText_2',
    text: 'AX-CPT Instructions',
    font: 'Arial',
    units: 'norm', 
    pos: [0, 0.8], height: 0.1,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1,
    depth: -3.0 
  });
  
  text_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_2',
    text: '',
    font: 'Arial',
    units: 'norm', 
    pos: [0, 0], height: 0.075,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1,
    depth: -4.0 
  });
  
  // Initialize components for Routine "createLoopTimer"
  createLoopTimerClock = new util.Clock();
  // Initialize components for Routine "timer"
  timerClock = new util.Clock();
  // Run 'Begin Experiment' code from timer_code
  probeVal = [];
  
  timer_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'timer_text',
    text: 'x',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.3,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 0,
    depth: -1.0 
  });
  
  // Initialize components for Routine "AXCPTtrial"
  AXCPTtrialClock = new util.Clock();
  // Run 'Begin Experiment' code from AXCPTtrial_code
  Bletters = ["B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Z"];
  Yletters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "Z"];
  distractors = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Z"];
  
  function choice(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }
  
  cue_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'cue_text',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.15,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color([1.0, (- 1.0), (- 1.0)]),  opacity: 1,
    depth: -1.0 
  });
  
  break1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'break1',
    text: 'x',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 0,
    depth: -2.0 
  });
  
  distractor1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'distractor1',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.15,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1,
    depth: -3.0 
  });
  
  break2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'break2',
    text: 'x',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 0,
    depth: -4.0 
  });
  
  distractor2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'distractor2',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.15,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1,
    depth: -5.0 
  });
  
  break3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'break3',
    text: 'x',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 0,
    depth: -6.0 
  });
  
  // Initialize components for Routine "AXCPTprobe"
  AXCPTprobeClock = new util.Clock();
  probe_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'probe_text',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.15,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color([1.0, (- 1.0), (- 1.0)]),  opacity: 1,
    depth: 0.0 
  });
  
  AXCPT_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "AXCPTfeedback"
  AXCPTfeedbackClock = new util.Clock();
  // Run 'Begin Experiment' code from AXCPTfeedback_code
  msg = " ";
  
  AXCPTfeedback_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'AXCPTfeedback_text',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.15,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color([1.0, 1.0, (- 1.0)]),  opacity: 1,
    depth: -1.0 
  });
  
  // Initialize components for Routine "restBreak1"
  restBreak1Clock = new util.Clock();
  restBreak1Text = new visual.TextStim({
    win: psychoJS.window,
    name: 'restBreak1Text',
    text: 'End of AX-CPT practice\n\nPlease rest now if you need to or press the right arrow to continue to the next task',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.075,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1,
    depth: -1.0 
  });
  
  restBreak1_key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "instrNBack"
  instrNBackClock = new util.Clock();
  key_resp_3 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  instrHeaderText_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'instrHeaderText_3',
    text: 'N-Back Instructions',
    font: 'Arial',
    units: 'norm', 
    pos: [0, 0.8], height: 0.1,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1,
    depth: -3.0 
  });
  
  text_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_3',
    text: '',
    font: 'Arial',
    units: 'norm', 
    pos: [0, 0], height: 0.075,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1,
    depth: -4.0 
  });
  
  // Initialize components for Routine "NBackFirst3Trials"
  NBackFirst3TrialsClock = new util.Clock();
  // Run 'Begin Experiment' code from NBackFirst3Trials_code
  Back2minus1 = [];
  Back2minus2 = [];
  Back2minus3 = [];
  
  NBackText_1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'NBackText_1',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.15,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1,
    depth: -1.0 
  });
  
  NBack_resp_1 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "NBackRemainderTrials"
  NBackRemainderTrialsClock = new util.Clock();
  NBackText_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'NBackText_2',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.15,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1,
    depth: -1.0 
  });
  
  NBack_resp_2 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "NBackFeedback"
  NBackFeedbackClock = new util.Clock();
  // Run 'Begin Experiment' code from NBackfeedback_code
  msg = " ";
  
  AXCPTfeedback_text_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'AXCPTfeedback_text_2',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.15,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color([1.0, 1.0, (- 1.0)]),  opacity: 1,
    depth: -1.0 
  });
  
  // Initialize components for Routine "restBreak2"
  restBreak2Clock = new util.Clock();
  restBreak2Text = new visual.TextStim({
    win: psychoJS.window,
    name: 'restBreak2Text',
    text: 'End of N-Back practice\n\nPlease rest now if you need to or press the right arrow to continue to the next task',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.075,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1,
    depth: -1.0 
  });
  
  restBreak2_key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "instrSearch"
  instrSearchClock = new util.Clock();
  key_resp_4 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  instrHeaderText_4 = new visual.TextStim({
    win: psychoJS.window,
    name: 'instrHeaderText_4',
    text: 'Visual Search Task Instructions',
    font: 'Arial',
    units: 'norm', 
    pos: [0, 0.8], height: 0.1,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1,
    depth: -3.0 
  });
  
  text_4 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_4',
    text: '',
    font: 'Arial',
    units: 'norm', 
    pos: [0, 0], height: 0.075,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1,
    depth: -4.0 
  });
  
  // Initialize components for Routine "searchTrial"
  searchTrialClock = new util.Clock();
  // Run 'Begin Experiment' code from searchCode
  orientList = [0, 90, 180, 270];
  PosList = [[0.45, (- 0.45)], [0.45, (- 0.15)], [0.45, 0.15], [0.45, 0.45], [0.15, (- 0.45)], [0.15, (- 0.15)], [0.15, 0.15], [0.15, 0.45], [(- 0.15), (- 0.45)], [(- 0.15), (- 0.15)], [(- 0.15), 0.15], [(- 0.15), 0.45], [(- 0.45), (- 0.45)], [(- 0.45), (- 0.15)], [(- 0.45), 0.15], [(- 0.45), 0.45]];
  
  key_resp_6 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  targetStim = new visual.TextStim({
    win: psychoJS.window,
    name: 'targetStim',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.15,  wrapWidth: undefined, ori: 1.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1,
    depth: -3.0 
  });
  
  searchStim2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'searchStim2',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.15,  wrapWidth: undefined, ori: 1.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1,
    depth: -4.0 
  });
  
  searchStim3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'searchStim3',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.15,  wrapWidth: undefined, ori: 1.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1,
    depth: -5.0 
  });
  
  searchStim4 = new visual.TextStim({
    win: psychoJS.window,
    name: 'searchStim4',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.15,  wrapWidth: undefined, ori: 1.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1,
    depth: -6.0 
  });
  
  searchStim5 = new visual.TextStim({
    win: psychoJS.window,
    name: 'searchStim5',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.15,  wrapWidth: undefined, ori: 1.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1,
    depth: -7.0 
  });
  
  searchStim6 = new visual.TextStim({
    win: psychoJS.window,
    name: 'searchStim6',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.15,  wrapWidth: undefined, ori: 1.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1,
    depth: -8.0 
  });
  
  searchStim7 = new visual.TextStim({
    win: psychoJS.window,
    name: 'searchStim7',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.15,  wrapWidth: undefined, ori: 1.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1,
    depth: -9.0 
  });
  
  searchStim8 = new visual.TextStim({
    win: psychoJS.window,
    name: 'searchStim8',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.15,  wrapWidth: undefined, ori: 1.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1,
    depth: -10.0 
  });
  
  searchStim9 = new visual.TextStim({
    win: psychoJS.window,
    name: 'searchStim9',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.15,  wrapWidth: undefined, ori: 1.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1,
    depth: -11.0 
  });
  
  searchStim10 = new visual.TextStim({
    win: psychoJS.window,
    name: 'searchStim10',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.15,  wrapWidth: undefined, ori: 1.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1,
    depth: -12.0 
  });
  
  searchStim11 = new visual.TextStim({
    win: psychoJS.window,
    name: 'searchStim11',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.15,  wrapWidth: undefined, ori: 1.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1,
    depth: -13.0 
  });
  
  // Initialize components for Routine "searchFeedback"
  searchFeedbackClock = new util.Clock();
  // Run 'Begin Experiment' code from searchFeedback_code_3
  msg = " ";
  
  searchFeedbackText = new visual.TextStim({
    win: psychoJS.window,
    name: 'searchFeedbackText',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.15,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color([1.0, 1.0, (- 1.0)]),  opacity: 1,
    depth: -1.0 
  });
  
  // Initialize components for Routine "restBreak3"
  restBreak3Clock = new util.Clock();
  restBreak3Text = new visual.TextStim({
    win: psychoJS.window,
    name: 'restBreak3Text',
    text: 'End of Visual Search Practice\n\nPlease rest now if you need to or press the right arrow to continue to the next task',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.075,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1,
    depth: -1.0 
  });
  
  restBreak3_key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "instrMentRot"
  instrMentRotClock = new util.Clock();
  // Run 'Begin Experiment' code from code_4
  matchOpac = 0;
  flipOpac = 0;
  notpOpac = 0;
  
  key_resp_5 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  instrHeaderText_5 = new visual.TextStim({
    win: psychoJS.window,
    name: 'instrHeaderText_5',
    text: 'Mental Rotation Task Instructions',
    font: 'Arial',
    units: 'norm', 
    pos: [0, 0.8], height: 0.1,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1,
    depth: -3.0 
  });
  
  text_5 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_5',
    text: '',
    font: 'Arial',
    units: 'norm', 
    pos: [0, 0], height: 0.075,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1,
    depth: -4.0 
  });
  
  MentRotMatching = new visual.ImageStim({
    win : psychoJS.window,
    name : 'MentRotMatching', units : undefined, 
    image : '1_0.jpg', mask : undefined,
    ori : 0, pos : [0, 0], size : [0.935, 0.5],
    color : new util.Color([1, 1, 1]), opacity : 1.0,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -5.0 
  });
  MentRotMatchFlip = new visual.ImageStim({
    win : psychoJS.window,
    name : 'MentRotMatchFlip', units : undefined, 
    image : '1_100.jpg', mask : undefined,
    ori : 0, pos : [0, 0], size : [0.935, 0.5],
    color : new util.Color([1, 1, 1]), opacity : 1.0,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -6.0 
  });
  MentRotNot = new visual.ImageStim({
    win : psychoJS.window,
    name : 'MentRotNot', units : undefined, 
    image : '1_0_R.jpg', mask : undefined,
    ori : 0, pos : [0, 0], size : [0.935, 0.5],
    color : new util.Color([1, 1, 1]), opacity : 1.0,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -7.0 
  });
  // Initialize components for Routine "mentRotTrial"
  mentRotTrialClock = new util.Clock();
  mentRotStimulus = new visual.ImageStim({
    win : psychoJS.window,
    name : 'mentRotStimulus', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0], size : [0.935, 0.5],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : 0.0 
  });
  MROT_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "mentRotFeedback"
  mentRotFeedbackClock = new util.Clock();
  // Run 'Begin Experiment' code from NBackfeedback_code_2
  msg = " ";
  
  NBackfeedback_text_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'NBackfeedback_text_2',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.15,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color([1.0, 1.0, (- 1.0)]),  opacity: 1,
    depth: -1.0 
  });
  
  // Initialize components for Routine "end"
  endClock = new util.Clock();
  end_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'end_text',
    text: '',
    font: 'Arial',
    units: 'norm', 
    pos: [0, 0], height: 0.075,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1,
    depth: -1.0 
  });
  
  end_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var instrLoop;
function instrLoopLoopBegin(instrLoopLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    instrLoop = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 100, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'instrLoop'
    });
    psychoJS.experiment.addLoop(instrLoop); // add the loop to the experiment
    currentLoop = instrLoop;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisInstrLoop of instrLoop) {
      snapshot = instrLoop.getSnapshot();
      instrLoopLoopScheduler.add(importConditions(snapshot));
      instrLoopLoopScheduler.add(instrRoutineBegin(snapshot));
      instrLoopLoopScheduler.add(instrRoutineEachFrame());
      instrLoopLoopScheduler.add(instrRoutineEnd(snapshot));
      instrLoopLoopScheduler.add(instrLoopLoopEndIteration(instrLoopLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function instrLoopLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(instrLoop);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function instrLoopLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var instrAXCPTLoop;
function instrAXCPTLoopLoopBegin(instrAXCPTLoopLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    instrAXCPTLoop = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 100, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'instrAXCPTLoop'
    });
    psychoJS.experiment.addLoop(instrAXCPTLoop); // add the loop to the experiment
    currentLoop = instrAXCPTLoop;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisInstrAXCPTLoop of instrAXCPTLoop) {
      snapshot = instrAXCPTLoop.getSnapshot();
      instrAXCPTLoopLoopScheduler.add(importConditions(snapshot));
      instrAXCPTLoopLoopScheduler.add(instrAXCPTRoutineBegin(snapshot));
      instrAXCPTLoopLoopScheduler.add(instrAXCPTRoutineEachFrame());
      instrAXCPTLoopLoopScheduler.add(instrAXCPTRoutineEnd(snapshot));
      instrAXCPTLoopLoopScheduler.add(instrAXCPTLoopLoopEndIteration(instrAXCPTLoopLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function instrAXCPTLoopLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(instrAXCPTLoop);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function instrAXCPTLoopLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var AXCPTtrialsLoop;
function AXCPTtrialsLoopLoopBegin(AXCPTtrialsLoopLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    AXCPTtrialsLoop = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 6000, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'trialType.csv',
      seed: undefined, name: 'AXCPTtrialsLoop'
    });
    psychoJS.experiment.addLoop(AXCPTtrialsLoop); // add the loop to the experiment
    currentLoop = AXCPTtrialsLoop;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisAXCPTtrialsLoop of AXCPTtrialsLoop) {
      snapshot = AXCPTtrialsLoop.getSnapshot();
      AXCPTtrialsLoopLoopScheduler.add(importConditions(snapshot));
      AXCPTtrialsLoopLoopScheduler.add(timerRoutineBegin(snapshot));
      AXCPTtrialsLoopLoopScheduler.add(timerRoutineEachFrame());
      AXCPTtrialsLoopLoopScheduler.add(timerRoutineEnd(snapshot));
      AXCPTtrialsLoopLoopScheduler.add(AXCPTtrialRoutineBegin(snapshot));
      AXCPTtrialsLoopLoopScheduler.add(AXCPTtrialRoutineEachFrame());
      AXCPTtrialsLoopLoopScheduler.add(AXCPTtrialRoutineEnd(snapshot));
      AXCPTtrialsLoopLoopScheduler.add(AXCPTprobeRoutineBegin(snapshot));
      AXCPTtrialsLoopLoopScheduler.add(AXCPTprobeRoutineEachFrame());
      AXCPTtrialsLoopLoopScheduler.add(AXCPTprobeRoutineEnd(snapshot));
      AXCPTtrialsLoopLoopScheduler.add(AXCPTfeedbackRoutineBegin(snapshot));
      AXCPTtrialsLoopLoopScheduler.add(AXCPTfeedbackRoutineEachFrame());
      AXCPTtrialsLoopLoopScheduler.add(AXCPTfeedbackRoutineEnd(snapshot));
      AXCPTtrialsLoopLoopScheduler.add(AXCPTtrialsLoopLoopEndIteration(AXCPTtrialsLoopLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function AXCPTtrialsLoopLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(AXCPTtrialsLoop);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function AXCPTtrialsLoopLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var instrNBackLoop;
function instrNBackLoopLoopBegin(instrNBackLoopLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    instrNBackLoop = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 100, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'instrNBackLoop'
    });
    psychoJS.experiment.addLoop(instrNBackLoop); // add the loop to the experiment
    currentLoop = instrNBackLoop;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisInstrNBackLoop of instrNBackLoop) {
      snapshot = instrNBackLoop.getSnapshot();
      instrNBackLoopLoopScheduler.add(importConditions(snapshot));
      instrNBackLoopLoopScheduler.add(instrNBackRoutineBegin(snapshot));
      instrNBackLoopLoopScheduler.add(instrNBackRoutineEachFrame());
      instrNBackLoopLoopScheduler.add(instrNBackRoutineEnd(snapshot));
      instrNBackLoopLoopScheduler.add(instrNBackLoopLoopEndIteration(instrNBackLoopLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function instrNBackLoopLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(instrNBackLoop);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function instrNBackLoopLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var NBackTargetLoop;
function NBackTargetLoopLoopBegin(NBackTargetLoopLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    NBackTargetLoop = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 3, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'NBackTargetLoop'
    });
    psychoJS.experiment.addLoop(NBackTargetLoop); // add the loop to the experiment
    currentLoop = NBackTargetLoop;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisNBackTargetLoop of NBackTargetLoop) {
      snapshot = NBackTargetLoop.getSnapshot();
      NBackTargetLoopLoopScheduler.add(importConditions(snapshot));
      NBackTargetLoopLoopScheduler.add(timerRoutineBegin(snapshot));
      NBackTargetLoopLoopScheduler.add(timerRoutineEachFrame());
      NBackTargetLoopLoopScheduler.add(timerRoutineEnd(snapshot));
      NBackTargetLoopLoopScheduler.add(NBackFirst3TrialsRoutineBegin(snapshot));
      NBackTargetLoopLoopScheduler.add(NBackFirst3TrialsRoutineEachFrame());
      NBackTargetLoopLoopScheduler.add(NBackFirst3TrialsRoutineEnd(snapshot));
      NBackTargetLoopLoopScheduler.add(NBackTargetLoopLoopEndIteration(NBackTargetLoopLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function NBackTargetLoopLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(NBackTargetLoop);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function NBackTargetLoopLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var NBackTrialsLoop;
function NBackTrialsLoopLoopBegin(NBackTrialsLoopLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    NBackTrialsLoop = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 6000, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: '2-back_loop.xlsx',
      seed: undefined, name: 'NBackTrialsLoop'
    });
    psychoJS.experiment.addLoop(NBackTrialsLoop); // add the loop to the experiment
    currentLoop = NBackTrialsLoop;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisNBackTrialsLoop of NBackTrialsLoop) {
      snapshot = NBackTrialsLoop.getSnapshot();
      NBackTrialsLoopLoopScheduler.add(importConditions(snapshot));
      NBackTrialsLoopLoopScheduler.add(timerRoutineBegin(snapshot));
      NBackTrialsLoopLoopScheduler.add(timerRoutineEachFrame());
      NBackTrialsLoopLoopScheduler.add(timerRoutineEnd(snapshot));
      NBackTrialsLoopLoopScheduler.add(NBackRemainderTrialsRoutineBegin(snapshot));
      NBackTrialsLoopLoopScheduler.add(NBackRemainderTrialsRoutineEachFrame());
      NBackTrialsLoopLoopScheduler.add(NBackRemainderTrialsRoutineEnd(snapshot));
      NBackTrialsLoopLoopScheduler.add(NBackFeedbackRoutineBegin(snapshot));
      NBackTrialsLoopLoopScheduler.add(NBackFeedbackRoutineEachFrame());
      NBackTrialsLoopLoopScheduler.add(NBackFeedbackRoutineEnd(snapshot));
      NBackTrialsLoopLoopScheduler.add(NBackTrialsLoopLoopEndIteration(NBackTrialsLoopLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function NBackTrialsLoopLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(NBackTrialsLoop);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function NBackTrialsLoopLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var instrSearchLoop;
function instrSearchLoopLoopBegin(instrSearchLoopLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    instrSearchLoop = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 100, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'instrSearchLoop'
    });
    psychoJS.experiment.addLoop(instrSearchLoop); // add the loop to the experiment
    currentLoop = instrSearchLoop;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisInstrSearchLoop of instrSearchLoop) {
      snapshot = instrSearchLoop.getSnapshot();
      instrSearchLoopLoopScheduler.add(importConditions(snapshot));
      instrSearchLoopLoopScheduler.add(instrSearchRoutineBegin(snapshot));
      instrSearchLoopLoopScheduler.add(instrSearchRoutineEachFrame());
      instrSearchLoopLoopScheduler.add(instrSearchRoutineEnd(snapshot));
      instrSearchLoopLoopScheduler.add(instrSearchLoopLoopEndIteration(instrSearchLoopLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function instrSearchLoopLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(instrSearchLoop);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function instrSearchLoopLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var searchLoop;
function searchLoopLoopBegin(searchLoopLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    searchLoop = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 6000, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'visualSearchConds.csv',
      seed: undefined, name: 'searchLoop'
    });
    psychoJS.experiment.addLoop(searchLoop); // add the loop to the experiment
    currentLoop = searchLoop;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisSearchLoop of searchLoop) {
      snapshot = searchLoop.getSnapshot();
      searchLoopLoopScheduler.add(importConditions(snapshot));
      searchLoopLoopScheduler.add(timerRoutineBegin(snapshot));
      searchLoopLoopScheduler.add(timerRoutineEachFrame());
      searchLoopLoopScheduler.add(timerRoutineEnd(snapshot));
      searchLoopLoopScheduler.add(searchTrialRoutineBegin(snapshot));
      searchLoopLoopScheduler.add(searchTrialRoutineEachFrame());
      searchLoopLoopScheduler.add(searchTrialRoutineEnd(snapshot));
      searchLoopLoopScheduler.add(searchFeedbackRoutineBegin(snapshot));
      searchLoopLoopScheduler.add(searchFeedbackRoutineEachFrame());
      searchLoopLoopScheduler.add(searchFeedbackRoutineEnd(snapshot));
      searchLoopLoopScheduler.add(searchLoopLoopEndIteration(searchLoopLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function searchLoopLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(searchLoop);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function searchLoopLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var instrMentRotaLoop;
function instrMentRotaLoopLoopBegin(instrMentRotaLoopLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    instrMentRotaLoop = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 100, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'instrMentRotaLoop'
    });
    psychoJS.experiment.addLoop(instrMentRotaLoop); // add the loop to the experiment
    currentLoop = instrMentRotaLoop;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisInstrMentRotaLoop of instrMentRotaLoop) {
      snapshot = instrMentRotaLoop.getSnapshot();
      instrMentRotaLoopLoopScheduler.add(importConditions(snapshot));
      instrMentRotaLoopLoopScheduler.add(instrMentRotRoutineBegin(snapshot));
      instrMentRotaLoopLoopScheduler.add(instrMentRotRoutineEachFrame());
      instrMentRotaLoopLoopScheduler.add(instrMentRotRoutineEnd(snapshot));
      instrMentRotaLoopLoopScheduler.add(instrMentRotaLoopLoopEndIteration(instrMentRotaLoopLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function instrMentRotaLoopLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(instrMentRotaLoop);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function instrMentRotaLoopLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var mentRotTrialsLooop;
function mentRotTrialsLooopLoopBegin(mentRotTrialsLooopLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    mentRotTrialsLooop = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 6000, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'response.csv',
      seed: undefined, name: 'mentRotTrialsLooop'
    });
    psychoJS.experiment.addLoop(mentRotTrialsLooop); // add the loop to the experiment
    currentLoop = mentRotTrialsLooop;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisMentRotTrialsLooop of mentRotTrialsLooop) {
      snapshot = mentRotTrialsLooop.getSnapshot();
      mentRotTrialsLooopLoopScheduler.add(importConditions(snapshot));
      mentRotTrialsLooopLoopScheduler.add(timerRoutineBegin(snapshot));
      mentRotTrialsLooopLoopScheduler.add(timerRoutineEachFrame());
      mentRotTrialsLooopLoopScheduler.add(timerRoutineEnd(snapshot));
      mentRotTrialsLooopLoopScheduler.add(mentRotTrialRoutineBegin(snapshot));
      mentRotTrialsLooopLoopScheduler.add(mentRotTrialRoutineEachFrame());
      mentRotTrialsLooopLoopScheduler.add(mentRotTrialRoutineEnd(snapshot));
      mentRotTrialsLooopLoopScheduler.add(mentRotFeedbackRoutineBegin(snapshot));
      mentRotTrialsLooopLoopScheduler.add(mentRotFeedbackRoutineEachFrame());
      mentRotTrialsLooopLoopScheduler.add(mentRotFeedbackRoutineEnd(snapshot));
      mentRotTrialsLooopLoopScheduler.add(mentRotTrialsLooopLoopEndIteration(mentRotTrialsLooopLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function mentRotTrialsLooopLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(mentRotTrialsLooop);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function mentRotTrialsLooopLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var t;
var frameN;
var continueRoutine;
var _key_resp_allKeys;
var instrComponents;
function instrRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'instr' ---
    t = 0;
    instrClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // Run 'Begin Routine' code from centerAlignMaster
    instrHeaderText.setAlignHoriz("center");
    text.setAlignHoriz("center");
    instrHeaderText_2.setAlignHoriz("center");
    text_2.setAlignHoriz("center");
    restBreak1Text.setAlignHoriz("center");
    instrHeaderText_3.setAlignHoriz("center");
    text_3.setAlignHoriz("center");
    restBreak2Text.setAlignHoriz("center");
    instrHeaderText_4.setAlignHoriz("center");
    text_4.setAlignHoriz("center");
    restBreak3Text.setAlignHoriz("center");
    instrHeaderText_5.setAlignHoriz("center");
    text_5.setAlignHoriz("center");
    end_text.setAlignHoriz("center");
    
    key_resp.keys = undefined;
    key_resp.rt = undefined;
    _key_resp_allKeys = [];
    text.setText(instrDict[currentInstr]);
    // keep track of which components have finished
    instrComponents = [];
    instrComponents.push(key_resp);
    instrComponents.push(instrHeaderText);
    instrComponents.push(text);
    
    for (const thisComponent of instrComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function instrRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'instr' ---
    // get current time
    t = instrClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *key_resp* updates
    if (t >= 0 && key_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp.tStart = t;  // (not accounting for frame time here)
      key_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp.clearEvents(); });
    }

    if (key_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp.getKeys({keyList: ['left', 'right'], waitRelease: false});
      _key_resp_allKeys = _key_resp_allKeys.concat(theseKeys);
      if (_key_resp_allKeys.length > 0) {
        key_resp.keys = _key_resp_allKeys[_key_resp_allKeys.length - 1].name;  // just the last key pressed
        key_resp.rt = _key_resp_allKeys[_key_resp_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *instrHeaderText* updates
    if (t >= 0.0 && instrHeaderText.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instrHeaderText.tStart = t;  // (not accounting for frame time here)
      instrHeaderText.frameNStart = frameN;  // exact frame index
      
      instrHeaderText.setAutoDraw(true);
    }

    
    // *text* updates
    if (t >= 0 && text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text.tStart = t;  // (not accounting for frame time here)
      text.frameNStart = frameN;  // exact frame index
      
      text.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of instrComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function instrRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'instr' ---
    for (const thisComponent of instrComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // Run 'End Routine' code from elapsed_time
    psychoJS.experiment.addData("elapsed.time", elapsedTime.getTime());
    
    // Run 'End Routine' code from instructions_code
    console.log(key_resp.keys);
    if ((key_resp.keys === "left")) {
        currentInstr = (Number.parseInt(currentInstr) - 1);
    } else {
        if ((key_resp.keys === "right")) {
            currentInstr = (Number.parseInt(currentInstr) + 1);
        }
    }
    if ((currentInstr === 0)) {
        currentInstr = 1;
    }
    if ((currentInstr === 4)) {
        currentLoop.finished = true;
    }
    currentInstr = currentInstr.toString();
    
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp.corr, level);
    }
    psychoJS.experiment.addData('key_resp.keys', key_resp.keys);
    if (typeof key_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp.rt', key_resp.rt);
        routineTimer.reset();
        }
    
    key_resp.stop();
    // the Routine "instr" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _key_resp_2_allKeys;
var instrAXCPTComponents;
function instrAXCPTRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'instrAXCPT' ---
    t = 0;
    instrAXCPTClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp_2.keys = undefined;
    key_resp_2.rt = undefined;
    _key_resp_2_allKeys = [];
    text_2.setText(instrDict[currentInstr]);
    // keep track of which components have finished
    instrAXCPTComponents = [];
    instrAXCPTComponents.push(key_resp_2);
    instrAXCPTComponents.push(instrHeaderText_2);
    instrAXCPTComponents.push(text_2);
    
    for (const thisComponent of instrAXCPTComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function instrAXCPTRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'instrAXCPT' ---
    // get current time
    t = instrAXCPTClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *key_resp_2* updates
    if (t >= 0 && key_resp_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_2.tStart = t;  // (not accounting for frame time here)
      key_resp_2.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_2.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_2.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_2.clearEvents(); });
    }

    if (key_resp_2.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_2.getKeys({keyList: ['left', 'right', 'k'], waitRelease: false});
      _key_resp_2_allKeys = _key_resp_2_allKeys.concat(theseKeys);
      if (_key_resp_2_allKeys.length > 0) {
        key_resp_2.keys = _key_resp_2_allKeys[_key_resp_2_allKeys.length - 1].name;  // just the last key pressed
        key_resp_2.rt = _key_resp_2_allKeys[_key_resp_2_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *instrHeaderText_2* updates
    if (t >= 0.0 && instrHeaderText_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instrHeaderText_2.tStart = t;  // (not accounting for frame time here)
      instrHeaderText_2.frameNStart = frameN;  // exact frame index
      
      instrHeaderText_2.setAutoDraw(true);
    }

    
    // *text_2* updates
    if (t >= 0 && text_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_2.tStart = t;  // (not accounting for frame time here)
      text_2.frameNStart = frameN;  // exact frame index
      
      text_2.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of instrAXCPTComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function instrAXCPTRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'instrAXCPT' ---
    for (const thisComponent of instrAXCPTComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // Run 'End Routine' code from elapsed_timer
    psychoJS.experiment.addData("elapsed.time", elapsedTime.getTime());
    
    // Run 'End Routine' code from code_2
    console.log(key_resp_2.keys);
    if ((key_resp_2.keys === "left")) {
        currentInstr = (Number.parseInt(currentInstr) - 1);
    } else {
        if ((key_resp_2.keys === "right")) {
            currentInstr = (Number.parseInt(currentInstr) + 1);
        }
    }
    if ((currentInstr === 3)) {
        currentInstr = 4;
    }
    if ((currentInstr === 7)) {
        currentInstr = 6;
    }
    if ((key_resp_2.keys === "k")) {
        currentLoop.finished = true;
    }
    
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_2.corr, level);
    }
    psychoJS.experiment.addData('key_resp_2.keys', key_resp_2.keys);
    if (typeof key_resp_2.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_2.rt', key_resp_2.rt);
        routineTimer.reset();
        }
    
    key_resp_2.stop();
    // the Routine "instrAXCPT" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var loopTimer;
var createLoopTimerComponents;
function createLoopTimerRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'createLoopTimer' ---
    t = 0;
    createLoopTimerClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // Run 'Begin Routine' code from create_timer_1_code_5
    loopTimer = new util.Clock();
    
    // keep track of which components have finished
    createLoopTimerComponents = [];
    
    for (const thisComponent of createLoopTimerComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function createLoopTimerRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'createLoopTimer' ---
    // get current time
    t = createLoopTimerClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of createLoopTimerComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function createLoopTimerRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'createLoopTimer' ---
    for (const thisComponent of createLoopTimerComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // the Routine "createLoopTimer" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var timerComponents;
function timerRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'timer' ---
    t = 0;
    timerClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(1.200000);
    // update component parameters for each repeat
    // keep track of which components have finished
    timerComponents = [];
    timerComponents.push(timer_text);
    
    for (const thisComponent of timerComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


var frameRemains;
function timerRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'timer' ---
    // get current time
    t = timerClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // Run 'Each Frame' code from timer_code
    if ((loopTimer.getTime() > 300)) {
        currentLoop.finished = true;
    }
    
    
    // *timer_text* updates
    if (t >= 0.0 && timer_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      timer_text.tStart = t;  // (not accounting for frame time here)
      timer_text.frameNStart = frameN;  // exact frame index
      
      timer_text.setAutoDraw(true);
    }

    frameRemains = 0.0 + 1.2 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (timer_text.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      timer_text.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of timerComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function timerRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'timer' ---
    for (const thisComponent of timerComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // Run 'End Routine' code from timer_code
    psychoJS.experiment.addData("elapsed.time", elapsedTime.getTime());
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var distractor1Val;
var distractor2Val;
var cueVal;
var AXCPTtrialComponents;
function AXCPTtrialRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'AXCPTtrial' ---
    t = 0;
    AXCPTtrialClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(4.500000);
    // update component parameters for each repeat
    // Run 'Begin Routine' code from AXCPTtrial_code
    function choice(arr) {
      return arr[Math.floor(Math.random() * arr.length)];
    }
    
    distractor1Val = choice(distractors);
    distractor2Val = choice(distractors);
    if ((trialType === "target")) {
        cueVal = "A";
        probeVal = "X";
    } else {
        if ((trialType === "probeWrong")) {
            cueVal = "A";
            probeVal = choice(Yletters);
        } else {
            if ((trialType === "cueWrong")) {
                cueVal = choice(Bletters);
                probeVal = "X";
            } else {
                if ((trialType === "bothWrong")) {
                    cueVal = choice(Bletters);
                    probeVal = choice(Yletters);
                }
            }
        }
    }
    
    cue_text.setText(cueVal);
    distractor1.setText(distractor1Val);
    distractor2.setText(distractor2Val);
    // keep track of which components have finished
    AXCPTtrialComponents = [];
    AXCPTtrialComponents.push(cue_text);
    AXCPTtrialComponents.push(break1);
    AXCPTtrialComponents.push(distractor1);
    AXCPTtrialComponents.push(break2);
    AXCPTtrialComponents.push(distractor2);
    AXCPTtrialComponents.push(break3);
    
    for (const thisComponent of AXCPTtrialComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function AXCPTtrialRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'AXCPTtrial' ---
    // get current time
    t = AXCPTtrialClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *cue_text* updates
    if (t >= 0.0 && cue_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      cue_text.tStart = t;  // (not accounting for frame time here)
      cue_text.frameNStart = frameN;  // exact frame index
      
      cue_text.setAutoDraw(true);
    }

    frameRemains = 0.3  - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((cue_text.status === PsychoJS.Status.STARTED || cue_text.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      cue_text.setAutoDraw(false);
    }
    
    // *break1* updates
    if (t >= 0.3 && break1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      break1.tStart = t;  // (not accounting for frame time here)
      break1.frameNStart = frameN;  // exact frame index
      
      break1.setAutoDraw(true);
    }

    frameRemains = 0.3 + 1.2 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (break1.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      break1.setAutoDraw(false);
    }
    
    // *distractor1* updates
    if (t >= 1.5 && distractor1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      distractor1.tStart = t;  // (not accounting for frame time here)
      distractor1.frameNStart = frameN;  // exact frame index
      
      distractor1.setAutoDraw(true);
    }

    frameRemains = 1.8  - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((distractor1.status === PsychoJS.Status.STARTED || distractor1.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      distractor1.setAutoDraw(false);
    }
    
    // *break2* updates
    if (t >= 1.8 && break2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      break2.tStart = t;  // (not accounting for frame time here)
      break2.frameNStart = frameN;  // exact frame index
      
      break2.setAutoDraw(true);
    }

    frameRemains = 1.8 + 1.2 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (break2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      break2.setAutoDraw(false);
    }
    
    // *distractor2* updates
    if (t >= 3 && distractor2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      distractor2.tStart = t;  // (not accounting for frame time here)
      distractor2.frameNStart = frameN;  // exact frame index
      
      distractor2.setAutoDraw(true);
    }

    frameRemains = 3.3  - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((distractor2.status === PsychoJS.Status.STARTED || distractor2.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      distractor2.setAutoDraw(false);
    }
    
    // *break3* updates
    if (t >= 3.3 && break3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      break3.tStart = t;  // (not accounting for frame time here)
      break3.frameNStart = frameN;  // exact frame index
      
      break3.setAutoDraw(true);
    }

    frameRemains = 3.3 + 1.2 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (break3.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      break3.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of AXCPTtrialComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function AXCPTtrialRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'AXCPTtrial' ---
    for (const thisComponent of AXCPTtrialComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _AXCPT_resp_allKeys;
var AXCPTprobeComponents;
function AXCPTprobeRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'AXCPTprobe' ---
    t = 0;
    AXCPTprobeClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(1.500000);
    // update component parameters for each repeat
    probe_text.setText(probeVal);
    AXCPT_resp.keys = undefined;
    AXCPT_resp.rt = undefined;
    _AXCPT_resp_allKeys = [];
    // keep track of which components have finished
    AXCPTprobeComponents = [];
    AXCPTprobeComponents.push(probe_text);
    AXCPTprobeComponents.push(AXCPT_resp);
    
    for (const thisComponent of AXCPTprobeComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function AXCPTprobeRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'AXCPTprobe' ---
    // get current time
    t = AXCPTprobeClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *probe_text* updates
    if (t >= 0.0 && probe_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      probe_text.tStart = t;  // (not accounting for frame time here)
      probe_text.frameNStart = frameN;  // exact frame index
      
      probe_text.setAutoDraw(true);
    }

    frameRemains = 0.3  - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((probe_text.status === PsychoJS.Status.STARTED || probe_text.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      probe_text.setAutoDraw(false);
    }
    
    // *AXCPT_resp* updates
    if (t >= 0.0 && AXCPT_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      AXCPT_resp.tStart = t;  // (not accounting for frame time here)
      AXCPT_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { AXCPT_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { AXCPT_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { AXCPT_resp.clearEvents(); });
    }

    frameRemains = 1.5  - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((AXCPT_resp.status === PsychoJS.Status.STARTED || AXCPT_resp.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      AXCPT_resp.status = PsychoJS.Status.FINISHED;
  }

    if (AXCPT_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = AXCPT_resp.getKeys({keyList: ['k', 'd'], waitRelease: false});
      _AXCPT_resp_allKeys = _AXCPT_resp_allKeys.concat(theseKeys);
      if (_AXCPT_resp_allKeys.length > 0) {
        AXCPT_resp.keys = _AXCPT_resp_allKeys[_AXCPT_resp_allKeys.length - 1].name;  // just the last key pressed
        AXCPT_resp.rt = _AXCPT_resp_allKeys[_AXCPT_resp_allKeys.length - 1].rt;
        // was this correct?
        if (AXCPT_resp.keys == corrResponse) {
            AXCPT_resp.corr = 1;
        } else {
            AXCPT_resp.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of AXCPTprobeComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function AXCPTprobeRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'AXCPTprobe' ---
    for (const thisComponent of AXCPTprobeComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // was no response the correct answer?!
    if (AXCPT_resp.keys === undefined) {
      if (['None','none',undefined].includes(corrResponse)) {
         AXCPT_resp.corr = 1;  // correct non-response
      } else {
         AXCPT_resp.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for current loop
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(AXCPT_resp.corr, level);
    }
    psychoJS.experiment.addData('AXCPT_resp.keys', AXCPT_resp.keys);
    psychoJS.experiment.addData('AXCPT_resp.corr', AXCPT_resp.corr);
    if (typeof AXCPT_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('AXCPT_resp.rt', AXCPT_resp.rt);
        routineTimer.reset();
        }
    
    AXCPT_resp.stop();
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var AXCPTfeedbackComponents;
function AXCPTfeedbackRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'AXCPTfeedback' ---
    t = 0;
    AXCPTfeedbackClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(1.000000);
    // update component parameters for each repeat
    // Run 'Begin Routine' code from AXCPTfeedback_code
    if (AXCPT_resp.corr) {
        msg = "Correct";
    } else {
        msg = "Incorrect";
    }
    
    AXCPTfeedback_text.setText(msg);
    // keep track of which components have finished
    AXCPTfeedbackComponents = [];
    AXCPTfeedbackComponents.push(AXCPTfeedback_text);
    
    for (const thisComponent of AXCPTfeedbackComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function AXCPTfeedbackRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'AXCPTfeedback' ---
    // get current time
    t = AXCPTfeedbackClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *AXCPTfeedback_text* updates
    if (t >= 0.0 && AXCPTfeedback_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      AXCPTfeedback_text.tStart = t;  // (not accounting for frame time here)
      AXCPTfeedback_text.frameNStart = frameN;  // exact frame index
      
      AXCPTfeedback_text.setAutoDraw(true);
    }

    frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (AXCPTfeedback_text.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      AXCPTfeedback_text.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of AXCPTfeedbackComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function AXCPTfeedbackRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'AXCPTfeedback' ---
    for (const thisComponent of AXCPTfeedbackComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var break1Timer;
var _restBreak1_key_resp_allKeys;
var restBreak1Components;
function restBreak1RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'restBreak1' ---
    t = 0;
    restBreak1Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // Run 'Begin Routine' code from elapsed_timer_3
    break1Timer = new util.Clock();
    
    restBreak1_key_resp.keys = undefined;
    restBreak1_key_resp.rt = undefined;
    _restBreak1_key_resp_allKeys = [];
    // keep track of which components have finished
    restBreak1Components = [];
    restBreak1Components.push(restBreak1Text);
    restBreak1Components.push(restBreak1_key_resp);
    
    for (const thisComponent of restBreak1Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function restBreak1RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'restBreak1' ---
    // get current time
    t = restBreak1Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *restBreak1Text* updates
    if (t >= 0.0 && restBreak1Text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      restBreak1Text.tStart = t;  // (not accounting for frame time here)
      restBreak1Text.frameNStart = frameN;  // exact frame index
      
      restBreak1Text.setAutoDraw(true);
    }

    
    // *restBreak1_key_resp* updates
    if (t >= 0 && restBreak1_key_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      restBreak1_key_resp.tStart = t;  // (not accounting for frame time here)
      restBreak1_key_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { restBreak1_key_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { restBreak1_key_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { restBreak1_key_resp.clearEvents(); });
    }

    if (restBreak1_key_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = restBreak1_key_resp.getKeys({keyList: ['right'], waitRelease: false});
      _restBreak1_key_resp_allKeys = _restBreak1_key_resp_allKeys.concat(theseKeys);
      if (_restBreak1_key_resp_allKeys.length > 0) {
        restBreak1_key_resp.keys = _restBreak1_key_resp_allKeys[_restBreak1_key_resp_allKeys.length - 1].name;  // just the last key pressed
        restBreak1_key_resp.rt = _restBreak1_key_resp_allKeys[_restBreak1_key_resp_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of restBreak1Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function restBreak1RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'restBreak1' ---
    for (const thisComponent of restBreak1Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // Run 'End Routine' code from elapsed_timer_3
    psychoJS.experiment.addData("elapsed.time", elapsedTime.getTime());
    psychoJS.experiment.addData("break1.duration", break1Timer.getTime());
    
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(restBreak1_key_resp.corr, level);
    }
    psychoJS.experiment.addData('restBreak1_key_resp.keys', restBreak1_key_resp.keys);
    if (typeof restBreak1_key_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('restBreak1_key_resp.rt', restBreak1_key_resp.rt);
        routineTimer.reset();
        }
    
    restBreak1_key_resp.stop();
    // the Routine "restBreak1" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _key_resp_3_allKeys;
var instrNBackComponents;
function instrNBackRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'instrNBack' ---
    t = 0;
    instrNBackClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // Run 'Begin Routine' code from code_3
    if ((currentInstr === 6)) {
        currentInstr = 7;
    }
    
    key_resp_3.keys = undefined;
    key_resp_3.rt = undefined;
    _key_resp_3_allKeys = [];
    text_3.setText(instrDict[currentInstr]);
    // keep track of which components have finished
    instrNBackComponents = [];
    instrNBackComponents.push(key_resp_3);
    instrNBackComponents.push(instrHeaderText_3);
    instrNBackComponents.push(text_3);
    
    for (const thisComponent of instrNBackComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function instrNBackRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'instrNBack' ---
    // get current time
    t = instrNBackClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *key_resp_3* updates
    if (t >= 0 && key_resp_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_3.tStart = t;  // (not accounting for frame time here)
      key_resp_3.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_3.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_3.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_3.clearEvents(); });
    }

    if (key_resp_3.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_3.getKeys({keyList: ['left', 'right', 'k'], waitRelease: false});
      _key_resp_3_allKeys = _key_resp_3_allKeys.concat(theseKeys);
      if (_key_resp_3_allKeys.length > 0) {
        key_resp_3.keys = _key_resp_3_allKeys[_key_resp_3_allKeys.length - 1].name;  // just the last key pressed
        key_resp_3.rt = _key_resp_3_allKeys[_key_resp_3_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *instrHeaderText_3* updates
    if (t >= 0.0 && instrHeaderText_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instrHeaderText_3.tStart = t;  // (not accounting for frame time here)
      instrHeaderText_3.frameNStart = frameN;  // exact frame index
      
      instrHeaderText_3.setAutoDraw(true);
    }

    
    // *text_3* updates
    if (t >= 0 && text_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_3.tStart = t;  // (not accounting for frame time here)
      text_3.frameNStart = frameN;  // exact frame index
      
      text_3.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of instrNBackComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function instrNBackRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'instrNBack' ---
    for (const thisComponent of instrNBackComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // Run 'End Routine' code from elapsed_timer_6
    psychoJS.experiment.addData("elapsed.time", elapsedTime.getTime());
    
    // Run 'End Routine' code from code_3
    console.log(key_resp_3.keys);
    if ((key_resp_3.keys === "left")) {
        currentInstr = (Number.parseInt(currentInstr) - 1);
    } else {
        if ((key_resp_3.keys === "right")) {
            currentInstr = (Number.parseInt(currentInstr) + 1);
        }
    }
    if ((currentInstr === 6)) {
        currentInstr = 7;
    }
    if ((currentInstr === 10)) {
        currentInstr = 9;
    }
    if ((key_resp_3.keys === "k")) {
        currentLoop.finished = true;
    }
    
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_3.corr, level);
    }
    psychoJS.experiment.addData('key_resp_3.keys', key_resp_3.keys);
    if (typeof key_resp_3.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_3.rt', key_resp_3.rt);
        routineTimer.reset();
        }
    
    key_resp_3.stop();
    // the Routine "instrNBack" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var letters;
var nletter;
var _NBack_resp_1_allKeys;
var NBackFirst3TrialsComponents;
function NBackFirst3TrialsRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'NBackFirst3Trials' ---
    t = 0;
    NBackFirst3TrialsClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(2.000000);
    // update component parameters for each repeat
    // Run 'Begin Routine' code from NBackFirst3Trials_code
    function choice(arr) {
      return arr[Math.floor(Math.random() * arr.length)];
    }
    
    letters = ["B", "C", "D", "F", "G", "H", "J", "K", "L", "M", "N", "P", "Q", "R", "S", "T", "V", "W", "X", "Z"];
    nletter = choice(letters);
    
    NBackText_1.setText(nletter);
    NBack_resp_1.keys = undefined;
    NBack_resp_1.rt = undefined;
    _NBack_resp_1_allKeys = [];
    // keep track of which components have finished
    NBackFirst3TrialsComponents = [];
    NBackFirst3TrialsComponents.push(NBackText_1);
    NBackFirst3TrialsComponents.push(NBack_resp_1);
    
    for (const thisComponent of NBackFirst3TrialsComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function NBackFirst3TrialsRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'NBackFirst3Trials' ---
    // get current time
    t = NBackFirst3TrialsClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *NBackText_1* updates
    if (t >= 0.0 && NBackText_1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      NBackText_1.tStart = t;  // (not accounting for frame time here)
      NBackText_1.frameNStart = frameN;  // exact frame index
      
      NBackText_1.setAutoDraw(true);
    }

    frameRemains = 2  - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((NBackText_1.status === PsychoJS.Status.STARTED || NBackText_1.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      NBackText_1.setAutoDraw(false);
    }
    
    // *NBack_resp_1* updates
    if (t >= 0.0 && NBack_resp_1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      NBack_resp_1.tStart = t;  // (not accounting for frame time here)
      NBack_resp_1.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { NBack_resp_1.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { NBack_resp_1.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { NBack_resp_1.clearEvents(); });
    }

    frameRemains = 2  - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((NBack_resp_1.status === PsychoJS.Status.STARTED || NBack_resp_1.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      NBack_resp_1.status = PsychoJS.Status.FINISHED;
  }

    if (NBack_resp_1.status === PsychoJS.Status.STARTED) {
      let theseKeys = NBack_resp_1.getKeys({keyList: ['k', 'd'], waitRelease: false});
      _NBack_resp_1_allKeys = _NBack_resp_1_allKeys.concat(theseKeys);
      if (_NBack_resp_1_allKeys.length > 0) {
        NBack_resp_1.keys = _NBack_resp_1_allKeys[_NBack_resp_1_allKeys.length - 1].name;  // just the last key pressed
        NBack_resp_1.rt = _NBack_resp_1_allKeys[_NBack_resp_1_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of NBackFirst3TrialsComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function NBackFirst3TrialsRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'NBackFirst3Trials' ---
    for (const thisComponent of NBackFirst3TrialsComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // Run 'End Routine' code from NBackFirst3Trials_code
    Back2minus3 = Back2minus2;
    Back2minus2 = Back2minus1;
    Back2minus1 = nletter;
    
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(NBack_resp_1.corr, level);
    }
    psychoJS.experiment.addData('NBack_resp_1.keys', NBack_resp_1.keys);
    if (typeof NBack_resp_1.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('NBack_resp_1.rt', NBack_resp_1.rt);
        routineTimer.reset();
        }
    
    NBack_resp_1.stop();
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _NBack_resp_2_allKeys;
var NBackRemainderTrialsComponents;
function NBackRemainderTrialsRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'NBackRemainderTrials' ---
    t = 0;
    NBackRemainderTrialsClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(2.000000);
    // update component parameters for each repeat
    // Run 'Begin Routine' code from NBackTrials_code
    function choice(arr) {
      return arr[Math.floor(Math.random() * arr.length)];
    }
    
    if ((trialType === "nonTarget")) {
        letters = ["B", "C", "D", "F", "G", "H", "J", "K", "L", "M", "N", "P", "Q", "R", "S", "T", "V", "W", "X", "Z"];
        nletter = choice(letters);
        if ((nletter === Back2minus1)) {
            nletter = choice(letters);
        }
        if ((nletter === Back2minus2)) {
            nletter = choice(letters);
        }
    } else {
        if ((trialType === "target")) {
            nletter = Back2minus3;
        }
    }
    
    NBackText_2.setText(nletter);
    NBack_resp_2.keys = undefined;
    NBack_resp_2.rt = undefined;
    _NBack_resp_2_allKeys = [];
    // keep track of which components have finished
    NBackRemainderTrialsComponents = [];
    NBackRemainderTrialsComponents.push(NBackText_2);
    NBackRemainderTrialsComponents.push(NBack_resp_2);
    
    for (const thisComponent of NBackRemainderTrialsComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function NBackRemainderTrialsRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'NBackRemainderTrials' ---
    // get current time
    t = NBackRemainderTrialsClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *NBackText_2* updates
    if (t >= 0.0 && NBackText_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      NBackText_2.tStart = t;  // (not accounting for frame time here)
      NBackText_2.frameNStart = frameN;  // exact frame index
      
      NBackText_2.setAutoDraw(true);
    }

    frameRemains = 2  - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((NBackText_2.status === PsychoJS.Status.STARTED || NBackText_2.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      NBackText_2.setAutoDraw(false);
    }
    
    // *NBack_resp_2* updates
    if (t >= 0.0 && NBack_resp_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      NBack_resp_2.tStart = t;  // (not accounting for frame time here)
      NBack_resp_2.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { NBack_resp_2.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { NBack_resp_2.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { NBack_resp_2.clearEvents(); });
    }

    frameRemains = 2  - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((NBack_resp_2.status === PsychoJS.Status.STARTED || NBack_resp_2.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      NBack_resp_2.status = PsychoJS.Status.FINISHED;
  }

    if (NBack_resp_2.status === PsychoJS.Status.STARTED) {
      let theseKeys = NBack_resp_2.getKeys({keyList: ['k', 'd'], waitRelease: false});
      _NBack_resp_2_allKeys = _NBack_resp_2_allKeys.concat(theseKeys);
      if (_NBack_resp_2_allKeys.length > 0) {
        NBack_resp_2.keys = _NBack_resp_2_allKeys[_NBack_resp_2_allKeys.length - 1].name;  // just the last key pressed
        NBack_resp_2.rt = _NBack_resp_2_allKeys[_NBack_resp_2_allKeys.length - 1].rt;
        // was this correct?
        if (NBack_resp_2.keys == corrResponse) {
            NBack_resp_2.corr = 1;
        } else {
            NBack_resp_2.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of NBackRemainderTrialsComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function NBackRemainderTrialsRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'NBackRemainderTrials' ---
    for (const thisComponent of NBackRemainderTrialsComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // Run 'End Routine' code from NBackTrials_code
    Back2minus3 = Back2minus2;
    Back2minus2 = Back2minus1;
    Back2minus1 = nletter;
    
    // was no response the correct answer?!
    if (NBack_resp_2.keys === undefined) {
      if (['None','none',undefined].includes(corrResponse)) {
         NBack_resp_2.corr = 1;  // correct non-response
      } else {
         NBack_resp_2.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for current loop
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(NBack_resp_2.corr, level);
    }
    psychoJS.experiment.addData('NBack_resp_2.keys', NBack_resp_2.keys);
    psychoJS.experiment.addData('NBack_resp_2.corr', NBack_resp_2.corr);
    if (typeof NBack_resp_2.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('NBack_resp_2.rt', NBack_resp_2.rt);
        routineTimer.reset();
        }
    
    NBack_resp_2.stop();
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var NBackFeedbackComponents;
function NBackFeedbackRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'NBackFeedback' ---
    t = 0;
    NBackFeedbackClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(1.000000);
    // update component parameters for each repeat
    // Run 'Begin Routine' code from NBackfeedback_code
    if (NBack_resp_2.corr) {
        msg = "Correct";
    } else {
        msg = "Incorrect";
    }
    
    AXCPTfeedback_text_2.setText(msg);
    // keep track of which components have finished
    NBackFeedbackComponents = [];
    NBackFeedbackComponents.push(AXCPTfeedback_text_2);
    
    for (const thisComponent of NBackFeedbackComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function NBackFeedbackRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'NBackFeedback' ---
    // get current time
    t = NBackFeedbackClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *AXCPTfeedback_text_2* updates
    if (t >= 0.0 && AXCPTfeedback_text_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      AXCPTfeedback_text_2.tStart = t;  // (not accounting for frame time here)
      AXCPTfeedback_text_2.frameNStart = frameN;  // exact frame index
      
      AXCPTfeedback_text_2.setAutoDraw(true);
    }

    frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (AXCPTfeedback_text_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      AXCPTfeedback_text_2.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of NBackFeedbackComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function NBackFeedbackRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'NBackFeedback' ---
    for (const thisComponent of NBackFeedbackComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var break2Timer;
var _restBreak2_key_resp_allKeys;
var restBreak2Components;
function restBreak2RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'restBreak2' ---
    t = 0;
    restBreak2Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // Run 'Begin Routine' code from elapsed_timer_4
    break2Timer = new util.Clock();
    
    restBreak2_key_resp.keys = undefined;
    restBreak2_key_resp.rt = undefined;
    _restBreak2_key_resp_allKeys = [];
    // keep track of which components have finished
    restBreak2Components = [];
    restBreak2Components.push(restBreak2Text);
    restBreak2Components.push(restBreak2_key_resp);
    
    for (const thisComponent of restBreak2Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function restBreak2RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'restBreak2' ---
    // get current time
    t = restBreak2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *restBreak2Text* updates
    if (t >= 0.0 && restBreak2Text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      restBreak2Text.tStart = t;  // (not accounting for frame time here)
      restBreak2Text.frameNStart = frameN;  // exact frame index
      
      restBreak2Text.setAutoDraw(true);
    }

    
    // *restBreak2_key_resp* updates
    if (t >= 0 && restBreak2_key_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      restBreak2_key_resp.tStart = t;  // (not accounting for frame time here)
      restBreak2_key_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { restBreak2_key_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { restBreak2_key_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { restBreak2_key_resp.clearEvents(); });
    }

    if (restBreak2_key_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = restBreak2_key_resp.getKeys({keyList: ['right'], waitRelease: false});
      _restBreak2_key_resp_allKeys = _restBreak2_key_resp_allKeys.concat(theseKeys);
      if (_restBreak2_key_resp_allKeys.length > 0) {
        restBreak2_key_resp.keys = _restBreak2_key_resp_allKeys[_restBreak2_key_resp_allKeys.length - 1].name;  // just the last key pressed
        restBreak2_key_resp.rt = _restBreak2_key_resp_allKeys[_restBreak2_key_resp_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of restBreak2Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function restBreak2RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'restBreak2' ---
    for (const thisComponent of restBreak2Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // Run 'End Routine' code from elapsed_timer_4
    psychoJS.experiment.addData("elapsed.time", elapsedTime.getTime());
    psychoJS.experiment.addData("break2.duration", break2Timer.getTime());
    
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(restBreak2_key_resp.corr, level);
    }
    psychoJS.experiment.addData('restBreak2_key_resp.keys', restBreak2_key_resp.keys);
    if (typeof restBreak2_key_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('restBreak2_key_resp.rt', restBreak2_key_resp.rt);
        routineTimer.reset();
        }
    
    restBreak2_key_resp.stop();
    // the Routine "restBreak2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _key_resp_4_allKeys;
var instrSearchComponents;
function instrSearchRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'instrSearch' ---
    t = 0;
    instrSearchClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // Run 'Begin Routine' code from code
    if ((currentInstr === 9)) {
        currentInstr = 10;
    }
    
    key_resp_4.keys = undefined;
    key_resp_4.rt = undefined;
    _key_resp_4_allKeys = [];
    text_4.setText(instrDict[currentInstr]);
    // keep track of which components have finished
    instrSearchComponents = [];
    instrSearchComponents.push(key_resp_4);
    instrSearchComponents.push(instrHeaderText_4);
    instrSearchComponents.push(text_4);
    
    for (const thisComponent of instrSearchComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function instrSearchRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'instrSearch' ---
    // get current time
    t = instrSearchClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *key_resp_4* updates
    if (t >= 0 && key_resp_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_4.tStart = t;  // (not accounting for frame time here)
      key_resp_4.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_4.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_4.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_4.clearEvents(); });
    }

    if (key_resp_4.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_4.getKeys({keyList: ['left', 'right', 'k'], waitRelease: false});
      _key_resp_4_allKeys = _key_resp_4_allKeys.concat(theseKeys);
      if (_key_resp_4_allKeys.length > 0) {
        key_resp_4.keys = _key_resp_4_allKeys[_key_resp_4_allKeys.length - 1].name;  // just the last key pressed
        key_resp_4.rt = _key_resp_4_allKeys[_key_resp_4_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *instrHeaderText_4* updates
    if (t >= 0.0 && instrHeaderText_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instrHeaderText_4.tStart = t;  // (not accounting for frame time here)
      instrHeaderText_4.frameNStart = frameN;  // exact frame index
      
      instrHeaderText_4.setAutoDraw(true);
    }

    
    // *text_4* updates
    if (t >= 0 && text_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_4.tStart = t;  // (not accounting for frame time here)
      text_4.frameNStart = frameN;  // exact frame index
      
      text_4.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of instrSearchComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function instrSearchRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'instrSearch' ---
    for (const thisComponent of instrSearchComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // Run 'End Routine' code from elapsed_timer_8
    psychoJS.experiment.addData("elapsed.time", elapsedTime.getTime());
    
    // Run 'End Routine' code from code
    console.log(key_resp_4.keys);
    if ((key_resp_4.keys === "left")) {
        currentInstr = (Number.parseInt(currentInstr) - 1);
    } else {
        if ((key_resp_4.keys === "right")) {
            currentInstr = (Number.parseInt(currentInstr) + 1);
        }
    }
    if ((currentInstr === 9)) {
        currentInstr = 10;
    }
    if ((currentInstr === 13)) {
        currentInstr = 12;
    }
    if ((key_resp_4.keys === "k")) {
        currentLoop.finished = true;
    }
    
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_4.corr, level);
    }
    psychoJS.experiment.addData('key_resp_4.keys', key_resp_4.keys);
    if (typeof key_resp_4.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_4.rt', key_resp_4.rt);
        routineTimer.reset();
        }
    
    key_resp_4.stop();
    // the Routine "instrSearch" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var shuffle;
var targetOrient;
var stim2Orient;
var stim3Orient;
var stim4Orient;
var stim5Orient;
var stim6Orient;
var stim7Orient;
var stim8Orient;
var stim9Orient;
var stim10Orient;
var stim11Orient;
var _key_resp_6_allKeys;
var searchTrialComponents;
function searchTrialRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'searchTrial' ---
    t = 0;
    searchTrialClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    shuffle = util.shuffle
    
    function choice(arr) {
      return arr[Math.floor(Math.random() * arr.length)];
    }
    // Run 'Begin Routine' code from searchCode
    shuffle(PosList);
    targetOrient = choice(orientList);
    stim2Orient = choice(orientList);
    stim3Orient = choice(orientList);
    stim4Orient = choice(orientList);
    stim5Orient = choice(orientList);
    stim6Orient = choice(orientList);
    stim7Orient = choice(orientList);
    stim8Orient = choice(orientList);
    stim9Orient = choice(orientList);
    stim10Orient = choice(orientList);
    stim11Orient = choice(orientList);
    
    key_resp_6.keys = undefined;
    key_resp_6.rt = undefined;
    _key_resp_6_allKeys = [];
    targetStim.setPos(PosList[1]);
    targetStim.setOri(targetOrient);
    targetStim.setText(targetLetter);
    searchStim2.setPos(PosList[2]);
    searchStim2.setOri(stim2Orient);
    searchStim2.setText('L');
    searchStim3.setPos(PosList[3]);
    searchStim3.setOri(stim3Orient);
    searchStim3.setText('L');
    searchStim4.setPos(PosList[4]);
    searchStim4.setOri(stim4Orient);
    searchStim4.setText('L');
    searchStim5.setPos(PosList[5]);
    searchStim5.setOri(stim5Orient);
    searchStim5.setText('L');
    searchStim6.setPos(PosList[6]);
    searchStim6.setOri(stim6Orient);
    searchStim6.setText('L');
    searchStim7.setPos(PosList[7]);
    searchStim7.setOri(stim7Orient);
    searchStim7.setText('L');
    searchStim8.setPos(PosList[8]);
    searchStim8.setOri(stim8Orient);
    searchStim8.setText('L');
    searchStim9.setPos(PosList[9]);
    searchStim9.setOri(stim9Orient);
    searchStim9.setText('L');
    searchStim10.setPos(PosList[10]);
    searchStim10.setOri(stim10Orient);
    searchStim10.setText('L');
    searchStim11.setPos(PosList[11]);
    searchStim11.setOri(stim11Orient);
    searchStim11.setText('L');
    // keep track of which components have finished
    searchTrialComponents = [];
    searchTrialComponents.push(key_resp_6);
    searchTrialComponents.push(targetStim);
    searchTrialComponents.push(searchStim2);
    searchTrialComponents.push(searchStim3);
    searchTrialComponents.push(searchStim4);
    searchTrialComponents.push(searchStim5);
    searchTrialComponents.push(searchStim6);
    searchTrialComponents.push(searchStim7);
    searchTrialComponents.push(searchStim8);
    searchTrialComponents.push(searchStim9);
    searchTrialComponents.push(searchStim10);
    searchTrialComponents.push(searchStim11);
    
    for (const thisComponent of searchTrialComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function searchTrialRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'searchTrial' ---
    // get current time
    t = searchTrialClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *key_resp_6* updates
    if (t >= 0.0 && key_resp_6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_6.tStart = t;  // (not accounting for frame time here)
      key_resp_6.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_6.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_6.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_6.clearEvents(); });
    }

    if (key_resp_6.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_6.getKeys({keyList: ['k', 'd'], waitRelease: false});
      _key_resp_6_allKeys = _key_resp_6_allKeys.concat(theseKeys);
      if (_key_resp_6_allKeys.length > 0) {
        key_resp_6.keys = _key_resp_6_allKeys[_key_resp_6_allKeys.length - 1].name;  // just the last key pressed
        key_resp_6.rt = _key_resp_6_allKeys[_key_resp_6_allKeys.length - 1].rt;
        // was this correct?
        if (key_resp_6.keys == corrResponse) {
            key_resp_6.corr = 1;
        } else {
            key_resp_6.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *targetStim* updates
    if (t >= 0.0 && targetStim.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      targetStim.tStart = t;  // (not accounting for frame time here)
      targetStim.frameNStart = frameN;  // exact frame index
      
      targetStim.setAutoDraw(true);
    }

    
    // *searchStim2* updates
    if (t >= 0.0 && searchStim2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      searchStim2.tStart = t;  // (not accounting for frame time here)
      searchStim2.frameNStart = frameN;  // exact frame index
      
      searchStim2.setAutoDraw(true);
    }

    
    // *searchStim3* updates
    if (t >= 0.0 && searchStim3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      searchStim3.tStart = t;  // (not accounting for frame time here)
      searchStim3.frameNStart = frameN;  // exact frame index
      
      searchStim3.setAutoDraw(true);
    }

    
    // *searchStim4* updates
    if (t >= 0.0 && searchStim4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      searchStim4.tStart = t;  // (not accounting for frame time here)
      searchStim4.frameNStart = frameN;  // exact frame index
      
      searchStim4.setAutoDraw(true);
    }

    
    // *searchStim5* updates
    if (t >= 0.0 && searchStim5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      searchStim5.tStart = t;  // (not accounting for frame time here)
      searchStim5.frameNStart = frameN;  // exact frame index
      
      searchStim5.setAutoDraw(true);
    }

    
    // *searchStim6* updates
    if (t >= 0.0 && searchStim6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      searchStim6.tStart = t;  // (not accounting for frame time here)
      searchStim6.frameNStart = frameN;  // exact frame index
      
      searchStim6.setAutoDraw(true);
    }

    
    // *searchStim7* updates
    if (t >= 0.0 && searchStim7.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      searchStim7.tStart = t;  // (not accounting for frame time here)
      searchStim7.frameNStart = frameN;  // exact frame index
      
      searchStim7.setAutoDraw(true);
    }

    
    // *searchStim8* updates
    if (t >= 0.0 && searchStim8.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      searchStim8.tStart = t;  // (not accounting for frame time here)
      searchStim8.frameNStart = frameN;  // exact frame index
      
      searchStim8.setAutoDraw(true);
    }

    
    // *searchStim9* updates
    if (t >= 0.0 && searchStim9.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      searchStim9.tStart = t;  // (not accounting for frame time here)
      searchStim9.frameNStart = frameN;  // exact frame index
      
      searchStim9.setAutoDraw(true);
    }

    
    // *searchStim10* updates
    if (t >= 0.0 && searchStim10.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      searchStim10.tStart = t;  // (not accounting for frame time here)
      searchStim10.frameNStart = frameN;  // exact frame index
      
      searchStim10.setAutoDraw(true);
    }

    
    // *searchStim11* updates
    if (t >= 0.0 && searchStim11.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      searchStim11.tStart = t;  // (not accounting for frame time here)
      searchStim11.frameNStart = frameN;  // exact frame index
      
      searchStim11.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of searchTrialComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function searchTrialRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'searchTrial' ---
    for (const thisComponent of searchTrialComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // was no response the correct answer?!
    if (key_resp_6.keys === undefined) {
      if (['None','none',undefined].includes(corrResponse)) {
         key_resp_6.corr = 1;  // correct non-response
      } else {
         key_resp_6.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for current loop
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_6.corr, level);
    }
    psychoJS.experiment.addData('key_resp_6.keys', key_resp_6.keys);
    psychoJS.experiment.addData('key_resp_6.corr', key_resp_6.corr);
    if (typeof key_resp_6.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_6.rt', key_resp_6.rt);
        routineTimer.reset();
        }
    
    key_resp_6.stop();
    // the Routine "searchTrial" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var searchFeedbackComponents;
function searchFeedbackRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'searchFeedback' ---
    t = 0;
    searchFeedbackClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(1.000000);
    // update component parameters for each repeat
    // Run 'Begin Routine' code from searchFeedback_code_3
    if (key_resp_6.corr) {
        msg = "Correct";
    } else {
        msg = "Incorrect";
    }
    
    searchFeedbackText.setText(msg);
    // keep track of which components have finished
    searchFeedbackComponents = [];
    searchFeedbackComponents.push(searchFeedbackText);
    
    for (const thisComponent of searchFeedbackComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function searchFeedbackRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'searchFeedback' ---
    // get current time
    t = searchFeedbackClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *searchFeedbackText* updates
    if (t >= 0.0 && searchFeedbackText.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      searchFeedbackText.tStart = t;  // (not accounting for frame time here)
      searchFeedbackText.frameNStart = frameN;  // exact frame index
      
      searchFeedbackText.setAutoDraw(true);
    }

    frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (searchFeedbackText.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      searchFeedbackText.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of searchFeedbackComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function searchFeedbackRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'searchFeedback' ---
    for (const thisComponent of searchFeedbackComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var break3Timer;
var _restBreak3_key_resp_allKeys;
var restBreak3Components;
function restBreak3RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'restBreak3' ---
    t = 0;
    restBreak3Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // Run 'Begin Routine' code from elapsed_timer_5
    break3Timer = new util.Clock();
    
    restBreak3_key_resp.keys = undefined;
    restBreak3_key_resp.rt = undefined;
    _restBreak3_key_resp_allKeys = [];
    // keep track of which components have finished
    restBreak3Components = [];
    restBreak3Components.push(restBreak3Text);
    restBreak3Components.push(restBreak3_key_resp);
    
    for (const thisComponent of restBreak3Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function restBreak3RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'restBreak3' ---
    // get current time
    t = restBreak3Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *restBreak3Text* updates
    if (t >= 0.0 && restBreak3Text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      restBreak3Text.tStart = t;  // (not accounting for frame time here)
      restBreak3Text.frameNStart = frameN;  // exact frame index
      
      restBreak3Text.setAutoDraw(true);
    }

    
    // *restBreak3_key_resp* updates
    if (t >= 0 && restBreak3_key_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      restBreak3_key_resp.tStart = t;  // (not accounting for frame time here)
      restBreak3_key_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { restBreak3_key_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { restBreak3_key_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { restBreak3_key_resp.clearEvents(); });
    }

    if (restBreak3_key_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = restBreak3_key_resp.getKeys({keyList: ['right'], waitRelease: false});
      _restBreak3_key_resp_allKeys = _restBreak3_key_resp_allKeys.concat(theseKeys);
      if (_restBreak3_key_resp_allKeys.length > 0) {
        restBreak3_key_resp.keys = _restBreak3_key_resp_allKeys[_restBreak3_key_resp_allKeys.length - 1].name;  // just the last key pressed
        restBreak3_key_resp.rt = _restBreak3_key_resp_allKeys[_restBreak3_key_resp_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of restBreak3Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function restBreak3RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'restBreak3' ---
    for (const thisComponent of restBreak3Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // Run 'End Routine' code from elapsed_timer_5
    psychoJS.experiment.addData("elapsed.time", elapsedTime.getTime());
    psychoJS.experiment.addData("break3.duration", break3Timer.getTime());
    
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(restBreak3_key_resp.corr, level);
    }
    psychoJS.experiment.addData('restBreak3_key_resp.keys', restBreak3_key_resp.keys);
    if (typeof restBreak3_key_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('restBreak3_key_resp.rt', restBreak3_key_resp.rt);
        routineTimer.reset();
        }
    
    restBreak3_key_resp.stop();
    // the Routine "restBreak3" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _key_resp_5_allKeys;
var instrMentRotComponents;
function instrMentRotRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'instrMentRot' ---
    t = 0;
    instrMentRotClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // Run 'Begin Routine' code from code_4
    if ((currentInstr === 12)) {
        currentInstr = 13;
    }
    matchOpac = 0;
    flipOpac = 0;
    notpOpac = 0;
    
    key_resp_5.keys = undefined;
    key_resp_5.rt = undefined;
    _key_resp_5_allKeys = [];
    text_5.setText(instrDict[currentInstr]);
    // keep track of which components have finished
    instrMentRotComponents = [];
    instrMentRotComponents.push(key_resp_5);
    instrMentRotComponents.push(instrHeaderText_5);
    instrMentRotComponents.push(text_5);
    instrMentRotComponents.push(MentRotMatching);
    instrMentRotComponents.push(MentRotMatchFlip);
    instrMentRotComponents.push(MentRotNot);
    
    for (const thisComponent of instrMentRotComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


var notOpac;
function instrMentRotRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'instrMentRot' ---
    // get current time
    t = instrMentRotClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // Run 'Each Frame' code from code_4
    if ((currentInstr === 14)) {
        matchOpac = 1;
        flipOpac = 0;
        notOpac = 0;
    } else {
        if ((currentInstr === 15)) {
            matchOpac = 0;
            flipOpac = 1;
            notOpac = 0;
        } else {
            if ((currentInstr === 16)) {
                matchOpac = 0;
                flipOpac = 0;
                notOpac = 1;
            } else {
                if ((currentInstr === 17)) {
                    matchOpac = 0;
                    flipOpac = 0;
                    notOpac = 0;
                } else {
                    if ((currentInstr === 13)) {
                        matchOpac = 0;
                        flipOpac = 0;
                        notOpac = 0;
                    } else {
                        if ((currentInstr === 12)) {
                            matchOpac = 0;
                            flipOpac = 0;
                            notOpac = 0;
                        }
                    }
                }
            }
        }
    }
    if ((key_resp_5.keys === "k")) {
        trials.finished = true;
    }
    
    
    // *key_resp_5* updates
    if (t >= 0 && key_resp_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_5.tStart = t;  // (not accounting for frame time here)
      key_resp_5.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_5.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_5.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_5.clearEvents(); });
    }

    if (key_resp_5.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_5.getKeys({keyList: ['left', 'right', 'k'], waitRelease: false});
      _key_resp_5_allKeys = _key_resp_5_allKeys.concat(theseKeys);
      if (_key_resp_5_allKeys.length > 0) {
        key_resp_5.keys = _key_resp_5_allKeys[_key_resp_5_allKeys.length - 1].name;  // just the last key pressed
        key_resp_5.rt = _key_resp_5_allKeys[_key_resp_5_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *instrHeaderText_5* updates
    if (t >= 0.0 && instrHeaderText_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instrHeaderText_5.tStart = t;  // (not accounting for frame time here)
      instrHeaderText_5.frameNStart = frameN;  // exact frame index
      
      instrHeaderText_5.setAutoDraw(true);
    }

    
    // *text_5* updates
    if (t >= 0 && text_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_5.tStart = t;  // (not accounting for frame time here)
      text_5.frameNStart = frameN;  // exact frame index
      
      text_5.setAutoDraw(true);
    }

    
    // *MentRotMatching* updates
    if (t >= 0.0 && MentRotMatching.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      MentRotMatching.tStart = t;  // (not accounting for frame time here)
      MentRotMatching.frameNStart = frameN;  // exact frame index
      
      MentRotMatching.setAutoDraw(true);
    }

    
    if (MentRotMatching.status === PsychoJS.Status.STARTED){ // only update if being drawn
      MentRotMatching.setOpacity(matchOpac, false);
    }
    
    // *MentRotMatchFlip* updates
    if (t >= 0.0 && MentRotMatchFlip.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      MentRotMatchFlip.tStart = t;  // (not accounting for frame time here)
      MentRotMatchFlip.frameNStart = frameN;  // exact frame index
      
      MentRotMatchFlip.setAutoDraw(true);
    }

    
    if (MentRotMatchFlip.status === PsychoJS.Status.STARTED){ // only update if being drawn
      MentRotMatchFlip.setOpacity(flipOpac, false);
    }
    
    // *MentRotNot* updates
    if (t >= 0.0 && MentRotNot.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      MentRotNot.tStart = t;  // (not accounting for frame time here)
      MentRotNot.frameNStart = frameN;  // exact frame index
      
      MentRotNot.setAutoDraw(true);
    }

    
    if (MentRotNot.status === PsychoJS.Status.STARTED){ // only update if being drawn
      MentRotNot.setOpacity(notOpac, false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of instrMentRotComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function instrMentRotRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'instrMentRot' ---
    for (const thisComponent of instrMentRotComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // Run 'End Routine' code from elapsed_timer_10
    psychoJS.experiment.addData("elapsed.time", elapsedTime.getTime());
    
    // Run 'End Routine' code from code_4
    console.log(key_resp_5.keys);
    if ((key_resp_5.keys === "left")) {
        currentInstr = (Number.parseInt(currentInstr) - 1);
    } else {
        if ((key_resp_5.keys === "right")) {
            currentInstr = (Number.parseInt(currentInstr) + 1);
        }
    }
    if ((currentInstr === 12)) {
        currentInstr = 13;
    }
    if ((currentInstr === 18)) {
        currentInstr = 17;
    }
    if ((key_resp_5.keys === "k")) {
        currentLoop.finished = true;
    }
    
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_5.corr, level);
    }
    psychoJS.experiment.addData('key_resp_5.keys', key_resp_5.keys);
    if (typeof key_resp_5.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_5.rt', key_resp_5.rt);
        routineTimer.reset();
        }
    
    key_resp_5.stop();
    // the Routine "instrMentRot" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _MROT_resp_allKeys;
var mentRotTrialComponents;
function mentRotTrialRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'mentRotTrial' ---
    t = 0;
    mentRotTrialClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(7.500000);
    // update component parameters for each repeat
    mentRotStimulus.setImage(imagefile);
    MROT_resp.keys = undefined;
    MROT_resp.rt = undefined;
    _MROT_resp_allKeys = [];
    // keep track of which components have finished
    mentRotTrialComponents = [];
    mentRotTrialComponents.push(mentRotStimulus);
    mentRotTrialComponents.push(MROT_resp);
    
    for (const thisComponent of mentRotTrialComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function mentRotTrialRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'mentRotTrial' ---
    // get current time
    t = mentRotTrialClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *mentRotStimulus* updates
    if (t >= 0.0 && mentRotStimulus.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mentRotStimulus.tStart = t;  // (not accounting for frame time here)
      mentRotStimulus.frameNStart = frameN;  // exact frame index
      
      mentRotStimulus.setAutoDraw(true);
    }

    frameRemains = 0.0 + 7.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (mentRotStimulus.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      mentRotStimulus.setAutoDraw(false);
    }
    
    // *MROT_resp* updates
    if (t >= 0.0 && MROT_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      MROT_resp.tStart = t;  // (not accounting for frame time here)
      MROT_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { MROT_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { MROT_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { MROT_resp.clearEvents(); });
    }

    frameRemains = 0.0 + 7.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (MROT_resp.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      MROT_resp.status = PsychoJS.Status.FINISHED;
  }

    if (MROT_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = MROT_resp.getKeys({keyList: ['k', 'd'], waitRelease: false});
      _MROT_resp_allKeys = _MROT_resp_allKeys.concat(theseKeys);
      if (_MROT_resp_allKeys.length > 0) {
        MROT_resp.keys = _MROT_resp_allKeys[_MROT_resp_allKeys.length - 1].name;  // just the last key pressed
        MROT_resp.rt = _MROT_resp_allKeys[_MROT_resp_allKeys.length - 1].rt;
        // was this correct?
        if (MROT_resp.keys == corrResponse) {
            MROT_resp.corr = 1;
        } else {
            MROT_resp.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of mentRotTrialComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function mentRotTrialRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'mentRotTrial' ---
    for (const thisComponent of mentRotTrialComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // was no response the correct answer?!
    if (MROT_resp.keys === undefined) {
      if (['None','none',undefined].includes(corrResponse)) {
         MROT_resp.corr = 1;  // correct non-response
      } else {
         MROT_resp.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for current loop
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(MROT_resp.corr, level);
    }
    psychoJS.experiment.addData('MROT_resp.keys', MROT_resp.keys);
    psychoJS.experiment.addData('MROT_resp.corr', MROT_resp.corr);
    if (typeof MROT_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('MROT_resp.rt', MROT_resp.rt);
        routineTimer.reset();
        }
    
    MROT_resp.stop();
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var mentRotFeedbackComponents;
function mentRotFeedbackRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'mentRotFeedback' ---
    t = 0;
    mentRotFeedbackClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(1.000000);
    // update component parameters for each repeat
    // Run 'Begin Routine' code from NBackfeedback_code_2
    if (MROT_resp.corr) {
        msg = "Correct";
    } else {
        msg = "Incorrect";
    }
    
    NBackfeedback_text_2.setText(msg);
    // keep track of which components have finished
    mentRotFeedbackComponents = [];
    mentRotFeedbackComponents.push(NBackfeedback_text_2);
    
    for (const thisComponent of mentRotFeedbackComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function mentRotFeedbackRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'mentRotFeedback' ---
    // get current time
    t = mentRotFeedbackClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *NBackfeedback_text_2* updates
    if (t >= 0.0 && NBackfeedback_text_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      NBackfeedback_text_2.tStart = t;  // (not accounting for frame time here)
      NBackfeedback_text_2.frameNStart = frameN;  // exact frame index
      
      NBackfeedback_text_2.setAutoDraw(true);
    }

    frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (NBackfeedback_text_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      NBackfeedback_text_2.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of mentRotFeedbackComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function mentRotFeedbackRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'mentRotFeedback' ---
    for (const thisComponent of mentRotFeedbackComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _end_resp_allKeys;
var endComponents;
function endRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'end' ---
    t = 0;
    endClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    end_text.setText("End of Training Session\n\nThank you for completing the training session\n\nPlease contact the experimenter now to confirm that you have completed the training session\n\nThey will then send you the link to the testing session which you will need to complete in 48 hours' time (2 days from now)\n\nPlease press the space bar on your keyboard to finish the session");
    end_resp.keys = undefined;
    end_resp.rt = undefined;
    _end_resp_allKeys = [];
    // keep track of which components have finished
    endComponents = [];
    endComponents.push(end_text);
    endComponents.push(end_resp);
    
    for (const thisComponent of endComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function endRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'end' ---
    // get current time
    t = endClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *end_text* updates
    if (t >= 0 && end_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      end_text.tStart = t;  // (not accounting for frame time here)
      end_text.frameNStart = frameN;  // exact frame index
      
      end_text.setAutoDraw(true);
    }

    
    // *end_resp* updates
    if (t >= 0.0 && end_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      end_resp.tStart = t;  // (not accounting for frame time here)
      end_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { end_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { end_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { end_resp.clearEvents(); });
    }

    if (end_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = end_resp.getKeys({keyList: ['space'], waitRelease: false});
      _end_resp_allKeys = _end_resp_allKeys.concat(theseKeys);
      if (_end_resp_allKeys.length > 0) {
        end_resp.keys = _end_resp_allKeys[_end_resp_allKeys.length - 1].name;  // just the last key pressed
        end_resp.rt = _end_resp_allKeys[_end_resp_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of endComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function endRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'end' ---
    for (const thisComponent of endComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // Run 'End Routine' code from elapsed_timer_12
    psychoJS.experiment.addData("elapsed.time", elapsedTime.getTime());
    
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(end_resp.corr, level);
    }
    psychoJS.experiment.addData('end_resp.keys', end_resp.keys);
    if (typeof end_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('end_resp.rt', end_resp.rt);
        routineTimer.reset();
        }
    
    end_resp.stop();
    // the Routine "end" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


function importConditions(currentLoop) {
  return async function () {
    psychoJS.importAttributes(currentLoop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


async function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}
