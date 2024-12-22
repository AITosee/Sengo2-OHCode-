import { ZhHansMsg } from "../language/zh-hans";

export const white_balance_objs = function () {
    return [
        [ZhHansMsg.SENGO2_AUTO, "sentry_camera_white_balance_e.kAutoWhiteBalance"],
        [ZhHansMsg.SENGO2_LOCK_AWB, "sentry_camera_white_balance_e.sentry_camera_white_balance_e.kWhiteLight"],
        [ZhHansMsg.SENGO2_WHITE_LIGHT, "sentry_camera_white_balance_e.kYellowLight"],
        [ZhHansMsg.SENGO2_YELLOW_LIGHT, "sentry_camera_white_balance_e.kWhiteBalanceCalibrating"],
    ];
};

export const vision_res_objs = function () {
    return [
        [ZhHansMsg.SENGO2_STATE_VALUE_X, "sentry_obj_info_e.kXValue"],
        [ZhHansMsg.SENGO2_STATE_VALUE_Y, "sentry_obj_info_e.kYValue"],
        [ZhHansMsg.SENGO2_STATE_VALUE_WIDTH, "sentry_obj_info_e.kWidthValue"],
        [ZhHansMsg.SENGO2_STATE_VALUE_HEIGHT, "sentry_obj_info_e.kHeightValue"],
        [ZhHansMsg.SENGO2_STATE_VALUE_LABEL, "sentry_obj_info_e.kLabel"],
    ];
};

export const vision_custom_objs = function () {
    return [
        [ZhHansMsg.SENGO2_VISION_DATA + "1", "sentry_obj_info_e.kXValue"],
        [ZhHansMsg.SENGO2_VISION_DATA + "2", "sentry_obj_info_e.kYValue"],
        [ZhHansMsg.SENGO2_VISION_DATA + "3", "sentry_obj_info_e.kWidthValue"],
        [ZhHansMsg.SENGO2_VISION_DATA + "4", "sentry_obj_info_e.kHeightValue"],
        [ZhHansMsg.SENGO2_VISION_DATA + "5", "sentry_obj_info_e.kLabel"],
    ];
};

export const vision_qr_objs = function () {
    return [
        [ZhHansMsg.SENGO2_STATE_VALUE_X, "sentry_obj_info_e.kXValue"],
        [ZhHansMsg.SENGO2_STATE_VALUE_Y, "sentry_obj_info_e.kYValue"],
        [ZhHansMsg.SENGO2_STATE_VALUE_WIDTH, "sentry_obj_info_e.kWidthValue"],
        [ZhHansMsg.SENGO2_STATE_VALUE_HEIGHT, "sentry_obj_info_e.kHeightValue"],
    ];
};

export const vision_color_objs = function () {
    return [
        [ZhHansMsg.SENGO2_STATE_VALUE_LABEL, "sentry_obj_info_e.kLabel"],
        [ZhHansMsg.SENGO2_STATE_VALUE_R, "sentry_obj_info_e.kRValue"],
        [ZhHansMsg.SENGO2_STATE_VALUE_G, "sentry_obj_info_e.kGValue"],
        [ZhHansMsg.SENGO2_STATE_VALUE_B, "sentry_obj_info_e.kBValue"],
    ];
};
export const vision_line_objs = function () {
    return [
        [ZhHansMsg.SENGO2_STATE_LINE_EX, "sentry_obj_info_e.kXValue"],
        [ZhHansMsg.SENGO2_STATE_LINE_EY, "sentry_obj_info_e.kYValue"],
        [ZhHansMsg.SENGO2_STATE_LINE_SX, "sentry_obj_info_e.kWidthValue"],
        [ZhHansMsg.SENGO2_STATE_LINE_SY, "sentry_obj_info_e.kHeightValue"],
        [ZhHansMsg.SENGO2_STATE_LINE_A, "sentry_obj_info_e.kLabel"],
    ];
};

