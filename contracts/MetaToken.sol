// SPDX-License-Identifier: MIT
pragma solidity 0.8.18;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract Project1 is ERC721URIStorage, Ownable {
    constructor() ERC721("PROJECT1NFT","P1N"){}

    function mint(
        address _to,
        uint256 _tokenId,
        string calldata _uri
    )external onlyOwner{
        _mint(_to, _tokenId);
        _setTokenURI(_tokenId, _uri);
    }

    function promptDescription()public pure returns(string memory){
        return ("1. Anime character with glowing eye \n 2. A Racing Car Cyberpunk \n 3. Naruto having Rasengaan on his hand \n 4. A beautiful landscape with mountains and lakes \n 5. A Cyberpunk font view");
    }
}