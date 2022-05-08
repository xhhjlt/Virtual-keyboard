class Keyboard {
  constructor(language) {
    this.layout = [
      [{
        keyCode: 'Backquote', class: 'key-char', en: ['`', '~', '`', '~'], ru: ['ё', 'Ё', 'Ё', 'ё'],
      },
      {
        keyCode: 'Digit1', class: 'key-char', en: ['1', '!', '1', '!'], ru: ['1', '!', '1', '!'],
      },
      {
        keyCode: 'Digit2', class: 'key-char', en: ['2', '@', '2', '@'], ru: ['2', '"', '2', '"'],
      },
      {
        keyCode: 'Digit3', class: 'key-char', en: ['3', '#', '3', '#'], ru: ['3', '№', '3', '№'],
      },
      {
        keyCode: 'Digit4', class: 'key-char', en: ['4', '$', '4', '$'], ru: ['4', ';', '4', ';'],
      },
      {
        keyCode: 'Digit5', class: 'key-char', en: ['5', '%', '5', '%'], ru: ['5', '%', '5', '%'],
      },
      {
        keyCode: 'Digit6', class: 'key-char', en: ['6', '^', '6', '^'], ru: ['6', ':', '6', ':'],
      },
      {
        keyCode: 'Digit7', class: 'key-char', en: ['7', '&', '7', '&'], ru: ['7', '?', '7', '?'],
      },
      {
        keyCode: 'Digit8', class: 'key-char', en: ['8', '*', '8', '*'], ru: ['8', '*', '8', '*'],
      },
      {
        keyCode: 'Digit9', class: 'key-char', en: ['9', '(', '9', '('], ru: ['9', '(', '9', '('],
      },
      {
        keyCode: 'Digit0', class: 'key-char', en: ['0', ')', '0', ')'], ru: ['0', ')', '0', ')'],
      },
      {
        keyCode: 'Minus', class: 'key-char', en: ['-', '_', '-', '_'], ru: ['-', '_', '-', '_'],
      },
      {
        keyCode: 'Equal', class: 'key-char', en: ['=', '+', '=', '+'], ru: ['=', '+', '=', '+'],
      },
      { keyCode: 'Backspace', class: 'key-mod', en: 'Backspace' }],
      [{ keyCode: 'Tab', class: 'key-mod', en: 'Tab' },
        {
          keyCode: 'KeyQ', class: 'key-char', en: ['q', 'Q', 'Q', 'q'], ru: ['й', 'Й', 'Й', 'й'],
        },
        {
          keyCode: 'KeyW', class: 'key-char', en: ['w', 'W', 'W', 'w'], ru: ['ц', 'Ц', 'Ц', 'ц'],
        },
        {
          keyCode: 'KeyE', class: 'key-char', en: ['e', 'E', 'E', 'e'], ru: ['у', 'У', 'У', 'у'],
        },
        {
          keyCode: 'KeyR', class: 'key-char', en: ['r', 'R', 'R', 'r'], ru: ['к', 'К', 'К', 'к'],
        },
        {
          keyCode: 'KeyT', class: 'key-char', en: ['t', 'T', 'T', 't'], ru: ['е', 'Е', 'Е', 'е'],
        },
        {
          keyCode: 'KeyY', class: 'key-char', en: ['y', 'Y', 'Y', 'y'], ru: ['н', 'Н', 'Н', 'н'],
        },
        {
          keyCode: 'KeyU', class: 'key-char', en: ['u', 'U', 'U', 'u'], ru: ['г', 'Г', 'Г', 'г'],
        },
        {
          keyCode: 'KeyI', class: 'key-char', en: ['i', 'I', 'I', 'i'], ru: ['ш', 'Ш', 'Ш', 'ш'],
        },
        {
          keyCode: 'KeyO', class: 'key-char', en: ['o', 'O', 'O', 'o'], ru: ['щ', 'Щ', 'Щ', 'щ'],
        },
        {
          keyCode: 'KeyP', class: 'key-char', en: ['p', 'P', 'P', 'p'], ru: ['з', 'З', 'З', 'з'],
        },
        {
          keyCode: 'BracketLeft', class: 'key-char', en: ['[', '{', '[', '{'], ru: ['х', 'Х', 'Х', 'х'],
        },
        {
          keyCode: 'BracketRight', class: 'key-char', en: [']', '}', ']', '}'], ru: ['ъ', 'Ъ', 'Ъ', 'ъ'],
        },
        {
          keyCode: 'Backslash', class: 'key-char', en: ['\\', '|', '\\', '|'], ru: ['\\', '/', '\\', '/'],
        },
        { keyCode: 'Delete', class: 'key-mod', en: 'Del' }],
      [{ keyCode: 'CapsLock', class: 'key-mod', en: 'CapsLock' },
        {
          keyCode: 'KeyA', class: 'key-char', en: ['a', 'A', 'A', 'a'], ru: ['ф', 'Ф', 'Ф', 'ф'],
        },
        {
          keyCode: 'KeyS', class: 'key-char', en: ['s', 'S', 'S', 's'], ru: ['ы', 'Ы', 'Ы', 'ы'],
        },
        {
          keyCode: 'KeyD', class: 'key-char', en: ['d', 'D', 'D', 'd'], ru: ['в', 'В', 'В', 'в'],
        },
        {
          keyCode: 'KeyF', class: 'key-char', en: ['f', 'F', 'F', 'f'], ru: ['а', 'А', 'А', 'а'],
        },
        {
          keyCode: 'KeyG', class: 'key-char', en: ['g', 'G', 'G', 'g'], ru: ['п', 'П', 'П', 'п'],
        },
        {
          keyCode: 'KeyH', class: 'key-char', en: ['h', 'H', 'H', 'h'], ru: ['р', 'Р', 'Р', 'р'],
        },
        {
          keyCode: 'KeyJ', class: 'key-char', en: ['j', 'J', 'J', 'j'], ru: ['о', 'О', 'О', 'о'],
        },
        {
          keyCode: 'KeyK', class: 'key-char', en: ['k', 'K', 'K', 'k'], ru: ['л', 'Л', 'Л', 'л'],
        },
        {
          keyCode: 'KeyL', class: 'key-char', en: ['l', 'L', 'L', 'l'], ru: ['д', 'Д', 'Д', 'д'],
        },
        {
          keyCode: 'Semicolon', class: 'key-char', en: [';', ':', ';', ':'], ru: ['ж', 'Ж', 'Ж', 'ж'],
        },
        {
          keyCode: 'Quote', class: 'key-char', en: ['\'', '"', '\'', '"'], ru: ['э', 'Э', 'Э', 'э'],
        },
        { keyCode: 'Enter', class: 'key-mod', en: 'Enter' }],
      [{ keyCode: 'ShiftLeft', class: 'key-mod', en: 'Shift' },
        {
          keyCode: 'KeyZ', class: 'key-char', en: ['z', 'Z', 'Z', 'z'], ru: ['я', 'Я', 'Я', 'я'],
        },
        {
          keyCode: 'KeyX', class: 'key-char', en: ['x', 'X', 'X', 'x'], ru: ['ч', 'Ч', 'Ч', 'ч'],
        },
        {
          keyCode: 'KeyC', class: 'key-char', en: ['c', 'C', 'C', 'c'], ru: ['с', 'С', 'С', 'с'],
        },
        {
          keyCode: 'KeyV', class: 'key-char', en: ['v', 'V', 'V', 'v'], ru: ['м', 'М', 'М', 'м'],
        },
        {
          keyCode: 'KeyB', class: 'key-char', en: ['b', 'B', 'B', 'b'], ru: ['и', 'И', 'И', 'и'],
        },
        {
          keyCode: 'KeyN', class: 'key-char', en: ['n', 'N', 'N', 'n'], ru: ['т', 'Т', 'Т', 'т'],
        },
        {
          keyCode: 'KeyM', class: 'key-char', en: ['m', 'M', 'M', 'm'], ru: ['ь', 'Ь', 'Ь', 'ь'],
        },
        {
          keyCode: 'Comma', class: 'key-char', en: [',', '<', ',', '<'], ru: ['б', 'Б', 'Б', 'б'],
        },
        {
          keyCode: 'Period', class: 'key-char', en: ['.', '>', '.', '>'], ru: ['ю', 'Ю', 'Ю', 'ю'],
        },
        {
          keyCode: 'Slash', class: 'key-char', en: ['/', '?', '/', '?'], ru: ['.', ',', '.', ','],
        },
        {
          keyCode: 'ArrowUp', class: 'key-char', en: ['▲', '▲', '▲', '▲'], ru: ['▲', '▲', '▲', '▲'],
        },
        { keyCode: 'ShiftRight', class: 'key-mod', en: 'Shift' }],
      [{ keyCode: 'ControlLeft', class: 'key-mod', en: 'Ctrl' },
        { keyCode: 'AltLeft', class: 'key-mod', en: 'Alt' },
        { keyCode: 'Space', class: 'key-space', en: ' ' },
        { keyCode: 'AltRight', class: 'key-mod', en: 'Alt' },
        {
          keyCode: 'ArrowLeft', class: 'key-char', en: ['◄', '◄', '◄', '◄'], ru: ['◄', '◄', '◄', '◄'],
        },
        {
          keyCode: 'ArrowDown', class: 'key-char', en: ['▼', '▼', '▼', '▼'], ru: ['▼', '▼', '▼', '▼'],
        },
        {
          keyCode: 'ArrowRight', class: 'key-char', en: ['►', '►', '►', '►'], ru: ['►', '►', '►', '►'],
        },
        { keyCode: 'ControlRight', class: 'key-mod', en: 'Ctrl' }],
    ];

    this.language = language;
    this.isCapsLock = false;
    this.isCtrl = false;
    this.isAlt = false;
    this.isShift = false;
    this.output = document.querySelector('.text');
    this.output.focus();
    this.output.addEventListener('blur', () => { this.output.focus(); });
    this.element = document.createElement('div');
    this.element.classList.add('keyboard');
    for (let i = 0; i < this.layout.length; i += 1) {
      const row = document.createElement('div');
      row.classList.add('row');
      this.element.append(row);
      for (let j = 0; j < this.layout[i].length; j += 1) {
        const key = this.createKey(this.layout[i][j]);
        row.append(key);
      }
    }
    this.element.addEventListener('mousedown', (event) => {
      event.preventDefault();
      const key = event.target.closest('.key');
      this.keyDownHandler(key);
      document.addEventListener('mouseup', () => {
        this.keyUpHandler(key);
      }, { once: true });
    });

    document.addEventListener('keydown', (event) => {
      event.preventDefault();
      const key = document.querySelector(`.${event.code}`);
      this.keyDownHandler(key);
      document.addEventListener('keyup', () => {
        this.keyUpHandler(key);
      }, { once: true });
    });
  }

  keyUpHandler(key) {
    if (key.classList.contains('ControlRight') || key.classList.contains('ControlLeft')) {
      this.isCtrl = false;
    }
    if (key.classList.contains('AltRight') || key.classList.contains('AltLeft')) {
      this.isAlt = false;
    }
    const charKeys = document.querySelectorAll('.key-char');
    if (key.classList.contains('ShiftLeft') || key.classList.contains('ShiftRight')) {
      this.isShift = false;
      charKeys.forEach((charKey) => {
        let activeKeys = charKey.querySelectorAll('.active-key');
        activeKeys.forEach((activeKey) => {
          activeKey.classList.toggle('hidden');
          activeKey.classList.toggle('active-key');
        });
        activeKeys = (this.isCapsLock ? charKey.querySelectorAll('.char-capsed') : charKey.querySelectorAll('.char-normal'));
        activeKeys.forEach((activeKey) => {
          activeKey.classList.toggle('hidden');
          activeKey.classList.toggle('active-key');
        });
      });
    }
  }

  keyDownHandler(key) {
    if (!key) return;
    if (key.classList.contains('key-char')) this.output.setRangeText(key.querySelector('.active-lang .active-key').innerText, this.output.selectionStart, this.output.selectionStart, 'end');
    if (key.classList.contains('key-space')) this.output.setRangeText(' ', this.output.selectionStart, this.output.selectionStart, 'end');
    if (key.classList.contains('Enter')) this.output.setRangeText('\n', this.output.selectionStart, this.output.selectionStart, 'end');
    if (key.classList.contains('Tab')) this.output.setRangeText('\t', this.output.selectionStart, this.output.selectionStart, 'end');
    if (key.classList.contains('Backspace')) this.output.setRangeText('', this.output.selectionStart - 1, this.output.selectionStart, 'end');
    if (key.classList.contains('Delete')) this.output.setRangeText('', this.output.selectionStart, this.output.selectionStart + 1, 'end');
    const charKeys = document.querySelectorAll('.key-char');
    if (key.classList.contains('CapsLock')) {
      this.isCapsLock = !this.isCapsLock;
      charKeys.forEach((charKey) => {
        let activeKeys = charKey.querySelectorAll('.active-key');
        activeKeys.forEach((activeKey) => {
          activeKey.classList.toggle('hidden');
          activeKey.classList.toggle('active-key');
        });
        if (this.isCapsLock) {
          activeKeys = (this.isShift ? charKey.querySelectorAll('.char-shiftcapsed') : charKey.querySelectorAll('.char-capsed'));
        } else {
          activeKeys = (this.isShift ? charKey.querySelectorAll('.char-shifted') : charKey.querySelectorAll('.char-normal'));
        }
        activeKeys.forEach((activeKey) => {
          activeKey.classList.toggle('hidden');
          activeKey.classList.toggle('active-key');
        });
      });
    }
    if (key.classList.contains('ShiftLeft') || key.classList.contains('ShiftRight')) {
      this.isShift = true;
      charKeys.forEach((charKey) => {
        let activeKeys = charKey.querySelectorAll('.active-key');
        activeKeys.forEach((activeKey) => {
          activeKey.classList.toggle('hidden');
          activeKey.classList.toggle('active-key');
        });
        activeKeys = (this.isCapsLock ? charKey.querySelectorAll('.char-shiftcapsed') : charKey.querySelectorAll('.char-shifted'));
        activeKeys.forEach((activeKey) => {
          activeKey.classList.toggle('hidden');
          activeKey.classList.toggle('active-key');
        });
      });
    }
    if (key.classList.contains('ControlRight') || key.classList.contains('ControlLeft')) {
      this.isCtrl = true;
      if (this.isAlt) this.changeLang();
    }
    if (key.classList.contains('AltRight') || key.classList.contains('AltLeft')) {
      this.isAlt = true;
      if (this.isCtrl) this.changeLang();
    }
  }

  changeLang() {
    const keysEn = document.querySelectorAll('.en');
    const keysRu = document.querySelectorAll('.ru');
    switch (this.language) {
      case 'ru':
        this.language = 'en';
        break;
      case 'en':
        this.language = 'ru';
        break;
      default: break;
    }
    keysRu.forEach((elem) => {
      elem.classList.toggle('active-lang');
      elem.classList.toggle('hidden');
    });
    keysEn.forEach((elem) => {
      elem.classList.toggle('active-lang');
      elem.classList.toggle('hidden');
    });
  }

  createKey(keyData) {
    const key = document.createElement('div');
    key.classList.add(keyData.keyCode, keyData.class, 'key');
    if (keyData.class === 'key-mod' || keyData.class === 'key-space') {
      key.innerText = keyData.en;
      return key;
    }

    const en = document.createElement('div');
    en.classList.add('en');
    if (this.language === 'en') {
      en.classList.add('active-lang');
    } else {
      en.classList.add('hidden');
    }
    for (let i = 0; i < keyData.en.length; i += 1) {
      const label = document.createElement('div');
      label.innerText = keyData.en[i];
      if (i === 0) {
        label.classList.add('active-key');
      } else {
        label.classList.add('hidden');
      }
      switch (i) {
        case 0: label.classList.add('char-normal'); break;
        case 1: label.classList.add('char-shifted'); break;
        case 2: label.classList.add('char-capsed'); break;
        case 3: label.classList.add('char-shiftcapsed'); break;
        default: break;
      }
      en.append(label);
    }
    key.append(en);

    const ru = document.createElement('div');
    ru.classList.add('ru');
    if (this.language === 'ru') {
      ru.classList.add('active-lang');
    } else {
      ru.classList.add('hidden');
    }
    for (let i = 0; i < keyData.ru.length; i += 1) {
      const label = document.createElement('div');
      label.innerText = keyData.ru[i];
      if (i === 0) {
        label.classList.add('active-key');
      } else {
        label.classList.add('hidden');
      }
      switch (i) {
        case 0: label.classList.add('char-normal'); break;
        case 1: label.classList.add('char-shifted'); break;
        case 2: label.classList.add('char-capsed'); break;
        case 3: label.classList.add('char-shiftcapsed'); break;
        default: break;
      }
      ru.append(label);
    }
    key.append(ru);
    return key;
  }
}

const createElem = (tag, inner, ...classes) => {
  const elem = document.createElement(tag);
  elem.innerHTML = inner;
  for (let i = 0; i < classes.length; i += 1) {
    elem.classList.add(classes[i]);
  }
  return elem;
};
const language = localStorage.getItem('lang') || 'ru';
const title = createElem('h1', 'Виртуальная клавиатура', 'title');
const pageSubtitleOS = createElem('h4', 'Клавиатура создана в операционной системе Ubuntu', 'subtitle');
const pageSubtitleLang = createElem('h4', 'Для переключения языка комбинация: ctrl + alt', 'subtitle');
const text = createElem('textarea', '', 'text');
const conteiner = createElem('div', '', 'conteiner');
document.body.append(conteiner);
conteiner.append(title);
conteiner.append(text);
const keyboard = new Keyboard(language);
conteiner.append(keyboard.element);
conteiner.append(pageSubtitleOS);
conteiner.append(pageSubtitleLang);
