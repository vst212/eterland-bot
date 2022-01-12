const num_of_map=2;

function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}

async function delay(ms = 1000) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

async function connect() {
  const longin_btn = document.getElementsByClassName('bnt-login-nav')[0];
  const connect_btn = document.getElementsByClassName('subtitle-small btn-register')[0];
  if (longin_btn && longin_btn.innerText === 'Login') {
    longin_btn.click();
	console.log(`Login Pressed`);
  }
 await delay(3000);
  if (connect_btn && connect_btn.innerText === 'Connect') {
    connect_btn.click();
    console.log(`Connect Pressed`);

  }
}

async function claim_crystal(){
if(document.getElementsByClassName('number-frags')[0]){
	if(document.getElementsByClassName('number-frags')[0].innerText==='0.00')
	{}
	else{
		document.getElementsByClassName('d-flex content-coin-token align-items-center justify-content-between')[0].click();
		await delay(3000);
		document.getElementsByClassName('d-flex content-frag-modal-shop align-items-center justify-content-center border-content-modal-shop-one')[0].click();
		await delay(3000);
		document.getElementsByClassName('btn-max-change-frags title-smaller-blue')[0].click();
		await delay(3000);
		document.getElementsByClassName('text-subtitle-regular-white btn-buy-modal-shop w-100 mt-3')[0].click();
		}
}
}

async function claim_crystal1(){
	for (let i = 0; i < 6; i++) {
	if(document.getElementsByClassName('number-frags')[i].innerText==='0.00')
	{}
	else{
		document.getElementsByClassName('d-flex content-coin-token align-items-center justify-content-between')[0].click();
		await delay(3000);
		switch(i){
		case '0':
		document.getElementsByClassName('d-flex content-frag-modal-shop align-items-center justify-content-center border-content-modal-shop-one')[0].click();
		await delay(3000);
		document.getElementsByClassName('btn-max-change-frags title-smaller-blue')[0].click();
		await delay(3000);
		document.getElementsByClassName('text-subtitle-regular-white btn-buy-modal-shop w-100 mt-3')[0].click();
		break;
		case '1':
		document.getElementsByClassName('d-flex content-frag-modal-shop align-items-center justify-content-center border-content-modal-shop-two')[0].click();
		await delay(3000);
		document.getElementsByClassName('btn-max-change-frags title-smaller-blue')[0].click();
		await delay(3000);
		document.getElementsByClassName('text-subtitle-regular-white btn-buy-modal-shop w-100 mt-3')[0].click();
		break;
		case '2':
		document.getElementsByClassName('d-flex content-frag-modal-shop align-items-center justify-content-center border-content-modal-shop-three')[0].click();
		await delay(3000);
		document.getElementsByClassName('btn-max-change-frags title-smaller-blue')[0].click();
		await delay(3000);
		document.getElementsByClassName('text-subtitle-regular-white btn-buy-modal-shop w-100 mt-3')[0].click();
		break;
		case '3':
		document.getElementsByClassName('d-flex content-frag-modal-shop align-items-center justify-content-center border-content-modal-shop-four')[0].click();
		await delay(3000);
		document.getElementsByClassName('btn-max-change-frags title-smaller-blue')[0].click();
		await delay(3000);
		document.getElementsByClassName('text-subtitle-regular-white btn-buy-modal-shop w-100 mt-3')[0].click();
		break;
		case '4':
		document.getElementsByClassName('d-flex content-frag-modal-shop align-items-center justify-content-center border-content-modal-shop-five')[0].click();
		await delay(3000);
		document.getElementsByClassName('btn-max-change-frags title-smaller-blue')[0].click();
		await delay(3000);
		document.getElementsByClassName('text-subtitle-regular-white btn-buy-modal-shop w-100 mt-3')[0].click();
		break;
		case '5':
		document.getElementsByClassName('d-flex content-frag-modal-shop align-items-center justify-content-center border-content-modal-shop-six')[0].click();
		await delay(3000);
		document.getElementsByClassName('btn-max-change-frags title-smaller-blue')[0].click();
		await delay(3000);
		document.getElementsByClassName('text-subtitle-regular-white btn-buy-modal-shop w-100 mt-3')[0].click();
		break;
		}
	}
}
}



async function claim_common(){
  const i=0;
  const checking_time=num_of_map;
  for (let i = 0; i < checking_time; i++) {
const btn = document.getElementsByClassName('btn-claim-expedition subtitle-smaller')[i];
    if (btn && btn.innerText === 'Claim') {
btn.click();
await delay(3000);
console.log("claim button clicked");
document.getElementsByClassName('number-one')[0].click();
await delay(3000);
console.log("number 1 reward selected");
document.getElementsByClassName('btn-claim text-subtitle-big-white')[0].click();
await delay(3000);
console.log("reward claimed");
document.getElementsByClassName('btn-claim text-subtitle-big-white')[0].click();
await delay(3000);
console.log("reward page closed"); 
}
  }
}

async function deposite_common(){
  const checking_time=num_of_map;
  for (let i = 0; i < checking_time; i++) {
	
if(document.getElementsByClassName('btn-active-card-deposit text-subtitle-regular-white mt-3')[i]){
await delay(3000);
if (document.getElementsByClassName('text-subtitle-big-white content-accent-title-deposit')[i].innerText === 'Common deposit')
{if(Common_map>0){
	document.getElementsByClassName('btn-active-card-deposit text-subtitle-regular-white mt-3')[i].click();
	await delay(3000);
	document.getElementsByClassName('btn-plus')[0].click();
	await delay(3000);
	document.getElementsByClassName('btn-continue-material text-subtitle-regular-white')[0].click();
	await delay(3000);
	console.log('common deposite activated');
    await tools_inventory();
	
}else{
document.querySelector("#shop").click();
await delay(3000);
document.getElementsByClassName('w-100 btn-buy-item-shop')[6].click();
await delay(3000);
document.getElementsByClassName('btn-arrow-top-unds')[0].click();
await delay(3000);
document.getElementsByClassName('text-subtitle-regular-white btn-buy-modal-shop w-100 mt-3')[0].click();
await tools_inventory();
console.log('common map purchased');
await deposite();
}
}
}
}
}


