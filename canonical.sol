// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

// ✅ Import OpenZeppelin Contracts (Remix has these by default)
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract MonkeyBusiness is ERC20, Ownable {
    uint256 public transferFeeBps = 200; // 2% fee (200 basis points)
    address public feeCollector;

    constructor(address _feeCollector) ERC20("MonkeyBusiness", "MNKY") {
        require(_feeCollector != address(0), "Invalid fee collector");
        feeCollector = _feeCollector;

        // Mint 1,000,000 tokens to the contract owner
        _mint(msg.sender, 1_000_000 * 10 ** decimals());
    }

    // 🔧 Only owner can update the fee (max 10%)
    function setFee(uint256 _bps) external onlyOwner {
        require(_bps <= 1000, "Fee too high");
        transferFeeBps = _bps;
    }

    // 🔧 Only owner can update the fee collector address
    function setFeeCollector(address _collector) external onlyOwner {
        require(_collector != address(0), "Zero address not allowed");
        feeCollector =