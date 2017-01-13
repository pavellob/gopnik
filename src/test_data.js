export default {
  test: {
    startStepId: 0,
    steps: [{
      id: 0,
        block: "StartScreen",
        data: {
          ix: 1,
          image: "assets/images/1.svg",
          nextStepId: 2
        }
    },
    {
      id: 1,
        block: "RbQuestion",
        data: {
          ix: 2,
          question: "У вас уже есть касса?",
          image: "assets/images/2.svg",
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
          ix: 3,
          question: "В какой вы работаете сфере?",
          image: "assets/images/3.svg",
          answers: [{
            id: 21,
            label: "Услуги населению",
            nextStepId: 101//2018
          },
          {
            id: 22,
            label: "Торговля",
            nextStepId: 3
          }]
        }
    },
    {
      id: 3,
        block: "RbQuestion",
        data: {
          ix: 4,
          question: "Расскажите про ассортимент",
          image: "assets/images/4.svg",
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
          ix: 5,
          question: "Хорошо, давайте разбираться. Есть ли что-то из списка:",
          text: "<ul> <li>Одежда</li> <li>Ковры</li> <li>Кожа или изделия из кожи</li> <li>Древесина или изделия из дерева</li> <li>Химические вещества</li> <li>Резиновые и пластмассовые изделия</li> <li>Минеральные неметаллические продукты </li> <li>Компьютеры и электронное, оптическое оборудование</li> <li>Электрическое оборудование</li> <li>Машины и оборудование, не включенные в другие группировки</li> <li>Средства автотранспортные, прицепы и полуприцепы</li> <li>Средства транспортные и оборудование, прочие</li> <li>Мебель</li> <li>Инструменты музыкальные</li> <li>Приспособления ортопедические</li> <li>Спортивные товары</li> </ul> ",
          image: "assets/images/5.svg",
          answers: [{
            id: 42,
            label: "Да",
            nextStepId: 8//2042
          },
          {
            id: 41,
            label: "Нет",
            nextStepId: 9//-
          },
          ]
        }
    },
    {
      id: 5,
      block: "RbQuestion",
      data: {
        ix: 6,
        question: "В каком формате работаете?",
        image: "assets/images/6.svg",
        answers: [{
          id: 51,
          label: "Один или несколько магазинов",
          nextStepId: 7
        },
        {
          id: 52,
          label: "Интернет-магазин",
          nextStepId: 7
        },
        {
          id: 53,
          label: "Крытый рынок",
          nextStepId: 7
        },
        {
          id: 54,
          label: "Предприятие общественного питания",
          nextStepId: 6
        },
        {
          id: 55,
          label: "Рынок без помещения и в развал, разносная торговля",
          nextStepId: 101//-
        },
        {
          id: 56,
          label: "Мороженое на улице или безалкогольные напитки в розлив",
          nextStepId: 101//-
        }]
      }
    },
    {
      id: 6,
      block: "RbQuestion",
      data: {
        ix: 7,
        question: "Работаете ли вы с образовательными учреждениями?",
        image: "assets/images/7.svg",
        answers: [{
          id: 61,
          label: "Да, как отдельный предприниматель или юрлицо",
          nextStepId: 7
        },
        {
          id: 62,
          label: "Работаю, как подразделение образовательного учреждения",
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
      id: 8,
      block: "RbQuestion",
      data: {
        ix: 8,
        question: "В каком формате работаете?",
        image: "assets/images/6.svg",
        answers: [{
          id: 81,
          label: "Один или несколько магазинов",
          nextStepId: 7
        },
        {
          id: 82,
          label: "Интернет-магазин",
          nextStepId: 7
        },
        {
          id: 83,
          label: "Крытый рынок",
          nextStepId: 7
        },
        {
          id: 85,
          label: "Рынок без помещения и в развал, разносная торговля",
          nextStepId: 101//-
        }]
      }
    },
    {
      id: 9,
      block: "RbQuestion",
      data: {
        ix: 9,
        question: "Продаёте ли вы почтовые марки или предметы религиозного культа?",
        image: "assets/images/8.svg",
        answers: [{
          id: 91,
          label: "Да",
          nextStepId: 101//-
        },
        {
          id: 92,
          label: "Нет",
          nextStepId: 7
        }]
      }
    },
    {
      id: 7,
      block: "RbQuestion",
      data: {
        ix: 10,
        question: "На какой системе налогообложения работаете?",
        image: "assets/images/8.svg",
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
        ix: 11,
        question: "Сколько покупателей обслуживаете за день?",
        image: "assets/images/9.svg",
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
        ix: 12,
        question: "Есть ли товароучётная система?",
        image: "assets/images/10.svg",
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
      bindings: [[62], [55], [56], [91]],
      data: {
        label: "Вам не нужна касса",
        text: "<span>По новому закону вам не нужна онлайн-касса. Но вы можете использовать кассу для удобства учёта.</span>",
        image: "assets/images/o4.svg",
        shareImage: "assets/images/no_share.jpg"
      }
    },
    {
      bindings: [[21],[71],[72]],
      data: {
        label: "Вам нужно перейти на онлайн-кассу к 1 июля 2018 года",
        text: "<span>Предприятия услуг населению и торговые предприятия на ЕНВД и ПСН начинают передачу фискальных данных 1 июля 2018 года. У вас есть в запасе время, но затягивать не стоит. До 1 июля вам нужно успеть:</p><ul><li>выбрать и заключить договор с ОФД,</li><li>купить онлайн-кассу и зарегистрировать её в ФНС.</li></uspan>",
        image: "assets/images/o3.svg",
        shareImage: "assets/images/2018_share.jpg"
      }
    },
    {
      bindings: [[73], [74], [31], [32]],
      data: {
        label: "Вам нужно перейти на новые правила 1 июля 2017 года",
        text: "<span>Вы должны начать передачу фискальных данных уже 1 июля 2017 года. Времени не так много, нужно успеть:</p><ul><li>выбрать и заключить договор с ОФД,</li><li>приобрести онлайн-кассу и зарегистрировать её в ФНС.</li></uspan>",
        hint: "Обратите внимание, если у вас заканчивается ЭКЛЗ, то с 1 февраля 2017 года вы не сможете зарегистрировать кассу без фискального накопителя.",
        image: "assets/images/o2.svg",
        shareImage: "assets/images/2017_share.jpg"
      }
    },
    {
      bindings: [[42, 85]],
      data: {
        label: "Скорее всего вам придётся купить кассу",
        text: "<span>Но это пока неточно. Минфин подготовил Постановление с перечнем товаров, при продаже которых обязательно использование ККТ. Сейчас документ проходит публичные обсуждения и антикоррупционную экспертизу. Если документ примут, то вам придётся начать использовать ККТ с 1 июля 2018 года. До этого момента нужно будет приобрести онлайн-кассу и заключить договор с ОФД. Чтобы быть в курсе, подпишитесь на карточку закона на <a href='http://regulation.gov.ru/projects#npa=46191' target='_blank'>портале regulation.gov.ru</a>.</span>",
        image: "assets/images/o1.svg",
        shareImage: "assets/images/some_time_share.jpg"
      }
    }],
    hints: [
      {
        binding: 1021,
        text: "ККТ работает со всеми популярными системами товароучёта."
      },
      {
        binding: 1022,
        text: "Данные о продажах и товарах можно выгружать из ККТ в таблицы Excel."
      },
      {
        binding: 11,
        text: "Если у вас уже есть касса Viki, то новая касса не нужна, достаточно приобрести комплект доработки."
      },
    ],
    recomendations: [/*{
        bindings: [[42, 55]],
        data: {
          label: "Viki Micro с ККТ Viki Print 57",
          text: "<span>А пока присмотритесь к <a href='https://dreamkas.ru/kassy-viki/viki-micro/'>ККТ из линеек Viki и Viki Print</a>. ККТ полностью соответствуют требованиям нового закона и удобны в использовании.</span>",
          image: "assets/images/b4.png",
          link: "/kassy-viki/viki-micro/"
        }
      },*/
      {
        bindings: [[1011], [1012]],
        data: {
          label: "Viki Micro с ККТ Viki Print 57",
          text: "<span>Бюджетный вариант для работы по новым правилам — моноблок <a href='https://dreamkas.ru/kassy-viki/viki-micro/''> Viki Micro с ККТ Viki Print 57.</a> В миниатюрной кассе только нужные функции, вы не переплачиваете за то, чем пользоваться не будете.</span>",
          image: "assets/images/b2.png",
          link: "/kassy-viki/viki-micro/"
        }
      },
      {
        bindings: [[1013]],
        data: {
          label: "ККТ Viki Micro",
          text: "<span>Обратите внимание на <a href='https://dreamkas.ru/kassy-viki/viki-mini/'>ККТ Viki Mini</a> — это полноценное рабочее место кассира, полностью готовое к работе по новым правилам 54-ФЗ.</span>",
          image: "assets/images/b3.png",
          link: "/kassy-viki/viki-mini/"
        }
      },
      {
        bindings: [[1014]],
        data: {
          label: "Моноблок Viki Classic и ККТ Viki Print 80 Plus",
          text: "<span>Надежный вариант для работы с большими нагрузками — флагманский моноблок <a href='https://dreamkas.ru/kassy-viki/viki-classic/'>Viki Classic и ККТ Viki Print 80 Plus<a>. Мощный моноблок и принтер с автоматическим отрезчиком позволяют увеличить скорость работы и избежать очередей.</span>",
          image: "assets/images/b1.png",
          link: "/kassy-viki/viki-classic/"
        }
      }]
    
  }
};