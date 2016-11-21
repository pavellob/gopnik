export default {
		startStepId: 1,
		steps: [{
			id: 1,
        block: "RbQuestion",
        data: {
          question: "Есть закурить?",
          answers: [{
            id: 1,
            label: "Нет",
            hint: "норм ответ(3)",
            nextStepId: 2
          },
          {
            id: 2,
            label: "Свои носить надо",
            hint: "обостряешь",
            nextStepId: 3
          },
          {
            id: 3,
            label: "#Убегать",
            hint: "норм ответ",
        	  nextStepId: 55
          }],
        }
		},
		{
			id: 2,
        block: "RbQuestion",
        data: {
          question: "Че, спортсмен?",
          answers: [{
            id: 4,
            label: "А че, хочешь проверить?",
            hint: "норм ответ",
            nextStepId: 3
          },
          {
            id: 5,
            label: "Извините",
            hint: "обостряешь",
            nextStepId: 66
          },
          {
            id: 6,
            label: "#Хук#",
            hint: "норм ответ"
          }],
        	nextStepId: 77
        }
		},
		{
			id: 3,
        block: "RbQuestion",
        data: {
          question: "Че такой дерзкий?",
          answers: [{
            id: 7,
            label: "#Хук#",
            hint: "норм ответ",
            nextStepId: 77
          },
          {
            id: 8,
            label: "Да ниче!",
            hint: "обостряешь",
            nextStepId: 4
          },
          {
            id: 9,
            label: "Извините, сударь",
            hint: "обостряешь",
          }],
        	nextStepId: 66
        }
		},
		{
			id: 4,
        block: "RbQuestion",
        data: {
          question: "Дам в лицо!",
          answers: [{
            id: 10,
            label: "#Хук#",
            hint: "норм ответ",
            nextStepId: 77
          },

          {
            id: 11,
            label: "ээээ",
            hint: "обостряешь",
          }],
        	nextStepId: 66
        }
		},
		{
			id: 55,
        block: "StaticText",
        data: {
          label: "Зато живой",
          background: 'url(/assets/images/run.jpg)',
        }
		},
		{
			id: 66,
        block: "StaticText",
        data: {
          label: "Э, да ты остался без денег",
          text: "Еще и побили",
          background: "url(/assets/images/fail.jpg)",
        }
		},
		{
			id: 77,
        block: "StaticText",
        data: {
          label: "Безумству храбрых поем мы песню",
          text: "Все правильно сделал" ,
          background: 'url(/assets/images/leo.jpg)',
        }
		}

		]
};