	
$('input[type="text"]').each(function(){

	this.value = $(this).attr('title');
	$(this).addClass('text-label');

	$(this).focus(function(){
		if(this.value == $(this).attr('title')) {
			this.value = '';
			$(this).removeClass('text-label');
		}
	});

	$(this).blur(function(){
		if(this.value == '') {
			this.value = $(this).attr('title');
			$(this).addClass('text-label');
		}
	});
});
$("#NotConnected").show();
$("#Connected").removeAttr("style").hide();
const addPlus = async() => {
    var value=$('#quantity').val();
    if(value==""){
      $('#quantity').val(1);
    }else{
      var finalValue=parseInt(value)+1>20?20:parseInt(value)+1;
      $('#quantity').val(finalValue);
      $('#qty').html(finalValue);
	  
    }
  }
  
const addMinus = async() => {
    var value=$('#quantity').val();
    if(value==""){
      $('#quantity').val(1);
    }else{
      var finalValue=parseInt(value)-1<1?1:parseInt(value)-1;
      $('#quantity').val(finalValue);
      $('#qty').html(finalValue);
    }
  }

function CheckValue() {
	var value=$('#quantity').val();
	if(value >= 20)
	{
		$('#quantity').val(20);
		$('#qty').html(20);
	}
	else if(value <= 0)
	{
		$('#quantity').val(1);
		$('#qty').html(1);
	}
}
const ContractAddress = "0x5802c586F657C787902280aC091d81832D7faF84";
const ContractABI = () => {
	return `[ { "inputs": [], "stateMutability": "nonpayable", "type": "constructor" }, { "inputs": [], "name": "ApprovalCallerNotOwnerNorApproved", "type": "error" }, { "inputs": [], "name": "ApprovalQueryForNonexistentToken", "type": "error" }, { "inputs": [], "name": "BalanceQueryForZeroAddress", "type": "error" }, { "inputs": [], "name": "MintERC2309QuantityExceedsLimit", "type": "error" }, { "inputs": [], "name": "MintToZeroAddress", "type": "error" }, { "inputs": [], "name": "MintZeroQuantity", "type": "error" }, { "inputs": [], "name": "OwnerQueryForNonexistentToken", "type": "error" }, { "inputs": [], "name": "OwnershipNotInitializedForExtraData", "type": "error" }, { "inputs": [], "name": "TransferCallerNotOwnerNorApproved", "type": "error" }, { "inputs": [], "name": "TransferFromIncorrectOwner", "type": "error" }, { "inputs": [], "name": "TransferToNonERC721ReceiverImplementer", "type": "error" }, { "inputs": [], "name": "TransferToZeroAddress", "type": "error" }, { "inputs": [], "name": "URIQueryForNonexistentToken", "type": "error" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "approved", "type": "address" }, { "indexed": true, "internalType": "uint256", "name": "tokenId", "type": "uint256" } ], "name": "Approval", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "operator", "type": "address" }, { "indexed": false, "internalType": "bool", "name": "approved", "type": "bool" } ], "name": "ApprovalForAll", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "uint256", "name": "fromTokenId", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "toTokenId", "type": "uint256" }, { "indexed": true, "internalType": "address", "name": "from", "type": "address" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" } ], "name": "ConsecutiveTransfer", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "address", "name": "previousOwner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "newOwner", "type": "address" } ], "name": "OwnershipTransferred", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "address", "name": "from", "type": "address" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }, { "indexed": true, "internalType": "uint256", "name": "tokenId", "type": "uint256" } ], "name": "Transfer", "type": "event" }, { "inputs": [ { "internalType": "address[]", "name": "listedAirdrop", "type": "address[]" }, { "internalType": "uint256[]", "name": "qty", "type": "uint256[]" } ], "name": "airdrop", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" } ], "name": "approve", "outputs": [], "stateMutability": "payable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "owner", "type": "address" } ], "name": "balanceOf", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "baseURI", "outputs": [ { "internalType": "string", "name": "", "type": "string" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "freey00tapelist", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "tokenId", "type": "uint256" } ], "name": "getApproved", "outputs": [ { "internalType": "address", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "address", "name": "operator", "type": "address" } ], "name": "isApprovedForAll", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "isMintingStart", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "maxPerTransaction", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "maxSupply", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "merkleRoot", "outputs": [ { "internalType": "bytes32", "name": "", "type": "bytes32" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "mintSupply", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "name", "outputs": [ { "internalType": "string", "name": "", "type": "string" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "owner", "type": "address" } ], "name": "numberMinted", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "owner", "outputs": [ { "internalType": "address", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "tokenId", "type": "uint256" } ], "name": "ownerOf", "outputs": [ { "internalType": "address", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "pricePublic", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "pricey00tapelist", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "qty", "type": "uint256" } ], "name": "publicMint", "outputs": [], "stateMutability": "payable", "type": "function" }, { "inputs": [], "name": "renounceOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "from", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" } ], "name": "safeTransferFrom", "outputs": [], "stateMutability": "payable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "from", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" }, { "internalType": "bytes", "name": "_data", "type": "bytes" } ], "name": "safeTransferFrom", "outputs": [], "stateMutability": "payable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "operator", "type": "address" }, { "internalType": "bool", "name": "approved", "type": "bool" } ], "name": "setApprovalForAll", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "string", "name": "baseURI_", "type": "string" } ], "name": "setBaseURI", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "bytes32", "name": "root", "type": "bytes32" } ], "name": "setMerkleRoot", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "mintSupply_", "type": "uint256" } ], "name": "setMintSupply", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "price_", "type": "uint256" } ], "name": "setPricePublic", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "pricey00tapelist_", "type": "uint256" } ], "name": "setPricey00tapelist", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "setPublicisMintingStart", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "maxTeam_", "type": "uint256" } ], "name": "setTeamSupply", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "addr_", "type": "address" } ], "name": "setWalletMint", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "freey00tapelist_", "type": "uint256" } ], "name": "setfreey00tapelist", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "maxPerTransaction_", "type": "uint256" } ], "name": "setmaxPerTransaction", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "bytes4", "name": "interfaceId", "type": "bytes4" } ], "name": "supportsInterface", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "symbol", "outputs": [ { "internalType": "string", "name": "", "type": "string" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "qty", "type": "uint256" } ], "name": "teamMint", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "teamSupply", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "tokenId", "type": "uint256" } ], "name": "tokenURI", "outputs": [ { "internalType": "string", "name": "", "type": "string" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "totalSupply", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "from", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" } ], "name": "transferFrom", "outputs": [], "stateMutability": "payable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "newOwner", "type": "address" } ], "name": "transferOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "", "type": "address" } ], "name": "walletPublic", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "", "type": "address" } ], "name": "wallety00tapelist", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "withdraw", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "qty", "type": "uint256" }, { "internalType": "bytes32[]", "name": "_merkleProof", "type": "bytes32[]" } ], "name": "y00tapelistMint", "outputs": [], "stateMutability": "payable", "type": "function" } ]`;  
};

