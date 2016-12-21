export default {
  test: {
    startStepId: 0,
    steps: [{
      id: 0,
        block: "StartScreen",
        data: {
          image: "static/assets/images/1.svg",
          nextStepId: 1
        }
    },
    {
      id: 1,
        block: "RbQuestion",
        data: {
          question: "У вас уже есть касса?",
          image: "static/assets/images/1.svg",
          answers: [{
            id: 11,
            label: "Да"
          },
          {
            id: 12,
            label: "Нет"
          }],
          nextStepId: 2
        }
    },
    {
      id: 2,
        block: "RbQuestion",
        data: {
          question: "В какой вы работаете сфере?",
          image: "static/assets/images/2.svg",
          answers: [{
            id: 21,
            label: "Услуги населению",
            nextStepId: 101
          },
          {
            id: 22,
            label: "Торговля",
            nextStepId: 3//2018
          }]
        }
    },
    {
      id: 3,
        block: "RbQuestion",
        data: {
          question: "Расскажите про ассортимент",
          image: "static/assets/images/3.svg",
          answers: [{
            id: 31,
            label: "Продовольственный, есть акцизные товары",
            nextStepId: 101//2017
          },
          {
            id: 32,
            label: "Непродовольственные товары, в том числе акцизные",
            nextStepId: 101//2017
          },
          {
            id: 33,
            label: "Продукты и нет акцизных товаров",
            nextStepId: 5
          },
          {
            id: 34,
            label: "Непродовольственные товары, без акциз",
            nextStepId: 4
          }]
        }
    },
    {
      id: 4,
        block: "RbQuestion",
        data: {
          question: "Хорошо, давайте разбираться. Есть ли что-то из списка:",
          text: "<ul> <li>Одежда</li> <li>Ковры</li> <li>Кожа или изделия из кожи</li> <li>Древесина или изделия из дерева</li> <li>Химические вещества</li> <li>Резиновые и пластмассовые изделия</li> <li>Минеральные неметаллические продукты </li> <li>Компьютеры и электронное, оптическое оборудование</li> <li>Электрическое оборудование</li> <li>Машины и оборудование, не включенные в другие группировки</li> <li>Средства автотранспортные, прицепы и полуприцепы</li> <li>Средства транспортные и оборудование, прочие</li> <li>Мебель</li> <li>Инструменты музыкальные</li> <li>Приспособления ортопедические</li> <li>Спортивные товары</li> </ul> ",
           /*"
          <ul>
<li>Одежда</li>
<li>Ковры</li>
<li>Кожа или изделия из кожи</li>
<li>Древесина или изделия из дерева</li>
<li>Химические вещества</li>
<li>Резиновые и пластмассовые изделия</li>
<li>Минеральные неметаллические продукты </li>
<li>Компьютеры и электронное, оптическое оборудование</li>
<li>Электрическое оборудование</li>
<li>Машины и оборудование, не включенные в другие группировки</li>
<li>Средства автотранспортные, прицепы и полуприцепы</li>
<li>Средства транспортные и оборудование, прочие</li>
<li>Мебель</li>
<li>Инструменты музыкальные</li>
<li>Приспособления ортопедические</li>
<li>Спортивные товары</li>
          </ul>
"*/
          image: "static/assets/images/4.svg",
          answers: [{
            id: 41,
            label: "Да",
            nextStepId: 101//2042
          },
          {
            id: 42,
            label: "Нет",
            nextStepId: 101//-
          },
          ]
        }
    },
    {
      id: 5,
      block: "RbQuestion",
      data: {
        question: "В каком формате работаете?",
        image: "static/assets/images/5.svg",
        answers: [{
          id: 51,
          label: "Один или несколько магазинов",
          nextStepId: 7
        },
        {
          id: 52,
          label: "Интернет-магазин",
          nextStepId: 101//2018
        },
        {
          id: 53,
          label: "Крытый рынок или ярмарка",
          nextStepId: 101//2018
        },
        {
          id: 54,
          label: "Предприятие общественного питания",
          nextStepId: 6
        }]
      }
    },
    {
      id: 6,
      block: "RbQuestion",
      data: {
        question: "Работаете ли вы с ВУЗами, колледжами или школами?",
        image: "static/assets/images/6.svg",
        answers: [{
          id: 61,
          label: "Да, работаю, но как отдельный предприниматель или юрлицо",
          nextStepId: 7
        },
        {
          id: 62,
          label: "Работаю, но столовая или кафе — подразделение образовательного учреждения",
          nextStepId: 101//-
        },
        {
          id: 63,
          label: "Нет, не работаю",
          nextStepId: 7
        }]
      }
    },
    {
      id: 7,
      block: "RbQuestion",
      data: {
        question: "На какой системе налогообложения работаете?",
        image: "static/assets/images/7.svg",
        answers: [{
          id: 71,
          label: "ПСН",
          nextStepId: 101//2018
        },
        {
          id: 72,
          label: "ЕНВД",
          nextStepId: 101//2018
        },
        {
          id: 73,
          label: "ОСНО",
          nextStepId: 101//2017
        },
        {
          id: 74,
          label: "УСН",
          nextStepId: 101//2017
        }]
      }
    },
    {
      id: 101,
      block: "RbQuestion",
      data: {
        question: "Сколько печатаете чеков за день?",
        image: "static/assets/images/8.svg",
        answers: [
        {
          id: 1011,
          label: "до 10"
        },
        {
          id: 1012,
          label: "от 10 до 20"
        },
        {
          id: 1013,
          label: "от 20 до 30"
        },
        {
          id: 1014,
          label: "от 30"
        } 
        ],
        nextStepId: 102
      }
    },
    {
      id: 102,
      block: "RbQuestion",
      data: {
        question: "Есть ли товароучётная система?",
        image: "static/assets/images/9.svg",
        answers: [
        {
          id: 1021,
          label: "Да"
        },
        {
          id: 1022,
          label: "Нет"
        } 
        ]
      }
    }]
  },
  result: {
    lawResults: [{
      bindings: [[14]],
      data: {
        label: "касса не нужна",
        text: "вообще не парься"
      }
    },
    {
      bindings: [[5],[10],[15],[16]],
      data: {
        label: "1 июля 2018",
        text: "вообще не парься"
      }
    },
    {
      bindings: [[7], [17], [18]],
      data: {
        label: "1 июля 2017",
        text: "вообще не парься"
      }
    },
    {
      bindings: [[9]],
      data: {
        label: "касса нужна, но вообще ХЗ",
        text: "вообще не парься"
      }
    }],
    recomendations: [{
        bindings: [[5, 19, 23], [5, 20, 23]],
        data: {
          label: "Viki Micro с ККТ Viki Print 57",
          text: "<p>Бюджетный вариант для работы по новым правилам — моноблок <a href='https://dreamkas.ru/kassy-viki/viki-micro/' target='_blank'> Viki Micro с ККТ Viki Print 57.</a> В миниатюрной кассе только нужные функции, вы не переплачиваете за то, чем пользоваться не будете.<br/> ККТ работает со всеми популярными системами товароучёта.</p>",
          image: "static/assets/images/kassa-viki-micro-egais.jpg",
          link: "https://dreamkas.ru/kassy-viki/viki-micro/"
        }
      },
      {
        bindings: [[5, 19, 24], [5, 20, 24]],
        data: {
          label: "Viki Micro с ККТ Viki Print 57",
          text: "<p>Бюджетный вариант для работы по новым правилам — моноблок <a href='https://dreamkas.ru/kassy-viki/viki-micro/' target='_blank'> Viki Micro с ККТ Viki Print 57.</a> В миниатюрной кассе только нужные функции, вы не переплачиваете за то, чем пользоваться не будете.<br/> Данные о продажах и товарах можно выгружать в таблицы Excel.</p>",
          image: "static/assets/images/kassa-viki-micro-egais.jpg",
          link: "https://dreamkas.ru/kassy-viki/viki-micro/"
        }
      },
      {
        bindings: [[5, 21, 23]],
        data: {
          label: "ККТ Viki Micro",
          text: "<p>Обратите внимание на ККТ Viki Micro — это полноценное рабочее место кассира, полностью готовое к работе по новым правилам 54-ФЗ.<br/> ККТ работает со всеми популярными системами товароучёта.</p>",
          image: "static/assets/images/kassa-dlja-alkogolja.jpg",
          link: "https://dreamkas.ru/kassy-viki/viki-mini/"
        }
      },
      {
        bindings: [[5, 21, 24]],
        data: {
          label: "ККТ Viki Micro",
          text: "<p>Обратите внимание на ККТ Viki Micro — это полноценное рабочее место кассира, полностью готовое к работе по новым правилам 54-ФЗ.<br/> Данные о продажах и товарах можно выгружать в таблицы Excel.</p>",
          image: "static/assets/images/kassa-dlja-alkogolja.jpg",
          link: "https://dreamkas.ru/kassy-viki/viki-mini/"
        }
      },
      {
        bindings: [[5, 22, 23]],
        data: {
          label: "Моноблок Viki Classic и ККТ Viki Print 80 Plus",
          text: "<p>Надежный вариант для работы с большими нагрузками — флагманский моноблок Viki Classic и ККТ Viki Print 80 Plus. Мощный моноблок и принтер с автоматическим отрезчиком позволяют увеличить скорость работы и избежать очередей.<br/> ККТ работает со всеми популярными системами товароучёта.</p>",
          image: "static/assets/images/kassa-viki-classic.jpg",
          link: "https://dreamkas.ru/kassy-viki/viki-classic/"
        }
      },
      {
        bindings: [[5, 22, 24]],
        data: {
          label: "Моноблок Viki Classic и ККТ Viki Print 80 Plus",
          text: "<p>Надежный вариант для работы с большими нагрузками — флагманский моноблок Viki Classic и ККТ Viki Print 80 Plus. Мощный моноблок и принтер с автоматическим отрезчиком позволяют увеличить скорость работы и избежать очередей.<br/> Данные о продажах и товарах можно выгружать в таблицы Excel.</p>",
          image: "static/assets/images/kassa-viki-classic.jpg",
          link: "https://dreamkas.ru/kassy-viki/viki-classic/"
        }
      }]
    
  }
};