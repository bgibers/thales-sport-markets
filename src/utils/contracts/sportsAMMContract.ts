const sportsAMMContract = {
    addresses: {
        5: '0x707075f0B619acF5A614Efb54FA8aC9B2FB55188',
        10: '0x170a5714112daEfF20E798B6e92e25B86Ea603C1',
        42: '0x2d6455eE8615B8B5EA5CBc33c06E8376d70762A1',
        420: '0x7465c5d60d3d095443CF9991Da03304A30D42Eae',
        42161: '0xae56177e405929c95E5d4b04C0C87E428cB6432B',
    },
    abi: [
        {
            anonymous: false,
            inputs: [
                { indexed: false, internalType: 'address', name: '_safeBox', type: 'address' },
                { indexed: false, internalType: 'contract IERC20Upgradeable', name: '_sUSD', type: 'address' },
                { indexed: false, internalType: 'address', name: '_theRundownConsumer', type: 'address' },
                { indexed: false, internalType: 'address', name: '_apexConsumer', type: 'address' },
                { indexed: false, internalType: 'contract IStakingThales', name: '_stakingThales', type: 'address' },
                { indexed: false, internalType: 'address', name: '_referrals', type: 'address' },
            ],
            name: 'AddressesUpdated',
            type: 'event',
        },
        {
            anonymous: false,
            inputs: [
                { indexed: false, internalType: 'address', name: 'buyer', type: 'address' },
                { indexed: false, internalType: 'address', name: 'market', type: 'address' },
                { indexed: false, internalType: 'enum ISportsAMM.Position', name: 'position', type: 'uint8' },
                { indexed: false, internalType: 'uint256', name: 'amount', type: 'uint256' },
                { indexed: false, internalType: 'uint256', name: 'sUSDPaid', type: 'uint256' },
                { indexed: false, internalType: 'address', name: 'susd', type: 'address' },
                { indexed: false, internalType: 'address', name: 'asset', type: 'address' },
            ],
            name: 'BoughtFromAmm',
            type: 'event',
        },
        {
            anonymous: false,
            inputs: [
                { indexed: false, internalType: 'address', name: 'oldOwner', type: 'address' },
                { indexed: false, internalType: 'address', name: 'newOwner', type: 'address' },
            ],
            name: 'OwnerChanged',
            type: 'event',
        },
        {
            anonymous: false,
            inputs: [{ indexed: false, internalType: 'address', name: 'newOwner', type: 'address' }],
            name: 'OwnerNominated',
            type: 'event',
        },
        {
            anonymous: false,
            inputs: [
                { indexed: false, internalType: 'uint256', name: '_minimalTimeLeftToMaturity', type: 'uint256' },
                { indexed: false, internalType: 'uint256', name: '_minSpread', type: 'uint256' },
                { indexed: false, internalType: 'uint256', name: '_maxSpread', type: 'uint256' },
                { indexed: false, internalType: 'uint256', name: '_minSupportedOdds', type: 'uint256' },
                { indexed: false, internalType: 'uint256', name: '_maxSupportedOdds', type: 'uint256' },
                { indexed: false, internalType: 'uint256', name: '_defaultCapPerGame', type: 'uint256' },
                { indexed: false, internalType: 'uint256', name: '_safeBoxImpact', type: 'uint256' },
                { indexed: false, internalType: 'uint256', name: '_referrerFee', type: 'uint256' },
            ],
            name: 'ParametersUpdated',
            type: 'event',
        },
        {
            anonymous: false,
            inputs: [{ indexed: false, internalType: 'address', name: 'account', type: 'address' }],
            name: 'Paused',
            type: 'event',
        },
        {
            anonymous: false,
            inputs: [
                { indexed: false, internalType: 'address', name: 'refferer', type: 'address' },
                { indexed: false, internalType: 'address', name: 'trader', type: 'address' },
                { indexed: false, internalType: 'uint256', name: 'amount', type: 'uint256' },
                { indexed: false, internalType: 'uint256', name: 'volume', type: 'uint256' },
            ],
            name: 'ReferrerPaid',
            type: 'event',
        },
        {
            anonymous: false,
            inputs: [{ indexed: false, internalType: 'address', name: '_manager', type: 'address' }],
            name: 'SetSportsPositionalMarketManager',
            type: 'event',
        },
        {
            anonymous: false,
            inputs: [
                { indexed: false, internalType: 'address', name: 'seller', type: 'address' },
                { indexed: false, internalType: 'address', name: 'market', type: 'address' },
                { indexed: false, internalType: 'enum ISportsAMM.Position', name: 'position', type: 'uint8' },
                { indexed: false, internalType: 'uint256', name: 'amount', type: 'uint256' },
                { indexed: false, internalType: 'uint256', name: 'sUSDPaid', type: 'uint256' },
                { indexed: false, internalType: 'address', name: 'susd', type: 'address' },
                { indexed: false, internalType: 'address', name: 'asset', type: 'address' },
            ],
            name: 'SoldToAMM',
            type: 'event',
        },
        {
            anonymous: false,
            inputs: [{ indexed: false, internalType: 'address', name: 'account', type: 'address' }],
            name: 'Unpaused',
            type: 'event',
        },
        { inputs: [], name: 'acceptOwnership', outputs: [], stateMutability: 'nonpayable', type: 'function' },
        {
            inputs: [],
            name: 'apexConsumer',
            outputs: [{ internalType: 'address', name: '', type: 'address' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [
                { internalType: 'address', name: 'market', type: 'address' },
                { internalType: 'enum ISportsAMM.Position', name: 'position', type: 'uint8' },
            ],
            name: 'availableToBuyFromAMM',
            outputs: [{ internalType: 'uint256', name: '_available', type: 'uint256' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [
                { internalType: 'address', name: 'market', type: 'address' },
                { internalType: 'enum ISportsAMM.Position', name: 'position', type: 'uint8' },
            ],
            name: 'availableToSellToAMM',
            outputs: [{ internalType: 'uint256', name: '_available', type: 'uint256' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [
                { internalType: 'address', name: 'market', type: 'address' },
                { internalType: 'enum ISportsAMM.Position', name: 'position', type: 'uint8' },
                { internalType: 'uint256', name: 'amount', type: 'uint256' },
                { internalType: 'uint256', name: 'expectedPayout', type: 'uint256' },
                { internalType: 'uint256', name: 'additionalSlippage', type: 'uint256' },
            ],
            name: 'buyFromAMM',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [
                { internalType: 'address', name: 'market', type: 'address' },
                { internalType: 'enum ISportsAMM.Position', name: 'position', type: 'uint8' },
                { internalType: 'uint256', name: 'amount', type: 'uint256' },
                { internalType: 'uint256', name: 'expectedPayout', type: 'uint256' },
                { internalType: 'uint256', name: 'additionalSlippage', type: 'uint256' },
                { internalType: 'address', name: 'collateral', type: 'address' },
            ],
            name: 'buyFromAMMWithDifferentCollateral',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [
                { internalType: 'address', name: 'market', type: 'address' },
                { internalType: 'enum ISportsAMM.Position', name: 'position', type: 'uint8' },
                { internalType: 'uint256', name: 'amount', type: 'uint256' },
                { internalType: 'uint256', name: 'expectedPayout', type: 'uint256' },
                { internalType: 'uint256', name: 'additionalSlippage', type: 'uint256' },
                { internalType: 'address', name: 'collateral', type: 'address' },
                { internalType: 'address', name: '_referrer', type: 'address' },
            ],
            name: 'buyFromAMMWithDifferentCollateralAndReferrer',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [
                { internalType: 'address', name: 'market', type: 'address' },
                { internalType: 'enum ISportsAMM.Position', name: 'position', type: 'uint8' },
                { internalType: 'uint256', name: 'amount', type: 'uint256' },
                { internalType: 'uint256', name: 'expectedPayout', type: 'uint256' },
                { internalType: 'uint256', name: 'additionalSlippage', type: 'uint256' },
                { internalType: 'address', name: '_referrer', type: 'address' },
            ],
            name: 'buyFromAMMWithReferrer',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [
                { internalType: 'address', name: 'market', type: 'address' },
                { internalType: 'enum ISportsAMM.Position', name: 'position', type: 'uint8' },
                { internalType: 'uint256', name: 'amount', type: 'uint256' },
            ],
            name: 'buyFromAmmQuote',
            outputs: [{ internalType: 'uint256', name: '_quote', type: 'uint256' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [
                { internalType: 'address', name: 'market', type: 'address' },
                { internalType: 'enum ISportsAMM.Position', name: 'position', type: 'uint8' },
                { internalType: 'uint256', name: 'amount', type: 'uint256' },
                { internalType: 'address', name: 'collateral', type: 'address' },
            ],
            name: 'buyFromAmmQuoteWithDifferentCollateral',
            outputs: [
                { internalType: 'uint256', name: 'collateralQuote', type: 'uint256' },
                { internalType: 'uint256', name: 'sUSDToPay', type: 'uint256' },
            ],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [
                { internalType: 'address', name: 'market', type: 'address' },
                { internalType: 'enum ISportsAMM.Position', name: 'position', type: 'uint8' },
                { internalType: 'uint256', name: 'amount', type: 'uint256' },
            ],
            name: 'buyPriceImpact',
            outputs: [{ internalType: 'int256', name: 'impact', type: 'int256' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [{ internalType: 'address', name: 'market', type: 'address' }],
            name: 'canExerciseMaturedMarket',
            outputs: [{ internalType: 'bool', name: 'canExercize', type: 'bool' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
            name: 'capPerSport',
            outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [],
            name: 'curveOnrampEnabled',
            outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [],
            name: 'curveSUSD',
            outputs: [{ internalType: 'contract ICurveSUSD', name: '', type: 'address' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [],
            name: 'dai',
            outputs: [{ internalType: 'address', name: '', type: 'address' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [],
            name: 'defaultCapPerGame',
            outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [{ internalType: 'address', name: 'market', type: 'address' }],
            name: 'exerciseMaturedMarket',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [
                { internalType: 'address', name: '_market', type: 'address' },
                { internalType: 'bool', name: 'isSell', type: 'bool' },
            ],
            name: 'getMarketDefaultOdds',
            outputs: [{ internalType: 'uint256[]', name: 'odds', type: 'uint256[]' }],
            stateMutability: 'view',
            type: 'function',
        },
        { inputs: [], name: 'initNonReentrant', outputs: [], stateMutability: 'nonpayable', type: 'function' },
        {
            inputs: [
                { internalType: 'address', name: '_owner', type: 'address' },
                { internalType: 'contract IERC20Upgradeable', name: '_sUSD', type: 'address' },
                { internalType: 'uint256', name: '_defaultCapPerGame', type: 'uint256' },
                { internalType: 'uint256', name: '_min_spread', type: 'uint256' },
                { internalType: 'uint256', name: '_max_spread', type: 'uint256' },
                { internalType: 'uint256', name: '_minimalTimeLeftToMaturity', type: 'uint256' },
            ],
            name: 'initialize',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [{ internalType: 'address', name: 'market', type: 'address' }],
            name: 'isMarketInAMMTrading',
            outputs: [{ internalType: 'bool', name: 'isTrading', type: 'bool' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [],
            name: 'manager',
            outputs: [{ internalType: 'address', name: '', type: 'address' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [],
            name: 'maxAllowedPegSlippagePercentage',
            outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [],
            name: 'maxSupportedOdds',
            outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [],
            name: 'max_spread',
            outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [],
            name: 'minSupportedOdds',
            outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [],
            name: 'min_spread',
            outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [],
            name: 'minimalTimeLeftToMaturity',
            outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [{ internalType: 'address', name: '_owner', type: 'address' }],
            name: 'nominateNewOwner',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [],
            name: 'nominatedOwner',
            outputs: [{ internalType: 'address', name: '', type: 'address' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [
                { internalType: 'address', name: '_market', type: 'address' },
                { internalType: 'enum ISportsAMM.Position', name: '_position', type: 'uint8' },
            ],
            name: 'obtainOdds',
            outputs: [{ internalType: 'uint256', name: 'oddsToReturn', type: 'uint256' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [],
            name: 'owner',
            outputs: [{ internalType: 'address', name: '', type: 'address' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [],
            name: 'parlayAMM',
            outputs: [{ internalType: 'address', name: '', type: 'address' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [],
            name: 'paused',
            outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [],
            name: 'referrals',
            outputs: [{ internalType: 'address', name: '', type: 'address' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [],
            name: 'referrerFee',
            outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [
                { internalType: 'address payable', name: 'account', type: 'address' },
                { internalType: 'uint256', name: 'amount', type: 'uint256' },
            ],
            name: 'retrieveSUSDAmount',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [],
            name: 'sUSD',
            outputs: [{ internalType: 'contract IERC20Upgradeable', name: '', type: 'address' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [],
            name: 'safeBox',
            outputs: [{ internalType: 'address', name: '', type: 'address' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [],
            name: 'safeBoxImpact',
            outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [
                { internalType: 'address', name: 'market', type: 'address' },
                { internalType: 'enum ISportsAMM.Position', name: 'position', type: 'uint8' },
                { internalType: 'uint256', name: 'amount', type: 'uint256' },
            ],
            name: 'sellPriceImpact',
            outputs: [{ internalType: 'uint256', name: '_impact', type: 'uint256' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [
                { internalType: 'address', name: 'market', type: 'address' },
                { internalType: 'enum ISportsAMM.Position', name: 'position', type: 'uint8' },
                { internalType: 'uint256', name: 'amount', type: 'uint256' },
                { internalType: 'uint256', name: 'expectedPayout', type: 'uint256' },
                { internalType: 'uint256', name: 'additionalSlippage', type: 'uint256' },
            ],
            name: 'sellToAMM',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [
                { internalType: 'address', name: 'market', type: 'address' },
                { internalType: 'enum ISportsAMM.Position', name: 'position', type: 'uint8' },
                { internalType: 'uint256', name: 'amount', type: 'uint256' },
            ],
            name: 'sellToAmmQuote',
            outputs: [{ internalType: 'uint256', name: '_quote', type: 'uint256' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [
                { internalType: 'address', name: '_safeBox', type: 'address' },
                { internalType: 'contract IERC20Upgradeable', name: '_sUSD', type: 'address' },
                { internalType: 'address', name: '_theRundownConsumer', type: 'address' },
                { internalType: 'address', name: '_apexConsumer', type: 'address' },
                { internalType: 'contract IStakingThales', name: '_stakingThales', type: 'address' },
                { internalType: 'address', name: '_referrals', type: 'address' },
            ],
            name: 'setAddresses',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [{ internalType: 'contract SportsAMMUtils', name: '_ammUtils', type: 'address' }],
            name: 'setAmmUtils',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [
                { internalType: 'uint256', name: '_sportID', type: 'uint256' },
                { internalType: 'uint256', name: '_capPerSport', type: 'uint256' },
            ],
            name: 'setCapPerSport',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [
                { internalType: 'address', name: '_curveSUSD', type: 'address' },
                { internalType: 'address', name: '_dai', type: 'address' },
                { internalType: 'address', name: '_usdc', type: 'address' },
                { internalType: 'address', name: '_usdt', type: 'address' },
                { internalType: 'bool', name: '_curveOnrampEnabled', type: 'bool' },
                { internalType: 'uint256', name: '_maxAllowedPegSlippagePercentage', type: 'uint256' },
            ],
            name: 'setCurveSUSD',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [{ internalType: 'address', name: '_owner', type: 'address' }],
            name: 'setOwner',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [
                { internalType: 'uint256', name: '_minimalTimeLeftToMaturity', type: 'uint256' },
                { internalType: 'uint256', name: '_minSpread', type: 'uint256' },
                { internalType: 'uint256', name: '_maxSpread', type: 'uint256' },
                { internalType: 'uint256', name: '_minSupportedOdds', type: 'uint256' },
                { internalType: 'uint256', name: '_maxSupportedOdds', type: 'uint256' },
                { internalType: 'uint256', name: '_defaultCapPerGame', type: 'uint256' },
                { internalType: 'uint256', name: '_safeBoxImpact', type: 'uint256' },
                { internalType: 'uint256', name: '_referrerFee', type: 'uint256' },
            ],
            name: 'setParameters',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [{ internalType: 'bool', name: '_setPausing', type: 'bool' }],
            name: 'setPaused',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [{ internalType: 'address', name: '_manager', type: 'address' }],
            name: 'setSportsPositionalMarketManager',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [{ internalType: 'address', name: '', type: 'address' }],
            name: 'spentOnGame',
            outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [],
            name: 'stakingThales',
            outputs: [{ internalType: 'contract IStakingThales', name: '', type: 'address' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [],
            name: 'theRundownConsumer',
            outputs: [{ internalType: 'address', name: '', type: 'address' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [{ internalType: 'address', name: 'proxyAddress', type: 'address' }],
            name: 'transferOwnershipAtInit',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [],
            name: 'usdc',
            outputs: [{ internalType: 'address', name: '', type: 'address' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [],
            name: 'usdt',
            outputs: [{ internalType: 'address', name: '', type: 'address' }],
            stateMutability: 'view',
            type: 'function',
        },
    ],
};

export default sportsAMMContract;
