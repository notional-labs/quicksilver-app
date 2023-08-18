export const devChains = [
  // {
  //   $schema: "../chain.schema.json",
  //   chain_name: "elgafar-1",
  //   status: "live",
  //   website: "https://8ball.info/",
  //   network_type: "testnet",
  //   pretty_name: "Elgafar",
  //   chain_id: "elgafar-1",
  //   bech32_prefix: "elgafar-1",
  //   daemon_name: "elgafar-1",
  //   node_home: "$HOME/.8ball",
  //   key_algos: ["secp256k1"],
  //   slip44: 118,
  //   fees: {
  //     fee_tokens: [
  //       {
  //         denom: "uebl",
  //         fixed_min_gas_price: 0,
  //         low_gas_price: 0,
  //         average_gas_price: 0.025,
  //         high_gas_price: 0.04,
  //       },
  //     ],
  //   },
  //   staking: {
  //     staking_tokens: [
  //       {
  //         denom: "uebl",
  //       },
  //     ],
  //   },
  //   codebase: {
  //     git_repo: "https://secp256k1.net/8ball.git",
  //     recommended_version: "v1",
  //     compatible_versions: ["v1"],
  //     cosmos_sdk_version: "0.46.7",
  //     cosmwasm_enabled: true,
  //     binaries: {
  //       "linux/amd64": "https://8ball.info/8ball.tar.gz",
  //     },
  //     genesis: {
  //       genesis_url: "https://8ball.info/8ball-genesis.json",
  //     },
  //     versions: [
  //       {
  //         name: "v1",
  //         recommended_version: "v1",
  //         compatible_versions: ["v1"],
  //         cosmos_sdk_version: "0.46.7",
  //         cosmwasm_enabled: true,
  //         binaries: {
  //           "linux/amd64": "https://8ball.info/8ball.tar.gz",
  //         },
  //       },
  //     ],
  //   },
  //   logo_URIs: {
  //     png: "https://raw.githubusercontent.com/cosmos/chain-registry/master/8ball/images/8ball.png",
  //     svg: "https://raw.githubusercontent.com/cosmos/chain-registry/master/8ball/images/8ball.svg",
  //   },
  //   peers: {
  //     seeds: [],
  //     persistent_peers: [
  //       {
  //         id: "fca96d0a1d7357afb226a49c4c7d9126118c37e9",
  //         address: "one.8ball.info:26656",
  //         provider: "8ball",
  //       },
  //       {
  //         id: "aa918e17c8066cd3b031f490f0019c1a95afe7e3",
  //         address: "two.8ball.info:26656",
  //         provider: "8ball",
  //       },
  //       {
  //         id: "ce168b8022e525650011352175fa020ce75edcfa",
  //         address: "45.141.122.178:34656",
  //         provider: "genznodes",
  //       },
  //       {
  //         id: "49778546e7511a1cd6dde65805cd70547c75ce2b",
  //         address: "rpc.8ball.nodexcapital.com:11056",
  //         provider: "NodeX Validator",
  //       },
  //     ],
  //   },
  //   apis: {
  //     rpc: [
  //       {
  //         address: "https://rpc.8ball.info/",
  //         provider: "8ball",
  //       },
  //       {
  //         address: "https://rpc.8ball.nodestake.top",
  //         provider: "NodeStake",
  //       },
  //       {
  //         address: "https://8ball-rpc.genznodes.dev/",
  //         provider: "genznodes",
  //       },
  //       {
  //         address: "https://rpc-8ball.comunitynode.my.id",
  //         provider: "ComunityNode",
  //       },
  //       {
  //         address: "https://rpc-8ball.nodine.id",
  //         provider: "Nodine.ID",
  //       },
  //       {
  //         address: "https://rpc.8ball.nodexcapital.com",
  //         provider: "NodeX Validator",
  //       },
  //     ],
  //     rest: [
  //       {
  //         address: "https://rest.8ball.info",
  //         provider: "8ball",
  //       },
  //       {
  //         address: "https://api.8ball.nodestake.top",
  //         provider: "NodeStake",
  //       },
  //       {
  //         address: "https://8ball-api.genznodes.dev/",
  //         provider: "genznodes",
  //       },
  //       {
  //         address: "https://api-8ball.comunitynode.my.id",
  //         provider: "ComunityNode",
  //       },
  //       {
  //         address: "https://api-8ball.nodine.id/",
  //         provider: "Nodine.ID",
  //       },
  //       {
  //         address: "https://rest.8ball.nodexcapital.com",
  //         provider: "NodeX Validator",
  //       },
  //     ],
  //     grpc: [
  //       {
  //         address: "grpc.8ball.nodestake.top:443",
  //         provider: "NodeStake",
  //       },
  //       {
  //         address: "8ball-grpc.genznodes.dev:31090",
  //         provider: "genznodes",
  //       },
  //       {
  //         address: "https://grpc.8ball.nodexcapital.com:443",
  //         provider: "NodeX Validator",
  //       },
  //     ],
  //   },
  //   explorers: [
  //     {
  //       url: "https://explorer.8ball.info/",
  //       tx_page: "https://explorer.8ball.info/8ball/tx/${txHash}",
  //     },
  //     {
  //       kind: "ping.pub",
  //       url: "https://ping.pub/8ball",
  //       tx_page: "https://ping.pub/8ball/tx/${txHash}",
  //     },
  //     {
  //       kind: "NodeStake Explorer",
  //       url: "https://explorer.nodestake.top/8ball/",
  //       tx_page: "https://explorer.nodestake.top/8ball/tx/${txHash}",
  //     },
  //     {
  //       kind: "TC Network",
  //       url: "https://explorer.tcnetwork.io/8ball",
  //       tx_page: "https://explorer.tcnetwork.io/8ball/transaction/${txHash}",
  //     },
  //     {
  //       kind: "TC Network",
  //       url: "https://explorer.co.id/8ball",
  //       tx_page: "https://explorer.co.id/8ball/tx/${txHash}",
  //     },
  //     {
  //       kind: "NODEXPLORER",
  //       url: "https://explorer.nodexcapital.com/8ball",
  //       tx_page: "https://explorer.nodexcapital.com/8ball/tx/${txHash}",
  //     },
  //   ],
  // },
  {
    $schema: "../chain.schema.json",
    chain_name: "osmo-test-5",
    status: "live",
    network_type: "testnet",
    pretty_name: "Osmosis Testnet",
    chain_id: "osmo-test-5",
    bech32_prefix: "osmo-test-5",
    daemon_name: "osmo-test-5",
    slip44: 118,
    fees: {
      fee_tokens: [
        {
          denom: "OSMO",
          fixed_min_gas_price: 0,
          low_gas_price: 0,
          average_gas_price: 0.025,
          high_gas_price: 0.04,
        },
      ],
    },
    staking: {
      staking_tokens: [
        {
          denom: "OSMO",
          minimal_denom: "uosmo",
          decimals: 6,
          gecko_id: "osmosis",
        },
      ],
    },
    apis: {
      rpc: [
        {
          address: "https://rpc.osmo-test-5.dev.quicksilver.zone",
          provider: "osmo",
        },
      ],
      rest: [
        {
          address: "https://lcd.osmo-test-5.dev.quicksilver.zone",
          provider: "osmo",
        },
      ],
      grpc: [],
    },
    codebase: {
      git_repo: "https://secp256k1.net/8ball.git",
      recommended_version: "v1",
      compatible_versions: ["v1"],
      cosmos_sdk_version: "0.46.7",
      cosmwasm_enabled: true,
      binaries: {
        "linux/amd64": "https://8ball.info/8ball.tar.gz",
      },
      genesis: {
        genesis_url: "https://8ball.info/8ball-genesis.json",
      },
      versions: [
        {
          name: "v1",
          recommended_version: "v1",
          compatible_versions: ["v1"],
          cosmos_sdk_version: "0.46.7",
          cosmwasm_enabled: true,
          binaries: {
            "linux/amd64": "https://8ball.info/8ball.tar.gz",
          },
        },
      ],
    },
    logo_URIs: {
      png: "https://raw.githubusercontent.com/cosmos/chain-registry/master/8ball/images/8ball.png",
      svg: "https://raw.githubusercontent.com/cosmos/chain-registry/master/8ball/images/8ball.svg",
    },
    peers: {
      seeds: [],
      persistent_peers: [
        {
          id: "fca96d0a1d7357afb226a49c4c7d9126118c37e9",
          address: "one.8ball.info:26656",
          provider: "8ball",
        },
        {
          id: "aa918e17c8066cd3b031f490f0019c1a95afe7e3",
          address: "two.8ball.info:26656",
          provider: "8ball",
        },
        {
          id: "ce168b8022e525650011352175fa020ce75edcfa",
          address: "45.141.122.178:34656",
          provider: "genznodes",
        },
        {
          id: "49778546e7511a1cd6dde65805cd70547c75ce2b",
          address: "rpc.8ball.nodexcapital.com:11056",
          provider: "NodeX Validator",
        },
      ],
    },
    explorers: [
      {
        url: "https://explorer.8ball.info/",
        tx_page: "https://explorer.8ball.info/8ball/tx/${txHash}",
      },
      {
        kind: "ping.pub",
        url: "https://ping.pub/8ball",
        tx_page: "https://ping.pub/8ball/tx/${txHash}",
      },
      {
        kind: "NodeStake Explorer",
        url: "https://explorer.nodestake.top/8ball/",
        tx_page: "https://explorer.nodestake.top/8ball/tx/${txHash}",
      },
      {
        kind: "TC Network",
        url: "https://explorer.tcnetwork.io/8ball",
        tx_page: "https://explorer.tcnetwork.io/8ball/transaction/${txHash}",
      },
      {
        kind: "TC Network",
        url: "https://explorer.co.id/8ball",
        tx_page: "https://explorer.co.id/8ball/tx/${txHash}",
      },
      {
        kind: "NODEXPLORER",
        url: "https://explorer.nodexcapital.com/8ball",
        tx_page: "https://explorer.nodexcapital.com/8ball/tx/${txHash}",
      },
    ],
  },
  {
    $schema: "../chain.schema.json",
    chain_name: "regen-redwood-1",
    status: "live",
    network_type: "testnet",
    pretty_name: "Regen Testnet",
    chain_id: "regen-redwood-1",
    bech32_prefix: "regen-redwood-1",
    daemon_name: "regen-redwood-1",
    slip44: 118,
    fees: {
      fee_tokens: [
        {
          denom: "REGEN",
          fixed_min_gas_price: 0,
          low_gas_price: 0,
          average_gas_price: 0.025,
          high_gas_price: 0.04,
        },
      ],
    },
    staking: {
      staking_tokens: [
        {
          denom: "REGEN",
          minimal_denom: "uregen",
          decimals: 6,
          gecko_id: "regen",
        },
      ],
    },
    apis: {
      rpc: [
        {
          address: "https://rpc.regen-redwood-1.dev.quicksilver.zone",
          provider: "regen",
        },
      ],
      rest: [
        {
          address: "https://lcd.regen-redwood-1.dev.quicksilver.zone",
          provider: "regen",
        },
      ],
    },
    codebase: {
      git_repo: "https://secp256k1.net/8ball.git",
      recommended_version: "v1",
      compatible_versions: ["v1"],
      cosmos_sdk_version: "0.46.7",
      cosmwasm_enabled: true,
      binaries: {
        "linux/amd64": "https://8ball.info/8ball.tar.gz",
      },
      genesis: {
        genesis_url: "https://8ball.info/8ball-genesis.json",
      },
      versions: [
        {
          name: "v1",
          recommended_version: "v1",
          compatible_versions: ["v1"],
          cosmos_sdk_version: "0.46.7",
          cosmwasm_enabled: true,
          binaries: {
            "linux/amd64": "https://8ball.info/8ball.tar.gz",
          },
        },
      ],
    },
    logo_URIs: {
      png: "https://raw.githubusercontent.com/cosmos/chain-registry/master/8ball/images/8ball.png",
      svg: "https://raw.githubusercontent.com/cosmos/chain-registry/master/8ball/images/8ball.svg",
    },
    peers: {
      seeds: [],
      persistent_peers: [
        {
          id: "fca96d0a1d7357afb226a49c4c7d9126118c37e9",
          address: "one.8ball.info:26656",
          provider: "8ball",
        },
        {
          id: "aa918e17c8066cd3b031f490f0019c1a95afe7e3",
          address: "two.8ball.info:26656",
          provider: "8ball",
        },
        {
          id: "ce168b8022e525650011352175fa020ce75edcfa",
          address: "45.141.122.178:34656",
          provider: "genznodes",
        },
        {
          id: "49778546e7511a1cd6dde65805cd70547c75ce2b",
          address: "rpc.8ball.nodexcapital.com:11056",
          provider: "NodeX Validator",
        },
      ],
    },
    explorers: [
      {
        url: "https://explorer.8ball.info/",
        tx_page: "https://explorer.8ball.info/8ball/tx/${txHash}",
      },
      {
        kind: "ping.pub",
        url: "https://ping.pub/8ball",
        tx_page: "https://ping.pub/8ball/tx/${txHash}",
      },
      {
        kind: "NodeStake Explorer",
        url: "https://explorer.nodestake.top/8ball/",
        tx_page: "https://explorer.nodestake.top/8ball/tx/${txHash}",
      },
      {
        kind: "TC Network",
        url: "https://explorer.tcnetwork.io/8ball",
        tx_page: "https://explorer.tcnetwork.io/8ball/transaction/${txHash}",
      },
      {
        kind: "TC Network",
        url: "https://explorer.co.id/8ball",
        tx_page: "https://explorer.co.id/8ball/tx/${txHash}",
      },
      {
        kind: "NODEXPLORER",
        url: "https://explorer.nodexcapital.com/8ball",
        tx_page: "https://explorer.nodexcapital.com/8ball/tx/${txHash}",
      },
    ],
  },
  {
    $schema: "../chain.schema.json",
    chain_name: "elgafar-1",
    status: "live",
    network_type: "testnet",
    pretty_name: "Stargaze Testnet",
    chain_id: "elgafar-1",
    bech32_prefix: "elgafar-1",
    daemon_name: "elgafar-1",
    slip44: 118,
    fees: {
      fee_tokens: [
        {
          denom: "STARS",
          fixed_min_gas_price: 0,
          low_gas_price: 0,
          average_gas_price: 0.025,
          high_gas_price: 0.04,
        },
      ],
    },
    staking: {
      staking_tokens: [
        {
          denom: "STARS",
          minimal_denom: "ustars",
          decimals: 6,
          gecko_id: "stargaze",
        },
      ],
    },
    apis: {
      rpc: [
        {
          address: "https://rpc.elgafar-1.dev.quicksilver.zone",
          provider: "elgafar-1",
        },
      ],
      rest: [
        {
          address: "https://lcd.elgafar-1.dev.quicksilver.zone",
          provider: "elgafar-1",
        },
      ],
      grpc: [],
    },
    codebase: {
      git_repo: "https://secp256k1.net/8ball.git",
      recommended_version: "v1",
      compatible_versions: ["v1"],
      cosmos_sdk_version: "0.46.7",
      cosmwasm_enabled: true,
      binaries: {
        "linux/amd64": "https://8ball.info/8ball.tar.gz",
      },
      genesis: {
        genesis_url: "https://8ball.info/8ball-genesis.json",
      },
      versions: [
        {
          name: "v1",
          recommended_version: "v1",
          compatible_versions: ["v1"],
          cosmos_sdk_version: "0.46.7",
          cosmwasm_enabled: true,
          binaries: {
            "linux/amd64": "https://8ball.info/8ball.tar.gz",
          },
        },
      ],
    },
    logo_URIs: {
      png: "https://raw.githubusercontent.com/cosmos/chain-registry/master/8ball/images/8ball.png",
      svg: "https://raw.githubusercontent.com/cosmos/chain-registry/master/8ball/images/8ball.svg",
    },
    peers: {
      seeds: [],
      persistent_peers: [
        {
          id: "fca96d0a1d7357afb226a49c4c7d9126118c37e9",
          address: "one.8ball.info:26656",
          provider: "8ball",
        },
        {
          id: "aa918e17c8066cd3b031f490f0019c1a95afe7e3",
          address: "two.8ball.info:26656",
          provider: "8ball",
        },
        {
          id: "ce168b8022e525650011352175fa020ce75edcfa",
          address: "45.141.122.178:34656",
          provider: "genznodes",
        },
        {
          id: "49778546e7511a1cd6dde65805cd70547c75ce2b",
          address: "rpc.8ball.nodexcapital.com:11056",
          provider: "NodeX Validator",
        },
      ],
    },
    explorers: [
      {
        url: "https://explorer.8ball.info/",
        tx_page: "https://explorer.8ball.info/8ball/tx/${txHash}",
      },
      {
        kind: "ping.pub",
        url: "https://ping.pub/8ball",
        tx_page: "https://ping.pub/8ball/tx/${txHash}",
      },
      {
        kind: "NodeStake Explorer",
        url: "https://explorer.nodestake.top/8ball/",
        tx_page: "https://explorer.nodestake.top/8ball/tx/${txHash}",
      },
      {
        kind: "TC Network",
        url: "https://explorer.tcnetwork.io/8ball",
        tx_page: "https://explorer.tcnetwork.io/8ball/transaction/${txHash}",
      },
      {
        kind: "TC Network",
        url: "https://explorer.co.id/8ball",
        tx_page: "https://explorer.co.id/8ball/tx/${txHash}",
      },
      {
        kind: "NODEXPLORER",
        url: "https://explorer.nodexcapital.com/8ball",
        tx_page: "https://explorer.nodexcapital.com/8ball/tx/${txHash}",
      },
    ],
  },
  {
    $schema: "../chain.schema.json",
    chain_name: "theta-testnet-001",
    status: "live",
    network_type: "testnet",
    pretty_name: "Cosmos Hub Test",
    chain_id: "theta-testnet-001",
    bech32_prefix: "theta-testnet-001",
    daemon_name: "theta-testnet-001",
    slip44: 118,
    fees: {
      fee_tokens: [
        {
          denom: "ATOM",
          fixed_min_gas_price: 0,
          low_gas_price: 0,
          average_gas_price: 0.025,
          high_gas_price: 0.04,
        },
      ],
    },
    staking: {
      staking_tokens: [
        {
          denom: "ATOM",
          minimal_denom: "uatom",
          decimals: 6,
          gecko_id: "cosmos",
        },
      ],
    },
    apis: {
      rpc: [
        {
          address: "https://rpc.theta-testnet-001.dev.quicksilver.zone",
          provider: "theta-testnet-001",
        },
      ],
      rest: [
        {
          address: "https://lcd.theta-testnet-001.dev.quicksilver.zone",
          provider: "theta-testnet-001",
        },
      ],
      grpc: [],
    },
    codebase: {
      git_repo: "https://secp256k1.net/8ball.git",
      recommended_version: "v1",
      compatible_versions: ["v1"],
      cosmos_sdk_version: "0.46.7",
      cosmwasm_enabled: true,
      binaries: {
        "linux/amd64": "https://8ball.info/8ball.tar.gz",
      },
      genesis: {
        genesis_url: "https://8ball.info/8ball-genesis.json",
      },
      versions: [
        {
          name: "v1",
          recommended_version: "v1",
          compatible_versions: ["v1"],
          cosmos_sdk_version: "0.46.7",
          cosmwasm_enabled: true,
          binaries: {
            "linux/amd64": "https://8ball.info/8ball.tar.gz",
          },
        },
      ],
    },
    logo_URIs: {
      png: "https://raw.githubusercontent.com/cosmos/chain-registry/master/8ball/images/8ball.png",
      svg: "https://raw.githubusercontent.com/cosmos/chain-registry/master/8ball/images/8ball.svg",
    },
    peers: {
      seeds: [],
      persistent_peers: [
        {
          id: "fca96d0a1d7357afb226a49c4c7d9126118c37e9",
          address: "one.8ball.info:26656",
          provider: "8ball",
        },
        {
          id: "aa918e17c8066cd3b031f490f0019c1a95afe7e3",
          address: "two.8ball.info:26656",
          provider: "8ball",
        },
        {
          id: "ce168b8022e525650011352175fa020ce75edcfa",
          address: "45.141.122.178:34656",
          provider: "genznodes",
        },
        {
          id: "49778546e7511a1cd6dde65805cd70547c75ce2b",
          address: "rpc.8ball.nodexcapital.com:11056",
          provider: "NodeX Validator",
        },
      ],
    },
    explorers: [
      {
        url: "https://explorer.8ball.info/",
        tx_page: "https://explorer.8ball.info/8ball/tx/${txHash}",
      },
      {
        kind: "ping.pub",
        url: "https://ping.pub/8ball",
        tx_page: "https://ping.pub/8ball/tx/${txHash}",
      },
      {
        kind: "NodeStake Explorer",
        url: "https://explorer.nodestake.top/8ball/",
        tx_page: "https://explorer.nodestake.top/8ball/tx/${txHash}",
      },
      {
        kind: "TC Network",
        url: "https://explorer.tcnetwork.io/8ball",
        tx_page: "https://explorer.tcnetwork.io/8ball/transaction/${txHash}",
      },
      {
        kind: "TC Network",
        url: "https://explorer.co.id/8ball",
        tx_page: "https://explorer.co.id/8ball/tx/${txHash}",
      },
      {
        kind: "NODEXPLORER",
        url: "https://explorer.nodexcapital.com/8ball",
        tx_page: "https://explorer.nodexcapital.com/8ball/tx/${txHash}",
      },
    ],
  },
];