export const sengo2_vision_blod_objs = function () {
    return [
        [ZhHansMsg.SENGO2_COLOR_BLACK, "sentry_color_label_e.kColorBlack"],
        [ZhHansMsg.SENGO2_COLOR_WHITE, "sentry_color_label_e.kColorWhite"],
        [ZhHansMsg.SENGO2_COLOR_RED, "sentry_color_label_e.kColorRed"],
        [ZhHansMsg.SENGO2_COLOR_GREEN, "sentry_color_label_e.kColorGreen"],
        [ZhHansMsg.SENGO2_COLOR_BLUE, "sentry_color_label_e.kColorBlue"],
        [ZhHansMsg.SENGO2_COLOR_YELLOW, "sentry_color_label_e.kColorYellow"],
    ];
};
export const sengo2_vision_objs = function () {
    return [
        [ZhHansMsg.SENGO2_VISION_VISIONCOLOR, "sengo2_vision_e.kVisionColor"],
        [ZhHansMsg.SENGO2_VISION_VISIONBLOB, "sengo2_vision_e.kVisionBlob"],
        [ZhHansMsg.SENGO2_VISION_VISIONAPRILTAG, "sengo2_vision_e.kVisionAprilTag"],
        [ZhHansMsg.SENGO2_VISION_VISIONLINE, "sengo2_vision_e.kVisionLine"],
        [ZhHansMsg.SENGO2_VISION_VISIONLEARNING, "sengo2_vision_e.kVisionLearning"],
        [ZhHansMsg.SENGO2_VISION_VISIONCARD, "sengo2_vision_e.kVisionCard"],
        [ZhHansMsg.SENGO2_VISION_VISIONFACE, "sengo2_vision_e.kVisionFace"],
        [ZhHansMsg.SENGO2_VISION_VISION20CLASSES, "sengo2_vision_e.kVision20Classes"],
        [ZhHansMsg.SENGO2_VISION_VISIONQRCODE, "sengo2_vision_e.kVisionQrCode"],
        [
            ZhHansMsg.SENGO2_VISION_VISIONMOTIONDETECT,
            "sengo2_vision_e.kVisionMotionDetect",
        ],
    ];
};

export const sengo2_vision_param_objs = function () {
    return [
        [ZhHansMsg.SENGO2_VISION_VISIONCOLOR, "sengo2_vision_e.kVisionColor"],
        [ZhHansMsg.SENGO2_VISION_VISIONBLOB, "sengo2_vision_e.kVisionBlob"],
    ];
};
export const sengo2_vision_custom = function () {
    return [
        [ZhHansMsg.SENGO2_VISION_VISIONLEARNING, "sengo2_vision_e.kVisionLearning"],
        [ZhHansMsg.SENGO2_VISION_VISIONFACE, "sengo2_vision_e.kVisionFace"],
    ];
};
export const sengo2_vision_20class_objs = function () {
    return [
        [ZhHansMsg.SENGO2_CLASS20_AIRPLANE, "sentry_class20_label_e.kAirplane"],
        [ZhHansMsg.SENGO2_CLASS20_BICYCLE, "sentry_class20_label_e.kBicycle"],
        [ZhHansMsg.SENGO2_CLASS20_BIRD, "sentry_class20_label_e.kBird"],
        [ZhHansMsg.SENGO2_CLASS20_BOAT, "sentry_class20_label_e.kBoat"],
        [ZhHansMsg.SENGO2_CLASS20_BOTTLE, "sentry_class20_label_e.kBottle"],
        [ZhHansMsg.SENGO2_CLASS20_BUS, "sentry_class20_label_e.kBus"],
        [ZhHansMsg.SENGO2_CLASS20_CAR, "sentry_class20_label_e.kCar"],
        [ZhHansMsg.SENGO2_CLASS20_CAT, "sentry_class20_label_e.kCat"],
        [ZhHansMsg.SENGO2_CLASS20_CHAIR, "sentry_class20_label_e.kChair"],
        [ZhHansMsg.SENGO2_CLASS20_COW, "sentry_class20_label_e.kCow"],
        [ZhHansMsg.SENGO2_CLASS20_TABLE, "sentry_class20_label_e.kDiningTable"],
        [ZhHansMsg.SENGO2_CLASS20_DOG, "sentry_class20_label_e.kDog"],
        [ZhHansMsg.SENGO2_CLASS20_HORSE, "sentry_class20_label_e.kHorse"],
        [ZhHansMsg.SENGO2_CLASS20_MOTORBIKE, "sentry_class20_label_e.kMotorBike"],
        [ZhHansMsg.SENGO2_CLASS20_PERSON, "sentry_class20_label_e.kPerson"],
        [ZhHansMsg.SENGO2_CLASS20_PLANT, "sentry_class20_label_e.kPottedPlant"],
        [ZhHansMsg.SENGO2_CLASS20_SHEEP, "sentry_class20_label_e.kSheep"],
        [ZhHansMsg.SENGO2_CLASS20_SOFA, "sentry_class20_label_e.kSofa"],
        [ZhHansMsg.SENGO2_CLASS20_TRAIN, "sentry_class20_label_e.kTrain"],
        [ZhHansMsg.SENGO2_CLASS20_MONITOR, "sentry_class20_label_e.kTvMonitor"],
    ];
};

