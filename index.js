module.exports = {
  contractName: "WKLAY",
  abi: [
    {
      constant: true,
      inputs: [],
      name: "name",
      outputs: [
        {
          name: "",
          type: "string"
        }
      ],
      payable: false,
      stateMutability: "view",
      type: "function"
    },
    {
      constant: true,
      inputs: [],
      name: "decimals",
      outputs: [
        {
          name: "",
          type: "uint8"
        }
      ],
      payable: false,
      stateMutability: "view",
      type: "function"
    },
    {
      constant: true,
      inputs: [
        {
          name: "",
          type: "address"
        }
      ],
      name: "balanceOf",
      outputs: [
        {
          name: "",
          type: "uint256"
        }
      ],
      payable: false,
      stateMutability: "view",
      type: "function"
    },
    {
      constant: true,
      inputs: [],
      name: "symbol",
      outputs: [
        {
          name: "",
          type: "string"
        }
      ],
      payable: false,
      stateMutability: "view",
      type: "function"
    },
    {
      constant: true,
      inputs: [
        {
          name: "",
          type: "address"
        },
        {
          name: "",
          type: "address"
        }
      ],
      name: "allowance",
      outputs: [
        {
          name: "",
          type: "uint256"
        }
      ],
      payable: false,
      stateMutability: "view",
      type: "function"
    },
    {
      payable: true,
      stateMutability: "payable",
      type: "fallback"
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          name: "src",
          type: "address"
        },
        {
          indexed: true,
          name: "guy",
          type: "address"
        },
        {
          indexed: false,
          name: "wad",
          type: "uint256"
        }
      ],
      name: "Approval",
      type: "event"
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          name: "src",
          type: "address"
        },
        {
          indexed: true,
          name: "dst",
          type: "address"
        },
        {
          indexed: false,
          name: "wad",
          type: "uint256"
        }
      ],
      name: "Transfer",
      type: "event"
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          name: "dst",
          type: "address"
        },
        {
          indexed: false,
          name: "wad",
          type: "uint256"
        }
      ],
      name: "Deposit",
      type: "event"
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          name: "src",
          type: "address"
        },
        {
          indexed: false,
          name: "wad",
          type: "uint256"
        }
      ],
      name: "Withdrawal",
      type: "event"
    },
    {
      constant: false,
      inputs: [],
      name: "deposit",
      outputs: [],
      payable: true,
      stateMutability: "payable",
      type: "function"
    },
    {
      constant: false,
      inputs: [
        {
          name: "wad",
          type: "uint256"
        }
      ],
      name: "withdraw",
      outputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      constant: true,
      inputs: [],
      name: "totalSupply",
      outputs: [
        {
          name: "",
          type: "uint256"
        }
      ],
      payable: false,
      stateMutability: "view",
      type: "function"
    },
    {
      constant: false,
      inputs: [
        {
          name: "guy",
          type: "address"
        },
        {
          name: "wad",
          type: "uint256"
        }
      ],
      name: "approve",
      outputs: [
        {
          name: "",
          type: "bool"
        }
      ],
      payable: false,
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      constant: false,
      inputs: [
        {
          name: "dst",
          type: "address"
        },
        {
          name: "wad",
          type: "uint256"
        }
      ],
      name: "transfer",
      outputs: [
        {
          name: "",
          type: "bool"
        }
      ],
      payable: false,
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      constant: false,
      inputs: [
        {
          name: "src",
          type: "address"
        },
        {
          name: "dst",
          type: "address"
        },
        {
          name: "wad",
          type: "uint256"
        }
      ],
      name: "transferFrom",
      outputs: [
        {
          name: "",
          type: "bool"
        }
      ],
      payable: false,
      stateMutability: "nonpayable",
      type: "function"
    }
  ],
  networks: {
    "1001": {
      events: {},
      links: {},
      address: "0x043c471bEe060e00A56CcD02c0Ca286808a5A436",
      transactionHash:
        "0x50a22b6d7e36986ca5ed70d4744d8fd505a345403ce11701f69487c40d0a1060"
    },
    "8217": {
      events: {},
      links: {},
      address: "0x19Aac5f612f524B754CA7e7c41cbFa2E981A4432",
      transactionHash:
        "0x11e2e1fb5e73ff95618c4a828b8c3673a63cbbfe7693835a1ef3dcbda470992e"
    }
  },
  schemaVersion: "3.4.10",
  updatedAt: "2022-10-25T14:11:45.837Z"
};
