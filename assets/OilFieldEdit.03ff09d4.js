import{_ as p}from"./OilFieldForm.bf349c49.js";import{c as f,a as g,b as t,w as o,F as h,r as s,o as A,d as B,e as b,i as k,k as x,u as C,n as r}from"./index.6b71fbdf.js";const F=b(" \u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C "),$={__name:"OilFieldEdit",setup(y){const i=k(),d=x(),c=C(),n=f(()=>+d.params.id);function u(a){c.dispatch("field/editWellItem",{data:a,id:n.value}).then(()=>{r.success({message:"\u0421\u043A\u0432\u0430\u0436\u0438\u043D\u0430 \u0443\u0441\u043F\u0435\u0448\u043D\u043E \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0430"}),i.push({name:"OilFieldMain"})}).catch(e=>{r.error({message:`\u041F\u0440\u043E\u0438\u0437\u043E\u0448\u043B\u0430 \u043E\u0448\u0438\u0431\u043A\u0430 - ${e}`})})}return(a,e)=>{const l=s("AButton"),m=s("APageHeader"),_=s("ACard");return A(),g(h,null,[t(m,{title:"\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0441\u043A\u0432\u0430\u0436\u0438\u043D\u0443",onBack:e[0]||(e[0]=()=>a.$router.go(-1)),ghost:!1},{extra:o(()=>[t(l,{type:"primary",size:"large","html-type":"submit",form:"oil_field_form"},{default:o(()=>[F]),_:1})]),_:1}),t(_,{class:"card"},{default:o(()=>[t(p,{onSubmit:u,"data-id":B(n)},null,8,["data-id"])]),_:1})],64)}}};export{$ as default};