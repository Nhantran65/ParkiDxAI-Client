import { Image, RdUploadProps, Tooltip, Upload } from '1byte-react-design';
import { FOLDER_INFO_GOOGLE_IMAGE } from '@/models/constants/image';
import { CloudUploadOutlined, LoadingOutlined } from '@ant-design/icons';
import clsx from 'clsx';
import { forwardRef } from 'react';
import { InputUploadStyled, InputUploadWrapper, PreviewImage } from './styles';
import { RdInputUploadComponent } from './types';

export const InputUpload: RdInputUploadComponent = forwardRef((props, ref) => {
    const { loading, upload, tooltip, value, className } = props;

    const handleChange: RdUploadProps['onChange'] = info => {
        console.debug('Info', info);
    };

    return (
        <InputUploadWrapper>
            <PreviewImage justify="center" align="center">
                <Image
                    fallback={FOLDER_INFO_GOOGLE_IMAGE}
                    src={value?.toString()}
                    preview={false}
                />
            </PreviewImage>
            <InputUploadStyled
                className={clsx('rd-input-upload', className)}
                ref={ref}
                prefix={loading && <LoadingOutlined />}
                {...props}
            />
        </InputUploadWrapper>
    );
});

<InputUpload loading />;
