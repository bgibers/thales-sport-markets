import React, { useCallback, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from 'redux/rootReducer';
import { getNetworkId, getWalletAddress } from 'redux/modules/wallet';
import { useTranslation } from 'react-i18next';
import useFavoriteTeamDataQuery from 'queries/favoriteTeam/useFavoriteTeamDataQuery';
import { ReactComponent as SymbolsBackground } from 'assets/images/favorite-team/symbols-background.svg';
import { ReactComponent as QatarMascot } from 'assets/images/favorite-team/qatar-mascot.svg';
import { setTheme } from 'redux/modules/ui';
import { Theme } from 'constants/ui';
import Loader from 'components/Loader';
import { Container, Tab, SymbolsContainer, TabsContainer, MascotContainer } from './styled-components';
import Eligible from './components/Eligible';
import NotEligible from './components/NotEligible';
import ChooseNFT from './components/ChooseNFT';
import AlreadyMinted from './components/AlreadyMinted';
import Header from './components/Header';
import Leaderboard from './components/Leaderboard';

const MintWorldCupNFT: React.FC = () => {
    const { t } = useTranslation();
    const networkId = useSelector((state: RootState) => getNetworkId(state));
    const walletAddress = useSelector((state: RootState) => getWalletAddress(state)) || '';
    const dispatch = useDispatch();

    const favoriteTeamDataQuery = useFavoriteTeamDataQuery(walletAddress, networkId, { refetchInterval: 10000 });

    const favoriteTeamData =
        favoriteTeamDataQuery.isSuccess && favoriteTeamDataQuery.data ? favoriteTeamDataQuery.data : null;

    const [isChooseNFTOpen, setIsChooseNFTOpen] = useState<boolean>(!!favoriteTeamData?.favoriteTeam);
    const [selectedTab, setSelectedTab] = useState<number>(0);
    const handleChooseNFT = useCallback(() => {
        setIsChooseNFTOpen(true);
    }, [setIsChooseNFTOpen]);

    useEffect(() => {
        dispatch(setTheme(Theme.WORLDCUP));
    }, [dispatch]);

    const getVisiblePage = useCallback(() => {
        if (selectedTab === 1) {
            if (!favoriteTeamData?.isEligible) {
                return <NotEligible />;
            }
            if (favoriteTeamData?.isEligible && !favoriteTeamData.favoriteTeam && !isChooseNFTOpen) {
                return <Eligible onChooseNft={handleChooseNFT} />;
            }
            if (isChooseNFTOpen && !favoriteTeamData?.favoriteTeam && favoriteTeamData?.isEligible) {
                return (
                    <ChooseNFT
                        setSelectedTab={(param) => {
                            setSelectedTab(param);
                            setIsChooseNFTOpen(false);
                        }}
                    />
                );
            }
            if (!!favoriteTeamData?.favoriteTeam) {
                return <AlreadyMinted />;
            }
        } else {
            return <Leaderboard favoriteTeamNumber={favoriteTeamData?.favoriteTeam} />;
        }
    }, [favoriteTeamData?.favoriteTeam, favoriteTeamData?.isEligible, handleChooseNFT, isChooseNFTOpen, selectedTab]);

    return (
        <>
            {favoriteTeamDataQuery.isLoading ? (
                <Loader />
            ) : (
                <>
                    <Container>
                        <Header />
                        <TabsContainer>
                            <Tab selected={selectedTab === 0} onClick={() => setSelectedTab(0)}>
                                {t('mint-world-cup-nft.leaderboard-title')}
                            </Tab>
                            <Tab selected={selectedTab === 1} onClick={() => setSelectedTab(1)}>
                                {t('mint-world-cup-nft.get-your-nft')}
                            </Tab>
                        </TabsContainer>
                        {getVisiblePage()}
                        <MascotContainer>
                            <QatarMascot />
                        </MascotContainer>
                    </Container>
                    <SymbolsContainer>
                        <SymbolsBackground />
                    </SymbolsContainer>
                </>
            )}
        </>
    );
};

export default MintWorldCupNFT;
