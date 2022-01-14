// Javascript document

var body = document.body;
var html = document.documentElement;

var windowWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
var windowHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);


// Homepage elements

var microphoneTextButton = document.getElementById('microphoneTextButton');
var welcomeNoticeCloseButton = document.getElementById('welcomeNoticeCloseButton');
var welcomeNotice = document.getElementById('welcomeNotice');


// Control panel

var controlPanelMicrophoneButton = document.getElementById('controlPanelMicrophoneButton');
var controlPanelMicrophoneButtonLabel = document.getElementById('controlPanelMicrophoneButtonLabel');
var controlPanelMicrophoneLink = document.getElementById('controlPanelMicrophoneLink');
var controlPanelInfoButton = document.getElementById('controlPanelInfoButton');
var closeInformation = document.getElementById('closeInformation');


// Project population

var canvas = document.getElementById('canvas');
var projectContainer = document.getElementById('projectContainer');


// Navigational controls

var selector = document.getElementById('selector');

var currentTranslationY;
var currentTranslationX;

var homepageDirectionalLabelUp = document.getElementById('homepageDirectionalLabelUp');
var homepageDirectionalLabelDown = document.getElementById('homepageDirectionalLabelDown');
var homepageDirectionalLabelLeft = document.getElementById('homepageDirectionalLabelLeft');
var homepageDirectionalLabelRight = document.getElementById('homepageDirectionalLabelRight');