const provider = new ethers.providers.Web3Provider(window.ethereum,"any");
const signer = provider.getSigner();
const Contract = new ethers.Contract(ContractAddress, ContractABI(), signer);
	
document.addEventListener("DOMContentLoaded", checkMetamask);
var connectedWallet = false;

const connect = async()=>{
	await provider.send("eth_requestAccounts", []);
	try {
		return await provider.send("eth_requestAccounts", []);
	}    
	catch (error) { 
			if (error) {
				console.log(error.message);
				if ((error.message).includes("User rejected the request")) {
						swal("Check Your Metamask!");
				}
				else{
						swal("Clear Browser Cookies and Cache");
					}
			}
			else {
				swal("Clear Browser Cookies and Cache");
			}
		}
};


function  checkMetamask (){
	if (typeof window.ethereum !== 'undefined') {
	}
	else{
		$("#isDisconnect").show();
		$("#isConnect").removeAttr("style").hide();
	}
};

const getAddress = async()=>{
	try {
		return await signer.getAddress()
	}catch (error) { 
        if (error) {
				connectedWallet = false;
			}
        else {
        }
    } finally {
		if(getAddress != null)
		{
				connectedWallet = true;
		}
	}
};

function hasOwnPropertyCaseInsensitive(obj, property) {
    var props = [];
    for (var i in obj) if (obj.hasOwnProperty(i)) props.push(i);
    var prop;
    while (prop = props.pop()) if (prop.toLowerCase() === property.toLowerCase()) return true;
    return false;
}

const checkWhitelist = async()=>{
	let  addressCheck = $("#addressCheck").val();
	const _proof = await  fetch("assets/js/whitelist.json").then(response => response.json()).then(json => {
		if (hasOwnPropertyCaseInsensitive(json,addressCheck)){
			var asLowercase = addressCheck.toLowerCase();
			var merkleProof = json[Object.keys(json).find(key => key.toLowerCase() === asLowercase)]['proof'];
			var proof = JSON.stringify(merkleProof);
			return proof;
		}
		else{
			return null;
		}
	});    
	try {
        const _proofArray = _proof ? JSON.parse(_proof) : [];
        return _proofArray
    }
    catch (error) {
        return [];
    }
};