export const sengo2_vision_card_objs = function () {
    return [
        [ZhHansMsg.SENGO2_CARD_FORWARD, "sentry2_card_label_e.kCardForward"],
        [ZhHansMsg.SENGO2_CARD_LEFT, "sentry2_card_label_e.kCardLeft"],
        [ZhHansMsg.SENGO2_CARD_RIGHT, "sentry2_card_label_e.kCardRight"],
        [ZhHansMsg.SENGO2_CARD_TURN_AROUND, "sentry2_card_label_e.kCardTurnAround"],
        [ZhHansMsg.SENGO2_CARD_PARK, "sentry2_card_label_e.kCardPark"],
        [ZhHansMsg.SENGO2_CARD_GREEN_LIGHT, "sentry2_card_label_e.kCardGreenLight"],
        [ZhHansMsg.SENGO2_CARD_RED_LIGHT, "sentry2_card_label_e.kCardRedLight"],
        [ZhHansMsg.SENGO2_CARD_SPEED_40, "sentry2_card_label_e.kCardSpeed40"],
        [ZhHansMsg.SENGO2_CARD_SPEED_60, "sentry2_card_label_e.kCardSpeed60"],
        [ZhHansMsg.SENGO2_CARD_SPEED_80, "sentry2_card_label_e.kCardSpeed80"],
    ];
};

export const vision_obj_card_dict = function () {
    return {
        "sengo2_vision_e.kVisionBlob": sengo2_vision_blod_objs(),
        "sengo2_vision_e.kVisionCard": sengo2_vision_card_objs(),
        "sengo2_vision_e.kVision20Classes": sengo2_vision_20class_objs(),
    };
};

// Sengo2
export const Sengo2Begin = {
    init: function () {
        var mode_objs = [["I2C", "i2c"]];

        this.appendDummyInput()
            .appendField(
                ZhHansMsg.SENGO2_BEGIN +
                    ZhHansMsg.SENGO2_NAME +
                    ZhHansMsg.SENGO2_PORT,
            )
            .appendField(new Blockly.FieldDropdown(mode_objs), "mode_obj")
            .appendField(ZhHansMsg.SENGO2_ADDR)
            .appendField(
                new Blockly.FieldDropdown([["0x60", "0x60"]]),
                "addr_obj",
            );
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour("#EF5411");
        this.setTooltip(ZhHansMsg.SENGO2_HELP_INIT_TOOLTIP);
    },
};

// 恢复默认设置
export const Sengo2SetDefault = {
    init: function () {
        this.appendDummyInput()
            .appendField(ZhHansMsg.SENGO2_NAME)
            .appendField(ZhHansMsg.SENGO2_SET_DEFAULT);
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour("#EF5411");
        this.setTooltip(ZhHansMsg.SENGO2_HELP_SET_DEFAULT);
    },
};

