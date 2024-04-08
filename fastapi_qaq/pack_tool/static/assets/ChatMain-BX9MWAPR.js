import{d as m,c as D,a as l,F as $,r as A,o as s,t as k,b as d,e,f as w,g as S,w as y,v as _,u as T,i as C,h as p,j as x,k as B,n as P}from"./index-Bj_kMlcw.js";import{_ as G}from"./ChatLine.vue_vue_type_script_setup_true_lang-CO37GGNQ.js";const L={class:"view-content mb-28 w-full"},I={key:0,text:"4"},K={class:"group text-5 w-full px-3 py-2 border bg-gray-1 rounded box-border hover:bg-gray-2 relative"},U=e("div",{class:"absolute right-0 top-0 py-2 pr-3 flex items-center opacity-0 group-hover:opacity-100 invisible group-hover:visible"},[e("span",{class:"cursor-pointer text-sm text-blue-500 mr-2"},"編輯"),e("span",{class:"cursor-pointer text-sm text-red-500"},"刪除")],-1),Z=m({__name:"ChatHistory",props:{chatHistories:{}},setup(g){const t=g,r=D(()=>t.chatHistories.map((i,n,o)=>{var h;return{...i,showUpdate:n===0||i.update!==((h=o[n-1])==null?void 0:h.update)}}));return(i,n)=>(s(),l("div",L,[(s(!0),l($,null,A(r.value,o=>(s(),l("div",{key:o.idx,class:"pt-2 px-3"},[o.showUpdate?(s(),l("label",I,k(o.update),1)):d("",!0),e("div",K,[w(k(o.title)+" ",1),U])]))),128))]))}}),j={class:"view-content mb-28 w-full h-full pt-9px"},N=S('<div class="mb-2 p-4 h-auto w-90% mx-auto bg-gray-1 rounded-5 hover:bg-gray-2"><label class="text-4">聊天主題</label><input class="w-full text-4 px-3 py-2 border-none rounded box-border bg-gray-1 hover:bg-white" placeholder="請輸入主題 十二字以內"></div><div class="mb-2 p-4 h-auto w-90% mx-auto bg-gray-1 rounded-5 hover:bg-gray-2"><label class="text-4">語言模型</label><select class="w-full text-4 px-3 py-2 border-none rounded box-border bg-gray-1 hover:bg-white"><option value="">GPT-4</option><option value="">GPT-4 Tubo</option><option value="">GPT-3.5 Tubo</option></select></div><div class="mb-2 p-4 w-90% mx-auto flex items-center justify-center bg-gray-1 rounded-5 hover:bg-gray-2 cursor-pointer"> Save<span class="i-heroicons-outline:save mr-2 ml-1">save</span></div>',3),F=[N],M=m({__name:"AddChat",setup(g){return(t,r)=>(s(),l("div",j,F))}}),z={class:"view-content mb-28 w-full h-full pt-9px"},E=e("div",{class:"mb-2 p-4 h-auto w-90% mx-auto bg-gray-1 rounded-5 hover:bg-gray-2"},[e("label",{class:"text-4"},"您的名稱"),e("input",{class:"w-full text-4 px-3 py-2 border-none rounded box-border bg-gray-1 hover:bg-white",placeholder:"請輸入名稱"})],-1),R={class:"mb-2 p-4 h-auto w-90% mx-auto bg-gray-1 rounded-5 hover:bg-gray-2"},q=e("label",{class:"text-4"},"聊天主題",-1),J=S('<div class="mb-2 p-4 h-auto w-90% mx-auto bg-gray-1 rounded-5 hover:bg-gray-2"><label class="text-4">語言模型</label><select class="w-full text-4 px-3 py-2 border-none rounded box-border bg-gray-1 hover:bg-white"><option value="">GPT-4</option><option value="">GPT-4 Tubo</option><option value="">GPT-3.5 Tubo</option></select></div>',1),O={class:"mb-2 p-4 w-90% mx-auto bg-gray-1 rounded-5 hover:bg-gray-2"},Q=e("label",{class:"text-4"},"System prompt",-1),W=e("div",{class:"mb-2 p-4 w-90% mx-auto flex items-center justify-center bg-gray-1 rounded-5 hover:bg-gray-2 cursor-pointer"},[w(" Save"),e("span",{class:"i-heroicons-outline:save mr-2 ml-1"},"save")],-1),X=m({__name:"ChatSetting",setup(g){let t="這是一個Chat Bot .....",r="你是一個AI專業工程師";return(i,n)=>(s(),l("div",z,[E,e("div",R,[q,y(e("input",{class:"w-full text-4 px-3 py-2 border-none rounded box-border bg-gray-1 hover:bg-white",placeholder:"請輸入名稱","onUpdate:modelValue":n[0]||(n[0]=o=>C(t)?t.value=o:t=o)},null,512),[[_,T(t)]])]),J,e("div",O,[Q,y(e("textarea",{class:"w-full text-4 h-100px px-3 py-2 border-none rounded box-border bg-gray-1 hover:bg-white","onUpdate:modelValue":n[1]||(n[1]=o=>C(r)?r.value=o:r=o)},null,512),[[_,T(r)]])]),W]))}}),Y={class:"fixed bottom-5 right-5"},ee={key:0,class:"chat-view w-500px min-w-470px h-570px rounded-[10px] bg-[#a068df] absolute bottom-0 right-[70px] overflow-hidden border-2 border-gray shadow-xl z-[1005]"},te={class:"view-head flex items-center justify-between w-full h-75px bg-[#1c98f7] line-height-75px color-white absolute text-20px"},oe=e("div",{class:"flex-grow text-center"},"Chat Bot",-1),se={class:"flex text-white cursor-pointer"},re={class:"view-info w-full h-495px bg-white text-left absolute top-75px left-0"},ae={class:"send-msg flex items-center w-full p-3 bg-gray-2 border-t border-[#D0D0D0] absolute bottom-0 left-0"},ne=m({__name:"ChatMain",setup(g){const t=p("chatLine"),r=c=>{t.value=c,u.value&&(u.value.scrollTop=0)},i=p([{id:1,idx:0,msg:"我是機器人阿寶，請問有什麼我可以幫助你的呢？",type:"bot",create:"2022-10-01T12:00:00Z"},{id:2,idx:1,msg:"現在最新的AI應用",type:"user",create:"2022-10-01T12:02:00Z"},{id:3,idx:2,msg:"最新的AI應用有許多......",type:"bot",create:"2022-10-01T12:03:00Z"},{id:4,idx:3,msg:"現在最新的AI應用",type:"user",create:"2022-10-01T12:02:00Z"},{id:5,idx:4,msg:"最新的AI應用有許多......",type:"bot",create:"2022-10-01T12:03:00Z"}]),n=p([{id:1,idx:0,title:"History Title 1",update:"今天"},{id:2,idx:1,title:"History Title 2",update:"今天"},{id:3,idx:2,title:"History Title 3",update:"昨天"}]),o=p(!0),h=()=>{o.value=!o.value},v=p(""),u=p(null),f=()=>{if(v.value.trim()==="")return;const c={id:i.value.length,idx:i.value.length,msg:v.value.trim(),type:"user",create:"下午 08:20"},a={id:i.value.length+1,idx:i.value.length+1,msg:"",type:"bot",create:""};i.value.push(c,a),v.value="",H()},H=()=>{P(()=>{u.value&&(u.value.scrollTop=u.value.scrollHeight)})},V=c=>{!c.ctrlKey&&!c.shiftKey&&!c.altKey&&(c.preventDefault(),f())};return(c,a)=>(s(),l($,null,[w(" 這是一個客服機器人.... "),e("div",Y,[e("div",{onClick:h,class:"i-cryptocurrency-color:chat w-3em h-3em"}),o.value?(s(),l("div",ee,[e("div",te,[oe,e("div",se,[t.value!=="chatLine"?(s(),l("div",{key:0,onClick:a[0]||(a[0]=b=>r("chatLine")),class:"i-ph:key-return-bold p-5px mr-2"})):d("",!0),t.value!=="chatHistory"?(s(),l("div",{key:1,class:"i-gg:list p-5px mr-2",onClick:a[1]||(a[1]=b=>r("chatHistory"))})):d("",!0),t.value!=="addChat"?(s(),l("div",{key:2,onClick:a[2]||(a[2]=b=>r("addChat")),class:"i-ci:chat-add p-5px mr-2"})):d("",!0),t.value!=="chatSetting"?(s(),l("div",{key:3,class:"i-uil:setting p-5px mr-3",onClick:a[3]||(a[3]=b=>r("chatSetting"))})):d("",!0),e("div",{class:"view-close i-mdi:close-thick p-5px mr-9px border-rounded-10 text-center",onClick:h})])]),e("div",re,[e("div",{class:"view-list w-full h-500px overflow-y-scroll",ref_key:"chatScrollDiv",ref:u},[t.value==="chatLine"?(s(),x(G,{key:0,"chat-lines":i.value},null,8,["chat-lines"])):d("",!0),t.value==="chatHistory"?(s(),x(Z,{key:1,"chat-histories":n.value},null,8,["chat-histories"])):d("",!0),t.value==="addChat"?(s(),x(M,{key:2})):d("",!0),t.value==="chatSetting"?(s(),x(X,{key:3})):d("",!0)],512)]),e("div",ae,[y(e("textarea",{"onUpdate:modelValue":a[4]||(a[4]=b=>v.value=b),placeholder:"請輸入想要問的問題",class:"flex-grow bg-gray-1 max-w-412px rounded-lg border-none p-2 outline-none mr-3 focus:outline-white focus:bg-white",onKeyup:B(V,["enter"])},null,544),[[_,v.value]]),e("div",{onClick:f,class:"i-streamline:send-email-solid text-[#1c98f7] w-6 h-6 flex-shrink-0 cursor-pointer hover:bg-sky-600"})])])):d("",!0)])],64))}});export{ne as default};