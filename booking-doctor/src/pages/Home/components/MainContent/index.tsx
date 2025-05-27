import { Col, Image, Row, Space, Typography } from '1byte-react-design';
import {
    DoctorSvgRepoSVG,
    LabResearchGoogleSVG,
    NeurologyGoogleSVG,
    StethoscopeGoogleSVG,
} from '@/components/icons';
import { globalToken } from '@/config/1byte-react-design';
import { WHY_ME } from '@/models/constants/image';
import Icon from '@ant-design/icons';
import { MainContentWrapper } from './styles';
import { IMainContent } from './types';

const MainContent = (props: IMainContent) => {
    return (
        <MainContentWrapper justify="center">
            <div
                style={{
                    width: '1070px',
                    margin: '120px auto',
                }}
            >
                <Typography.Title level={2}>Why ParkiDxAI?</Typography.Title>

                <Row gutter={[32, 32]}>
                    <Col span={8}>
                        <Image preview={false} src={WHY_ME} alt="why-me" />
                    </Col>
                    <Col span={16}>
                        <Row gutter={[32, 32]}>
                            <Col span={12}>
                                <Space direction="vertical">
                                    <Icon
                                        component={NeurologyGoogleSVG}
                                        style={{
                                            fontSize: 32,
                                            color: globalToken.colorPrimary,
                                        }}
                                    />
                                    <Typography.Title
                                        level={4}
                                        style={{
                                            color: globalToken.colorPrimary,
                                        }}
                                    >
                                        AI-powered Diagnosis
                                    </Typography.Title>
                                    <Typography.Text>
                                        ParkiDxAI utilizes advanced machine learning algorithms
                                        trained on real-world clinical datasets to accurately
                                        predict the likelihood of Parkinson’s Disease. By analyzing
                                        patient voice features and clinical indicators, the platform
                                        empowers healthcare professionals with early diagnostic
                                        support, contributing to timely treatment and better patient
                                        outcomes.
                                    </Typography.Text>
                                </Space>
                            </Col>
                            <Col span={12}>
                                <Space direction="vertical">
                                    <Icon
                                        component={LabResearchGoogleSVG}
                                        style={{
                                            fontSize: 32,
                                            color: globalToken.colorPrimary,
                                        }}
                                    />
                                    <Typography.Title
                                        level={4}
                                        style={{
                                            color: globalToken.colorPrimary,
                                        }}
                                    >
                                        Explainable AI Insights
                                    </Typography.Title>
                                    <Typography.Text>
                                        To build trust in AI-assisted diagnosis, ParkiDxAI
                                        integrates Explainable AI techniques including SHAP and
                                        LIME. These tools visually highlight the contribution of
                                        each feature to the model's prediction, enabling doctors to
                                        interpret how and why a diagnosis is made. This transparency
                                        ensures that the final medical decision is grounded in both
                                        clinical and data-driven insights.
                                    </Typography.Text>
                                </Space>
                            </Col>
                            <Col span={12}>
                                <Space direction="vertical">
                                    <Icon
                                        component={DoctorSvgRepoSVG}
                                        style={{
                                            fontSize: 32,
                                            color: globalToken.colorPrimary,
                                        }}
                                    />
                                    <Typography.Title
                                        level={4}
                                        style={{
                                            color: globalToken.colorPrimary,
                                        }}
                                    >
                                        Doctor-Centric Interface
                                    </Typography.Title>
                                    <Typography.Text>
                                        Designed with doctors in mind, the web application offers an
                                        intuitive interface for uploading patient data, reviewing AI
                                        predictions, and exploring explainability visualizations.
                                        Doctors can easily compare AI suggestions with their own
                                        assessments, reinforcing clinical confidence while saving
                                        time and reducing diagnostic burden.
                                    </Typography.Text>
                                </Space>
                            </Col>
                            <Col span={12}>
                                <Space direction="vertical">
                                    <Icon
                                        component={StethoscopeGoogleSVG}
                                        style={{
                                            fontSize: 32,
                                            color: globalToken.colorPrimary,
                                        }}
                                    />
                                    <Typography.Title
                                        level={4}
                                        style={{
                                            color: globalToken.colorPrimary,
                                        }}
                                    >
                                        Medical Records & Decisions
                                    </Typography.Title>
                                    <Typography.Text>
                                        Every diagnostic session is securely logged into the
                                        system’s database, including model results, SHAP/LIME
                                        explanations, and the physician’s final decision. This
                                        traceable history not only enhances clinical accountability,
                                        but also supports future research by providing valuable
                                        real-world feedback for continuous AI model improvement.
                                    </Typography.Text>
                                </Space>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div>
        </MainContentWrapper>
    );
};

export default MainContent;
