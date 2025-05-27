import { Flex, getComponentOrGlobalToken } from '1byte-react-design';
import styled from '@emotion/styled';
import { Input } from 'antd';

export const InputStyled = styled(Input)``;

export const InputPasswordStyled = styled(Input.Password)``;

export const TextAreaStyled = styled(Input.TextArea)``;

export const InputSearchStyled = styled(Input.Search)``;

export const InputGroupStyled = styled(Input.Group)``;

export const OTPStyled = styled(Input.OTP)``;

export const InputUploadStyled = styled(Input)``;

export const InputUploadWrapper = styled.div`
    .rd-input-upload {
        .ant-input-outlined,
        .ant-input-group-addon {
            border-top-left-radius: 0;
            border-top-right-radius: 0;
        }

        .ant-image {
            position: static;
        }
    }
`;

export const PreviewImage = styled(Flex)`
    position: relative;
    height: 120px;
    border-radius: ${getComponentOrGlobalToken('Input', 'borderRadius')}px;
    border-top: 1px solid #ddd;
    border-left: 1px solid #ddd;
    border-right: 1px solid #ddd;

    .ant-image-img {
        height: 60px;
        max-width: 100%;
    }
`;
