import { Network } from 'enums/network';
import { MultiSingleAmounts, ParlaysMarket } from 'types/markets';
import { LiquidityPoolType } from 'types/liquidityPool';
import { GlobalFiltersEnum, Position } from 'enums/markets';

const QUERY_KEYS = {
    Rewards: (networkId: Network, period: number) => ['rewards', networkId, period],
    Markets: (networkId: Network) => ['markets', networkId],
    ParlayMarkets: (networkId: Network, account: string) => ['parlayMarkets', networkId, account],
    ParlayLeaderboard: (networkId: Network, period: number) => ['parlayLeaderboard', period, networkId],
    SportMarkets: (globalFilter: GlobalFiltersEnum, networkId: Network) => ['sportMarkets', globalFilter, networkId],
    SportMarketsNew: (networkId: Network) => ['sportMarketsNew', networkId],
    SportMarket: (address: string, networkId: Network) => ['sportMarketQuery', address, networkId],
    ParlayAmmData: (networkId: Network) => ['parlayAmmData', networkId],
    Market: (marketAddress: string, networkId: Network) => ['market', marketAddress, networkId],
    LiveResult: (marketId: string) => ['liveResult', marketId],
    EnetpulseLiveResult: (marketId: string, gameDate: string, sportTag: number) => [
        'enetpulseLiveResult',
        marketId,
        gameDate,
        sportTag,
    ],
    JsonOddsData: (marketId: string, sportTag: number) => ['jsonOddsData', marketId, sportTag],
    ChildMarkets: (marketAddress: string, networkId: Network) => ['childMarkets', marketAddress, networkId],
    PositionDetails: (
        marketAddress: string,
        position: Position,
        amount: number,
        stableIndex: number,
        networkId: Network
    ) => ['positionDetails', marketAddress, position, amount, stableIndex, networkId],
    MultiplePositionDetails: (
        markets: ParlaysMarket[],
        amounts: MultiSingleAmounts[],
        stableIndex: number,
        networkId: Network
    ) => ['multiplePositionDetails', markets, amounts, stableIndex, networkId],
    AvailablePerPosition: (marketAddress: string) => ['availablePerPosition', marketAddress],
    AvailablePerPositionMulti: (marketAddresses: string) => ['availablePerPositionMulti', marketAddresses],
    AvailablePerDoubleChancePosition: (marketAddress: string) => ['availablePerDoubleChancePosition', marketAddress],
    MarketTransactions: (marketAddress: string, networkId: Network, walletAddress?: string) => [
        'market',
        'transactions',
        marketAddress,
        networkId,
        walletAddress,
    ],
    MarketDuration: (networkId: Network) => ['marketDuration', networkId],
    UserTransactions: (walletAddress: string, networkId: Network) => ['user', 'transactions', walletAddress, networkId],
    WinningInfo: (walletAddress: string, networkId: Network) => ['user', 'winningInfo', walletAddress, networkId],
    ClaimTx: (market: string, networkId: Network) => ['claim', 'transactions', market, networkId],
    ClaimableCount: (walletAddress: string, networkId: Network) => [
        'claimable',
        'count',
        'notification',
        walletAddress,
        networkId,
    ],
    AccountPositions: (walletAddress: string, networkId: Network) => ['positions', walletAddress, networkId],
    AccountPositionsProfile: (walletAddress: string, networkId: Network) => [
        'accountPosition',
        walletAddress,
        networkId,
    ],
    ReferralTransaction: (walletAddress: string, networkId: Network) => [
        'referralTransaction',
        walletAddress,
        networkId,
    ],
    ReferrerID: (walletAddress: string) => ['referrerId', walletAddress],
    Referrers: (networkId: Network) => ['referrers', networkId],
    ReferredTraders: (walletAddress: string, networkId: Network) => ['referredTraders', walletAddress, networkId],
    ReferralOverview: (walletAddress: string, networkId: Network) => ['referralOverview', walletAddress, networkId],
    Wallet: {
        GetsUSDWalletBalance: (walletAddress: string, networkId: Network) => [
            'sUsd',
            'balance',
            walletAddress,
            networkId,
        ],
        TokenBalance: (token: string, walletAddress: string, networkId: Network) => [
            'wallet',
            'tokenBalance',
            token,
            walletAddress,
            networkId,
        ],
        MultipleCollateral: (walletAddress: string, networkId: Network) => [
            'multipleCollateral',
            walletAddress,
            networkId,
        ],
        OvertimeVoucher: (walletAddress: string, networkId: Network) => [
            'wallet',
            'overtimeVoucher',
            walletAddress,
            networkId,
        ],
        OvertimeVoucherEscrow: (walletAddress: string, networkId: Network) => [
            'wallet',
            'overtimeVoucherEscrow',
            walletAddress,
            networkId,
        ],
        Stats: (networkId: Network, walletAddress: string) => ['wallet', 'stats', networkId, walletAddress],
        VaultsAndLpTxs: (networkId: Network, walletAddress: string) => [
            'wallet',
            'vaultsAndLpTxs',
            networkId,
            walletAddress,
        ],
    },
    Quiz: {
        Leaderboard: () => ['quiz', 'leaderboard'],
        Tweet: () => ['quiz', 'tweet'],
    },
    FavoriteTeam: (walletAddress: string, networkId: Network) => ['favoriteTeam', walletAddress, networkId],
    Zebro: (networkId: Network) => ['zebro', networkId],
    Vault: {
        Data: (vaultAddress: string, networkId: Network) => [vaultAddress, 'data', networkId],
        UserData: (vaultAddress: string, walletAddress: string, networkId: Network) => [
            vaultAddress,
            'data',
            walletAddress,
            networkId,
        ],
        AllVaultsUserData: (walletAddress: string, networkId: Network) => ['data', walletAddress, networkId],
        Trades: (vaultAddress: string, networkId: Network) => [vaultAddress, 'trades', networkId],
        ParlayTrades: (vaultAddress: string, networkId: Network) => [vaultAddress, 'parlayTrades', networkId],
        PnL: (vaultAddress: string, networkId: Network) => [vaultAddress, 'pnl', networkId],
        UserTransactions: (vaultAddress: string, networkId: Network) => [vaultAddress, 'userTransactions', networkId],
    },
    Bungee: {
        Tokens: () => ['bungee', 'tokens'],
    },
    Banners: (networkId: Network) => ['banners', networkId],
    LiquidityPool: {
        Data: (networkId: Network) => ['liquidityPool', 'data', networkId],
        ParlayData: (networkId: Network) => ['liquidityPool', 'parlayData', networkId],
        UserData: (walletAddress: string, networkId: Network) => ['liquidityPool', 'data', walletAddress, networkId],
        ParlayUserData: (walletAddress: string, networkId: Network) => [
            'liquidityPool',
            'parlayLPData',
            walletAddress,
            networkId,
        ],
        PnL: (networkId: Network, liquidityPoolType: LiquidityPoolType) => [
            'liquidityPool',
            'pnl',
            liquidityPoolType,
            networkId,
        ],
        Return: (networkId: Network, liquidityPoolType: LiquidityPoolType) => [
            'liquidityPool',
            'return',
            liquidityPoolType,
            networkId,
        ],
        UserTransactions: (networkId: Network, liquidityPoolType: LiquidityPoolType) => [
            'liquidityPool',
            'userTransactions',
            liquidityPoolType,
            networkId,
        ],
    },
    SGPFees: (networkId: Network) => ['sgpFees', networkId],
    CheckPausedAMM: (networkId: Network) => ['checkPausedAMM', networkId],
};

export default QUERY_KEYS;