export const Sengo2LedSetColor = {
    init: function () {
        var led_color = [
            "#fff",
            "#000",
            "#f00",
            "#0f0",
            "#ff0",
            "#00f",
            "#f0f",
            "#0ff",
        ];
        var color_detected = new Blockly.FieldColour("#0000ff");
        color_detected.setColours(led_color).setColumns(4);
        var color_undetected = new Blockly.FieldColour("#ff0000");
        color_undetected.setColours(led_color).setColumns(4);

        this.appendDummyInput()
            .appendField(
                ZhHansMsg.SENGO2_SET +
                    ZhHansMsg.SENGO2_NAME +
                    ZhHansMsg.SENGO2_LED_SET_COLOR,
            )
            .appendField(color_detected, "led_color_obj1")
            .appendField(ZhHansMsg.SENGO2_LED_SET_COLOR_NOT)
            .appendField(color_undetected, "led_color_obj2")
            .appendField(ZhHansMsg.SENGO2_LED_SET_LEVEL);
        this.appendValueInput("level").setCheck("Number");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour("#EF5411");
        this.setTooltip(ZhHansMsg.SENGO2_HELP_LED);
    },
};

// 启用算法
export const Sengo2VisionSetStatus = {
    init: function () {
        this.appendDummyInput()
            .appendField(ZhHansMsg.SENGO2_SET + ZhHansMsg.SENGO2_NAME)
            .appendField(
                new Blockly.FieldDropdown([
                    [ZhHansMsg.SENGO2_ENABLE, "Begin"],
                    [ZhHansMsg.SENGO2_DISABLE, "End"],
                ]),
                "VisionStatus",
            )
            .appendField(
                ZhHansMsg.SENGO2_VISION_CN + ZhHansMsg.SENGO2_VISION_EN,
            )
            .appendField(
                new Blockly.FieldDropdown(sengo2_vision_objs()),
                "vision_obj",
            );

        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour("#EF5411");
    },
};

export const Sengo2SetAWB = {
    init: function () {
        this.appendDummyInput()
            .appendField(
                ZhHansMsg.SENGO2_SET +
                    ZhHansMsg.SENGO2_NAME +
                    ZhHansMsg.SENGO2_CAMERA_SET_AWB,
            )
            .appendField(
                new Blockly.FieldDropdown(white_balance_objs()),
                "awb_obj",
            );
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour("#EF5411");
    },
};

export const Sengo2VisionSetParamNum = {
    init: function () {
        this.appendDummyInput()
            .appendField(
                ZhHansMsg.SENGO2_SET +
                    ZhHansMsg.SENGO2_NAME +
                    ZhHansMsg.SENGO2_VISION_EN,
            )
            .appendField(
                new Blockly.FieldDropdown(sengo2_vision_param_objs()),
                "vision_obj",
            );
        this.appendValueInput("max_num").setCheck("Number").appendField("  ");
        this.appendDummyInput().appendField(ZhHansMsg.SENGO2_SET_PARAMNUM);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour("#EF5411");
    },
};

export const Sengo2VisionColorSetParam = {
    init: function () {
        this.appendDummyInput()
            .appendField(
                ZhHansMsg.SENGO2_SET +
                    ZhHansMsg.SENGO2_NAME +
                    ZhHansMsg.SENGO2_VISION_EN,
            )
            .appendField(
                new Blockly.FieldDropdown([
                    [
                        ZhHansMsg.SENGO2_VISION_VISIONCOLOR,
                        "sengo2_vision_e.kVisionColor",
                    ],
                ]),
                "vision_obj",
            );
        this.appendDummyInput().appendField(
            "  " + ZhHansMsg.SENGO2_CENTER + ZhHansMsg.SENGO2_STATE_VALUE_X,
        );
        this.appendValueInput("x").setCheck("Number");
        this.appendDummyInput().appendField(
            ZhHansMsg.SENGO2_CENTER + ZhHansMsg.SENGO2_STATE_VALUE_Y,
        );
        this.appendValueInput("y").setCheck("Number");
        this.appendDummyInput().appendField(ZhHansMsg.SENGO2_STATE_VALUE_WIDTH);
        this.appendValueInput("w").setCheck("Number");
        this.appendDummyInput().appendField(
            ZhHansMsg.SENGO2_STATE_VALUE_HEIGHT,
        );
        this.appendValueInput("h").setCheck("Number");
        this.appendValueInput("index")
            .setCheck("Number")
            .appendField(ZhHansMsg.SENGO2_SET_PARAM_GROUP);
        this.setPreviousStatement(true, null);
        this.setInputsInline(true);
        this.setNextStatement(true, null);
        this.setColour("#EF5411");
    },
};