const mintWhitelist = async()=>{
	let userAddress = await getAddress();
	const _proof = await  fetch("assets/js/whitelist.json").then(response => response.json()).then(json => {
		if (hasOwnPropertyCaseInsensitive(json,userAddress)){
			var asLowercase = userAddress.toLowerCase();
			var merkleProof = json[Object.keys(json).find(key => key.toLowerCase() === asLowercase)]['proof'];
			var proof = JSON.stringify(merkleProof);
			return proof;
		}
		else{
			return null;
		}
	});    
	try {
        const _proofArray = _proof ? JSON.parse(_proof) : [];
        return _proofArray
    }
    catch (error) {
        return [];
    }
};


const whitelisted = async()=>{
	let  addressCheck = $("#addressCheck").val();
	if(addressCheck.length != 0)
	{
		var _merkleProof = await checkWhitelist();
		if(_merkleProof != ""){
			swal("Congratulations! You're y00tapelisted! See you in y00tapeia");
		}
		else{
			swal("Aww! You're not y00tapelisted! See you on our Public Mint");
		}
	}
	else
	{
		await connect();
		let userAddress = await getAddress();
	}
};

const updateMintInfo = async() => {
	await connect();
	const minted = parseInt(await Contract.totalSupply());
    $("#minted").html(`${minted}`+"/6969");
	let userAddress = await getAddress();
	let length = userAddress.length;
    $("#connectWallet").html(`Wallet :`+`${userAddress.substr(0,4)}.`+`.${userAddress.substr((length-4),length)}`);
    $("#Connected").show();
	$("#NotConnected").removeAttr("style").hide();
}
setInterval(async()=>{
	const addresses = await provider.listAccounts(); 
	if(addresses.length != 0)
	{
		await updateMintInfo();
	}
}, 5000)

ethereum.on("accountsChanged", async(accounts_)=>{
    location.reload();
});

window.onload = async()=>{
	const addresses = await provider.listAccounts(); 
	if(addresses.length != 0)
	{
		await updateMintInfo();
	}
	else
	{
		$("#NotConnected").show();
		$("#Connected").removeAttr("style").hide();
	}
};

const mint = async() => {
    try {
			await connect();
			let userAddress = await getAddress();
			const pricePublic = parseInt(await Contract.pricePublic());
			const pricey00tapelist = parseInt(await Contract.pricey00tapelist());
			const walletPublic = parseInt(await Contract.walletPublic(userAddress));
			const wallety00tapelist = parseInt(await Contract.wallety00tapelist(userAddress));
			const free = parseInt(await Contract.freey00tapelist());
			const minted = parseInt(await Contract.totalSupply());
			let  amount = parseInt($("#quantity").val());
			var _merkleProof = await mintWhitelist();
			if(_merkleProof != "")
			{
				if(wallety00tapelist < free)
				{
					if(amount <= free - wallety00tapelist){amount = free};
					const cost = ethers.BigNumber.from(pricey00tapelist).mul(amount-free);
					const gasLimit = await Contract.estimateGas.y00tapelistMint(amount,_merkleProof,{value: cost});
					const newGasLimit = parseInt((gasLimit * 1.2)).toString();
					await Contract.y00tapelistMint(amount,_merkleProof,{value: cost,gasLimit: newGasLimit});
				}
				else
				{
					const cost = ethers.BigNumber.from(pricey00tapelist).mul(amount);
					const gasLimit = await Contract.estimateGas.y00tapelistMint(amount,_merkleProof,{value: cost});
					const newGasLimit = parseInt((gasLimit * 1.2)).toString();
					await Contract.y00tapelistMint(amount,_merkleProof,{value: cost,gasLimit: newGasLimit});
				}
			}
			else
			{
				const cost = ethers.BigNumber.from(pricePublic).mul(amount);
				const gasLimit = await Contract.estimateGas.publicMint(amount, {value: cost});
				const newGasLimit = parseInt((gasLimit * 1.2)).toString();
				await Contract.publicMint(amount, {value: cost,gasLimit: newGasLimit});
			}
		}
    catch (error) { 
			if (error) {
				console.log(error);
				if ((error.message).includes("Limit Per Transaction")) {
						swal("Max Transaction");
				}
				else if ((error.message).includes("isMintingStart")) {
						swal("y00tapeia isn't open yet! 21/11/2022 at 10AM (EST)");
				}	
				else if ((error.message).includes("Insufficient")) {
						swal("Insufficient Funds");
				}			
				else if ((error.message).includes("Max Per Wallet")) {
						swal("Max Mint Reached");
				}	
				else if ((error.message).includes("Soldout")) {
						swal("Soldout");
				}
				else if ((error.message).includes("wallet_requestPermissions")) {
						swal("Check Your Popup Metamask");
				}
				else if ((error.message).includes("User rejected the request.")) {
						swal("Rejected");
				}
				else if ((error.message).includes("insufficient funds for gas")) {
						swal("Insufficient Funds");
				}
				else{
						swal("Error");
					}
			}
			else {
				swal("Clear Browser Cookies and Cache");
			}
		}
	};