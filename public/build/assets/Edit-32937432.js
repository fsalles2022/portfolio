import{T as f,o as _,f as g,a as e,u as t,w as m,F as b,Z as x,b as a,e as h,n as k,d as v,O as $}from"./app-423dc6b0.js";import{_ as w}from"./AuthenticatedLayout-0f6a9afb.js";import{_ as r,a as d,b as y}from"./Label-5c570578.js";import{_ as c}from"./InputError-4fb641f2.js";import"./ApplicationLogo-731712f3.js";import"./_plugin-vue_export-helper-c27b6911.js";const V=a("h2",{class:"font-semibold text-xl text-gray-800 leading-tight"}," Editar Skill ",-1),E={class:"py-12"},N={class:"max-w-md mx-auto sm:px-6 lg:px-8 bg-white"},S=["onSubmit"],B={class:"mt-2"},O={class:"flex items-center justify-end mt-4"},A={__name:"Edit",props:{skill:Object},setup(p){const i=p,s=f({name:i.skill.name,image:null}),u=()=>{$.post(`/skills/${i.skill.id}`,{_method:"put",name:s.name,image:s.image})};return(n,l)=>(_(),g(b,null,[e(t(x),{title:"Editar Skill"}),e(w,null,{header:m(()=>[V]),default:m(()=>[a("div",E,[a("div",N,[a("form",{class:"p-4",onSubmit:h(u,["prevent"])},[a("div",null,[e(r,{for:"name",value:"Name"}),e(d,{id:"name",type:"text",class:"mt-1 block w-full",modelValue:t(s).name,"onUpdate:modelValue":l[0]||(l[0]=o=>t(s).name=o),autofocus:"",autocomplete:"username"},null,8,["modelValue"]),e(c,{class:"mt-2",message:n.$page.props.errors.name},null,8,["message"])]),a("div",B,[e(r,{for:"image",value:"Image"}),e(d,{id:"image",type:"file",class:"mt-1 block w-full",onInput:l[1]||(l[1]=o=>t(s).image=o.target.files[0])}),e(c,{class:"mt-2",message:n.$page.props.errors.image},null,8,["message"])]),a("div",O,[e(y,{class:k(["ml-4",{"opacity-25":t(s).processing}]),disabled:t(s).processing},{default:m(()=>[v(" Atualizar ")]),_:1},8,["class","disabled"])])],40,S)])])]),_:1})],64))}};export{A as default};
