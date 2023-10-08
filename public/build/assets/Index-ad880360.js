import{_ as h}from"./AuthenticatedLayout-0f6a9afb.js";import{o as r,f as l,a as s,u as o,w as a,F as n,Z as u,b as t,j as d,d as c,B as _,t as p}from"./app-423dc6b0.js";import"./ApplicationLogo-731712f3.js";import"./_plugin-vue_export-helper-c27b6911.js";const m=t("h2",{class:"font-semibold text-xl text-gray-800 leading-tight"}," Skills ",-1),f={class:"py-12"},g={class:"max-w-7xl mx-auto sm:px-6 lg:px-8"},y={class:"flex justify-end m-2 p-2"},b={class:"overflow-x-auto relative"},k={class:"w-full text-sm text-left text-gray-500 dark:text-gray-400"},w=t("thead",{class:"text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"},[t("tr",null,[t("th",{scope:"col",class:"py-3 px-6"},"ID"),t("th",{scope:"col",class:"py-3 px-6"}," Nome Skill "),t("th",{scope:"col",class:"py-3 px-6"},"Image"),t("th",{scope:"col",class:"py-3 px-6"},"Ação")])],-1),v={scope:"row",class:"py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"},N={class:"py-4 px-6"},S={class:"py-4 px-6"},B=["src"],I={class:"py-4 px-6"},A={__name:"Index",props:{skills:Object},setup(x){return(i,j)=>(r(),l(n,null,[s(o(u),{title:"Skills Index"}),s(h,null,{header:a(()=>[m]),default:a(()=>[t("div",f,[t("div",g,[t("div",y,[s(o(d),{href:"/skills/create",class:"px-4 py-2 bg-indigo-500 hover:bg-indigo-700 text-white rounded-md"},{default:a(()=>[c("Nova Skill")]),_:1})]),t("div",b,[t("table",k,[w,t("tbody",null,[(r(!0),l(n,null,_(x.skills.data,e=>(r(),l("tr",{key:e.id,class:"bg-white border-b dark:bg-gray-800 dark:border-gray-700"},[t("th",v,p(e.id),1),t("td",N,p(e.name),1),t("td",S,[t("img",{src:e.image,class:"w-12 h-12 rounded-full"},null,8,B)]),t("td",I,[s(o(d),{href:i.route("skills.edit",e.id),class:"font-medium text-blue-500 hover:text-blue-700 mr-2"},{default:a(()=>[c("Editar")]),_:2},1032,["href"]),s(o(d),{href:i.route("skills.destroy",e.id),method:"delete",as:"button",type:"button",class:"font-medium text-red-500 hover:text-red-700 mr-2"},{default:a(()=>[c("Deletar")]),_:2},1032,["href"])])]))),128))])])])])])]),_:1})],64))}};export{A as default};
