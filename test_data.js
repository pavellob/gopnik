export default {
		startStepId: 1,
		steps: [{
			id: 1,
        block: "RbQuestion",
        data: {
          question: "Че за хуйня",
          answers: [{
            id: 55,
            label: "А че?",
            hint: "норм ответ",
            nextStepId: 66
          },
          {
            id: 77,
            label: "А че такой дерзкий?",
            hint: "обостряешь",
            nextStepId: 44
          }] 
        },
        nextStepId: 2
		}
		]
};