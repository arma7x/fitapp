/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
var SendData = (function () {
    function SendData() {
    }
    SendData.main = function (args) {
    };
    SendData.getLength = function () {
        return 8;
    };
    SendData.SwitchProtocol = function (b, b2, b3) {
        return [-51, 0, 6, b, 1, b2, 0, 1, b3];
    };
    SendData.getReturnAck = function (b, bArr) {
        return [-36, 0, 5, b, 1, bArr[0], bArr[1], 1];
    };
    SendData.getProtocol = function (b, b2, bArr) {
        var valueOf = (SendData.getLength() | 0) + bArr.length;
        var bArr2 = (function (s) { var a = []; while (s-- > 0)
            a.push(0); return a; })(/* intValue */ (valueOf | 0));
        bArr2[0] = -51;
        var intToBytes = SendData.intToBytes(/* intValue */ (valueOf | 0) - 3);
        /* arraycopy */ (function (srcPts, srcOff, dstPts, dstOff, size) { if (srcPts !== dstPts || dstOff >= srcOff + size) {
            while (--size >= 0)
                dstPts[dstOff++] = srcPts[srcOff++];
        }
        else {
            var tmp = srcPts.slice(srcOff, srcOff + size);
            for (var i = 0; i < size; i++)
                dstPts[dstOff++] = tmp[i];
        } })(intToBytes, 2, bArr2, 1, intToBytes.length - 2);
        bArr2[3] = b;
        bArr2[4] = 1;
        bArr2[5] = b2;
        var intToBytes2 = SendData.intToBytes(bArr.length);
        /* arraycopy */ (function (srcPts, srcOff, dstPts, dstOff, size) { if (srcPts !== dstPts || dstOff >= srcOff + size) {
            while (--size >= 0)
                dstPts[dstOff++] = srcPts[srcOff++];
        }
        else {
            var tmp = srcPts.slice(srcOff, srcOff + size);
            for (var i = 0; i < size; i++)
                dstPts[dstOff++] = tmp[i];
        } })(intToBytes2, 2, bArr2, 6, intToBytes2.length - 2);
        /* arraycopy */ (function (srcPts, srcOff, dstPts, dstOff, size) { if (srcPts !== dstPts || dstOff >= srcOff + size) {
            while (--size >= 0)
                dstPts[dstOff++] = srcPts[srcOff++];
        }
        else {
            var tmp = srcPts.slice(srcOff, srcOff + size);
            for (var i = 0; i < size; i++)
                dstPts[dstOff++] = tmp[i];
        } })(bArr, 0, bArr2, 8, bArr.length);
        return bArr2;
    };
    SendData.getNoValueProtocol = function (b, b2) {
        var length = SendData.getLength();
        var bArr = (function (s) { var a = []; while (s-- > 0)
            a.push(0); return a; })(/* intValue */ (length | 0));
        bArr[0] = -51;
        var intToBytes = SendData.intToBytes(/* intValue */ (length | 0) - 3);
        /* arraycopy */ (function (srcPts, srcOff, dstPts, dstOff, size) { if (srcPts !== dstPts || dstOff >= srcOff + size) {
            while (--size >= 0)
                dstPts[dstOff++] = srcPts[srcOff++];
        }
        else {
            var tmp = srcPts.slice(srcOff, srcOff + size);
            for (var i = 0; i < size; i++)
                dstPts[dstOff++] = tmp[i];
        } })(intToBytes, 2, bArr, 1, intToBytes.length - 2);
        bArr[3] = b;
        bArr[4] = 1;
        bArr[5] = b2;
        return bArr;
    };
    SendData.getSetTimesValue = function () {
        var date = new Date();
        var valueOf = date.getFullYear();
        var valueOf2 = date.getMonth() + 1;
        var valueOf3 = date.getDate();
        var valueOf4 = date.getHours();
        var valueOf5 = date.getMinutes();
        var intValue = (((valueOf | 0) - 2000) << 26) | ((valueOf2 | 0) << 22) | ((valueOf3 | 0) << 17) | ((valueOf4 | 0) << 12) | ((valueOf5 | 0) << 6);
        var valueOf6 = (date.getSeconds() | 0) | intValue;
        return SendData.getProtocol((18 | 0), (1 | 0), [(((valueOf6 | 0) >> 24) | 0), (((valueOf6 | 0) >> 16) | 0), (((valueOf6 | 0) >> 8) | 0), (((valueOf6 | 0) >> 0) | 0)]);
    };
    SendData.getHeartRateValue = function () { // UNKNOWN
        return SendData.getProtocol((18 | 0), (-2 | 0), [1]);
    };
    SendData.getSetStepValue = function (step) { // Set Target Step
        return SendData.getProtocol((18 | 0), (3 | 0), SendData.intToBytes(step || 5000));
    };
    SendData.getSetUinfoValue = function (gender, age, height, weight, distUnit) { // Set User Info
        var valueOf = (((gender) << 31) | ((age) << 24) | ((height) << 15) | ((weight) << 5) | ((distUnit) << 0));
        return SendData.getProtocol((18 | 0), (4 | 0), [((valueOf >> 24) | 0), ((valueOf >> 16) | 0), ((valueOf >> 8) | 0), ((valueOf >> 0) | 0)]);
    };
    SendData.getSetLongSitValue = function () { // Set Long Sit Remind
        var valueOf = 0; //longsit_is_siesta
        var valueOf2 = 0; //longsit_is_open
        var valueOf3 = 150; //longsit_threshold
        var valueOf4 = 4; //longsit_2131296739 -> sitting time
        var valueOf5 = 8; //longsit_2131297304 -> start time
        var valueOf6 = 22; //longsit_2131297302 -> end time
        var stringValues = "1111111"; //longsit_repeat
        var sb = { str: "", toString: function () { return this.str; } };
        /* append */ (function (sb) { sb.str = sb.str.concat("0"); return sb; })(sb);
        /* append */ (function (sb) { sb.str = sb.str.concat(stringValues); return sb; })(sb);
        var binaryToAlgorism = SendData.binaryToAlgorism(/* toString */ sb.str);
        var sb2 = { str: "", toString: function () { return this.str; } };
        /* append */ (function (sb) { sb.str = sb.str.concat(SendData.algorismToHEXString(/* intValue */ (valueOf | 0))); return sb; })(sb2);
        /* append */ (function (sb) { sb.str = sb.str.concat(SendData.algorismToHEXString(/* intValue */ (valueOf2 | 0))); return sb; })(sb2);
        /* append */ (function (sb) { sb.str = sb.str.concat(SendData.algorismToHEXString(/* intValue */ (valueOf3 | 0) >> 8)); return sb; })(sb2);
        /* append */ (function (sb) { sb.str = sb.str.concat(SendData.algorismToHEXString(/* intValue */ (valueOf3 | 0))); return sb; })(sb2);
        /* append */ (function (sb) { sb.str = sb.str.concat(SendData.algorismToHEXString(/* intValue */ (valueOf4 | 0))); return sb; })(sb2);
        /* append */ (function (sb) { sb.str = sb.str.concat(SendData.algorismToHEXString(/* intValue */ (valueOf5 | 0))); return sb; })(sb2);
        /* append */ (function (sb) { sb.str = sb.str.concat(SendData.algorismToHEXString(/* intValue */ (valueOf6 | 0))); return sb; })(sb2);
        /* append */ (function (sb) { sb.str = sb.str.concat(SendData.algorismToHEXString(binaryToAlgorism)); return sb; })(sb2);
        return SendData.getProtocol((18 | 0), (5 | 0), SendData.hexStringToBytes(/* toString */ sb2.str));
    };
    SendData.getHeartAutoValue = function () { //Set automatic heart rate measurement(deep sleep?)
        var valueOf = 0; //heart_auto_status
        var valueOf2 = 0; //heart_sleep_assist
        var valueOf3 = 2; //heart_frequency
        var valueOf4 = (6 | 0) * 60; //heart_auto_star_time
        var valueOf5 = (22 | 0) * 60; //heart_auto_end_time
        var str = "";
        var algorismToHEXString = (valueOf4 | 0) <= 255 ? SendData.algorismToHEXString(/* intValue */ (valueOf4 | 0) >> 8) : str;
        if ((valueOf5 | 0) <= 255) {
            str = SendData.algorismToHEXString(/* intValue */ (valueOf5 | 0) >> 8);
        }
        var sb = { str: "", toString: function () { return this.str; } };
        /* append */ (function (sb) { sb.str = sb.str.concat(SendData.algorismToHEXString(/* intValue */ (valueOf | 0))); return sb; })(sb);
        /* append */ (function (sb) { sb.str = sb.str.concat(SendData.algorismToHEXString(/* intValue */ (valueOf2 | 0))); return sb; })(sb);
        /* append */ (function (sb) { sb.str = sb.str.concat(SendData.algorismToHEXString(/* intValue */ (valueOf3 | 0) >> 8)); return sb; })(sb);
        /* append */ (function (sb) { sb.str = sb.str.concat(SendData.algorismToHEXString(/* intValue */ (valueOf3 | 0))); return sb; })(sb);
        /* append */ (function (sb) { sb.str = sb.str.concat(algorismToHEXString); return sb; })(sb);
        /* append */ (function (sb) { sb.str = sb.str.concat(SendData.algorismToHEXString(/* intValue */ (valueOf4 | 0))); return sb; })(sb);
        /* append */ (function (sb) { sb.str = sb.str.concat(str); return sb; })(sb);
        /* append */ (function (sb) { sb.str = sb.str.concat(SendData.algorismToHEXString(/* intValue */ (valueOf5 | 0))); return sb; })(sb);
        return SendData.getProtocol((18 | 0), (22 | 0), SendData.hexStringToBytes(/* toString */ sb.str));
    };
    SendData.getBrightScreenValue = function () { //Set Bright Screen
        var valueOf = 0; //screen_status
        var valueOf2 = (8 | 0) * 60; //screen_star_time
        var valueOf3 = (22 | 0) * 60; //screen_end_time
        var str = "";
        var algorismToHEXString = (valueOf2 | 0) <= 255 ? SendData.algorismToHEXString(/* intValue */ (valueOf2 | 0) >> 8) : str;
        if ((valueOf3 | 0) <= 255) {
            str = SendData.algorismToHEXString(/* intValue */ (valueOf3 | 0) >> 8);
        }
        var sb = { str: "", toString: function () { return this.str; } };
        /* append */ (function (sb) { sb.str = sb.str.concat(SendData.algorismToHEXString(/* intValue */ (valueOf | 0))); return sb; })(sb);
        /* append */ (function (sb) { sb.str = sb.str.concat(algorismToHEXString); return sb; })(sb);
        /* append */ (function (sb) { sb.str = sb.str.concat(SendData.algorismToHEXString(/* intValue */ (valueOf2 | 0))); return sb; })(sb);
        /* append */ (function (sb) { sb.str = sb.str.concat(str); return sb; })(sb);
        /* append */ (function (sb) { sb.str = sb.str.concat(SendData.algorismToHEXString(/* intValue */ (valueOf3 | 0))); return sb; })(sb);
        return SendData.getProtocol((18 | 0), (9 | 0), SendData.hexStringToBytes(/* toString */ sb.str));
    };
    SendData.getSleepSwitchValue = function () { // Set Deep Dleep
        var valueOf = 0; // sleep_status
        var valueOf2 = 6 * 60; // sleep_star_time
        var valueOf3 = 22 * 60; // sleep_end_time
        var str = "";
        var algorismToHEXStr = (valueOf2 | 0) <= 255 ? SendData.algorismToHEXString(/* intValue */ (valueOf2 | 0) >> 8) : str;
        if ((valueOf3 | 0) <= 255) {
            str = SendData.algorismToHEXString(/* intValue */ (valueOf3 | 0) >> 8);
        }
        var sb = { str: "", toString: function () { return this.str; } };
        /* append */ (function (sb) { sb.str = sb.str.concat(SendData.algorismToHEXString(/* intValue */ (valueOf | 0))); return sb; })(sb);
        /* append */ (function (sb) { sb.str = sb.str.concat(algorismToHEXStr); return sb; })(sb);
        /* append */ (function (sb) { sb.str = sb.str.concat(SendData.algorismToHEXString(/* intValue */ (valueOf2 | 0))); return sb; })(sb);
        /* append */ (function (sb) { sb.str = sb.str.concat(str); return sb; })(sb);
        /* append */ (function (sb) { sb.str = sb.str.concat(SendData.algorismToHEXString(/* intValue */ (valueOf3 | 0))); return sb; })(sb);
        return SendData.getProtocol((18 | 0), (15 | 0), SendData.hexStringToBytes(/* toString */ sb.str));
    };
    SendData.getDisturbSwitchValue = function () { // Set Do Not Disturb
        var valueOf = 0; //disturb_status
        var valueOf2 = (22 | 0) * 60; // disturb_star_time
        var valueOf3 = (8 | 0) * 60; // disturb_end_time
        var str = "";
        var algorismToHEXString = (valueOf2 | 0) <= 255 ? SendData.algorismToHEXString(/* intValue */ (valueOf2 | 0) >> 8) : str;
        if ((valueOf3 | 0) <= 255) {
            str = SendData.algorismToHEXString(/* intValue */ (valueOf3 | 0) >> 8);
        }
        var sb = { str: "", toString: function () { return this.str; } };
        /* append */ (function (sb) { sb.str = sb.str.concat(SendData.algorismToHEXString(/* intValue */ (valueOf | 0))); return sb; })(sb);
        /* append */ (function (sb) { sb.str = sb.str.concat(algorismToHEXString); return sb; })(sb);
        /* append */ (function (sb) { sb.str = sb.str.concat(SendData.algorismToHEXString(/* intValue */ (valueOf2 | 0))); return sb; })(sb);
        /* append */ (function (sb) { sb.str = sb.str.concat(str); return sb; })(sb);
        /* append */ (function (sb) { sb.str = sb.str.concat(SendData.algorismToHEXString(/* intValue */ (valueOf3 | 0))); return sb; })(sb);
        return SendData.getProtocol((18 | 0), (20 | 0), SendData.hexStringToBytes(/* toString */ sb.str));
    };
    SendData.getSetHandSideValue = function () { // Maybe dialer physical state when user hand response Message Push
        // HANDState
        return SendData.getProtocol((18 | 0), (6 | 0), SendData.hexStringToBytes(SendData.algorismToHEXString(/* intValue */ (parseFloat("0") | 0))));
    };
    SendData.getSetWatchRemindValue = function () { // Maybe dialer physical state when receive Message Push
        var str = "0"; // 
        var stringValues = str; // BRIGHTState
        var stringValues2 = str; // SHOCKState
        var stringValues3 = str; // SLEEPState
        var stringValues4 = str; // HEARTState
        var sb = { str: "", toString: function () { return this.str; } };
        /* append */ (function (sb) { sb.str = sb.str.concat(SendData.algorismToHEXString(/* intValue */ (parseFloat(stringValues2) | 0))); return sb; })(sb);
        /* append */ (function (sb) { sb.str = sb.str.concat(SendData.algorismToHEXString(/* intValue */ (parseFloat(stringValues) | 0))); return sb; })(sb);
        /* append */ (function (sb) { sb.str = sb.str.concat(SendData.algorismToHEXString(/* intValue */ (parseFloat(stringValues3) | 0))); return sb; })(sb);
        /* append */ (function (sb) { sb.str = sb.str.concat(SendData.algorismToHEXString(/* intValue */ (parseFloat(stringValues4) | 0))); return sb; })(sb);
        return SendData.getProtocol((18 | 0), (8 | 0), SendData.hexStringToBytes(/* toString */ sb.str));
    };
    SendData.getSetCallRemindValue = function () { // Set which SNS will manage by Message Push
        var str = "0";
        var stringValues = str; // CALLState
        var stringValues2 = str; // SMSState
        var stringValues3 = str; // WECHATState
        var stringValues4 = str; // QQState
        var stringValues5 = str; // FaceBookState
        var stringValues6 = str; // TwitterState
        var stringValues7 = str; // SkypeState
        var stringValues8 = str; // LineState
        var stringValues9 = str; // WhatsappState
        var stringValues10 = str; // KakaoTalkState
        var stringValues11 = str; // INSTAGRAMState
        var sb = { str: "", toString: function () { return this.str; } };
        /* append */ (function (sb) { sb.str = sb.str.concat(SendData.algorismToHEXString(/* intValue */ (parseFloat(stringValues) | 0))); return sb; })(sb);
        /* append */ (function (sb) { sb.str = sb.str.concat(SendData.algorismToHEXString(/* intValue */ (parseFloat(stringValues2) | 0))); return sb; })(sb);
        /* append */ (function (sb) { sb.str = sb.str.concat(SendData.algorismToHEXString(/* intValue */ (parseFloat(stringValues3) | 0))); return sb; })(sb);
        /* append */ (function (sb) { sb.str = sb.str.concat(SendData.algorismToHEXString(/* intValue */ (parseFloat(stringValues4) | 0))); return sb; })(sb);
        /* append */ (function (sb) { sb.str = sb.str.concat(SendData.algorismToHEXString(/* intValue */ (parseFloat(stringValues5) | 0))); return sb; })(sb);
        /* append */ (function (sb) { sb.str = sb.str.concat(SendData.algorismToHEXString(/* intValue */ (parseFloat(stringValues6) | 0))); return sb; })(sb);
        /* append */ (function (sb) { sb.str = sb.str.concat(SendData.algorismToHEXString(/* intValue */ (parseFloat(stringValues7) | 0))); return sb; })(sb);
        /* append */ (function (sb) { sb.str = sb.str.concat(SendData.algorismToHEXString(/* intValue */ (parseFloat(stringValues8) | 0))); return sb; })(sb);
        /* append */ (function (sb) { sb.str = sb.str.concat(SendData.algorismToHEXString(/* intValue */ (parseFloat(stringValues9) | 0))); return sb; })(sb);
        /* append */ (function (sb) { sb.str = sb.str.concat(SendData.algorismToHEXString(/* intValue */ (parseFloat(stringValues10) | 0))); return sb; })(sb);
        /* append */ (function (sb) { sb.str = sb.str.concat(SendData.algorismToHEXString(/* intValue */ (parseFloat(stringValues11) | 0))); return sb; })(sb);
        return SendData.getProtocol((18 | 0), (7 | 0), SendData.hexStringToBytes(/* toString */ sb.str));
    };
    SendData.getSendPushRemindValue = function (i, bArr) { // UNKNOWN
        return SendData.getProtocol((18 | 0), ((i === 1 ? 18 : 17) | 0), bArr);
    };
    SendData.getSynContractValue = function (bArr) { // Sync Contact
        return SendData.getProtocol((18 | 0), (19 | 0), bArr);
    };
    SendData.getDeleteContractValue = function (bArr) { // Delete Contact
        return SendData.getProtocol((18 | 0), (23 | 0), bArr);
    };
    SendData.getWeatherInfoValue = function (bArr) { // Get Weather Info
        return SendData.getProtocol((18 | 0), (32 | 0), bArr);
    };
    SendData.getSetFindMeValue = function (z) { // Find Phone Device
        return SendData.SwitchProtocol((18 | 0), (11 | 0), (((z ? 1 : 0) | 0) | 0));
    };
    SendData.getSetCaremaValue = function (z) { // Open or Close camera
        return SendData.SwitchProtocol((18 | 0), (12 | 0), ((z ? 1 : 0) | 0));
    };
    SendData.getSportHeartRateRecive = function (z) { // UNKNOWN
        return SendData.SwitchProtocol((18 | 0), (13 | 0), ((z ? 1 : 0) | 0));
    };
    SendData.getSportBloodRateRecive = function (z) { // UNKNOWN
        return SendData.SwitchProtocol((18 | 0), (14 | 0), ((z ? 1 : 0) | 0));
    };
    SendData.getSportMeasureRecive = function (z) { // Read heart beat
        return SendData.SwitchProtocol((18 | 0), (24 | 0), ((z ? 1 : 0) | 0));
    };
    SendData.getSportKeyGet = function (z) { // UNKNWON
        return SendData.SwitchProtocol((21 | 0), (1 | 0), ((z ? 1 : 0) | 0));
    };
    SendData.getSportKeyDayGet = function (z) { // App requests to obtain daily summary real-time data
        return SendData.SwitchProtocol((21 | 0), (13 | 0), ((z ? 1 : 0) | 0));
    };
    SendData.getTurnOnRealTimeStep = function (z) { // Get real-time step count switch:
        return SendData.SwitchProtocol((21 | 0), (6 | 0), ((z ? 1 : 0) | 0));
    };
    SendData.getSetLanguage = function (i) { // Set language
        return SendData.SwitchProtocol((18 | 0), (21 | 0), (i | 0));
    };
    SendData.getTestDatas = function (z) {
        return SendData.SwitchProtocol((18 | 0), (16 | 0), ((z ? 1 : 0) | 0));
    };
    SendData.getPair = function () { //android bluetooth is not paired
        return SendData.SwitchProtocol((18 | 0), (10 | 0), (2 | 0));
    };
    SendData.getIsBingding = function (z) { //Bind device command
        return z ? [-51, 0, 2, 19, 1] : [-51, 0, 2, 20, 1];
    };
    SendData.getDeviceSetInfo = function (i) {
        if (i === 1) { // Read the alarm data on the device
            return [-51, 0, 2, 24, 1];
        }
        if (i === 2) { // Request personal setting information and reminder commands
            return [-51, 0, 2, 25, 1];
        }
        return [];
    };
    SendData.getSetInfoByKey = function (b) {
        // 1 Get personal information
        // 2 Get target steps
        // 3 Get sedentary reminders
        // 4
        // 5 Get sleep switch information
        // 6
        // 7 Get the information of turning the wrist on
        // 8 Get automatic heart rate measurement information
        // 9 Get do not disturb mode information
        // 10
        // 11 Test instruction
        // 12
        // 12 Get contact status
        return SendData.getNoValueProtocol((26 | 0), b);
    };
    SendData.getResetDevice = function () { // Reset device
        return [-51, 0, 2, 29, 1];
    };
    SendData.getDialClockInfo = function () { // Get watch face information
        return SendData.getReadDialValue(2);
    };
    SendData.getReadDialValue = function (i) {
        return SendData.getNoValueProtocol((32 | 0), (i | 0));
    };
    SendData.getTempUniteValue = function (bArr) {
        return SendData.getProtocol((18 | 0), (33 | 0), bArr);
    };
    // ByteUtils
    SendData.HEX_DIGITS_LOWER_$LI$ = function () { if (SendData.HEX_DIGITS_LOWER == null)
        SendData.HEX_DIGITS_LOWER = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f']; return SendData.HEX_DIGITS_LOWER; };
    ;
    SendData.HEX_DIGITS_UPPER_$LI$ = function () { if (SendData.HEX_DIGITS_UPPER == null)
        SendData.HEX_DIGITS_UPPER = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F']; return SendData.HEX_DIGITS_UPPER; };
    ;
    SendData.ArraysToNewData = function (bArr, num, num2) {
        return bArr.slice(/* intValue */ (num | 0), /* intValue */ (num2 | 0));  //resume
    };
    SendData.bytesToHexString = function (bArr) {
        var sb = { str: "", toString: function () { return this.str; } };
        if (bArr == null || bArr.length <= 0) {
            return null;
        }
        var _loop_1 = function (index17743) {
            var b = bArr[index17743];
            {
                var hexString_1 = Number(b & 255).toString(16);
                if (hexString_1.length < 2) {
                    /* append */ (function (sb) { sb.str = sb.str.concat(0); return sb; })(sb);
                }
                /* append */ (function (sb) { sb.str = sb.str.concat(hexString_1); return sb; })(sb);
            }
        };
        for (var index17743 = 0; index17743 < bArr.length; index17743++) {
            _loop_1(index17743);
        }
        return sb.str;
    };
    SendData.hexStringToAlgorism = function (str) {
        return SendData.binaryToAlgorism(SendData.hexStringToBinary(str));
    };
    SendData.binaryToAlgorism = function (str) {
        var length = str.length;
        var i = 0;
        for (var i2 = length; i2 > 0; i2--) {
            {
                var charAt = (function (c) { return c.charCodeAt == null ? c : c.charCodeAt(0); })(str.charAt(i2 - 1)) - '0'.charCodeAt(0);
                var d = i;
                var pow = Math.pow(2.0, (length - i2));
                var d2 = charAt;
                /* isNaN */ isNaN(d2);
                var d3 = pow * d2;
                /* isNaN */ isNaN(d);
                i = ((d + d3) | 0);
            }
            ;
        }
        return i;
    };
    SendData.hexStringToBinary = function (str) {
        var upperCase = str.toUpperCase();
        var length = upperCase.length;
        var str2 = "";
        for (var i = 0; i < length; i++) {
            {
                var charAt = upperCase.charAt(i);
                switch ((charAt).charCodeAt(0)) {
                    case 48 /* '0' */:
                        var sb = { str: "", toString: function () { return this.str; } };
                        /* append */ (function (sb) { sb.str = sb.str.concat(str2); return sb; })(sb);
                        /* append */ (function (sb) { sb.str = sb.str.concat("0000"); return sb; })(sb);
                        str2 = sb.str;
                        break;
                    case 49 /* '1' */:
                        var sb2 = { str: "", toString: function () { return this.str; } };
                        /* append */ (function (sb) { sb.str = sb.str.concat(str2); return sb; })(sb2);
                        /* append */ (function (sb) { sb.str = sb.str.concat("0001"); return sb; })(sb2);
                        str2 = sb2.str;
                        break;
                    case 50 /* '2' */:
                        var sb3 = { str: "", toString: function () { return this.str; } };
                        /* append */ (function (sb) { sb.str = sb.str.concat(str2); return sb; })(sb3);
                        /* append */ (function (sb) { sb.str = sb.str.concat("0010"); return sb; })(sb3);
                        str2 = sb3.str;
                        break;
                    case 51 /* '3' */:
                        var sb4 = { str: "", toString: function () { return this.str; } };
                        /* append */ (function (sb) { sb.str = sb.str.concat(str2); return sb; })(sb4);
                        /* append */ (function (sb) { sb.str = sb.str.concat("0011"); return sb; })(sb4);
                        str2 = sb4.str;
                        break;
                    case 52 /* '4' */:
                        var sb5 = { str: "", toString: function () { return this.str; } };
                        /* append */ (function (sb) { sb.str = sb.str.concat(str2); return sb; })(sb5);
                        /* append */ (function (sb) { sb.str = sb.str.concat("0100"); return sb; })(sb5);
                        str2 = sb5.str;
                        break;
                    case 53 /* '5' */:
                        var sb6 = { str: "", toString: function () { return this.str; } };
                        /* append */ (function (sb) { sb.str = sb.str.concat(str2); return sb; })(sb6);
                        /* append */ (function (sb) { sb.str = sb.str.concat("0101"); return sb; })(sb6);
                        str2 = sb6.str;
                        break;
                    case 54 /* '6' */:
                        var sb7 = { str: "", toString: function () { return this.str; } };
                        /* append */ (function (sb) { sb.str = sb.str.concat(str2); return sb; })(sb7);
                        /* append */ (function (sb) { sb.str = sb.str.concat("0110"); return sb; })(sb7);
                        str2 = sb7.str;
                        break;
                    case 55 /* '7' */:
                        var sb8 = { str: "", toString: function () { return this.str; } };
                        /* append */ (function (sb) { sb.str = sb.str.concat(str2); return sb; })(sb8);
                        /* append */ (function (sb) { sb.str = sb.str.concat("0111"); return sb; })(sb8);
                        str2 = sb8.str;
                        break;
                    case 56 /* '8' */:
                        var sb9 = { str: "", toString: function () { return this.str; } };
                        /* append */ (function (sb) { sb.str = sb.str.concat(str2); return sb; })(sb9);
                        /* append */ (function (sb) { sb.str = sb.str.concat("1000"); return sb; })(sb9);
                        str2 = sb9.str;
                        break;
                    case 57 /* '9' */:
                        var sb10 = { str: "", toString: function () { return this.str; } };
                        /* append */ (function (sb) { sb.str = sb.str.concat(str2); return sb; })(sb10);
                        /* append */ (function (sb) { sb.str = sb.str.concat("1001"); return sb; })(sb10);
                        str2 = sb10.str;
                        break;
                    default:
                        switch ((charAt).charCodeAt(0)) {
                            case 65 /* 'A' */:
                                var sb11 = { str: "", toString: function () { return this.str; } };
                                /* append */ (function (sb) { sb.str = sb.str.concat(str2); return sb; })(sb11);
                                /* append */ (function (sb) { sb.str = sb.str.concat("1010"); return sb; })(sb11);
                                str2 = sb11.str;
                                break;
                            case 66 /* 'B' */:
                                var sb12 = { str: "", toString: function () { return this.str; } };
                                /* append */ (function (sb) { sb.str = sb.str.concat(str2); return sb; })(sb12);
                                /* append */ (function (sb) { sb.str = sb.str.concat("1011"); return sb; })(sb12);
                                str2 = sb12.str;
                                break;
                            case 67 /* 'C' */:
                                var sb13 = { str: "", toString: function () { return this.str; } };
                                /* append */ (function (sb) { sb.str = sb.str.concat(str2); return sb; })(sb13);
                                /* append */ (function (sb) { sb.str = sb.str.concat("1100"); return sb; })(sb13);
                                str2 = sb13.str;
                                break;
                            case 68 /* 'D' */:
                                var sb14 = { str: "", toString: function () { return this.str; } };
                                /* append */ (function (sb) { sb.str = sb.str.concat(str2); return sb; })(sb14);
                                /* append */ (function (sb) { sb.str = sb.str.concat("1101"); return sb; })(sb14);
                                str2 = sb14.str;
                                break;
                            case 69 /* 'E' */:
                                var sb15 = { str: "", toString: function () { return this.str; } };
                                /* append */ (function (sb) { sb.str = sb.str.concat(str2); return sb; })(sb15);
                                /* append */ (function (sb) { sb.str = sb.str.concat("1110"); return sb; })(sb15);
                                str2 = sb15.str;
                                break;
                            case 70 /* 'F' */:
                                var sb16 = { str: "", toString: function () { return this.str; } };
                                /* append */ (function (sb) { sb.str = sb.str.concat(str2); return sb; })(sb16);
                                /* append */ (function (sb) { sb.str = sb.str.concat("1111"); return sb; })(sb16);
                                str2 = sb16.str;
                                break;
                        }
                }
            }
            ;
        }
        return str2;
    };
    SendData.intToBytes = function (i) {
        var bArr = [0, 0, 0, 0];
        for (var i2 = 0; i2 < 4; i2++) {
            {
                bArr[i2] = ((i >> (24 - (i2 * 8))) | 0);
            }
            ;
        }
        return bArr;
    };
    SendData.algorismToHEXString = function (i) {
        var hexString = Number(i & 255).toString(16);
        if (hexString.length % 2 === 1) {
            var sb = { str: "", toString: function () { return this.str; } };
            /* append */ (function (sb) { sb.str = sb.str.concat("0"); return sb; })(sb);
            /* append */ (function (sb) { sb.str = sb.str.concat(hexString); return sb; })(sb);
            hexString = sb.str;
        }
        return hexString.toUpperCase();
    };
    SendData.hexStringToBytes = function (str) {
        if (str == null || (function (o1, o2) { if (o1 && o1.equals) {
            return o1.equals(o2);
        }
        else {
            return o1 === o2;
        } })(str, "")) {
            return null;
        }
        var upperCase = str.toUpperCase();
        var length = (upperCase.length / 2 | 0);
        var charArray = (upperCase).split('');
        var bArr = (function (s) { var a = []; while (s-- > 0)
            a.push(0); return a; })(length);
        for (var i = 0; i < length; i++) {
            {
                var i2 = i * 2;
                bArr[i] = ((SendData.charToByte(charArray[i2 + 1]) | (SendData.charToByte(charArray[i2]) << 4)) | 0);
            }
            ;
        }
        return bArr;
    };
    SendData.charToByte = function (c) {
        return ("0123456789ABCDEF".indexOf(c) | 0);
    };
    SendData.stringToNewData = function (str, i, i2) {
        var length = str.length;
        var str2 = "";
        var i3 = 0;
        var _loop_1 = function (i4) {
            {
                if (i4 >= i) {
                    var charAt_1 = str.charAt(i4);
                    var sb = { str: "", toString: function () { return this.str; } };
                    /* append */ (function (sb) { sb.str = sb.str.concat(str2); return sb; })(sb);
                    /* append */ (function (sb) { sb.str = sb.str.concat(charAt_1); return sb; })(sb);
                    str2 = sb.str;
                    i3++;
                }
                if (i3 >= i2) {
                    return "break";
                }
            }
            ;
        };
        for (var i4 = 0; i4 <= length; i4++) {
            var state_1 = _loop_1(i4);
            if (state_1 === "break")
                break;
        }
        return str2;
    };
    SendData.byteMerger = function (bArr, bArr2) {
        var bArr3 = (function (s) { var a = []; while (s-- > 0)
            a.push(0); return a; })((bArr.length + bArr2.length));
        /* arraycopy */ (function (srcPts, srcOff, dstPts, dstOff, size) { if (srcPts !== dstPts || dstOff >= srcOff + size) {
            while (--size >= 0)
                dstPts[dstOff++] = srcPts[srcOff++];
        }
        else {
            var tmp = srcPts.slice(srcOff, srcOff + size);
            for (var i = 0; i < size; i++)
                dstPts[dstOff++] = tmp[i];
        } })(bArr, 0, bArr3, 0, bArr.length);
        /* arraycopy */ (function (srcPts, srcOff, dstPts, dstOff, size) { if (srcPts !== dstPts || dstOff >= srcOff + size) {
            while (--size >= 0)
                dstPts[dstOff++] = srcPts[srcOff++];
        }
        else {
            var tmp = srcPts.slice(srcOff, srcOff + size);
            for (var i = 0; i < size; i++)
                dstPts[dstOff++] = tmp[i];
        } })(bArr2, 0, bArr3, bArr.length, bArr2.length);
        return bArr3;
    };
    SendData.bytes2HexString = function (bArr, z) {
        var str = "";
        if (bArr == null) {
            return str;
        }
        var cArr = z ? SendData.HEX_DIGITS_UPPER_$LI$() : SendData.HEX_DIGITS_LOWER_$LI$();
        var length = bArr.length;
        if (length <= 0) {
            return str;
        }
        var cArr2 = (function (s) { var a = []; while (s-- > 0)
            a.push(null); return a; })((length << 1));
        var i = 0;
        for (var i2 = 0; i2 < length; i2++) {
            {
                var i3 = i + 1;
                cArr2[i] = cArr[(bArr[i2] >> 4) & 15];
                i = i3 + 1;
                cArr2[i3] = cArr[bArr[i2] & 15];
            }
            ;
        }
        return cArr2.join('');
    };
    return SendData;
}());
SendData["__class"] = "SendData";
SendData.main(null);

function setOnData(byteArr, onAckDataCallBack) {

  var resVal1 = new Int8Array();
  var resVal2 = new Int8Array();
  var resultValue = new Int8Array();

  resVal1 = new Int8Array(byteArr);

  // console.log("RAW", SendData.bytesToHexString(resVal1), resVal1);

  var bArr = resVal1;
  if (bArr != null && bArr.length > 0) {
    var msgMmap = [];
    var bArr2 = resVal1;
    if (bArr2[0] == -36) {
      resVal2 = new Int8Array();
      resultValue = bArr2;
      var bArr3 = resultValue;
      var str = "0";
      var str2 = bArr3[bArr3.length - 1] == 1 ? "1" : str;
      if (str2 === str) {
          //SendData.returnBeforeValue();
      } else {
          //SaveKeyValues.removeKeyForValues("p_keys");
      }
      //msgMmap.push({"is_ok": str2});
      var bArr4 = resultValue;
      console.log('trap 0', "ReceiverRetultData", bArr4[3], bArr4[4]);
      ReceiverRetultData(resultValue, bArr4[3], bArr4[4]);
      return;
    }
    if (bArr2[0] == -51 || bArr2.length > 120) {
      resVal2 = new Int8Array();
      resultValue = new Int8Array();
    }
    var bArr5 = resVal2;
    if (bArr5 == null || bArr5.length <= 0) {
      resVal2 = resVal1;
    } else {
      resVal2 = SendData.byteMerger(bArr5, resVal1);
    }
    // console.log("resVal1", resVal1);
    // console.log("resVal2", resVal2);
    var valueOf = SendData.hexStringToAlgorism(SendData.bytesToHexString(SendData.ArraysToNewData(resVal2, 1, 3))); //resume
    var ArraysToNewData = SendData.ArraysToNewData(resVal2, 3, resVal2.length);
    // console.log("valueOf", valueOf);
    // console.log("ArraysToNewData", ArraysToNewData, ArraysToNewData.length);
    // console.log("RAW 2", SendData.bytesToHexString(ArraysToNewData));

    if (valueOf == ArraysToNewData.length || valueOf <= ArraysToNewData.length) {
      resultValue = resVal2;
      resVal1 = new Int8Array();
      resVal2 = new Int8Array();
      if (resultValue[0] == -51 && valueOf == ArraysToNewData.length) { //resume
        //sb.concat("收到完整数据包--------value:");
        //sb.append(SendData.bytesToHexString(resultValue));
        var resultValueItem = resultValue[3];
        bArr6 = resultValue;
        if (bArr6[0] == -51) {
          var intToBytes = SendData.intToBytes((SendData.binaryToAlgorism(SendData.hexStringToBinary(SendData.bytesToHexString(new Int8Array([bArr6[1], bArr6[2]]))))) + 3);
          var ackValue = SendData.getReturnAck(resultValueItem, new Int8Array([intToBytes[2], intToBytes[3]]));
          if (onAckDataCallBack) {
            console.log("ackValue", ackValue, SendData.bytesToHexString(ackValue));
            onAckDataCallBack(ackValue);
            //mOnGetData.onAckDataCallBack(ackValue);
            //sb2.append("收到命令返回--------ack------");
            //sb2.append(SendData.bytesToHexString(ackValue));
          }
        }
        if (resultValue.length < 5) {
          resVal1 = new Int8Array();
          resVal2 = new Int8Array();
          resultValue = new Int8Array();
          console.log('invalid ');
          return;
        }
        var resultValueItem2 = resultValue[5];
        console.log('trap 1', "ReceiverRetultData", resultValueItem, resultValueItem2);
        ReceiverRetultData(resultValue, resultValueItem, resultValueItem2);
        return;
      }
      resultValue = new Int8Array();
    } else {
      // console.log('data corrupt');
    }
  } else {
    // console.log('empty byte');
  }
};

function ReceiverRetultData(resultValue, b, b2) {
  var msgMmap = [];
  if (b == 26 && b2 == 11) {
    var bytes2HexString = SendData.bytes2HexString(resultValue, true);
    console.log("debug data:", bytes2HexString);
  }
  //var sb2 = '';
  //sb2.append("接收到命令---commandId---");
  //sb2.append(b);
  //sb2.append("---commandKey---");
  //sb2.append(b2);
  //LogUtils.m20i(TAG, sb2.toString());
  var str = "what";
  var str2 = "charac_changed";
  var str3 = "action"; //NativeProtocol.WEB_DIALOG_ACTION;
  switch (b) {
    case 18:
      //console.log("Setting(b2)", b2);
      Setting(b2);
      break;
    case 20:
      //msgMmap.put(str3, str2);
      //msgMmap.put(str, (10));
      //MyApplication.doSendBroadcast(msgMmap);
      //MySPUtils.saveRealStepsInfo(0, 0, 0);
      break;
    case 21:
      if (b2 != 7) {
        if (b2 != 8) {
          Sport(resultValue, b2);
          break;
        } else {
          //Constant.mHandler.postDelayed(new Runnable() {
            //public void run() {
              //Constant.isExecute = true;
            //}
          //}, 1000);
          //msgMmap.put(str3, str2);
          //msgMmap.put(str, (12));
          //MyApplication.doSendBroadcast(msgMmap);
          //return true;
        }
      } else {
        //Constant.isExecute = false;
        //Constant.mHandler.postDelayed(new Runnable() {
          //public void run() {
            //Constant.isExecute = true;
          //}
        //}, 15000);
        //msgMmap.put(str3, str2);
        //msgMmap.put(str, (11));
        //MyApplication.doSendBroadcast(msgMmap);
        return true;
      }
    case 24:
      if (b2 != 0) {
        console.log("AlarmLists()");
        //AlarmLists();
        break;
      } else {
        return false;
      }
    case 25:
      console.log("OtherSetInfo()");
      //OtherSetInfo(resultValue); //TODO
      break;
    case 26:
      SetInfoByKey(resultValue); //TODO
      break;
    case 28:
      console.log("DeviceControlApp(b2)");
      DeviceControlApp(b2);
      break;
    case 29:
      //msgMmap.put(str3, str2);
      //msgMmap.put(str, (13));
      //MyApplication.doSendBroadcast(msgMmap);
      break;
    case 32:
      console.log("setDialUpdateInfo()");
      //setDialUpdateInfo();
      //OTA send file
      break;
  }
  return true;
}

var beep = (function () {
    var ctxClass = window.AudioContext;
    var ctx = new ctxClass();
    ctx.mozAudioChannelType = 'content';
    return function (duration, type) {
        duration = +duration;
        // Only 0-4 are valid types.
        type = (type % 5) || 0;
        var osc = ctx.createOscillator();
        osc.type = type;
        //osc.type = "sine";
        osc.connect(ctx.destination);
        if (osc.noteOn) {
          osc.noteOn(0);
        }
        if (osc.start) {
          osc.start();
        }
        setTimeout(function () {
            if (osc.noteOff) {
              osc.noteOff(0);
            }
            if (osc.stop) {
              osc.stop();
            }
        }, duration);

    };
})();

function Setting(b) {
  var str = "what";
  var z = true;
  if (b != 33) {
    switch (b) {
      case 1:
        console.log(str, (30), 'UnknownActivity');
        break;
      case 2:
        console.log(str, (35), 'AlarmActivity');
        break;
      case 3:
        console.log(str, (32), 'SetInfoActivity');
        break;
      case 4:
        console.log(str, (31), 'SetInfoActivity');
        break;
      case 5:
        console.log(str, (36), 'LongsitWarnActivity');
        break;
      case 6:
        console.log(str, (40), 'MessageSettingActivity');
        break;
      case 7:
        console.log(str, (37), 'MessageSettingActivity');
        break;
      case 8:
        console.log(str, (37), 'MessageSettingActivity');
        break;
      case 9:
        console.log(str, (39), 'BrightScreenActivity');
        break;
      default:
        switch (b) {
          case 13:
            console.log(str, (64), 'MeasureActivity_hearting');
            break;
          case 14:
            console.log(str, (65), 'UnknownActivity');
            break;
          case 15:
            console.log(str, (301), 'SleepSwitchActivity'); //what301
            break;
          default:
            switch (b) {
              case 19:
                console.log(str, (19), 'SynContractsActivity_add');
                break;
              case 20:
                console.log(str, (300), 'DisturbSwitchActivity'); //what300
                break;
              case 21:
                console.log(str, (38), 'DeviceFragmentNew');
                break;
              case 22:
                console.log(str, (302), 'HeartAutoActivity'); //what302
                break;
              case 23:
                console.log(str, (23), 'SynContractsActivity_delete');
                break;
              case 24:
                console.log(str, (64), 'MeasureActivity_hearting');
                break;
              default:
                z = false;
                break;
            }
        }
    }
  } else {
    console.log(str, (25), 'UnknownActivity');
  }
  if (z) {
    console.log('SEND BROADCAST');
  }
}

function Sport(resultValue, b) {
    var msgMmap = [];
    var sb;
    var sb2;
    var sb3;
    var sb4;
    var sb5;
    var sb6;
    var sb7;
    var sb8;
    var sb9;
    var b2 = b;
    var bArr = resultValue;
    var length = bArr.length;
    var i = 8;
    var valueOf = i;
    if (length >= 8 && bArr[0] == -51) {
        var hexStringToBinary = SendData.hexStringToBinary(SendData.bytesToHexString(SendData.ArraysToNewData(bArr, valueOf, 10)));
        var stringToNewData = SendData.stringToNewData(hexStringToBinary, 1, 6);
        var stringToNewData2 = SendData.stringToNewData(hexStringToBinary, 7, 4);
        var i2 = 11;
        var stringToNewData3 = SendData.stringToNewData(hexStringToBinary, 11, 5);
        var valueOf2 = ((SendData.binaryToAlgorism(stringToNewData)) + 2000);
        var valueOf3 = (SendData.binaryToAlgorism(stringToNewData2));
        var valueOf4 = (SendData.binaryToAlgorism(stringToNewData3));
        var str = "0";
        var str2 = "";
        if (valueOf3 < 10) {
            sb = '';
            sb += str;
            sb += valueOf3;
        } else {
            sb = '';
            sb += valueOf3;
            sb += str2;
        }
        var sb10 = sb.toString();
        if (valueOf4 < 10) {
            sb2 = '';
            sb2 += str;
            sb2 += valueOf4;
        } else {
            sb2 = '';
            sb2 += valueOf4;
            sb2 += str2;
        }
        var sb11 = sb2.toString();
        var str3 = 'ReceiverRetultData'; //TAG;
        var sb12 = '';
        sb12 += "头部解析时间---date---";
        sb12 += valueOf2;
        var str4 = "-";
        sb12 += str4;
        sb12 += sb10;
        sb12 += str4;
        sb12 += sb11;
        //MyApplication.Logdebug(str3, sb12.toString());
        var str5 = "action"; //NativeProtocol.WEB_DIALOG_ACTION;
        var str6 = ":";
        var i3 = 12;
        if (b2 == 2) {
            var str7 = sb11;
            var str8 = str5;
            var str9 = str4;
            var num = valueOf2;
            var valueOf5 = (SendData.hexStringToAlgorism(SendData.bytesToHexString(SendData.ArraysToNewData(resultValue, (11), (12)))));
            var ArraysToNewData = SendData.ArraysToNewData(resultValue, (12), (resultValue.length));
            var i4 = 0;
            while (i4 < valueOf5) {
                var i5 = i4 * 8;
                var bytesToHexvar = SendData.bytesToHexString(SendData.ArraysToNewData(ArraysToNewData, (i5), (i5 + 8)));
                var hexStringToBinary2 = SendData.hexStringToBinary(bytesToHexString);
                var str10 = 'ReceiverRetultData'; //TAG;
                var sb13 = '';
                sb13 += "运动返回数据strItme-";
                sb13 += i4;
                sb13 += str6;
                sb13 += bytesToHexString;
                sb13 += "-->";
                sb13 += hexStringToBinary2;
                //MyApplication.Logdebug(str10, sb13.toString());
                var valueOf6 = (SendData.binaryToAlgorism(SendData.stringToNewData(hexStringToBinary2, 0, 12)));
                var valueOf7 = (SendData.binaryToAlgorism(SendData.stringToNewData(hexStringToBinary2, 12, 4)));
                var valueOf8 = (SendData.binaryToAlgorism(SendData.stringToNewData(hexStringToBinary2, 16, 16)));
                var num2 = valueOf5;
                var valueOf9 = (SendData.binaryToAlgorism(SendData.stringToNewData(hexStringToBinary2, 32, 11)));
                var bArr2 = ArraysToNewData;
                var valueOf10 = (SendData.binaryToAlgorism(SendData.stringToNewData(hexStringToBinary2, 43, 2)));
                var str11 = str7;
                var valueOf11 = (SendData.binaryToAlgorism(SendData.stringToNewData(hexStringToBinary2, 45, 19)));
                var str12 = str8;
                var i6 = i4;
                var floor = Math.floor(((valueOf9 * 15) / 60));
                var intValue = (valueOf9 * 15) % 60;
                if (floor < 10) {
                    sb3 = '';
                    sb3 += str;
                    sb3 += floor;
                } else {
                    sb3 = '';
                    sb3 += floor;
                    sb3 += str2;
                }
                var sb14 = sb3.toString();
                if (intValue < 10) {
                    sb4 = '';
                    sb4 += str;
                    sb4 += intValue;
                } else {
                    sb4 = '';
                    sb4 += intValue;
                    sb4 += str2;
                }
                var sb15 = sb4.toString();
                var sb16 = '';
                sb16 += num;
                sb16 += str9;
                sb16 += sb10;
                sb16 += str9;
                var num3 = num;
                sb16 += str11;
                sb16 += " ";
                sb16 += sb14;
                sb16 += str6;
                sb16 += sb15;
                sb16 += ":00";
                var valueOf12 = sb16.toString(); // Timestamp
                var str13 = 'ReceiverRetultData'; //TAG;
                var str14 = sb10;
                var sb17 = '';
                var str15 = str6;
                sb17 += "运动解析数据--hours:";
                sb17 += sb14;
                sb17 += "--minute:";
                sb17 += sb15;
                sb17 += "--calory:";
                sb17 += valueOf11;
                sb17 += "--mode:";
                sb17 += valueOf10;
                sb17 += "--offset:";
                sb17 += valueOf9;
                sb17 += "--step:";
                sb17 += valueOf6;
                sb17 += "--min:";
                sb17 += valueOf7;
                sb17 += "--distance:";
                sb17 += valueOf8;
                //MyApplication.Logdebug(str13, sb17.toString());
                //SportDetailsModel sportDetailsModel = new SportDetailsModel(valueOf11, valueOf10, valueOf6, valueOf8, valueOf7, valueOf12);
                //sportDetailsModel.setDevid(MySPUtils.getBluetoothAddress());
                console.log(valueOf11, valueOf10, valueOf6, valueOf8, valueOf7, valueOf12);
                //DBHelper.saveDetailsSport(sportDetailsModel);
                var str16 = str12;
                //msgMmap.put(str16, "charac_changed");
                //msgMmap.put("what", (51));
                //MyApplication.doSendBroadcast(msgMmap);
                i4 = i6 + 1;
                valueOf5 = num2;
                str8 = str16;
                ArraysToNewData = bArr2;
                str7 = str11;
                num = num3;
                sb10 = str14;
                str6 = str15;
            }
        } else if (b2 == 3) {
            var num4 = valueOf2;
            var str17 = str4;
            var str18 = str5;
            if (!MySPUtils.isSurpportSleep()) {
                LogUtils.m20i("不支持睡眠");
                return;
            }
            var sb18 = '';
            sb18 += "sleep value hex:";
            sb18 += SendData.bytes2HexString(resultValue);
            sb18 += "end";
            //LogUtils.m20i('ReceiverRetultData', sb18.toString());
            var sb19 = '';
            sb19 += "sleep value bytes:";
            sb19 += SendData.bytes2Chars(resultValue);
            //LogUtils.m20i('ReceiverRetultData', sb19.toString());
            var valueOf13 = (SendData.hexStringToAlgorism(SendData.bytesToHexString(SendData.ArraysToNewData(resultValue, (11), (12)))));
            var ArraysToNewData2 = SendData.ArraysToNewData(resultValue, (12), (resultValue.length));
            var i7 = 0;
            while (i7 < valueOf13) {
                var i8 = i7 * 4;
                var bytesToHexString2 = SendData.bytesToHexString(SendData.ArraysToNewData(ArraysToNewData2, (i8), (i8 + 4)));
                var hexStringToBinary3 = SendData.hexStringToBinary(bytesToHexString2);
                var str19 = 'ReceiverRetultData'; //TAG;
                var sb20 = '';
                sb20 += "睡眠数据-";
                sb20 += i7;
                sb20 += str6;
                sb20 += bytesToHexString2;
                sb20 += "-->";
                sb20 += hexStringToBinary3;
                //MyApplication.Logdebug(str19, sb20.toString());
                var valueOf14 = (SendData.binaryToAlgorism(SendData.stringToNewData(hexStringToBinary3, 0, 16)));
                (8);
                var valueOf15 = (SendData.binaryToAlgorism(SendData.stringToNewData(hexStringToBinary3, 24, 8)));
                var floor2 = Math.floor((valueOf14 / 60));
                var intValue2 = valueOf14 % 60;
                var str20 = 'ReceiverRetultData'; //TAG;
                var sb21 = '';
                var num5 = valueOf13;
                sb21 += "睡眠数据解析--睡眠类型:";
                sb21 += valueOf15;
                sb21 += "--offset:";
                sb21 += valueOf14;
                sb21 += "--hours:";
                sb21 += floor2;
                sb21 += "--minute:";
                sb21 += intValue2;
                //MyApplication.Logdebug(str20, sb21.toString());
                if (floor2 < 10) {
                    sb5 = '';
                    sb5 += str;
                    sb5 += floor2;
                } else {
                    sb5 = '';
                    sb5 += floor2;
                    sb5 += str2;
                }
                var sb22 = sb5.toString();
                if (intValue2 < 10) {
                    sb6 = '';
                    sb6 += str;
                    sb6 += intValue2;
                } else {
                    sb6 = '';
                    sb6 += intValue2;
                    sb6 += str2;
                }
                var sb23 = sb6.toString();
                var sb24 = '';
                sb24 += sb22;
                sb24 += str6;
                sb24 += sb23;
                var sb25 = sb24.toString();
                var sb26 = '';
                sb26 += num4;
                var str21 = str17;
                sb26 += str21;
                sb26 += sb10;
                sb26 += str21;
                sb26 += sb11;
                sb26 += " ";
                sb26 += sb25;
                sb26 += ":00";
                var valueOf16 = sb26.toString(); // Timestamp
                //SleepDetailsModel sleepDetailsModel = new SleepDetailsModel();
                var str22 = sb11;
                //sleepDetailsModel.setDate(new Date(valueOf16));
                //sleepDetailsModel.setSleepType(valueOf15);
                //sleepDetailsModel.setDevid(MySPUtils.getBluetoothAddress());
                //DBHelper.saveSleepDetailsDatas(sleepDetailsModel);
                //msgMmap.put(str18, "charac_changed");
                //msgMmap.put("what", (90));
                //MyApplication.doSendBroadcast(msgMmap);
                i7++;
                valueOf13 = num5;
                sb11 = str22;
            }
        } else if (b2 == 11) {
            var str23 = str5;
            var sb27 = '';
            sb27 += sb10;
            sb27 += sb11;
            var sb28 = sb27.toString();
            var valueOf17 = (SendData.hexStringToAlgorism(SendData.bytesToHexString(SendData.ArraysToNewData(resultValue, (11), (12)))));
            var ArraysToNewData3 = SendData.ArraysToNewData(resultValue, (12), (resultValue.length));
            var i9 = 0;
            while (i9 < valueOf17) {
                var i10 = i9 * 8;
                var bytesToHexString3 = SendData.bytesToHexString(SendData.ArraysToNewData(ArraysToNewData3, (i10), (i10 + 8)));
                var hexStringToBinary4 = SendData.hexStringToBinary(bytesToHexString3);
                var str24 = 'ReceiverRetultData'; //TAG;
                var sb29 = '';
                sb29 += "即时的运动数据-";
                sb29 += i9;
                sb29 += str6;
                sb29 += bytesToHexString3;
                sb29 += "-->";
                sb29 += hexStringToBinary4;
                //MyApplication.Logdebug(str24, sb29.toString());
                var valueOf18 = (SendData.binaryToAlgorism(SendData.stringToNewData(hexStringToBinary4, 0, i3)));
                var valueOf19 = (SendData.binaryToAlgorism(SendData.stringToNewData(hexStringToBinary4, i3, 4)));
                var valueOf20 = (SendData.binaryToAlgorism(SendData.stringToNewData(hexStringToBinary4, 16, 16)));
                var valueOf21 = (SendData.binaryToAlgorism(SendData.stringToNewData(hexStringToBinary4, 32, i2)));
                var valueOf22 = (SendData.binaryToAlgorism(SendData.stringToNewData(hexStringToBinary4, 43, 2)));
                var valueOf23 = (SendData.binaryToAlgorism(SendData.stringToNewData(hexStringToBinary4, 45, 19)));
                var str25 = 'ReceiverRetultData'; //TAG;
                var sb30 = '';
                var num6 = valueOf17;
                sb30 += "即时的运动数据解析";
                sb30 += sb28;
                sb30 += "--calory:";
                sb30 += valueOf23;
                sb30 += "--mode:";
                sb30 += valueOf22;
                sb30 += "--offset:";
                sb30 += valueOf21;
                sb30 += "--step:";
                sb30 += valueOf18;
                sb30 += "--min:";
                sb30 += valueOf19;
                sb30 += "--distance:";
                sb30 += valueOf20;
                //MyApplication.Logdebug(str25, sb30.toString());
                //msgMmap.put(str23, "charac_changed");
                //msgMmap.put("what", (5));
                var sb31 = '';
                sb31 += "distance_values";
                sb31 += sb28;
                var sb32 = sb31.toString();
                var sb33 = '';
                sb33 += (valueOf20) / 1000.0; // 1000.0f
                sb33 += str2;
                //SaveKeyValues.putStringValues(sb32, sb33.toString());
                var sb34 = '';
                sb34 += "calory_values";
                sb34 += sb28;
                //SaveKeyValues.putIntValues(sb34.toString(), valueOf23);
                var sb35 = '';
                sb35 += "steps_values";
                sb35 += sb28;
                //SaveKeyValues.putIntValues(sb35.toString(), valueOf18);
                //msgMmap.put("step", valueOf18);
                //msgMmap.put("distance", ((valueOf20) / 1000.0)); // 1000.0f
                //msgMmap.put("calory", valueOf23);
                //MyApplication.doSendBroadcast(msgMmap);
                i9++;
                valueOf17 = num6;
                i3 = 12;
                i2 = 11;
            }
        } else if (b2 == 12) {
            var str26 = str5;
            (0);
            (0);
            (0);
            var bArr3 = resultValue;
            if (bArr3.length >= 12) {
                var ArraysToNewData4 = SendData.ArraysToNewData(bArr3, (10), (resultValue.length));
                var bytesToHexString4 = SendData.bytesToHexString(ArraysToNewData4);
                var str27 = 'ReceiverRetultData'; //TAG;
                var sb36 = '';
                sb36 += "请求获取天总结实时数据--strDayItemValues-->";
                sb36 += bytesToHexString4;
                //MyApplication.Logdebug(str27, sb36.toString());
                var valueOf24 = (SendData.hexStringToAlgorism(SendData.bytesToHexString(SendData.ArraysToNewData(ArraysToNewData4, (0), (4)))));
                var valueOf25 = (SendData.hexStringToAlgorism(SendData.bytesToHexString(SendData.ArraysToNewData(ArraysToNewData4, (4), valueOf))));
                var valueOf26 = (SendData.hexStringToAlgorism(SendData.bytesToHexString(SendData.ArraysToNewData(ArraysToNewData4, valueOf, (10)))));
                if (valueOf24 > 100000) {
                    valueOf24 = (100000);
                }
                if (valueOf24 < 0) {
                    valueOf24 = (0);
                }
                var date = new Date();
                var sb37 = '';
                sb37 += date.getMonth();
                sb37 += date.getDate();
                var sb38 = sb37.toString();
                var sb39 = '';
                sb39 += "distance_values";
                sb39 += sb38;
                var sb40 = sb39.toString();
                var sb41 = '';
                sb41 += (valueOf25) / 1000.0; // 1000.0f
                sb41 += str2;
                //SaveKeyValues.putStringValues(sb40, sb41.toString());
                var sb42 = '';
                sb42 += "calory_values";
                sb42 += sb38;
                //SaveKeyValues.putIntValues(sb42.toString(), valueOf26);
                var sb43 = '';
                sb43 += "steps_values";
                sb43 += sb38;
                //SaveKeyValues.putIntValues(sb43.toString(), valueOf24);
                var str28 = 'ReceiverRetultData'; //TAG;
                var sb44 = '';
                sb44 += "请求获取天总结实时数据";
                sb44 += sb38;
                sb44 += "--step-->";
                sb44 += valueOf24;
                sb44 += "--calory-->";
                sb44 += valueOf26;
                sb44 += "--distance-->";
                sb44 += (valueOf25) / 1000.0; // 1000.0f
                //MyApplication.Logdebug(str28, sb44.toString());
                //msgMmap.put(str26, "charac_changed");
                //msgMmap.put("what", (5));
                //msgMmap.put("step", valueOf24);
                //msgMmap.put("distance", Float.valueOf((valueOf25) / 1000.0)); // 1000.0f
                //msgMmap.put("calory", valueOf26);
                //MyApplication.doSendBroadcast(msgMmap);
                //UploadRealStepsHelper.uploadRealSteps(valueOf24, valueOf26, valueOf25);
            }
        } else if (b2 == 14) {
            var valueOf27 = (SendData.hexStringToAlgorism(SendData.bytesToHexString(SendData.ArraysToNewData(resultValue, (11), (12)))));
            var ArraysToNewData5 = SendData.ArraysToNewData(resultValue, (12), (resultValue.length));
            var i11 = 0;
            while (i11 < valueOf27) {
                var i12 = i11 * 8;
                var bytesToHexString5 = SendData.bytesToHexString(SendData.ArraysToNewData(ArraysToNewData5, (i12), (i12 + i)));
                var hexStringToBinary5 = SendData.hexStringToBinary(bytesToHexString5);
                var str29 = 'ReceiverRetultData'; //TAG;
                var sb45 = '';
                var num7 = valueOf27;
                sb45 += "心率数据-";
                sb45 += i11;
                sb45 += str6;
                sb45 += bytesToHexString5;
                sb45 += "-->";
                sb45 += hexStringToBinary5;
                //MyApplication.Logdebug(str29, sb45.toString());
                var valueOf28 = (SendData.binaryToAlgorism(SendData.stringToNewData(hexStringToBinary5, 0, 32)));
                var valueOf29 = (SendData.binaryToAlgorism(SendData.stringToNewData(hexStringToBinary5, 32, 8)));
                var valueOf30 = (SendData.binaryToAlgorism(SendData.stringToNewData(hexStringToBinary5, 40, 8)));
                var bArr4 = ArraysToNewData5;
                var valueOf31 = (SendData.binaryToAlgorism(SendData.stringToNewData(hexStringToBinary5, 48, 8)));
                var valueOf32 = (SendData.binaryToAlgorism(SendData.stringToNewData(hexStringToBinary5, 56, 8)));
                
                var num8 = valueOf29;
                var floor3 = Math.floor((valueOf28 / 60));
                var str30 = str5;
                var num9 = valueOf30;
                var floor4 = Math.floor((floor3 / 60));
                var i13 = floor3 % 60;
                var intValue3 = (valueOf28 - ((floor4 * 60) * 60)) - (i13 * 60);
                if (intValue3 < 10) {
                    sb7 = '';
                    sb7 += str;
                    sb7 += intValue3;
                } else {
                    sb7 = '';
                    sb7 += intValue3;
                    sb7 += str2;
                }
                var sb46 = sb7.toString();
                var i14 = i11;
                if (floor4 < 10) {
                    sb8 = '';
                    sb8 += str;
                    sb8 += floor4;
                } else {
                    sb8 = '';
                    sb8 += floor4;
                    sb8 += str2;
                }
                var sb47 = sb8.toString();
                if (i13 < 10) {
                    sb9 = '';
                    sb9 += str;
                    sb9 += i13;
                } else {
                    sb9 = '';
                    sb9 += i13;
                    sb9 += str2;
                }
                var sb48 = sb9.toString();
                var sb49 = '';
                sb49 += valueOf2;
                sb49 += str4;
                sb49 += sb10;
                sb49 += str4;
                sb49 += sb11;
                var str31 = str4;
                sb49 += " ";
                sb49 += sb47;
                sb49 += str6;
                sb49 += sb48;
                sb49 += str6;
                sb49 += sb46;
                var sb50 = sb49.toString();
                var str32 = 'ReceiverRetultData'; //TAG;
                var sb51 = '';
                var num10 = valueOf2;
                sb51 += "心率解析值--hours:";
                sb51 += sb47;
                sb51 += "--minute:";
                sb51 += sb48;
                sb51 += "--sec--";
                sb51 += intValue3;
                sb51 += "--heart:";
                sb51 += valueOf32;
                sb51 += "--secs--";
                sb51 += valueOf28;
                //MyApplication.Logdebug(str32, sb51.toString());
                var valueOf33 = sb50; // Timestamp
                //MeasureDetailsModel measureDetailsModel = new MeasureDetailsModel();
                //measureDetailsModel.setDate(new Date(valueOf33));
                //measureDetailsModel.setHblood(valueOf31);
                //measureDetailsModel.setLblood(num9);
                //measureDetailsModel.setHeart(valueOf32);
                //measureDetailsModel.setSpo(num8);
                //measureDetailsModel.setDevid(MySPUtils.getBluetoothAddress());
                //DBHelper.saveMeasureValue(measureDetailsModel);
                //HttpHelper.getInstance().uploadHeartBlood(measureDetailsModel);
                console.log('date:' + valueOf33, 'Hblood:' + valueOf31, 'Lblood:' + num9, 'Heart:' + valueOf32, 'Spo:' + num8);
                var str33 = str30;
                //msgMmap.put(str33, "charac_changed");
                //msgMmap.put("what", (60));
                //MyApplication.doSendBroadcast(msgMmap);
                i11 = i14 + 1;
                valueOf27 = num7;
                str5 = str33;
                ArraysToNewData5 = bArr4;
                str4 = str31;
                valueOf2 = num10;
                i = 8;
            }
        } else if (b2 == 17) {
            parseTmpData();
        }
    }
}

function SetInfoByKey(resultValue) {
  var bytesToHexString = SendData.bytesToHexString(SendData.ArraysToNewData(resultValue, (8), (resultValue.length)));
  var resultValueItem = resultValue[5];
  console.log("SetInfoByKey()", resultValueItem);
  switch (resultValueItem) {
      case 1:
          saveUinfo(bytesToHexString);
          break;
      case 2:
          console.log('saveSteps(bytesToHexString);');
          break;
      case 3:
          console.log('saveLongSit(bytesToHexString);');
          break;
      case 4:
          console.log('savePishSwitchs(bytesToHexString);');
          break;
      case 5:
          console.log('saveSleepSwitch(bytesToHexString);');
          break;
      case 6:
          console.log('saveSwitchSet(bytesToHexString);');
          break;
      case 7:
          console.log('saveBrightScreen(bytesToHexString);');
          break;
      case 8:
          console.log('saveHeartAuto(bytesToHexString);');
          break;
      case 9:
          console.log('saveDisturbSwitch(bytesToHexString);');
          break;
      case 10:
          //var formatMac = formatMac(bytesToHexString);
          //MySPUtils.saveClassicMac(formatMac);
          //boolean checkAndBondDevice = BleUtils.checkAndBondDevice(formatMac);
          //var str2 = TAG;
          //var sb2 = '';
          //sb2 += "mac address:";
          //sb2 += formatMac;
          //sb2 += checkAndBondDevice ? ";正在开始绑定" : ";绑定失败";
          //Log.e(str2, sb2.toString());
          break;
      case 12:
          //MySPUtils.saveClassicBleNameCode(getClassicNameCode(bytesToHexString));
          break;
      case 13:
          //EventBusUtils.post(new ContractNumEvent(parseNumber(bytesToHexString, 1)));
          break;
      case 15:
          //saveTempUnite(bytesToHexString);
          break;
  }
  //msgMmap.put(NativeProtocol.WEB_DIALOG_ACTION, "charac_changed");
  //msgMmap.put("what", (14));
  //MyApplication.doSendBroadcast(msgMmap);
}

function saveUinfo(str) {
  var hexStringToBinary = SendData.hexStringToBinary(str);
  var stringToNewData = SendData.stringToNewData(hexStringToBinary, 0, 1);
  var stringToNewData2 = SendData.stringToNewData(hexStringToBinary, 1, 7);
  var stringToNewData3 = SendData.stringToNewData(hexStringToBinary, 8, 9);
  var stringToNewData4 = SendData.stringToNewData(hexStringToBinary, 17, 10);
  var stringToNewData5 = SendData.stringToNewData(hexStringToBinary, 27, 5);
  var intValue = parseInt(stringToNewData);
  var binaryToAlgorism = SendData.binaryToAlgorism(stringToNewData2);
  var binaryToAlgorism2 = SendData.binaryToAlgorism(stringToNewData3);
  var binaryToAlgorism3 = SendData.binaryToAlgorism(stringToNewData4);
  var binaryToAlgorism4 = SendData.binaryToAlgorism(stringToNewData5);
  var sb = '';
  sb += "Sex--";
  sb += intValue;
  sb += "---Age---";
  sb += binaryToAlgorism;
  sb += "---Height---";
  sb += binaryToAlgorism2;
  sb += "---weight---";
  sb += binaryToAlgorism3;
  sb += "---length unit---";
  sb += binaryToAlgorism4;
  console.log(sb);
  if ((intValue == 0 || intValue == 1) && binaryToAlgorism >= 6 && binaryToAlgorism <= 127 && binaryToAlgorism2 >= 100 && binaryToAlgorism2 <= 250 && binaryToAlgorism3 >= 30 && binaryToAlgorism3 <= 180) {
    //console.log("gender", intValue);
    //console.log("age", binaryToAlgorism);
    //console.log("height", binaryToAlgorism2);
    //console.log("weight", binaryToAlgorism3);
    //console.log("distance_unit", binaryToAlgorism4);
  }
}

function DeviceControlApp(b) {
  switch (b) {
    case 1:
      console.log("Received the control app to find the phone command");
      // 80
      beep(6000, 2)
      return;
    case 2:
      console.log("Received the control app to CAPTURE camera command");
      // 70 snap
      return;
    case 3:
      console.log("Received the control app to ENTER the camera command");
      // 72 open camera
      return;
    case 4:
      console.log("Received the control app to EXIT the camera command");
      // 71 close camera
      return;
    case 5:
    case 8:
      console.log("Received the control app to exit the heart rate measurement command");
      // 61
      return;
    case 6:
      console.log("Receive the control app to exit the blood pressure measurement command");
      // 63
      return;
    case 7:
      console.log("hang up phone");
      return;
    case 9:
      console.log("answer phone");
      return;
    case 10:
      console.log("switch up");
      //MusicControl.getInstance().lastMusic();
      return;
    case 11:
      console.log("switch pause");
      //MusicControl.getInstance().playOrPause();
      return;
    case 12:
      console.log("switch down");
      //MusicControl.getInstance().nexMusic();
      return;
    default:
      return;
  }
}
    
const Type = {
  'setNotification': 1,
  'read': 2,
  'write': 3
};
Object.freeze(Type);

const Command = (function() {

  function _Command(id, type, byteArr, bluetoothGattCharacteristic, str) {

    this.id = 0;
    this.type = null;
    this.byteArr = null;
    this.bluetoothGattCharacteristic = null;
    this.desc = "";
    this.execute = false;

    this.init = function (id, type, byteArr, bluetoothGattCharacteristic, str) {
      this.id = id;
      this.type = type;
      this.byteArr = byteArr;
      this.bluetoothGattCharacteristic = bluetoothGattCharacteristic;
      this.desc = str;
      this.execute = false;
    }

    this.init(id, type, byteArr, bluetoothGattCharacteristic, str);
  }

  return _Command;
})();

const CommandPool = (function() {

  function CommandPool() {

    this.commandIndex = -1;
    this.index = -1;
    this.pool = [];
    this.timeout = undefined;

    this.init = function () {
      this.commandIndex = 0;
      this.index = 0;
    }

    this.init();
  }

  CommandPool.prototype.run = function() {
    if (this.index < (this.pool.length)) {
      var c = this.pool[this.index];
      //console.log("Total Pool:", this.pool.length, "Current Index:", this.index, "Last Index:", (this.pool.length - 1));
      this.beginExec(c.type, c.byteArr, c.bluetoothGattCharacteristic);
    } else {
      this.timeout = setTimeout(() => {
        // console.log('Poolling');
        this.run();
      }, 5000);
    }
  }

  CommandPool.prototype.stop = function() {
    if (this.timeout !== undefined) {
      clearTimeout(this.timeout);
      this.timeout = undefined;
      console.log("STOP POOLING");
    }
  }

  CommandPool.prototype.addCommand = function(type, byteArr, bluetoothGattCharacteristic, str) {
    this.pool.push(new Command(this.commandIndex, type, byteArr, bluetoothGattCharacteristic, str));
    this.commandIndex++;
  }

  CommandPool.prototype.beginExec = function(type, byteArr, bluetoothGattCharacteristic) {
    if (type == Type.setNotification) {
      var status = true;
      if (byteArr.byteLength <= 0) {
        status = false;
      }
      this.setCharacNotification(status, bluetoothGattCharacteristic);
    } else if (type == Type.read) {
      this.readCharacteristic(bluetoothGattCharacteristic);
    } else if (type == Type.write) {
      this.writeCharacteristic(bluetoothGattCharacteristic, byteArr);
    }
  }

  CommandPool.prototype.doneExec = function(operation) {
    // console.log("DONE:", operation);
    this.index++;
    this.run();
  }

  CommandPool.prototype.readCharacteristic = function(bluetoothGattCharacteristic) {
    bluetoothGattCharacteristic.readValue()
    .then(() => {
      // console.log('readCharacteristic:', bluetoothGattCharacteristic.uuid);
    })
    .catch((err) => {
      console.warn('readCharacteristic:', bluetoothGattCharacteristic.uuid, err);
    })
    .finally(() => {
      this.doneExec('readCharacteristi');
    });
  }

  CommandPool.prototype.writeCharacteristic = function(bluetoothGattCharacteristic, byteArr) {
    if (bluetoothGattCharacteristic == null || byteArr == null || byteArr.byteLength == 0) {
      this.doneExec('writeCharacteristic');
      return;
    }
    bluetoothGattCharacteristic.writeValue(byteArr)
    .then(() => {
      // console.log('writeCharacteristic:', bluetoothGattCharacteristic.uuid);
    })
    .catch((err) => {
      console.warn('writeCharacteristic:', bluetoothGattCharacteristic.uuid, err);
    })
    .finally(() => {
      this.doneExec('writeCharacteristic');
    });
  }

  CommandPool.prototype.setCharacNotification = function(status, bluetoothGattCharacteristic) {

    var NOTIFICATION_VALUE = new Int8Array([0x00, 0x00]).buffer;
    if (status) {
      NOTIFICATION_VALUE = new Int8Array([0x01, 0x00]).buffer;
    }

    bluetoothGattCharacteristic.startNotifications()
    .then(() => {
      // console.log('setCharacNotification[startNotifications]:', bluetoothGattCharacteristic.uuid);
    })
    .catch((err) => {
      console.warn('setCharacNotification[startNotifications]:', bluetoothGattCharacteristic.uuid, err);
    });

    var foundNotificationDescriptor = false;
    bluetoothGattCharacteristic.descriptors.forEach((descriptor) => {
      if (descriptor.uuid === "00002902-0000-1000-8000-00805f9b34fb") {
        descriptor.writeValue(NOTIFICATION_VALUE)
        .then(() => {
          // console.log('setCharacNotification[writeValue]:', descriptor.uuid);
        })
        .catch((err) => {
          console.warn('setCharacNotification[writeValue]:', descriptor.uuid, err);
        })
        .finally(() => {
          this.doneExec('setCharacNotification');
        });
        foundNotificationDescriptor = true;
      }
    });

    if (!foundNotificationDescriptor) {
      this.doneExec('setCharacNotification');
    }
  }

   return CommandPool;
})();

var SDKCmdMannager = (function () {
  function SDKCmdMannager(pool) {
    if (this.pool === undefined)
      this.pool = null;
    this.pool = pool;
  }
  SDKCmdMannager.prototype.findWatch = function (writer) {
    this.pool.addCommand(Type.write, new Int8Array(SendData.getSetFindMeValue(true)).buffer, writer, "Find a bracelet");
  };
  SDKCmdMannager.prototype.getDeviceInfo = function (writer) {
    this.pool.addCommand(Type.write, new Int8Array(SendData.getDeviceSetInfo(2)).buffer, writer, "Request personal setting information and reminder command");
  };
  SDKCmdMannager.prototype.setLanguage = function (writer, i) {
    this.pool.addCommand(Type.write, new Int8Array(SendData.getSetLanguage(i)).buffer, writer, "Set Language");
  };
  SDKCmdMannager.prototype.unbondWatch = function (writer) {
    this.pool.addCommand(Type.write, new Int8Array(SendData.getIsBingding(false)).buffer, writer, "Untie the bracelet");
  };
  SDKCmdMannager.prototype.resetWatch = function (writer) {
    this.pool.addCommand(Type.write, new Int8Array(SendData.getResetDevice()).buffer, writer, "Reset the bracelet");
  };
  SDKCmdMannager.prototype.getTargetSteps = function (writer) {
    this.pool.addCommand(Type.write, new Int8Array(SendData.getSetInfoByKey(2)).buffer, writer, "Get target steps");
  };
  SDKCmdMannager.prototype.getAlarms = function (writer) {
    this.pool.addCommand(Type.write, new Int8Array(SendData.getDeviceSetInfo(1)).buffer, writer, "Read the alarm data on the device");
  };
  SDKCmdMannager.prototype.setAlarms = function (writer, bArr) {
    this.pool.addCommand(Type.write, bArr, writer, "Set alarm");
  };
  SDKCmdMannager.prototype.getTestData = function (writer) {
    this.pool.addCommand(Type.write, new Int8Array(SendData.getTestDatas(true)).buffer, writer, "Open test data");
  };
  SDKCmdMannager.prototype.closeTestData = function (writer) {
    this.pool.addCommand(Type.write, new Int8Array(SendData.getTestDatas(false)).buffer, writer, "Close test data");
  };
  SDKCmdMannager.prototype.sendCustomOrder = function (writer, bArr) {
    this.pool.addCommand(Type.write, bArr, writer, "Custom Command");
  };
  SDKCmdMannager.prototype.setHandLight = function (writer, bArr) {
    this.pool.addCommand(Type.write, bArr, writer, "Set the wrist up to bright screen");
  };
  SDKCmdMannager.prototype.GetInfoOfWrist = function (writer) {
    this.pool.addCommand(Type.write, new Int8Array(SendData.getSetInfoByKey(7)).buffer, writer, "Get the information of turning on the wrist screen");
  };
  SDKCmdMannager.prototype.openCamera = function (writer) {
    this.pool.addCommand(Type.write, new Int8Array(SendData.getSetCaremaValue(true)).buffer, writer, "Enable camera function");
  };
  SDKCmdMannager.prototype.closeCamera = function (writer) {
    this.pool.addCommand(Type.write, new Int8Array(SendData.getSetCaremaValue(false)).buffer, writer, "Turn off the camera function");
  };
  SDKCmdMannager.prototype.setDistuMode = function (writer, bArr) {
    this.pool.addCommand(Type.write, bArr, writer, "Set service scrambling mode");
  };
  SDKCmdMannager.prototype.getDistuModeInfo = function (writer) {
    this.pool.addCommand(Type.write, new Int8Array(SendData.getSetInfoByKey(9)).buffer, writer, "Get Do Not Disturb Mode Information");
  };
  SDKCmdMannager.prototype.setHeartRateAutoMeas = function (writer, bArr) {
    this.pool.addCommand(Type.write, bArr, writer, "Set heart rate automatic measurement");
  };
  SDKCmdMannager.prototype.getHearRateAutoMeInfo = function (writer) {
    this.pool.addCommand(Type.write, new Int8Array(SendData.getSetInfoByKey(8)).buffer, writer, "Get automatic heart rate measurement information");
  };
  SDKCmdMannager.prototype.getLongSitWarnInfo = function (writer) {
    this.pool.addCommand(Type.write, new Int8Array(SendData.getSetInfoByKey(3)).buffer, writer, "Get sedentary reminder");
  };
  SDKCmdMannager.prototype.startMeasureHeatRate = function (writer, hearting) {
    this.pool.addCommand(Type.write, new Int8Array(SendData.getSportMeasureRecive(hearting)).buffer, writer, "heart rate test");
  };
  SDKCmdMannager.prototype.getMessagesInfo = function (writer, bArr) {
    this.pool.addCommand(Type.write, bArr, writer, "Get personal information");
  };
  SDKCmdMannager.prototype.switchSleep = function (writer) {
    this.pool.addCommand(Type.write, new Int8Array(SendData.getSleepSwitchValue()).buffer, writer, "Set Sleep Switch");
  };
  SDKCmdMannager.prototype.getSleepSwitchInfo = function (writer) {
    this.pool.addCommand(Type.write, new Int8Array(SendData.getSetInfoByKey(5)).buffer, writer, "Get sleep switch information");
  };
  SDKCmdMannager.prototype.getTotalSportData = function (writer) {
    this.pool.addCommand(Type.write, new Int8Array(SendData.getSportKeyDayGet(true)).buffer, writer, "app requests to get day summary real-time data");
  };
  SDKCmdMannager.prototype.getPersonalInfo = function (writer) {
    this.pool.addCommand(Type.write, new Int8Array(SendData.getSetInfoByKey(1)).buffer, writer, "Get personal information");
  };
  SDKCmdMannager.prototype.setTempUnite = function (writer, bArr) {
    this.pool.addCommand(Type.write, bArr, writer, "Sync temperature");
  };
  SDKCmdMannager.prototype.synchronTime = function (writer) {
    this.pool.addCommand(Type.write, new Int8Array(SendData.getSetTimesValue()).buffer, writer, "Set System Time");
  };
  SDKCmdMannager.prototype.getClockDialInfo = function (writer) {
    this.pool.addCommand(Type.write, new Int8Array(SendData.getDialClockInfo()).buffer, writer, "Get dial information");
  };
  return SDKCmdMannager;
}());
SDKCmdMannager["__class"] = "SDKCmdMannager";


var pool = new CommandPool();
var sdk = new SDKCmdMannager(pool);

window.addEventListener("load", function() {

  const DEVICES_UL = document.getElementById("devices_ul");
  var DEVICES_FOUND = {};
  var connectedDevice;
  var isBinding = false;

  function nav(move, className) {
    const currentIndex = document.activeElement.tabIndex;
    const next = currentIndex + move;
    const nav = document.querySelectorAll(className);
    var targetElement = nav[next];
    if (targetElement !== undefined) {
      targetElement.focus();
    } else {
      targetElement = nav[0];
      targetElement.focus();
    }
  }

  if (navigator.mozBluetooth !== undefined) {

    navigator.mozBluetooth.onattributechanged = function() {
      console.log('onattributechanged');
    }

    function startLeScan(uuids) {
      navigator.mozBluetooth.defaultAdapter.startLeScan(uuids)
      .then(function(handlerLE) {
        handlerLE.ondevicefound = function(deviceFound) {
          var refresh = false;
          if (DEVICES_FOUND[deviceFound.device.address] === undefined) {
            refresh = true;
            DEVICES_FOUND[deviceFound.device.address] = deviceFound;
            DEVICES_FOUND[deviceFound.device.address].device.gatt.onconnectionstatechanged = () => {
              console.log('STATUS:', DEVICES_FOUND[deviceFound.device.address].device.gatt.connectionState);
              switch (DEVICES_FOUND[deviceFound.device.address].device.gatt.connectionState) {
                case "disconnected":
                  isBinding = false;
                  connectedDevice.device.gatt.oncharacteristicchanged = null;
                  connectedDevice = null;
                  break
                case "disconnecting":
                  isBinding = false;
                  break
                case "connected":
                  isBinding = true;
                  connectedDevice = DEVICES_FOUND[deviceFound.device.address];
                  break
                case "connecting":
                  isBinding = false;
                  break
              }
            }
          }
          if (refresh) {
            while (DEVICES_UL.firstChild) {
              DEVICES_UL.removeChild(DEVICES_UL.firstChild);
            }
            for (var i in DEVICES_FOUND) {
              const dvc = DEVICES_FOUND[i];
              (function(d) {
                const device_li = document.createElement("LI");
                const btn = document.createElement("BUTTON");
                btn.setAttribute("class", "nav_device");
                btn.setAttribute("tabIndex", i);
                btn.setAttribute("value", d.device.address);
                btn.appendChild(document.createTextNode(d.device.name + ' - ' + d.device.address + ' - ' + d.device.type));
                btn.addEventListener('click', () => {
                  connect(d.device.address);
                  document.activeElement.blur();
                });
                DEVICES_UL.appendChild(btn);
              })(dvc);
            }
          }
        }
      })
      .catch(function(e) {
        console.log(e);
      });
    }

    function stopLeScan(discoveryHandle) {
      navigator.mozBluetooth.defaultAdapter.stopLeScan(discoveryHandle);
    }

    function connect(address) {
      const deviceFound = DEVICES_FOUND[address];
      if (deviceFound) {
        stopLeScan(deviceFound.target);
        deviceFound.device.gatt.connect(true)
        .then(() => {
          console.log('CONNECTED:', connectedDevice.device.address);
          discoverServices();
        })
        .catch((e) => {
          console.log(e);
        });
      }
    }

    function disconnect() {
      const address = connectedDevice.device.address;
      if (connectedDevice === undefined) {
        console.log('connectedDevice is undefined');
      } else {
        connectedDevice.device.gatt.disconnect()
        .then(() => {
          console.log('DISCONNECTED:', address);
        })
        .catch((e) => {
          console.log(e);
        });
      }
    }

    function discoverServices() {
      console.log('DISCOVER_SERVICES');
      connectedDevice.device.gatt.oncharacteristicchanged = (evt) => {
        if (evt.characteristic !== undefined || evt.characteristic !== null) {
          if (evt.characteristic.uuid === "6e400003-b5a3-f393-e0a9-e50e24dcca9d") {
            console.log("-------------------------------------------START-----------------------------------------------");
            var data = new Int8Array(evt.characteristic.value);
            console.log("UART", evt.characteristic.uuid, data);
            setOnData(evt.characteristic.value, function(ackValue) {
              if (connectedDevice !== undefined) {
                connectedDevice.device.gatt.services.forEach((service) => {
                  if (service.uuid === "6e400001-b5a3-f393-e0a9-e50e24dcca9d") {
                    service.characteristics.forEach((characteristic) => {
                      if (characteristic.uuid === "6e400002-b5a3-f393-e0a9-e50e24dcca9d") {
                        console.log("onAckDataCallBack:");
                        pool.addCommand(Type.write, new Int8Array(ackValue).buffer, characteristic, 'onAckDataCallBack');
                      }
                    });
                  }
                });
              }
            });
            console.log("------------------------------------------FINISH-----------------------------------------------");
          } else {
            var name = "Unknown";
            switch (evt.characteristic.uuid) {
              case "00002a29-0000-1000-8000-00805f9b34fb":
                name = "Manufacturer Name";
                break
              case "00002a26-0000-1000-8000-00805f9b34fb":
                name = "Firmware Revision";
                break
              case "00002a19-0000-1000-8000-00805f9b34fb":
                name = "Battery Level";
                break
              default: 
                name = "Unknown";
            }
            var data = new Int8Array(evt.characteristic.value);
            console.log(name, evt.characteristic.uuid, data, String.fromCharCode.apply(null, data));
          }
        }
      }
      connectedDevice.device.gatt.discoverServices()
      .then(() => {
        connectedDevice.device.gatt.services.forEach((service) => {
          if (service.uuid === "6e400001-b5a3-f393-e0a9-e50e24dcca9d") {
            service.characteristics.forEach((characteristic) => {
              if (characteristic.uuid === "6e400002-b5a3-f393-e0a9-e50e24dcca9d") {
                console.log("SendData.getPair:", characteristic.uuid);
                pool.addCommand(Type.write, new Int8Array(SendData.getPair()).buffer, characteristic, "android蓝牙不配对");
                if (isBinding === true) {
                  console.log("SendData.getIsBingding:", characteristic.uuid);
                  pool.addCommand(Type.write, new Int8Array(SendData.getIsBingding(true)).buffer, characteristic, "绑定设备命令");
                }
              } else if (characteristic.uuid === "6e400003-b5a3-f393-e0a9-e50e24dcca9d") {
                console.log("Listen CCCD UART Notify:", characteristic.uuid);
                pool.addCommand(Type.setNotification, new Int8Array([0x01, 0x00]).buffer, characteristic, 'Listen CCCD UART Notify');
              }
            });
          } else if (service.uuid === "0000180a-0000-1000-8000-00805f9b34fb") {
            service.characteristics.forEach((characteristic) => {
              if (characteristic.uuid === "00002a29-0000-1000-8000-00805f9b34fb") {
                console.log("Get Manufacturer Name:", characteristic.uuid);
                pool.addCommand(Type.read, new Int8Array([]).buffer, characteristic, 'Get Manufacturer Name');
              } else if (characteristic.uuid === "00002a26-0000-1000-8000-00805f9b34fb") {
                console.log("Get Firmware Revision:", characteristic.uuid);
                pool.addCommand(Type.read, new Int8Array([]).buffer, characteristic, 'Get Firmware Revision');
              }
            });
          } else if (service.uuid === "0000180f-0000-1000-8000-00805f9b34fb") {
            service.characteristics.forEach((characteristic) => {
              if (characteristic.uuid === "00002a19-0000-1000-8000-00805f9b34fb") {
                console.log("Get Battery Level:", characteristic.uuid);
                sdk.ser
                pool.addCommand(Type.read, new Int8Array([]).buffer, characteristic, 'Get Battery Level');
              }
            });
          }
        });
        pool.run();
      })
      .catch((e) => {
      });
    }

    function handleKeydown(e) {
      switch(e.key) {
      case 'ArrowUp':
        nav(-1, '.nav_device');
        break
      case 'ArrowDown':
        nav(1, '.nav_device');
        break
      case 'ArrowRight':
        nav(1, '.nav_device');
        break
      case 'ArrowLeft':
        nav(-1, '.nav_device');
        break
      case 'Backspace':
      case 'EndCall':
          pool.stop();
          break
        case "SoftRight":
          disconnect();
          break
        case "SoftLeft":
          console.log('SCANNING');
          if (navigator.mozBluetooth.defaultAdapter.state === 'enabled') {
            startLeScan([]);
          }
          break
        case "Call":
          break
        case 'Enter':
          break
        case '1':
            if (connectedDevice !== undefined) {
              connectedDevice.device.gatt.services.forEach((service) => {
                if (service.uuid === "6e400001-b5a3-f393-e0a9-e50e24dcca9d") {
                  service.characteristics.forEach((characteristic) => {
                    if (characteristic.uuid === "6e400002-b5a3-f393-e0a9-e50e24dcca9d") {
                      console.log("sdk.startMeasureHeatRate");
                      sdk.startMeasureHeatRate(characteristic, true);
                    }
                  });
                }
              });
            }
          break
        case '2':
            if (connectedDevice !== undefined) {
              connectedDevice.device.gatt.services.forEach((service) => {
                if (service.uuid === "6e400001-b5a3-f393-e0a9-e50e24dcca9d") {
                  service.characteristics.forEach((characteristic) => {
                    if (characteristic.uuid === "6e400002-b5a3-f393-e0a9-e50e24dcca9d") {
                      console.log("sdk.findWatch");
                      sdk.findWatch(characteristic);
                    }
                  });
                }
              });
            }
          break
        case '3':
            if (connectedDevice !== undefined) {
              connectedDevice.device.gatt.services.forEach((service) => {
                if (service.uuid === "6e400001-b5a3-f393-e0a9-e50e24dcca9d") {
                  service.characteristics.forEach((characteristic) => {
                    if (characteristic.uuid === "6e400002-b5a3-f393-e0a9-e50e24dcca9d") {
                      console.log("sdk.synchronTime");
                      sdk.synchronTime(characteristic);
                    }
                  });
                }
              });
            }
          break
        case '4':
            if (connectedDevice !== undefined) {
              connectedDevice.device.gatt.services.forEach((service) => {
                if (service.uuid === "6e400001-b5a3-f393-e0a9-e50e24dcca9d") {
                  service.characteristics.forEach((characteristic) => {
                    if (characteristic.uuid === "6e400002-b5a3-f393-e0a9-e50e24dcca9d") {
                      console.log("setPersonalInfo:");
                      pool.addCommand(Type.write, new Int8Array(SendData.getSetUinfoValue(1, 25, 158, 48, 1)).buffer, characteristic, 'setPersonalInfo');
                    }
                  });
                }
              });
            }
          break
        case '5':
            if (connectedDevice !== undefined) {
              connectedDevice.device.gatt.services.forEach((service) => {
                if (service.uuid === "6e400001-b5a3-f393-e0a9-e50e24dcca9d") {
                  service.characteristics.forEach((characteristic) => {
                    if (characteristic.uuid === "6e400002-b5a3-f393-e0a9-e50e24dcca9d") {
                      console.log("sdk.getPersonalInfo");
                      sdk.getPersonalInfo(characteristic);
                    }
                  });
                }
              });
            }
          break
        default:
          console.log(e.key);
      }
    }
    document.activeElement.addEventListener('keydown', handleKeydown)
  }
});
