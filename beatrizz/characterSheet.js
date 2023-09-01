const data = {
  name: 'Maya Lopez (Mah)',
  player: 'beatrizz',
  class: 'Ocultista',
  rank: 'Elite',
  nex: '45%',
  occupation: '',
  age: '26 (28/02)',
  sex: 'female',
  birthplace: 'Bilbao, Espanha',
  residence: 'São Paulo, Brasil',
  
  def: '12',

  life: {
    current: 37,
    max: 37,
  },
  sanity: {
    current: 60,
    max: 60,
  },
  ocult: {
    current: 54,
    max: 54,
  },

  pass: {
    current: 0,
    max: 0,
  },
  bloq: {
    current: 14,
    max: 14,
  },
  esqu: {
    current: 15,
    max: 15,
  },

  weapons: [
    {
      name: 'Pistola Glock 17',
      type: 'Balístico',
      damage: 'Pontaria',
      numCurrent: 'Curto',
      numMax: '1d12',
      attack: '(18)2d12',
      reach: 'De 12 em 12 balas',
      defect: '1',
      area: '',
    },
  ],
  items: [
    {
      name: 'Arco',
      type: 'Perfuração',
      damage: 'Pontaria',
      numCurrent: 'Médio',
      numMax: '1d6',
      attack: '(20)3d6',
      reach: 'De 1 em 1 flecha',
      defect: '0',
      area: '',
    },
  ],
  attributes: [
    {
      type: 'AGI.',
      amount: +2,
    },
    {
      type: 'INT.',
      amount: +1,
    },
    {
      type: 'VIG.',
      amount: +1,
    },
    {
      type: 'PRE.',
      amount: +2,
    },
    {
      type: 'FOR.',
      amount: +2,
    },
  ]
}

data.weapons.map((weapon, index) => {
  addWeaponToTable(weapon, index)
})

data.items.map((item, index) => {
  addWeaponToTable(item, index)
})

data.attributes.map((attribute, index) => {
  addAttribute(attribute, index)
})

$('#name').val(data.name)
$('#player').val(data.player)
$('#class').val(data.class)
$('#rank').val(data.rank)
$('#nex').val(data.nex)
$('#occupation').val(data.occupation)
$('#age').val(data.age)
$('#sex').val(data.sex)
$('#birthplace').val(data.birthplace)
$('#residence').val(data.residence)

$('.lifeBar').css('width', `${calculateBar(data.life.current, data.life.max)}%`)
$('#lifeCount').text(`${data.life.current}/${data.life.max}`)
$('#lifeCurrent').val(data.life.current)
$('#lifeMax').val(data.life.max)

$('.sanityBar').css(
  'width',
  `${calculateBar(data.sanity.current, data.sanity.max)}%`
)
$('#sanityCount').text(`${data.sanity.current}/${data.sanity.max}`)
$('#sanityCurrent').val(data.sanity.current)
$('#sanityMax').val(data.sanity.max)

$('.ocultBar').css('width', `${calculateBar(data.ocult.current, data.ocult.max)}%`)
$('#ocultCount').text(`${data.ocult.current}/${data.ocult.max}`)
$('#ocultCurrent').val(data.ocult.current)
$('#ocultMax').val(data.ocult.max)

$('.bloqBar').css('width', `${calculateBar(data.bloq.current, data.bloq.max)}%`)
$('#bloqCount').text(`${data.bloq.current}/${data.bloq.max}`)
$('#bloqCurrent').val(data.bloq.current)
$('#bloqMax').val(data.bloq.max)

$('.esquBar').css('width', `${calculateBar(data.esqu.current, data.esqu.max)}%`)
$('#esquCount').text(`${data.esqu.current}/${data.esqu.max}`)
$('#esquCurrent').val(data.esqu.current)
$('#esquMax').val(data.esqu.max)

const lifeModal = $('#lifeModal')
const sanityModal = $('#sanityModal')
const ocultModal = $('#ocultModal')

const bloqModal = $('#bloqModal')
const esquModal = $('#esquModal')

