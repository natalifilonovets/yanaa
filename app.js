const data=[
  [
    "Let’s meet ___, near the main square.",
    "downtown",
    "outside",
    "",
    "Downtown — у центрі міста або в напрямку до нього.",
    "центр міста"
  ],
  [
    "This tropical fruit has a spiky skin: ___.",
    "pineapple",
    "ginger",
    "",
    "Pineapple — ананас, тропічний фрукт із твердою шкіркою та солодким жовтим м’якушем.",
    "ананас"
  ],
  [
    "The recipe calls for small ___.",
    "shrimps",
    "mushrooms",
    "",
    "Shrimps — креветки, невеликі ракоподібні, яких вживають як морепродукти.",
    "криветки"
  ],
  [
    "We ordered grilled ___ with lemon.",
    "prawns",
    "sausages",
    "",
    "Prawns — креветки. Слова prawns і shrimps часто позначають схожі морепродукти.",
    "криветки"
  ],
  [
    "To cook the eggs, ___ them in water.",
    "boil",
    "chop",
    "",
    "Boil — кип’ятити рідину або варити їжу в киплячій воді.",
    "варити, кип'ятити"
  ],
  [
    "When I have no time to cook, I buy ___.",
    "ready-made food",
    "fresh fruit",
    "",
    "Ready-made food — готова їжа, яку можна їсти одразу або після розігрівання.",
    "готова їжа, напівфабрикати"
  ],
  [
    "My shift is always from nine to five: I ___.",
    "work fixed hours",
    "have flexible hours",
    "",
    "Work fixed hours — працювати за фіксованим графіком: починати й закінчувати роботу у визначений час.",
    "працювати за фіксованим графіком"
  ],
  [
    "I can decide when to start and finish: I ___.",
    "have flexible hours",
    "work fixed hours",
    "",
    "Have flexible hours — мати гнучкий графік і можливість обирати час початку та завершення роботи.",
    "мати гнучкий графік"
  ],
  [
    "The shop assistant helped a ___ choose a jacket.",
    "customer",
    "schedule",
    "",
    "Customer — клієнт або покупець, який купує товари чи послуги.",
    "клієнт, покупець"
  ],
  [
    "Our shifts both start at nine and end at five: we ___.",
    "work the same hours",
    "work different hours",
    "",
    "Work the same hours — працювати в ті самі години, наприклад починати й закінчувати роботу одночасно з іншою людиною.",
    "працювати в ті самі години"
  ],
  [
    "There are two dishes on the menu. Which one will you ___?",
    "choose",
    "rinse",
    "",
    "Choose — вибирати щось із кількох доступних варіантів.",
    "вибирати"
  ],
  [
    "Check your ___ to see when your next shift starts.",
    "schedule",
    "jar",
    "",
    "Schedule — розклад або графік, який показує час подій, занять чи робочих змін.",
    "розклад, графік"
  ],
  [
    "For this dish, roast a purple ___.",
    "eggplant",
    "pineapple",
    "",
    "Eggplant — баклажан, овоч, зазвичай із блискучою фіолетовою шкіркою. У британській англійській його називають aubergine.",
    "баклажани"
  ],
  [
    "Add a little fresh ___ for a warm, spicy taste.",
    "ginger",
    "pork",
    "",
    "Ginger — імбир, корінь із пряним, трохи пекучим смаком, який додають до страв і напоїв.",
    "імбир"
  ],
  [
    "Before bed, she drinks a cup of ___.",
    "camomile tea",
    "coffee",
    "",
    "Camomile tea — ромашковий чай, напій із висушених квітів ромашки.",
    "ромашковий чай"
  ],
  [
    "Use a knife to ___ the onion into small pieces.",
    "chop",
    "boil",
    "",
    "Chop — нарізати або кришити їжу ножем на невеликі шматочки.",
    "нарізати, кришити"
  ],
  [
    "Before cooking, ___ the rice under running water.",
    "rinse",
    "cover",
    "",
    "Rinse — полоскати або промивати щось чистою водою.",
    "полоскати, промивати"
  ],
  [
    "Use a spoon to ___ the soup.",
    "stir",
    "chop",
    "",
    "Stir — перемішувати їжу чи рідину ложкою або іншим кухонним приладдям.",
    "перемішувати"
  ],
  [
    "Meat from a pig is called ___.",
    "pork",
    "beef",
    "",
    "Pork — свинина, тобто м’ясо свині. Топлений свинячий жир англійською зазвичай називають lard.",
    "свинина, сало"
  ],
  [
    "For breakfast, I cook oats with milk to make ___.",
    "porridge",
    "salad",
    "",
    "Porridge — каша, яку варять із вівсяних пластівців або іншої крупи на воді чи молоці; її часто їдять на сніданок.",
    "каша, вівсянка"
  ],
  [
    "The herbs give the soup a rich ___.",
    "flavour",
    "schedule",
    "",
    "Flavour — смак їжі або напою, який також залежить від аромату.",
    "смак, аромат"
  ],
  [
    "Put a lid on the pot to ___ it.",
    "cover",
    "rinse",
    "",
    "Cover — покривати або накривати щось. Під час готування можна накрити каструлю кришкою.",
    "покривати"
  ],
  [
    "The water runs out of the sink through the ___.",
    "drain",
    "jar",
    "",
    "Drain — водостік, зливний отвір або труба, через які відводиться вода.",
    "водостік"
  ],
  [
    "She keeps homemade jam in a glass ___.",
    "jar",
    "plate",
    "",
    "Jar — банка, зазвичай скляна, із широкою шийкою та кришкою для зберігання їжі.",
    "скляна банка"
  ]
];
let order=data.map((_,i)=>i),pos=0,answers={},layout={};
const card=document.querySelector('#card');
function options(i){return layout[i]??(layout[i]=Math.random()<.5?[0,1]:[1,0])}
function render(){
if(pos>=order.length){results();return}
const i=order[pos],q=data[i],a=answers[i],done=a!==undefined;
card.innerHTML=`<div class="topline"><span>${pos+1} / ${order.length}</span><div class="progress" role="progressbar" aria-label="Прогресс" aria-valuemin="0" aria-valuemax="${order.length}" aria-valuenow="${pos}"><i style="width:${pos/order.length*100}%"></i></div></div><p class="sentence" lang="en">${q[0].replace('___',`<span class="blank">${done?q[1]:'&nbsp;…&nbsp;'}</span>`)}</p><div class="options">${options(i).map((v,n)=>`<button class="option ${done?(v===0?'correct':a===v?'wrong':''):''}" data-choice="${v}" ${done?'disabled':''} aria-label="Вариант ${n+1}: ${q[v+1]}">${q[v+1]}${done&&v===0?' ✓':''}${done&&a===v&&v!==0?' ×':''}</button>`).join('')}</div>${done?`<div class="feedback"><strong>${a===0?'Верно':'Верный ответ: '+q[1]}</strong>${q[4]}</div>`:''}<div class="actions"><button class="textbtn" id="back" ${pos===0?'disabled':''} aria-label="Предыдущий вопрос">← Назад</button>${done?`<button class="primary" id="next">${pos===order.length-1?'Результат':'Далее'} →</button>`:''}</div>`;
document.querySelectorAll('[data-choice]').forEach(b=>b.onclick=()=>{answers[i]=+b.dataset.choice;render()});
if(done)document.querySelector('#next').onclick=()=>{pos++;render()};
document.querySelector('#back').onclick=()=>{if(pos>0){pos--;render()}}
}
function results(){
const wrong=order.filter(i=>answers[i]!==0),score=order.length-wrong.length;
card.innerHTML=`<div class="result"><h2>Результат</h2><div class="score">${score}<span> / ${order.length}</span></div><div class="actions">${wrong.length?'<button class="primary" id="retry">Повторить ошибки</button>':''}<button class="textbtn" id="restart">Заново ↻</button></div>${wrong.map(i=>`<div class="review"><b>${data[i][1]}</b><p lang="en">${data[i][0].replace('___',data[i][1])}</p>${data[i][4]}</div>`).join('')}</div>`;
document.querySelector('#restart').onclick=()=>{order=data.map((_,i)=>i);answers={};layout={};pos=0;render()};
if(wrong.length)document.querySelector('#retry').onclick=()=>{order=wrong;answers={};layout={};pos=0;render()}
}
document.addEventListener('keydown',e=>{if(!['1','2'].includes(e.key)||e.repeat)return;const b=document.querySelectorAll('[data-choice]')[+e.key-1];if(b&&!b.disabled)b.click()});
render();
