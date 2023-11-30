import { GetStartedStep } from 'enums/wizard';
import { t } from 'i18next';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { getIsMobile } from 'redux/modules/app';
import { getIsAA, getIsWalletConnected } from 'redux/modules/wallet';
import { RootState } from 'redux/rootReducer';
import styled from 'styled-components';
import { FlexDiv, FlexDivColumn, FlexDivStart } from 'styles/common';
import Step from './components/Step';

const GetStarted: React.FC = () => {
    const isWalletConnected = useSelector((state: RootState) => getIsWalletConnected(state));
    const isMobile = useSelector((state: RootState) => getIsMobile(state));
    const isAA = useSelector((state: RootState) => getIsAA(state));

    const steps: GetStartedStep[] = [GetStartedStep.LOG_IN, GetStartedStep.DEPOSIT, GetStartedStep.TRADE];
    const [currentStep, setCurrentStep] = useState<GetStartedStep>(
        isWalletConnected && isAA ? GetStartedStep.DEPOSIT : GetStartedStep.LOG_IN
    );

    useEffect(() => {
        if (isWalletConnected) {
            setCurrentStep(GetStartedStep.DEPOSIT);
        } else {
            setCurrentStep(GetStartedStep.LOG_IN);
        }
    }, [isWalletConnected]);

    return (
        <Container>
            <Title>{t('get-started.title')}</Title>
            <ProgressDisplayWrapper>
                {steps.map((step, index) => {
                    return <ProgressBar key={`progress-${index}`} selected={step <= currentStep} />;
                })}
            </ProgressDisplayWrapper>
            {steps.map((step, index) => {
                const stepNumber = index + 1;
                return (
                    <React.Fragment key={index}>
                        <Step
                            stepNumber={stepNumber}
                            stepType={step}
                            currentStep={currentStep}
                            setCurrentStep={setCurrentStep}
                        />
                        {!isMobile && stepNumber !== steps.length && <HorizontalLine />}
                    </React.Fragment>
                );
            })}
        </Container>
    );
};

const Container = styled(FlexDivColumn)`
    width: 80%;
    margin-bottom: 40px;
`;

const Title = styled(FlexDivStart)`
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;
    color: ${(props) => props.theme.textColor.primary};
    margin-top: 20px;
    margin-bottom: 40px;
    @media (max-width: 950px) {
        margin: 20px auto;
    }
`;

const ProgressDisplayWrapper = styled(FlexDiv)`
    margin-top: 30px;
    height: 20px;
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
`;

const ProgressBar = styled(FlexDiv)<{ selected?: boolean }>`
    height: 10px;
    width: 32%;
    border-radius: 10px;
    background-color: ${(props) =>
        props.selected ? props.theme.progressBar.selected : props.theme.progressBar.unselected};
`;

const HorizontalLine = styled.hr`
    width: 100%;
    border: 1.5px solid ${(props) => props.theme.borderColor.primary};
    background: ${(props) => props.theme.background.tertiary};
    border-radius: 3px;
`;

export default GetStarted;
