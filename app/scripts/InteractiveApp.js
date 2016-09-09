const React = require('react');

// <App />
class InteractiveApp extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
    }
  }

  componentDidMount() {
    setTimeout(() => {
      this.renderDialogContent()
    }, 1000);
  }

  renderDialogContent = () => {
    const dialogContainer = this.refs.dialogContainer;
    const sentences = [
      "> Hi there.",
      "> Welcome to my interactive website.",
      "> Let's start by giving it some color. Choose a theme:",
    ];
    let text = "> Hi there.";
    let textArray = text.split('');
    let timeoutValue = 0;
    sentences.forEach(sentence => {
      const dialogDOM = document.createElement('p');
      dialogDOM.classList.add('dialog');
      dialogContainer.appendChild(dialogDOM);
      const dialog = dialogContainer.querySelector('.dialog');
      const sentenceArray = sentence.split('');
      sentenceArray.forEach(letter => {
        setTimeout(() => {
          dialogDOM.innerHTML += letter;
        }, timeoutValue);
        timeoutValue+=50;
      });
    });
    setTimeout(() => {
      const themePicker = document.querySelector('.theme-picker');
      themePicker.classList.add('active');
    }, 5000);
  }

  activateTheme = (theme) => {
    let iteration = 1;
    let className = `${theme}--${iteration}`;
    document.querySelector('.main').classList.add(className);
  }

  triggerThemeChange = (evt) => {
    const chosenTheme = evt.currentTarget.id;
    if (chosenTheme === 'theme1') {
      this.activateTheme(chosenTheme);
    }
  }

  render() {
    return (
      <div className="main">
        <div ref="dialogContainer" className="dialog-container">
        </div>
        <div className="theme-picker">
          <ul>
            <li id="theme1" onClick={this.triggerThemeChange}>Theme 1:
              <div className="theme">
                <div></div><div></div><div></div>
              </div>
            </li>
            <li id="theme2" onClick={this.triggerThemeChange}>Theme 2:
              <div className="theme">
                <div></div><div></div><div></div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    )
  }
};

export default InteractiveApp;
