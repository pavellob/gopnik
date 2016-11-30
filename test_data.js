export default {
		startStepId: 1,
		steps: [{
			id: 1,
        block: "RbQuestion",
        data: {
          question: "Есть касса? А если найду?",
          image: "/assets/images/1.jpg",
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
          image: "/assets/images/2.jpg",

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
          image: "/assets/images/3.jpg",

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
          image: "/assets/images/4.jpg",
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
        image: "/assets/images/5.jpg",
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
        image: "/assets/images/6.jpg",
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
        image: "/assets/images/7.jpg",
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
    }

		],
    results: [{
      bindings: [14],
      data: {
        label: "касса не нужна",
        text: "вообще не парься"
      }
    },
    {
      bindings: [5,10,15,16],
      data: {
        label: "1 июля 2018",
        text: "вообще не парься"
      }
    },
    {
      bindings: [7, 17, 18],
      data: {
        label: "1 июля 2017",
        text: "вообще не парься"
      }
    },
    {
      bindings: [9],
      data: {
        label: "касса нужна, но вообще ХЗ",
        text: "вообще не парься"
      }
    }],
    recomendations: [{
      bindings: [[5, 19], [5, 20]],
      data: {
        label: "Viki Micro с ККТ Viki Print 57",
        text: "<p>Бюджетный вариант для работы по новым правилам — моноблок <a href='https://dreamkas.ru/kassy-viki/viki-micro/' target='_blank'> Viki Micro с ККТ Viki Print 57.</a> В миниатюрной кассе только нужные функции, вы не переплачиваете за то, чем пользоваться не будете.</p>",
        image: "/assets/images/kassa-viki-micro-egais.jpg",
        link: "https://dreamkas.ru/kassy-viki/viki-micro/"
      }
    },
    {
      bindings: [5,10,15,16],
      data: {
        label: "1 июля 2018",
        text: "вообще не парься"
      }
    },
    {
      bindings: [7, 17, 18],
      data: {
        label: "1 июля 2017",
        text: "вообще не парься"
      }
    },
    {
      bindings: [9],
      data: {
        label: "касса нужна, но вообще ХЗ",
        text: "вообще не парься"
      }
    }]
};