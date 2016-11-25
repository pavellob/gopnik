export default {
		startStepId: 1,
		steps: [{
			id: 1,
        block: "RbQuestion",
        data: {
          question: "Есть касса? А если найду?",
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
        answers: [
        {
          id: 19,
          label: "меньше 100"
        },
        {
          id: 20,
          label: "больше 100"
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
        answers: [
        {
          id: 21,
          label: "Есть"
        },
        {
          id: 22,
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
        label: "касса не нужна, но вообще ХЗ",
        text: "вообще не парься"
      }
    }],
    recomendations: []
};