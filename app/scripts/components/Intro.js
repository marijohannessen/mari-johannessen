const React = require('react');
import Header from './Header';
import SocialMedia from './SocialMedia';

export default class Intro extends React.Component {
  constructor() {
    super();
  }

  moveMountains(evt) {
    const mountain = document.querySelector('.skyline');
    // const mountainRight = document.querySelector('.triangle-right');
    const posX = evt.clientX;
    if (posX > (window.innerWidth / 2)) {
      mountain.classList.add('move');
    } else if (posX < (window.innerWidth / 2)) {
      mountain.classList.remove('move');
    }
  }

  render() {
    let prevX = 0;

    return (
      <div className="intro" onMouseMove={this.moveMountains}>
        <h1>Hello there.</h1>
        <p>My name is Mari Johannessen, and I am a <span class="bold">Front End Developer</span> based in Austin, TX with a passion for great design, creative user interactions and writing smart, organized code.</p>
        <p>I also like to <a href="http://www.codepen.io/marijohannessen">play around with Codepen</a>, <a href="http://www.github.com/marijohannessen">learn new skills</a> and <a href="http://marijohannessen.github.io">blog</a>.</p>
        {/*<div className="triangle"></div>
        <div className="triangle-right"></div>*/}
        <div className="ill">
          <svg className="building" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 86.135 414.644">
            <path d="M73.62 291.402c-.408-1.276-.77-3.398-.77-4.76.005-63.052.132-126.105.048-189.157-.003-2.365-1.91-4.733-2.952-7.09-.8-1.808-2.325-3.594-2.344-5.402-.18-17.11-.056-34.22-.17-51.33-.013-2.104-.212-5.034-1.532-6.132-3.074-2.558-3.708-5.79-2.795-8.852 2.91-9.755-6.42-12.492-10.048-18.456C52.9-.034 52.16.01 51.69.01 42.374-.003 33.06 0 23.745 0c-.942 2.55-2.258 4.303-3.952 5.533-2.887 2.097-4.772 4.498-4.554 8.278.155 2.685.162 5.397-.05 8.074-.08 1.035-.7 2.565-1.496 2.914-4.085 1.794-4.667 5.08-4.648 8.987.083 16.952.078 33.905-.018 50.857-.01 1.53-.6 4.198-1.41 4.4-5.558 1.395-5.803 5.393-5.796 9.945.086 60.996.118 121.992.126 182.987 0 2.79-.35 5.578-.55 8.547H0c.024 3.095.293 6.2 1.245 9.532.382 1.685.744 3.37 1.09 5.053-.132-4.698-.367-9.384-.757-14.053.39 4.67.624 9.355.757 14.053 7.575 36.87 6.725 73.27 4.21 109.54h71.86c3.366-4.165 5.637-9.305 6.173-13.592 5.982-36.884-6.916-72.774-10.96-109.65z"/>
          </svg>
          <svg className="skyline" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1421.028 414.644">
            <path d="M1399.425 305.32v20.29h-13.54v-13.28l-4.62-.764c0-3.57.11-6.88-.022-10.178-.367-9.06-.837-18.117-1.26-27.05h-13.586l-.47 7.184-4.118-.308-.57-5.42h-26.55v-14.96c-4.406.805-4.808-2.023-4.804-5.79-9.064 2.402-16.85-1.292-25.06-3.51-.208-2.722-.42-5.518-.632-8.315-.505-.005-1.01-.01-1.516-.012-.27 2.932-.543 5.863-.814 8.79l-15.972 4.843-.654 3.467-4.726.898v50.3h-16.224V237.46l-8.835-.495-.61-6.36h-36.682c-.202 2.32-.377 4.306-.596 6.81H1198.9v34.888h-34.378c0 8.61.08 16.784-.053 24.955-.037 2.2 1.598 5.548-2.535 5.912-3.08.27-6.203.053-9.322.053-.164-1.214-.32-1.828-.32-2.44.024-18.996.14-37.992-.005-56.986-.016-2.137-1.492-4.264-2.29-6.395l-1.794.23 1.607-6.058-3.13-.74c-1.135-3-2.148-5.25-2.817-7.597-.454-1.593-1.22-4.168-.485-4.858 5.453-5.13-.263-7.02-2.794-9.078-4.698-3.82-7.002 1.735-10.11 3.605-.467.28.692 3.02.85 4.644.186 1.9.463 3.908.04 5.715-.582 2.5-1.78 4.858-2.924 7.818l-2.764.43c.4 2.422.766 4.65 1.157 7.03l-5.38.598v63.797h-16.476v-37.47h-16.305c.03-16.692.062-33.384.06-50.076 0-1.188-.208-3.25-.77-3.42-3.17-.957-2.227-3.406-2.242-5.405-.068-8.855-.03-17.71-.03-26.503l-4.46-1.136-.406-7.37-4.493-.5c-1.19-4.89-2.36-9.682-3.557-14.6l-3.752 2.35-5.398-22.092c-.9 1.427-1.448 2.3-2.073 3.293l-3.648-5.778-3.108 6.322-2.233-5.63c-1.005 1.397-1.747 2.43-2.666 3.704l-3.462-5.524-8.8 24.738-2.676-1.34c-2.626 7.647-5.18 15.09-7.792 22.69-1.236.256-2.704.558-4.557.94v31.012c-2.274.293-4.106.53-6.297.81v53.515h-7.686v-40.97c-2.55 0-4.573.06-6.59-.02-1.544-.06-4.39-.16-4.423-.475-.474-4.538-4.44-2.458-6.546-3.45-.33-1.687-.62-3.15-.714-3.636-5.116-1.403-9.55-2.375-13.814-3.84-7.463-2.568-14.757-5.64-22.265-8.06-2.26-.727-5.206-.598-7.478.185-10.934 3.77-20.754 10.745-32.846 11.008l-.536 4.275c-2.593.33-6.622.09-6.904 1.004-1.39 4.506-4.727 2.74-7.368 2.967-2.45.21-4.93.045-7.85.045v40.967h-11.99c-.004-.137-.005-.274-.01-.412-.06-1.53-1.173-3.96-2.34-4.345-5.74-1.896-7.217-5.727-6.49-11.266.366-2.804-.33-5.762.144-8.533 1.014-5.946-1.396-9.276-7.074-10.51-3.237-.702-4.096-2.63-3.965-5.823.254-6.168.234-12.362-.043-18.528-.067-1.486-1.375-3.97-2.468-4.186-8.09-1.588-10.18-6.606-8.868-13.997.19-1.075.026-2.213.028-3.322.013-7.87.01-7.864-7.467-9.697-1.84-.45-3.718-.817-5.492-1.46-11.382-4.13-22.717-4.198-34.153-.106-4.266 1.527-10.39 1.233-12.625 4.122-2.262 2.923-1.284 8.817-.777 13.302.665 5.888-1.203 9.253-7.124 10.325-3.597.652-4.55 3-4.372 6.553.3 6.005.216 12.042-.012 18.054-.053 1.41-1.14 3.832-2.063 3.992-8.812 1.533-9.556 7.483-8.685 14.66.303 2.497-.234 5.103.113 7.59.574 4.106-.9 6.693-4.853 7.783-3.385.933-4.14 3.176-3.97 6.43.245 4.74-.33 9.544.174 14.243.523 4.86-1.115 8.542-5.08 10.715-2.366 1.297-5.51 1.546-8.27 1.432-.558-.023-1.376-3.794-1.376-5.838.006-63.053.133-126.106.05-189.158-.004-2.365-1.91-4.733-2.953-7.09-.8-1.808-2.325-3.594-2.344-5.402-.18-17.11-.056-34.22-.17-51.33-.013-2.104-.212-5.034-1.532-6.132-3.073-2.56-3.707-5.79-2.794-8.853 2.91-9.756-6.42-12.493-10.048-18.457-.156-.256-.898-.212-1.368-.212-9.314-.013-18.63-.01-27.944-.01-.942 2.55-2.258 4.303-3.952 5.533-2.887 2.097-4.772 4.498-4.554 8.278.155 2.685.162 5.397-.05 8.074-.08 1.035-.7 2.565-1.496 2.914-4.085 1.794-4.667 5.08-4.648 8.987.083 16.952.077 33.905-.02 50.857-.008 1.53-.6 4.198-1.408 4.4-5.56 1.395-5.804 5.393-5.797 9.945.087 60.996.12 121.992.127 182.987 0 2.79-.35 5.578-.55 8.547h-10.06v-93.46c-2.882-.267-5.046-.466-7.75-.715v-17.173c-2.697-.2-4.838-.36-7.466-.554v-19.1c-6.758 1.887-10.116-1.024-12.236-6.696-1.63-4.364-4.07-8.427-6.552-13.44-2.596 5.202-4.818 9.683-7.068 14.15-1.812 3.6-2.877 8.175-9.16 5.99v19.122l-7.01.582V196.4c-2.71.216-4.865.39-7.513.602v126.184h-9.824v-78.833h-19.318c-.21-2.556-.377-4.562-.56-6.783h-35.632l-.68 6.514-6.948.627v34.948h-5.685l-.697-6.257H494.4l-.717 6.374-7.196.674v12.378h-12.215v-25.543h-54.366v15.5h-14.434v20.677h-43.028v22.683H93.142v32.908H0v55.592h1421.027V305.318c-7.193.002-14.078.002-21.603.002z"/>
          </svg>
        </div>
        <svg className="cloud cloud--first" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 267.488 64.523">
          <path d="M12.797 64.523h238.167c.087 0 3.423-.23 3.507-.25 1.436-.33 13.624-3.328 12.994-11.022-.602-7.356-8.282-9.598-14.676-9.962-1.07-.06-1.92-.855-1.95-1.86-.106-3.603-1.344-11.347-10.04-11.347-5.78 0-8.614 1.467-10 2.904-.61.63-1.705.37-1.897-.46-1.37-5.943-5.836-18.098-19.436-18.098-18 0-19.472 16.625-23.23 15.258-4.395-1.6-6.77-30.288-26.77-29.662-13.526.424-20.65 10.013-23.843 16.177-.973 1.88-3.763 2.022-4.928.24C126.667 10.287 118.257.438 105.464.015c-12.89-.427-20.057 9.294-23.26 15.352-.872 1.652-3.323 1.755-4.39.208-2.89-4.185-8.805-9.335-19.54-6.11C48.39 12.43 46.45 20.907 46.338 26.645c-.03 1.563-1.918 2.428-3.252 1.495-2.43-1.698-6.18-3.02-11.622-1.816-7.286 1.61-9.337 7.103-9.872 10.82-.25 1.73-1.945 2.96-3.772 2.638-4.745-.835-12.915-.84-17.023 7.52-2.303 4.69 0 17.22 12 17.22z" fill="#E6E7E8"/>
        </svg>
        <svg className="cloud cloud--second" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 267.488 64.523">
          <path d="M12.797 64.523h238.167c.087 0 3.423-.23 3.507-.25 1.436-.33 13.624-3.328 12.994-11.022-.602-7.356-8.282-9.598-14.676-9.962-1.07-.06-1.92-.855-1.95-1.86-.106-3.603-1.344-11.347-10.04-11.347-5.78 0-8.614 1.467-10 2.904-.61.63-1.705.37-1.897-.46-1.37-5.943-5.836-18.098-19.436-18.098-18 0-19.472 16.625-23.23 15.258-4.395-1.6-6.77-30.288-26.77-29.662-13.526.424-20.65 10.013-23.843 16.177-.973 1.88-3.763 2.022-4.928.24C126.667 10.287 118.257.438 105.464.015c-12.89-.427-20.057 9.294-23.26 15.352-.872 1.652-3.323 1.755-4.39.208-2.89-4.185-8.805-9.335-19.54-6.11C48.39 12.43 46.45 20.907 46.338 26.645c-.03 1.563-1.918 2.428-3.252 1.495-2.43-1.698-6.18-3.02-11.622-1.816-7.286 1.61-9.337 7.103-9.872 10.82-.25 1.73-1.945 2.96-3.772 2.638-4.745-.835-12.915-.84-17.023 7.52-2.303 4.69 0 17.22 12 17.22z" fill="#E6E7E8"/>
        </svg>
        <svg className="cloud cloud--third" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 267.488 64.523">
          <path d="M12.797 64.523h238.167c.087 0 3.423-.23 3.507-.25 1.436-.33 13.624-3.328 12.994-11.022-.602-7.356-8.282-9.598-14.676-9.962-1.07-.06-1.92-.855-1.95-1.86-.106-3.603-1.344-11.347-10.04-11.347-5.78 0-8.614 1.467-10 2.904-.61.63-1.705.37-1.897-.46-1.37-5.943-5.836-18.098-19.436-18.098-18 0-19.472 16.625-23.23 15.258-4.395-1.6-6.77-30.288-26.77-29.662-13.526.424-20.65 10.013-23.843 16.177-.973 1.88-3.763 2.022-4.928.24C126.667 10.287 118.257.438 105.464.015c-12.89-.427-20.057 9.294-23.26 15.352-.872 1.652-3.323 1.755-4.39.208-2.89-4.185-8.805-9.335-19.54-6.11C48.39 12.43 46.45 20.907 46.338 26.645c-.03 1.563-1.918 2.428-3.252 1.495-2.43-1.698-6.18-3.02-11.622-1.816-7.286 1.61-9.337 7.103-9.872 10.82-.25 1.73-1.945 2.96-3.772 2.638-4.745-.835-12.915-.84-17.023 7.52-2.303 4.69 0 17.22 12 17.22z" fill="#E6E7E8"/>
        </svg>
        <div className="arrow">
          <svg viewBox="0 0 54 54">
            <g>
              <path d="M27 1c14.36 0 26 11.64 26 26S41.36 53 27 53 1 41.36 1 27 12.64 1 27 1z"/>
              <path d="M27 54C12.112 54 0 41.888 0 27S12.112 0 27 0s27 12.112 27 27-12.112 27-27 27zm0-52C13.215 2 2 13.215 2 27s11.215 25 25 25 25-11.215 25-25S40.785 2 27 2z"/>
            </g>
            <path d="M27 40.5c-.552 0-1-.447-1-1v-26c0-.553.448-1 1-1s1 .447 1 1v26c0 .553-.448 1-1 1z" fill="#000"/>
            <path fill="#000" d="M27 41.914L16.293 31.207l1.414-1.414L27 39.086l9.293-9.293 1.414 1.414"/>
          </svg>
        </div>
      </div>
    )
  }
};