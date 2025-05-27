import { Affix, Space, Typography } from '1byte-react-design';
import { globalToken } from '@/config/1byte-react-design';

const Version = () => {
    return (
        <Affix style={{ position: 'fixed', bottom: 15, right: 20 }}>
            <Space>
                <Typography.Text
                    style={{
                        color: globalToken.colorTextLightSolid,
                    }}
                    size="small"
                >
                    Version {import.meta.env.VITE_APP_VERSION}
                </Typography.Text>
            </Space>
        </Affix>
    );
};

export default Version;
