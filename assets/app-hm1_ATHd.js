import{$ as e,A as t,C as n,D as r,E as i,F as a,I as o,M as s,N as c,O as l,P as u,S as d,T as f,_ as p,a as m,b as h,c as g,d as _,f as v,g as y,h as b,i as ee,it as te,j as x,k as ne,l as S,m as C,n as w,o as T,p as E,r as D,s as O,st as k,t as A,u as j,v as M,w as N,x as re,y as P}from"./ui-CuCSWZT4.js";function F(t,n=`lamports`){return e(t,n)}async function ie(e=()=>{}){let t=h.dep.devAccounts.find(e=>e.label.startsWith(`Keeper`)),n=c(t.key),i=a({account:n,chain:h.chain,transport:u(h.dep.rpc)}),o=async(e,t,r,a=[])=>{let{request:o}=await h.pub.simulateContract({address:e,abi:t,functionName:r,args:a,account:n});await h.pub.waitForTransactionReceipt({hash:await i.writeContract(o)})},l=0;for(let t of b().filter(e=>C(e)===`EXPIRABLE`))await o(t.side===`call`?P().callMarket:P().putMarket,t.side===`call`?s.CallMarket:s.PutMarket,`expire`,[t.idBig]),e(`expired #${(t.idBig&(1n<<248n)-1n).toString()}`),l++;await r(P().feeVault,s.FeeVault,`canSplit`)&&(await o(P().feeVault,s.FeeVault,`split`),e(`split fees: 30% stakers, 20% dev, 50% ops`),l++),l||e(`nothing to do`)}var I=k({live:()=>!0,render:()=>z,ticketHtml:()=>R}),L={side:`all`,token:`all`,sort:`new`};function R(e,{foot:t=``,note:n=``}={}){let r=M(e.token),i=v(e.amount,r.decimals),a=v(e.strike)/i,o=v(e.premium),s=y(e.token),c=e.side===`call`?a+o/i:a-o/i,l=``;if(s){let t=(a-s)/s*100,n=e.side===`call`?s>a:s<a;l=`<span class="moneyness ${n?`call-c`:`muted`}" title="Strike vs spot">${n?`ITM`:`OTM`} ${t>=0?`+`:``}${t.toFixed(0)}%</span>`}return`<article class="ticket" data-id="${e.id}">
    <div class="ticket-head">
      <div><span class="side ${e.side}">${e.side.toUpperCase()}</span> <span class="sym">${m(r.symbol)}</span></div>
      ${l}
    </div>
    <div class="ticket-body">
      <div><div class="k">Size</div><div class="v">${O(i)} ${m(r.symbol)}</div></div>
      <div><div class="k">Strike total</div><div class="v">${T(e.strike)} SOL</div></div>
      <div><div class="k">Strike / token</div><div class="v">${O(a,8)}</div></div>
      <div><div class="k">Spot / token</div><div class="v">${s?O(s,8):`—`}</div></div>
      <div><div class="k">Breakeven</div><div class="v">${O(c,8)}</div></div>
      <div><div class="k">Expires in</div><div class="v">${j(e.expiry-E.now)}</div></div>
      ${n}
    </div>
    <div class="ticket-foot">${t||`<div><div class="k muted" style="font:600 10px var(--mono);letter-spacing:.1em">PREMIUM</div><div class="price">${O(o,5)} SOL</div></div>`}</div>
  </article>`}function z(e){let t=b().filter(e=>C(e)===`OPEN`),n=t.filter(e=>(L.side===`all`||e.side===L.side)&&(L.token===`all`||e.token===L.token));L.sort===`cheap`?n.sort((e,t)=>Number(e.premium-t.premium)):L.sort===`soon`?n.sort((e,t)=>e.expiry-t.expiry):n.sort((e,t)=>t.created-e.created);let r=h.dep.tokens;e.innerHTML=`
    <div class="page-head">
      <div><p class="kicker">The desk · ${t.length} open offers</p><h1>Buy an option.</h1>
      <p class="lede">Every ticket is backed in full by its seller. Pay the premium, get the Option NFT, exercise before expiry if it pays.</p></div>
      <a class="btn ghost" href="#/write">Write your own →</a>
    </div>
    <div class="toolbar">
      <div class="seg" role="group" aria-label="Side">
        ${[`all`,`call`,`put`].map(e=>`<button data-side="${e}" class="${e===`all`?``:e}" aria-pressed="${L.side===e}">${e===`all`?`All`:e===`call`?`Calls`:`Puts`}</button>`).join(``)}
      </div>
      <select id="f-token" aria-label="Token" style="width:auto">
        <option value="all">All tokens</option>
        ${r.map(e=>`<option value="${e.address}" ${L.token===e.address?`selected`:``}>${m(e.symbol)}</option>`).join(``)}
      </select>
      <select id="f-sort" aria-label="Sort" style="width:auto">
        <option value="new" ${L.sort===`new`?`selected`:``}>Newest</option>
        <option value="cheap" ${L.sort===`cheap`?`selected`:``}>Cheapest premium</option>
        <option value="soon" ${L.sort===`soon`?`selected`:``}>Expiring soon</option>
      </select>
    </div>
    ${n.length?`<div class="tickets">${n.map(e=>R(e,{foot:ae(e)})).join(``)}</div>`:`<div class="empty">No open offers match. <a href="#/write">Write the first one.</a></div>`}
    <dialog id="buy-dlg"></dialog>`,e.querySelectorAll(`[data-side]`).forEach(t=>t.addEventListener(`click`,()=>{L.side=t.dataset.side,z(e)})),e.querySelector(`#f-token`).addEventListener(`change`,t=>{L.token=t.target.value,z(e)}),e.querySelector(`#f-sort`).addEventListener(`change`,t=>{L.sort=t.target.value,z(e)}),e.querySelectorAll(`[data-buy]`).forEach(t=>t.addEventListener(`click`,()=>oe(e,E.offers.get(t.dataset.buy))))}function ae(e){let t=h.account&&e.seller.toLowerCase()===h.account.toLowerCase();return`<div><div style="font:600 10px var(--mono);letter-spacing:.1em" class="muted">PREMIUM</div><div class="price">${O(v(e.premium),5)} SOL</div></div>
    ${t?`<span class="muted mono" style="font-size:12px">your offer</span>`:`<button class="btn ${e.side}" data-buy="${e.id}">Review</button>`}`}function oe(e,t){let n=e.querySelector(`#buy-dlg`),r=M(t.token),i=v(t.amount,r.decimals),a=v(t.strike)/i,o=v(t.premium),c=y(t.token),l=t.side===`call`?`The right to <b>buy ${O(i)} ${m(r.symbol)}</b> for <b>${T(t.strike)} SOL</b> total`:`The right to <b>sell ${O(i)} ${m(r.symbol)}</b> for <b>${T(t.strike)} SOL</b> total`;n.innerHTML=`
    <div class="d-head"><h3>${t.side===`call`?`Call`:`Put`} on ${m(r.symbol)}</h3><button class="btn ghost sm" data-close>Close</button></div>
    <div class="d-body">
      <p style="margin:0">${l}, any time before <b>${new Date(t.expiry*1e3).toLocaleString()}</b>.</p>
      ${g({side:t.side,strikePer:a,premiumPer:o/i,spot:c})}
      <ul class="rule-list">
        <li><span>You pay now</span><b>${O(o,6)} SOL</b></li>
        <li><span>Seller receives (97%)</span><b>${O(o*.97,6)} SOL</b></li>
        <li><span>To exercise you ${t.side===`call`?`pay`:`deliver`}</span><b>${t.side===`call`?`${T(t.strike)} SOL`:`${O(i)} ${m(r.symbol)}`}</b></li>
        <li><span>Exercise fee</span><b>0.1% of strike</b></li>
        <li><span>Fill deadline</span><b>${j(t.deadline-E.now)}</b></li>
        <li><span>Seller</span><b>${S(t.seller)}</b></li>
      </ul>
      <p class="hint" style="margin:0">Worst case you lose the premium. Exercise is not automatic: you send the transaction before expiry. Leave a margin, late transactions fail.</p>
      <button class="btn wide ${t.side}" data-confirm>${h.account?`Buy for ${O(o,6)} SOL`:`Connect a wallet to buy`}</button>
    </div>`,n.showModal(),n.querySelector(`[data-close]`).onclick=()=>n.close();let u=n.querySelector(`[data-confirm]`);u.disabled=!h.account,u.onclick=()=>D(u,`Confirm in wallet…`,async()=>{let e=t.side===`call`?P().callMarket:P().putMarket;await x(P().router,s.Router,`buyWithSOL`,[e,t.idBig],t.premium),n.close(),_(`Bought. Option NFT #${(t.idBig&(1n<<248n)-1n).toString()} is in your book.`,`ok`),location.hash=`#/book`})}function B(e){let t=1/(1+.2316419*Math.abs(e)),n=.3989423*Math.exp(-e*e/2)*t*(.3193815+t*(-.3565638+t*(1.781478+t*(-1.821256+t*1.330274))));return e>0?1-n:n}function se({side:e,spot:t,strike:n,years:r,vol:i}){if(!(t>0&&n>0&&r>0&&i>0))return null;let a=i*Math.sqrt(r),o=(Math.log(t/n)+.5*i*i*r)/a,s=o-a;return e===`call`?t*B(o)-n*B(s):n*B(-s)-t*B(-o)}function ce({side:e,spot:t,strike:n,years:r,vol:i}){if(!(t>0&&n>0&&r>0&&i>0))return null;let a=(Math.log(t/n)-.5*i*i*r)/(i*Math.sqrt(r));return B(e===`call`?a:-a)}var le=k({live:()=>!1,render:()=>U}),ue=[[`1h`,3600],[`1d`,86400],[`3d`,259200],[`7d`,604800],[`14d`,1209600],[`30d`,2592e3],[`90d`,7776e3]],de=[0,10,25,50,100],V=e=>F((+e||0).toFixed(18)),H={side:`call`,token:null,amount:``,strikePer:``,premium:``,expiry:604800,deadline:`expiry`,vol:120,moneyPick:25};function U(e){H.token||=h.dep.tokens[0]?.address,e.innerHTML=`
    <div class="page-head"><div><p class="kicker">Write</p><h1>Lock it, name your price.</h1>
    <p class="lede">You set the strike, the expiry and the premium. The premium is yours the moment someone buys. Unfilled offers can be cancelled any time, for gas only.</p></div></div>
    <div class="cols">
      <form class="form-grid" id="wf" novalidate>
        <div class="seg" role="group" aria-label="Side">
          <button type="button" data-s="call" class="call" aria-pressed="${H.side===`call`}">Covered call · lock tokens</button>
          <button type="button" data-s="put" class="put" aria-pressed="${H.side===`put`}">Cash-secured put · lock SOL</button>
        </div>
        <div class="row2">
          <label class="field">Token
            <select id="w-token">${h.dep.tokens.map(e=>`<option value="${e.address}" ${e.address===H.token?`selected`:``}>${m(e.symbol)} · ${m(e.name)}</option>`).join(``)}</select>
            <span class="hint" id="w-bal">…</span>
          </label>
          <label class="field">Size (tokens)
            <input id="w-amount" inputmode="decimal" placeholder="100000" value="${m(H.amount)}" />
            <span class="hint" id="w-size-hint"></span>
          </label>
        </div>
        <div class="field">Strike per token (SOL)
          <div class="chips" id="w-money">${de.map(e=>`<button type="button" class="chip" data-m="${e}" aria-pressed="${H.moneyPick===e}">${e===0?`at spot`:(H.side===`call`?`+`:`−`)+e+`%`}</button>`).join(``)}</div>
          <input id="w-strike" inputmode="decimal" value="${m(H.strikePer)}" aria-label="Strike per token" />
          <span class="hint" id="w-strike-hint"></span>
        </div>
        <div class="field">Expiry
          <div class="chips" id="w-exp">${ue.map(([e,t])=>`<button type="button" class="chip" data-e="${t}" aria-pressed="${H.expiry===t}">${e}</button>`).join(``)}</div>
        </div>
        <div class="row2">
          <label class="field">Fill deadline
            <select id="w-deadline">
              ${[[`expiry`,`Same as expiry`],[`3600`,`1 hour`],[`86400`,`24 hours`],[`259200`,`3 days`]].map(([e,t])=>`<option value="${e}" ${H.deadline===e?`selected`:``}>${t}</option>`).join(``)}
            </select>
            <span class="hint">How long buyers can fill. Never later than expiry.</span>
          </label>
          <label class="field">Volatility for the estimate <span class="num" id="w-vol-v">${H.vol}%</span>
            <input type="range" id="w-vol" min="20" max="300" step="5" value="${H.vol}" style="padding:0;border:0;background:none" />
            <span class="hint">Memecoins often run 100–200%.</span>
          </label>
        </div>
        <label class="field">Premium you ask (SOL, total)
          <input id="w-premium" inputmode="decimal" placeholder="0.05" value="${m(H.premium)}" />
          <span class="hint" id="w-bs"></span>
        </label>
      </form>
      <aside>
        <div class="preview-ticket" id="w-preview"></div>
        <div class="panel" id="w-sum"></div>
        <div class="panel">
          <button class="btn wide" id="w-go">List offer</button>
          <ol class="steps" id="w-steps"><li>Approve ${H.side===`call`?`token`:`WSOL`}</li><li>Lock collateral and list</li></ol>
        </div>
      </aside>
    </div>`;let t=t=>e.querySelector(t);e.querySelectorAll(`[data-s]`).forEach(t=>t.addEventListener(`click`,()=>{H.side=t.dataset.s,W(),U(e)})),t(`#w-token`).addEventListener(`change`,t=>{H.token=t.target.value,W(),U(e)}),t(`#w-amount`).addEventListener(`input`,t=>{H.amount=t.target.value,G(e)}),t(`#w-strike`).addEventListener(`input`,t=>{H.strikePer=t.target.value,H.moneyPick=null,e.querySelectorAll(`[data-m]`).forEach(e=>e.setAttribute(`aria-pressed`,`false`)),G(e)}),t(`#w-premium`).addEventListener(`input`,t=>{H.premium=t.target.value,G(e)}),t(`#w-deadline`).addEventListener(`change`,t=>{H.deadline=t.target.value,G(e)}),t(`#w-vol`).addEventListener(`input`,n=>{H.vol=+n.target.value,t(`#w-vol-v`).textContent=H.vol+`%`,G(e)}),e.querySelectorAll(`[data-m]`).forEach(t=>t.addEventListener(`click`,()=>{H.moneyPick=+t.dataset.m,W(),U(e)})),e.querySelectorAll(`[data-e]`).forEach(t=>t.addEventListener(`click`,()=>{H.expiry=+t.dataset.e,U(e)})),t(`#w-go`).addEventListener(`click`,()=>me(e)),H.strikePer||(W(),t(`#w-strike`).value=H.strikePer),G(e),fe(e)}function W(){let e=y(H.token);if(!e||H.moneyPick===null)return;let t=H.side===`call`?1+H.moneyPick/100:1-H.moneyPick/100;H.strikePer=String(+(e*t).toPrecision(4))}async function fe(e){let t=e.querySelector(`#w-bal`);if(!h.account){t.textContent=`Connect a wallet to see your balance.`;return}let n=M(H.token),[i,a,o]=await Promise.all([r(H.token,s.MockERC20,`balanceOf`,[h.account]),r(P().weth,s.WSOL9,`balanceOf`,[h.account]),h.pub.getBalance({address:h.account})]);t.textContent=H.side===`call`?`You hold ${O(v(i,n.decimals))} ${n.symbol}`:`You hold ${O(v(a))} WSOL + ${O(v(o))} SOL (SOL is wrapped for you)`}function pe(){let e=M(H.token),t=parseFloat(H.amount)||0,n=parseFloat(H.strikePer)||0,r=parseFloat(H.premium)||0,i=y(H.token),a=H.expiry/31536e3,o=i?se({side:H.side,spot:i,strike:n,years:a,vol:H.vol/100}):null,s=i?ce({side:H.side,spot:i,strike:n,years:a,vol:H.vol/100}):null;return{t:e,amount:t,strikePer:n,premium:r,sp:i,strikeTotal:t*n,bsTotal:o===null?null:o*t,pItm:s}}function G(e){let t=pe(),n=t=>e.querySelector(t);n(`#w-strike-hint`).textContent=t.sp?`Spot ${O(t.sp,8)} SOL · total strike ${O(t.strikeTotal,6)} SOL`:`No pool price for this token: set the strike yourself.`,n(`#w-size-hint`).textContent=t.amount&&t.sp?`≈ ${O(t.amount*t.sp,4)} SOL at spot`:``,n(`#w-bs`).innerHTML=t.bsTotal!==null&&t.amount&&t.strikePer?`Black-Scholes estimate: <b class="num">${O(t.bsTotal,6)} SOL</b> · chance it ends in the money ≈ ${(t.pItm*100).toFixed(0)}% · <button type="button" class="chip" id="w-use">use estimate</button>`:`Minimum 0.0005 SOL.`,n(`#w-use`)?.addEventListener(`click`,()=>{H.premium=String(Math.max(5e-4,+t.bsTotal.toPrecision(3))),n(`#w-premium`).value=H.premium,G(e)});let r=E.now||Math.floor(Date.now()/1e3),i={id:`preview`,side:H.side,token:H.token,seller:h.account||`0x0`,amount:o((t.amount||0).toFixed(6),t.t.decimals),strike:V(t.strikeTotal),premium:V(t.premium),expiry:r+H.expiry,deadline:r+H.expiry};n(`#w-preview`).innerHTML=t.amount&&t.strikePer?R(i):`<div class="empty" style="padding:24px">Fill in size and strike to see your ticket.</div>`;let a=H.side===`call`?`${O(t.amount)} ${m(t.t.symbol)}`:`${O(t.strikeTotal,6)} SOL`,s=H.side===`call`?`you receive ${O(t.strikeTotal*.999,6)} SOL for your tokens`:`you receive ${O(t.amount)} ${m(t.t.symbol)} for your SOL`;n(`#w-sum`).innerHTML=`<h3 style="margin-bottom:8px">What happens</h3><ul class="rule-list">
    <li><span>You lock now</span><b>${a}</b></li>
    <li><span>You earn when filled</span><b>${O(t.premium*.97,6)} SOL</b></li>
    <li><span>If exercised</span><b style="text-align:right;max-width:60%">${s}</b></li>
    <li><span>If it expires</span><b>${H.side===`call`?`tokens`:`SOL`} come back</b></li>
    <li><span>Fees</span><b>3% premium · 0.1% strike</b></li></ul>`}async function me(e){let t=e.querySelector(`#w-go`),n=e.querySelectorAll(`#w-steps li`),i=pe();if(!h.account)return _(`Connect a wallet first.`,`err`);if(!(i.amount>0&&i.strikePer>0&&i.premium>=5e-4))return _(`Fill in size, strike and a premium of at least 0.0005 SOL.`,`err`);await D(t,`Working…`,async()=>{let e=H.side===`call`?P().callMarket:P().putMarket,t=o(i.amount.toFixed(6),i.t.decimals),a=V(i.strikeTotal),c=V(i.premium);if(n[0].className=`now`,H.side===`call`)await N(H.token,e,t);else{let t=await r(P().weth,s.WSOL9,`balanceOf`,[h.account]);t<a&&await x(P().weth,s.WSOL9,`deposit`,[],a-t),await N(P().weth,e,a)}n[0].className=`done`,n[1].className=`now`;let l=await h.pub.getBlock(),u=Number(l.timestamp),d=BigInt(H.expiry>=7776e3?u+7776e3:u+H.expiry+120),f=H.deadline===`expiry`?d:BigInt(Math.min(u+Number(H.deadline)+120,Number(d)));await x(e,H.side===`call`?s.CallMarket:s.PutMarket,`createOffer`,[H.token,t,a,c,d,f]),n[1].className=`done`,_(`Listed. Your offer is on the desk.`,`ok`),H.amount=``,H.premium=``,location.hash=`#/book`})}var he=k({live:()=>!0,render:()=>ge}),K=e=>(e||``).toLowerCase(),q=e=>(e.idBig&(1n<<248n)-1n).toString();async function ge(e){if(!h.account){e.innerHTML=`<div class="page-head"><div><p class="kicker">My book</p><h1>Your positions.</h1></div></div><div class="empty">Connect a wallet to see the options you hold and the offers you wrote.</div>`;return}let t=K(h.account),n=b(),i=n.filter(e=>K(E.holders.get(e.id))===t&&e.status===`FILLED`),a=n.filter(e=>K(e.seller)===t),o=n.filter(e=>C(e)===`EXPIRABLE`),c=await r(P().weth,s.WSOL9,`balanceOf`,[h.account]);e.innerHTML=`
    <div class="page-head"><div><p class="kicker">My book · ${S(h.account)}</p><h1>Your positions.</h1></div>
      <div class="panel" style="padding:12px 16px;display:flex;gap:14px;align-items:center">
        <div><div class="kicker" style="margin:0">WSOL payouts</div><div class="price">${T(c,6)} WSOL</div></div>
        <button class="btn sm ghost" id="unwrap" ${c===0n?`disabled`:``}>Unwrap to SOL</button>
      </div>
    </div>
    <h2>Options you hold</h2>
    <p class="muted" style="margin:4px 0 16px">You hold the Option NFT, so you decide. Nothing exercises on its own.</p>
    ${i.length?`<div class="tickets">${i.map(ye).join(``)}</div>`:`<div class="empty">No options held. <a href="#/desk">Browse the desk.</a></div>`}
    <h2 style="margin-top:36px">Offers you wrote</h2>
    <p class="muted" style="margin:4px 0 16px">Unfilled offers can be cancelled for gas only. Filled ones run to exercise or expiry.</p>
    ${a.length?`<table class="ledger"><thead><tr><th>Ticket</th><th>Size</th><th>Strike</th><th>Premium</th><th>Status</th><th>Expiry</th><th></th></tr></thead><tbody>${a.sort((e,t)=>t.created-e.created).map(be).join(``)}</tbody></table>`:`<div class="empty">Nothing written yet. <a href="#/write">Write an offer.</a></div>`}
    ${o.length?`<h2 style="margin-top:36px">Housekeeping</h2><p class="muted" style="margin:4px 0 16px">These options passed expiry unexercised. Anyone can return the collateral to the seller; the keeper does it too.</p>
      <table class="ledger"><tbody>${o.map(e=>`<tr><td>${e.side.toUpperCase()} ${m(M(e.token).symbol)} #${q(e)}</td><td>seller ${S(e.seller)}</td><td>expired ${j(E.now-e.expiry)} ago</td><td><button class="btn sm ghost" data-expire="${e.id}">Expire</button></td></tr>`).join(``)}</tbody></table>`:``}
    <dialog id="xfer"></dialog>`,e.querySelector(`#unwrap`)?.addEventListener(`click`,e=>D(e.target,`Unwrapping…`,async()=>{await x(P().weth,s.WSOL9,`withdraw`,[c]),_(`Unwrapped to SOL.`,`ok`)})),e.querySelectorAll(`[data-ex]`).forEach(e=>e.addEventListener(`click`,()=>xe(e,E.offers.get(e.dataset.ex)))),e.querySelectorAll(`[data-cancel]`).forEach(e=>e.addEventListener(`click`,()=>D(e,`Cancelling…`,async()=>{let t=E.offers.get(e.dataset.cancel);await x(_e(t),ve(t),`cancelUnfilled`,[t.idBig]),_(`Cancelled. Collateral is back in your wallet.`,`ok`)}))),e.querySelectorAll(`[data-expire]`).forEach(e=>e.addEventListener(`click`,()=>D(e,`Expiring…`,async()=>{let t=E.offers.get(e.dataset.expire);await x(_e(t),ve(t),`expire`,[t.idBig]),_(`Expired. Collateral returned to the seller.`,`ok`)}))),e.querySelectorAll(`[data-xfer]`).forEach(t=>t.addEventListener(`click`,()=>Se(e,E.offers.get(t.dataset.xfer))))}var _e=e=>e.side===`call`?P().callMarket:P().putMarket,ve=e=>e.side===`call`?s.CallMarket:s.PutMarket;function ye(e){let t=M(e.token),n=v(e.amount,t.decimals),r=y(e.token),i=r?e.side===`call`?Math.max(0,r*n-v(e.strike)):Math.max(0,v(e.strike)-r*n):null,a=e.expiry-E.now,o=a<=0,s=a>0&&a<3600;return R(e,{foot:`<div><div class="muted" style="font:600 10px var(--mono);letter-spacing:.1em">IF EXERCISED NOW</div>
      <div class="price ${i>0?`call-c`:`muted`}">${i===null?`—`:(i>0?`+`:``)+O(i,6)+` SOL`}</div></div>
    <div style="display:flex;gap:6px">${o?`<span class="tag muted">expired</span>`:`<button class="btn sm ghost" data-xfer="${e.id}">Send</button><button class="btn sm ${e.side}" data-ex="${e.id}">Exercise</button>`}</div>`,note:s?`<div style="grid-column:1/-1" class="put-c mono">Under 1 hour left. Exercise early, late transactions fail.</div>`:``})}function be(e){let t=M(e.token),n=C(e),r={OPEN:`open`,STALE:`fill deadline passed`,FILLED:`filled · running`,EXPIRABLE:`expired · needs expire`,EXERCISED:`exercised`,EXPIRED:`expired`,CANCELLED:`cancelled`}[n],i=n===`OPEN`||n===`STALE`?`<button class="btn sm ghost" data-cancel="${e.id}">${n===`STALE`?`Reclaim`:`Cancel`}</button>`:n===`EXPIRABLE`?`<button class="btn sm ghost" data-expire="${e.id}">Expire</button>`:``;return`<tr><td><span class="tag ${e.side}-c">${e.side}</span> ${m(t.symbol)} #${q(e)}</td><td>${O(v(e.amount,t.decimals))}</td>
    <td>${T(e.strike,6)} SOL</td><td>${T(e.premium,6)} SOL</td><td>${r}</td><td>${n===`OPEN`||n===`FILLED`?j(e.expiry-E.now):`—`}</td><td>${i}</td></tr>`}async function xe(e,t){let n=M(t.token);await D(e,`Confirm in wallet…`,async()=>{t.side===`call`?(await x(P().router,s.Router,`exerciseWithSOL`,[P().callMarket,t.idBig],t.strike),_(`Exercised. ${O(v(t.amount,n.decimals))} ${n.symbol} are in your wallet.`,`ok`)):(await N(t.token,P().putMarket,t.amount),await x(P().putMarket,s.PutMarket,`exercise`,[t.idBig,h.account]),_(`Exercised. ${T(t.strike*999n/1000n,6)} WSOL received.`,`ok`))})}function Se(e,t){let n=e.querySelector(`#xfer`);n.innerHTML=`<div class="d-head"><h3>Send option #${q(t)}</h3><button class="btn ghost sm" data-close>Close</button></div>
    <div class="d-body"><p style="margin:0">The receiver gets the exercise right. This cannot be undone.</p>
    <label class="field">Receiver address<input id="to" placeholder="0x…" /></label>
    <button class="btn wide" id="send">Send NFT</button></div>`,n.showModal(),n.querySelector(`[data-close]`).onclick=()=>n.close();let r=n.querySelector(`#send`);r.onclick=()=>D(r,`Sending…`,async()=>{let e=n.querySelector(`#to`).value.trim();if(!te(e))throw Error(`That is not a valid address.`);await x(P().nft,s.OptionNFT,`transferFrom`,[h.account,e,t.idBig]),n.close(),_(`Sent.`,`ok`)})}var Ce=k({live:()=>!0,render:()=>Te}),we=s.MockERC20,J=()=>s.StakingPool;async function Te(e){let t=P().staking,[n,i,a]=await Promise.all([r(t,J(),`totalStaked`),r(t,J(),`totalActive`),r(t,J(),`currentEpoch`)]),o=E.splits[0],s=(Number(a)+1)*86400-E.now,c=null;if(h.account){let[e,n,i]=await Promise.all([r(P().token,we,`balanceOf`,[h.account]),r(t,J(),`position`,[h.account]),r(t,J(),`pendingReward`,[h.account])]);c={bal:e,earning:n[0],waiting:n[1],activeFrom:Number(n[2]),unlockAt:Number(n[3]),reward:i}}let l=c&&Number(a)<c.unlockAt&&c.earning>0n;if(e.innerHTML=`
    <div class="page-head"><div><p class="kicker">Stake $WICKOPTEXOPTEX</p><h1>30% of every fee, in WSOL.</h1>
      <p class="lede">Fees are split once a day. Stakers get 30%, 20% goes to the developer, 50% runs the desk. New stake starts earning next epoch and stays locked through its first earning epoch, so nobody can snipe a split.</p></div></div>
    <div class="stats">
      <div class="stat"><div class="k">Total staked</div><div class="v">${O(v(n))}</div></div>
      <div class="stat"><div class="k">Earning now</div><div class="v">${O(v(i))}</div></div>
      <div class="stat"><div class="k">Epoch</div><div class="v num">${a}</div></div>
      <div class="stat"><div class="k">Next epoch in</div><div class="v">${j(s)}</div></div>
      <div class="stat"><div class="k">Last split to stakers</div><div class="v">${o?T(o.stakers,5):`—`}</div></div>
    </div>
    <div class="cols">
      <div class="panel">
        ${c?`
        <h3>Your stake</h3>
        <ul class="rule-list" style="margin:10px 0 18px">
          <li><span>Wallet</span><b>${O(v(c.bal))} WICKOPTEX</b></li>
          <li><span>Earning</span><b>${O(v(c.earning))} WICKOPTEX</b></li>
          <li><span>Waiting for next epoch</span><b>${O(v(c.waiting))} WICKOPTEX${c.waiting>0n?` (from epoch ${c.activeFrom})`:``}</b></li>
          <li><span>Unlocks at epoch</span><b>${c.unlockAt||`—`} ${l?`· locked`:``}</b></li>
          <li><span>Claimable</span><b class="call-c">${T(c.reward,6)} WSOL</b></li>
        </ul>
        <label class="field">Amount<input id="amt" inputmode="decimal" placeholder="1000000" /></label>
        <div class="chips" style="margin:8px 0 14px"><button class="chip" data-max="bal">max to stake</button><button class="chip" data-max="out">max to unstake</button></div>
        <div style="display:flex;gap:8px;flex-wrap:wrap">
          <button class="btn" id="stake">Stake</button>
          <button class="btn ghost" id="unstake">Unstake</button>
          <button class="btn call" id="claim" ${c.reward===0n?`disabled`:``}>Claim ${T(c.reward,6)} WSOL</button>
        </div>`:`<div class="empty">Connect a wallet to stake.</div>`}
      </div>
      <aside class="panel">
        <h3>The rules</h3>
        <ul class="rule-list" style="margin-top:8px">
          <li><span>Epoch length</span><b>24 hours</b></li>
          <li><span>Starts earning</span><b>next epoch</b></li>
          <li><span>Lock</span><b>first earning epoch</b></li>
          <li><span>Waiting stake</span><b>withdraw any time</b></li>
          <li><span>Stakers share floor</span><b>never below 20%</b></li>
          <li><span>Unstake and claim</span><b>never paused</b></li>
        </ul>
      </aside>
    </div>`,!c)return;let u=e.querySelector(`#amt`);e.querySelectorAll(`[data-max]`).forEach(e=>e.addEventListener(`click`,()=>{u.value=String(v(e.dataset.max===`bal`?c.bal:c.earning+c.waiting))}));let d=()=>{let e=parseFloat(u.value);if(!(e>0))throw Error(`Enter an amount.`);return F(e.toFixed(18))};e.querySelector(`#stake`).addEventListener(`click`,e=>D(e.target,`Staking…`,async()=>{let e=d();await N(P().token,t,e),await x(t,J(),`stake`,[e]),_(`Staked. It starts earning next epoch.`,`ok`)})),e.querySelector(`#unstake`).addEventListener(`click`,e=>D(e.target,`Unstaking…`,async()=>{await x(t,J(),`unstake`,[d()]),_(`Unstaked.`,`ok`)})),e.querySelector(`#claim`).addEventListener(`click`,e=>D(e.target,`Claiming…`,async()=>{await x(t,J(),`claim`),_(`Claimed WSOL.`,`ok`)}))}var Ee=k({live:()=>!0,render:()=>Oe,txLink:()=>Y}),De={Listed:`muted`,Filled:`call-c`,Exercised:`call-c`,Expired:`put-c`,Cancelled:`muted`};function Y(e){let t=h.dep.explorer;return t?`<a href="${t}/tx/${e}" target="_blank" rel="noopener">${S(e)}</a>`:S(e)}function Oe(e){e.innerHTML=`
    <div class="page-head"><div><p class="kicker">The tape · ${E.tape.length} events</p><h1>Every trade, as it landed.</h1>
    <p class="lede">Read straight from chain events. Listings, fills, exercises, expiries and cancels.</p></div></div>
    ${E.tape.length?`<table class="ledger"><thead><tr><th>When</th><th>Event</th><th>Market</th><th>Size</th><th>Strike</th><th>Premium / fee</th><th>By</th><th>Tx</th></tr></thead><tbody>
    ${E.tape.map(e=>{let t=e.token?M(e.token):{symbol:`—`,decimals:18},n=e.kind===`Filled`?`${T(e.premium,6)} / ${T(e.fee,6)}`:e.kind===`Exercised`?`fee ${T(e.fee,6)}`:e.kind===`Listed`?T(e.premium,6):`—`;return`<tr><td>${ee(e.when)}</td><td><span class="tag ${De[e.kind]}">${e.kind}</span></td><td>${e.side.toUpperCase()} ${m(t.symbol)}</td>
        <td>${e.amount===void 0?`—`:O(v(e.amount,t.decimals))}</td><td>${e.strike===void 0?`—`:T(e.strike,6)}</td><td>${n}</td><td>${S(e.who)}</td><td>${Y(e.tx)}</td></tr>`}).join(``)}</tbody></table>`:`<div class="empty">Nothing on the tape yet.</div>`}`}var ke=k({live:()=>!0,render:()=>Ae});async function Ae(e){let[t,n,i,a,o,c]=await Promise.all([r(P().weth,s.WSOL9,`balanceOf`,[P().feeVault]),r(P().feeVault,s.FeeVault,`canSplit`),r(P().feeVault,s.FeeVault,`lastSplitEpoch`),r(P().feeVault,s.FeeVault,`dev`),r(P().feeVault,s.FeeVault,`ops`),r(P().feeVault,s.FeeVault,`devAccrued`)]),l=(e,t)=>e.reduce((e,n)=>e+n[t],0n),u=l(E.splits,`stakers`),d=l(E.splits,`dev`),f=l(E.splits,`ops`),p=(Math.floor(E.now/86400)+1)*86400-E.now;e.innerHTML=`
    <div class="page-head"><div><p class="kicker">Proof</p><h1>Where the fees went.</h1>
    <p class="lede">Every split is a FeesSplit event: 30% to stakers, 50% to operations, and 20% set aside for the developer to claim. All in WSOL. Nothing here is typed in by hand.</p></div></div>
    <div class="stats">
      <div class="stat"><div class="k">Waiting for next split</div><div class="v">${T(t-c,6)}</div></div>
      <div class="stat"><div class="k">Paid to stakers</div><div class="v">${T(u,6)}</div></div>
      <div class="stat"><div class="k">Split to developer</div><div class="v">${T(d,6)}</div></div>
      <div class="stat"><div class="k">To operations</div><div class="v">${T(f,6)}</div></div>
    </div>
    <div class="cols">
      <div>
        <h2>Splits</h2>
        ${E.splits.length?`<table class="ledger" style="margin-top:12px"><thead><tr><th>When</th><th>Epoch</th><th>Stakers 30%</th><th>Dev 20%</th><th>Ops 50%</th><th>Tx</th></tr></thead><tbody>
          ${E.splits.map(e=>`<tr><td>${ee(e.when)}</td><td>${e.epoch}</td><td>${T(e.stakers,6)}</td><td>${T(e.dev,6)}</td><td>${T(e.ops,6)}</td><td>${Y(e.tx)}</td></tr>`).join(``)}
        </tbody></table>`:`<div class="empty" style="margin-top:12px">No split yet.</div>`}
      </div>
      <aside>
        <div class="panel">
          <h3>Next split</h3>
          <ul class="rule-list" style="margin:10px 0 14px">
            <li><span>Last split epoch</span><b>${i}</b></li>
            <li><span>New epoch in</span><b>${j(p)}</b></li>
            <li><span>Ready now</span><b>${n?`yes`:`no`}</b></li>
          </ul>
          <button class="btn wide" id="split" ${n&&h.account?``:`disabled`}>Split fees now</button>
          <p class="hint" style="margin:8px 0 0">Anyone can call it once per epoch. The keeper does it if nobody else does.</p>
        </div>
        <div class="panel">
          <h3>Where the 70% goes</h3>
          <ul class="rule-list" style="margin-top:10px">
            <li><span>Developer · 20%</span><b class="mono">${S(a)}</b></li>
            <li><span>Developer, unclaimed</span><b>${T(c,6)}</b></li>
            <li><span>Operations · 50%</span><b class="mono">${S(o)}</b></li>
            <li><span>Changed only by</span><b>10 min timelock</b></li>
          </ul>
          ${h.account&&h.account.toLowerCase()===a.toLowerCase()?`<button class="btn wide" id="claim-dev" style="margin-top:14px" ${c>0n?``:`disabled`}>Claim ${T(c,6)} WSOL</button>
          <p class="hint" style="margin:8px 0 0">Sent to this wallet. Works even while the protocol is paused.</p>`:``}
        </div>
      </aside>
    </div>`,e.querySelector(`#claim-dev`)?.addEventListener(`click`,e=>D(e.target,`Claiming…`,async()=>{await x(P().feeVault,s.FeeVault,`claimDev`,[h.account]),_(`Developer fees claimed.`,`ok`)})),e.querySelector(`#split`).addEventListener(`click`,e=>D(e.target,`Splitting…`,async()=>{await x(P().feeVault,s.FeeVault,`split`),_(`Fees split.`,`ok`)}))}var X={seller:[14,20],escrow:[50,20],buyer:[86,20],vault:[50,56],stakers:[17,87],dev:[50,87],ops:[83,87]},je=[[`seller`,`Party`,`Seller`],[`escrow`,`Contract`,`Market escrow`],[`buyer`,`Party`,`Buyer / holder`],[`vault`,`Contract`,`FeeVault`],[`stakers`,`30%`,`Stakers`,!0],[`dev`,`20%`,`Developer`,!0],[`ops`,`50%`,`Operations`,!0]],Me=[[`seller`,`escrow`],[`escrow`,`buyer`],[`buyer`,`seller`,-14],[`buyer`,`vault`],[`seller`,`vault`],[`escrow`,`seller`,10],[`vault`,`stakers`],[`vault`,`dev`],[`vault`,`ops`]];function Ne(){let e=b().find(e=>C(e)===`OPEN`&&e.side===`call`)||b().find(e=>C(e)===`OPEN`);if(e){let t=M(e.token);return{live:!0,id:e.id,side:e.side,sym:t.symbol,amount:v(e.amount,t.decimals),strike:v(e.strike),premium:v(e.premium)}}return{live:!1,side:`call`,sym:`ZEPH`,amount:2e5,strike:10,premium:.3}}function Pe(e,t,n){let r=`${O(e.amount)} ${e.sym}`,i=e.premium*.97,a=e.premium*.03,o=e.strike*.001,s=e.strike-o,c=e=>`${O(e,6)} SOL`,l=[{key:`lock`,n:`01`,title:`Lock`,state:`OPEN`,fn:`createOffer()`,who:`seller`,...t===`call`?{moves:[[`TOK`,e.amount,`seller`,`escrow`]],body:`The seller locks <b>${r}</b> in the call market. Strike <b>${c(e.strike)}</b>, premium <b>${c(e.premium)}</b>. Nothing is sold naked: the contract holds the full amount until the option settles.`}:{moves:[[`SOL`,e.strike,`seller`,`escrow`]],body:`The seller locks the full strike, <b>${c(e.strike)}</b> as WSOL, in the put market, ready to buy <b>${r}</b>. Premium asked: <b>${c(e.premium)}</b>.`}},{key:`fill`,n:`02`,title:`Fill`,state:`FILLED`,fn:`Router.buyWithSol() → buy()`,who:`buyer`,moves:[[`SOL`,i,`buyer`,`seller`],[`SOL`,a,`buyer`,`vault`,`fee 3%`],[`NFT`,1,`escrow`,`buyer`,`Option NFT`]],body:`The buyer pays <b>${c(e.premium)}</b> up front: <b>${c(i)}</b> to the seller and <b>${c(a)}</b> (3%) to the FeeVault. The contract mints the Option NFT to the buyer: the right to ${t===`call`?`buy`:`sell`} ${r} for ${c(e.strike)} before expiry.`}];n?l.push(t===`call`?{key:`exercise`,n:`03`,title:`Exercise`,state:`EXERCISED`,fn:`Router.exerciseWithSol() → exercise()`,who:`buyer`,moves:[[`SOL`,s,`buyer`,`seller`],[`SOL`,o,`buyer`,`vault`,`fee 0.1%`],[`TOK`,e.amount,`escrow`,`buyer`],[`NFT`,-1,`buyer`,`buyer`,`burned`]],body:`In the money, so the holder pays the strike: <b>${c(s)}</b> to the seller, <b>${c(o)}</b> (0.1%) to the FeeVault. The escrow releases <b>${r}</b> to the holder and the NFT is burned. No oracle decides this: the holder does, before expiry.`}:{key:`exercise`,n:`03`,title:`Exercise`,state:`EXERCISED`,fn:`exercise()`,who:`buyer`,moves:[[`TOK`,e.amount,`buyer`,`seller`],[`SOL`,s,`escrow`,`buyer`],[`SOL`,o,`escrow`,`vault`,`fee 0.1%`],[`NFT`,-1,`buyer`,`buyer`,`burned`]],body:`The token fell below the strike, so the holder delivers <b>${r}</b> to the seller and receives <b>${c(s)}</b> from the escrow. <b>${c(o)}</b> (0.1%) goes to the FeeVault. The NFT is burned.`}):l.push({key:`expire`,n:`03`,title:`Expire`,state:`EXPIRED`,fn:`expire()`,who:`anyone`,moves:[t===`call`?[`TOK`,e.amount,`escrow`,`seller`]:[`SOL`,e.strike,`escrow`,`seller`],[`NFT`,-1,`buyer`,`buyer`,`burned`]],body:`Out of the money, nobody exercises. After expiry <b>anyone</b> can call expire (the keeper bot does it if nobody else does). The ${t===`call`?`${r}`:`${c(e.strike)}`} go back to the seller, who keeps the ${c(i)} premium. The NFT is burned.`});let u=a+(n?o:0);return l.push({key:`split`,n:`04`,title:`Split`,state:l[2].state,fn:`FeeVault.split()`,who:`anyone`,moves:[[`SOL`,u*.3,`vault`,`stakers`,`30%`],[`SOL`,u*.2,`vault`,`dev`,`20%`],[`SOL`,u*.5,`vault`,`ops`,`50%`]],body:`Once per 24h epoch anyone calls split. The <b>${c(u)}</b> collected goes <b>30%</b> to $WICKOPTEX stakers (${c(u*.3)}), <b>20%</b> to the developer (${c(u*.2)}), <b>50%</b> to operations (${c(u*.5)}). Everything is paid in WSOL.`}),l}function Fe(e,t={}){let n=Ne(),r={side:t.side||n.side,itm:t.itm??!0,i:0,playing:null},i=Pe(n,r.side,r.itm);e.innerHTML=`
    <section class="flow" aria-label="How an option flows">
      <div class="flow-head">
        <div>
          <p class="kicker" style="margin:0">${n.live?`Live offer on the desk · #${(BigInt(n.id)&(1n<<248n)-1n).toString()}`:`Example offer · ZEPH is illustrative`}</p>
          <h2 style="font-size:24px">One option, start to finish.</h2>
        </div>
        <div style="display:flex;gap:10px;flex-wrap:wrap;align-items:center">
          <div class="seg" role="group" aria-label="Side"><button class="call" data-side="call">Call</button><button class="put" data-side="put">Put</button></div>
          <div class="seg" role="group" aria-label="Ending"><button data-itm="1">Ends in the money</button><button data-itm="0">Out of the money</button></div>
        </div>
      </div>
      <div class="flow-body">
        <div class="stage" id="stage">
          <svg class="wires" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
            ${Me.map(([e,t,n=0])=>`<path data-w="${e}-${t}" vector-effect="non-scaling-stroke" d="${Ie(e,t,n)}"/>`).join(``)}
          </svg>
          ${je.map(([e,t,n,r])=>`<div class="node ${r?`small`:``}" data-node="${e}" style="left:${X[e][0]}%;top:${X[e][1]}%"><div class="n-k">${t}</div><div class="n-t">${n}</div><div class="n-b" data-bal="${e}"></div></div>`).join(``)}
        </div>
        <div class="narr" aria-live="polite">
          <div class="flow-steps" role="tablist" id="tabs"></div>
          <div><span class="state-pill" id="pill"></span> <span class="mono muted" id="fn" style="font-size:12px"></span></div>
          <h3 id="title"></h3>
          <p id="body"></p>
          <table class="ledger" aria-label="Running balances"><thead><tr><th>Party</th><th>Token</th><th>SOL</th></tr></thead><tbody id="ledger"></tbody></table>
        </div>
      </div>
      <div class="flow-foot">
        <div class="machine" id="machine" aria-label="Lifecycle"></div>
        <div style="display:flex;gap:8px">
          <button class="btn ghost sm" id="prev">← Back</button>
          <button class="btn ghost sm" id="play">Play</button>
          <button class="btn sm" id="next">Next →</button>
        </div>
      </div>
    </section>`;let a=t=>e.querySelector(t),o=a(`#stage`),s=matchMedia(`(prefers-reduced-motion: reduce)`).matches;function c(){e.querySelectorAll(`[data-side]`).forEach(e=>e.setAttribute(`aria-pressed`,String(e.dataset.side===r.side))),e.querySelectorAll(`[data-itm]`).forEach(e=>e.setAttribute(`aria-pressed`,String(!!+e.dataset.itm===r.itm)))}function l(e){let t={};for(let e of Object.keys(X))t[e]={TOK:0,SOL:0,NFT:0};for(let n=0;n<=e;n++)for(let[e,r,a,o]of i[n].moves)e===`NFT`?r<0?t[a].NFT=0:t[o].NFT=1:(t[a][e]-=r,t[o][e]+=r);return t}function u(t,o=!0){r.i=Math.max(0,Math.min(i.length-1,t));let c=i[r.i];a(`#tabs`).innerHTML=i.map((e,t)=>`<button role="tab" aria-current="${t===r.i?`step`:`false`}" data-step="${t}">${e.n} ${e.title}</button>`).join(``),a(`#tabs`).querySelectorAll(`[data-step]`).forEach(e=>e.addEventListener(`click`,()=>{f(),u(+e.dataset.step)})),a(`#pill`).textContent=c.state,a(`#fn`).textContent=`${c.who} calls ${c.fn}`,a(`#title`).textContent=c.title,a(`#body`).innerHTML=c.body;let p=l(r.i),h=[[`seller`,`Seller`],[`escrow`,`Escrow`],[`buyer`,`Buyer`],[`vault`,`FeeVault`],[`stakers`,`Stakers`],[`dev`,`Dev`],[`ops`,`Ops`]],g=(e,t)=>Math.abs(e)<1e-12?`·`:(e>0?`+`:`−`)+O(Math.abs(e),t);a(`#ledger`).innerHTML=h.map(([e,t])=>`<tr><td>${t}${p[e].NFT?` · NFT`:``}</td><td>${g(p[e].TOK,2)}</td><td>${g(p[e].SOL,6)}</td></tr>`).join(``);for(let[e]of h){let t=p[e],r=[];Math.abs(t.TOK)>1e-12&&r.push(`${t.TOK>0?`+`:`−`}${O(Math.abs(t.TOK))} ${m(n.sym)}`),Math.abs(t.SOL)>1e-12&&r.push(`${t.SOL>0?`+`:`−`}${O(Math.abs(t.SOL),4)} SOL`),t.NFT&&r.push(`NFT`),a(`[data-bal="${e}"]`).textContent=r.join(` · `)}let _=[`OPEN`,`FILLED`,r.itm?`EXERCISED`:`EXPIRED`],v=_.indexOf(c.state);a(`#machine`).innerHTML=_.map((e,t)=>`<span class="s ${t<=v?`on`:``}">${e}</span>`).join(`<span class="arrow">→</span>`)+`<span class="muted" style="margin-left:10px">or OPEN → CANCELLED by the seller before a fill</span>`;let y=new Set(c.moves.flatMap(e=>[e[2],e[3]]));e.querySelectorAll(`[data-node]`).forEach(e=>e.classList.toggle(`hot`,y.has(e.dataset.node))),e.querySelectorAll(`[data-w]`).forEach(e=>{let[t,n]=e.dataset.w.split(`-`);e.classList.toggle(`live`,c.moves.some(e=>e[2]===t&&e[3]===n||e[2]===n&&e[3]===t))}),d(c,o&&!s),a(`#prev`).disabled=r.i===0,a(`#next`).textContent=r.i===i.length-1?`Start over`:`Next →`}function d(e,t){o.querySelectorAll(`.coin`).forEach(e=>e.remove()),e.moves.forEach(([e,r,i,a,s],c)=>{let l=document.createElement(`div`);l.className=`coin ${e===`TOK`?`tok`:e===`NFT`?`nft`:s?.startsWith(`fee`)||/%$/.test(s||``)?`fee`:`eth`}`,l.textContent=e===`NFT`?s||`NFT`:`${s&&!s.endsWith(`%`)?s+` `:``}${e===`TOK`?O(r)+` `+n.sym:O(r,5)+` SOL`}`;let[u,d]=X[i],[f,p]=X[a],m=c%3*4-4;l.style.left=`${u}%`,l.style.top=`${d+m+14}%`,o.append(l);let h=()=>{l.style.left=`${f}%`,l.style.top=`${p+m+14}%`,e===`NFT`&&r<0&&setTimeout(()=>l.classList.add(`gone`),t?700:0)};t?(l.getBoundingClientRect(),setTimeout(h,120+c*260)):h()})}function f(){r.playing&&(clearInterval(r.playing),r.playing=null,a(`#play`).textContent=`Play`)}function p(){i=Pe(n,r.side,r.itm),c(),u(Math.min(r.i,i.length-1))}return e.querySelectorAll(`[data-side]`).forEach(e=>e.addEventListener(`click`,()=>{r.side=e.dataset.side,p()})),e.querySelectorAll(`[data-itm]`).forEach(e=>e.addEventListener(`click`,()=>{r.itm=!!+e.dataset.itm,p()})),a(`#prev`).addEventListener(`click`,()=>{f(),u(r.i-1)}),a(`#next`).addEventListener(`click`,()=>{f(),u(r.i===i.length-1?0:r.i+1)}),a(`#play`).addEventListener(`click`,()=>{if(r.playing)return f();a(`#play`).textContent=`Pause`,u(0),r.playing=setInterval(()=>r.i===i.length-1?f():u(r.i+1),3200)}),e.addEventListener(`keydown`,e=>{e.key===`ArrowRight`&&(f(),u(r.i+1)),e.key===`ArrowLeft`&&(f(),u(r.i-1))}),c(),u(Math.max(0,(t.step||1)-1),!1),{destroy:f}}function Ie(e,t,n){let[r,i]=X[e],[a,o]=X[t];return n?`M${r},${i} Q${(r+a)/2},${(i+o)/2+n} ${a},${o}`:`M${r},${i} L${a},${o}`}var Le=k({live:()=>!1,render:()=>Be}),Re,ze=[[`Seller`,`createOffer`,`Locks collateral, offer is OPEN`,`seller wallet`],[`Buyer`,`buyWithSOL`,`Premium to seller (97%) and FeeVault (3%), Option NFT minted`,`buyer wallet`],[`Holder`,`exerciseWithSol / exercise`,`Before expiry: strike and tokens swap hands, 0.1% fee, NFT burned`,`holder wallet`],[`Keeper`,`expire`,`At or after expiry: collateral back to seller, NFT burned`,`bot, or anyone`],[`Keeper`,`FeeVault.split`,`Once per 24h epoch: 30% stakers, 20% developer, 50% ops, all in WSOL`,`bot, or anyone`],[`Staker`,`stake / claim`,`Stake earns from next epoch, locked through first earning epoch`,`staker wallet`]];function Be(e){e.innerHTML=`
    <div class="page-head"><div><p class="kicker">How it flows</p><h1>Lock. Fill. Settle. Split.</h1>
    <p class="lede">Step through one option. Switch between a call and a put, and between an option that ends in the money and one that expires. The ledger shows who holds what after each step.</p></div></div>
    <div id="flow-mount"></div>
    <h2 style="margin-top:40px">Who calls what</h2>
    <p class="muted" style="margin:4px 0 14px">Every arrow above is one of these contract calls. The keeper is a bot for the chores anyone may do.</p>
    <table class="ledger"><thead><tr><th>Actor</th><th>Call</th><th>What moves</th><th>Who may call</th></tr></thead><tbody>
      ${ze.map(([e,t,n,r])=>`<tr><td>${e}</td><td>${t}()</td><td style="font-family:var(--sans)">${n}</td><td>${r}</td></tr>`).join(``)}
    </tbody></table>`,Re?.destroy();let t=new URLSearchParams(location.hash.split(`?`)[1]||``);Re=Fe(e.querySelector(`#flow-mount`),{step:+t.get(`step`)||1,side:[`call`,`put`].includes(t.get(`side`))?t.get(`side`):void 0,itm:t.has(`itm`)?t.get(`itm`)!==`0`:void 0})}var Ve={"":I,desk:I,write:le,book:he,stake:Ce,tape:Ee,proof:ke,flow:Le},Z=A(`#main`),Q=null;function He(){return location.hash.replace(/^#\/?/,``).split(`?`)[0]}async function Ue(e=!1){let t=He(),n=Ve[t]||I;if(w(`.sections a`).forEach(e=>e.dataset.route===t?e.setAttribute(`aria-current`,`page`):e.removeAttribute(`aria-current`)),!e&&Q===n&&!n.live||!e&&Q===n&&(Z.contains(document.activeElement)&&/INPUT|SELECT/.test(document.activeElement.tagName)||Z.querySelector(`dialog[open]`)))return;let r=scrollY,i=Q!==n;Q=n;try{await n.render(Z)}catch(e){Z.innerHTML=`<div class="empty">Could not load this page: ${m(e.message)}</div>`}i?(scrollTo(0,0),Z.focus({preventScroll:!0})):scrollTo(0,r)}function We(){let e=A(`#wallet`);h.account?(e.innerHTML=`<span class="mono" style="font-size:13px">${h.mode===`dev`?`dev · `:``}${S(h.account)}</span><button class="btn ghost sm" id="w-off">Disconnect</button>`,A(`#w-off`).onclick=n):(e.innerHTML=`<button class="btn sm" id="w-on">Connect wallet</button>`,A(`#w-on`).onclick=()=>d().catch(e=>_(e.message,`err`)))}function Ge(){if(!f())return;let e=A(`#devbar`);e.hidden=!1,e.innerHTML=`<span>LOCAL DEVNET</span>
    <select id="dev-acct" aria-label="Dev wallet"><option value="">— pick a test wallet —</option>${h.dep.devAccounts.map(e=>`<option value="${e.address}" ${h.account===e.address?`selected`:``}>${m(e.label)} ${S(e.address)}</option>`).join(``)}</select>
    <button class="btn" data-warp="3600">+1 hour</button><button class="btn" data-warp="86400">+1 day</button><button class="btn" data-warp="604800">+7 days</button>
    <button class="btn" id="dev-keeper">Run keeper once</button><span id="dev-log" class="muted"></span>`,A(`#dev-acct`).onchange=e=>e.target.value?ne(e.target.value):n(),w(`[data-warp]`,e).forEach(e=>e.onclick=async()=>{await t(+e.dataset.warp),_(`Time moved ${e.textContent}.`)}),A(`#dev-keeper`).onclick=async e=>{e.target.disabled=!0;let t=[];try{await ie(e=>t.push(e)),_(`Keeper: `+t.join(`, `),`ok`)}catch(e){_(e.shortMessage||e.message,`err`)}e.target.disabled=!1,l()}}async function $(e){try{await p(),A(`#block-no`).textContent=`slot ${E.head}`,A(`#edition-date`).textContent=new Date(E.now*1e3).toLocaleDateString(`en-GB`,{weekday:`short`,day:`numeric`,month:`short`,year:`numeric`}),await Ue(e)}catch(e){console.error(e)}}async function Ke(){try{await re()}catch(e){Z.innerHTML=`<div class="empty">${m(e.message)}</div>`;return}A(`#net-name`).textContent=h.chain.name,A(`#foot-contracts`).textContent=`call ${S(P().callMarket)} · put ${S(P().putMarket)} · nft ${S(P().nft)} · vault ${S(P().feeVault)}${P().hook?` · hook ${S(P().hook)}`:``}`,We(),Ge(),i(()=>{We();let e=A(`#dev-acct`);e&&(e.value=h.mode===`dev`?h.account:``),$(!0)}),addEventListener(`hashchange`,()=>Ue(!0)),await $(!0),setInterval(()=>$(!1),f()?4e3:12e3)}Ke();