/* global artifacts */

import { rootRPC, childRPC } from './constants'
import Web3 from 'web3'

const MockCheckpointManager = artifacts.require('MockCheckpointManager')
const RootChainManager = artifacts.require('RootChainManager')
const RootChainManagerProxy = artifacts.require('RootChainManagerProxy')
const DummyStateSender = artifacts.require('DummyStateSender')
const ERC20Predicate = artifacts.require('ERC20Predicate')
const ERC20PredicateProxy = artifacts.require('ERC20PredicateProxy')
const ERC721Predicate = artifacts.require('ERC721Predicate')
const ERC721PredicateProxy = artifacts.require('ERC721PredicateProxy')
const ERC1155Predicate = artifacts.require('ERC1155Predicate')
const ERC1155PredicateProxy = artifacts.require('ERC1155PredicateProxy')
const EtherPredicate = artifacts.require('EtherPredicate')
const EtherPredicateProxy = artifacts.require('EtherPredicateProxy')
const DummyERC20 = artifacts.require('DummyERC20')
const DummyERC721 = artifacts.require('DummyERC721')
const DummyERC1155 = artifacts.require('DummyERC1155')
const ChildChainManager = artifacts.require('ChildChainManager')
const ChildChainManagerProxy = artifacts.require('ChildChainManagerProxy')
const ChildERC20 = artifacts.require('ChildERC20')
const ChildERC721 = artifacts.require('ChildERC721')
const ChildERC1155 = artifacts.require('ChildERC1155')
const MaticWETH = artifacts.require('MaticWETH')

const rootProvider = new Web3.providers.HttpProvider(rootRPC)
const childProvider = new Web3.providers.HttpProvider(childRPC)

export const rootWeb3 = new Web3(rootProvider)
rootWeb3.setNetworkType = () => {} // Truffle work around for Web3Shim
export const childWeb3 = new Web3(childProvider)
childWeb3.setNetworkType = () => {} // Truffle work around for Web3Shim

// set web3 and provider
const setWeb3 = (contractObj, w3) => {
  contractObj.web3 = w3
  contractObj.setProvider(w3.currentProvider)
}

// contracts on root chain
setWeb3(MockCheckpointManager, rootWeb3)
setWeb3(RootChainManager, rootWeb3)
setWeb3(RootChainManagerProxy, rootWeb3)
setWeb3(DummyStateSender, rootWeb3)
setWeb3(ERC20Predicate, rootWeb3)
setWeb3(ERC721Predicate, rootWeb3)
setWeb3(ERC1155Predicate, rootWeb3)
setWeb3(EtherPredicate, rootWeb3)
setWeb3(DummyERC20, rootWeb3)
setWeb3(DummyERC721, rootWeb3)
setWeb3(DummyERC1155, rootWeb3)

// contracts on child chain
setWeb3(ChildChainManager, childWeb3)
setWeb3(ChildChainManagerProxy, childWeb3)
setWeb3(ChildERC20, childWeb3)
setWeb3(ChildERC721, childWeb3)
setWeb3(ChildERC1155, childWeb3)
setWeb3(MaticWETH, childWeb3)

export default {
  MockCheckpointManager,
  RootChainManager,
  RootChainManagerProxy,
  DummyStateSender,
  ERC20Predicate,
  ERC20PredicateProxy,
  ERC721Predicate,
  ERC721PredicateProxy,
  ERC1155Predicate,
  ERC1155PredicateProxy,
  EtherPredicate,
  EtherPredicateProxy,
  DummyERC20,
  DummyERC721,
  DummyERC1155,
  ChildChainManager,
  ChildChainManagerProxy,
  ChildERC20,
  ChildERC721,
  ChildERC1155,
  MaticWETH
}
