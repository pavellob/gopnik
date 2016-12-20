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
          question: "Есть касса? А если найду?",
          text: '<ul><li>Coffee</li><li>Tea</li><li>Milk</li></ul>',
          image: "static/assets/images/1.svg",
          answers: [{
            id: 1,
            label: "Есть"
          },
          {
            id: 2,
            label: "Нет"
          }],
          nextStepId: 2
        }
    },
    {
      id: 2,
        block: "RbQuestion",
        data: {
          question: "Чем по жизни живешь?",
          image: "static/assets/images/2.jpg",

          answers: [{
            id: 4,
            label: "Торгую, еба",
            nextStepId: 3
          },
          {
            id: 5,
            label: "Холуйствую (услуги населению)",
            hint: "обостряешь",
            nextStepId: 101//2018
          }]
        }
    },
    {
      id: 3,
        block: "RbQuestion",
        data: {
          question: "Чем банчишь?",
          image: "static/assets/images/3.jpg",

          answers: [{
            id: 7,
            label: "Бухло, сиги, соли, спайсы",
            nextStepId: 101//2017
          },
          {
            id: 8,
            label: "Хлебом и молочком, все ровно",
            nextStepId: 4
          },
          {
            id: 9,
            label: "Всякой ебалой",
            nextStepId: 101//2042
          }]
        }
    },
    {
      id: 4,
        block: "RbQuestion",
        data: {
          question: "Это как так?",
          image: "static/assets/images/4.jpg",
          answers: [{
            id: 10,
            label: "Через интернет эксплорер, еба!",
            nextStepId: 101//2018
          },
          {
            id: 11,
            label: "Через магаз",
            nextStepId: 5
          },
          {
            id: 12,
            label: "На рынке, под крышей",
            nextStepId: 5
          },
          {
            id: 13,
            label: "Тошниловка у меня",
            nextStepId: 5
          },
          {
            id: 14,
            label: "В школке у меня точка, под директором.",
            nextStepId: 101//2000

          }
          ]
        }
    },
    {
      id: 5,
      block: "RbQuestion",
      data: {
        question: "Фискалам чо отстегиваешь?",
        image: "static/assets/images/5.jpg",
        answers: [{
          id: 15,
          label: "ПСН",
          nextStepId: 101//2018
        },
        {
          id: 16,
          label: "ЕНВД",
          nextStepId: 101//2018
        },
        {
          id: 17,
          label: "ОСНО",
          nextStepId: 101//2017
        },
        {
          id: 18,
          label: "упрощенка",
          nextStepId: 101//2017
        }]
      }
    },
    {
      id: 101,
      block: "RbQuestion",
      data: {
        question: "Сколько чеков можешь за день выбить?",
        image: "static/assets/images/6.jpg",
        answers: [
        {
          id: 19,
          label: "до 10"
        },
        {
          id: 20,
          label: "от 10 до 20"
        },
        {
          id: 21,
          label: "от 20 до 30"
        },
        {
          id: 22,
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
        question: "Товароучетка есть? А если найду?",
        image: "static/assets/images/7.jpg",
        answers: [
        {
          id: 23,
          label: "Есть"
        },
        {
          id: 24,
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