(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[818],{55191:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return Q}});var a=n(85893),i=n(809),s=n.n(i),r=n(26265),u=n(92447),o=n(39227),l=n(67294),p=n(35312),c=n(30381),y=n.n(c),m=(n(9008),n(8568)),d=n(4914),f=n(11382),b=n(39144),x=n(41758),h=n(71230),T=n(15746),v=n(89588),w=n(19650),g=n(1474),j=n(85545),Z=n(82156),S=n(9643),M=n(38648),O=n(22867),C=n(75454),D=n(64848),k=n(31692),P=n.n(k),A=JSON.parse('{"Mt":[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"inputs":[],"name":"EmergencyAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"WelfareCommandCenterAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"bonusVault","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"deposits","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"geUnlockTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"globalDepositNumber","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"globalDepositTimeValue","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"globalDeposits","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"globalSSTaxDepositNumber","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"globalSSTaxDeposit_globalDepositTimeValue","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"globalSSTaxDeposits","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"globalSSTaxDepositsCollectedByPensioners","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"lastUpdateTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"time","type":"uint256"}],"name":"lock","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"ssTaxReceivingContract","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"ssVault","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"timePeriod","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"token","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSSVaults","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalTaxCollected","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalTaxCollectedByPensioners","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"unlock","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"userDeposits","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"userTotalDeposits","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_bonusvault","type":"address"}],"name":"updateBonusVault","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_welfareaddress","type":"address"}],"name":"updateWelfareAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_WelfareCommandCenter","type":"address"}],"name":"updateWelfareCommandCenter","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"getUserDeposits","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_depositamount","type":"uint256"},{"internalType":"uint256","name":"_timeLockUnits","type":"uint256"}],"name":"ssVaultDeposit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_depositamount","type":"uint256"},{"internalType":"uint256","name":"_timeLockUnits","type":"uint256"}],"name":"applyBonus","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_timeValueDepositAmount","type":"uint256"},{"internalType":"uint256","name":"_lastUpdate","type":"uint256"}],"name":"pullTaxShare","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_depositamount","type":"uint256"},{"internalType":"uint256","name":"_depositTimeValueAmount","type":"uint256"}],"name":"deductGlobalDeposits","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"getSSTaxReceivingContract","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"depositSSTax","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_depositamount","type":"uint256"},{"internalType":"uint256","name":"_timeLockUnits","type":"uint256"}],"name":"timeValueDepositAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"uint256","name":"_timeLockUnits","type":"uint256"}],"name":"timeValueMultiplier","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"pure","type":"function"},{"inputs":[],"name":"getGlobalSSTaxDepositNumber","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getReflectBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"sweepReflectBalance","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_globaldepositnumber","type":"uint256"}],"name":"settle","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"},{"internalType":"uint256","name":"_timeAtExpiration","type":"uint256"}],"name":"penaltyAdjusted","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}]}'),E=function(t){var e=(0,D.Z)(),n=(0,l.useState)({}),a=n[0],i=n[1];(0,l.useEffect)((function(){t?(P().setProvider(e.givenProvider),i(new(P())(A.Mt,t)),console.log("SOCIAL SECURITY ADDRESS",t)):console.log("SOCIAL SECURITY ADDRESS NOT SET")}),[t]);var r=function(){var t=(0,u.Z)(s().mark((function t(e){return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!a){t.next=4;break}return t.next=3,a.methods[e]().call();case 3:return t.abrupt("return",t.sent);case 4:return t.abrupt("return",!1);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),o=function(){var e=(0,u.Z)(s().mark((function e(n,i){var r,u,o,l,p=arguments;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!a){e.next=5;break}for(u=p.length,o=new Array(u>2?u-2:0),l=2;l<u;l++)o[l-2]=p[l];return e.next=4,(r=a.methods)[n].apply(r,o).send({from:i,to:t});case 4:return e.abrupt("return",e.sent);case 5:return e.abrupt("return",!1);case 6:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}();return[a.methods,e,r,o]},_=n(84312),V=n(85100);function B(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function U(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?B(Object(n),!0).forEach((function(e){(0,r.Z)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):B(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var W=m.Z.Title,R=m.Z.Text,N=function(t){t.onComplete,t.address;var e,n=(0,p.u)(),i=(0,_.Z)(["security","hasSecurity"]),c=(0,o.Z)(i,2),y=c[0],m=c[1],d=E(y.security),h=(0,o.Z)(d,2),T=h[0],g=h[1],Z=(0,V.Z)(y.welfare),S=(0,o.Z)(Z,1)[0],D=(0,l.useState)(0),k=D[0],P=D[1],A=(0,l.useState)(0),B=A[0],N=A[1],I=(0,l.useState)(!1),Y=(I[0],I[1],(0,l.useState)({months:0,amount:0,timelock:0})),L=Y[0],H=Y[1],z=(0,l.useState)(!1),G=z[0],F=z[1];(0,l.useEffect)((function(){y.hasSecurity&&T&&X()}),[L]),(0,l.useEffect)((function(){y.hasSecurity&&T&&J()}),[y]);var J=function(){var t=(0,u.Z)(s().mark((function t(){return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!S){t.next=8;break}return t.t0=P,t.t1=g.utils,t.next=5,S.balanceOf(n.account).call();case 5:t.t2=t.sent,t.t3=t.t1.fromWei.call(t.t1,t.t2,"gwei"),(0,t.t0)(t.t3);case 8:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),X=function(){var t=(0,u.Z)(s().mark((function t(){var e,n;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=g.utils.toWei((L.amount||0).toString(),"gwei").toString(),t.next=3,T.applyBonus(e,parseInt(L.months)).call();case 3:(n=t.sent)>0&&N(g.utils.fromWei(n,"gwei").toString());case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),q=function(){var t=(0,u.Z)(s().mark((function t(){var e,a;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(F(!0),t.prev=1,!(L.amount>0)){t.next=8;break}return e=g.utils.toWei(L.amount.toString(),"gwei").toString(),t.next=6,S.approve(y.security,e).send({from:n.account,to:y.security});case 6:(a=t.sent).status&&M.Z.success({message:"Approve Successful",description:a.transactionHash});case 8:t.next=12;break;case 10:t.prev=10,t.t0=t.catch(1);case 12:F(!1);case 13:case"end":return t.stop()}}),t,null,[[1,10]])})));return function(){return t.apply(this,arguments)}}(),K=function(){var t=(0,u.Z)(s().mark((function t(){var e;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return F(!0),t.prev=1,t.next=4,T.ssVaultDeposit(value,parseInt(L.months)).send({from:n.account,to:y.security});case 4:(e=t.sent).status&&(H({amount:0,months:0}),M.Z.success({message:"Deposit Successful",description:e.transactionHash}),m.addVaultCount()),t.next=10;break;case 8:t.prev=8,t.t0=t.catch(1);case 10:F(!1);case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(){return t.apply(this,arguments)}}();return(0,a.jsx)(f.Z,{spinning:G,children:(0,a.jsx)(b.Z,{title:"Vault Deposit",children:(0,a.jsxs)(O.Z,{size:"large",layout:"vertical",children:[(0,a.jsx)(v.Z,{title:"Balance",value:k}),(0,a.jsx)(O.Z.Item,{name:"vAmount",label:"Deposit Amount",rules:[{required:!0,message:"Enter deposit amount"}],children:(0,a.jsx)(j.Z,{type:"number",placeholder:"e.g 10000",value:L.amount,onChange:function(t){H(U(U({},L),{},{amount:parseInt(t.target.value)}))}})}),(0,a.jsxs)(O.Z.Item,(e={name:"vTimelock",label:"Time Lock"},(0,r.Z)(e,"name","timelock"),(0,r.Z)(e,"children",[(0,a.jsx)(C.Z,{min:1,max:88,defaultValue:1,value:L.months,onChange:function(t){H(U(U({},L),{},{months:t}))}}),(0,a.jsxs)(w.Z,{children:[(0,a.jsxs)(R,{children:[L.months," Month(s)"]}),(0,a.jsxs)(R,{children:[parseFloat(parseInt(L.months)/12).toFixed(1)," Year(s)"]})]})]),e)),(0,a.jsxs)(w.Z,{children:[(0,a.jsx)(x.Z,{size:"large",onClick:X,children:"Calculate"}),(0,a.jsx)(x.Z,{size:"large",onClick:q,children:"Approve"}),(0,a.jsx)(x.Z,{size:"large",type:"primary",onClick:K,children:"Deposit"})]}),(0,a.jsxs)(b.Z,{style:{marginTop:20,textAlign:"center"},children:[(0,a.jsx)(W,{level:3,type:"success",copyable:!0,strong:!0,children:B}),(0,a.jsxs)(R,{level:5,strong:!0,children:["You'll get after ",L.months," months"]})]})]})})})},I=n(27279),Y=JSON.parse('{"Mt":[{"inputs":[{"internalType":"contract SocialSecurity","name":"_pensioncontract","type":"address"},{"internalType":"address","name":"_pensioner","type":"address"},{"internalType":"uint256","name":"_depositamount","type":"uint256"},{"internalType":"uint256","name":"_timeLockUnits","type":"uint256"},{"internalType":"uint256","name":"_depositTimeValueAmount","type":"uint256"},{"internalType":"uint256","name":"_timeAtDeposit","type":"uint256"},{"internalType":"uint256","name":"_timeAtExpiration","type":"uint256"},{"internalType":"uint256","name":"_globalPensionTaxDepositNumber","type":"uint256"},{"internalType":"contract IERC20","name":"_token","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"inputs":[],"name":"depositTimeValueAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"depositamount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"geUnlockTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"lastUpdate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"time","type":"uint256"}],"name":"lock","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pensioner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"sscontract","outputs":[{"internalType":"contract SocialSecurity","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"timeAtDeposit","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"timeAtExpiration","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"timeLockUnits","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"token","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalTaxCollected","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"unlock","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"timeLeft","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pullTaxShare","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_lastUpdate","type":"uint256"}],"name":"pullTaxShareEmergency","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"emergencyWithdrawal","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"emergencyWithdrawalAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"reflectBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"withdrawReflectBalance","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"approveWithdrawal","outputs":[],"stateMutability":"nonpayable","type":"function"}]}'),L=function(){var t=(0,D.Z)(),e=(0,l.useState)({});e[0],e[1];(0,l.useEffect)((function(){P().setProvider(t.givenProvider)}),[]);var n=function(){var t=(0,u.Z)(s().mark((function t(e,n,a){var i,r,u,o,l,p,c=arguments;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:for(r=new(P())(Y.Mt,n),u=c.length,o=new Array(u>3?u-3:0),l=3;l<u;l++)o[l-3]=c[l];return t.next=4,(i=r.methods)[e].apply(i,o).send({from:a,to:n});case 4:(p=t.sent).status&&M.Z.success({message:"Transaction Successful",description:p.transactionHash});case 6:case"end":return t.stop()}}),t)})));return function(e,n,a){return t.apply(this,arguments)}}();return[function(){var e=(0,u.Z)(s().mark((function e(n){var a,i,r,u,o,l,p,c,m,d,f,b;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=new(P())(Y.Mt,n),e.next=3,a.methods.pensioner().call();case 3:return i=e.sent,e.next=6,a.methods.depositamount().call();case 6:return r=e.sent,e.next=9,a.methods.depositTimeValueAmount().call();case 9:return u=e.sent,e.next=12,a.methods.emergencyWithdrawalAmount().call();case 12:return o=e.sent,e.next=15,a.methods.lastUpdate().call();case 15:return l=e.sent,e.next=18,a.methods.reflectBalance().call();case 18:return p=e.sent,e.next=21,a.methods.timeAtDeposit().call();case 21:return c=e.sent,e.next=24,a.methods.timeAtExpiration().call();case 24:return m=e.sent,e.next=27,a.methods.timeLeft().call();case 27:return d=e.sent,e.next=30,a.methods.timeLockUnits().call();case 30:return f=e.sent,e.next=33,a.methods.totalTaxCollected().call();case 33:return b=e.sent,e.abrupt("return",{pensioner:i,depositamount:t.utils.fromWei(r,"gwei"),depositTimeValueAmount:t.utils.fromWei(u,"gwei"),emergencyWithdrawalAmount:t.utils.fromWei(o,"gwei"),lastUpdateTime:y().unix(l).format("MM/DD/YYYY HH:mm"),lastUpdate:l,reflectBalance:p,timeAtDeposit:y().unix(c).format("MM/DD/YYYY HH:mm"),timeAtExpiration:y().unix(m).format("MM/DD/YYYY HH:mm"),timeLeft:y()().add(d,"seconds").diff(y()(),"days")+" days",timeLockUnits:f,totalTaxCollected:b});case 35:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),n]};function H(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function z(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?H(Object(n),!0).forEach((function(e){(0,r.Z)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):H(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function G(t,e){var n;if("undefined"===typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(n=function(t,e){if(!t)return;if("string"===typeof t)return F(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return F(t,e)}(t))||e&&t&&"number"===typeof t.length){n&&(t=n);var a=0,i=function(){};return{s:i,n:function(){return a>=t.length?{done:!0}:{done:!1,value:t[a++]}},e:function(t){throw t},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var s,r=!0,u=!1;return{s:function(){n=t[Symbol.iterator]()},n:function(){var t=n.next();return r=t.done,t},e:function(t){u=!0,s=t},f:function(){try{r||null==n.return||n.return()}finally{if(u)throw s}}}}function F(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,a=new Array(e);n<e;n++)a[n]=t[n];return a}m.Z.Title,m.Z.Text;var J=function(t){t.onComplete,t.address;var e=(0,p.u)(),n=L(),i=(0,o.Z)(n,2),r=i[0],c=i[1],y=(0,_.Z)(["security","hasSecurity","vaultCount"]),m=(0,o.Z)(y,2),d=m[0],g=(m[1],E(d.security)),j=(0,o.Z)(g,2),Z=j[0],S=j[1],O=(0,l.useState)([]),C=O[0],D=O[1],k=(0,l.useState)({}),P=k[0],A=k[1],V=(0,l.useState)(0),B=V[0],U=V[1],W=(0,l.useState)(!1),R=W[0],N=W[1],Y=(0,l.useState)(!1),H=Y[0],F=Y[1];(0,l.useEffect)((function(){Z&&d.hasSecurity&&J(!1)}),[Z,d.security,d.vaultCount]);var J=function(){var t=(0,u.Z)(s().mark((function t(){var n,a,i,u,o,l,p,c,y;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return N(!0),t.next=3,Z.userTotalDeposits(e.account).call();case 3:return n=t.sent,t.next=6,Z.getUserDeposits(e.account).call();case 6:a=t.sent,D(a),i={},u=G(a),t.prev=10,u.s();case 12:if((o=u.n()).done){t.next=27;break}return l=o.value,t.next=16,Z.deposits(l).call();case 16:return p=t.sent,t.next=19,r(p);case 19:return c=t.sent,t.next=22,Z.ssVault(p).call();case 22:y=t.sent,console.log("DP STATUS",y),i[l]=z({status:y?"Active":"Inactive",address:p},c);case 25:t.next=12;break;case 27:t.next=32;break;case 29:t.prev=29,t.t0=t.catch(10),u.e(t.t0);case 32:return t.prev=32,u.f(),t.finish(32);case 35:A(i),U(n),F(!0),N(!1);case 39:case"end":return t.stop()}}),t,null,[[10,29,32,35]])})));return function(){return t.apply(this,arguments)}}(),X=function(){var t=(0,u.Z)(s().mark((function t(n){var a;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Z.settle(n).send({from:e.account,to:d.security});case 2:(a=t.sent).status&&M.Z.success({message:"Settlement Successful",description:a.transactionHash});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return(0,a.jsx)(f.Z,{spinning:R,children:(0,a.jsxs)(b.Z,{title:"Pensioner Deposits",extra:(0,a.jsx)(x.Z,{onClick:J,children:"Refresh"}),children:[(0,a.jsxs)(h.Z,{style:{marginBottom:20},children:[(0,a.jsx)(T.Z,{span:12,children:(0,a.jsx)(v.Z,{title:"Total Deposits",value:S.utils.fromWei(B.toString(),"gwei")})}),(0,a.jsx)(T.Z,{span:12,children:(0,a.jsx)(v.Z,{title:"Total Vaults",value:Object.keys(P).length})})]}),H&&C.map((function(t,n){return void 0==P[t]?null:(0,a.jsx)("div",{children:(0,a.jsx)(I.Z,{children:(0,a.jsx)(I.Z.Panel,{header:"".concat(P[t].address," - ").concat(P[t].depositamount),children:(0,a.jsxs)(h.Z,{style:{marginTop:10},gutter:[20,20],children:[(0,a.jsxs)(T.Z,{span:24,children:[(0,a.jsxs)(w.Z,{size:"small",children:[(0,a.jsx)(x.Z,{type:"primary",onClick:function(){return X(t)},children:"Settle"}),(0,a.jsx)(x.Z,{type:"primary",onClick:function(){return c("withdrawReflectBalance",P[t].address,e.account)},children:"Withdraw Reflect Balance"}),(0,a.jsx)(x.Z,{type:"primary",onClick:function(){return c("pullTaxShare",P[t].address,e.account)},children:"Pull Tax Share"}),(0,a.jsx)(x.Z,{type:"primary",onClick:function(){return c("pullTaxShareEmergency",P[t].address,e.account,P[t].lastUpdate)},children:"Pull Tax Emergency"}),(0,a.jsx)(x.Z,{type:"danger",onClick:function(){return c("emergencyWithdrawal",P[t].address,e.account)},children:"Emergency Withdrawal"})]}),(0,a.jsx)(w.Z,{children:(0,a.jsx)(x.Z,{children:"Load All Data"})})]}),(0,a.jsx)(T.Z,{span:12,children:(0,a.jsx)(v.Z,{title:"Deposit Number",value:t})}),Object.keys(P[t]).map((function(e,n){return(0,a.jsx)(T.Z,{span:P[t][e].toString().startsWith("0x")?24:8,children:(0,a.jsx)(v.Z,{title:e.toUpperCase(),value:P[t][e],precision:4,style:{marginBottom:20}})},"".concat(t,"-").concat(n))}))]})},t)})})}))]})})};function X(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function q(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?X(Object(n),!0).forEach((function(e){(0,r.Z)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):X(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var K=m.Z.Title,$=m.Z.Text;d.Z.Item;function Q(){var t=(0,p.u)(),e=(0,l.useState)(!1),n=(e[0],e[1],(0,_.Z)(["chain","security","hasSecurity","vault","hasVault"])),i=(0,o.Z)(n,2),r=i[0],c=i[1],y=E(r.security),m=(0,o.Z)(y,4),d=(m[0],m[1],m[2]),M=m[3],O=(0,l.useState)(!1),C=(O[0],O[1],(0,l.useState)({})),D=C[0],k=C[1],P=(0,l.useState)(0),A=(P[0],P[1],(0,l.useState)(!1)),V=A[0],B=A[1];(0,l.useEffect)((function(){"connected"==t.status&&r.hasSecurity&&U()}),[t,r]);var U=function(){var t=(0,u.Z)(s().mark((function t(){var e,n,a,i,r,u,o,l,p,y,m,f,b,x;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return B(!0),console.log("GET INFO"),t.next=4,d("owner");case 4:return e=t.sent,t.next=7,d("timePeriod");case 7:return n=t.sent,t.next=10,d("ssTaxReceivingContract");case 10:return a=t.sent,t.next=13,d("globalDepositNumber");case 13:return i=t.sent,t.next=16,d("globalDepositTimeValue");case 16:return r=t.sent,t.next=19,d("globalSSTaxDepositNumber");case 19:return u=t.sent,t.next=22,d("totalTaxCollected");case 22:return o=t.sent,t.next=25,d("totalSSVaults");case 25:return l=t.sent,t.next=28,d("totalTaxCollectedByPensioners");case 28:return p=t.sent,t.next=31,d("token");case 31:return y=t.sent,t.next=34,d("bonusVault");case 34:return m=t.sent,t.next=37,d("EmergencyAddress");case 37:return f=t.sent,t.next=40,d("WelfareCommandCenterAddress");case 40:return b=t.sent,t.next=43,d("getReflectBalance");case 43:x=t.sent,k(q(q({},D),{},{owner:e,timePeriod:n,ssTaxReceivingContract:a,globalDepositNumber:i,globalSSTaxDepositNumber:u,globalDepositTimeValue:r,totalTaxCollected:o,totalSSVaults:l,totalTaxCollectedByPensioners:p,token:y,bonusVault:m,emergencyAddress:f,welfareAddress:b,reflectBalance:x})),c.setCenter(b),c.setBonus(m),c.setWelfare(y),B(!1);case 49:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),W=(0,l.useCallback)((function(){return(0,a.jsx)(f.Z,{spinning:V,children:(0,a.jsx)(b.Z,{title:"Pension Contract",extra:(0,a.jsx)(x.Z,{type:"primary",onClick:U,children:"Refresh"}),children:(0,a.jsxs)(h.Z,{gutter:[20,20],children:[(0,a.jsx)(T.Z,{span:8,children:(0,a.jsx)(v.Z,{title:"Global Deposit Number",value:D.globalDepositNumber})}),(0,a.jsx)(T.Z,{span:8,children:(0,a.jsx)(v.Z,{title:"Global Deposit Time Value",value:D.globalDepositTimeValue})}),(0,a.jsx)(T.Z,{span:8,children:(0,a.jsx)(v.Z,{title:"Time Period",value:"".concat(D.timePeriod/60/60/24," days")})}),(0,a.jsx)(T.Z,{span:8,children:(0,a.jsx)(v.Z,{title:"Total Pension Vaults",value:D.totalSSVaults})}),(0,a.jsx)(T.Z,{span:8,children:(0,a.jsx)(v.Z,{title:"Reflect Balance",value:D.reflectBalance})}),(0,a.jsx)(T.Z,{span:8,children:(0,a.jsx)(v.Z,{title:"Tax Deposit Number",value:D.globalSSTaxDepositNumber})}),(0,a.jsx)(T.Z,{span:8,children:(0,a.jsx)(v.Z,{title:"Total Collected Tax",value:D.totalTaxCollected})}),(0,a.jsx)(T.Z,{span:8,children:(0,a.jsx)(v.Z,{title:"Tax Collected By Pensioners",value:D.totalTaxCollectedByPensioners})}),(0,a.jsx)(T.Z,{span:12,children:(0,a.jsx)(v.Z,{title:"Owner",value:D.owner})}),(0,a.jsx)(T.Z,{span:12,children:(0,a.jsx)(v.Z,{title:"Welfare Token",value:D.token})}),(0,a.jsx)(T.Z,{span:12,children:(0,a.jsx)(v.Z,{title:"Command Center",value:D.welfareAddress})}),(0,a.jsx)(T.Z,{span:12,children:(0,a.jsx)(v.Z,{title:"Vault",value:D.bonusVault})}),(0,a.jsx)(T.Z,{span:12,children:(0,a.jsx)(v.Z,{title:"Emergency",value:D.emergencyAddress})}),(0,a.jsx)(T.Z,{span:12,children:(0,a.jsx)(v.Z,{title:"Social Security Receiving Contract",value:D.ssTaxReceivingContract})})]})})})}),[D,V]);return(0,a.jsx)(S.Z,{children:(0,a.jsxs)("div",{style:{padding:"20px 0px"},children:[(0,a.jsx)(K,{level:2,children:"Social Security"}),(0,a.jsxs)(w.Z,{style:{marginBottom:20},size:"large",children:[(0,a.jsx)(x.Z,{onClick:c.setMainnet,children:"Mainnet"}),(0,a.jsx)(x.Z,{onClick:c.setTestnet,children:"Testnet"}),(0,a.jsxs)($,{children:["Current Network: ",(0,a.jsx)("strong",{children:"56"==r.chain?"Mainnet":"Testnet"})]}),"97"==r.chain&&(0,a.jsxs)("div",{children:["Test Pension: ",(0,a.jsx)($,{copyable:!0,children:"0x5d09f5E94f8f2cAb11DB1A7D1C71cdd80E7c0e69"})]}),"connected"==t.status&&(0,a.jsx)($,{copyable:!0,children:t.account})]}),"connected"!=t.status&&(0,a.jsx)(g.Z,{message:"Connect Wallet",description:"Please connect your wallet",type:"error",showIcon:!0,closable:!0,style:{marginBottom:20}}),(0,a.jsx)(j.Z.Search,{placeholder:"Contract Address",allowClear:!0,enterButton:"Connect",size:"large",onChange:function(t){return c.setSecurity(t.target.value)},onSearch:function(){return t.connect()}}),r.hasSecurity&&"connected"==t.status&&(0,a.jsxs)("div",{children:[(0,a.jsxs)(w.Z,{style:{marginTop:20},children:[(0,a.jsx)(x.Z,{size:"large",type:"primary",onClick:function(){return M("depositSSTax",t.account)},children:"Deposit Tax"}),(0,a.jsx)(x.Z,{size:"large",type:"primary",onClick:function(){return M("sweepReflectBalance",t.account)},children:"Sweep Reflect Balance"})]}),(0,a.jsxs)(Z.Z,{defaultActiveKey:"dashboard",style:{marginTop:20},children:[(0,a.jsx)(Z.Z.TabPane,{tab:"Pensioner Dashboard",children:(0,a.jsxs)(h.Z,{gutter:20,style:{marginTop:"10px",marginBottom:"30px"},children:[(0,a.jsx)(T.Z,{xs:8,children:(0,a.jsx)(N,{})}),(0,a.jsx)(T.Z,{xs:16,children:(0,a.jsx)(J,{})})]})},"dashboard"),(0,a.jsx)(Z.Z.TabPane,{tab:"Contract Details",children:W()},"details")]})]})]})})}},78581:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(55191)}])}},function(t){t.O(0,[774,885,351,255,26,579,580,144,39,191],(function(){return e=78581,t(t.s=e);var e}));var e=t.O();_N_E=e}]);