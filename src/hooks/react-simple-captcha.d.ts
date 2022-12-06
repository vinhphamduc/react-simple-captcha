import { Component } from "react";

export declare function loadCaptchaEnginge (
  numberOfCharacters: number, 
  backgroundColor: string = 'white', 
  fontColor: string = 'black', 
  charMap: string = ''
) {}

export declare function validateCaptcha (
  userValue: string, 
  reload: boolean = true
) {}

export declare class LoadCanvasTemplate extends Component {}
export declare class LoadCanvasTemplateNoReload extends Component {}
