import { GetProps, Input, InputRef } from 'antd';
import { ComponentToken as InputComponentTokenAntd } from 'antd/es/input/style';
import { TextAreaRef } from 'antd/es/input/TextArea';
import { OTPRef } from 'antd/es/input/OTP';
import React from 'react';
import { InputUpload } from './InputUpload';
import { RdTooltipProps, RdUploadProps } from '1byte-react-design';

//#region Define Ant Design types
type InputPropsAntd = GetProps<typeof Input>;

type InputRefAntd = InputRef;
type TextareaRefAntd = TextAreaRef;
type OTPRefAntd = OTPRef;
//#endregion

//#region Define extended component tokens
type InputComponentTokenExtend = {};
//#endregion

//#region Define extended types
type InputPropsExtend = {};
type SearchPropsExtend = {};
type InputGroupPropsExtend = {};
type OTPPropsExtend = {};
type PasswordPropsExtend = {};
type TextAreaPropsExtend = {};
type InputUploadPropsExtend = {
    loading?: boolean;

    upload?: Omit<RdUploadProps, 'showUploadList' | 'maxCount' | 'fileList'>;

    tooltip?: RdTooltipProps;

    preview?: boolean;
};

type InputRefExtend = {};
type TextareaRefExtend = {};
type OTPRefExtend = {};
//#endregion

//#region Export types
export type RdInputProps = InputPropsAntd & InputPropsExtend;
export type RdInputUploadProps = InputPropsAntd & InputUploadPropsExtend;

export type RdInputRef = InputRefAntd & InputRefExtend;
export type RdTextareaRef = TextareaRefAntd & TextareaRefExtend;
export type RdOTPRefExtend = OTPRefAntd & OTPRefExtend;
//#endregion

//#region Define component types
export type RdInputUploadComponent = React.ForwardRefExoticComponent<
    RdInputUploadProps & React.RefAttributes<RdInputRef>
>;

export type RdInputComponentToken = InputComponentTokenAntd & InputComponentTokenExtend;
//#endregion