async function remove_monticle() {
  const checking_time=num_of_map;
  for (let i = 0; i < checking_time; i++) {
	  const btn_no_peak = document.getElementsByClassName('btn-claim-expedition subtitle-smaller btn-disabled')[i];
    if (btn_no_peak && btn_no_peak.innerText === 'Not enought peaks') {
document.querySelector("#shop").click();
await delay(3000);
document.getElementsByClassName('w-100 btn-buy-item-shop')[1].click();
await delay(3000);
document.getElementsByClassName('btn-arrow-top-unds')[0].click();
await delay(3000);
document.getElementsByClassName('text-subtitle-regular-white btn-buy-modal-shop w-100 mt-3')[0].click();
await tools_inventory();
console.log('Peak purchased');
await delay(3000);
document.querySelector("#expedition").click();
await delay(3000);
}
    const btn_monticle = document.getElementsByClassName('btn-claim-expedition subtitle-smaller')[i];
    if (btn_monticle && btn_monticle.innerText === 'Remove monticle') {
      btn_monticle.click();
      console.log(`Removed monticle`);
      await delay(3000);
	  const btn_monticle_yes = document.getElementsByClassName('swal2-confirm swal2-styled')[0];
      if (btn_monticle_yes && btn_monticle_yes.innerText === 'Yes') {
        btn_monticle_yes.click();
        console.log(`Confirmed removal`);
	  await delay(3000);
	  }
    } else {
      console.log(`Checking monticle`);
	    await delay(3000);
    }
  }
}

async function deposite() {
  if (document.querySelector("#deposit")) {
  document.querySelector("#deposit").click();
} else {
  console.log("Logged out, trying to reconnect");
  await connect();
}
}


async function expedition() {
  if (document.querySelector("#expedition")) {
  document.querySelector("#expedition").click();
} else {
  console.log("Logged out");
  await connect();
  await delay(3000);
}
}


async function expedition_compass(){
  const checking_time=num_of_map;
  for (let i = 0; i < checking_time; i++) {
	if(document.getElementsByClassName('subtitle-smaller d-flex align-items-center accent-red')[i])
	{
		if(Compass>0)
		{
			document.getElementsByClassName('content-compass-expedition d-flex justify-content-center align-items-center')[i].click();
			await tools_inventory();
			}
else{
document.querySelector("#shop").click();
await delay(3000);
document.getElementsByClassName('w-100 btn-buy-item-shop')[0].click();
await delay(3000);
document.getElementsByClassName('btn-arrow-top-unds')[0].click();
await delay(3000);
document.getElementsByClassName('text-subtitle-regular-white btn-buy-modal-shop w-100 mt-3')[0].click();
await tools_inventory();
console.log('Compass purchased');}
}
else{}
}
}

let Peak = 0 ;
let Compass = 0 ;
let Legendary_map = 0 ;
let Rare_map = 0 ;
let Uncommon_map = 0 ;
let Mythical_map = 0 ;
let Common_map = 0 ;
let Epic_map = 0 ;


async function tools_inventory(){
	try{
for (let i = 0; i < 8; i++) {
switch(document.getElementsByClassName('text-subtitle-big-white mb-2 title-nav-materials')[i].innerText){
	case 'Peak':
	Peak= document.getElementsByClassName('input-quantity-material position-absolute text-center')[i].value;
	break;
	case 'Compass':
	Compass= document.getElementsByClassName('input-quantity-material position-absolute text-center')[i].value;
	break;
	case 'Legendary map':
	Legendary_map= document.getElementsByClassName('input-quantity-material position-absolute text-center')[i].value;
	break;
	case 'Rare map':
	Rare_map= document.getElementsByClassName('input-quantity-material position-absolute text-center')[i].value;
	break;
	case 'Uncommon map':
	Uncommon_map= document.getElementsByClassName('input-quantity-material position-absolute text-center')[i].value;
	break;
	case 'Mythical map':
	Mythical_map= document.getElementsByClassName('input-quantity-material position-absolute text-center')[i].value;
	break;
	case 'Common map':
	Common_map= document.getElementsByClassName('input-quantity-material position-absolute text-center')[i].value;
	break;
	case 'Epic map':
	Epic_map= document.getElementsByClassName('input-quantity-material position-absolute text-center')[i].value;
	break;
}
}
	}catch{}
}


async function tools_inventory_print(){
	console.log('Peak: '+Peak);
	console.log('Compass: '+Compass);
	console.log('Legendary_map: '+Legendary_map);
	console.log('Rare_map: '+Rare_map);
	console.log('Uncommon_map: '+Uncommon_map);
	console.log('Mythical_map: '+Mythical_map);
	console.log('Common_map: '+Common_map);
	console.log('Epic_map: '+Epic_map);
}

await tools_inventory();
await tools_inventory_print();

while(true) {
	try{
	await connect();
	await delay(3000);
	await claim_crystal();
	await delay(3000);
	await claim_common();
	await delay(3000);
	await expedition();
	await delay(3000);
	await expedition_compass();
	await delay(3000);
	await remove_monticle();
	await delay(3000);
	await deposite();
	await delay(3000);
	await deposite_common();
	}catch{}
}