export const Sengo2VisionBlobSetParam = {
    init: function () {
        this.appendDummyInput()
            .appendField(
                ZhHansMsg.SENGO2_SET +
                    ZhHansMsg.SENGO2_NAME +
                    ZhHansMsg.SENGO2_VISION_EN,
            )
            .appendField(
                new Blockly.FieldDropdown([
                    [ZhHansMsg.SENGO2_VISION_VISIONBLOB, "sengo2_vision_e.kVisionBlob"],
                ]),
                "vision_obj",
            );
        this.appendDummyInput().appendField("  " + ZhHansMsg.SENGO2_WEIGHT);
        this.appendValueInput("w").setCheck("Number");
        this.appendDummyInput().appendField(ZhHansMsg.SENGO2_HEIGHT);
        this.appendValueInput("h").setCheck("Number");
        this.appendDummyInput()
            .appendField(ZhHansMsg.SENGO2_COLOR)
            .appendField(
                new Blockly.FieldDropdown(sengo2_vision_blod_objs()),
                "lable",
            );
        this.appendValueInput("index")
            .setCheck("Number")
            .appendField(ZhHansMsg.SENGO2_SET_PARAM_GROUP);
        this.setPreviousStatement(true, null);
        this.setInputsInline(true);
        this.setNextStatement(true, null);
        this.setColour("#EF5411");
    },
};

export const Sengo2VisionSetBlobNum = {
    init: function () {
        this.appendDummyInput()
            .appendField(
                ZhHansMsg.SENGO2_SET +
                    ZhHansMsg.SENGO2_NAME +
                    ZhHansMsg.SENGO2_VISION_EN,
            )
            .appendField(
                new Blockly.FieldDropdown([
                    [ZhHansMsg.SENGO2_VISION_VISIONBLOB, "sengo2_vision_e.kVisionBlob"],
                ]),
                "vision_obj",
            );
        this.appendDummyInput().appendField(
            "  " + ZhHansMsg.SENGO2_EVERY_CLOLR,
        );
        this.appendValueInput("num").setCheck("Number");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setInputsInline(true);
        this.setColour("#EF5411");
    },
};

export const Sengo2VisionSetLineNum = {
    init: function () {
        this.appendDummyInput()
            .appendField(
                ZhHansMsg.SENGO2_SET +
                    ZhHansMsg.SENGO2_NAME +
                    ZhHansMsg.SENGO2_VISION_EN,
            )
            .appendField(
                new Blockly.FieldDropdown([
                    [ZhHansMsg.SENGO2_VISION_VISIONLINE, "sengo2_vision_e.kVisionLine"],
                ]),
                "vision_obj",
            );
        this.appendDummyInput().appendField(
            "  " + ZhHansMsg.SENGO2_VISION_MAX_RESULT,
        );
        this.appendValueInput("num").setCheck("Number");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setInputsInline(true);
        this.setColour("#EF5411");
    },
};

export const Sengo2VisionSetAprilTagMode = {
    init: function () {
        this.appendDummyInput()
            .appendField(
                ZhHansMsg.SENGO2_SET +
                    ZhHansMsg.SENGO2_NAME +
                    ZhHansMsg.SENGO2_VISION_EN,
            )
            .appendField(
                new Blockly.FieldDropdown([
                    [
                        ZhHansMsg.SENGO2_VISION_VISIONAPRILTAG,
                        "sengo2_vision_e.kVisionAprilTag",
                    ],
                ]),
                "vision_obj",
            );
        this.appendDummyInput()
            .appendField("  " + ZhHansMsg.SENGO2_VISION_TAG_CODE)
            .appendField(
                new Blockly.FieldDropdown([
                    ["36H11", "sengo2_vision_e.kVisionModeFamily36H11"],
                    ["16H5", "sengo2_vision_e.kVisionModeFamily16H5"],
                    ["25H9", "sengo2_vision_e.kVisionModeFamily25H9"],
                ]),
                "mode",
            );
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setInputsInline(true);
        this.setColour("#EF5411");
    },
};

