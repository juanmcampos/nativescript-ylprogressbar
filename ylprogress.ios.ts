import {ContentView} from 'ui/content-view';
import {Color} from 'color';
import {PropertyMetadata} from 'ui/core/proxy';
import {Property, PropertyMetadataSettings} from 'ui/core/dependency-observable';
import { screen } from 'platform';
import * as uiUtils from 'ui/utils';
import style = require("ui/styling/style");

declare var YLProgressBar: any, UIApplication: any, CGRectMake: any;

export class ProgressView extends ContentView {
    private _ios: YLProgressBar;

    constructor() {
        super();
        let width = screen.mainScreen.widthDIPs - 20;
        this._ios = YLProgressBar.alloc().initWithFrame(CGRectMake(0, 0, 200, 50));
        this._ios.hideStripes = true;
        this._ios.progressTintColor = UIColor.colorWithRedGreenBlueAlpha(54 / 255, 217 / 255, 54 / 255, 1);
        this._ios.trackTintColor = UIColor.colorWithRedGreenBlueAlpha(215 / 255, 216 / 255, 220 / 255, 1);

        this._ios.hideGloss = true;

        this._ios.indicatorTextDisplayMode = YLProgressBarIndicatorTextDisplayModeTrack;
    }

    get ios(): YLProgressBar {
        return this._ios;
    }

    get _nativeView(): YLProgressBar {
        return this._ios;
    }

    set progreso(value: number) {
        this._ios.progress = value / 100;
    }

}