$(window).click(function (event) {
  if (event.target.id == 'diceAttributes') {
    diceModal.css('display', 'none')
    $('#diceNumber').text('')
    $('#diceType').text('')

    $('.modalDice').css('transform', 'rotate(0deg)')
    $('.modalDice').css('-webkit-transform', 'rotate(0deg)')
  } else if (event.target.id == 'lifeModal') {
    lifeModal.css('display', 'none')
  } else if (event.target.id == 'sanityModal') {
    sanityModal.css('display', 'none')
  } else if (event.target.id == 'ocultModal') {
  } else if (event.target.id == 'bloqModal') {
    bloqModal.css('display', 'none')
  } else if (event.target.id == 'esquModal') {
    esquModal.css('display', 'none')
  } else if (event.target.id == 'addWeaponModal') {
    closeModal('#addWeaponModal')
}})

function rollAtribute(atribute, amount) {
  console.log(this)

  diceModal.css('display', 'block')

  setTimeout(() => {
    $('.modalDice').css('transform', 'rotate(360deg)')
    $('.modalDice').css('-webkit-transform', 'rotate(360deg)')
  }, 1000)

  setTimeout(() => {
    const diceNumber = rollDice('1d20')
    const diceType = calcDice(amount, diceNumber)
    $('#diceNumber').text(diceNumber)
    $('#diceType').text(diceType)

    setTimeout(() => {
      diceModal.css('display', 'none')
      $('#diceNumber').text('')
      $('#diceType').text('')

      $('.modalDice').css('transform', 'rotate(0deg)')
      $('.modalDice').css('-webkit-transform', 'rotate(0deg)')
    }, 20000)
  }, 2000)
}

function rollSAN(atribute, amount) {
  console.log(this)

  diceModal.css('display', 'block')

  setTimeout(() => {
    $('.modalDice').css('transform', 'rotate(360deg)')
    $('.modalDice').css('-webkit-transform', 'rotate(360deg)')
  }, 1000)

  setTimeout(() => {
    const diceNumber = rollDice('1d100')
    const diceType = calcDice(amount, diceNumber)
    $('#diceNumber').text(diceNumber)
    $('#diceType').text(diceType)

    setTimeout(() => {
      diceModal.css('display', 'none')
      $('#diceNumber').text('')
      $('#diceType').text('')

      $('.modalDice').css('transform', 'rotate(0deg)')
      $('.modalDice').css('-webkit-transform', 'rotate(0deg)')
    }, 20000)
  }, 2000)
}

$('.lifeBar').click(function () {
  console.log(this)
  lifeModal.css('display', 'block')
})

$('.sanityBar').click(function () {
  console.log(this)
  sanityModal.css('display', 'block')
})

$('.ocultBar').click(function () {
  console.log(this)
  ocultModal.css('display', 'block')
})

$('.bloqBar').click(function () {
  console.log(this)
  bloqModal.css('display', 'block')
})

$('.esquBar').click(function () {
  console.log(this)
  esquModal.css('display', 'block')
})

$('#addWeapon').click(function () {
  openModal('#addWeaponModal')
})

$('#lesion').change(function () {
  if (this.checked) {
    console.log('Modo lesionamento grave ativado!')
  } else {
    console.log('Modo lesionamento grave desativado!')
  }
})

$('#injury').change(function () {
  if (this.checked) {
    console.log('Modo lesionamento ativado!')
  } else {
    console.log('Modo lesionado desativado!')
  }
})

$('#dying').change(function () {
  if (this.checked) {
    console.log('Modo morrendo ativado!')
  } else {
    console.log('Modo morrendo desativado!')
  }
})

$('#traumatized').change(function () {
  if (this.checked) {
    console.log('Modo traumatizado ativado!')
  } else {
    console.log('Modo traumatizado desativado!')
  }
})

$('#crazed').change(function () {
  if (this.checked) {
    console.log('Modo enlouquecido ativado!')
  } else {
    console.log('Modo enlouquecido desativado!')
  }
})

$('#insane').change(function () {
  if (this.checked) {
    console.log('Modo insano ativado!')
  } else {
    console.log('Modo insano desativado!')
  }
})