export const Sengo2VisionSetParam = {
    init: function () {
        this.appendDummyInput()
            .appendField(
                ZhHansMsg.SENGO2_SET +
                    ZhHansMsg.SENGO2_NAME +
                    ZhHansMsg.SENGO2_VISION_EN,
            )
            .appendField(
                new Blockly.FieldDropdown(sengo2_vision_custom()),
                "vision_obj",
            )
            .appendField("  ")
            .appendField(
                new Blockly.FieldDropdown([
                    [ZhHansMsg.SENGO2_SAVE_DATA, "100"],
                    [ZhHansMsg.SENGO2_DEL_DATA, "0"],
                ]),
                "lable",
            )
            .appendField(ZhHansMsg.SENGO2_SET_ID);
        this.appendValueInput("index").setCheck("Number");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour("#EF5411");
    },
};

export const Sengo2VisionDetectedCount = {
    init: function () {
        this.appendDummyInput()
            .appendField(ZhHansMsg.SENGO2_NAME + ZhHansMsg.SENGO2_VISION_EN)
            .appendField(
                new Blockly.FieldDropdown(sengo2_vision_objs()),
                "vision_obj",
            )
            .appendField(ZhHansMsg.SENGO2_DETECTED_NUMBER);
        this.setInputsInline(true);
        this.setOutput(true, null);
        this.setColour("#EAA20A");
    },
};

export const Sengo2VisionObjColor = {
    init: function () {
        var _vision_objs = [
            [ZhHansMsg.SENGO2_VISION_VISIONCOLOR, "sengo2_vision_e.kVisionColor"],
        ];
        this.appendDummyInput().appendField(ZhHansMsg.SENGO2_NAME);
        this.appendDummyInput()
            .appendField(ZhHansMsg.SENGO2_VISION_EN)
            .appendField(new Blockly.FieldDropdown(_vision_objs), "vision_obj")
            .appendField(ZhHansMsg.SENGO2_VISION_RETURN)
            .appendField(
                new Blockly.FieldDropdown(vision_color_objs()),
                "vision_res_obj",
            );
        this.appendValueInput("index")
            .setCheck("Number")
            .appendField(ZhHansMsg.SENGO2_VISION_RESULT);
        this.appendDummyInput().appendField(ZhHansMsg.SENGO2_VISION_RESULT_2);
        this.setInputsInline(true);
        this.setOutput(true, Number);
        this.setColour("#EAA20A");
        this.setTooltip(ZhHansMsg.SENGO2_HELP_GET_VISION_VALUE);
    },
};

export const Sengo2GetValue = {
    init: function () {
        var _vision_objs = [
            [ZhHansMsg.SENGO2_VISION_VISIONBLOB, "sengo2_vision_e.kVisionBlob"],
            [ZhHansMsg.SENGO2_VISION_VISIONAPRILTAG, "sengo2_vision_e.kVisionAprilTag"],
            [ZhHansMsg.SENGO2_VISION_VISIONLEARNING, "sengo2_vision_e.kVisionLearning"],
            [ZhHansMsg.SENGO2_VISION_VISIONCARD, "sengo2_vision_e.kVisionCard"],
            [ZhHansMsg.SENGO2_VISION_VISIONFACE, "sengo2_vision_e.kVisionFace"],
            [
                ZhHansMsg.SENGO2_VISION_VISION20CLASSES,
                "sengo2_vision_e.kVision20Classes",
            ],
            [
                ZhHansMsg.SENGO2_VISION_VISIONMOTIONDETECT,
                "sengo2_vision_e.kVisionMotionDetect",
            ],
        ];
        this.appendDummyInput().appendField(ZhHansMsg.SENGO2_NAME);
        this.appendDummyInput()
            .appendField(ZhHansMsg.SENGO2_VISION_EN)
            .appendField(new Blockly.FieldDropdown(_vision_objs), "vision_obj")
            .appendField(ZhHansMsg.SENGO2_VISION_RETURN)
            .appendField(
                new Blockly.FieldDropdown(vision_res_objs()),
                "vision_res_obj",
            );
        this.appendValueInput("index")
            .setCheck("Number")
            .appendField(ZhHansMsg.SENGO2_VISION_RESULT);
        this.appendDummyInput().appendField(ZhHansMsg.SENGO2_VISION_RESULT_2);
        this.setInputsInline(true);
        this.setOutput(true, Number);
        this.setColour("#EAA20A");
        this.setTooltip(ZhHansMsg.SENGO2_HELP_GET_VISION_VALUE);
    },
};

