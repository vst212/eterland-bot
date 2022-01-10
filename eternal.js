const num_of_map=1;
const POPUP_APPEAR_TIMER = 5 * 1000;
async function delay(ms = 1000) {
  return new Promise(resolve => setTimeout(resolve, ms))
}
async function connect() {
  const longin_btn = document.getElementsByClassName('bnt-login-nav')[0];
  const connect_btn = document.getElementsByClassName('subtitle-small btn-register')[0];
  if (longin_btn && longin_btn.innerText === ' Login ') {
    longin_btn.click();
	console.log(`Login Pressed`);
    await delay(POPUP_APPEAR_TIMER);
  }
    
  if (connect_btn && connect_btn.innerText === 'Connect') {
    connect_btn.click();
    console.log(`Connect Pressed`);
    await delay(POPUP_APPEAR_TIMER);
  }
}

async function peak_purchase() {
const peak_qty = document.querySelector("body > app-root > app-skeleton > app-expedition-layout > app-dashboard > main > div > app-nav-materials > div > div.container-materials > div:nth-child(1) > div > div > input").value;
  if (peak_qty==0) {
    console.log(`"Peak is out of stock, go shopping`);
	//go to shop
document.querySelector("#shop").click();
//select peak to buy
document.querySelector("body > app-root > app-skeleton > app-expedition-layout > app-dashboard > main > div > div > app-tab > div > div > div > app-shop > div > div > div:nth-child(2) > div > div.content-card-item-shop > div:nth-child(2) > button").click();
//add qty:1
document.querySelector("body > app-root > app-skeleton > app-expedition-layout > app-dashboard > main > div > div > app-tab > div > div > div > app-shop > div > div > div:nth-child(2) > div > app-modal-shop > div > div > div.modal-shop-body > div > div > div.d-flex.flex-column.h-auto.justify-content-between.w-100 > div.d-flex.w-100.justify-content-between.shop-input > label:nth-child(2) > div > div > button.btn-arrow-top-unds").click();
//make purchase complete
document.querySelector("body > app-root > app-skeleton > app-expedition-layout > app-dashboard > main > div > div > app-tab > div > div > div > app-shop > div > div > div:nth-child(2) > div > app-modal-shop > div > div > div.modal-shop-body > div > button").click()
}
}

//has problem
async function compass_purchase() {
const compass_qty = document.querySelector("body > app-root > app-skeleton > app-expedition-layout > app-dashboard > main > div > app-nav-materials > div > div.container-materials > div:nth-child(2) > div > div > input").value;
  while (compass_qty<num_of_map) {
    console.log(`"compass is out of stock, go shopping`);
	//go to shop
document.querySelector("#shop").click();
//select compass to buy
document.querySelector("body > app-root > app-skeleton > app-expedition-layout > app-dashboard > main > div > div > app-tab > div > div > div > app-shop > div > div > div:nth-child(1) > div > div.content-card-item-shop > div:nth-child(2) > button").click();
//add qty:1
document.querySelector("body > app-root > app-skeleton > app-expedition-layout > app-dashboard > main > div > div > app-tab > div > div > div > app-shop > div > div > div:nth-child(1) > div > app-modal-shop > div > div > div.modal-shop-body > div > div.d-flex.w-100.h-100 > div.d-flex.flex-column.h-auto.justify-content-between.w-100 > div.d-flex.w-100.justify-content-between.shop-input > label:nth-child(2) > div > div > button.btn-arrow-top-unds").click();
//make purchase complete
document.querySelector("body > app-root > app-skeleton > app-expedition-layout > app-dashboard > main > div > div > app-tab > div > div > div > app-shop > div > div > div:nth-child(1) > div > app-modal-shop > div > div > div.modal-shop-body > div > button").click()
}
console.log('Finish purchase compass');
}

async function claim_common(){
	
if(document.querySelector("body > app-root > app-skeleton > app-expedition-layout > app-dashboard > main > div > div > app-header-frags > div > div > div > div:nth-child(1) > div > div > span").value>0)
{
document.querySelector("body > app-root > app-skeleton > app-expedition-layout > app-dashboard > main > app-header-lvl > div > div.align-items-center.content-global-tokens > button:nth-child(1)").click()
document.querySelector("body > app-root > app-skeleton > app-expedition-layout > app-dashboard > main > app-header-lvl > div > div.align-items-center.content-global-tokens > app-modal-change-token > div > div > div.modal-shop-body.w-100 > app-change-frags > div > div.d-flex.w-100 > div > div.d-flex.w-100.justify-content-between.mb-2 > label > div > button").click()
document.querySelector("body > app-root > app-skeleton > app-expedition-layout > app-dashboard > main > app-header-lvl > div > div.align-items-center.content-global-tokens > app-modal-change-token > div > div > div.modal-shop-body.w-100 > app-change-frags > div > div.d-flex.flex-column.justify-content-around.h-100 > button").click()
}

}

async function remove_monticle() {
  const i=0;
  const checking_time=num_of_map;
  for (let i = 0; i < checking_time; i++) {
    const btn = document.getElementsByClassName('btn-claim-expedition subtitle-smaller')[i];
    if (btn && btn.innerText === 'Remove monticle') {
	  await peak_purchase() 
      btn.click();
      console.log(`Removed monticle`);
      await delay(POPUP_APPEAR_TIMER);
	  const btn1 = document.getElementsByClassName('swal2-confirm swal2-styled')[0];
      if (btn1 && btn1.innerText === 'Yes') {
        btn1.click();
        console.log(`Confirmed removal`);
	  await delay(POPUP_APPEAR_TIMER);
	  }
    } else {
      console.log(`Checking monticle`);
	    await delay(POPUP_APPEAR_TIMER);
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
  await delay(POPUP_APPEAR_TIMER);
}
}
while(true) {
	await connect();
	await claim_common();
	await expedition();
	await remove_monticle();
	await deposite();
}

