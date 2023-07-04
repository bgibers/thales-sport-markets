export const ZERO_ADDRESS = '0x0000000000000000000000000000000000000000';

export const SUPPORTED_NETWORKS = [
    {
        chainId: 10,
        chainName: 'Optimism Mainnet',
        shortChainName: 'Optimism',
        chainKey: 'optimism_mainnet',
        iconClassName: 'icon icon--op',
        isMultiCollateralSupported: true,
    },
    {
        chainId: 42161,
        chainName: 'Arbitrum One',
        shortChainName: 'Arbitrum',
        chainKey: 'arbitrum_mainnet',
        iconClassName: 'icon icon--arb',
        isMultiCollateralSupported: false,
    },
    {
        chainId: 420,
        chainName: 'Optimism Goerli Testnet',
        shortChainName: 'Optimism Goerli Testnet',
        chainKey: 'optimism_mainnet',
        iconClassName: 'icon icon--op',
        isMultiCollateralSupported: true,
    },
];

type OptimismNetwork = {
    chainId: string;
    chainName: string;
    rpcUrls: string[];
    blockExplorerUrls: string[];
    iconUrls: string[];
    fraudProofWindow?: number;
    nativeCurrency: {
        symbol: string;
        decimals: number;
    };
};

export const SUPPORTED_NETWORKS_DESCRIPTIONS: Record<number, OptimismNetwork> = {
    10: {
        chainId: '0xA',
        chainName: 'Optimism',
        rpcUrls: ['https://mainnet.optimism.io'],
        blockExplorerUrls: ['https://optimistic.etherscan.io/'],
        iconUrls: ['https://optimism.io/images/metamask_icon.svg', 'https://optimism.io/images/metamask_icon.png'],
        nativeCurrency: {
            symbol: 'ETH',
            decimals: 18,
        },
    },
    69: {
        chainId: '0x45',
        chainName: 'Optimism Kovan',
        rpcUrls: ['https://kovan.optimism.io'],
        blockExplorerUrls: ['https://kovan-optimistic.etherscan.io/'],
        iconUrls: ['https://optimism.io/images/metamask_icon.svg', 'https://optimism.io/images/metamask_icon.png'],
        nativeCurrency: {
            symbol: 'ETH',
            decimals: 18,
        },
    },
    420: {
        chainId: '0x420',
        chainName: 'Optimism Goerli',
        rpcUrls: ['https://goerli.optimism.io/'],
        blockExplorerUrls: ['https://goerli-optimism.etherscan.io/'],
        iconUrls: ['https://optimism.io/images/metamask_icon.svg', 'https://optimism.io/images/metamask_icon.png'],
        nativeCurrency: {
            symbol: 'ETH',
            decimals: 18,
        },
    },
    42161: {
        chainId: '0xA4B1',
        chainName: 'Arbitrum One',
        rpcUrls: ['https://arb1.arbitrum.io/rpc'],
        blockExplorerUrls: ['https://arbiscan.io/'],
        iconUrls: ['https://optimism.io/images/metamask_icon.svg', 'https://optimism.io/images/metamask_icon.png'],
        nativeCurrency: {
            symbol: 'ETH',
            decimals: 18,
        },
    },
};

export const MAX_GAS_LIMIT = 29000000;

export const NETWORK_SWITCHER_SUPPORTED_NETWORKS = [
    {
        networkId: 10,
        chainId: '0xA',
        chainName: 'Optimism Mainnet',
        shortChainName: 'Optimism',
        chainKey: 'optimism_mainnet',
        iconClassName: 'icon icon--op',
    },
    {
        networkId: 42161,
        chainId: '0xa4b1',
        chainName: 'Arbitrum One',
        shortChainName: 'Arbitrum',
        chainKey: 'arbitrum_mainnet',
        iconClassName: 'icon icon--arb',
    },
];