export const Sengo2VisionObjLine = {
    init: function () {
        var _vision_objs = [
            [ZhHansMsg.SENGO2_VISION_VISIONLINE, "sengo2_vision_e.kVisionLine"],
        ];

        this.appendDummyInput().appendField(ZhHansMsg.SENGO2_NAME);
        this.appendDummyInput()
            .appendField(ZhHansMsg.SENGO2_VISION_EN)
            .appendField(new Blockly.FieldDropdown(_vision_objs), "vision_obj")
            .appendField(ZhHansMsg.SENGO2_VISION_RETURN)
            .appendField(
                new Blockly.FieldDropdown(vision_line_objs()),
                "vision_res_obj",
            );
        this.appendValueInput("index")
            .setCheck("Number")
            .appendField(ZhHansMsg.SENGO2_VISION_RESULT);
        this.appendDummyInput().appendField(ZhHansMsg.SENGO2_VISION_RESULT_2);
        this.setInputsInline(true);
        this.setOutput(true, Number);
        this.setColour("#EAA20A");
        this.setTooltip(ZhHansMsg.SENGO2_HELP_GET_VISION_VALUE);
    },
};

export const Sengo2VisionObjQr = {
    init: function () {
        var _vision_objs = [
            [ZhHansMsg.SENGO2_VISION_VISIONQRCODE, "sengo2_vision_e.kVisionQrCode"],
        ];

        this.appendDummyInput().appendField(ZhHansMsg.SENGO2_NAME);
        this.appendDummyInput()
            .appendField(ZhHansMsg.SENGO2_VISION_EN)
            .appendField(new Blockly.FieldDropdown(_vision_objs), "vision_obj")
            .appendField(ZhHansMsg.SENGO2_VISION_RETURN)
            .appendField(
                new Blockly.FieldDropdown(vision_qr_objs()),
                "vision_res_obj",
            );
        this.appendValueInput("index")
            .setCheck("Number")
            .appendField(ZhHansMsg.SENGO2_VISION_RESULT);
        this.appendDummyInput().appendField(ZhHansMsg.SENGO2_VISION_RESULT_2);
        this.setInputsInline(true);
        this.setOutput(true, Number);
        this.setColour("#EAA20A");
        this.setTooltip(ZhHansMsg.SENGO2_HELP_GET_VISION_VALUE);
    },
};

export const Sengo2GetQrValue = {
    init: function () {
        var _vision_objs = [
            [ZhHansMsg.SENGO2_VISION_VISIONQRCODE, "sengo2_vision_e.kVisionQrCode"],
        ];
        this.appendDummyInput()
            .appendField(ZhHansMsg.SENGO2_NAME)
            .appendField(ZhHansMsg.SENGO2_VISION_EN)
            .appendField(new Blockly.FieldDropdown(_vision_objs), "vision_obj")
            .appendField(ZhHansMsg.SENGO2_GET_QRCODEVALUE);
        this.setInputsInline(true);
        this.setOutput(true, String);
        this.setColour("#EAA20A");
    },
};

export const Sengo2DetectedColor = {
    init: function () {
        this.appendDummyInput().appendField(ZhHansMsg.SENGO2_NAME);
        this.appendDummyInput()
            .appendField(ZhHansMsg.SENGO2_VISION_EN)
            .appendField(
                new Blockly.FieldDropdown([
                    [
                        ZhHansMsg.SENGO2_VISION_VISIONCARD,
                        "sengo2_vision_e.kVisionColor",
                    ],
                ]),
                "vision_obj",
            )
            .appendField(ZhHansMsg.SENGO2_VISION_DETECTED_1)
            .appendField(
                new Blockly.FieldDropdown(
                    vision_obj_card_dict()["sengo2_vision_e.kVisionBlob"],
                ),
                "vision_card_obj",
            );
        this.appendValueInput("index")
            .setCheck("Number")
            .appendField(ZhHansMsg.SENGO2_VISION_RESULT_1);
        this.appendDummyInput("VisionDetected");
        this.setInputsInline(true);
        this.setOutput(true, Boolean);
        this.setColour("#EAA20A");
        this.setTooltip(ZhHansMsg.SENGO2_HELP_DETECTED_VISION_VALUE);
    },
};

