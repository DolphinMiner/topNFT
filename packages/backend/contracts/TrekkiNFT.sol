// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Strings.sol";
import "@openzeppelin/contracts/utils/cryptography/MerkleProof.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";


contract TrekkiNFT is Ownable, ERC721Enumerable {
    using Strings for uint256;
    using SafeMath for uint256;

    // airdrop的merkleTree的根hash
    bytes32 public airdropRootHash =
    0x6605f8e6f523fc8991d078dec5279f9e0681539c5b3e4d182a060272f60e7ceb;

    // freeMint的merkleTree的根hash
    bytes32 public freeMintRootHash =
    0x6605f8e6f523fc8991d078dec5279f9e0681539c5b3e4d182a060272f60e7ceb;

    // presaleMint一阶段的merkleTree的根hash
    bytes32 public presaleMintOneRootHash =
    0x6605f8e6f523fc8991d078dec5279f9e0681539c5b3e4d182a060272f60e7ceb;

    // presaleMint二阶段的merkleTree的根hash
    bytes32 public presaleMintTwoRootHash =
    0x6605f8e6f523fc8991d078dec5279f9e0681539c5b3e4d182a060272f60e7ceb;

    // presaleMint一阶段的 mint price
    uint256 public presaleMintOnePrice = 40000000000000000;  //0.04 ETH

    // presaleMint二阶段的 mint price
    uint256 public presaleMintTwoPrice = 60000000000000000;  //0.06 ETH

    // 公售时的 mint price
    uint256 public publicMintPrice = 80000000000000000;  //0.08 ETH

    // freeMint阶段,每个白单钱包最多mint的个数
    uint64 public freeMintLimitCount = 1;

    // presaleMintOneLimitCount阶段,每个白单钱包最多mint的个数
    uint64 public presaleMintOneLimitCount = 5;

    // presaleMintTwoLimitCount阶段,每个白单钱包最多mint的个数
    uint64 public presaleMintTwoLimitCount = 5;


    // 合约发行的nft总数量个
    uint256 public constant MAX_SUPPLY = 10000;

    // nft mint开关
    bool public mintIsActive = false;

    // 盲盒开关
    bool public revealedState = false;

    // 每个账户最多拥有nft的数量
    uint256 public maxBalance = 20;

    // 售卖阶段 0是空投阶段 1是freeMint 2是presaleOne 3是presaleTwo 4是publicMint
    uint256 public saleStage = 0;

    // 每批次销售的nft个数
    uint256 public batchNumber = 0;

    // 元数据的baseURI
    string public baseURI =
    "ipfs://QmTKySihsR9BRUzsfWXKt3LeMCb1BSxpLQjndJLhiEe8pk";

    // 元数据的扩展类型
    string public baseExtension = ".json";

    // 黑名单 true代表为禁止
    mapping(address => bool) public blockedMarketplaces;

    // nft开奖次数 tokenId => cnt (二期使用)
    mapping(uint256 => uint64) public lotteryCount;

    // nft是否被质押 true 表示nft被质押,无法交易 (二期使用)
    mapping(uint256 => bool) public stakingStatus;

    // 记录白单用户对应的mint次数——freeMint
    mapping(address => uint256) public freeMintCount;

    // 记录白单用户对应的mint次数——presaleOneMint
    mapping(address => uint256) public presaleMintOneCount;

    // 记录白单用户对应的mint次数——presaleTwoMint
    mapping(address => uint256) public presaleMintTwoCount;

    // 错误映射表
    mapping(uint8 => string) errorMessages;


    // 合约构造函数
    constructor() ERC721("TrekkiNFT", "Trekki") {
        // 不在白名单中
        errorMessages[1] = "Error 01: Not in whitelist.";
        // 超过nft的最大供应量 10000
        errorMessages[2] = "Error 02: Exceed max supply.";
        // 超过每个钱包可以拥有nft的最大数量
        errorMessages[3] = "Error 03: Exceed maximum ownership.";
        // 售卖未开始
        errorMessages[4] = "Error 04: The activity has not started yet.";
        // 不在对应售卖阶段
        errorMessages[5] = "Error 05: Not in sale stage.";
        // 超过当前阶段最大可mint个数
        errorMessages[6] = "Error 06: Exceed current batch mint number limit.";
        // 当前批次已卖完
        errorMessages[7] = "Error 07: Current batch sale out.";
        // 超过当前批次剩余数量
        errorMessages[8] = "Error 08: Current batch is deficient.";
        // 携带金额不足
        errorMessages[9] = "Error 09: Not enough ether sent";
        // token id 不存在
        errorMessages[10] = "Error 10: URI query for nonexistent token";
        // nft处于质押中
        errorMessages[11] = "Error 11: Nft is staking";
        // 禁止的交易平台
        errorMessages[12] = "Error 12: Invalid marketplace, not allowed";
    }

    /**
     * @dev 根据售卖状态，判断合约调用账户是否在白名单airdropRootHash中
     * @param user: 钱包地址
     * @param merkleProof: 合约调用账户的 merkleProof
     * @return bool: 是否是白名单用户
     */
    function isValidUser(address user, bytes32[] calldata merkleProof)
    public
    view
    returns (bool)
    {
        // 生成当前要校验节点的hash值
        bytes32 leafNode = keccak256(abi.encodePacked(user));

        // 根据售卖状态判别
        bytes32 rootHash = airdropRootHash;

        if (saleStage == 1) {
            rootHash = freeMintRootHash;
        } else if (saleStage == 2) {
            rootHash = presaleMintOneRootHash;
        } else if (saleStage == 3) {
            rootHash = presaleMintTwoRootHash;
        }
        // 校验是否为白名单用户
        return MerkleProof.verify(merkleProof, rootHash, leafNode);
    }


    /**
     * @dev airDrop 空投指定数量的nft到指定钱包
     * @param to: 空投的钱包地址
     * @param merkleProof: recipient merkleProof
     * @param numberOfTokens: 空投nft的数量
     */
    function airDrop(address to, bytes32[] calldata merkleProof, uint256 numberOfTokens) public onlyOwner
    {

        // 校验to是否在空投的白名单中
        require(
            isValidUser(to, merkleProof) == true,
            errorMessages[1]
        );

        // 校验当前合约账户中的nft数量 + 铸造的数量 <= nft的最大供应数量
        require(
            totalSupply() + numberOfTokens <= MAX_SUPPLY,
            errorMessages[2]
        );

        // 校验to所拥有的的nft数量需要小于每个账户nft的限制个数
        require(
            balanceOf(to) + numberOfTokens <= maxBalance,
            errorMessages[3]
        );

        for (uint256 i = 0; i < numberOfTokens; i++) {
            // 调用ERC721.sol的_safeMint方法 为msg.sender账户分配这个tokenId
            _safeMint(to, totalSupply());
        }

    }


    /**
     * @dev 白名单用户免费mint Trekki nft (单次只能mint 1 个)
     * @param merkleProof: 合约调用账户的 merkleProof
     */
    function freeMint(bytes32[] calldata merkleProof) public payable
    {

        // 校验nft是否开始售卖
        require(mintIsActive, errorMessages[4]);

        // 校验售卖阶段
        require(saleStage == 1, errorMessages[5]);

        // 校验msg.sender是否是白名单用户
        require(
            isValidUser(msg.sender, merkleProof) == true,
            errorMessages[1]
        );

        // 校验当前合约账户中已mint nft数量 + 铸造的数量 <= nft的最大供应数量
        require(
            totalSupply() + 1 <= MAX_SUPPLY,
            errorMessages[2]
        );

        // 校验msg.sender所拥有的nft数量需要小于每个账户nft的限制个数
        require(
            balanceOf(msg.sender) + 1 <= maxBalance,
            errorMessages[3]
        );

        // 校验白单用户是否超过当前阶段最大mint个数
        uint256 haveMinted = freeMintCount[msg.sender];
        require(
            haveMinted < freeMintLimitCount,
            errorMessages[6]
        );
        // 更新用户已mint个数
        freeMintCount[msg.sender] = haveMinted + 1;

        // 调用ERC721.sol的_safeMint方法 为recipient账户分配这个tokenId
        _safeMint(msg.sender, totalSupply());
    }

    /**
     * @dev 白名单销售阶段一 (接收方为合约的直接调用账户msg.sender ,proof也是对应该账户的)
     * @param numberOfTokens: mint nft 的数量
     */
    function presaleMintOne(uint256 numberOfTokens, bytes32[] calldata merkleProof) public payable {

        // 是否可售
        require(mintIsActive == true, errorMessages[4]);

        // 校验售卖阶段
        require(saleStage == 2, errorMessages[5]);

        // 校验本批次是否售完
        require(batchNumber > 0, errorMessages[7]);

        // 校验本批次数量是否足够
        require(batchNumber - numberOfTokens >= 0, errorMessages[8]);

        // 校验msg.sender是否是白名单用户
        require(
            isValidUser(msg.sender, merkleProof) == true,
            errorMessages[1]
        );

        // 校验本次铸造的数量 * 铸造的价格 <= 本次交易附带的金额
        require(
            numberOfTokens.mul(presaleMintOnePrice) <= msg.value,
            errorMessages[9]
        );

        // 校验当前合约账户中的nft数量 + 铸造的数量 <= nft的最大供应数量
        require(
            totalSupply() + numberOfTokens <= MAX_SUPPLY,
            errorMessages[2]
        );

        // 校验msg.sender所拥有的nft数量需要小于每个账户nft的限制个数
        require(
            balanceOf(msg.sender) + numberOfTokens <= maxBalance,
            errorMessages[3]
        );

        // 校验白单用户是否超过当前阶段最大mint个数
        uint256 haveMinted = presaleMintOneCount[msg.sender];

        require(
            haveMinted + numberOfTokens < presaleMintOneLimitCount,
            errorMessages[6]
        );

        // 更新用户已mint个数
        presaleMintOneCount[msg.sender] = haveMinted + numberOfTokens;

        // 更新批次可售数量
        batchNumber = batchNumber - numberOfTokens;

        // 批量mint
        for (uint256 i = 0; i < numberOfTokens; i++) {
            // 调用ERC721.sol的_safeMint方法 为msg.sender账户分配这个tokenId
            _safeMint(msg.sender, totalSupply());
        }
    }


    /**
     * @dev 白名单销售阶段二 (接收方为合约的直接调用账户msg.sender ,proof也是对应该账户的)
     * @param numberOfTokens: mint nft 的数量
     */
    function presaleMintTwo(uint256 numberOfTokens, bytes32[] calldata merkleProof) public payable {
        // 是否可售
        require(mintIsActive == true, errorMessages[4]);

        // 校验售卖阶段
        require(saleStage == 3, errorMessages[5]);

        // 校验本批次是否售完
        require(batchNumber > 0, errorMessages[7]);

        // 校验本批次数量是否足够
        require(batchNumber - numberOfTokens >= 0, errorMessages[8]);

        // 校验msg.sender是否是白名单用户
        require(
            isValidUser(msg.sender, merkleProof) == true,
            errorMessages[1]
        );

        // 校验本次铸造的数量 * 铸造的价格 <= 本次交易附带的金额
        require(
            numberOfTokens.mul(presaleMintTwoPrice) <= msg.value,
            errorMessages[9]
        );

        // 校验当前合约账户中的nft数量 + 铸造的数量 <= nft的最大供应数量
        require(
            totalSupply() + numberOfTokens <= MAX_SUPPLY,
            errorMessages[2]
        );

        // 校验msg.sender所拥有的nft数量需要小于每个账户nft的限制个数
        require(
            balanceOf(msg.sender) + numberOfTokens <= maxBalance,
            errorMessages[3]
        );

        // 校验白单用户是否超过当前阶段最大mint个数
        uint256 haveMinted = presaleMintTwoCount[msg.sender];

        require(
            haveMinted + numberOfTokens < presaleMintTwoLimitCount,
            errorMessages[6]
        );

        // 更新用户已mint个数
        presaleMintTwoCount[msg.sender] = haveMinted + numberOfTokens;

        // 更新批次可售数量
        batchNumber = batchNumber - numberOfTokens;

        // 批量mint
        for (uint256 i = 0; i < numberOfTokens; i++) {
            // 调用ERC721.sol的_safeMint方法 为msg.sender账户分配这个tokenId
            _safeMint(msg.sender, totalSupply());
        }
    }



    /**
     * @dev 公售 (接收方为合约的直接调用账户)
     * @param numberOfTokens: mint nft 的数量
     */
    function publicMint(uint256 numberOfTokens) public payable {

        // 是否可售
        require(mintIsActive == true, errorMessages[4]);

        // 校验售卖阶段
        require(saleStage == 4, errorMessages[5]);


        // 校验本次铸造的数量 * 铸造的价格 <= 本次交易附带的金额
        require(
            numberOfTokens.mul(publicMintPrice) <= msg.value,
            errorMessages[9]
        );
        // 校验当前合约账户中的nft数量 + 铸造的数量 <= nft的最大供应数量
        require(
            totalSupply() + numberOfTokens <= MAX_SUPPLY,
            errorMessages[2]
        );

        // 校验msg.sender所拥有的的nft数量需要小于每个账户nft的限制个数
        require(
            numberOfTokens + balanceOf(msg.sender) <= maxBalance,
            errorMessages[3]
        );

        for (uint256 i = 0; i < numberOfTokens; i++) {
            // 调用ERC721.sol的_safeMint方法 为msg.sender账户分配这个tokenId
            _safeMint(msg.sender, totalSupply());
        }
    }

    /**
     * @dev 返回tokenId 对应的 tokenURI
     * @param tokenId : tokenId
     * @return string : tokenURI
     */
    function tokenURI(uint256 tokenId)
    public
    view
    virtual
    override
    returns (string memory)
    {
        // 校验tokenId存在
        require(
            _exists(tokenId),
            errorMessages[10]
        );

        // 获取baseURI
        string memory base = _baseURI();
        // 返回baseURI、tokenId 和 baseExtension 的拼接字符串
        return
        string(
            abi.encodePacked(base, "/", tokenId.toString(), baseExtension)
        );
    }

    /**
     * @dev 转移nft前加上质押状态判断
     */
    function _beforeTokenTransfer(
        address from,
        address to,
        uint256 tokenId
    ) internal virtual override {
        // 判断nft是否质押
        require(stakingStatus[tokenId] == false, errorMessages[11]);

        super._beforeTokenTransfer(from, to, tokenId);
    }


    /**
     * @dev 将合约账户中的以太币转到指定账户中
     * @param to : 接收的地址
     */
    function withdrawMoney(address to) public onlyOwner {
        payable(to).transfer(address(this).balance);
    }


    /**
     * @dev override approve
     */
    function approve(address to, uint256 tokenId) public virtual override {
        require(!blockedMarketplaces[to], errorMessages[12]);
        super.approve(to, tokenId);
    }

    /**
     * @dev override setApprovalForAll
     */
    function setApprovalForAll(address operator, bool approved) public virtual override {
        require(!blockedMarketplaces[operator], errorMessages[12]);
        super.setApprovalForAll(operator, approved);
    }

    /**
     * @dev 将指定地址加入或移除黑名单
     */
    function setBlockedMarketPlace(address marketplace, bool blocked) public onlyOwner {
        blockedMarketplaces[marketplace] = blocked;
    }

    /**
     * @dev 设置baseURI
     * @param _newBaseURI : baseURI
     */
    function setBaseURI(string memory _newBaseURI) public onlyOwner {
        baseURI = _newBaseURI;
    }

    /**
     * @dev 修改是否可mint状态
     */
    function flipMintActive() public onlyOwner {
        mintIsActive = !mintIsActive;
    }

    /**
     * @dev 设置元数据的扩展类型
     */
    function setBaseExtension(string memory _newBaseExtension) public onlyOwner
    {
        baseExtension = _newBaseExtension;
    }

    /**
     * @dev 每个账户最多拥有nft的数量
     */
    function setMaxBalance(uint256 _maxBalance) public onlyOwner {
        maxBalance = _maxBalance;
    }

    /**
     * @dev 设置freeMintRootHash
     */
    function setFreeMintRootHash(bytes32 _merkleRootHash) public onlyOwner {
        freeMintRootHash = _merkleRootHash;
    }

    /**
     * @dev 设置presaleMintOneRootHash
     */
    function setPresaleMintOneRootHash(bytes32 _merkleRootHash) public onlyOwner {
        presaleMintOneRootHash = _merkleRootHash;
    }

    /**
     * @dev 设置presaleMintTwoRootHash
     */
    function setPresaleMintTwoRootHash(bytes32 _merkleRootHash) public onlyOwner {
        presaleMintTwoRootHash = _merkleRootHash;
    }

    /**
    * @dev 设置airDropRootHash
     */
    function setAirDropRootHash(bytes32 _merkleRootHash) public onlyOwner {
        airdropRootHash = _merkleRootHash;
    }

    /**
     * @dev 设置presaleMint每批次售卖的nft个数
     */
    function setBatchNumber(uint256 _batchNumber) public onlyOwner {
        batchNumber = _batchNumber;
    }

    /**
     * @dev 为tokenId的nft设置抽奖次数
     */
    function setLotteryCount(uint256 tokenId, uint64 _lotteryCount) public onlyOwner {
        lotteryCount[tokenId] = _lotteryCount;
    }

    /**
     * @dev 为tokenId的nft设置质押状态
     */
    function setStakingStatus(uint256 tokenId, bool _isStaking) public onlyOwner {
        stakingStatus[tokenId] = _isStaking;
    }

    /**
     * @dev 修改saleStage
     */
    function setSaleStage(uint64 _stage) public onlyOwner {
        saleStage = _stage;
    }

    /**
    * @dev 设置freeMint阶段用户最大mint个数
     */
    function setFreeMintLimitCount(uint64 _maxMint) public onlyOwner {
        freeMintLimitCount = _maxMint;
    }

    /**
     * @dev 设置presaleMintOne阶段用户最大mint个数
     */
    function setPresaleMintOneLimitCount(uint64 _maxMint) public onlyOwner {
        presaleMintOneLimitCount = _maxMint;
    }

    /**
     * @dev 设置presaleMintTwo阶段用户最大mint个数
     */
    function setPresaleMintTwoLimitCount(uint64 _maxMint) public onlyOwner {
        presaleMintTwoLimitCount = _maxMint;
    }

    /**
     * @dev 修改盲盒状态
     */
    function flipRevealedState() public onlyOwner {
        revealedState = !revealedState;
    }

    /**
     * @dev 返回baseURI
     * @return string : baseURI
     */
    function _baseURI() internal view virtual override returns (string memory) {
        return baseURI;
    }


    fallback() external payable {}

    receive() external payable {}
}