$('#addWeaponForm').submit(function (event) {
  var weaponType = ''

  if ($('#weaponType').val() == 'fire') {
    weaponType = 'Fogo'
  } else if ($('#weaponType').val() == 'arch') {
    weaponType = 'Arco'
  } else if ($('#weaponType').val() == 'fight') {
    weaponType = 'Briga'
  }

  const weapon = {
    name: $('#weaponName').val(),
    type: weaponType,
    damage: $('#weapondamage').val(),
    numCurrent: $('#weaponNumCurrent').val(),
    numMax: $('#weaponNumMax').val(),
    attack: $('#weaponAttack').val(),
    reach: $('#weaponReach').val(),
    defect: $('#weaponDefect').val(),
    area: $('#weaponArea').val(),
  }

  data.weapons.push(weapon)
  const id = data.weapons.length - 1
  addWeaponToTable(weapon, id)

  closeModal('#addWeaponModal')
  event.preventDefault()
})


$('#addItemForm').submit(function (event) {
  var itemType = ''

  if ($('#itemType').val() == 'fire') {
    itemType = 'Fogo'
  } else if ($('#itemType').val() == 'arch') {
    itemType = 'Arco'
  } else if ($('#itemType').val() == 'fight') {
    itemType = 'Briga'
  }

  const item = {
    name: $('#itemName').val(),
    type: itemType,
    damage: $('#itemdamage').val(),
    numCurrent: $('#itemNumCurrent').val(),
    numMax: $('#itemNumMax').val(),
    attack: $('#itemAttack').val(),
    reach: $('#itemReach').val(),
    defect: $('#itemDefect').val(),
    area: $('#itemArea').val(),
  }

  data.item.push(item)
  const id = data.item.length - 1
  addWeaponToTable(item, id)

  closeModal('#addItemModal')
  event.preventDefault()
})

$('#changeLife').submit(function (event) {
  let current = Number($('#lifeCurrent').val())
  const max = Number($('#lifeMax').val())

  if (current > max) {
    alert('A vida atual não pode ser maior que a maxima!')
    current = max
  }

  data.life.current = current
  data.life.max = max
  $('.lifeBar').css('width', `${calculateBar(current, max)}%`)
  $('#lifeCount').text(`${current}/${max}`)

  closeModal('#lifeModal')
  event.preventDefault()
})

$('#changeSanity').submit(function (event) {
  let current = Number($('#sanityCurrent').val())
  const max = Number($('#sanityMax').val())

  if (current > max) {
    alert('A sanidade atual não pode ser maior que a maxima!')
    current = max
  }

  data.sanity.current = current
  data.sanity.max = max
  $('.sanityBar').css('width', `${calculateBar(current, max)}%`)
  $('#sanityCount').text(`${current}/${max}`)

  closeModal('#sanityModal')
  event.preventDefault()
})

$('#changeOcult').submit(function (event) {
  let current = Number($('#ocultCurrent').val())
  const max = Number($('#ocultMax').val())

  if (current > max) {
    alert('Os pontos de esforço atuais não podem ser maiores que os maximos!')
    current = max
  }
data.ocult.current = current
data.ocult.max = max
$('.ocultBar').css('width', `${calculateBar(current, max)}%`)
$('#ocultCount').text(`${current}/${max}`)

closeModal('#ocultModal')
event.preventDefault()
})

$('#changeBloq').submit(function (event) {
  let current = Number($('#bloqCurrent').val())
  const max = Number($('#bloqMax').val())

  if (current > max) {
    alert('O nível de bloqueio atual não pode ser maior que o maximo!')
    current = max
  }
data.bloq.current = current
data.bloq.max = max
$('.bloqBar').css('width', `${calculateBar(current, max)}%`)
$('#bloqCount').text(`${current}/${max}`)

closeModal('#esquModal')
event.preventDefault()
})