export const Sengo2DetectedBlob = {
    init: function () {
        this.appendDummyInput().appendField(ZhHansMsg.SENGO2_NAME);
        this.appendDummyInput()
            .appendField(ZhHansMsg.SENGO2_VISION_EN)
            .appendField(
                new Blockly.FieldDropdown([
                    [ZhHansMsg.SENGO2_VISION_VISIONCARD, "sengo2_vision_e.kVisionBlob"],
                ]),
                "vision_obj",
            )
            .appendField(ZhHansMsg.SENGO2_VISION_DETECTED_1)
            .appendField(
                new Blockly.FieldDropdown(
                    vision_obj_card_dict()["sengo2_vision_e.kVisionBlob"],
                ),
                "vision_card_obj",
            );
        this.appendValueInput("index")
            .setCheck("Number")
            .appendField(ZhHansMsg.SENGO2_VISION_RESULT_1);
        this.appendDummyInput("VisionDetected");
        this.setInputsInline(true);
        this.setOutput(true, Boolean);
        this.setColour("#EAA20A");
        this.setTooltip(ZhHansMsg.SENGO2_HELP_DETECTED_VISION_VALUE);
    },
};

export const Sengo2DetectedCard = {
    init: function () {
        this.appendDummyInput().appendField(ZhHansMsg.SENGO2_NAME);
        this.appendDummyInput()
            .appendField(ZhHansMsg.SENGO2_VISION_EN)
            .appendField(
                new Blockly.FieldDropdown([
                    [ZhHansMsg.SENGO2_VISION_VISIONCARD, "sengo2_vision_e.kVisionCard"],
                ]),
                "vision_obj",
            )
            .appendField(ZhHansMsg.SENGO2_VISION_DETECTED_1)
            .appendField(
                new Blockly.FieldDropdown(
                    vision_obj_card_dict()["sengo2_vision_e.kVisionCard"],
                ),
                "vision_card_obj",
            );
        this.appendValueInput("index")
            .setCheck("Number")
            .appendField(ZhHansMsg.SENGO2_VISION_RESULT_1);
        this.appendDummyInput("VisionDetected");
        this.setInputsInline(true);
        this.setOutput(true, Boolean);
        this.setColour("#EAA20A");
        this.setTooltip(ZhHansMsg.SENGO2_HELP_DETECTED_VISION_VALUE);
    },
};

export const Sengo2Detected20Class = {
    init: function () {
        this.appendDummyInput().appendField(ZhHansMsg.SENGO2_NAME);
        this.appendDummyInput()
            .appendField(ZhHansMsg.SENGO2_VISION_EN)
            .appendField(
                new Blockly.FieldDropdown([
                    [
                        ZhHansMsg.SENGO2_VISION_VISION20CLASSES,
                        "sengo2_vision_e.kVision20Classes",
                    ],
                ]),
                "vision_obj",
            )
            .appendField(ZhHansMsg.SENGO2_VISION_DETECTED_1)
            .appendField(
                new Blockly.FieldDropdown(
                    vision_obj_card_dict()["sengo2_vision_e.kVision20Classes"],
                ),
                "vision_card_obj",
            );
        this.appendValueInput("index")
            .setCheck("Number")
            .appendField(ZhHansMsg.SENGO2_VISION_RESULT_1);
        this.appendDummyInput("VisionDetected");
        this.setInputsInline(true);
        this.setOutput(true, Boolean);
        this.setColour("#EAA20A");
        this.setTooltip(ZhHansMsg.SENGO2_HELP_DETECTED_VISION_VALUE);
    },
};