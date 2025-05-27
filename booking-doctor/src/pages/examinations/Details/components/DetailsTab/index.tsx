import { Button, Flex, Image, Modal, notification, Space, Typography } from '1byte-react-design';
import { SHAP_Explaination } from '@/models/constants/image';
import { useCreateDoctorDecisionMutation } from '@/services/doctorDecision/mutations';
import { getExaminationQuery } from '@/services/examination/queries';
import { generateLimeResultQuery } from '@/services/result/queries';
import { getStatusesQuery } from '@/services/status/queries';
import { useQuery } from '@tanstack/react-query';
import { useCookies } from 'react-cookie';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router';
import PatientIntakeCard from '../PatientIntakeCard';
import ResultCard from '../ResultCard';
import ResultTable from '../ResultTable';
import { DetailsTabWrapper } from './styles';
import { checkIsAuthenticated } from '@/services/profile/utils';
import {
    getDoctorDecisionByExamQuery,
    getDoctorDecisionQuery,
} from '@/services/doctorDecision/queries';

const DetailsTab = () => {
    const { mutateAsync: createDoctorDecisionMutationAsync, isPending } =
        useCreateDoctorDecisionMutation();
    const { t } = useTranslation(['bkd.examination']);
    const { examinationId } = useParams<{ examinationId: string }>();
    const { data: result } = useQuery(generateLimeResultQuery(Number(examinationId)));
    const { data: examination } = useQuery(getExaminationQuery(Number(examinationId)));
    const { data: statuses } = useQuery(getStatusesQuery());
    const { data: doctorDecision } = useQuery(getDoctorDecisionByExamQuery(Number(examinationId)));
    const isAuthenticated = checkIsAuthenticated();

    const currentStatus = statuses?.find(s => s.id === examination?.status_id);

    const handleDecisionPD = () => {
        if (!result?.result_id) return;

        Modal.confirm({
            title: 'Are you sure about this decision?',
            content: 'This action cannot be undone, are you sure?',
            onOk: () => {
                createDoctorDecisionMutationAsync(
                    {
                        result_id: result?.result_id,
                        doctor_decision: true,
                    },
                    {
                        onSuccess: () => {
                            notification.success({
                                description: 'Your diagnosis has been sent to the patient.',
                            });
                        },
                    }
                );
            },
        });
    };

    const handleDecisionNoPD = () => {
        if (!result?.result_id) return;

        Modal.confirm({
            title: 'Are you sure about this decision?',
            content: 'This action cannot be undone, are you sure?',
            onOk: () => {
                createDoctorDecisionMutationAsync(
                    {
                        result_id: result?.result_id,
                        doctor_decision: false,
                    },
                    {
                        onSuccess: () => {
                            notification.success({
                                description: 'Your diagnosis has been sent to the patient.',
                            });
                        },
                    }
                );
            },
        });
    };

    return (
        <DetailsTabWrapper size="middle" block direction="vertical">
            <PatientIntakeCard />
            <ResultCard />
            <ResultTable />
            <Flex justify="center">
                <Image
                    preview={false}
                    src={SHAP_Explaination}
                    style={{
                        width: '100%',
                    }}
                />
            </Flex>
            {isAuthenticated && examination?.diagnosis !== null && (
                <Typography.Title level={3}>
                    Diagnostic AI results: {examination?.diagnosis ? 'PD' : 'No PD'}
                </Typography.Title>
            )}

            {!isAuthenticated && doctorDecision?.doctor_decision !== undefined && (
                <Typography.Title level={3}>
                    Diagnostic results: {doctorDecision.doctor_decision ? 'PD' : 'No PD'}
                </Typography.Title>
            )}

            {currentStatus?.name !== 'COMPLETED' && isAuthenticated && (
                <Flex justify="flex-end">
                    <Space>
                        <Button
                            variant="outlined"
                            color="success"
                            onClick={handleDecisionNoPD}
                            loading={isPending}
                        >
                            No PD
                        </Button>

                        <Button
                            variant="outlined"
                            color="danger"
                            onClick={handleDecisionPD}
                            loading={isPending}
                        >
                            PD
                        </Button>
                    </Space>
                </Flex>
            )}
        </DetailsTabWrapper>
    );
};

export default DetailsTab;