$('#changeEsqu').submit(function (event) {
  let current = Number($('#esquCurrent').val())
  const max = Number($('#esquMax').val())

  if (current > max) {
    alert('O nível de esquiva atual não pode ser maior que o maximo!')
    current = max
  }
data.esqu.current = current
data.esqu.max = max
$('.esquBar').css('width', `${calculateBar(current, max)}%`)
$('#esquCount').text(`${current}/${max}`)

closeModal('#esquModal')
event.preventDefault()
})



function calculateBar(current, max) {
  if (current > max) {
    return 100
  } else if (current < 0) {
    return 0
  } else {
    const value = (100 / max) * current
    const string = value.toString().split('.')[0]
    const percentage = Number(string)
    return percentage
  }
}

function calcDice(ability, dice) {
  // Não encontrei uma forma mais fácil, então fiz assim

  const table = [
    { normal: 20 },
    { normal: 19, good: 20 },
    { normal: 18, good: 20 },
    { normal: 17, good: 19 },
    { normal: 16, good: 19, extreme: 20 },
    { normal: 15, good: 18, extreme: 20 },
    { normal: 14, good: 18, extreme: 20 },
    { normal: 13, good: 17, extreme: 20 },
    { normal: 12, good: 17, extreme: 20 },
    { normal: 11, good: 16, extreme: 20 },
    { normal: 10, good: 16, extreme: 19 },
    { normal: 9, good: 16, extreme: 19 },
    { normal: 8, good: 15, extreme: 19 },
    { normal: 7, good: 14, extreme: 19 },
    { normal: 6, good: 14, extreme: 18 },
    { normal: 5, good: 13, extreme: 18 },
    { normal: 4, good: 13, extreme: 18 },
    { normal: 3, good: 12, extreme: 18 },
    { normal: 2, good: 12, extreme: 18 },
    { normal: 1, good: 11, extreme: 17 },
  ]

  const type = table[ability - 1]

  if (type.extreme) {
    if (dice >= type.extreme) return ':D'
    if (dice >= type.good) return ':D'
    if (dice >= type.normal) return ':D'
    if (dice <= type.normal) return ':D'
  } else if (type.good) {
    if (dice >= type.good) return ':D'
    if (dice >= type.normal) return ':D'
    if (dice <= type.normal) return ':D'
  } else if (type.normal) {
    if (dice >= type.normal) return ':D'
    if (dice <= type.normal) return ':D'
  }
}

function rollDice(dice) {
  let [count, max] = dice.split('d')

  if (Number(count) && Number(max)) {
    count = Number(count)
    max = Number(max)

    let total = 0

    for (let i = 0; i < count; i++) {
      total += Math.floor(Math.random() * max + 1)
    }

    return total
  } else {
    return null
  }
}

function openModal(modal) {
  const Modal = $(modal)
  Modal.css('display', 'block')
}

function closeModal(modal) {
  const Modal = $(modal)
  Modal.css('display', 'none')
}

function addWeaponToTable(weapon, id) {
  const newWeapon = $(`<tr id="weapon_${id}">
        <td>

            ${weapon.name}
        </td>
        <td>${weapon.type}</td>
        <td>${weapon.damage}</td>
        <td>${weapon.numCurrent}</td>
        <td>${weapon.numMax}</td>
        <td>${weapon.attack}</td>
        <td>${weapon.reach}</td>
        <td>${weapon.defect}</td>
        <td>${weapon.area}</td>
    </tr>`)
  $('table#weapons').append(newWeapon)
}

function addAttribute(attribute, id) {
  const newAttribute = $(`<div class="attribute" id="attribute_${id}">
    <a onclick="rollAtribute('${attribute.type}', ${attribute.amount})">
      <img class="attributeDice" src="./img/dado.png" alt="Dado">
    </a>
    <h3>${attribute.type}</h3>
    <input type="text" name="appearance" value="${attribute.amount}" id="attribute_input_${id}" disabled>
  </div>`)
  $('#attributesList').append(newAttribute)
}

function deleteWeapon(id) {
  $(`tr#${id}`).remove()
}


function antecedentes(){
  window.location.href = "antecedentes.html"
}
function infoadd(){
  window.location.href = "infoadd.html"
}
